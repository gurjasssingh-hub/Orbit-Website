import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const VoiceDemo = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] py-16 sm:py-24 lg:py-36">
      {/* BACKGROUND LIGHTING */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] lg:blur-[140px]" />

        <div className="absolute right-[-20%] top-[10%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-fuchsia-400/20 blur-[80px] lg:blur-[120px]" />

        <div className="absolute left-[-20%] bottom-[-10%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] rounded-full bg-blue-400/20 blur-[80px] lg:blur-[120px]" />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-violet-600">
            Voice Interaction
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Speak Naturally.
            <br />
            Orbit Handles the Rest.
          </h2>

          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            A next-generation voice assistant designed to understand,
            respond, and execute instantly with human-like interaction.
          </p>
        </motion.div>

        {/* MAIN MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-5xl"
        >
          {/* OUTER GLOW */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] lg:rounded-[42px] bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 blur-3xl" />

          {/* MAIN GLASS CARD */}
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[42px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_25px_100px_rgba(0,0,0,0.08)]">
            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b border-black/5 px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-400" />
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-500">
                Orbit Voice Assistant
              </p>

              <div className="w-8" />
            </div>

            {/* CONTENT */}
            <div className="grid gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="flex flex-col justify-center">
                {/* STATUS */}
                <div className="mb-5 sm:mb-6 flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-gray-600">
                    Orbit is listening...
                  </p>
                </div>

                {/* MAIN COMMAND */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                  “Schedule a meeting with Alex tomorrow at 9 AM.”
                </h3>

                {/* RESPONSE CARD */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="mt-6 sm:mt-8 rounded-[20px] sm:rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-blue-50 p-4 sm:p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Sparkles className="h-5 w-5 text-violet-600" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Orbit Response
                      </p>

                      <p className="text-xs text-gray-400">
                        Action completed instantly
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                    Meeting scheduled successfully for tomorrow at 9:00 AM.
                    Calendar invitations have been sent automatically.
                  </p>
                </motion.div>

                {/* MINI ACTIONS */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                    <Calendar className="h-4 w-4 flex-shrink-0 text-violet-600" />

                    <p className="text-sm font-medium text-gray-700">
                      Calendar Synced
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />

                    <p className="text-sm font-medium text-gray-700">
                      Tasks Updated
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[420px]">
                {/* ORBIT RINGS */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] rounded-full border border-violet-300/40"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[170px] w-[170px] sm:h-[220px] sm:w-[220px] lg:h-[250px] lg:w-[250px] rounded-full border border-fuchsia-300/40"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px] rounded-full border border-blue-300/40"
                />

                {/* CENTER GLOW */}
                <div className="absolute h-28 w-28 sm:h-36 sm:w-36 lg:h-40 lg:w-40 rounded-full bg-violet-500/20 blur-3xl" />

                {/* MIC BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 items-center justify-center rounded-full border border-white/40 bg-white/80 backdrop-blur-xl shadow-[0_10px_60px_rgba(139,92,246,0.35)]"
                >
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 opacity-90" />

                  <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-white shadow-lg">
                    <Mic className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-violet-600" />
                  </div>
                </motion.button>

                {/* WAVEFORM */}
                <div className="absolute -bottom-10 sm:-bottom-14 lg:-bottom-[70px] flex items-end gap-[4px] sm:gap-[6px]">
                  {[14, 32, 20, 42, 24, 36, 18].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [
                          `${height}px`,
                          `${height + 10}px`,
                          `${height}px`,
                        ],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.08,
                      }}
                      className="w-[4px] sm:w-[5px] rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VoiceDemo;