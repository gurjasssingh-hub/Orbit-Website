import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Code2,
  FileText,
  Shield,
} from "lucide-react";

const MIGRATION_STEPS = [
  {
    title: "Review Release Notes",
    description: "Understand breaking changes, deprecated features, and new capabilities before upgrading.",
  },
  {
    title: "Update SDK Package",
    description: "Install the latest Orbit SDK version and verify package compatibility.",
  },
  {
    title: "Update Authentication",
    description: "Replace deprecated authentication methods with the new secure implementation.",
  },
  {
    title: "Validate Integrations",
    description: "Test webhooks, API requests, workflows, and automation processes.",
  },
  {
    title: "Deploy & Monitor",
    description: "Roll out changes gradually and monitor logs for unexpected issues.",
  },
];

const BREAKING_CHANGES = [
  "Legacy API key initialization has been removed.",
  "Webhook verification now requires signature validation.",
  "Deprecated request methods have been replaced.",
  "Authentication configuration format has changed.",
];

const IMPROVEMENTS = [
  "40% faster API requests",
  "Improved TypeScript support",
  "Enhanced webhook security",
  "Reduced SDK bundle size",
  "Better error handling and debugging",
];

const HELPFUL_RESOURCES = [
  {
    to: "/docs/sdks/changelog",
    title: "Changelog",
    desc: "Review release history and updates."
  },
  {
    to: "/docs/api-reference",
    title: "API Reference",
    desc: "Explore updated endpoints and methods."
  },
  {
    to: "/support",
    title: "Support",
    desc: "Get help from the Orbit team."
  }
];

export default function MigrationGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased selection:bg-violet-500/30">
      {/* Hero */}
      <section className="border-b border-white/10 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 relative z-10">
          <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
            SDK Resources
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-zinc-50">
            Migration Guide
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-zinc-400 leading-relaxed">
            Upgrade safely between Orbit SDK versions with detailed
            migration instructions, compatibility guidance, and
            best-practice recommendations.
          </p>
        </div>
      </section>

      {/* Warning Notification Banner */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 md:p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-0.5 h-6 w-6 text-amber-400 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-300 tracking-wide">
                Important Before Upgrading
              </h3>
              <p className="mt-1.5 text-sm md:text-base text-zinc-300 leading-relaxed">
                Always test SDK upgrades thoroughly in an isolated staging environment before modifying codebases targeted for operational production delivery tracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Steps */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <RefreshCw className="h-6 w-6 text-violet-400 animate-spin-slow" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
            Migration Process
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {MIGRATION_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-8 transition-colors hover:bg-white/[0.04] hover:border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold shadow-inner">
                  {index + 1}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-zinc-200">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed max-w-4xl pl-13">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Example Migration Split Preview Pane */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur shadow-xl overflow-hidden">
          
          <div className="border-b border-white/10 bg-white/[0.01] px-6 md:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-violet-400" />
              <h2 className="text-base md:text-lg font-semibold tracking-wide text-zinc-200">
                Authentication Initialization Diff Example
              </h2>
            </div>
            {/* Visual Editor Dots */}
            <div className="flex gap-1.5 select-none pointer-events-none">
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10 font-mono">
            {/* Old Method View block */}
            <div className="p-6 md:p-8 bg-black/20">
              <div className="mb-4 inline-flex rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400 tracking-wide uppercase">
                Old Method (v1.x)
              </div>
              <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 border border-white/5 text-sm text-zinc-300 leading-relaxed font-mono">
{`const orbit = new OrbitSDK({
  apiKey: process.env.API_KEY
});`}
              </pre>
            </div>

            {/* New Method View block */}
            <div className="p-6 md:p-8 bg-emerald-500/[0.01]">
              <div className="mb-4 inline-flex rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                New Method (v2.0)
              </div>
              <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 border border-white/5 text-sm text-zinc-300 leading-relaxed font-mono">
{`const orbit = new OrbitSDK({
  auth: {
    token: process.env.ORBIT_TOKEN
  }
});`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* Side-by-Side Impact Analysis Matrix Container */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Breaking Changes Panel */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.02] p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-rose-300">
              Breaking Changes
            </h2>
            <div className="mt-6 space-y-4">
              {BREAKING_CHANGES.map((change) => (
                <div key={change} className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-4 w-4 text-rose-400/80 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits After Upgrade Panel */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-emerald-300">
              Benefits After Upgrade
            </h2>
            <div className="mt-6 space-y-4">
              {IMPROVEMENTS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-400/80 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Resource Card Map Hub */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 border-b border-white/5 pb-4">
            <FileText className="h-5 w-5 text-violet-400" />
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
              Helpful Knowledge Base Resources
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HELPFUL_RESOURCES.map((resource) => (
              <Link
                key={resource.to}
                to={resource.to}
                className="group rounded-xl border border-white/5 bg-zinc-950 p-5 shadow-sm transition hover:bg-zinc-900 hover:border-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
              >
                <h3 className="font-bold text-zinc-200 group-hover:text-violet-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed">
                  {resource.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Launch Action Check CTA Wrapper */}
      <section className="border-t border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-b from-violet-500/[0.04] to-transparent p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <Shield className="mx-auto h-12 w-12 text-violet-400 drop-shadow-sm" />

            <h2 className="mt-6 text-2xl md:text-4xl font-bold tracking-tight text-zinc-100">
              Ready to Complete Upgrade?
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-zinc-400 leading-relaxed">
              Follow our comprehensive checklist to deploy your implementation updates securely and capture performance gains instantly.
            </p>

            <Link
              to="/Resourcespages/Documentation#SDKs"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-violet-500 hover:-translate-y-0.5 active:translate-y-0 transition"
            >
              <span>Explore SDK Documentation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}