import { useEffect, useRef } from "react";

export default function KnowledgeGraph() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId;

    (async () => {
      const THREE = await import("three");

      const w = canvas.offsetWidth || window.innerWidth * 0.55;
      const h = canvas.offsetHeight || window.innerHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.set(0, 0, 7);

      // ── Noise ──────────────────────────────────────────────────
      function hash(x, y, z) {
        return (Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453) % 1;
      }
      function noise3(x, y, z) {
        const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
        const xf = x-xi, yf = y-yi, zf = z-zi;
        const u=xf*xf*(3-2*xf), v=yf*yf*(3-2*yf), ww=zf*zf*(3-2*zf);
        const a=hash(xi,yi,zi),   b=hash(xi+1,yi,zi);
        const c=hash(xi,yi+1,zi), d=hash(xi+1,yi+1,zi);
        const e=hash(xi,yi,zi+1), f=hash(xi+1,yi,zi+1);
        const g=hash(xi,yi+1,zi+1),hh=hash(xi+1,yi+1,zi+1);
        return (a*(1-u)+b*u)*(1-v)*(1-ww)+(c*(1-u)+d*u)*v*(1-ww)+
               (e*(1-u)+f*u)*(1-v)*ww+(g*(1-u)+hh*u)*v*ww;
      }

      // ── Generate base sphere points (golden spiral, even distribution) ──
      const COUNT = 8000;
      const sphereBase = new Float32Array(COUNT * 3); // unit directions
      for (let i = 0; i < COUNT; i++) {
        const phi   = Math.acos(1 - 2 * (i + 0.5) / COUNT);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        sphereBase[i*3]   = Math.sin(phi) * Math.cos(theta);
        sphereBase[i*3+1] = Math.cos(phi);
        sphereBase[i*3+2] = Math.sin(phi) * Math.sin(theta);
      }

      // ── Sphere shape ───────────────────────────────────────────
      function getSpherePos(i, t) {
        const nx = sphereBase[i*3], ny = sphereBase[i*3+1], nz = sphereBase[i*3+2];
        const n = noise3(nx*0.7+t*0.35, ny*0.7+t*0.35, nz*0.7);
        const r = 2.2 + n * 0.55;
        return { x: nx*r, y: ny*r, z: nz*r };
      }

      // ── Brain shape ────────────────────────────────────────────
      // Key: use direction vectors to radially define the brain surface
      function brainRadial(nx, ny, nz) {
        // 1. Base radius
        let r = 1.7;

        // 2. Two distinct lobes: sides bulge out, center is neutral
        //    |nx| = 1 at left/right → add volume there
        r += Math.abs(nx) * 0.75;

        // 3. DEEP interhemispheric fissure (groove from top down to mid)
        //    Only in the top half (ny > -0.3), very narrow at nx≈0
        const vertFactor = Math.max(0, ny + 0.3) / 1.3; // 0 at bottom, 1 at top
        r -= Math.exp(-nx * nx * 28) * vertFactor * 1.5;

        // 4. Lateral fissure (Sylvian) — horizontal groove on each side
        //    Runs along ny≈-0.1 on the sides (|nx|>0.5)
        const lateralBias = Math.max(0, Math.abs(nx) - 0.5) / 0.5;
        r -= Math.exp(-((ny + 0.15) * (ny + 0.15)) * 18) * lateralBias * 0.25;

        // 5. Brain is wider than tall, flat at back
        r *= 1 - nz * nz * 0.28;
        r *= 1 - ny * ny * 0.06;

        // 6. Flatten underside (base of brain)
        if (ny < -0.2) r *= 1 + (ny + 0.2) * 0.25;

        // 7. Front-temporal lobe bump
        const frontLobe = Math.exp(-((nz-0.7)**2)*5) * Math.exp(-((ny+0.3)**2)*6)
                        * Math.exp(-((Math.abs(nx)-0.5)**2)*8) * 0.3;
        r += frontLobe;

        // 8. Gyri (major folds) — medium freq noise
        r += noise3(nx*4.5+10, ny*4.5+20, nz*4.5+30) * 0.30;
        // 9. Sulci (fine folds)
        r += noise3(nx*9+200, ny*9+100, nz*9+150) * 0.11;
        // 10. Micro texture
        r += noise3(nx*16+400, ny*16+300, nz*16) * 0.04;

        return Math.max(0.4, r);
      }

      // Pre-compute brain positions
      const brainPos = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const nx = sphereBase[i*3], ny = sphereBase[i*3+1], nz = sphereBase[i*3+2];
        const r = brainRadial(nx, ny, nz);
        brainPos[i*3]   = nx * r;
        brainPos[i*3+1] = ny * r * 0.80; // brain is ~20% shorter than wide
        brainPos[i*3+2] = nz * r;
      }

      // ── BufferGeometry for particles ───────────────────────────
      const positions = new Float32Array(COUNT * 3);
      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.PointsMaterial({
        color: 0x6ee7f9,
        size: 0.032,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const cloud = new THREE.Points(geom, mat);
      scene.add(cloud);

      // ── Mouse / touch ──────────────────────────────────────────
      let mouseX = 0, mouseY = 0, targetRotX = 0, targetRotY = 0;
      const onMouseMove = (e) => {
        mouseX = (e.clientX / window.innerWidth  - 0.5) * 2.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2.5;
      };
      const onTouchMove = (e) => {
        if (e.touches.length > 0) {
          mouseX = (e.touches[0].clientX / window.innerWidth  - 0.5) * 2.5;
          mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2.5;
        }
      };
      window.addEventListener("mousemove",  onMouseMove);
      window.addEventListener("touchmove",  onTouchMove, { passive: true });

      // ── Morph cycle ────────────────────────────────────────────
      // sphere(6s) → morph(2.5s) → brain(5s) → morph(2.5s) → repeat
      const T_SPHERE=6, T_IN=2.5, T_BRAIN=5, T_OUT=2.5;
      const CYCLE = T_SPHERE + T_IN + T_BRAIN + T_OUT;

      function getMorphT(t) {
        const ph = t % CYCLE;
        if (ph < T_SPHERE)                        return 0;
        if (ph < T_SPHERE + T_IN)                 return (ph - T_SPHERE) / T_IN;
        if (ph < T_SPHERE + T_IN + T_BRAIN)       return 1;
        return 1 - (ph - T_SPHERE - T_IN - T_BRAIN) / T_OUT;
      }
      function ease(x) { return x < 0.5 ? 2*x*x : 1-(-2*x+2)**2/2; }

      const cyanCol   = new THREE.Color(0x6ee7f9);
      const purpleCol = new THREE.Color(0xc084fc);
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t  = clock.getElapsedTime();
        const mt = ease(getMorphT(t));

        for (let i = 0; i < COUNT; i++) {
          const sp = getSpherePos(i, t);
          positions[i*3]   = sp.x + (brainPos[i*3]   - sp.x) * mt;
          positions[i*3+1] = sp.y + (brainPos[i*3+1] - sp.y) * mt;
          positions[i*3+2] = sp.z + (brainPos[i*3+2] - sp.z) * mt;
        }
        geom.attributes.position.needsUpdate = true;

        // Color: cyan → purple
        mat.color.lerpColors(cyanCol, purpleCol, mt);

        // Mouse tilt
        targetRotX += (mouseY - targetRotX) * 0.06;
        targetRotY += (mouseX - targetRotY) * 0.06;
        cloud.rotation.y = t * 0.06 + targetRotY;
        cloud.rotation.x = targetRotX;

        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const nw = canvas.offsetWidth, nh = canvas.offsetHeight;
        if (nw && nh) {
          camera.aspect = nw/nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      };
      window.addEventListener("resize", onResize);

      canvas._cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove",  onMouseMove);
        window.removeEventListener("touchmove",  onTouchMove);
        window.removeEventListener("resize",     onResize);
        renderer.dispose();
      };
    })();

    return () => { if (canvas._cleanup) canvas._cleanup(); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
  );
}
