import React from "react";
import {
  Rocket,
  ShieldCheck,
  Database,
  Globe,
  ArrowRight,
  Star,
} from "lucide-react";

const featuredExamples = [
  {
    title: "SaaS Starter Kit",
    description:
      "Production-ready SaaS foundation with authentication, billing, organizations, and user management.",
    badge: "Most Popular",
    difficulty: "Beginner",
    icon: Rocket,
    tech: ["React", "Node.js", "Orbit API"],
  },
  {
    title: "Authentication System",
    description:
      "Complete sign-in, sign-up, session management, roles, permissions, and secure route protection.",
    badge: "Recommended",
    difficulty: "Intermediate",
    icon: ShieldCheck,
    tech: ["React", "JWT", "Orbit Auth"],
  },
  {
    title: "Data Dashboard",
    description:
      "Build analytics dashboards with real-time data retrieval, charts, and filtering capabilities.",
    badge: "Enterprise",
    difficulty: "Advanced",
    icon: Database,
    tech: ["React", "Analytics", "Orbit SDK"],
  },
  {
    title: "API Integration Demo",
    description:
      "Learn best practices for connecting Orbit APIs, handling errors, retries, and webhooks.",
    badge: "Developer Favorite",
    difficulty: "Intermediate",
    icon: Globe,
    tech: ["REST API", "SDK", "Webhooks"],
  },
];

const FeaturedExamples = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#eef4ff,transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
            <Star size={16} className="text-blue-600" />

            <span className="text-xs sm:text-sm font-medium text-slate-700">
              Featured Examples
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Build Faster with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Production-Ready Examples
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore recommended starter projects, authentication workflows,
            API integrations, and real-world applications built using Orbit.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 md:grid-cols-2">
          {featuredExamples.map((example, index) => {
            const Icon = example.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute right-0 top-0 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-blue-100 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-70" />

                <div className="relative">
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg flex-shrink-0">
                      <Icon size={24} />
                    </div>

                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] sm:text-xs font-semibold text-blue-700 text-center">
                      {example.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-slate-900">
                    {example.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {example.description}
                  </p>

                  {/* Difficulty */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium text-slate-500">
                      Difficulty:
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        example.difficulty === "Beginner"
                          ? "bg-emerald-100 text-emerald-700"
                          : example.difficulty === "Intermediate"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {example.difficulty}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                    {example.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 sm:mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
                    <button className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3">
                      Quick Start
                      <ArrowRight size={16} />
                    </button>

                    <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                      View Example
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button className="w-full sm:w-auto rounded-2xl bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-black">
            Browse All Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExamples;