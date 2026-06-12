import React from 'react'
import Button2 from '../../components/ui/Button2'
import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Monitoring = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
       <div className=' px-6 md:px-10 lg:px-32  py-5 md:py-10 lg:px-20 bg-[#f7f9fc]'> 
 
   
 <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-blue-100 rounded-full blur-2xl sm:blur-3xl opacity-40" />
    <div className="absolute bottom-0 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-indigo-100 rounded-full blur-2xl sm:blur-3xl opacity-40" />
  </div>

  <div className="max-w-7xl mx-auto flex items-center justify-center text-center">

    {/* Content Container */}
    <div className="max-w-4xl flex flex-col items-center">
      
      {/* Live Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white shadow-sm mb-4 sm:mb-6">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs sm:text-sm text-neutral-600 font-medium tracking-wide">
          Live AI Monitoring
        </span>
      </div>

      {/* Hero Header */}
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1]">
        Monitor every workflow
        <br />
        in real time.
      </h2>

      {/* Description */}
      <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-2xl">
        Track conversations, automations, and system health with
        live AI-powered monitoring built for modern teams.
      </p>

    </div>
  </div>
</section>

  <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-emerald-100 rounded-full blur-2xl sm:blur-3xl opacity-40" />
    <div className="absolute bottom-0 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-green-100 rounded-full blur-2xl sm:blur-3xl opacity-40" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">

      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white shadow-sm mb-4 sm:mb-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-ping opacity-75" />
          <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-xs sm:text-sm text-neutral-600 font-medium tracking-wide">
          AI Agent Status
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
        Every system operating
        <br />
        at full capacity.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 text-neutral-600">
        Monitor Orbit’s AI infrastructure, workflows, and integrations
        with live operational visibility.
      </p>

    </div>

    {/* Status Panel Dashboard Container */}
    <div className="relative max-w-5xl mx-auto w-full">

      {/* Behind-card Outer Glow Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 via-emerald-100/20 to-lime-100/30 blur-2xl sm:blur-3xl rounded-[24px] sm:rounded-[40px] pointer-events-none" />

      <div className="relative rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* Dashboard Header Panel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 sm:px-8 sm:py-6 border-b border-neutral-100">

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative flex items-center justify-center shrink-0">
              <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-ping opacity-75" />
              <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 truncate">
              System Infrastructure
            </h3>
          </div>

          <div className="text-xs sm:text-sm text-neutral-900 font-semibold self-start sm:self-auto bg-green-50 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full sm:rounded-none">
            All Systems Operational
          </div>

        </div>

        {/* Dynamic Operational Cards Grid Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8">

          {/* Infrastructure Card Item */}
          <div className="group relative rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden min-w-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-full">
              <div className="flex items-center justify-between gap-4 mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                    <div className="relative w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-900 font-medium">Active</span>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 truncate">Voice Assistant</h4>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-neutral-500 leading-relaxed">
                Processing live conversations and responding instantly.
              </p>
            </div>
          </div>

          {/* Infrastructure Card Item */}
          <div className="group relative rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden min-w-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-full">
              <div className="flex items-center justify-between gap-4 mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-lime-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-lime-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                    <div className="relative w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-900 font-medium">Healthy</span>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 truncate">Workflow Engine</h4>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-neutral-500 leading-relaxed">
                Automating tasks and orchestrating operations live.
              </p>
            </div>
          </div>

          {/* Infrastructure Card Item */}
          <div className="group relative rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white p-5 sm:p-6 hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden min-w-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-full">
              <div className="flex items-center justify-between gap-4 mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-green-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                    <div className="relative w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-900 font-medium">Operational</span>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 truncate">Calendar Sync</h4>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-neutral-500 leading-relaxed">
                Synchronizing schedules and meetings in real time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

<section id='dashboard' className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-800 shadow-sm mb-4 sm:mb-6">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
        Response Analytics
      </span>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Performance at a glance.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Monitor AI responsiveness, automation throughput and
        workflow execution in real time.
      </p>
    </div>

    {/* Analytics Panel */}
    <div className="rounded-2xl sm:rounded-[40px] border border-neutral-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden">

      {/* Top Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x divide-neutral-100 md:divide-y-0">
        
        <div className="p-5 sm:p-8 col-span-1 border-t-0 border-l-0">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Avg Response Time</p>
          <h3 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-900">1.8s</h3>
          <span className="inline-flex items-center text-green-600 text-xs sm:text-sm font-medium mt-1">↓ 12%</span>
        </div>

        <div className="p-5 sm:p-8 col-span-1 border-t-0 md:border-l border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Automation Speed</p>
          <h3 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-900">98%</h3>
          <span className="inline-flex items-center text-green-600 text-xs sm:text-sm font-medium mt-1">Healthy</span>
        </div>

        <div className="p-5 sm:p-8 col-span-1 border-l-0 md:border-l border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Tasks / Hour</p>
          <h3 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-900">1,284</h3>
          <span className="inline-flex items-center text-green-600 text-xs sm:text-sm font-medium mt-1">Live</span>
        </div>

        <div className="p-5 sm:p-8 col-span-1 border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">AI Latency</p>
          <h3 className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-900">184ms</h3>
          <span className="inline-flex items-center text-green-600 text-xs sm:text-sm font-medium mt-1">Stable</span>
        </div>

      </div>

      {/* Chart Area */}
      <div className="p-5 sm:p-8 lg:p-10 border-t border-neutral-100">

        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="min-w-0">
            <h4 className="text-base sm:text-xl font-semibold text-neutral-900 truncate">
              Response Time Trend
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 truncate">
              Last 24 hours
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 text-xs sm:text-sm font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Live
          </div>
        </div>

        {/* SVG Line Chart Container with dynamic height limits */}
        <div className="h-[200px] sm:h-[280px] rounded-xl sm:rounded-3xl bg-neutral-50 border border-neutral-100 p-3 sm:p-6 lg:p-8 fallback-contain">
          <svg
            viewBox="0 0 800 240"
            className="w-full h-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 170
                 C80 140 120 150 180 110
                 C240 70 320 90 380 60
                 C460 20 520 40 600 50
                 C680 60 740 40 800 20"
              stroke="#111827"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <path
              d="M0 170
                 C80 140 120 150 180 110
                 C240 70 320 90 380 60
                 C460 20 520 40 600 50
                 C680 60 740 40 800 20"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="800"
                y2="0"
              >
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#22C55E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>

      {/* Bottom Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100 border-t border-neutral-100 bg-neutral-50/50">

        <div className="p-5 sm:p-8">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">
            Processing Queue
          </p>
          <h4 className="mt-1 sm:mt-2 text-xl sm:text-3xl font-semibold text-neutral-900">
            12
          </h4>
        </div>

        <div className="p-5 sm:p-8">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">
            Workflows Completed Today
          </p>
          <h4 className="mt-1 sm:mt-2 text-xl sm:text-3xl font-semibold text-neutral-900">
            18,432
          </h4>
        </div>

        <div className="p-5 sm:p-8">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">
            Uptime
          </p>
          <h4 className="mt-1 sm:mt-2 text-xl sm:text-3xl font-semibold text-neutral-900">
            99.98%
          </h4>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-800 shadow-sm mb-4 sm:mb-6">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
        Conversation Monitoring
      </span>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Understand every conversation.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Monitor intent detection, sentiment analysis, conversation
        quality, and AI performance in real time.
      </p>
    </div>

    {/* Main Container Panel */}
    <div className="rounded-2xl sm:rounded-[40px] border border-neutral-200 overflow-hidden bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">

        {/* LIVE CONVERSATION */}
        <div className="p-5 sm:p-8 lg:p-10">

          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <h3 className="text-base sm:text-xl font-semibold text-neutral-900 truncate">
              Live Conversation Feed
            </h3>

            <div className="flex items-center gap-1.5 shrink-0 text-xs sm:text-sm font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">

            <div className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 sm:p-5 min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Customer
              </p>
              <p className="text-sm sm:text-base text-neutral-900 leading-relaxed break-words">
                I'd like to reschedule tomorrow's meeting.
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 p-4 sm:p-5 min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-500 mb-1">
                Orbit AI
              </p>
              <p className="text-sm sm:text-base text-blue-900 leading-relaxed break-words">
                I've found 3 available time slots next week.
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 sm:p-5 min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Customer
              </p>
              <p className="text-sm sm:text-base text-neutral-900 leading-relaxed break-words">
                Thursday afternoon works best.
              </p>
            </div>

          </div>

        </div>

        {/* AI ANALYSIS */}
        <div className="p-5 sm:p-8 lg:p-10 bg-neutral-50/30">

          <h3 className="text-base sm:text-xl font-semibold text-neutral-900 mb-6 sm:mb-8">
            AI Analysis
          </h3>

          <div className="space-y-4 sm:space-y-5">

            <div className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-white p-4 sm:p-5 min-w-0">
              <p className="text-xs sm:text-sm text-neutral-500 mb-2 truncate">
                Detected Intent
              </p>
              <div className="inline-flex px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium shrink-0">
                Meeting Reschedule
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-white p-4 sm:p-5 min-w-0">
              <p className="text-xs sm:text-sm text-neutral-500 mb-2 truncate">
                Sentiment
              </p>

              <div className="flex items-center gap-3">
                <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                  <div className="w-[82%] h-full bg-green-500 rounded-full" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-green-600 shrink-0">
                  Positive
                </span>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-white p-4 sm:p-5 min-w-0">
              <p className="text-xs sm:text-sm text-neutral-500 mb-1 truncate">
                Resolution Prediction
              </p>
              <div className="text-2xl sm:text-3xl font-semibold text-neutral-900">
                96%
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* METRICS PANEL FOOTER */}
      <div className="grid grid-cols-2 md:grid-cols-5 divide-y divide-x divide-neutral-100 border-t border-neutral-100 md:divide-y-0 bg-neutral-50/50">

        <div className="p-5 sm:p-6 lg:p-8 border-t-0 border-l-0">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Active Conversations</p>
          <h4 className="text-xl sm:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2">247</h4>
        </div>

        <div className="p-5 sm:p-6 lg:p-8 border-t-0 md:border-l border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Detected Intents</p>
          <h4 className="text-xl sm:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2">38</h4>
        </div>

        <div className="p-5 sm:p-6 lg:p-8 border-l-0 md:border-l border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Sentiment Score</p>
          <h4 className="text-xl sm:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2">8.7/10</h4>
        </div>

        <div className="p-5 sm:p-6 lg:p-8 border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Interruption Rate</p>
          <h4 className="text-xl sm:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2">2.1%</h4>
        </div>

        <div className="p-5 sm:p-6 lg:p-8 col-span-2 md:col-span-1 border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 truncate">Resolution Rate</p>
          <h4 className="text-xl sm:text-3xl font-semibold text-neutral-900 mt-1 sm:mt-2">97.4%</h4>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-800 shadow-sm mb-4 sm:mb-6">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
        Team Performance Insights
      </span>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Measure the impact
        <br />
        of every automation.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        See how Orbit improves productivity, reduces manual work,
        and saves valuable team hours.
      </p>
    </div>

    {/* Main Stats Layout Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">

      {/* Hero Card */}
      <div className="rounded-2xl sm:rounded-[36px] border border-neutral-900 p-6 sm:p-10 bg-black text-white flex flex-col justify-between min-w-0">
        <div>
          <p className="text-neutral-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
            Time Saved
          </p>
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight mt-4 sm:mt-6">
            127
          </h3>
          <p className="text-lg sm:text-2xl text-neutral-300 mt-2 sm:mt-4 font-medium">
            Hours saved this week
          </p>
        </div>
        <div className="mt-8 sm:mt-10 flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
          +34% compared to last week
        </div>
      </div>

      {/* Side Stats Nested Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">

        <div className="rounded-2xl sm:rounded-[30px] border border-neutral-200 bg-white p-5 sm:p-8 min-w-0">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium truncate">
            Meetings Automated
          </p>
          <h4 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mt-2 sm:mt-4">
            842
          </h4>
          <p className="text-green-600 text-xs sm:text-sm font-semibold mt-2 sm:mt-3">
            +18%
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-[30px] border border-neutral-200 bg-white p-5 sm:p-8 min-w-0">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium truncate">
            Tasks Reduced
          </p>
          <h4 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mt-2 sm:mt-4">
            4.2K
          </h4>
          <p className="text-green-600 text-xs sm:text-sm font-semibold mt-2 sm:mt-3">
            +26%
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-[30px] border border-neutral-200 bg-white p-5 sm:p-8 min-w-0">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium truncate">
            Productivity Gain
          </p>
          <h4 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mt-2 sm:mt-4">
            +31%
          </h4>
          <p className="text-green-600 text-xs sm:text-sm font-semibold mt-2 sm:mt-3">
            Team-wide
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-[30px] border border-neutral-200 bg-white p-5 sm:p-8 min-w-0">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium truncate">
            Workflows Executed
          </p>
          <h4 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mt-2 sm:mt-4">
            18K
          </h4>
          <p className="text-green-600 text-xs sm:text-sm font-semibold mt-2 sm:mt-3">
            This month
          </p>
        </div>

      </div>

    </div>

    {/* Bottom Banner Panel */}
    <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 p-6 sm:p-10 bg-neutral-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
        
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium mb-1 sm:mb-2">
            Business Impact
          </p>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
            Teams using Orbit reclaim{" "}
            <span className="sm:block text-neutral-800">500+ hours every month.</span>
          </h3>
        </div>

        <div className="sm:text-right shrink-0 bg-white sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-neutral-100">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Average ROI
          </p>
          <h4 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 mt-1 sm:mt-2">
            4.8×
          </h4>
        </div>

      </div>
    </div>

  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-800 shadow-sm mb-4 sm:mb-6">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse" />
        Smart Alerts
      </span>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Orbit identifies issues
        <br />
        before they become problems.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        AI continuously monitors conversations, workflows, meetings,
        and customer interactions to surface risks in real time.
      </p>
    </div>

    {/* Main Alert Center */}
    <div className="rounded-2xl sm:rounded-[40px] overflow-hidden bg-black border border-neutral-800 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">

      {/* Header Panel */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 sm:px-10 sm:py-8 border-b border-white/10">
        <div>
          <p className="text-neutral-400 text-xs sm:text-sm mb-1">
            AI Monitoring Center
          </p>
          <h3 className="text-lg sm:text-2xl font-semibold text-white">
            Live Risk Detection
          </h3>
        </div>

        <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm font-medium bg-white/[0.04] sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full self-start sm:self-auto">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
          Monitoring 24/7 systems
        </div>
      </div>

      {/* Alerts Stack */}
      <div className="p-4 sm:p-8 space-y-4 sm:space-y-5">

        {/* Critical Alert */}
        <div className="group rounded-2xl sm:rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-5 sm:p-6 transition-all duration-300 hover:border-red-500/40 min-w-0">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 text-red-400 text-xs sm:text-sm font-medium mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Critical Alert
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                Customer frustration detected
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
                Sentiment dropped significantly during the last
                support interaction. Immediate follow-up recommended.
              </p>
            </div>

            <div className="sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-2 w-full sm:w-auto shrink-0 border-b sm:border-0 border-white/5 pb-2 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white">94%</div>
              <div className="text-neutral-500 text-xs sm:text-sm">Confidence</div>
            </div>
          </div>
        </div>

        {/* Attention Required Alert */}
        <div className="group rounded-2xl sm:rounded-3xl border border-amber-500/20 bg-amber-500/[0.04] p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/40 min-w-0">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-medium mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Attention Required
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                Missed follow-up risk
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
                Three prospects have not received a response within
                the expected engagement window.
              </p>
            </div>

            <div className="sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-2 w-full sm:w-auto shrink-0 border-b sm:border-0 border-white/5 pb-2 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white">87%</div>
              <div className="text-neutral-500 text-xs sm:text-sm">Confidence</div>
            </div>
          </div>
        </div>

        {/* Opportunity Alert */}
        <div className="group rounded-2xl sm:rounded-3xl border border-blue-500/20 bg-blue-500/[0.04] p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/40 min-w-0">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-medium mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Opportunity
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                High-priority lead waiting
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
                Enterprise lead viewed pricing multiple times and is
                awaiting a response from sales.
              </p>
            </div>

            <div className="sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-2 w-full sm:w-auto shrink-0 border-b sm:border-0 border-white/5 pb-2 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white">91%</div>
              <div className="text-neutral-500 text-xs sm:text-sm">Confidence</div>
            </div>
          </div>
        </div>

        {/* Scheduling Conflict Alert */}
        <div className="group rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-purple-500/[0.04] p-5 sm:p-6 transition-all duration-300 hover:border-purple-500/40 min-w-0">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 text-purple-400 text-xs sm:text-sm font-medium mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Scheduling Conflict
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                Calendar conflict identified
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
                Two meetings overlap tomorrow and involve the same
                participants.
              </p>
            </div>

            <div className="sm:text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-2 w-full sm:w-auto shrink-0 border-b sm:border-0 border-white/5 pb-2 sm:pb-0">
              <div className="text-2xl sm:text-3xl font-semibold text-white">99%</div>
              <div className="text-neutral-500 text-xs sm:text-sm">Confidence</div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x divide-white/10 md:divide-y-0 border-t border-white/10 bg-white/[0.01]">
        
        <div className="p-5 sm:p-8 border-t-0 border-l-0">
          <p className="text-neutral-500 text-xs sm:text-sm truncate">Risks Prevented</p>
          <h4 className="text-xl sm:text-4xl font-semibold text-white mt-1 sm:mt-3">482</h4>
        </div>

        <div className="p-5 sm:p-8 border-t-0 md:border-l border-white/10">
          <p className="text-neutral-500 text-xs sm:text-sm truncate">Active Alerts</p>
          <h4 className="text-xl sm:text-4xl font-semibold text-white mt-1 sm:mt-3">12</h4>
        </div>

        <div className="p-5 sm:p-8 border-l-0 md:border-l border-white/10">
          <p className="text-neutral-500 text-xs sm:text-sm truncate">Resolved Today</p>
          <h4 className="text-xl sm:text-4xl font-semibold text-white mt-1 sm:mt-3">97</h4>
        </div>

        <div className="p-5 sm:p-8 border-white/10">
          <p className="text-neutral-500 text-xs sm:text-sm truncate">Detection Accuracy</p>
          <h4 className="text-xl sm:text-4xl font-semibold text-white mt-1 sm:mt-3">98.7%</h4>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden px-4 sm:px-6">

  <div className="max-w-5xl mx-auto text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-800 shadow-sm mb-6 sm:mb-8">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
      <span>Real-Time Monitoring</span>
    </div>

    {/* Heading */}
    <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight sm:leading-[1.05]">
      Stay ahead of every
      <br />
      conversation, workflow,
      <br />
      and opportunity.
    </h2>

    {/* Description */}
    <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
      Orbit continuously monitors your operations,
      surfaces critical insights, and helps teams
      respond faster with AI-powered visibility.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 sm:mt-12 w-full sm:w-auto">
      <Link to="/Signup" className="w-full sm:w-auto">
        <Button2
          className="w-full sm:w-40 h-12 bg-black text-white font-medium hover:bg-neutral-800 transition-all duration-300 rounded-xl"
          text="Start Monitoring"
        />
      </Link>

      <Link to="/book-demo" className="w-full sm:w-auto">
        <Button2
          className="w-full sm:w-40 h-12 border border-neutral-300 bg-white text-black font-medium hover:bg-neutral-50 transition-all duration-300 rounded-xl"
          text="Book a Demo"
        />
      </Link>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-neutral-200">

      <div className="min-w-0">
        <div className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black">
          99.98%
        </div>
        <p className="mt-1 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-500 font-medium truncate">
          Monitoring Uptime
        </p>
      </div>

      <div className="min-w-0">
        <div className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black">
          24/7
        </div>
        <p className="mt-1 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-500 font-medium truncate">
          AI Supervision
        </p>
      </div>

      <div className="min-w-0">
        <div className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black">
          18M+
        </div>
        <p className="mt-1 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-500 font-medium truncate">
          Events Monitored
        </p>
      </div>

    </div>

  </div>
</section>

      </div>
    </>

  )
}

export default Monitoring



