import React from "react";
import { Link } from "react-router-dom";

const ApiAccess = () => {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">

      {/* HERO */}
      <section className="px-4 sm:px-6 md:px-20 py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">

          <p className="text-sm font-medium text-blue-600 tracking-wide uppercase">
            Developer Platform
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
            Build with the Orbit API
          </h1>

          <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
            Access secure APIs to integrate Orbit into your workflows, automate
            operations, and extend your product with powerful infrastructure tools.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/Signup" className="w-full sm:w-auto"> 
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get API Access
              </button>
            </Link>
          
            <Link to="/docs" className="w-full sm:w-auto"> 
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition"
              >
                View Documentation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THIS API */}
      <section className="px-4 sm:px-6 md:px-20 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-xl md:text-2xl font-semibold">
            Built for developers, not complexity
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            The Orbit API is designed to be fast, predictable, and production-ready
            from day one.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 mt-10">

            <div className="p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold">Simple Auth</h3>
              <p className="text-gray-600 mt-2 text-sm">
                API keys with secure token-based authentication.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold">Fast Responses</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Optimized endpoints for low-latency performance.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 sm:col-span-2 md:col-span-1">
              <h3 className="font-semibold">Scalable</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Built to handle production-scale workloads reliably.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ACCESS PATHS */}
      <section className="px-4 sm:px-6 md:px-20 py-12 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Choose your path
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-10">

            {/* NEW DEVELOPERS */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 flex flex-col justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  New to Orbit API
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Create your developer account and generate your first API key in minutes.
                </p>
              </div>
            
              <Link to="/Signup" className="w-full sm:w-auto mt-6"> 
                <button
                  className="w-full sm:w-auto px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  Create Account
                </button>
              </Link>
            </div>

            {/* EXISTING DEVELOPERS */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 flex flex-col justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  Already a developer
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Access your API keys, usage dashboard, and integration settings.
                </p>
              </div>
    
              <Link to="/Featurespages/Analytics#dashboard" className="w-full sm:w-auto mt-6"> 
                <button
                  className="w-full sm:w-auto px-5 py-3 border border-gray-200 rounded-xl hover:border-gray-300 transition"
                >
                  Go to Dashboard
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-4 sm:px-6 md:px-20 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-lg md:text-xl font-semibold">
            Need deeper integration support?
          </h3>

          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Our engineering team can help you design and scale your integration.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

            <Link to="/SecurityReview" className="w-full sm:w-auto"> 
              <button
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition"
              >
                Security Review
              </button>
            </Link>
            
            <Link to="/Contact" className="w-full sm:w-auto"> 
              <button
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Contact Team
              </button> 
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ApiAccess;