import React from 'react'
import BearerTokenAuthentication from '../components/ui/BearerTokenAuthentication'
import { NavLink, Link, useLocation, href } from "react-router-dom";

const Authentication = () => {
  return (
    <>
      <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

{/* SECTION 1: HERO / INTRO */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[650px] w-full max-w-[1100px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 md:h-96 md:w-96 rounded-full bg-indigo-100/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-slate-100/50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 lg:px-8 lg:py-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="hover:text-slate-700 transition">Documentation</span>
            <span>/</span>
            <span className="font-medium text-slate-900">Authentication</span>
          </div>

          <div className="mt-8 lg:mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start xl:items-center">
            
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Security & Access Control
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Authentication
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                Everything you need to authenticate requests and securely
                interact with the Orbit API. Learn how to generate API keys,
                implement bearer token authentication, and follow security
                best practices for production environments.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/Signup" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black shadow-md hover:shadow-lg">
                    Get API Keys
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </Link>

                <Link to="/Examples" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-200 hover:border-slate-900 hover:bg-slate-50">
                    View Examples
                  </button>
                </Link>
              </div>

              {/* Key Points */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "🔐", title: "Authentication Overview", text: "Understand how Orbit secures every API request." },
                  { icon: "🛡️", title: "Security Best Practices", text: "Protect credentials and secure integrations." },
                  { icon: "🔑", title: "Bearer Token Auth", text: "Authenticate requests using secure API keys." },
                  { icon: "📚", title: "Quick Navigation", text: "Jump directly to implementation guides." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition duration-200">
                    <div className="text-2xl shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full max-w-2xl lg:max-w-none mx-auto">
              {/* API Example */}
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-900 px-5 py-4 bg-slate-950/50">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/90" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
                    <div className="h-3 w-3 rounded-full bg-green-500/90" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500">
                    Authentication Example
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 sm:p-6 text-xs sm:text-sm font-mono leading-6 sm:leading-7 text-slate-300 max-h-[350px] lg:max-h-none">
<code>{`curl https://api.orbit.dev/v1/workspaces \\
  -H "Authorization: Bearer YOUR_API_KEY"

{
  "success": true,
  "workspace": {
    "id": "ws_12345",
    "name": "Production"
  }
}`}</code>
                </pre>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    OAuth
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-500">
                    Ready Architecture
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    TLS
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-slate-500">
                    Encrypted Requests
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ACCESS SECURITY OVERVIEW */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[600px] w-full max-w-[1000px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
              Authentication Overview
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              How Orbit Secures API Access
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Orbit uses API keys and bearer token authentication to verify
              every request. Credentials are scoped to your workspace and
              protected using modern security standards.
            </p>
          </div>

          {/* Main Layout */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            
            {/* Authentication Flow Block */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Authentication Flow
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  Every Orbit API request follows a secure validation process.
                </p>
              </div>

              {/* Flex/Grid responsive pipeline */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4">
                
                {/* Step 1 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 md:flex-1">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl sm:text-2xl">
                    🔑
                  </div>
                  <div>
                    <h4 className="mt-0 md:mt-4 font-semibold text-slate-900 text-sm sm:text-base">
                      API Key
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 md:max-w-[180px]">
                      Generate credentials from the Orbit dashboard.
                    </p>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:block text-slate-300 text-2xl px-2">→</div>

                {/* Step 2 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 md:flex-1">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-xl sm:text-2xl">
                    📤
                  </div>
                  <div>
                    <h4 className="mt-0 md:mt-4 font-semibold text-slate-900 text-sm sm:text-base">
                      Send Request
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 md:max-w-[180px]">
                      Include the token in the Authorization header.
                    </p>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:block text-slate-300 text-2xl px-2">→</div>

                {/* Step 3 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 md:flex-1">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-xl sm:text-2xl">
                    🛡️
                  </div>
                  <div>
                    <h4 className="mt-0 md:mt-4 font-semibold text-slate-900 text-sm sm:text-base">
                      Verification
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 md:max-w-[180px]">
                      Orbit validates credentials and permissions.
                    </p>
                  </div>
                </div>

                {/* Arrow 3 */}
                <div className="hidden md:block text-slate-300 text-2xl px-2">→</div>

                {/* Step 4 */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 md:flex-1">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl sm:text-2xl">
                    ✅
                  </div>
                  <div>
                    <h4 className="mt-0 md:mt-4 font-semibold text-slate-900 text-sm sm:text-base">
                      Access Granted
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 md:max-w-[180px]">
                      Authorized requests receive a secure response.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Security Overview Card */}
            <div className="rounded-3xl bg-slate-900 p-6 sm:p-8 text-white shadow-xl w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                🛡️
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold">
                Security Overview
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">
                Orbit is designed with security at its core. Every request
                is authenticated, encrypted, and validated before access
                is granted.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "API Keys & Bearer Tokens",
                  "Workspace-Scoped Credentials",
                  "TLS Encrypted Requests",
                  "Permission Validation",
                  "Unauthorized Access Rejected"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 overflow-hidden">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Authentication Header
                </div>
                <code className="mt-2 block text-xs sm:text-sm text-blue-300 font-mono break-all whitespace-pre-wrap">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>

          </div>

          {/* Bottom Key Points Grid */}
          <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "API Keys & Tokens", desc: "Orbit authenticates requests using secure API credentials." },
              { title: "Authentication Required", desc: "Every API request must include valid credentials." },
              { title: "Workspace Scoped", desc: "Credentials only access resources within your workspace." },
              { title: "Access Control", desc: "Unauthorized or invalid requests are automatically rejected." }
            ].map((box, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition duration-200">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  {box.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: KEY GENERATION GUIDE */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 bg-white border-t border-slate-100">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[600px] w-full max-w-[1000px] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700">
              API Credentials
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Generating API Keys
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Create secure API credentials to authenticate requests and access
              Orbit services. API keys are scoped to your workspace and can be
              rotated or revoked at any time.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 lg:grid-cols-[1.10fr_0.90fr] items-start">
            
            {/* Steps Timeline Container */}
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  bg: "bg-blue-50 text-blue-600",
                  title: "Open Developer Settings",
                  content: (
                    <>
                      Navigate to your Orbit Dashboard and open{" "}
                      <span className="font-medium text-slate-900">
                        Settings → Developer → API Keys
                      </span>.
                    </>
                  ),
                },
                {
                  num: "02",
                  bg: "bg-purple-50 text-purple-600",
                  title: "Create a New API Key",
                  content: (
                    <>
                      Select <strong>Create API Key</strong>, assign a name,
                      and choose the appropriate permissions for your application.
                    </>
                  ),
                },
                {
                  num: "03",
                  bg: "bg-orange-50 text-orange-600",
                  title: "Copy & Store Securely",
                  content: (
                    <>
                      Copy the generated API key immediately and store it in a
                      secure location such as environment variables or a secrets
                      manager.
                    </>
                  ),
                },
                {
                  num: "04",
                  bg: "bg-emerald-50 text-emerald-600",
                  title: "Rotate or Revoke When Needed",
                  content: (
                    <>
                      If a credential becomes compromised, regenerate or revoke
                      it instantly from the API Keys dashboard.
                    </>
                  ),
                }
              ].map((step, idx) => (
                <div key={idx} className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono font-bold text-sm sm:text-base ${step.bg}`}>
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky/Asymmetric Right Panel */}
            <div className="space-y-6 lg:sticky lg:top-8">
              {/* API Key Preview */}
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">
                <div className="border-b border-slate-900 bg-slate-950/50 px-5 py-4">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500">
                    Example API Key
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <code className="break-all font-mono text-xs sm:text-sm text-emerald-400">
                      orb_live_8F7a92KdL3mQxP7WvN2RtY5AbC9X
                    </code>
                  </div>
                  <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                    API keys are displayed only once during creation.
                    Store them securely before leaving this page.
                  </p>
                </div>
              </div>

              {/* Security Warning Notice */}
              <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <div className="text-xl shrink-0 select-none">⚠️</div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Security Recommendation
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Never commit API keys to source control repositories.
                      Store credentials in environment variables and rotate
                      them regularly for maximum security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Minor Stats boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    256-bit
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Encryption
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                    Scoped
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Permissions
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

<section>
 <BearerTokenAuthentication />
</section>

<section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-y border-slate-100">
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[600px] w-full max-w-[1000px] -translate-x-1/2 rounded-full bg-emerald-100/20 blur-3xl" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-700">
        Security Guidelines
      </span>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        Security Best Practices
      </h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
        Protect your Orbit credentials and reduce security risks by
        following industry-standard authentication and access management
        practices.
      </p>
    </div>

    {/* Main Layout Grid */}
    <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
      
      {/* Security Checklist Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
            ✅
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Security Checklist
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Recommended practices for every Orbit integration.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {[
            { title: "Store Credentials Securely", desc: "Keep API keys in environment variables or a dedicated secrets manager." },
            { title: "Rotate API Keys Regularly", desc: "Periodically regenerate credentials to reduce long-term risk." },
            { title: "Use Least-Privilege Access", desc: "Grant only the permissions required for your application." },
            { title: "Monitor API Activity", desc: "Review logs and usage reports for unusual behavior." },
            { title: "Enable Team Access Controls", desc: "Restrict credential management to trusted administrators." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 rounded-2xl bg-slate-50 p-4 sm:p-5 hover:bg-slate-100/60 transition duration-200">
              <span className="text-lg sm:text-xl text-emerald-500 font-bold shrink-0">✓</span>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Stack */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* Warning 1 */}
        <div className="rounded-3xl border border-red-200 bg-red-50/60 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-xl select-none">
              ⚠️
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Never Expose API Keys Publicly
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
                API keys should never be committed to Git repositories,
                embedded in frontend applications, or shared in public
                documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Warning 2 */}
        <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-xl select-none">
              🔒
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Use Environment Variables
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
                Store credentials using environment variables or secure
                secret storage systems rather than hard-coding them.
              </p>
            </div>
          </div>
        </div>

        {/* Warning 3 */}
        <div className="rounded-3xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xl select-none">
              📊
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Monitor Usage & Audit Logs
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-600">
                Review API activity frequently and investigate unexpected
                traffic patterns or authentication failures.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Security Summary Dashboard */}
    <div className="mt-16 sm:mt-20 overflow-hidden rounded-3xl bg-slate-950 shadow-xl">
      <div className="border-b border-slate-900 px-6 sm:px-8 py-5 sm:py-6 bg-slate-950/40">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Security Summary
        </h3>
      </div>
      <div className="grid gap-6 p-6 sm:p-8 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 md:divide-x divide-slate-800">
        
        <div className="pt-4 sm:pt-0">
          <div className="text-3xl sm:text-4xl font-bold text-emerald-400">Secure</div>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Store API keys in protected environments.
          </p>
        </div>

        <div className="pt-6 sm:pt-0 md:pl-6">
          <div className="text-3xl sm:text-4xl font-bold text-blue-400">Monitor</div>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Track API activity and audit usage patterns.
          </p>
        </div>

        <div className="pt-6 md:pt-0 md:pl-6 sm:col-span-2 md:col-span-1">
          <div className="text-3xl sm:text-4xl font-bold text-orange-400">Rotate</div>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Regularly regenerate credentials to minimize risk.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-28">
  {/* Background Radial Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-0 h-[700px] w-full max-w-[1100px] -translate-x-1/2 rounded-full bg-blue-100/20 blur-3xl" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
        Troubleshooting & Resources
      </span>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        Resolve Issues & Continue Building
      </h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
        Quickly diagnose authentication problems and explore the
        next set of resources to help you build with Orbit.
      </p>
    </div>

    {/* Troubleshooting Framework */}
    <div className="mt-12 sm:mt-16 lg:mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-10">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-xl">
          🛠️
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Common Authentication Issues
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            Most authentication errors can be resolved using the guidance below.
          </p>
        </div>
      </div>

      {/* Error Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        
        {/* INVALID_TOKEN */}
        <div className="rounded-3xl border border-red-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-xl bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 font-mono">
              INVALID_TOKEN
            </div>
            <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Invalid API Credentials
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              The API key is incorrect, malformed, or no longer valid.
            </p>
          </div>
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="text-xs sm:text-sm font-semibold text-slate-900">
              Recommended Fix
            </div>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Verify your API key and ensure it matches the value
              generated from the Orbit dashboard.
            </p>
          </div>
        </div>

        {/* EXPIRED */}
        <div className="rounded-3xl border border-amber-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-xl bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-600 font-mono">
              EXPIRED_CREDENTIALS
            </div>
            <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Expired Credentials
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Your credentials have expired or were rotated.
            </p>
          </div>
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="text-xs sm:text-sm font-semibold text-slate-900">
              Recommended Fix
            </div>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Generate a new API key and update your application
              configuration.
            </p>
          </div>
        </div>

        {/* MISSING HEADER */}
        <div className="rounded-3xl border border-blue-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-xl bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 font-mono">
              MISSING_HEADER
            </div>
            <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Missing Authorization Header
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Requests must include a bearer token in the Authorization header.
            </p>
          </div>
          <div className="mt-6 rounded-xl bg-slate-50 p-4 overflow-hidden">
            <div className="text-xs sm:text-sm font-semibold text-slate-900">
              Required Format
            </div>
            <code className="mt-2 block text-xs sm:text-sm text-blue-600 font-mono break-all whitespace-pre-wrap">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
        </div>

        {/* PERMISSIONS */}
        <div className="rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-xl bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600 font-mono">
              PERMISSION_DENIED
            </div>
            <h4 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">
              Insufficient Permissions
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              The API key does not have access to the requested resource.
            </p>
          </div>
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="text-xs sm:text-sm font-semibold text-slate-900">
              Recommended Fix
            </div>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Review API key permissions and update access scopes.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Next Steps / Ecosystem Grid */}
    <div className="mt-20 sm:mt-24">
      <div className="mb-8 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Continue Exploring Orbit
        </h3>
        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Dive deeper into the platform with additional documentation and tools.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {[
          { icon: "📚", title: "API Reference", desc: "Complete endpoint documentation.", href: "/APIReference2" },
          { icon: "⚡", title: "Rate Limits", desc: "Understand usage limits and quotas.", href: "#" },
          { icon: "🔗", title: "Webhooks", desc: "Receive real-time event notifications.", href: "/Webhooks" },
          { icon: "💻", title: "SDKs", desc: "Build faster with official SDKs.", href: "/SDKs" },
          { icon: "🎧", title: "Support Center", desc: "Get help from Orbit experts.", href: "/Help" },
        ].map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300"
          >
            <div>
              <div className="text-3xl select-none">{item.icon}</div>
              <h4 className="mt-5 text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition duration-150">
                {item.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-6 text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-1">
              Learn More <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Final Developer CTA Box */}
    <div className="mt-20 sm:mt-24 rounded-3xl sm:rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      
      <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm">
        Authentication Complete
      </span>

      <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        You're Ready to Build with Orbit
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
        Your authentication setup is complete. Explore the API,
        build integrations, automate workflows, and scale your applications.
      </p>

      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/APIReference2" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto rounded-2xl bg-white px-8 py-4 text-sm sm:text-base font-semibold text-slate-900 transition duration-200 hover:bg-slate-100 shadow-md active:scale-[0.99]">
            Explore API Reference
          </button>
        </Link>

        <Link to="/Help" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm sm:text-base font-semibold text-white transition duration-200 hover:bg-white/10 active:scale-[0.99]">
            Visit Support Center
          </button>
        </Link>
      </div>
    </div>

  </div>
</section>
      </div>
    </>
  )
}

export default Authentication
