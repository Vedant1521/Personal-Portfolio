# macOS Developer Portfolio

An interactive, high-fidelity macOS desktop simulation built to showcase my software projects, skills, and background in **Mathematics & Computing** at Delhi Technological University (DTU).

🖥️ **Live Demo:** [portfoliovedantgupta.vercel.app](https://portfoliovedantgupta.vercel.app)

---

## Key Features

- **🖥️ macOS & iOS Simulation:** Resizable, draggable windows, focus window stacking, active menu bar integration, launchpad, custom widgets, and notch controls.
- **🤖 NexusAI Orchestrator App:** Visualizes a multi-agent backend architecture (supervisor, security, code gen, RAG, and billing agents) passing state data along active graph routes.
- **💻 Integrated Dev Environment:** Functional terminal with custom command utilities (`help`, `clear`, `neofetch`), maps search integration, and mock VS Code editor.
- **📞 Communication Center:** Fully interactive FaceTime calls with video preview streams and iMessage mock chats.
- **🌙 System Preferences:** Integrated dark-mode toggles, customizable battery saver dims, sound level settings, and high-fidelity cold-boot/shutdown triggers.

## Tech Stack

- **Core Framework:** [Next.js](https://nextjs.org/) (React 19)
- **Styling:** Vanilla CSS, Tailwind CSS
- **Animations:** [GSAP](https://gsap.com/) (Draggable, timeline choreography)
- **Utilities:** Lucide Icons, react-pdf

## Setup & Local Run

1. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Configure environment:**
   Create a `.env` file based on `.env.example` to set local phone, email, and social profile links.

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

*Designed and developed by [Vedant Gupta](https://github.com/Vedant1521).*
