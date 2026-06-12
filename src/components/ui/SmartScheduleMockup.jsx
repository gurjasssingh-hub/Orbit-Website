import React from "react";

const SmartScheduleMockup = () => {
  return (
    <div className="group relative w-full max-w-[360px] overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/50 bg-white/70 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(236,72,153,0.16)]">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs sm:text-sm text-gray-500">
            Smart Schedule
          </p>

          <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">
            Tomorrow
          </h3>
        </div>

        <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg">
          📅
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
        {/* EVENT */}
        <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50 to-indigo-50 p-3 sm:p-4">
          <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-purple-500 animate-pulse" />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Team Meeting
            </p>

            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              9:00 AM — Organized by Orbit
            </p>
          </div>
        </div>

        {/* EVENT */}
        <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-gray-100 bg-white p-3 sm:p-4">
          <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-pink-500" />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Project Review
            </p>

            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              1:30 PM — Design discussion
            </p>
          </div>
        </div>

        {/* EVENT */}
        <div className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-gray-100 bg-white p-3 sm:p-4">
          <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-indigo-500" />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Workout Session
            </p>

            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              6:00 PM — Reminder enabled
            </p>
          </div>
        </div>
      </div>

      {/* AI TAG */}
      <div className="mt-6 sm:mt-8 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 sm:px-4 py-3 text-white shadow-lg">
        <p className="text-xs sm:text-sm font-medium">
          AI optimized your schedule
        </p>

        <span className="text-base sm:text-lg flex-shrink-0">
          ✦
        </span>
      </div>

      {/* GLOW */}
      <div className="absolute bottom-[-100px] right-[-40px] h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] rounded-full bg-pink-500/10 blur-[100px]" />
    </div>
  );
};

export default SmartScheduleMockup;