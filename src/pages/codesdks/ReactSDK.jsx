import React from "react";

export default function ReactSDK() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            React SDK
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Build React Apps with Orbit
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
            Integrate Orbit into React applications using hooks,
            components, and client-side APIs designed for modern
            frontend development.
          </p>
        </div>
      </section>

      {/* Installation */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Installation
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-sm text-emerald-400">
{`npm install @orbit/react`}
            </pre>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Quick Start
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`import { OrbitProvider } from "@orbit/react";

function App() {
  return (
    <OrbitProvider apiKey="YOUR_API_KEY">
      <Dashboard />
    </OrbitProvider>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* React Hooks Example */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Using Hooks
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`import { useProjects } from "@orbit/react";

export default function Projects() {
  const { data, loading } = useProjects();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((project) => (
        <li key={project.id}>
          {project.name}
        </li>
      ))}
    </ul>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          React Features
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">🪝</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              React Hooks
            </h3>

            <p className="mt-3 text-slate-600">
              Fetch and manage Orbit resources with simple hooks.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">⚡</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Fast Rendering
            </h3>

            <p className="mt-3 text-slate-600">
              Optimized for modern React applications.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">🔄</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Real-Time Updates
            </h3>

            <p className="mt-3 text-slate-600">
              Keep UI synchronized with Orbit events.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900 p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Build?
          </h2>

          <p className="mt-4 text-slate-300">
            Explore examples, API references, and advanced React guides.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button className="w-full sm:w-auto rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              View Examples
            </button>

            <button className="w-full sm:w-auto rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white">
              API Reference
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}