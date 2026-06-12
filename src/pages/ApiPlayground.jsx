import React, { useState } from "react";

export default function ApiPlayground() {
  const [endpoint, setEndpoint] = useState("/v1/projects");
  const [method, setMethod] = useState("GET");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const mockResponse = {
    status: 200,
    data: [
      { id: "proj_1", name: "Demo Project A" },
      { id: "proj_2", name: "Demo Project B" },
    ],
    message: "Success",
  };

  const sendRequest = () => {
    setLoading(true);
    setResponse(null);

    setTimeout(() => {
      setResponse(mockResponse);
      setLoading(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            API Playground
          </h1>

          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base max-w-2xl">
            Explore endpoints, test requests, inspect responses, and experiment
            with Orbit APIs directly from your browser.
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-12 grid lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Request Panel */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Request Builder
          </h2>

          {/* Method + Endpoint */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full sm:w-auto rounded-xl border border-slate-200 px-4 py-3 bg-white text-sm"
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>

            <input
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="w-full sm:flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="/v1/projects"
            />
          </div>

          {/* Headers */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-700">
              Headers
            </h3>

            <pre className="mt-2 rounded-xl bg-slate-950 p-4 text-xs text-emerald-400 overflow-x-auto whitespace-pre">
{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
            </pre>
          </div>

          {/* Body */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-700">
              Body (JSON)
            </h3>

            <pre className="mt-2 rounded-xl bg-slate-950 p-4 text-xs text-slate-300 overflow-x-auto whitespace-pre">
{`{
  "name": "New Project"
}`}
            </pre>
          </div>

          {/* Button */}
          <button
            onClick={sendRequest}
            className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white hover:bg-black transition text-sm sm:text-base"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </div>

        {/* Response Panel */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Response
          </h2>

          <div className="mt-6">
            {!response && !loading && (
              <p className="text-slate-500 text-sm">
                Click “Send Request” to see response
              </p>
            )}

            {loading && (
              <p className="text-slate-500 text-sm animate-pulse">
                Loading response...
              </p>
            )}

            {response && (
              <div>
                <div className="flex flex-wrap gap-2.5 items-center mb-4">
                  <span className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
                    {response.status}
                  </span>

                  <span className="text-sm text-slate-600">
                    {response.message}
                  </span>
                </div>

                <pre className="rounded-xl bg-slate-950 p-4 text-xs text-emerald-400 overflow-x-auto whitespace-pre">
{JSON.stringify(response, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}