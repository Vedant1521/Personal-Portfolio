import React from "react";

const AboutPortfolioModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/20 backdrop-blur-xxs select-none font-sans"
      onClick={onClose}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div
        className="w-[300px] h-[340px] bg-white border border-zinc-200/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center p-6 relative text-zinc-800 dark:text-zinc-800 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Dot */}
        <div className="absolute top-4 left-4">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer active:opacity-75"
            title="Close"
          />
        </div>

        {/* Content Layout */}
        <div className="flex-1 flex flex-col items-center justify-center mt-4 w-full text-center">
          {/* Avatar with glowing macOS ring */}
          <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 shadow-md mb-3 shrink-0">
            <img
              src="/images/profile.jpg?v=3"
              alt="Vedant Gupta"
              className="w-18 h-18 rounded-full object-cover border-2 border-white select-none pointer-events-none"
            />
          </div>

          <h1 className="text-[17px] font-extrabold text-zinc-900 dark:text-zinc-900 leading-tight">
            Vedant's Portfolio
          </h1>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-bold mt-0.5">
            Version 3.0 (Sequoia Design)
          </p>
          
          <div className="h-[1px] bg-zinc-200 my-3 w-full" />

          {/* Specs List */}
          <div className="text-[11px] space-y-1.5 font-mono w-full px-2">
            <div className="flex justify-between gap-2">
              <span className="text-zinc-400 font-sans">Developer:</span>
              <span className="font-semibold text-zinc-700 truncate">Vedant Gupta</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-zinc-400 font-sans">Graphics:</span>
              <span className="font-semibold text-zinc-700 truncate">React 19 / GSAP</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-zinc-400 font-sans">Serial No:</span>
              <span className="font-semibold text-zinc-700">VEDANT1521M26</span>
            </div>
          </div>
        </div>

        {/* Footer/Copyright */}
        <div className="text-center text-[8.5px] text-zinc-400 leading-tight shrink-0 select-none mt-2">
          <p>© 2026 Vedant Gupta. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPortfolioModal;
