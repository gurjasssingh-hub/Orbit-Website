import {
  Mic,
  Calendar,
  Mail,
  Music,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const commands = [
  {
    icon: Calendar,
    text: "Schedule meeting tomorrow at 4 PM with the design team.",
  },
  {
    icon: Mail,
    text: "Summarize all unread emails and highlight urgent ones.",
  },
  {
    icon: Music,
    text: "Play my deep focus playlist and lower notification sounds.",
  },
  {
    icon: CheckCircle2,
    text: "Create a new task in Linear and assign it to Alex.",
  },
  {
    icon: Mic,
    text: "Start voice notes and organize them into folders.",
  },
  {
    icon: Sparkles,
    text: "Optimize my workspace and mute distractions.",
  },
];

export default function VoiceCommandSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      {/* SUBTLE BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] rounded-full bg-neutral-100 opacity-60 blur-3xl" />

        <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] rounded-full bg-neutral-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
            <div className="h-2 w-2 rounded-full bg-black" />

            <span className="text-xs sm:text-sm tracking-wide text-neutral-600">
              Voice Commands
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-neutral-900">
            Just speak.
            <br />
            Orbit handles the rest.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
            Natural voice commands that instantly become actions,
            workflows, and productivity.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {commands.map((command, index) => {
            const Icon = command.icon;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[24px] sm:rounded-[30px]
                  border border-white/10
                  bg-black
                  p-5 sm:p-7
                  min-h-[180px] sm:min-h-[220px]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                "
              >
                {/* TOP BORDER */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* TOP */}
                <div className="mb-8 flex items-center justify-between sm:mb-12">
                  {/* ICON */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>

                  {/* WAVE */}
                  <div className="flex h-8 items-end gap-1 opacity-70 sm:h-10 sm:gap-[5px]">
                    {[18, 28, 20, 36, 24, 30].map((height, i) => (
                      <div
                        key={i}
                        className="w-[3px] sm:w-[4px] rounded-full bg-white/70"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-lg sm:text-xl lg:text-[22px] leading-relaxed tracking-tight text-white font-medium">
                    “{command.text}”
                  </p>
                </div>

                {/* BOTTOM SHINE */}
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}