import React from 'react'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";

const API = () => {
  return (
    <>
    <div className=' px-6 md:px-10 lg:px-32  py-5 md:py-10 lg:px-20 bg-[#f7f9fc]'> 

    <section className="relative overflow-hidden py-16 sm:py-24 md:py-36 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[500px] bg-neutral-100 rounded-full blur-2xl sm:blur-3xl opacity-80" />
  </div>

  <div className="max-w-7xl mx-auto">

    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6 sm:mb-8">
        Developer Platform
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-black leading-[1.1] sm:leading-[0.95]">
        Build on Orbit
        <br />
        with powerful APIs
      </h1>

      <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
        Integrate AI, meetings, voice, workflows, and knowledge retrieval
        through a single developer platform designed for speed, reliability,
        and scale.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-12 w-full max-w-md mx-auto sm:max-w-none">
        <Link to="/ApiAccess" className="w-full sm:w-auto"> 
          <Button2
            text="Get API Access"
            className="bg-black text-white hover:bg-neutral-700 h-12 px-4 w-full sm:w-40 rounded-xl font-medium transition-colors"
          />
        </Link>

        <Link to="/Resourcespages/Documentation" className="w-full sm:w-auto"> 
          <Button2
            text="Read Documentation"
            className="bg-white text-black border border-neutral-300 hover:bg-neutral-100 h-12 px-4 w-full sm:w-52 rounded-xl font-medium transition-colors"
          />
        </Link>
      </div>
    </div>

    {/* Code Preview */}
    <div className="mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto">
      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-950 overflow-hidden shadow-2xl">

        <div className="flex items-center gap-1.5 sm:gap-2 px-4 py-3 sm:px-5 sm:py-4 border-b border-neutral-800">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
        </div>

        <pre className="p-5 sm:p-8 overflow-x-auto text-xs sm:text-sm md:text-base whitespace-pre scrollbar-thin">
          <code className="text-neutral-300 font-mono block leading-relaxed">
{`import Orbit from "@orbit-ai/sdk"

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY
})

const response = await orbit.workflow.run({
  task: "Schedule a meeting with the design team",
  voice: true
})

console.log(response)`}
          </code>
        </pre>

      </div>
    </div>

  </div>
</section>

   <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content */}
      <div className="w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-600 mb-6 bg-white">
          Developer-First API
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
          Build on Orbit
          <br />
          in minutes.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          Designed for developers who want powerful automation without
          unnecessary complexity. Orbit provides clean APIs, intuitive
          endpoints, and a seamless integration experience from day one.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "RESTful API architecture",
            "Simple authentication",
            "Consistent endpoints",
            "Predictable responses",
            "Developer-friendly design",
            "Quick integration process",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 min-w-0"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Code Preview */}
      <div className="relative w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 overflow-hidden bg-neutral-950 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
          
          {/* Window Header */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-4 py-3 sm:px-5 sm:py-4 border-b border-neutral-800">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
          </div>

          {/* Code Body */}
          <pre className="p-5 sm:p-8 overflow-x-auto text-xs sm:text-sm whitespace-pre scrollbar-thin">
            <code className="text-neutral-300 font-mono block leading-6 sm:leading-7">
{`import Orbit from "@orbit-ai/sdk"

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY
})

const result = await orbit.tasks.create({
  title: "Schedule team sync",
  assignee: "marketing"
})

console.log(result)`}
            </code>
          </pre>

        </div>
      </div>

    </div>
  </div>
</section>

   <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Visual */}
      <div className="relative order-2 lg:order-1 w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-sm">
          <div className="space-y-3 sm:space-y-4">

            <div className="rounded-xl sm:rounded-2xl border border-neutral-200 p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-neutral-500 mb-1 sm:mb-2">
                Voice Command
              </p>
              <p className="text-sm sm:text-base font-medium text-neutral-900">
                "Schedule a product review meeting next week."
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-8 sm:h-10 bg-neutral-200" />
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-neutral-200 p-3 sm:p-4 bg-neutral-50">
              <p className="text-xs sm:text-sm text-neutral-500 mb-1 sm:mb-2">
                Orbit Processing
              </p>
              <p className="text-sm sm:text-base font-medium text-neutral-900">
                Creating event, assigning attendees, generating agenda...
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-px h-8 sm:h-10 bg-neutral-200" />
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-black bg-black p-3 sm:p-4">
              <p className="text-xs sm:text-sm text-neutral-400 mb-1 sm:mb-2">
                Result
              </p>
              <p className="text-sm sm:text-base font-medium text-white">
                Meeting scheduled successfully.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2 w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          AI & Automation Endpoints
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
          Power workflows
          <br />
          with Orbit intelligence.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          Access Orbit's AI capabilities through simple endpoints that
          automate work, execute actions, retrieve knowledge, and power
          intelligent experiences across your applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "Meeting automation",
            "Task generation",
            "Knowledge retrieval",
            "Workflow execution",
            "Voice-triggered actions",
            "Context-aware AI responses",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 min-w-0"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

  <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content */}
      <div className="w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          Real-Time Data & Events
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
          Stay synchronized
          <br />
          with every update.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          Deliver instant updates across applications with event-driven
          architecture, webhooks, and real-time streams that keep your
          systems connected and responsive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "Real-time event streams",
            "Instant data updates",
            "Live activity tracking",
            "Event subscriptions",
            "Webhook support",
            "Low-latency communication",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-950 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

          {/* Header Panel */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-neutral-800">
            <span className="text-xs sm:text-sm text-neutral-400">
              Live Event Stream
            </span>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-neutral-400">
                Connected
              </span>
            </div>
          </div>

          {/* Stream Logs */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm overflow-x-auto whitespace-nowrap scrollbar-thin">
            
            <div className="flex items-center gap-4">
              <span className="text-neutral-500 shrink-0">14:21:05</span>
              <span className="text-green-400 font-medium">meeting.created</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-500 shrink-0">14:21:08</span>
              <span className="text-blue-400 font-medium">task.assigned</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-500 shrink-0">14:21:11</span>
              <span className="text-purple-400 font-medium">workflow.executed</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-500 shrink-0">14:21:14</span>
              <span className="text-yellow-400 font-medium">knowledge.updated</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-neutral-500 shrink-0">14:21:17</span>
              <span className="text-cyan-400 font-medium">webhook.delivered</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Visual */}
      <div className="relative order-2 lg:order-1 w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          
          <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-neutral-200">
            <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">
              Security Overview
            </h3>
          </div>

          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
            {[
              { label: "API Authentication", status: "Active" },
              { label: "OAuth Access", status: "Enabled" },
              { label: "Encryption", status: "TLS Secured" },
              { label: "Permission Controls", status: "Configured" },
            ].map((row, index) => (
              <div key={index} className="flex items-center justify-between text-sm sm:text-base">
                <span className="text-neutral-600 font-medium">
                  {row.label}
                </span>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-neutral-100 text-neutral-800">
                  {row.status}
                </span>
              </div>
            ))}

            <div className="pt-4 border-t border-neutral-200">
              <div className="rounded-xl sm:rounded-2xl bg-neutral-950 p-4 sm:p-5">
                <p className="text-[11px] sm:text-xs text-neutral-500 mb-2 sm:mb-3 tracking-wide uppercase font-medium">
                  Recent Audit Event
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 font-mono">
                  user.authenticated
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2">
                  Access granted via OAuth • 2 minutes ago
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2 w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          Security & Authentication
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
          Enterprise-grade
          <br />
          protection by default.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          Protect every integration with secure authentication,
          granular permissions, encrypted communication, and
          comprehensive audit visibility built into the platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "API key management",
            "OAuth support",
            "Role-based permissions",
            "Encrypted communication",
            "Access controls",
            "Audit logging",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content */}
      <div className="w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          Scalability & Reliability
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
          Built for startups
          <br />
          and enterprises alike.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          Scale from your first API call to millions of requests without
          changing infrastructure. Orbit is designed for reliability,
          resilience, and consistent performance under any workload.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "High availability infrastructure",
            "Horizontal scalability",
            "Global performance",
            "Automatic failover",
            "Redundant systems",
            "Consistent uptime",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm">

          {/* Card Header */}
          <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-neutral-200 flex items-center justify-between gap-2">
            <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">
              Infrastructure Status
            </h3>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-green-600">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 sm:p-6">
            
            {/* Regions List */}
            <div className="space-y-4 sm:space-y-6">
              {[
                "US East Region",
                "Europe Region",
                "Asia Pacific Region",
                "Backup Infrastructure",
              ].map((region) => (
                <div key={region} className="w-full">
                  <div className="flex items-center justify-between mb-2 text-xs sm:text-sm">
                    <span className="text-neutral-700 font-medium">
                      {region}
                    </span>
                    <span className="text-neutral-500">
                      Healthy
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-full bg-black rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* Grid Metrics */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              
              <div className="rounded-xl sm:rounded-2xl bg-neutral-50 p-2 sm:p-4 text-center min-w-0">
                <p className="text-base sm:text-xl md:text-2xl font-semibold text-neutral-900 truncate">
                  99.99%
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-neutral-500 mt-0.5 sm:mt-1 truncate">
                  Uptime
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl bg-neutral-50 p-2 sm:p-4 text-center min-w-0">
                <p className="text-base sm:text-xl md:text-2xl font-semibold text-neutral-900 truncate">
                  &lt;50ms
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-neutral-500 mt-0.5 sm:mt-1 truncate">
                  Latency
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl bg-neutral-50 p-2 sm:p-4 text-center min-w-0">
                <p className="text-base sm:text-xl md:text-2xl font-semibold text-neutral-900 truncate">
                  Global
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-neutral-500 mt-0.5 sm:mt-1 truncate">
                  Coverage
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Visual */}
      <div className="order-2 lg:order-1 w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm">

          <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-neutral-200">
            <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">
              Analytics Dashboard
            </h3>
          </div>

          <div className="p-4 sm:p-6">

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl sm:rounded-2xl bg-neutral-50 p-3 sm:p-4 min-w-0">
                <p className="text-xs sm:text-sm text-neutral-500 truncate">
                  API Requests
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2 truncate">
                  2.4M
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl bg-neutral-50 p-3 sm:p-4 min-w-0">
                <p className="text-xs sm:text-sm text-neutral-500 truncate">
                  Success Rate
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2 truncate">
                  99.98%
                </p>
              </div>
            </div>

            {/* Graph Container */}
            <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl border border-neutral-200 p-3 sm:p-5">
              <div className="flex items-end justify-between h-24 sm:h-32 gap-1 sm:gap-2">
                {[35, 50, 42, 70, 58, 82, 65, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-black rounded-t-sm sm:rounded-t-lg transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Events Rows */}
            <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                <span className="text-neutral-600 truncate">
                  Request latency
                </span>
                <span className="font-medium text-neutral-900 shrink-0">
                  48ms
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                <span className="text-neutral-600 truncate">
                  Error rate
                </span>
                <span className="font-medium text-neutral-900 shrink-0">
                  0.02%
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
                <span className="text-neutral-600 truncate">
                  Rate limit usage
                </span>
                <span className="font-medium text-neutral-900 shrink-0">
                  74%
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="order-1 lg:order-2 w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          Monitoring & Analytics
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
          Track every request
          <br />
          and interaction.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          Gain complete visibility into API performance, usage patterns,
          and operational health with real-time monitoring and actionable
          analytics built directly into Orbit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "API usage metrics",
            "Request monitoring",
            "Performance insights",
            "Error tracking",
            "Rate limit visibility",
            "Operational dashboards",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 min-w-0"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content */}
      <div className="w-full">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          Documentation & Developer Experience
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
          Everything needed
          <br />
          to ship faster.
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 max-w-xl">
          From your first API request to production deployment,
          Orbit provides the tools, documentation, and resources
          developers need to build confidently and move quickly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "Interactive documentation",
            "SDKs and code samples",
            "Quickstart guides",
            "API playground",
            "Version management",
            "Dedicated developer support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base text-neutral-700 font-medium truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual */}
      <div className="w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm">

          {/* Header Panel */}
          <div className="px-4 py-4 sm:px-6 sm:py-4 border-b border-neutral-200 flex items-center justify-between gap-2">
            <span className="font-semibold text-neutral-900 text-sm sm:text-base">
              API Documentation
            </span>

            <span className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-neutral-100 shrink-0">
              v2.1
            </span>
          </div>

          {/* Interactive Layout Area */}
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[220px_1fr] min-h-[auto] sm:min-h-[420px]">

            {/* Sidebar (Scrollable on small monitors, responsive stacker on mobile views) */}
            <div className="border-b sm:border-b-0 sm:border-r border-neutral-200 p-4 sm:p-5 bg-neutral-50 overflow-x-auto sm:overflow-x-visible whitespace-nowrap sm:whitespace-normal">
              <div className="flex sm:flex-col gap-4 sm:gap-3 text-xs sm:text-sm">
                <div className="font-medium text-black shrink-0">
                  Getting Started
                </div>
                <div className="text-neutral-500 shrink-0">Authentication</div>
                <div className="text-neutral-500 shrink-0">Workflows API</div>
                <div className="text-neutral-500 shrink-0">Meetings API</div>
                <div className="text-neutral-500 shrink-0">Voice API</div>
                <div className="text-neutral-500 shrink-0">Webhooks</div>
                <div className="text-neutral-500 shrink-0">SDK Reference</div>
              </div>
            </div>

            {/* Content Display Canvas */}
            <div className="p-4 sm:p-6 flex flex-col justify-between gap-4 min-w-0">
              
              <div className="rounded-xl sm:rounded-2xl bg-neutral-950 overflow-hidden w-full">
                <div className="px-4 py-2.5 border-b border-neutral-800">
                  <span className="text-[10px] sm:text-xs text-neutral-500">
                    Quickstart
                  </span>
                </div>

                <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm whitespace-pre scrollbar-thin">
                  <code className="text-neutral-300 font-mono block leading-6 sm:leading-7">
{`npm install @orbit-ai/sdk

import Orbit from "@orbit-ai/sdk"

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY
})

await orbit.workflows.run()`}
                  </code>
                </pre>
              </div>

              {/* Action Buttons Container */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-2 sm:mt-0">
                <button className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl bg-black text-white text-xs sm:text-sm font-medium hover:bg-neutral-800 transition-colors">
                  Run Example
                </button>

                <button className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-neutral-200 text-xs sm:text-sm font-medium hover:bg-neutral-50 transition-colors">
                  View SDK
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 md:py-40 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[600px] md:h-[900px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-80" />
  </div>

  <div className="max-w-6xl mx-auto">
    <div className="relative rounded-3xl sm:rounded-[40px] border border-neutral-200 bg-white p-6 sm:p-10 md:p-16 overflow-hidden shadow-sm">

      {/* Card Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[450px] md:w-[600px] h-[150px] sm:h-[220px] md:h-[300px] bg-neutral-100 blur-2xl sm:blur-3xl opacity-80" />
      </div>

      <div className="relative text-center">

        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6 sm:mb-8">
          Ready to Build?
        </div>

        <h2 className="text-3xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-black leading-tight sm:leading-[0.95]">
          Start building
          <br />
          with Orbit today.
        </h2>

        <p className="max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-600">
          Everything you need to integrate AI, automate workflows,
          process real-time events, and build intelligent products
          on a platform designed for scale.
        </p>

        {/* Benefits Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 max-w-2xl mx-auto">
          {[
            "AI APIs",
            "Real-Time Events",
            "Enterprise Security",
            "Developer SDKs",
            "Global Infrastructure",
            "24/7 Reliability",
          ].map((item) => (
            <div
              key={item}
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-neutral-50 text-xs sm:text-sm font-medium text-neutral-700 whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 sm:mt-14 w-full max-w-xs sm:max-w-none mx-auto">
          <Link to="/ApiAccess" className="w-full sm:w-auto"> 
            <Button2
              text="Get API Access"
              className="bg-black text-white hover:bg-neutral-700 h-12 px-4 w-full sm:w-40 rounded-xl font-medium transition-colors"
            />
          </Link>

          <Link to="/Resourcespages/Documentation" className="w-full sm:w-auto"> 
            <Button2
              text="Read Documentation"
              className="bg-white text-black border border-neutral-300 hover:bg-neutral-100 h-12 px-4 w-full sm:w-52 rounded-xl font-medium transition-colors"
            />
          </Link>
        </div>

        {/* Bottom Line */}
        <div className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-neutral-200">
          <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-xl mx-auto">
            Trusted by teams building the next generation of AI-powered products.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

    </div>
    </>
  )
}

export default API
