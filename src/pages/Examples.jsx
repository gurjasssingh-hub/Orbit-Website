import React from 'react'
import FeaturedExamples from "../components/ui/FeaturedExamples";

const Examples = () => {
  return (
    <>
       <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

<section>
 <FeaturedExamples />
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        {/* Deep Field Ambient Radial Gradients */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dbeafe,transparent_40%)] opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#e0e7ff,transparent_40%)] opacity-70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Typography Block */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs tracking-wide">
              Browse by Category
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Find Examples by{' '}
              <span className="block mt-1 sm:inline bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                Use Case
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Explore meticulously curated architectural examples across secure identity, transaction billing, telemetry, automated AI inference models, and robust enterprise routing hooks.
            </p>
          </div>

          {/* Interactive Structured Search Vector */}
          <div className="mx-auto mt-10 sm:mt-12 max-w-2xl">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search functional parameters, technical dependencies, or templates..."
                className="w-full rounded-2xl border border-slate-200 bg-white pl-6 pr-14 py-4.5 text-sm sm:text-base text-slate-900 shadow-2xs outline-hidden transition duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-colors group-focus-within:text-blue-500">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.65 5.65a7.5 7.5 0 0011 11z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigational Segment Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
            {["All", "Frontend", "Backend", "SDK", "API", "Enterprise", "AI"].map((filter, idx) => (
              <button
                key={filter}
                className={`rounded-full border px-5 py-2 text-xs sm:text-sm font-semibold transition duration-200 select-none cursor-pointer ${
                  idx === 0
                    ? "border-blue-600 bg-blue-600 text-white shadow-xs shadow-blue-500/20"
                    : "border-slate-200 bg-white text-slate-600 md:hover:border-slate-300 md:hover:bg-slate-50 md:hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Dynamic Grid Distribution Matrix */}
          <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Authentication", count: "24 Examples", icon: "🔐" },
              { name: "Payments & Billing", count: "18 Examples", icon: "💳" },
              { name: "User Management", count: "16 Examples", icon: "👥" },
              { name: "Webhooks", count: "14 Examples", icon: "⚡" },
              { name: "File Uploads", count: "12 Examples", icon: "📁" },
              { name: "Analytics & Reporting", count: "20 Examples", icon: "📊" },
              { name: "AI Integrations", count: "15 Examples", icon: "🤖" },
              { name: "Enterprise Workflows", count: "10 Examples", icon: "🏢" }
            ].map((category) => (
              <div
                key={category.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 shadow-2xs transition-all duration-300 md:hover:-translate-y-1 md:hover:border-blue-300 md:hover:shadow-xl"
              >
                {/* Micro Ambient Hover Overlay */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-50 blur-3xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-xl sm:text-2xl text-white shadow-md shadow-indigo-600/10">
                    {category.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                    {category.count}
                  </p>
                </div>

                <div className="relative mt-6 pt-2 border-t border-slate-50">
                  <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 transition-all cursor-pointer group-hover:gap-2.5">
                    Explore Category
                    <svg className="h-3.5 w-3.5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consolidated Metrics Banner */}
          <div className="mt-16 sm:mt-20 rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xs">
            <div className="grid gap-6 sm:gap-8 text-center grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="pt-0">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">120+</h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">Example Projects</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">8</h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">Primary Categories</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">15+</h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">Core Frameworks</p>
              </div>
              <div className="pt-4 md:pt-0">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">50k+</h3>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">Developer Assets Downloaded</p>
              </div>
            </div>
          </div>
        </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 border-t border-slate-200/50">
        <div className="absolute inset-0 -z-10 pointer-events-none select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_40%)] opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#e0e7ff,transparent_40%)] opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs tracking-wide">
              Quick Start Templates
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Launch Projects in{' '}
              <span className="block mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                Minutes, Not Hours
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Accelerate time-to-market with production-ready architectural configurations, automated environmental parameters, and framework boilerplate patterns.
            </p>
          </div>

          {/* Composite Template Architecture Cards Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 lg:gap-8 lg:grid-cols-3">
            {[
              {
                name: "Next.js SaaS Starter",
                framework: "Next.js",
                setup: "2 Minutes",
                description: "Integrated identity verification modules, recurring multi-tiered meter billing structures, telemetry dashboards, and edge API distribution configurations.",
                tech: ["Next.js", "TypeScript", "Orbit SDK"]
              },
              {
                name: "React Edge Web Application",
                framework: "React",
                setup: "1 Minute",
                description: "Client-side decoupling module featuring reactive client routers, session handling architectures, client global state containers, and Orbit runtime integrations.",
                tech: ["React", "Vite", "Orbit API"]
              },
              {
                name: "Node.js Backend System",
                framework: "Node.js",
                setup: "3 Minutes",
                description: "Robust high-throughput REST architectures containing signature-verified micro webhook engines, token authentication middleware pipelines, and cluster deployment specs.",
                tech: ["Node.js", "Express", "Orbit SDK"]
              }
            ].map((template) => (
              <div
                key={template.name}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 md:hover:-translate-y-1 md:hover:border-blue-300 md:hover:shadow-xl"
              >
                {/* Card Context Top half */}
                <div className="p-6 sm:p-7 border-b border-slate-100 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-md bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                      {template.framework}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-400">
                      Setup: {template.setup}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {template.name}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {template.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {template.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-100 bg-slate-50/80 px-2.5 py-0.5 text-xs font-semibold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Operations & CLI Lower half */}
                <div className="bg-slate-50/50 p-6 sm:p-7 space-y-5">
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Clone Terminal Target
                    </span>
                    <div className="overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      <div className="flex items-center justify-between gap-4 pl-4 pr-3 py-3">
                        <code className="text-xs text-slate-300 font-mono select-all truncate">
                          git clone orbit-template
                        </code>
                        <button className="text-xs font-bold text-blue-400 hover:text-blue-300 shrink-0 cursor-pointer p-1">
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Boot Instructions
                    </span>
                    <ol className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                      <li>1. Clone repository</li>
                      <li>2. Install assets</li>
                      <li>3. Map secret variables</li>
                      <li>4. Spin micro server</li>
                    </ol>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-xs sm:text-sm font-bold text-white transition cursor-pointer md:hover:bg-black shadow-xs">
                      Use Template
                    </button>
                    <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 transition cursor-pointer md:hover:bg-slate-50">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended Folder Architecture Blueprint block */}
          <div className="mt-16 sm:mt-20 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
            <div className="border-b border-slate-800 px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between bg-slate-900/40">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold font-mono text-slate-400 tracking-tight">
                RECOMMENDED_PROJECT_STRUCTURE.md
              </h3>
              <div className="w-12" /> {/* Layout balancer */}
            </div>

            <div className="p-6 sm:p-8 overflow-x-auto max-h-[320px] sm:max-h-none">
              <pre className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300 font-mono">
{`project/
├── src/
│   ├── components/    # Reusable atomic presentation layouts
│   ├── pages/         # Top-level dynamic route containers
│   ├── hooks/         # Functional global reactive state hooks
│   ├── services/      # Core API integration & orbit orchestration layers
│   └── utils/         # Pure functional helpers & format data maps
├── public/            # System static global binary dependencies
├── docs/              # In-context functional system specifications
├── .env.example       # Schema defining structural configurations
├── package.json       # System package parameters metadata map
└── README.md          # Ecosystem running blueprints`}
              </pre>
            </div>
          </div>

          {/* Bottom Call-To-Action Element */}
          <div className="mt-12 sm:mt-16 text-center">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition duration-300 cursor-pointer md:hover:scale-[1.01] md:hover:shadow-xl md:hover:shadow-indigo-600/30">
              Browse All Production Templates
            </button>
          </div>
        </div>
</section>

<section className="relative overflow-hidden py-24 sm:py-16 md:py-20">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dbeafe,transparent_35%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#e0e7ff,transparent_35%)]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
        Code Examples
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Learn Through
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {" "}
          Real Code
        </span>
      </h2>

      <p className="mt-5 text-base sm:text-lg text-slate-600">
        Explore production-ready examples covering authentication,
        API requests, SDK integrations, CRUD operations, error handling,
        pagination, and advanced workflows.
      </p>
    </div>

    {/* Feature Tabs */}
    <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
      {[
        "API Requests",
        "Authentication",
        "SDK Usage",
        "CRUD",
        "Error Handling",
        "Pagination",
      ].map((tab) => (
        <button
          key={tab}
          className="rounded-full border border-slate-200 bg-white px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Main Code Showcase */}
    <div className="mt-12 sm:mt-16 grid gap-8 lg:gap-10 lg:grid-cols-[320px_1fr]">
      {/* Left Sidebar */}
      <div className="space-y-3 sm:space-y-4">
        {[
          {
            title: "Create User",
            type: "POST",
            active: true,
          },
          {
            title: "Get Users",
            type: "GET",
          },
          {
            title: "Update User",
            type: "PATCH",
          },
          {
            title: "Delete User",
            type: "DELETE",
          },
          {
            title: "Authentication",
            type: "SDK",
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`cursor-pointer rounded-2xl border p-4 sm:p-5 transition-all ${
              item.active
                ? "border-blue-200 bg-white shadow-md"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                {item.title}
              </h3>

              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Code Panel */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex gap-2 sm:gap-3">
            <button className="rounded-lg bg-blue-600 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white">
              JavaScript
            </button>

            <button className="rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-400 hover:text-white">
              TypeScript
            </button>

            <button className="rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-400 hover:text-white">
              Python
            </button>

            <button className="rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-400 hover:text-white">
              cURL
            </button>
          </div>

          <button className="rounded-lg border border-slate-700 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300 transition hover:bg-slate-900">
            Copy Code
          </button>
        </div>

        {/* Code */}
        <div className="overflow-x-auto p-4 sm:p-6 md:p-8">
          <pre className="text-xs sm:text-sm leading-7 text-slate-300">
{`import Orbit from "@orbit/sdk";


const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});


const user = await orbit.users.create({
  name: "John Doe",
  email: "john@example.com",
});


console.log(user);`}
          </pre>
        </div>
      </div>
    </div>

    {/* Example Cards */}
    <div className="mt-16 sm:mt-20 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Authentication Flow",
          description:
            "Implement secure login, registration, session management, and role-based permissions.",
          badge: "Popular",
        },
        {
          title: "CRUD Operations",
          description:
            "Create, read, update, and delete resources using Orbit APIs and SDKs.",
          badge: "Essential",
        },
        {
          title: "Pagination & Filtering",
          description:
            "Efficiently retrieve and manage large datasets with advanced query controls.",
          badge: "Advanced",
        },
        {
          title: "Error Handling",
          description:
            "Learn retry logic, exception handling, and production-grade API resilience.",
          badge: "Best Practice",
        },
        {
          title: "Webhook Events",
          description:
            "Receive real-time updates and automate workflows using webhooks.",
          badge: "Automation",
        },
        {
          title: "SDK Integrations",
          description:
            "Connect Orbit with React, Next.js, Node.js, Python, and more.",
          badge: "Developer Favorite",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
        >
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {item.badge}
          </span>

          <h3 className="mt-5 text-lg sm:text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {item.description}
          </p>

          <button className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">
            View Example
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 sm:mt-20 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 text-center shadow-sm">
      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
        200+ Production-Ready Code Examples
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
        Browse complete examples across APIs, SDKs, authentication,
        webhooks, data management, and enterprise integrations.
      </p>

      <button className="mt-6 sm:mt-8 rounded-2xl bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition hover:bg-black">
        Explore All Examples
      </button>
    </div>
  </div>
</section>

<section className="relative overflow-hidden py-24 sm:py-16 md:py-20">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#e0e7ff,transparent_35%)]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
        Framework Integrations
      </span>

      <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Integrate Orbit with
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {" "}
          Your Favorite Stack
        </span>
      </h2>

      <p className="mt-5 text-base sm:text-lg text-slate-600">
        Framework-specific guides, starter repositories, tutorials, and
        deployment-ready examples for modern applications.
      </p>
    </div>

    {/* Framework Cards */}
    <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          name: "React",
          icon: "⚛️",
          description:
            "Build modern frontends with Orbit SDKs, authentication, and real-time APIs.",
          tutorials: "24 Guides",
          repo: "Starter Repository",
          badge: "Most Popular",
        },
        {
          name: "Next.js",
          icon: "▲",
          description:
            "Server-side rendering, API routes, authentication, and enterprise deployments.",
          tutorials: "18 Guides",
          repo: "Production Starter",
          badge: "Recommended",
        },
        {
          name: "Node.js",
          icon: "🟢",
          description:
            "Backend APIs, webhooks, authentication, and scalable services.",
          tutorials: "20 Guides",
          repo: "Backend Starter",
          badge: "Backend",
        },
        {
          name: "Python",
          icon: "🐍",
          description:
            "Data processing, automation, AI workflows, and Orbit integrations.",
          tutorials: "15 Guides",
          repo: "Python SDK",
          badge: "AI Ready",
        },
        {
          name: "Mobile Apps",
          icon: "📱",
          description:
            "Integrate Orbit into React Native and modern mobile applications.",
          tutorials: "12 Guides",
          repo: "Mobile Starter",
          badge: "Cross Platform",
        },
        {
          name: "Serverless",
          icon: "☁️",
          description:
            "Deploy globally with serverless functions and event-driven architectures.",
          tutorials: "14 Guides",
          repo: "Cloud Starter",
          badge: "Scalable",
        },
      ].map((framework) => (
        <div
          key={framework.name}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl sm:text-2xl text-white shadow-lg">
                {framework.icon}
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {framework.badge}
              </span>
            </div>

            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
              {framework.name}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600">
              {framework.description}
            </p>

            <div className="mt-6 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 sm:px-4 py-2.5 sm:py-3">
                <span className="text-xs sm:text-sm text-slate-600">
                  Integration Guides
                </span>
                <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                  {framework.tutorials}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 sm:px-4 py-2.5 sm:py-3">
                <span className="text-xs sm:text-sm text-slate-600">
                  Starter Repository
                </span>
                <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                  Available
                </span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3">
              <button className="flex-1 rounded-xl bg-slate-900 px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-white transition hover:bg-black">
                View Guide
              </button>

              <button className="rounded-xl border border-slate-200 px-4 sm:px-5 py-2.5 sm:py-3 font-medium text-slate-700 transition hover:bg-slate-50">
                GitHub
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Featured Tutorial */}
    <div className="mt-16 sm:mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">
      <div className="border-b border-slate-800 px-5 sm:px-6 md:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Featured Integration Tutorial
          </h3>

          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
            React + Orbit
          </span>
        </div>
      </div>

      <div className="overflow-x-auto p-4 sm:p-6 md:p-8">
        <pre className="text-xs sm:text-sm leading-7 text-slate-300">
{`npm install @orbit/sdk


import Orbit from "@orbit/sdk";


const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});


const projects = await orbit.projects.list();


console.log(projects);`}
        </pre>
      </div>
    </div>

    {/* Integration Resources */}
    <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Framework Guides
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Step-by-step integration documentation for every supported
          framework.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Starter Repositories
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Clone production-ready repositories and launch projects quickly.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Integration Tutorials
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Follow guided tutorials covering setup, deployment, and best
          practices.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-10 md:p-12 text-center">
      <h3 className="text-3xl sm:text-4xl font-bold text-white">
        100+ Integration Resources
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-300">
        Discover framework guides, starter repositories, deployment
        tutorials, and real-world integration examples.
      </p>

      <button className="mt-6 sm:mt-8 rounded-2xl bg-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-slate-900 transition hover:scale-[1.02]">
        Explore Integrations
      </button>
    </div>
  </div>
</section>
 
 <section className="relative overflow-hidden py-16 sm:py-24">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#e0e7ff,transparent_35%)]" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
        Community & Open Source
      </span>

      <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        Built by the{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Orbit Community
        </span>
      </h2>

      <p className="mt-5 text-base sm:text-lg text-slate-600">
        Discover open-source projects, community showcases, production
        case studies, and contributions from developers building with Orbit.
      </p>
    </div>

    {/* Spotlight Projects */}
    <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Orbit SaaS Dashboard",
          author: "Sarah Chen",
          category: "Open Source",
          description:
            "A complete multi-tenant SaaS platform featuring authentication, billing, analytics, and user management.",
          stars: "2.4k",
        },
        {
          title: "AI Support Platform",
          author: "David Wilson",
          category: "Community Showcase",
          description:
            "Customer support platform powered by Orbit APIs, AI workflows, and real-time event processing.",
          stars: "1.8k",
        },
        {
          title: "Developer Portal",
          author: "Alex Kumar",
          category: "Production Case Study",
          description:
            "A modern developer portal used in production with SDK documentation, API references, and tutorials.",
          stars: "3.1k",
        },
      ].map((project) => (
        <div
          key={project.title}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

          <div className="relative flex-1">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {project.category}
            </span>

            <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
              By {project.author}
            </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
              {project.description}
            </p>
          </div>

          <div className="relative mt-6 flex items-center justify-between pt-4 border-t border-slate-50">
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span className="font-semibold text-slate-900 text-sm sm:text-base">
                {project.stars}
              </span>
            </div>

            <button className="text-sm sm:text-base font-semibold text-blue-600 transition hover:text-blue-700">
              View Repository →
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Community Stats */}
    <div className="mt-16 sm:mt-20 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
      <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-4">
        <div className="p-2">
          <h3 className="text-2xl sm:text-4xl font-bold text-slate-900">500+</h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600">Open Source Projects</p>
        </div>

        <div className="p-2">
          <h3 className="text-2xl sm:text-4xl font-bold text-slate-900">12k+</h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600">Community Developers</p>
        </div>

        <div className="p-2">
          <h3 className="text-2xl sm:text-4xl font-bold text-slate-900">3k+</h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600">Contributions</p>
        </div>

        <div className="p-2">
          <h3 className="text-2xl sm:text-4xl font-bold text-slate-900">150+</h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600">Case Studies</p>
        </div>
      </div>
    </div>

    {/* Success Stories */}
    <div className="mt-16 sm:mt-20">
      <div className="mb-8 sm:mb-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Community Success Stories
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Learn how developers and teams are building production applications with Orbit.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-4xl sm:text-5xl" role="img" aria-label="rocket">🚀</span>
            <h4 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-slate-900">
              From Side Project to Startup
            </h4>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Built with Orbit APIs and SDKs, this project scaled from a
              weekend experiment into a production SaaS platform serving
              thousands of customers.
            </p>
          </div>
          <button className="mt-6 self-start font-semibold text-blue-600 hover:text-blue-700 transition">
            Read Case Study →
          </button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-4xl sm:text-5xl" role="img" aria-label="globe">🌎</span>
            <h4 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-slate-900">
              Global Developer Community
            </h4>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Contributors worldwide collaborate on repositories, share
              examples, publish tutorials, and help improve the Orbit ecosystem.
            </p>
          </div>
          <button className="mt-6 self-start font-semibold text-blue-600 hover:text-blue-700 transition">
            Explore Community →
          </button>
        </div>
      </div>
    </div>

    {/* Contribution Guidelines */}
    <div className="mt-16 sm:mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">
      <div className="border-b border-slate-800 px-6 sm:px-8 py-4 sm:py-5">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Contribution Guidelines
        </h3>
      </div>

      <div className="p-6 sm:p-8">
        <ol className="grid gap-y-2 sm:gap-y-3 text-sm sm:text-base leading-7 text-slate-300 list-decimal pl-5">
          <li>Fork the repository</li>
          <li>Create a feature branch</li>
          <li>Follow coding standards</li>
          <li>Submit a pull request</li>
          <li>Participate in code review</li>
          <li>Share your example with the community</li>
        </ol>
      </div>
    </div>

    {/* Community Resources */}
    <div className="mt-12 sm:mt-16 grid gap-6 grid-cols-1 md:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          GitHub Repositories
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Explore community-maintained projects, starters, and integrations.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Example Submissions
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Submit your Orbit project and inspire other developers.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          Learning Resources
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Tutorials, guides, videos, and community-driven documentation.
        </p>
      </div>
    </div>

    {/* Final CTA */}
    <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-center">
      <h3 className="text-2xl sm:text-4xl font-bold text-white">
        Share Your Orbit Project
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-blue-100">
        Join thousands of developers, contribute to open source,
        publish examples, and inspire the next generation of builders.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-[1.02] active:scale-[0.98]">
          Submit Project
        </button>

        <button className="w-full sm:w-auto rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]">
          Join Community
        </button>
      </div>
    </div>
  </div>
</section>

       </div>
    </>
  )
}

export default Examples
