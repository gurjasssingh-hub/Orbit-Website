import React from "react";

export default function RestApiClient() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            REST API Client
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Direct Access to Orbit APIs
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
            Send HTTP requests directly to Orbit endpoints using any
            programming language, framework, or API client.
          </p>
        </div>
      </section>

      {/* Base URL */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Base URL
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-sm text-emerald-400">
{`https://api.orbit.dev/v1`}
            </pre>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Authentication
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`Authorization: Bearer YOUR_API_KEY`}
            </pre>
          </div>
        </div>
      </section>

      {/* Request Example */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Request Example
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`curl https://api.orbit.dev/v1/projects \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"`}
            </pre>
          </div>
        </div>
      </section>

      {/* Response Example */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-4 sm:py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Response Example
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
{`{
  "data": [
    {
      "id": "proj_123",
      "name": "My Project"
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          API Features
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">🔐</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Secure Authentication
            </h3>

            <p className="mt-3 text-slate-600">
              Authenticate every request using API keys.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">📄</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Pagination
            </h3>

            <p className="mt-3 text-slate-600">
              Efficiently navigate large datasets.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">⚠️</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Error Handling
            </h3>

            <p className="mt-3 text-slate-600">
              Consistent error responses and status codes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900 p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Explore the API
          </h2>

          <p className="mt-4 text-slate-300">
            Learn about endpoints, authentication, rate limits,
            pagination, and webhooks.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button className="w-full sm:w-auto rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              API Reference
            </button>

            <button className="w-full sm:w-auto rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white">
              Authentication Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}