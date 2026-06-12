import React from "react";

const AIChatMockup = () => {
  return (
    <div className="group relative w-full max-w-[360px] overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/50 bg-white/70 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(139,92,246,0.18)]">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-30"></div>

            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              ✦
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Orbit AI
            </h3>

            <p className="text-xs text-emerald-500">
              Online
            </p>
          </div>

        </div>

        <div className="rounded-full bg-purple-100 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-purple-700">
          Live
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="mt-6 sm:mt-8 flex flex-col gap-4">

        {/* USER */}
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-gray-900 px-3 sm:px-4 py-3 text-xs sm:text-sm text-white shadow-lg">
          Schedule a meeting tomorrow at 9 AM.
        </div>

        {/* AI */}
        <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50 px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">
          Meeting successfully scheduled for tomorrow at 9:00 AM.
        </div>

        {/* TYPING */}
        <div className="flex items-center gap-1 pl-2 pt-2">
          <div className="h-2 w-2 rounded-full bg-purple-400 animate-bounce"></div>
          <div className="h-2 w-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.15s]"></div>
          <div className="h-2 w-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.3s]"></div>
        </div>

      </div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-80px] left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[80px]" />

    </div>
  );
};

export default AIChatMockup;