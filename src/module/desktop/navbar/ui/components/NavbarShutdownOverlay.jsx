import React, { useState, useEffect } from "react";

const NavbarShutdownOverlay = ({ isAsleep, isShuttingDown, setIsAsleep }) => {
  const [isPowerOff, setIsPowerOff] = useState(false);

  useEffect(() => {
    if (isShuttingDown) {
      setIsPowerOff(false);
      const timer = setTimeout(() => {
        setIsPowerOff(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isShuttingDown]);

  return (
    <>
      {isAsleep && (
        <div
          className="fixed inset-0 z-[999999] bg-black cursor-pointer"
          onClick={() => setIsAsleep(false)}
        ></div>
      )}
      {isShuttingDown && (
        <div
          className={`fixed inset-0 bg-black z-[9999999] flex flex-col items-center justify-center select-none ${
            isPowerOff ? "cursor-pointer" : "cursor-none"
          } animate-fade-in`}
          onClick={isPowerOff ? () => window.location.reload() : undefined}
        >
          {!isPowerOff ? (
            <>
              <img
                src="/icons/logo.svg"
                alt="logo"
                className="w-14 h-14 invert opacity-95 animate-pulse mb-8"
              />
              <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </>
          ) : (
            <span className="text-[10px] text-zinc-800 font-mono tracking-widest absolute bottom-8 uppercase animate-pulse">
              Click anywhere to power on
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default NavbarShutdownOverlay;
