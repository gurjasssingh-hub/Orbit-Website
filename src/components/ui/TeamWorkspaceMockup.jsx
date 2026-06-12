import { motion } from "framer-motion";
import {
  Mic,
  CheckCircle2,
} from "lucide-react";

export default function TeamWorkspaceMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="relative h-auto min-h-[320px] sm:min-h-[340px] w-full max-w-[360px] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-white/10 bg-black p-4 sm:p-5"
    >
      {/* SMALL GLOW */}
      <div className="absolute -top-10 -right-10 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-blue-500/20 blur-[70px]" />

      {/* HEADING */}
      <div className="relative mb-4">
        <h3 className="text-base sm:text-lg font-semibold tracking-tight leading-tight text-white">
          Team Workspace
        </h3>

        <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-gray-400">
          AI-powered collaboration for modern teams.
        </p>
      </div>

      {/* TEAM ROW */}
      <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-black bg-gradient-to-br from-blue-400 to-violet-500"
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <p className="text-[10px] sm:text-xs text-white">
            Live
          </p>
        </div>
      </div>

      {/* VOICE CARD */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="relative mb-4 rounded-[18px] border border-white/10 bg-white/[0.06] p-4"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
              <Mic className="h-4 w-4 text-white" />

              <div className="absolute inset-0 rounded-lg bg-blue-500/20 animate-ping" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-white">
                Voice AI
              </p>

              <p className="text-[10px] text-gray-400">
                Processing
              </p>
            </div>
          </div>

          {/* MINI WAVE */}
          <div className="flex h-6 flex-shrink-0 items-end gap-[3px]">
            {[8, 14, 10, 16, 12].map((height, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [
                    `${height}px`,
                    `${height + 5}px`,
                    `${height}px`,
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.08,
                }}
                className="w-[3px] rounded-full bg-white/80"
                style={{ height }}
              />
            ))}
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed font-medium text-white">
          “Notify the design team about launch updates.”
        </p>
      </motion.div>

      {/* TASKS */}
      <div className="space-y-2">
        {[
          "Meeting summary generated",
          "Tasks assigned",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3"
          >
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
              <CheckCircle2 className="h-3 w-3 text-white" />
            </div>

            <p className="text-xs sm:text-sm text-white">
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}