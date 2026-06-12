import React from "react";

export default function JavaScriptSDK() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            SDK Documentation
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            JavaScript SDK
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
            Build applications faster with the official Orbit JavaScript SDK.
            Authenticate requests, interact with APIs, and manage resources
            using a developer-friendly interface.
          </p>
        </div>
      </section>

      {/* Installation */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Installation
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-sm text-emerald-400">
{`npm install @orbit/sdk`}
            </pre>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Quick Start
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`import Orbit from "@orbit/sdk";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

const projects = await orbit.projects.list();

console.log(projects);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Key Features
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">⚡</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Fast Integration
            </h3>

            <p className="mt-3 text-slate-600">
              Get started with only a few lines of code.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">🔐</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Secure Authentication
            </h3>

            <p className="mt-3 text-slate-600">
              Built-in support for API key authentication.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">📦</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Typed APIs
            </h3>

            <p className="mt-3 text-slate-600">
              Consistent interfaces and predictable responses.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-3xl bg-slate-900 p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Continue Building
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Explore API references, examples, and advanced guides.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              API Reference
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white">
              View Examples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}