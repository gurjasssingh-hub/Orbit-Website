import React from "react";

const ApiReference = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-20 py-10 md:py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-semibold">
          API Reference
        </h1>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Complete list of Orbit API endpoints and usage.
        </p>

        {/* Endpoint Card */}
        <div className="mt-8 sm:mt-10 border rounded-xl p-4 sm:p-6">
          <p className="text-sm text-blue-600 font-medium">GET</p>
          <h2 className="font-semibold mt-1 text-base sm:text-lg">/v1/status</h2>
          <p className="text-gray-600 text-sm mt-2">
            Check system health and API status.
          </p>

          <pre className="bg-gray-50 p-4 mt-4 rounded-lg text-xs sm:text-sm overflow-x-auto whitespace-pre">
{`{
  "status": "active",
  "uptime": "99.99%"
}`}
          </pre>
        </div>

      </div>
    </div>
  );
};

export default ApiReference;