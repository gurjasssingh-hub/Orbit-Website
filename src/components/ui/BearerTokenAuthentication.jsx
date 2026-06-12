import { useState } from "react";

const codeExamples = {
  javascript: `const response = await fetch(
  "https://api.orbit.dev/v1/workspaces",
  {
    method: "GET",
    headers: {
      "Authorization":
        "Bearer YOUR_API_KEY",
      "Content-Type":
        "application/json"
    }
  }
);

const data = await response.json();

console.log(data);`,

  python: `import requests

response = requests.get(
    "https://api.orbit.dev/v1/workspaces",
    headers={
        "Authorization":
            "Bearer YOUR_API_KEY",
        "Content-Type":
            "application/json"
    }
)

print(response.json())`,
};

export default function BearerTokenAuthentication() {
  const [activeTab, setActiveTab] = useState("javascript");

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] sm:h-[500px] sm:w-[800px] lg:h-[600px] lg:w-[1000px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-slate-700 shadow-sm">
            Authentication Method
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Bearer Token Authentication
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Authenticate every request using your Orbit API key.
            Include the token in the Authorization header to
            securely access Orbit resources.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-12 lg:mt-20 grid gap-8 lg:gap-12 xl:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Authorization Format */}
            <div className="rounded-[24px] sm:rounded-[32px] border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Authorization Header
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
                All Orbit API requests must include a valid
                bearer token in the Authorization header.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-4 sm:p-5">
                <code className="text-xs sm:text-sm text-emerald-400 whitespace-nowrap">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>

            {/* Required Headers */}
            <div className="rounded-[24px] sm:rounded-[32px] border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Required Request Headers
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-mono text-sm text-blue-600">
                    Authorization
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Bearer token used to authenticate requests.
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-mono text-sm text-blue-600">
                    Content-Type
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    application/json
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-mono text-sm text-blue-600">
                    Accept
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    application/json
                  </div>
                </div>
              </div>
            </div>

            {/* Common Patterns */}
            <div className="rounded-[24px] sm:rounded-[32px] border border-slate-200 bg-slate-950 p-5 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Common Authentication Patterns
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-sm sm:text-base text-slate-300">
                    Store credentials in environment variables
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-sm sm:text-base text-slate-300">
                    Reuse authenticated clients
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-sm sm:text-base text-slate-300">
                    Rotate API keys periodically
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-sm sm:text-base text-slate-300">
                    Never expose keys in frontend code
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Code Example */}
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-800 bg-slate-950 shadow-2xl">
              {/* Tabs */}
              <div className="border-b border-slate-800 p-4">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab("javascript")}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                      activeTab === "javascript"
                        ? "bg-white text-slate-900"
                        : "text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    JavaScript
                  </button>

                  <button
                    onClick={() => setActiveTab("python")}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                      activeTab === "python"
                        ? "bg-white text-slate-900"
                        : "text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    Python
                  </button>
                </div>
              </div>

              {/* Code Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-4 sm:px-6 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">
                  Example Request
                </span>
              </div>

              {/* Code */}
              <pre className="overflow-x-auto p-4 sm:p-6 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
                <code>{codeExamples[activeTab]}</code>
              </pre>
            </div>

            {/* Response */}
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-800 bg-slate-950 shadow-xl">
              <div className="border-b border-slate-800 px-4 sm:px-6 py-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500">
                  Example Response
                </span>
              </div>

              <pre className="overflow-x-auto p-4 sm:p-6 text-xs sm:text-sm leading-6 text-slate-300">
{`{
  "success": true,
  "data": {
    "workspace_id": "ws_12345",
    "name": "Production Workspace",
    "status": "active"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}