import React from "react";

export default function PythonSDK() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            Python SDK
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Automate and Scale with Python
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
            Use the Orbit Python SDK to build automation workflows,
            AI-powered applications, backend services, and data pipelines.
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
{`pip install orbit-sdk`}
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
            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`from orbit import Orbit

client = Orbit(
    api_key="YOUR_API_KEY"
)

projects = client.projects.list()

print(projects)
`}
            </pre>
          </div>
        </div>
      </section>

      {/* AI Example */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 sm:px-8 py-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              AI Workflow Example
            </h2>
          </div>

          <div className="bg-slate-950 p-5 sm:p-8">
            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
{`from orbit import Orbit

client = Orbit(
    api_key="YOUR_API_KEY"
)

workflow = client.workflows.run(
    workflow_id="ai-support",
    input={
        "message": "Help me reset my password"
    }
)

print(workflow)
`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Python SDK Features
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">🤖</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              AI Workflows
            </h3>

            <p className="mt-3 text-slate-600">
              Build intelligent automation and AI-powered applications.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">📊</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Data Processing
            </h3>

            <p className="mt-3 text-slate-600">
              Process, analyze, and manage large datasets efficiently.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="text-3xl">⚙️</div>

            <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Automation
            </h3>

            <p className="mt-3 text-slate-600">
              Schedule jobs, automate workflows, and streamline operations.
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
              Machine Learning Pipelines
            </h3>

            <p className="mt-3 text-slate-600">
              Integrate Orbit into data science and AI workflows.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Business Automation
            </h3>

            <p className="mt-3 text-slate-600">
              Automate repetitive tasks and operational processes.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-3xl bg-slate-900 p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Start Building with Python
          </h2>

          <p className="mt-4 text-slate-300">
            Explore examples, tutorials, AI workflows, and production-ready integrations.
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