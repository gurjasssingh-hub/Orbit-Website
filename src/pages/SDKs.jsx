import React from 'react'
import { Link } from 'react-router-dom'

const SDKs = () => {
  return (
    <>
        <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

<section className="relative overflow-hidden border-b border-slate-200">

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full bg-violet-300/15 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-300/15 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.7))]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-36">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 backdrop-blur px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              Official Orbit SDKs
            </span>
          </div>

          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Build Faster with{" "}
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                Orbit SDKs
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
              Integrate Orbit into your applications with official SDKs built
              for speed, reliability, and scalability. Create production-ready
              experiences using modern developer tools across multiple
              programming languages.
            </p>
          </div>

          {/* Highlights Info Badges */}
          <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              ⚡ Faster Integrations
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              🌍 Multiple Languages
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              🛠 Production-Ready Tools
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              🔗 Consistent API Experience
            </span>
          </div>

          {/* CTA Buttons Layout Block */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link to="/Signup" className="w-full sm:w-auto"> 
              <button className="w-full inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold text-white bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Get Started
              </button>
            </Link>
           
            <Link to="/SDKS#sdks" className="w-full sm:w-auto"> 
              <button className="w-full inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-slate-50 active:scale-[0.98] transition-all">
                View SDKs
              </button>
            </Link>
            
            <Link to="/ApiReference2" className="w-full sm:w-auto"> 
              <button className="w-full inline-flex items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-50 px-8 py-4 font-semibold text-indigo-700 hover:bg-indigo-100 active:scale-[0.98] transition-all">
                API Reference
              </button>
            </Link>
          </div>

          {/* Stats Indicators Grid */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">6+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">Official SDKs</div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">99.9%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">API Reliability</div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">50+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">API Endpoints</div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">24/7</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">Developer Support</div>
            </div>
          </div>

        </div>
 </section>

 <section className="py-16 sm:py-24 border-t border-slate-200 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs sm:text-sm font-medium text-indigo-700">
              Supported SDKs
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Official SDKs for Every Workflow
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              Choose the SDK that matches your stack and start building with
              Orbit faster. Every SDK is maintained by the Orbit team,
              thoroughly documented, and optimized for production workloads.
            </p>
          </div>
        
          {/* SDK Grid Directory */}
          <div id="sdks" className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {/* JavaScript */}
            <Link to="/JavascriptSDK" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">🟨</div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      v4.2.0
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    JavaScript SDK
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Universal SDK for browser applications, frontend integrations,
                    and modern JavaScript projects.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Browser</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">ES Modules</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">TypeScript</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  View Documentation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* React */}
            <Link to="/ReactSDK" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">⚛️</div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      v3.8.0
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    React SDK
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Ready-to-use hooks, components, providers, and utilities
                    for React applications.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">React</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Hooks</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Next.js</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  View Documentation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* Node.js */}
            <Link to="/NodeSDK" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">🟩</div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      v4.0.0
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    Node.js SDK
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Secure backend integrations, automation workflows,
                    and scalable server-side applications.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Node.js</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Backend</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Serverless</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  View Documentation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* Python */}
            <Link to="/PythonSDK" className="block group">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">🐍</div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      v3.5.0
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    Python SDK
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Ideal for automation, scripting, data processing,
                    and machine learning workflows.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Python</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Automation</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Data Tools</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  View Documentation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* REST API */}
            <Link to="/RestApiClient" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">🔗</div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      Stable
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    REST API Client
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Direct access to Orbit APIs using standard HTTP requests
                    and REST conventions.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">REST</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">HTTP</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">Universal</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  View Documentation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            {/* Community SDKs */}
            <Link to="/CommunitySDKs" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6 sm:p-7 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl sm:text-4xl">🌎</div>
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                      Community
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    Community SDKs
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Explore integrations and SDKs created by the Orbit developer
                    community.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">Go</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">PHP</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-700">Ruby</span>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  Explore SDKs <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

          </div>

        </div>
 </section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    {/* Header */}
    <div className="max-w-3xl">
      <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-700">
        Installation & Setup
      </span>

      <h2 className="mt-4 sm:mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        Get Up and Running in Minutes
      </h2>

      <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
        Install your preferred Orbit SDK, configure authentication,
        and make your first API request with a simple setup process
        designed for developers.
      </p>
    </div>

    {/* Setup Steps */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-4">

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          1
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Install SDK
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Install Orbit using your preferred package manager.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          2
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Configure API Keys
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Securely connect your application to Orbit services.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          3
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Set Environment Variables
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Store credentials securely using environment variables.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          4
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Start Building
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Make requests and integrate Orbit into your workflow.
        </p>
      </div>

    </div>

    {/* Installation Commands */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid gap-6 sm:gap-7 md:gap-8 lg:grid-cols-2">

      {/* NPM */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-slate-900">
              JavaScript / Node.js
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Install via npm
            </p>
          </div>

          <span className="rounded-full bg-indigo-100 px-2 sm:px-3 py-1 text-xs font-medium text-indigo-700">
            npm
          </span>
        </div>

        <div className="bg-slate-950 p-4 sm:p-5 md:p-6">
          <pre className="overflow-x-auto text-xs sm:text-sm text-slate-300">
{`npm install @orbit/sdk

# React
npm install @orbit/react

# Node.js
npm install @orbit/node`}
          </pre>
        </div>

      </div>

      {/* Python */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-slate-900">
              Python SDK
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Install via pip
            </p>
          </div>

          <span className="rounded-full bg-indigo-100 px-2 sm:px-3 py-1 text-xs font-medium text-indigo-700">
            pip
          </span>
        </div>

        <div className="bg-slate-950 p-4 sm:p-5 md:p-6">
          <pre className="overflow-x-auto text-xs sm:text-sm text-slate-300">
{`pip install orbit-sdk

# Upgrade
pip install --upgrade orbit-sdk`}
          </pre>
        </div>

      </div>

    </div>

    {/* Environment Variables */}
    <div className="mt-8 sm:mt-9 md:mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Environment Variables
        </h3>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6">
        <pre className="overflow-x-auto text-xs sm:text-sm text-slate-300">
{`# .env

ORBIT_API_KEY=your_api_key_here
ORBIT_PROJECT_ID=your_project_id
ORBIT_WORKSPACE_ID=your_workspace_id`}
        </pre>
      </div>

    </div>

    {/* Authentication Example */}
    <div className="mt-8 sm:mt-9 md:mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Authentication Setup
        </h3>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6">
        <pre className="overflow-x-auto text-xs sm:text-sm text-slate-300">
{`import Orbit from "@orbit/sdk";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

export default orbit;`}
        </pre>
      </div>

    </div>

    {/* Configuration Options */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 md:p-8">

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
        Configuration Options
      </h3>

      <div className="mt-6 sm:mt-7 md:mt-8 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3">

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            API Endpoint
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Customize base URLs for development, staging,
            and production environments.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Timeouts
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Configure request timeout settings for
            reliable API communication.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Retries
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Automatically retry failed requests
            with exponential backoff.
          </p>
        </div>

      </div>
    </div>

    {/* Quick Setup Guide */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-indigo-200 bg-gradient-to-r from-violet-50 via-white to-indigo-50 p-6 sm:p-7 md:p-8">

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
        Quick Setup Guide
      </h3>

      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
        Most developers complete setup in under 5 minutes.
      </p>

      <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 md:gap-3">

        <div className="rounded-full bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm">
          Install SDK
        </div>

        <div className="rounded-full bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm">
          Add API Key
        </div>

        <div className="rounded-full bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm">
          Configure Environment
        </div>

        <div className="rounded-full bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm">
          Send First Request
        </div>

        <div className="rounded-full bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm">
          Build & Deploy
        </div>

      </div>
    </div>

  </div>
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    {/* Header */}
    <div className="max-w-3xl">
      <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-700">
        Quick Start Guide
      </span>

      <h2 className="mt-4 sm:mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        Send Your First Request in Minutes
      </h2>

      <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
        Follow this step-by-step guide to initialize the Orbit SDK,
        authenticate securely, send your first request, and handle
        responses with confidence.
      </p>
    </div>

    {/* Walkthrough Steps */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid gap-3 sm:gap-4 md:gap-5 md:grid-cols-5">

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          1
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Install SDK
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Add the Orbit SDK to your project.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          2
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Initialize
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Create an Orbit client instance.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          3
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Authenticate
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Configure your API credentials.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          4
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Send Request
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Make your first API call.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 md:p-6">
        <div className="flex h-8 sm:h-9 md:h-10 w-8 sm:w-9 md:w-10 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-700 text-sm sm:text-base">
          5
        </div>
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-900">
          Handle Results
        </h3>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
          Process responses and errors.
        </p>
      </div>

    </div>

    {/* Main Content */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid gap-6 sm:gap-7 md:gap-8 lg:grid-cols-2">

      {/* Code Example */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-slate-900">
              Complete Example
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              JavaScript SDK
            </p>
          </div>

          <span className="rounded-full bg-indigo-100 px-2 sm:px-3 py-1 text-xs font-medium text-indigo-700">
            Quick Start
          </span>
        </div>

        <div className="bg-slate-950 p-4 sm:p-5 md:p-6">
          <pre className="overflow-x-auto text-xs sm:text-sm text-slate-300">
{`import Orbit from "@orbit/sdk";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

async function run() {
  try {
    const response = await orbit.assistant.create({
      message: "Hello Orbit",
    });

    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

run();`}
          </pre>
        </div>

      </div>

      {/* Explanation */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 md:p-8">

        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
          What Happens Here?
        </h3>

        <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 md:space-y-6">

          <div>
            <h4 className="font-semibold text-sm sm:text-base text-slate-900">
              Initialize SDK
            </h4>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">
              Import the Orbit SDK and create a client instance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base text-slate-900">
              Configure API Key
            </h4>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">
              Authenticate requests using your secure API credentials.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base text-slate-900">
              Make a Request
            </h4>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">
              Send a request to the Orbit platform and receive a response.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm sm:text-base text-slate-900">
              Handle Errors
            </h4>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">
              Catch exceptions and display meaningful error messages.
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Response Example */}
    <div className="mt-8 sm:mt-9 md:mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Expected Response Output
        </h3>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6">
        <pre className="overflow-x-auto text-xs sm:text-sm text-slate-300">
{`{
  "id": "msg_12345",
  "status": "success",
  "message": "Hello! How can I help you today?",
  "created_at": "2026-01-15T12:00:00Z"
}`}
        </pre>
      </div>

    </div>

    {/* Error Handling */}
    <div className="mt-8 sm:mt-9 md:mt-10 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-red-200 bg-red-50 p-4 sm:p-5 md:p-6">
        <h3 className="font-semibold text-sm sm:text-base text-red-800">
          Common Error
        </h3>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-red-700">
          Missing or invalid API credentials.
        </p>

        <div className="mt-3 sm:mt-4 rounded-xl bg-white p-3 sm:p-4 text-xs sm:text-sm text-slate-700">
          Error: INVALID_API_KEY
        </div>
      </div>

      <div className="rounded-3xl border border-green-200 bg-green-50 p-4 sm:p-5 md:p-6">
        <h3 className="font-semibold text-sm sm:text-base text-green-800">
          Resolution
        </h3>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-green-700">
          Verify your API key, environment variables, and permissions.
        </p>

        <div className="mt-3 sm:mt-4 rounded-xl bg-white p-3 sm:p-4 text-xs sm:text-sm text-slate-700">
          ✓ Request authenticated successfully
        </div>
      </div>

    </div>

    {/* Beginner CTA */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-indigo-200 bg-gradient-to-r from-violet-50 via-white to-indigo-50 p-6 sm:p-7 md:p-8">

      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
        Beginner Friendly
      </h3>

      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 max-w-xl sm:max-w-2xl">
        New to Orbit? Follow this guide step by step and you'll have
        your first integration running in less than five minutes.
      </p>

      <Link to="/ApiReference2">
        <button className="mt-5 sm:mt-6 rounded-2xl bg-gradient-to-r from-[#c084fc] via-[#a78bfa] to-[#818cf8] px-5 sm:px-6 py-2 sm:py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]">
          Continue to API Reference
        </button>
      </Link>

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-700">
              SDK Features & Examples
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Real-World Workflows with Orbit SDKs
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              Explore common integration patterns, production-ready examples,
              and SDK capabilities that help developers build faster with Orbit.
            </p>
          </div>

          {/* Feature Grid Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl">🔐</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Authentication</h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Secure API access using API keys, OAuth tokens, and workspace credentials.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl">📁</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Project Management</h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Create, update, organize, and manage projects directly from your applications.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl">👥</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">User Management</h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Manage users, permissions, roles, and organization membership.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl">🔔</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Webhooks</h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Receive real-time events and automate workflows with webhook integrations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl">📤</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">File Uploads</h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Upload documents, media, and assets securely through the SDK.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl">📊</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">Data Retrieval</h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                Query resources, fetch analytics, and access platform data instantly.
              </p>
            </div>

          </div>

          {/* Code Execution Previews */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Copyable Code Examples
            </h3>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

              {/* JS Block */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 sm:px-6 py-4">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Authentication (JavaScript)
                  </h4>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    JavaScript
                  </span>
                </div>
                <div className="bg-slate-950 p-5 sm:p-6 flex-1 overflow-auto">
                  <pre className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
{`import Orbit from "@orbit/sdk";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

const user = await orbit.users.get("user_123");

console.log(user);`}
                  </pre>
                </div>
              </div>

              {/* Python Block */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 sm:px-6 py-4">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Authentication (Python)
                  </h4>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    Python
                  </span>
                </div>
                <div className="bg-slate-950 p-5 sm:p-6 flex-1 overflow-auto">
                  <pre className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
{`from orbit import Orbit
import os

client = Orbit(
    api_key=os.getenv("ORBIT_API_KEY")
)

user = client.users.get("user_123")

print(user)`}
                  </pre>
                </div>
              </div>

            </div>
          </div>

          {/* Workflow Map */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Common Workflows
            </h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="text-2xl">⚡</div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">Create Project</h4>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Authenticate <span className="text-indigo-400 font-medium">→</span> Create Project <span className="text-indigo-400 font-medium">→</span> Invite Team Members <span className="text-indigo-400 font-medium">→</span> Deploy.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="text-2xl">🔔</div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">Event Automation</h4>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Configure Webhooks <span className="text-indigo-400 font-medium">→</span> Receive Events <span className="text-indigo-400 font-medium">→</span> Trigger Workflows.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="text-2xl">📈</div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">Analytics Pipeline</h4>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Collect Data <span className="text-indigo-400 font-medium">→</span> Query Metrics <span className="text-indigo-400 font-medium">→</span> Generate Insights.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices Container Layout */}
          <div className="mt-16 sm:mt-24 rounded-[32px] border border-indigo-200 bg-gradient-to-r from-violet-50 via-white to-indigo-50 p-5 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              SDK Best Practices
            </h3>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                <h4 className="font-semibold text-emerald-700 flex items-center gap-2">
                  <span>✅</span> Recommended
                </h4>
                <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-600 list-disc list-inside">
                  <li>Store API keys in environment variables</li>
                  <li>Use retry mechanisms for failed requests</li>
                  <li>Validate webhook signatures safely</li>
                  <li>Implement robust operational exception handling</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
                <h4 className="font-semibold text-amber-700 flex items-center gap-2">
                  <span>⚠️</span> Avoid
                </h4>
                <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-600 list-disc list-inside">
                  <li>Hardcoding secure keys inside source scripts</li>
                  <li>Ignoring minor SDK lifecycle dependency updates</li>
                  <li>Skipping endpoint validation routines</li>
                  <li>Exposing structural dynamic payload outputs</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
</section>

<section className="py-16 sm:py-24 border-t border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title Header Section */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-700">
              SDK Resources & Support
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Everything You Need to Keep Building
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              Access documentation, release notes, migration guides,
              community resources, and support channels to get the most
              out of Orbit SDKs.
            </p>
          </div>

          {/* Directory Resource Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            <Link to="/Resourcespages/Documentation#SDKs" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl">📚</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">SDK Documentation</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Comprehensive guides, installation instructions, configuration details, and examples.
                  </p>
                </div>
                <div className="mt-6 font-medium text-indigo-600 inline-flex items-center text-sm">
                  Browse Documentation <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            <Link to="/ApiReference2" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl">🔗</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">API Reference</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Detailed endpoint specifications, request formats, response schemas, and examples.
                  </p>
                </div>
                <div className="mt-6 font-medium text-indigo-600 inline-flex items-center text-sm">
                  View API Docs <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
            
            <Link to="/ChangelogPage" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl">📝</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">Changelog</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Track SDK releases, improvements, fixes, deprecations, and platform updates.
                  </p>
                </div>
                <div className="mt-6 font-medium text-indigo-600 inline-flex items-center text-sm">
                  Read Changelog <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
            
            <Link to="/MigrationGuidePage" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl">🔄</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">Migration Guides</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Upgrade smoothly between SDK versions with step-by-step migration instructions.
                  </p>
                </div>
                <div className="mt-6 font-medium text-indigo-600 inline-flex items-center text-sm">
                  View Guides <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link> 

            <Link to="/Resourcespages/Community#cta" className="block group">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl">🌍</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">Community Resources</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Tutorials, examples, starter projects, integrations, and developer discussions.
                  </p>
                </div>
                <div className="mt-6 font-medium text-indigo-600 inline-flex items-center text-sm">
                  Explore Community <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

            <Link to="/Support" className="block group"> 
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl">💬</div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">Support Channels</h3>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Reach Orbit experts for technical questions, troubleshooting, and implementation help.
                  </p>
                </div>
                <div className="mt-6 font-medium text-indigo-600 inline-flex items-center text-sm">
                  Contact Support <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>

          </div>

          {/* Quick Access Resource Elements Table Row */}
          <div className="mt-16 sm:mt-20 rounded-[32px] border border-slate-200 bg-[#fafbfc] p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Quick Access Resources
            </h3>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Documentation Hub</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Central knowledge base for all Orbit SDKs.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">GitHub Repositories</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Source code, issue tracking, and examples.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Release Notes</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Detailed breakdown of recent SDK changes.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Troubleshooting</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Common issues, fixes, and debugging tips.
                </p>
              </div>
            </div>
          </div>

          {/* Support CTA Hero Section Wrap */}
          <div className="mt-16 rounded-[32px] border border-indigo-200 bg-gradient-to-r from-violet-50 via-white to-indigo-50 p-6 sm:p-10">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Need Help Building with Orbit?
              </h3>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you're integrating your first SDK or migrating
                enterprise applications, our documentation and support
                resources are here to help.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                <Link to="/Resourcespages/Documentation" className="w-full sm:w-auto"> 
                  <button className="w-full rounded-2xl bg-gradient-to-r from-[#c084fc] via-[#a78bfa] to-[#818cf8] px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Browse Documentation
                  </button>
                </Link>

                <Link to="/Support" className="w-full sm:w-auto"> 
                  <button className="w-full rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 hover:bg-slate-50 active:scale-[0.98] transition-all">
                    Contact Support
                  </button>
                </Link>

                <Link to="/GithubPage" className="w-full sm:w-auto">
                  <button className="w-full rounded-2xl border border-indigo-200 bg-indigo-50 px-6 py-3.5 font-semibold text-indigo-700 hover:bg-indigo-100 active:scale-[0.98] transition-all">
                    View GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
</section>

       </div>
    </>
  )
}

export default SDKs
