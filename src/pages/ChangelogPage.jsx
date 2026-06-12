import React from "react";
import { Calendar, Sparkles, Wrench, Shield, ArrowUpRight } from "lucide-react";

const releases = [
  {
    version: "v3.2.0",
    date: "June 2026",
    type: "Major Release",
    updates: [
      "Added webhook retry monitoring dashboard",
      "Improved SDK authentication helpers",
      "Introduced project-level API analytics",
      "Enhanced TypeScript support",
    ],
  },
  {
    version: "v3.1.4",
    date: "May 2026",
    type: "Improvements",
    updates: [
      "Reduced SDK bundle size",
      "Faster request handling",
      "Improved error messages",
      "Documentation updates",
    ],
  },
  {
    version: "v3.1.0",
    date: "April 2026",
    type: "Features",
    updates: [
      "Added file upload endpoints",
      "New webhook signature validation utilities",
      "Expanded API event filtering",
      "Improved SDK examples",
    ],
  },
  {
    version: "v3.0.0",
    date: "March 2026",
    type: "Major Release",
    updates: [
      "Complete SDK architecture redesign",
      "Modernized authentication system",
      "Improved performance across all endpoints",
      "New developer experience tools",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            SDK Resources
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Changelog
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Track SDK releases, platform improvements, new features,
            bug fixes, and developer experience updates.
          </p>
        </div>
      </section>

      {/* Release Stats */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            <div className="mt-4 text-3xl font-bold">120+</div>
            <p className="mt-1 text-sm text-zinc-400">
              Feature Enhancements
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Wrench className="h-8 w-8 text-cyan-400" />
            <div className="mt-4 text-3xl font-bold">340+</div>
            <p className="mt-1 text-sm text-zinc-400">
              Bug Fixes Delivered
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Shield className="h-8 w-8 text-cyan-400" />
            <div className="mt-4 text-3xl font-bold">99.99%</div>
            <p className="mt-1 text-sm text-zinc-400">
              Platform Reliability
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="relative border-l-2 border-white/10 ml-3 pl-8">
          {releases.map((release) => (
            <div key={release.version} className="relative mb-14 last:mb-0">
              <div className="absolute -left-[43px] top-1.5 h-6 w-6 rounded-full border-4 border-zinc-950 bg-cyan-500" />

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {release.version}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {release.type}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                  <Calendar size={15} />
                  {release.date}
                </div>

                <h2 className="mt-5 text-2xl font-semibold">
                  Release Highlights
                </h2>

                <div className="mt-5 space-y-3">
                  {release.updates.map((update) => (
                    <div
                      key={update}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span>{update}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 text-center">
            <h2 className="text-3xl font-bold">
              Stay up to date
            </h2>

            <p className="mt-4 text-zinc-400">
              Follow platform improvements, SDK releases, and developer
              tooling updates as they happen.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400">
              Release Notes
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}