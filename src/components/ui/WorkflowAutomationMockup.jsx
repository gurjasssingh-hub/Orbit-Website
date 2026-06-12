import { motion } from "framer-motion";
import {
  Mic,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export default function WorkflowAutomationMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="
        relative overflow-hidden
        rounded-[20px] sm:rounded-[24px]
        bg-black border border-white/10
        p-4 sm:p-5
        h-auto min-h-[300px] sm:min-h-[340px]
        w-full max-w-[360px]
        mx-auto
      "
    >
      {/* GLOW */}
      <div className="absolute bottom-0 left-0 h-32 w-32 sm:h-40 sm:w-40 bg-violet-500/20 blur-[70px] rounded-full" />

      {/* HEADING */}
      <div className="relative mb-5">
        <h3 className="text-base sm:text-lg text-white font-semibold tracking-tight leading-tight">
          Workflow Automation
        </h3>

        <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-gray-400">
          Orbit coordinates actions and keeps teams synced automatically.
        </p>
      </div>

      {/* FLOW */}
      <div className="relative flex flex-col items-center">
        {/* TOP CARD */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            w-full
            rounded-[16px] sm:rounded-[18px]
            border border-white/10
            bg-white/[0.06]
            p-3
          "
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white/10">
              <Mic className="h-4 w-4 text-white" />

              <div className="absolute inset-0 rounded-lg bg-blue-500/20 animate-ping" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium text-white">
                Voice Command
              </p>

              <p className="text-[10px] text-gray-400">
                Orbit processing
              </p>
            </div>
          </div>
        </motion.div>

        {/* CONNECTOR */}
        <div className="h-6 sm:h-7 w-[2px] bg-gradient-to-b from-blue-500 to-violet-500" />

        {/* CENTER ORB */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            relative
            flex items-center justify-center
            h-14 w-14 sm:h-16 sm:w-16
            rounded-full
            border border-white/10
            bg-white/[0.06]
          "
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl" />

          <Sparkles className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </motion.div>

        {/* CONNECTOR */}
        <div className="h-6 sm:h-7 w-[2px] bg-gradient-to-b from-violet-500 to-blue-500" />

        {/* BOTTOM CARDS */}
        <div className="grid w-full grid-cols-2 gap-2 sm:gap-3">
          {[
            {
              icon: Calendar,
              title: "Meeting",
            },
            {
              icon: CheckCircle2,
              title: "Tasks",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="
                  rounded-[14px] sm:rounded-[16px]
                  border border-white/10
                  bg-white/[0.06]
                  p-3
                "
              >
                <div className="mb-3 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-4 w-4 text-white" />
                </div>

                <p className="text-[11px] sm:text-xs font-medium text-white">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}