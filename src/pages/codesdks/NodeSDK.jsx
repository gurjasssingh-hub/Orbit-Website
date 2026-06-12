import React from "react";

export default function NodeSDK() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            Node.js SDK
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Build Powerful Backends with Orbit
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
            Integrate Orbit into Node.js applications, APIs, serverless
            functions, and backend services with the official SDK.
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
{`npm install @orbit/node`}
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
{`import Orbit from "@orbit/node";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

const projects = await orbit.projects.list();

console.log(projects);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Express Example */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Express Integration
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`import express from "express";
import Orbit from "@orbit/node";

const app = express();

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

app.get("/projects", async (req, res) => {
  const projects = await orbit.projects.list();

  res.json(projects);
});

app.listen(3000);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Backend Features
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">🔐</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Secure Authentication
            </h3>

            <p className="mt-3 text-slate-600">
              Authenticate requests securely using API keys and environment
              variables.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">⚡</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Webhooks
            </h3>

            <p className="mt-3 text-slate-600">
              Process real-time events and automate backend workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">☁️</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Serverless Ready
            </h3>

            <p className="mt-3 text-slate-600">
              Deploy with AWS Lambda, Vercel Functions, and modern cloud
              platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Common Use Cases
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              REST APIs
            </h3>

            <p className="mt-3 text-slate-600">
              Build scalable APIs powered by Orbit services.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Background Jobs
            </h3>

            <p className="mt-3 text-slate-600">
              Process asynchronous tasks and scheduled workflows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-3xl bg-slate-900 p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Start Building with Node.js
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Explore backend examples, webhooks, authentication guides,
            and production-ready integrations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              View Examples
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white">
              API Reference
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}