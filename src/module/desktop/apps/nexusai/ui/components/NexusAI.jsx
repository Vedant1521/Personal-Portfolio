import React, { useState, useEffect, useRef } from "react";
import windowWrapper from "@hoc/windowWrapper";
import WindowControls from "@components/WindowControls";
import { Play, RotateCcw, Cpu, ShieldCheck, Database, FileText, Code2, Coins, ArrowRightLeft, Layers } from "lucide-react";

const TASKS = [
  {
    id: "task-checkout",
    title: "Generate Secure Checkout Form",
    prompt: "Write a React component for a secure payment gateway integration with input validation and Razorpay webhook syncing.",
    steps: [
      { agent: "supervisor", title: "Supervisor Router", action: "Analyzing prompt intent", log: "🔍 Task detected: React frontend code generation + billing webhook integration. Routing to [Code Generator Agent]." },
      { agent: "code", title: "Code Generator", action: "Writing React form component", log: "💻 Scaffolding React + Tailwind CSS form. Generating fields for card number, expiry, CVV, and owner name. Attaching client-side validations." },
      { agent: "security", title: "Security Agent", action: "Scanning codebase for CVEs", log: "🛡️ Scanning code for XSS, SQL injection, and CSRF vulnerabilities. Hardening onSubmit payload. Sanitizing user inputs." },
      { agent: "supervisor", title: "Supervisor Router", action: "Validating output", log: "🔍 Reviewing security audit: PASS. Checking syntax and dependencies. Routing billing action to [Billing Agent]." },
      { agent: "billing", title: "Billing Agent", action: "Processing transaction limits", log: "💳 Calling Razorpay API sandbox. Verifying credit balance. Deducting 2 credits. Propagating updated balance state across microservices." },
      { agent: "compiler", title: "Response Compiler", action: "Packing build files", log: "🚀 Compiling complete sandbox package. Rendering live interactive preview. Build succeeded in 240ms." }
    ],
    outputType: "code",
    outputData: `import React, { useState } from "react";

export default function SecureForm() {
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // XSS Sanitized & Securely Transmitted via HTTPS
    console.log("Processing secure token: ...", card.number.slice(-4));
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3">
      <h4 className="text-white font-bold text-sm">Secure Checkout</h4>
      <input type="text" placeholder="Card Number" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-xs text-white" />
      <div className="flex gap-2">
        <input type="text" placeholder="MM/YY" className="w-1/2 p-2 rounded bg-zinc-800 border border-zinc-700 text-xs text-white" />
        <input type="password" placeholder="CVV" className="w-1/2 p-2 rounded bg-zinc-800 border border-zinc-700 text-xs text-white" />
      </div>
      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold text-xs transition">
        Pay Securely
      </button>
    </form>
  );
}`
  },
  {
    id: "task-rag",
    title: "PDF Vector Search & RAG",
    prompt: "Retrieve relevant context from uploaded file 'risk-model-2026.pdf' and answer: What is the target asset allocation?",
    steps: [
      { agent: "supervisor", title: "Supervisor Router", action: "Parsing input file", log: "🔍 Intent detected: Vector database RAG search. Routing to [RAG Agent]." },
      { agent: "rag", title: "RAG Agent", action: "Chunking PDF document", log: "📚 Reading 'risk-model-2026.pdf'. Chunking document (1000 characters, 200 overlap). Total chunks generated: 28." },
      { agent: "rag", title: "RAG Agent", action: "Querying vector store", log: "Vectorizing query: 'target asset allocation'. Performing top-5 cosine similarity search in Qdrant DB." },
      { agent: "chat", title: "Chat Agent", action: "Synthesizing answer", log: "🧠 Compiling top-3 retrieved text blocks. Formulating natural language summary based strictly on loaded context." },
      { agent: "billing", title: "Billing Agent", action: "Validating quota usage", log: "💳 Deducting RAG API cost (1.5 credits). Updating vector database cache. Balance synchronized." },
      { agent: "compiler", title: "Response Compiler", action: "Structuring output payload", log: "🚀 Response constructed with original reference chunks. Ready for client output." }
    ],
    outputType: "text",
    outputData: "Based on 'risk-model-2026.pdf' (Section 4.2), the target asset allocation is:\n\n• 45% Large Cap Equities\n• 30% Fixed Income (Bonds)\n• 15% Quantitative Volatility Strategies (QVS)\n• 10% Cash Equivalents\n\nReference: Risk-Based Asset Allocation Report 2026 (Page 14)"
  },
  {
    id: "task-anomaly",
    title: "Analyze Server Performance Logs",
    prompt: "Scan server performance logs for cpu load spikes and detect intrusion signatures.",
    steps: [
      { agent: "supervisor", title: "Supervisor Router", action: "Routing logs to security engine", log: "🔍 Intent: Infrastructure diagnostics & threat mitigation. Routing to [Security Agent]." },
      { agent: "security", title: "Security Agent", action: "Detecting malicious patterns", log: "🛡️ Scanning 428 syslog records. Alert: Detected 15 failed SSH attempts from IP 185.190.140.2 in under 1 minute." },
      { agent: "auth", title: "Auth Agent", action: "Verifying system permissions", log: "🔑 Restricting target server access. Invalidating current session tokens for security purposes." },
      { agent: "supervisor", title: "Supervisor Router", action: "Flagging intrusion", log: "🔍 IP 185.190.140.2 flagged as HIGH threat. Triggering auto-block rule in AWS Security Group." },
      { agent: "billing", title: "Billing Agent", action: "Recording log session", log: "💳 Auditing diagnostic call. Cost: 0 credits (Administrative security scan exempted)." },
      { agent: "compiler", title: "Response Compiler", action: "Structuring alert digest", log: "🚀 Auto-mitigation report compiled. Threat status: Blocked. Server CPU normalized to 14%." }
    ],
    outputType: "console",
    outputData: `[SYSTEM ALERT - MITIGATION SUCCESSFUL]
- THREAT VECTOR DETECTED: SSH Brute Force
- SOURCE IP: 185.190.140.2 (Blocked via security group rules)
- TIMESTAMP: 2026-07-20 19:01:53
- REMEDIAL ACTIONS: Rotated administrator SSH keys, blocked subnet access.`
  }
];

const AGENTS = {
  supervisor: { label: "Supervisor", icon: Cpu, color: "from-rose-500 to-red-600", x: 250, y: 150 },
  auth: { label: "Auth Agent", icon: Layers, color: "from-amber-500 to-orange-600", x: 100, y: 50 },
  chat: { label: "Chat Agent", icon: FileText, color: "from-emerald-500 to-teal-600", x: 400, y: 50 },
  code: { label: "Code Gen", icon: Code2, color: "from-blue-500 to-indigo-600", x: 100, y: 150 },
  security: { label: "Security", icon: ShieldCheck, color: "from-purple-500 to-indigo-600", x: 400, y: 150 },
  billing: { label: "Billing", icon: Coins, color: "from-yellow-500 to-amber-600", x: 100, y: 250 },
  rag: { label: "RAG Search", icon: Database, color: "from-cyan-500 to-blue-600", x: 400, y: 250 },
  compiler: { label: "Compiler", icon: ArrowRightLeft, color: "from-pink-500 to-rose-600", x: 250, y: 250 }
};

const NexusAI = () => {
  const [selectedTask, setSelectedTask] = useState(TASKS[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [executionLogs, setExecutionLogs] = useState([]);
  const [activeAgent, setActiveAgent] = useState(null);
  const [showOutput, setShowOutput] = useState(false);

  const logEndRef = useRef(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [executionLogs]);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setExecutionLogs([]);
    setShowOutput(false);
    setActiveAgent(selectedTask.steps[0].agent);
    setExecutionLogs([selectedTask.steps[0]]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setExecutionLogs([]);
    setActiveAgent(null);
    setShowOutput(false);
  };

  useEffect(() => {
    if (!isRunning || currentStepIndex === -1) return;

    if (currentStepIndex >= selectedTask.steps.length - 1) {
      const timer = setTimeout(() => {
        setIsRunning(false);
        setActiveAgent(null);
        setShowOutput(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    const nextIndex = currentStepIndex + 1;
    const currentStep = selectedTask.steps[nextIndex];
    const timer = setTimeout(() => {
      setCurrentStepIndex(nextIndex);
      setActiveAgent(currentStep.agent);
      setExecutionLogs((prev) => [...prev, currentStep]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isRunning, currentStepIndex, selectedTask]);

  return (
    <div className="flex flex-col h-full w-full bg-[#1e1e24] rounded-xl overflow-hidden shadow-2xl border border-zinc-800 text-zinc-300 font-sans">
      {/* OS Header Bar */}
      <div id="window-header" className="shrink-0 bg-[#16161a] border-b border-zinc-800/80 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <WindowControls target="nexusai" />
          <span className="text-[11px] font-semibold text-zinc-500 tracking-wider ml-1 uppercase">NexusAI Orchestrator v1.0</span>
        </div>

        {/* Task Selection Control */}
        <div className="flex items-center gap-2">
          <div className="flex bg-[#27272a] rounded-lg p-0.5 border border-zinc-800 text-[10px] font-bold text-zinc-400">
            {TASKS.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTask(t);
                  handleReset();
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                disabled={isRunning}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer disabled:opacity-40 ${
                  selectedTask.id === t.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>

          <button
            onClick={handleStart}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold rounded shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <Play size={11} fill="white" />
            Run Flow
          </button>
          <button
            onClick={handleReset}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="p-1 hover:bg-zinc-800 border border-zinc-700/50 text-zinc-400 hover:text-white rounded transition cursor-pointer"
            title="Reset Graph"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Main Orchestrator Dashboard */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Execution Logs Terminal */}
        <div className="w-1/2 border-r border-zinc-800/80 flex flex-col bg-[#16161a] overflow-hidden">
          <div className="px-4 py-2 bg-zinc-900/60 border-b border-zinc-800/80 flex justify-between items-center text-xs">
            <span className="font-semibold text-zinc-400">Agent Logs Terminal</span>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              StateGraph: Active
            </span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-3.5 scrollbar-thin">
            {/* Display Initial Task Brief */}
            <div className="p-3 bg-zinc-900 border border-zinc-800/50 rounded-lg text-zinc-400">
              <span className="text-blue-400 font-bold block mb-1">▶ Prompt Input:</span>
              "{selectedTask.prompt}"
            </div>

            {/* Render dynamically typed logs */}
            {executionLogs.map((log, idx) => (
              <div
                key={idx}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-1"
              >
                <div className="flex items-center justify-between text-[10px] border-b border-zinc-800/40 pb-0.5">
                  <span className="font-bold text-amber-500 uppercase tracking-wider">
                    🤖 {log.title}
                  </span>
                  <span className="text-zinc-600">
                    Step {idx + 1}/{selectedTask.steps.length}
                  </span>
                </div>
                <p className="text-zinc-300 whitespace-pre-wrap">{log.log}</p>
              </div>
            ))}

            {/* Dynamic typing indicator */}
            {isRunning && (
              <div className="flex items-center gap-1 text-[10px] text-zinc-500 animate-pulse">
                <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                <span>agent working...</span>
              </div>
            )}

            {/* Final Rendered Sandbox Output */}
            {showOutput && (
              <div className="p-4 bg-zinc-900 border border-emerald-900/30 rounded-lg animate-in zoom-in-95 duration-300">
                <span className="text-emerald-400 font-bold block mb-2 border-b border-zinc-800 pb-1">
                  ✓ Output Sandbox Execution
                </span>
                {selectedTask.outputType === "code" ? (
                  <pre className="text-blue-300 bg-black/40 p-2.5 rounded text-[10px] max-h-[160px] overflow-y-auto border border-zinc-800/80">
                    {selectedTask.outputData}
                  </pre>
                ) : selectedTask.outputType === "console" ? (
                  <pre className="text-red-400 bg-black/40 p-2.5 rounded text-[10px] border border-zinc-800/80">
                    {selectedTask.outputData}
                  </pre>
                ) : (
                  <p className="text-zinc-300 leading-relaxed text-xs">{selectedTask.outputData}</p>
                )}
              </div>
            )}
            <div ref={logEndRef} />
          </div>
        </div>

        {/* Right Side: Graph Engine Visualizer */}
        <div className="w-1/2 flex flex-col relative bg-zinc-950 overflow-hidden">
          <div className="px-4 py-2 bg-zinc-900/60 border-b border-zinc-800/80 flex justify-between items-center text-xs z-10">
            <span className="font-semibold text-zinc-400">LangGraph Execution Flow Map</span>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              Live Node Grid
            </span>
          </div>

          <div className="flex-1 relative flex items-center justify-center p-6">
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connecting lines to supervisor node (x:250, y:150) */}
              {Object.entries(AGENTS).map(([key, node]) => {
                if (key === "supervisor") return null;
                const pathId = `path-${key}`;
                return (
                  <g key={key}>
                    {/* Background Connection Wire */}
                    <line
                      x1={node.x}
                      y1={node.y}
                      x2={250}
                      y2={150}
                      stroke="#27272a"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />

                    {/* Active Route Pulse Flow Line */}
                    {activeAgent === key && (
                      <path
                        d={`M ${node.x} ${node.y} L 250 150`}
                        stroke="url(#lineGrad)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Node Render Grid */}
            <div className="absolute inset-0 pointer-events-auto">
              {Object.entries(AGENTS).map(([key, node]) => {
                const IconComponent = node.icon;
                const isActive = activeAgent === key;
                return (
                  <div
                    key={key}
                    className={`absolute flex flex-col items-center justify-center p-3 rounded-xl border w-[85px] text-center shadow-lg transition-all duration-500 select-none z-10 ${
                      isActive
                        ? "bg-zinc-900 border-blue-500 scale-110 shadow-blue-500/10"
                        : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700/80 scale-100"
                    }`}
                    style={{
                      left: `calc(${node.x}px - 42px)`,
                      top: `calc(${node.y}px - 35px)`
                    }}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${node.color} flex items-center justify-center shadow-inner relative transition-transform duration-300 ${
                        isActive ? "scale-105 animate-pulse" : ""
                      }`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                      
                      {/* Active Status Beacon */}
                      {isActive && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500"></span>
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold mt-1.5 text-zinc-300 block leading-tight">{node.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NexusAIWindow = windowWrapper(NexusAI, "nexusai");
export default NexusAIWindow;
