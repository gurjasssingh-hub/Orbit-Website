import React from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import SDKSection from './sdkExamples';

const GettingStarted = () => {
  return (
    <> 
      <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

        {/* --- SECTION 1: HERO --- */}
        <section className="relative overflow-hidden bg-white">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />
            <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-slate-700">
                  Developer Documentation
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
                Getting Started
                <span className="block bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  with Orbit
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Set up Orbit, authenticate your account, and launch your first API
                integration in minutes. Everything you need to build, automate, and
                scale with confidence.
              </p>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/Signup"> 
                  <button className="group inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-black">
                    Quick Start
                    <svg
                      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>

                <Link to="/ApiReference2">
                  <button className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-slate-900 hover:bg-slate-50">
                    API Reference
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-20 grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-3xl font-bold text-slate-900">5 min</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Average setup time
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-3xl font-bold text-slate-900">99.99%</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Platform uptime
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-3xl font-bold text-slate-900">24/7</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Developer support
                  </p>
                </div>
              </div>

              {/* Code Preview */}
              <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <pre className="overflow-x-auto p-6 text-left text-sm text-slate-300">
{`curl https://api.orbit.dev/v1/workspaces \\
  -H "Authorization: Bearer YOUR_API_KEY"

{
  "success": true,
  "data": [
    {
      "id": "ws_12345",
      "name": "Production Workspace"
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PLATFORM OVERVIEW --- */}
        <section className="relative overflow-hidden bg-[#f7f9fc] py-28">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Platform Overview
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                What is Orbit?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Orbit is a unified platform for modern teams to automate workflows,
                monitor critical systems, collaborate efficiently, and connect
                everything through powerful integrations and APIs.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {/* Card 1 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  ⚡
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Workflow Automation
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Automate repetitive tasks, streamline operations, and build
                  powerful workflows that scale with your business.
                </p>
                <div className="mt-6 text-sm font-medium text-blue-600">
                  Automate faster →
                </div>
              </div>

              {/* Card 2 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                  📊
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Monitoring & Alerts
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Track system health in real time, receive instant alerts,
                  and stay ahead of potential issues before they impact users.
                </p>
                <div className="mt-6 text-sm font-medium text-emerald-600">
                  Stay informed →
                </div>
              </div>

              {/* Card 3 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50">
                  👥
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Team Collaboration
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Bring teams together with shared workspaces, permissions,
                  notifications, and collaborative workflows.
                </p>
                <div className="mt-6 text-sm font-medium text-purple-600">
                  Collaborate better →
                </div>
              </div>

              {/* Card 4 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                  🔌
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Integrations & APIs
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Connect Orbit with your existing tools, build custom
                  integrations, and extend functionality using robust APIs.
                </p>
                <div className="mt-6 text-sm font-medium text-orange-600">
                  Connect everything →
                </div>
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className="mt-20 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    Built for teams that need reliability at scale.
                  </h3>
                  <p className="mt-4 text-lg text-slate-600">
                    From startups to enterprise organizations, Orbit provides
                    the infrastructure, automation, and visibility required to
                    operate mission-critical workflows with confidence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold text-slate-900">99.99%</div>
                    <div className="mt-2 text-sm text-slate-500">Platform Uptime</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                    <div className="mt-2 text-sm text-slate-500">Monitoring</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold text-slate-900">50+</div>
                    <div className="mt-2 text-sm text-slate-500">Integrations</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <div className="text-3xl font-bold text-slate-900">Enterprise</div>
                    <div className="mt-2 text-sm text-slate-500">Security Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: PREREQUISITES --- */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Before You Begin
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Prerequisites
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Make sure you have everything required before integrating with Orbit.
                These essentials will help you get up and running quickly.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* Card 1 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl">👤</div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">Orbit Account</h3>
                <p className="mt-3 text-slate-600">
                  Create an Orbit account to access the dashboard, developer tools, and platform resources.
                </p>
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-medium">✓ Required</div>
              </div>

              {/* Card 2 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl">🏢</div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">Workspace Created</h3>
                <p className="mt-3 text-slate-600">
                  Workspaces organize your projects, workflows, users, and resources inside Orbit.
                </p>
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-medium">✓ Required</div>
              </div>

              {/* Card 3 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">🔑</div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">API Key Generated</h3>
                <p className="mt-3 text-slate-600">
                  Generate an API key from the developer settings page to authenticate requests securely.
                </p>
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-medium">✓ Required</div>
              </div>

              {/* Card 4 */}
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">📚</div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">REST API Basics</h3>
                <p className="mt-3 text-slate-600">
                  Familiarity with HTTP requests, JSON responses, and authentication methods is recommended.
                </p>
                <div className="mt-6 flex items-center gap-2 text-amber-600 font-medium">Recommended</div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Ready to start?</h3>
                  <p className="mt-2 text-slate-600">
                    Once you've completed the prerequisites above, continue to the Quick Start Guide to make your first Orbit API request.
                  </p>
                </div>
                <Link to="/Signup">
                  <button className="rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black">
                    Continue to Quick Start →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: QUICK START TIMELINE --- */}
        <section className="relative overflow-hidden bg-[#f7f9fc] py-28">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Quick Start
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Get Up and Running in Minutes
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Follow these four simple steps to connect with Orbit and make your first successful API request.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="relative mt-24 hidden lg:block">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-10 h-px bg-slate-200" />

              <div className="grid grid-cols-4 gap-8">
                {/* Step 1 */}
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-lg">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-semibold text-blue-600">STEP 01</span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Create an Account</h3>
                    <p className="mt-4 text-slate-600">
                      Sign up for Orbit and gain access to your dashboard, developer tools, and workspace management.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-lg">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-semibold text-purple-600">STEP 02</span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Create a Workspace</h3>
                    <p className="mt-4 text-slate-600">
                      Set up your first workspace to organize projects, resources, users, and integrations.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-lg">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-semibold text-orange-600">STEP 03</span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Generate an API Key</h3>
                    <p className="mt-4 text-slate-600">
                      Create a secure API key from the Developer Settings section to authenticate requests.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white border border-slate-200 shadow-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-semibold text-emerald-600">STEP 04</span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">Make Your First Request</h3>
                    <p className="mt-4 text-slate-600">
                      Send your first API request and start interacting with Orbit services instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Version */}
            <div className="mt-16 space-y-6 lg:hidden">
              {[
                { number: "01", icon: "👤", title: "Create an Account", desc: "Sign up for Orbit and access the developer dashboard." },
                { number: "02", icon: "🏢", title: "Create a Workspace", desc: "Organize projects, resources, and team members." },
                { number: "03", icon: "🔑", title: "Generate an API Key", desc: "Authenticate requests securely." },
                { number: "04", icon: "🚀", title: "Make Your First Request", desc: "Connect and start building with Orbit." },
              ].map((step) => (
                <div key={step.number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-2xl">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600">STEP {step.number}</span>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 rounded-[32px] bg-slate-900 p-10 text-center text-white">
              <h3 className="text-3xl font-bold">Ready to make your first API call?</h3>
              <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                Once you've completed the setup process, continue to authentication and start building with Orbit's APIs.
              </p>
              <Link to="/Authentication">
                <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
                  Continue to Authentication →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: AUTHENTICATION --- */}
        <section className="relative overflow-hidden bg-white py-28">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Authentication
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Authenticate & Make Your First Request
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Orbit uses secure Bearer Token authentication. Generate an API key,
                include it in your request headers, and start interacting with Orbit's
                platform in seconds.
              </p>
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left Content */}
              <div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">🔐</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Bearer Token Authentication</h3>
                      <p className="text-sm text-slate-500">Secure access to Orbit APIs</p>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-600 leading-relaxed">
                    Every Orbit API request must include an API key inside the
                    Authorization header. This allows Orbit to verify your identity
                    and securely process requests on behalf of your workspace.
                  </p>
                  <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4">
                    <code className="text-sm text-blue-600">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                </div>

                {/* Feature List */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-emerald-500">✓</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Secure Authentication</h4>
                      <p className="text-slate-600">Every request is validated using your API credentials.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-emerald-500">✓</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Workspace Scoped</h4>
                      <p className="text-slate-600">Access only resources associated with your workspace.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-emerald-500">✓</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enterprise Security</h4>
                      <p className="text-slate-600">Built with encryption, auditing, and permission controls.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Code */}
              <div className="space-y-6">
                {/* API Request */}
                <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-slate-400">First API Request</span>
                  </div>
                  <pre className="overflow-x-auto p-6 text-sm text-slate-300">
{`curl https://api.orbit.dev/v1/workspaces \\
  -H "Authorization: Bearer YOUR_API_KEY"

`}
                  </pre>
                </div>

                {/* API Response */}
                <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                  <div className="border-b border-slate-800 px-5 py-4">
                    <span className="text-xs text-slate-400">Example Response</span>
                  </div>
                  <pre className="overflow-x-auto p-6 text-sm text-slate-300">
{`{
  "success": true,
  "data": [
    {
      "id": "ws_12345",
      "name": "Production Workspace",
      "status": "active"
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-20 rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-center text-white">
              <h3 className="text-3xl font-bold">You're Connected to Orbit</h3>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                Once your first request succeeds, you're ready to create workflows,
                monitor resources, manage users, and integrate Orbit into your applications.
              </p>
              <Link to="/APIReference2">
                <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
                  Explore API Reference →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: SDK SECTION --- */}
        <section className="relative overflow-hidden bg-[#f7f9fc] py-28">
          <SDKSection />
        </section>

      </div>
    </>
  );
};

export default GettingStarted;
