import React from "react";

const SettingsAppearancePane = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-4">
        Appearance
      </h3>
      <div className="flex gap-8 mb-6">
        {/* Dark Mode (Active) */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-24 h-16 rounded-md bg-gray-800 border-2 border-blue-500 shadow-sm overflow-hidden flex flex-col transition-all"
          >
            <div className="h-4 bg-[#2c2c2e] border-b border-black"></div>
            <div className="flex-1 bg-[#1e1e1e] p-1">
              <div className="w-full h-full bg-[#2c2c2e] rounded-sm shadow-sm"></div>
            </div>
          </div>
          <span className="text-[12px] font-semibold text-gray-900">
            Dark
          </span>
        </div>
      </div>

      <div className="w-full max-w-[350px] p-3 px-4 bg-gray-100 border border-gray-200/60 rounded-xl flex items-center gap-2.5 text-[12px] text-gray-600 font-medium shadow-sm">
        <svg
          className="w-4 h-4 text-blue-500 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <span>Dark mode is always enabled for this portfolio</span>
      </div>
    </div>
  );
};

export default SettingsAppearancePane;
