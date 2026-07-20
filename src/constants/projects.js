import {
  PROJECT_1_URL,
  PROJECT_1_GITHUB,
  PROJECT_2_URL,
  PROJECT_2_GITHUB,
  PROJECT_3_URL,
  PROJECT_3_GITHUB,
  PROJECT_4_URL,
  PROJECT_4_GITHUB,
} from "./env";

export const projects = [
  {
    id: 1,
    title: "Botlock",
    description:
      "An enforce-at-the-protocol-layer AI agent scraper wall. Gated content that requests USDC micropayments directly via Solana SPL when crawled by bots, utilizing HTTP 402 challenges.",
    image: "/projects/botlock.webp",
    link: PROJECT_1_URL,
    github: PROJECT_1_GITHUB,
  },
  {
    id: 2,
    title: "NexusAI",
    description:
      "A production-grade, distributed multi-agent AI platform orchestrating 8 specialized agents via LangGraph. Backed by 4 microservices, Redis sessions, vector database (Qdrant) for PDF RAG, and Razorpay billing.",
    image: "/projects/nexusai.webp",
    link: PROJECT_2_URL,
    github: PROJECT_2_GITHUB,
  },
  {
    id: 3,
    title: "fetchit",
    description:
      "A full-screen terminal UI (TUI) video downloader built with React and Ink. Supports 2000+ sites (YouTube, Instagram, TikTok, etc.) with resolution selection, estimated file sizes, and parallel downloads.",
    image: "/projects/fetchit.webp",
    link: PROJECT_3_URL,
    github: PROJECT_3_GITHUB,
  },
  {
    id: 4,
    title: "NeverSleep",
    description:
      "A utility web application designed to prevent screen sleep using the Screen Wake Lock API. Features customizable, draggable widgets for a digital clock, Pomodoro timer, battery status, and local to-do lists.",
    image: "/projects/neversleep.webp",
    link: PROJECT_4_URL,
    github: PROJECT_4_GITHUB,
  },
];
