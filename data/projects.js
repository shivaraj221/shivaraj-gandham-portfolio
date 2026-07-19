// Live, deployed products — the "shipped" tier
export const liveProjects = [
  {
    title: "BotBrains",
    tag: "AI Agent Platform",
    desc: "A conversational AI product wired for real-world agentic workflows — live and running in production.",
    url: "https://botbrains.netlify.app/",
    kind: "Live Site",
  },
  {
    title: "Nexevoo",
    tag: "Web Product",
    desc: "A full front-to-back product build shipped to a live domain, from UX to deployment.",
    url: "https://nexevoo.netlify.app/",
    kind: "Live Site",
  },
  {
    title: "SmartLook Beauty Parlours",
    tag: "Business Web App",
    desc: "A booking-and-discovery platform for local beauty businesses, built and deployed end-to-end.",
    url: "https://smartlookbeautyparlours.netlify.app/",
    kind: "Live Site",
  },
  {
    title: "Studio Elite Pro Max",
    tag: "Generative Media",
    desc: "A Hugging Face Space for AI-powered photo transformation — model, inference, and UI in one deployed Space.",
    url: "https://huggingface.co/spaces/Shivaraj22/Photomax",
    kind: "HF Space",
  },
  {
    title: "Diffusion Model Playground",
    tag: "Generative Media",
    desc: "An interactive diffusion image-generation Space for exploring prompt-to-image synthesis.",
    url: "https://huggingface.co/spaces/Shivaraj22/Diffusion_Model1",
    kind: "HF Space",
  },
];

// GitHub repos — the "engineering breadth" tier
export const githubProjects = [
  {
    title: "Sarisari Store",
    repo: "shivaraj221/sarisaristore",
    category: "Full-Stack",
    desc: "E-commerce style storefront application.",
  },
  {
    title: "Stock Analysis Pipeline",
    repo: "shivaraj221/stock-analysis-pipeline",
    category: "Data / ML",
    desc: "Automated pipeline for ingesting and analyzing stock market data.",
  },
  {
    title: "Photo Automation",
    repo: "shivaraj221/photo_automation",
    category: "Automation",
    desc: "Automated image processing and organization workflows.",
  },
  {
    title: "RAG NEX",
    repo: "shivaraj221/RAG_NEX",
    category: "GenAI / RAG",
    desc: "Retrieval-Augmented Generation system for grounded LLM question answering.",
  },
  {
    title: "Weather App",
    repo: "shivaraj221/Weather",
    category: "Full-Stack",
    desc: "Real-time weather lookup application with a clean API-driven UI.",
  },
  {
    title: "Real Estate Agent ChatBot",
    repo: "shivaraj221/Real_Estate_Agent_ChatBot",
    category: "GenAI / Agents",
    desc: "Conversational agent that assists users through real-estate queries.",
  },
  {
    title: "CrewAI YouTube Subtitles Reader",
    repo: "shivaraj221/CREWAI_Youtube_subtitles_reader",
    category: "GenAI / Agents",
    desc: "Multi-agent CrewAI pipeline that reads and reasons over YouTube subtitles.",
  },
  {
    title: "SmartLook Beauty Parlour (React)",
    repo: "shivaraj221/Reactjs_Smartlookbeautyparlour",
    category: "Full-Stack",
    desc: "React.js front end powering the SmartLook Beauty Parlours product.",
  },
  {
    title: "Image Generator",
    repo: "shivaraj221/ImageGenerator",
    category: "Generative Media",
    desc: "Text-to-image generation tool built on generative model APIs.",
  },
  {
    title: "Lambda Chatbot",
    repo: "shivaraj221/Lambda_Chatbot",
    category: "Cloud / Serverless",
    desc: "Serverless chatbot deployed on AWS Lambda.",
  },
  {
    title: "FaceSwap",
    repo: "shivaraj221/FaceSwap",
    category: "Computer Vision",
    desc: "Face-swapping computer vision pipeline using deep learning models.",
  },
  {
    title: "Image Generation — Diffusion",
    repo: "shivaraj221/Image_generation_Diffusion",
    category: "Generative Media",
    desc: "Diffusion-model based image generation experiments and pipeline.",
  },
  {
    title: "CNN Image Classification",
    repo: "shivaraj221/CNN_IMG_Classification",
    category: "Computer Vision",
    desc: "Convolutional neural network for image classification tasks.",
  },
  {
    title: "Resume OCR Skill Analyzer",
    repo: "shivaraj221/Resume-OCR-Skill-Analyzer",
    category: "GenAI / NLP",
    desc: "OCR-driven resume parser that extracts and analyzes candidate skills.",
  },
  {
    title: "Resume Scorer Skill Analyzer",
    repo: "shivaraj221/Resume-Scorer-Skill-Analyzer",
    category: "GenAI / NLP",
    desc: "AI-powered resume scoring system matching skills against job requirements.",
  },
  {
    title: "Web Development",
    repo: "shivaraj221/Web-Development",
    category: "Full-Stack",
    desc: "Web development project and front-end experiments.",
  },
  {
    title: "Machine Learning",
    repo: "shivaraj221/Machine_Learning",
    category: "Data / ML",
    desc: "Collection of applied machine learning models and notebooks.",
  },
  {
    title: "Web Development III",
    repo: "shivaraj221/Web-Development3",
    category: "Full-Stack",
    desc: "Web development project — iteration three.",
  },
  {
    title: "News",
    repo: "shivaraj221/news",
    category: "Full-Stack",
    desc: "News aggregation and reading application.",
  },
  {
    title: "Facelock",
    repo: "shivaraj221/Facelock",
    category: "Computer Vision",
    desc: "Facial-recognition based security/authentication system.",
  },
  {
    title: "Chatbot Lambda",
    repo: "shivaraj221/ChatbotLambda",
    category: "Cloud / Serverless",
    desc: "Serverless chatbot infrastructure on AWS Lambda.",
  },
  {
    title: "Web Development IV",
    repo: "shivaraj221/Web-Development4",
    category: "Full-Stack",
    desc: "Web development project — iteration four.",
  },
  {
    title: "Web Development II",
    repo: "shivaraj221/Web-Development2",
    category: "Full-Stack",
    desc: "Web development project — iteration two.",
  },
  {
    title: "FAAP",
    repo: "Oynex/FAAP",
    category: "Collaborative",
    desc: "Collaborative applied AI/automation project.",
  },
  {
    title: "Python Trading App",
    repo: "shivaraj221/Python_Trading_App",
    category: "Data / ML",
    desc: "Python-based application for automated trading strategy analysis.",
  },
];

// Flagship enterprise builds — from professional experience
export const flagshipProjects = [
  {
    title: "FinSight",
    subtitle: "AI-Powered Financial Intelligence Platform",
    desc: "Enterprise invoice processing & financial document automation. Multi-agent workflow for AR/AP, risk detection, and closed-loop validation, with SQL-RAG on AWS Bedrock (Llama 3 70B) for zero-hallucination financial querying over PostgreSQL.",
    stack: ["FastAPI", "React.js", "PostgreSQL", "SQL-RAG", "AWS Bedrock", "Redis", "XGBoost"],
    accent: "signal",
  },
  {
    title: "ForgeRAG",
    subtitle: "Enterprise Retrieval-Augmented Generation Platform",
    desc: "Production-grade knowledge intelligence system with multilingual semantic search across structured and unstructured documents, Map-Reduce retrieval, conversation memory, and a Next.js frontend with real-time chat.",
    stack: ["Next.js", "FastAPI", "Qdrant", "AWS Textract", "Gemini API", "LangGraph"],
    accent: "reason",
  },
  {
    title: "AXIS",
    subtitle: "AI-Powered News Intelligence Platform",
    desc: "Real-time global news monitoring with a 3-tier semantic event-deduplication funnel (HNSW vector search, NER Jaccard pre-filter, cross-encoder corroboration) and vectorized NumPy matching for 50x faster cross-source clustering.",
    stack: ["FastAPI", "LangGraph", "Qdrant", "spaCy", "BGE Embeddings", "Next.js"],
    accent: "signal",
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(githubProjects.map((p) => p.category))),
];
