import React from 'react'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";

const Documentation = () => {
  return (
    <>
       <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

     <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[300px] sm:h-[600px] w-full max-w-[600px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        Documentation
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Getting Started with Orbit
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Everything you need to launch quickly, configure your workspace,
        and start building with Orbit from day one.
      </p>
    </div>

    {/* Content */}
    <div className="mt-12 sm:mt-20 grid gap-6 lg:gap-10 grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">

      {/* Left Side - Quick Launch Path */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">

        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-neutral-100 blur-3xl opacity-70 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-neutral-900 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-neutral-500">
              Quick Launch Path
            </span>
          </div>

          <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
            {[
              {
                title: "Platform Overview",
                desc: "Understand Orbit’s architecture, capabilities, and core workflows."
              },
              {
                title: "Workspace Setup",
                desc: "Configure teams, permissions, integrations, and environments."
              },
              {
                title: "First AI Workflow",
                desc: "Build and deploy your first automation in minutes."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-b border-neutral-100 pb-6 sm:pb-8 last:border-0 last:pb-0 min-w-0"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 truncate">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Included Resources */}
      <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 shadow-sm">

        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 truncate">
            Included Resources
          </h3>

          <span className="text-xs sm:text-sm text-neutral-500 whitespace-nowrap font-medium bg-neutral-200/50 px-2.5 py-1 rounded-full">
            7 Essentials
          </span>
        </div>

        <div className="mt-6 sm:mt-8 space-y-3">
          {[
            "Quickstart Guides",
            "Platform Overview",
            "Workspace Setup",
            "First AI Workflow",
            "Best Practices",
            "Onboarding Tutorials",
          ].map((item, i) => (
            <div
              key={item}
              className="group flex items-center justify-between rounded-xl sm:rounded-2xl bg-white border border-neutral-200 px-4 py-3.5 sm:px-5 sm:py-4 hover:shadow-md hover:border-neutral-300 transition-all duration-300 cursor-pointer min-w-0"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <span className="text-xs sm:text-sm font-medium text-neutral-400 shrink-0 group-hover:text-black transition-colors duration-300">
                  0{i + 1}
                </span>

                <span className="text-xs sm:text-sm md:text-base font-medium text-neutral-800 truncate group-hover:text-black transition-colors duration-300">
                  {item}
                </span>
              </div>

              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-400 shrink-0 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>

</section>

     <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[400px] sm:h-[700px] w-full max-w-[700px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        Developer Docs
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        API Reference
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Comprehensive developer documentation for integrating,
        scaling, and managing Orbit APIs with confidence.
      </p>
    </div>

    {/* Main Grid */}
    <div className="mt-12 sm:mt-24 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

      {/* API Preview */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-950 flex flex-col shadow-sm">

        <div className="flex items-center justify-between border-b border-neutral-800 px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-neutral-700" />
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-neutral-700" />
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-neutral-700" />
          </div>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 font-medium">
            API Request
          </span>
        </div>

        <div className="p-5 sm:p-8 font-mono text-xs sm:text-sm overflow-x-auto selection:bg-neutral-800 selection:text-emerald-400">

          <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-emerald-400 font-bold">POST</span>
            <span className="text-neutral-400 break-all">
              /v1/workflows/execute
            </span>
          </div>

          <pre className="text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre">
{`{
  "workflow_id": "wf_93x8a",
  "input": {
    "task": "Generate report"
  },
  "async": true
}`}
          </pre>

          <div className="mt-6 sm:mt-8 border-t border-neutral-800 pt-6 sm:pt-8">
            <span className="text-emerald-400 font-bold">200 OK</span>

            <pre className="mt-3 sm:mt-4 text-neutral-400 leading-relaxed overflow-x-auto whitespace-pre">
{`{
  "status": "success",
  "execution_id": "ex_1a92",
  "queued": true
}`}
            </pre>
          </div>

        </div>
      </div>

      {/* Documentation Topics */}
      <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-5 sm:p-8 flex flex-col justify-between shadow-sm">

        <div>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
              Documentation Coverage
            </h3>

            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600">
              Everything required to build production-ready integrations.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {[
              "REST API Endpoints",
              "Authentication Methods",
              "Request & Response Schemas",
              "Rate Limits",
              "Error Handling",
              "API Versioning",
            ].map((item, i) => (
              <div
                key={item}
                className="group flex items-center justify-between rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 sm:px-5 sm:py-4 transition-all duration-300 hover:bg-white hover:border-neutral-300 cursor-pointer min-w-0"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="text-xs sm:text-sm font-medium text-neutral-400 shrink-0 group-hover:text-neutral-900 transition-colors">
                    0{i + 1}
                  </span>

                  <span className="text-xs sm:text-sm md:text-base font-medium text-neutral-800 truncate group-hover:text-neutral-900 transition-colors">
                    {item}
                  </span>
                </div>

                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-400 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-5 flex flex-col justify-center">
            <div className="text-xl sm:text-2xl font-bold text-neutral-900">
              120+
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-neutral-500 font-medium">
              Endpoints
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-5 flex flex-col justify-center">
            <div className="text-xl sm:text-2xl font-bold text-neutral-900">
              SDKs
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-neutral-500 font-medium truncate">
              Multiple Languages
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-5 flex flex-col justify-center">
            <div className="text-xl sm:text-2xl font-bold text-neutral-900">
              v1
            </div>
            <div className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-neutral-500 font-medium">
              Stable API
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
 
 <section id="SDKs" className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute right-0 top-0 h-[300px] sm:h-[600px] w-full max-w-[600px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        Developer Ecosystem
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        SDKs & Integrations
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Build, customize, and extend Orbit using developer-friendly SDKs,
        webhooks, and integrations designed for modern teams.
      </p>
    </div>

    {/* Layout Grid */}
    <div className="mt-12 sm:mt-24 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">

      {/* SDK Code Panel */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-950 flex flex-col justify-between shadow-sm">
        <div>
          <div className="border-b border-neutral-800 px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
              SDK Example
            </span>
            <span className="text-[10px] font-mono text-neutral-600">
              javascript
            </span>
          </div>

          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed text-neutral-300 overflow-x-auto selection:bg-neutral-800 selection:text-emerald-400">
{`import { Orbit } from "@orbit/sdk";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

await orbit.workflows.execute({
  workflow: "daily-report",
});

console.log("Workflow started");`}
          </div>
        </div>

        <div className="border-t border-neutral-800 px-6 py-4 sm:px-8 sm:py-6 bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm text-neutral-400 font-medium">
              SDKs maintained and versioned
            </span>
          </div>
        </div>
      </div>

      {/* Integrations Content & Metrics */}
      <div className="flex flex-col justify-between">
        
        {/* Row Items */}
        <div className="grid gap-3 sm:gap-4">
          {[
            {
              title: "JavaScript SDK",
              desc: "Build web applications and automations with a fully supported JavaScript toolkit."
            },
            {
              title: "Python SDK",
              desc: "Create workflows, integrations, and backend services using Python."
            },
            {
              title: "Webhook Support",
              desc: "Receive real-time events and automate actions across your systems."
            },
            {
              title: "Third-Party Integrations",
              desc: "Connect Orbit with your existing stack and business tools."
            },
            {
              title: "Sample Implementations",
              desc: "Production-ready examples for common development patterns."
            },
            {
              title: "Integration Guides",
              desc: "Step-by-step documentation for deploying integrations faster."
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-md cursor-pointer min-w-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-400 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6 flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
              25+
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
              Integrations
            </div>
          </div>

          <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6 flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
              2
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
              Official SDKs
            </div>
          </div>

          <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6 flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
              Real-Time
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
              Webhooks
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

   <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[400px] sm:h-[700px] w-full max-w-[700px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        Enterprise Readiness
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Security & Compliance
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Detailed documentation covering Orbit's security framework,
        governance controls, and compliance practices for modern organizations.
      </p>
    </div>

    {/* Layout Grid */}
    <div className="mt-12 sm:mt-24 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[1fr_1fr]">

      {/* Left Column - Security Overview Card */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-950 flex flex-col justify-between shadow-sm">
        <div>
          <div className="border-b border-neutral-800 px-6 py-4 sm:px-8 sm:py-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
              Security Framework
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-3 sm:space-y-4">
              {[
                "Identity & Access Management",
                "Data Encryption Standards",
                "Audit Logging",
                "Operational Controls",
                "Governance Policies"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3.5 sm:px-5 sm:py-4 transition-colors duration-300 hover:bg-neutral-900"
                >
                  <span className="text-xs sm:text-sm md:text-base text-neutral-200 font-medium truncate pr-4">
                    {item}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-0">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6 backdrop-blur-sm">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Documentation Coverage
            </div>

            <div className="mt-2 text-xl sm:text-2xl font-bold text-white">
              Enterprise Grade
            </div>

            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Security controls, governance policies, and compliance
              documentation designed for growing organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Grid Area Topics */}
      <div className="flex flex-col justify-between">
        <div className="grid gap-3 sm:gap-4">
          {[
            {
              title: "Security Architecture",
              desc: "Comprehensive documentation of Orbit's infrastructure, security layers, and operational design."
            },
            {
              title: "Access Controls",
              desc: "Role-based permissions, authentication systems, and identity management practices."
            },
            {
              title: "Data Protection Practices",
              desc: "Encryption, storage security, handling policies, and privacy-focused safeguards."
            },
            {
              title: "Compliance Standards",
              desc: "Guidance on compliance readiness, controls, and organizational requirements."
            },
            {
              title: "Audit Capabilities",
              desc: "Activity tracking, event logging, monitoring, and operational transparency."
            },
            {
              title: "Governance Guidelines",
              desc: "Documentation supporting oversight, accountability, and policy management."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-md cursor-pointer min-w-0"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Trust Metrics */}
    <div className="mt-12 sm:mt-16 grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-3">
      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          End-to-End
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Data protection and security controls
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Audit Ready
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Visibility into actions and system events
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Governance
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Policies and organizational oversight
        </p>
      </div>
    </div>

  </div>
</section>

 <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute right-0 top-0 h-[400px] sm:h-[700px] w-full max-w-[700px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        AI Playbook
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        AI & Automation Guides
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Learn proven frameworks, automation patterns, and AI best practices
        to unlock the full potential of Orbit across your organization.
      </p>
    </div>

    {/* Layout Grid */}
    <div className="mt-12 sm:mt-24 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

      {/* Left Side - Featured Card */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-950 flex flex-col justify-between shadow-sm">
        <div>
          <div className="border-b border-neutral-800 px-6 py-4 sm:px-8 sm:py-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
              Featured Guide
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="inline-flex rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-[10px] sm:text-xs font-medium text-neutral-400">
              Recommended Learning Path
            </div>

            <h3 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-semibold text-white">
              Building AI-Driven Workflows
            </h3>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
              Discover how teams automate repetitive work, deploy AI agents,
              streamline meetings, and build scalable productivity systems
              using Orbit.
            </p>

            <div className="mt-8 sm:mt-10 space-y-3">
              {[
                "Understanding AI workflows",
                "Configuring agents",
                "Optimizing prompts",
                "Automating business processes",
                "Scaling AI operations"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3.5 sm:px-5 sm:py-4 transition-colors duration-300 hover:bg-neutral-900"
                >
                  <span className="text-xs sm:text-sm md:text-base text-neutral-200 font-medium truncate pr-4">
                    {item}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-white shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Guides Menu */}
      <div className="flex flex-col justify-between">
        <div className="grid gap-3 sm:gap-4">
          {[
            {
              title: "Workflow Automation",
              desc: "Design and deploy intelligent workflows that automate repetitive operational tasks."
            },
            {
              title: "AI Agent Configuration",
              desc: "Learn how to customize AI agents for specific business processes and objectives."
            },
            {
              title: "Prompt Optimization",
              desc: "Create reliable prompts that improve accuracy, consistency, and outcomes."
            },
            {
              title: "Voice Automation",
              desc: "Build hands-free experiences powered by voice commands and AI actions."
            },
            {
              title: "Knowledge Management",
              desc: "Organize information, connect resources, and enable AI-powered retrieval."
            },
            {
              title: "Productivity Strategies",
              desc: "Explore frameworks used by high-performing teams to maximize efficiency."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-md cursor-pointer min-w-0"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-5">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Insights */}
    <div className="mt-12 sm:mt-16 grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-3">
      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
          50+
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Practical AI guides
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
          Expert
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Best-practice frameworks
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-2xl sm:text-3xl font-bold text-neutral-900">
          Continuous
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Updated learning resources
        </p>
      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-0 top-0 h-[400px] sm:h-[700px] w-full max-w-[700px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        Administration Hub
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Deployment & Administration
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Manage users, environments, permissions, and organizational
        operations with tools built for enterprise-scale deployments.
      </p>
    </div>

    {/* Main Grid Layout */}
    <div className="mt-12 sm:mt-24 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">

      {/* Enterprise Dashboard Card */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-950 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4 sm:px-8 sm:py-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
              Admin Dashboard
            </span>

            <div className="flex gap-1.5 sm:gap-2">
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-3 sm:space-y-4">
              {[
                { title: "Workspace Status", value: "Operational" },
                { title: "Active Users", value: "1,248" },
                { title: "Permission Policies", value: "32 Rules" },
                { title: "Connected Environments", value: "8" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3.5 sm:px-5 sm:py-4 transition-colors duration-300 hover:bg-neutral-900"
                >
                  <span className="text-xs sm:text-sm md:text-base text-neutral-400 font-medium truncate pr-4">
                    {item.title}
                  </span>

                  <span className="text-xs sm:text-sm md:text-base font-semibold text-white shrink-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-0">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6 backdrop-blur-sm">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Enterprise Operations
            </div>

            <div className="mt-2 text-xl sm:text-2xl font-bold text-white">
              Centralized Control
            </div>

            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Configure teams, deploy environments, manage access,
              and oversee operations from a unified administration layer.
            </p>
          </div>
        </div>
      </div>

      {/* Admin Documentation Menu */}
      <div className="flex flex-col justify-between">
        <div className="grid gap-3 sm:gap-4">
          {[
            {
              title: "Workspace Administration",
              desc: "Configure workspaces, environments, integrations, and operational settings."
            },
            {
              title: "User Management",
              desc: "Manage team members, user lifecycle, access provisioning, and account controls."
            },
            {
              title: "Permissions Setup",
              desc: "Define role-based access policies and organizational permissions."
            },
            {
              title: "Deployment Options",
              desc: "Deploy and manage Orbit across different environments and organizational needs."
            },
            {
              title: "Monitoring Controls",
              desc: "Track platform activity, usage metrics, operational events, and system visibility."
            },
            {
              title: "Organizational Settings",
              desc: "Customize workspace policies, governance controls, and administrative preferences."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-md cursor-pointer min-w-0"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-5">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Enterprise Metrics */}
    <div className="mt-12 sm:mt-16 grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4">
      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Users
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Team administration
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Roles
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Permission management
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Deploy
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Environment controls
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Monitor
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Operational visibility
        </p>
      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute right-1/2 top-0 h-[400px] sm:h-[700px] w-full max-w-[700px] translate-x-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 shadow-sm">
        Developer Toolkit
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Developer Resources
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl">
        Access the tools, examples, and technical resources needed
        to build, test, and deploy faster with Orbit.
      </p>
    </div>

    {/* Layout Grid */}
    <div className="mt-12 sm:mt-24 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

      {/* Left Side - Developer Workspace */}
      <div className="overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-neutral-950 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4 sm:px-8 sm:py-5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-500 font-medium">
              Developer Workspace
            </span>

            <div className="flex gap-1.5 sm:gap-2">
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
            
            {/* Recommended Resources List */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6">
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Recommended Resources
              </div>

              <div className="mt-4 space-y-2.5 sm:space-y-3">
                {[
                  "Interactive API Explorer",
                  "Production Code Examples",
                  "Webhook Testing Tools",
                  "Postman Collections",
                  "Developer Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 transition-colors duration-300 hover:bg-neutral-900"
                  >
                    <span className="text-xs sm:text-sm text-neutral-300 font-medium truncate pr-4">
                      {item}
                    </span>

                    <div className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Resource Library Info Panel */}
        <div className="p-6 sm:p-8 pt-0">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 sm:p-6 backdrop-blur-sm">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Resource Library
            </div>

            <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Everything in One Place
            </div>

            <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Explore technical documentation, implementation guides,
              testing utilities, release updates, and developer-focused
              learning materials.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Grid Items Menu */}
      <div className="flex flex-col justify-between">
        <div className="grid gap-3 sm:gap-4">
          {[
            {
              title: "Interactive API Explorer",
              desc: "Test endpoints directly from the browser with real request and response previews."
            },
            {
              title: "Code Examples",
              desc: "Production-ready implementation examples across common development workflows."
            },
            {
              title: "Postman Collections",
              desc: "Preconfigured collections to simplify testing and accelerate integrations."
            },
            {
              title: "Webhook Testing",
              desc: "Validate events, payloads, and webhook behavior during development."
            },
            {
              title: "Release Notes",
              desc: "Stay informed about new features, updates, improvements, and platform changes."
            },
            {
              title: "Developer Support",
              desc: "Access technical guidance, troubleshooting resources, and expert assistance."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-md cursor-pointer min-w-0"
            >
              <div className="flex items-start justify-between gap-4 sm:gap-5">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Resource Stats */}
    <div className="mt-12 sm:mt-16 grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-3">
      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Examples
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Ready-to-use code samples
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Testing
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          API and webhook validation
        </p>
      </div>

      <div className="rounded-xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 flex flex-col justify-center shadow-sm">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
          Support
        </div>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          Technical guidance and help
        </p>
      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-40 px-4 sm:px-6">

  {/* Background Card Wrapper */}
  <div className="relative overflow-hidden rounded-2xl sm:rounded-[40px] border border-neutral-200 bg-white px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-28 text-center shadow-sm">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_60%)] pointer-events-none" />

    <div className="relative mx-auto max-w-7xl">

      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500 shadow-sm">
        Built For Builders
      </span>

      <h2 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Everything You Need
        <br />
        To Build With Orbit
      </h2>

      <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600">
        From API references and SDKs to deployment guides, security
        documentation, and automation playbooks—Orbit provides the
        resources teams need to move from idea to production faster.
      </p>

      {/* Grid Features */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 border border-neutral-200 rounded-2xl sm:rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-sm">
        {[
          { value: "Comprehensive", label: "Documentation" },
          { value: "Enterprise", label: "Ready" },
          { value: "Developer", label: "Focused" },
        ].map((item) => (
          <div
            key={item.label}
            className="border-b md:border-b-0 md:border-r last:border-b-0 last:border-r-0 border-neutral-200 bg-neutral-50/50 px-6 py-8 sm:px-8 sm:py-10 flex flex-col justify-center items-center"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900">
              {item.value}
            </div>

            <div className="mt-1 sm:mt-2 text-xs uppercase tracking-wider text-neutral-500 font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button Wrapper */}
      <div className="mt-10 sm:mt-14 flex justify-center">
        <Link to="/Docs" className="inline-block w-full sm:w-auto"> 
          <Button2
            className="w-full sm:w-48 h-12 bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-300 rounded-xl shadow-sm"
            text="View Documentation"
          />
        </Link>
      </div>

    </div>
  </div>

</section>

    

       </div>
    </>
  )
}

export default Documentation
