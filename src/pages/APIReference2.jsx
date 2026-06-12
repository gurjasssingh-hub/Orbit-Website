import React from 'react';
import { Link } from "react-router-dom";

const APIReference2 = () => {
  return (
    <>
      <div className='px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-20 bg-[#f7f9fc] space-y-8 sm:space-y-12'>

        <section
          id="authentication"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 md:p-12 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-3xl w-full">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
                Authentication
              </div>

              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Securely Connect to Orbit APIs
              </h2>

              <p className="mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
                Every request to the Orbit API must be authenticated. Orbit uses
                industry-standard authentication methods to ensure your applications
                remain secure, reliable, and compliant at scale.
              </p>

              {/* Key Points Grid */}
              <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "API Keys & Access Tokens",
                  "Bearer Token Authentication",
                  "OAuth 2.0 Support",
                  "Token Expiration & Refresh Flow",
                  "Authorization Header Examples",
                  "Secure Credential Management",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-slate-300 transition"
                  >
                    <p className="text-sm sm:text-base font-medium text-slate-800">{item}</p>
                  </div>
                ))}
              </div>

              {/* Best Practices */}
              <div className="mt-8 sm:mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
                  Security Best Practices
                </h3>

                <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                  <li>• Never expose API keys in client-side applications.</li>
                  <li>• Store credentials in secure environment variables.</li>
                  <li>• Rotate access tokens regularly.</li>
                  <li>• Use least-privilege permissions whenever possible.</li>
                  <li>• Monitor API activity for unusual behavior.</li>
                </ul>
              </div>
            </div>

            {/* Right Code Example */}
            <div className="w-full lg:w-[450px] shrink-0">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-950 shadow-lg">
                
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                  <span className="text-xs sm:text-sm font-medium text-slate-300">
                    Authorization Example
                  </span>
                  <span className="text-xs text-emerald-400">
                    cURL
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
{`curl https://api.orbit.com/v1/projects \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/Signup" className="w-full">
                  <button className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm sm:text-base font-medium text-white transition hover:bg-black">
                    Generate API Key
                  </button>
                </Link>

                <Link to="/Guides2" className="w-full">
                  <button className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm sm:text-base font-medium text-slate-700 transition hover:bg-slate-50">
                    View OAuth Guide
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-10 sm:mt-12 flex justify-between border-t border-slate-200 pt-6 sm:pt-8 gap-4">
            <button className="rounded-xl border border-slate-300 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Back to Overview
            </button>

            <button className="rounded-xl bg-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-black transition">
              Next: API Endpoints →
            </button>
          </div>
        </section>

        <section
          id="api-endpoints"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 md:p-12 shadow-sm"
        >
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
                API Endpoints
              </div>

              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Explore Orbit API Routes
              </h2>

              <p className="mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
                Access Orbit resources through a structured set of RESTful endpoints.
                Use standard HTTP methods to create, retrieve, update, and manage
                resources across your workspace.
              </p>
            </div>

            {/* Base URL */}
            <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs sm:text-sm font-medium text-slate-500 mb-2">
                Base URL
              </p>

              <code className="text-base sm:text-lg font-semibold text-slate-900 break-all">
                https://api.orbit.com/v1
              </code>

              <p className="mt-3 text-sm sm:text-base text-slate-600">
                All Orbit API requests begin with the base URL above. Versioning is
                included directly in the endpoint path.
              </p>
            </div>

            {/* HTTP Methods */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">
                Supported HTTP Methods
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <span className="font-bold text-emerald-700">GET</span>
                  <p className="mt-2 text-sm text-slate-600">
                    Retrieve resources and data.
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <span className="font-bold text-blue-700">POST</span>
                  <p className="mt-2 text-sm text-slate-600">
                    Create new resources.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <span className="font-bold text-amber-700">PUT</span>
                  <p className="mt-2 text-sm text-slate-600">
                    Update existing resources.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                  <span className="font-bold text-red-700">DELETE</span>
                  <p className="mt-2 text-sm text-slate-600">
                    Remove resources permanently.
                  </p>
                </div>
              </div>
            </div>

            {/* Endpoint Categories */}
            <div className="mt-10 sm:mt-14">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">
                Endpoint Categories
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Users",
                    desc: "Manage user profiles, permissions, and account settings."
                  },
                  {
                    title: "Projects",
                    desc: "Create, organize, and manage projects."
                  },
                  {
                    title: "Workflows",
                    desc: "Automate tasks and operational processes."
                  },
                  {
                    title: "Analytics",
                    desc: "Access reporting, metrics, and performance insights."
                  },
                  {
                    title: "Notifications",
                    desc: "Manage alerts, messages, and delivery preferences."
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-slate-900 text-base">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Request */}
            <div className="mt-10 sm:mt-14 grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
                  Request Example
                </h3>

                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      GET
                    </span>

                    <code className="text-sm font-medium text-slate-800">
                      /projects
                    </code>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600">
                    Retrieve all projects available within your workspace.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-950 shadow-lg">
                <div className="border-b border-slate-800 px-5 py-4">
                  <span className="text-xs sm:text-sm text-slate-300">
                    Example Request
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
{`curl --request GET \\
https://api.orbit.com/v1/projects \\
-H "Authorization: Bearer YOUR_API_KEY"`}
                </pre>
              </div>
            </div>

            {/* Versioning */}
            <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                API Versioning
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl">
                Orbit uses URL-based versioning to ensure long-term compatibility.
                New releases maintain backward compatibility whenever possible,
                allowing integrations to upgrade on their own schedule.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-xs sm:text-sm font-medium text-white">
                  Current: v1
                </span>

                <span className="rounded-full border border-slate-300 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
                  Stable Release
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 sm:mt-14 flex justify-between border-t border-slate-200 pt-6 sm:pt-8 gap-4">
              <button className="rounded-xl border border-slate-300 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                ← Authentication
              </button>

              <button className="rounded-xl bg-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-black transition">
                Next: Request & Response →
              </button>
            </div>

          </div>
        </section>

        <section
          id="request-response"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 md:p-12 shadow-sm"
        >
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
                Request & Response Format
              </div>

              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Understand Orbit Data Exchange
              </h2>

              <p className="mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
                Orbit APIs use predictable JSON structures for requests and responses,
                making integrations simple, scalable, and easy to maintain across
                applications.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "JSON Request Structure",
                "Required & Optional Fields",
                "Response Schemas",
                "Success Responses",
                "Error Responses",
                "Pagination Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            {/* Request Example */}
            <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-950 shadow-lg order-2 lg:order-1">
                <div className="border-b border-slate-800 px-5 py-4">
                  <span className="text-xs sm:text-sm text-slate-300">
                    Sample Request Payload
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
{`{
  "name": "Marketing Dashboard",
  "description": "Q3 analytics project",
  "visibility": "private",
  "team_id": "team_123"
}`}
                </pre>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Request Structure
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  All Orbit requests are sent using JSON. Required fields must be
                  included, while optional fields can be omitted when not needed.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm sm:text-base">
                    <span className="font-medium text-slate-800">name</span>
                    <span className="text-emerald-600 font-medium text-xs sm:text-sm">Required</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm sm:text-base">
                    <span className="font-medium text-slate-800">visibility</span>
                    <span className="text-emerald-600 font-medium text-xs sm:text-sm">Required</span>
                  </div>

                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="font-medium text-slate-800">description</span>
                    <span className="text-slate-500 font-medium text-xs sm:text-sm">Optional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Examples */}
            <div className="mt-10 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8">
                Response Schemas
              </h3>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Success Response */}
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-200">
                  <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-4">
                    <span className="font-semibold text-emerald-700 text-sm sm:text-base">
                      201 Created
                    </span>
                  </div>

                  <pre className="overflow-x-auto bg-white p-5 sm:p-6 text-xs sm:text-sm text-slate-800 whitespace-pre">
{`{
  "success": true,
  "id": "proj_123",
  "message": "Project created successfully"
}`}
                  </pre>
                </div>

                {/* Error Response */}
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-red-200">
                  <div className="bg-red-50 border-b border-red-200 px-5 py-4">
                    <span className="font-semibold text-red-700 text-sm sm:text-base">
                      400 Bad Request
                    </span>
                  </div>

                  <pre className="overflow-x-auto bg-white p-5 sm:p-6 text-xs sm:text-sm text-slate-800 whitespace-pre">
{`{
  "success": false,
  "error": {
    "code": "INVALID_FIELD",
    "message": "Name is required"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8+">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Pagination Support
              </h3>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-3xl">
                Large collections are automatically paginated to improve performance.
                Orbit provides cursor-based pagination with metadata to help retrieve
                additional records efficiently.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-950">
                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
{`{
  "data": [...],
  "pagination": {
    "next_cursor": "cursor_456",
    "has_more": true
  }
}`}
                </pre>
              </div>
            </div>

            {/* Sample Flow */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Typical Request Flow
              </h3>

              <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Send Request",
                  "Validate Payload",
                  "Process Resource",
                  "Receive Response",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 text-center"
                  >
                    <div className="text-xs font-semibold text-slate-500">
                      STEP {index + 1}
                    </div>

                    <div className="mt-2 text-sm sm:text-base font-medium text-slate-900">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 sm:mt-14 flex justify-between border-t border-slate-200 pt-6 sm:pt-8 gap-4">
              <button className="rounded-xl border border-slate-300 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                ← API Endpoints
              </button>

              <button className="rounded-xl bg-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-black transition">
                Next: Rate Limits →
              </button>
            </div>

          </div>
        </section>

        <section
          id="rate-limits"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 md:p-12 shadow-sm"
        >
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
                Rate Limits & Usage
              </div>

              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Build Reliably at Any Scale
              </h2>

              <p className="mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
                Orbit applies rate limits to ensure fair usage, platform stability,
                and predictable performance for every customer. Understanding usage
                limits helps you design resilient and scalable integrations.
              </p>
            </div>

            {/* Plan Limits */}
            <div className="mt-10 sm:mt-14">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">
                Plan-Based API Limits
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8">
                  <div className="text-xs sm:text-sm text-slate-500">
                    Starter
                  </div>

                  <div className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                    100
                  </div>

                  <div className="text-sm sm:text-base text-slate-600">
                    Requests / Minute
                  </div>

                  <div className="mt-6 text-xs sm:text-sm text-slate-500">
                    Up to 6,000 requests per hour
                  </div>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border-2 border-slate-900 p-6 sm:p-8 relative">
                  <span className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full bg-slate-900 px-3 py-1 text-[10px] sm:text-xs font-medium text-white">
                    Most Popular
                  </span>

                  <div className="text-xs sm:text-sm text-slate-500">
                    Professional
                  </div>

                  <div className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                    1,000
                  </div>

                  <div className="text-sm sm:text-base text-slate-600">
                    Requests / Minute
                  </div>

                  <div className="mt-6 text-xs sm:text-sm text-slate-500">
                    Up to 60,000 requests per hour
                  </div>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
                  <div className="text-xs sm:text-sm text-slate-500">
                    Enterprise
                  </div>

                  <div className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
                    Custom
                  </div>

                  <div className="text-sm sm:text-base text-slate-600">
                    Dedicated Limits
                  </div>

                  <div className="mt-6 text-xs sm:text-sm text-slate-500">
                    Tailored for high-volume workloads
                  </div>
                </div>
              </div>
            </div>

            {/* Rate Limit Headers */}
            <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Rate-Limit Headers
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                  Orbit includes usage metadata within response headers so applications
                  can monitor and manage request quotas automatically.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="font-mono text-xs sm:text-sm text-slate-900 break-all">
                      X-RateLimit-Limit
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">
                      Maximum requests allowed.
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="font-mono text-xs sm:text-sm text-slate-900 break-all">
                      X-RateLimit-Remaining
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">
                      Remaining requests available.
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <div className="font-mono text-xs sm:text-sm text-slate-900 break-all">
                      X-RateLimit-Reset
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">
                      Time until quota resets.
                    </div>
                  </div>
                </div>
              </div>

              {/* Example */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-950">
                <div className="border-b border-slate-800 px-5 py-4">
                  <span className="text-xs sm:text-sm text-slate-300">
                    Example Response Headers
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
{`HTTP/1.1 200 OK

X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 742
X-RateLimit-Reset: 1711123456`}
                </pre>
              </div>
            </div>

            {/* Burst Handling */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-900">
                Burst Request Handling
              </h3>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-amber-800 leading-relaxed">
                Short traffic spikes are accommodated through burst allowances.
                Requests that exceed your allocated threshold may receive a
                <span className="font-semibold"> 429 Too Many Requests </span>
                response until capacity becomes available.
              </p>
            </div>

            {/* Retry Recommendations */}
            <div className="mt-10 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">
                Retry Recommendations
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {[
                  {
                    title: "Use Exponential Backoff",
                    desc: "Gradually increase retry intervals after failures."
                  },
                  {
                    title: "Respect Retry Headers",
                    desc: "Wait for reset times before resending requests."
                  },
                  {
                    title: "Avoid Immediate Retries",
                    desc: "Prevent cascading traffic spikes."
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 p-5 sm:p-6"
                  >
                    <h4 className="font-semibold text-slate-900 text-base">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Best Practices */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Optimization Best Practices
              </h3>

              <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  "Cache frequently requested resources",
                  "Batch operations when possible",
                  "Use pagination for large datasets",
                  "Monitor rate-limit headers",
                  "Avoid unnecessary polling",
                  "Implement retry logic gracefully"
                ].map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 text-sm sm:text-base text-slate-800"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Flow */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Request Lifecycle
              </h3>

              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  "Request Sent",
                  "Limit Checked",
                  "Request Processed",
                  "Headers Returned",
                  "Quota Updated",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 text-center"
                  >
                    <div className="text-xs font-semibold text-slate-500">
                      STEP {index + 1}
                    </div>

                    <div className="mt-2 text-xs sm:text-sm font-medium text-slate-900">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 sm:mt-14 flex justify-between border-t border-slate-200 pt-6 sm:pt-8 gap-4">
              <button className="rounded-xl border border-slate-300 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                ← Request & Response
              </button>

              <button className="rounded-xl bg-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-black transition">
                Next: Error Handling →
              </button>
            </div>

          </div>
        </section>

        <section
          id="error-handling"
          className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 md:p-12 shadow-sm"
        >
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
                Error Handling
              </div>

              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Diagnose Issues Quickly
              </h2>

              <p className="mt-4 text-sm sm:text-lg text-slate-600 leading-relaxed">
                Orbit APIs provide standardized HTTP status codes and structured
                error responses to help developers identify, troubleshoot, and
                resolve issues efficiently.
              </p>
            </div>

            {/* Status Codes */}
            <div className="mt-10 sm:mt-14">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8">
                Common Status Codes
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {[
                  { code: "200", title: "OK" },
                  { code: "201", title: "Created" },
                  { code: "400", title: "Bad Request" },
                  { code: "401", title: "Unauthorized" },
                  { code: "403", title: "Forbidden" },
                  { code: "404", title: "Not Found" },
                  { code: "429", title: "Rate Limited" },
                  { code: "500", title: "Server Error" },
                ].map((status) => (
                  <div
                    key={status.code}
                    className="rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-md transition"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {status.code}
                    </div>

                    <div className="mt-2 text-xs sm:text-sm font-medium text-slate-800">
                      {status.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Response Format */}
            <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Error Response Structure
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                  Every failed request returns a predictable JSON structure,
                  allowing applications to handle errors consistently.
                </p>

                <div className="mt-6 sm:mt-8 space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <span className="font-mono text-xs sm:text-sm font-semibold">success</span>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Indicates request outcome.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <span className="font-mono text-xs sm:text-sm font-semibold">error.code</span>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Machine-readable error identifier.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <span className="font-mono text-xs sm:text-sm font-semibold">error.message</span>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Human-readable explanation.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <span className="font-mono text-xs sm:text-sm font-semibold">request_id</span>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Unique request identifier for support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error JSON */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-950">
                <div className="border-b border-slate-800 px-5 py-4">
                  <span className="text-xs sm:text-sm text-slate-300">
                    Example Error Response
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
{`{
  "success": false,
  "error": {
    "code": "INVALID_TOKEN",
    "message": "Authentication token is invalid"
  },
  "request_id": "req_9f3a1b"
}`}
                </pre>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-10 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8">
                Troubleshooting Examples
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
                  <div className="text-red-600 font-semibold text-sm sm:text-base">
                    401 Unauthorized
                  </div>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                    Verify that your API key is valid and included in the
                    Authorization header.
                  </p>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
                  <div className="text-amber-600 font-semibold text-sm sm:text-base">
                    404 Not Found
                  </div>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                    Confirm the endpoint path and resource identifier exist.
                  </p>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
                  <div className="text-orange-600 font-semibold text-sm sm:text-base">
                    429 Rate Limited
                  </div>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                    Reduce request frequency and implement retry logic using
                    exponential backoff.
                  </p>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8">
                  <div className="text-rose-600 font-semibold text-sm sm:text-base">
                    500 Server Error
                  </div>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                    Retry the request and contact support if the issue persists.
                  </p>
                </div>
              </div>
            </div>

            {/* Debugging Tips */}
            <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Debugging Best Practices
              </h3>

              <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-4 sm:gap-5">
                {[
                  "Inspect HTTP status codes first",
                  "Log request and response payloads",
                  "Store request IDs for support cases",
                  "Validate required fields before sending",
                ].map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 text-sm sm:text-base text-slate-800"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default APIReference2;