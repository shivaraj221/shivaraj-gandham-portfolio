import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Flagship from "../components/Flagship";
import LiveProjects from "../components/LiveProjects";
import GithubGrid from "../components/GithubGrid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shivaraj Gandham — AI/ML Engineer</title>
        <meta
          name="description"
          content="Shivaraj Gandham — AI/ML Engineer building Agentic AI, RAG, and LLM-powered enterprise systems."
        />
      </Head>

      <Navbar />
      <main style={{ background: "#0A0A0F" }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Flagship />
        <LiveProjects />
        <GithubGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
