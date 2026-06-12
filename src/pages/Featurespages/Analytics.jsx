import React from 'react'
import AnalyticsSection from '../../components/ui/AnalyticsSection'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";

const Analytics = () => {
  return (
    <> 
    <div className=' px-6 md:px-10 lg:px-32  py-5 md:py-10 lg:px-20 bg-[#f7f9fc]'> 
    
       
       <section >
         
         <AnalyticsSection />
       </section>

 <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[150px] sm:h-[300px] md:h-[500px] lg:h-[700px] bg-violet-500/10 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADING */}
    <div className="text-center">
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-violet-600">
        Live Activity
      </p>

      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
        Every action.<br className="sm:hidden" /> Instantly synchronized.
      </h2>

      <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base lg:text-lg leading-7 sm:leading-8 text-gray-600">
        Follow live voice commands, workflow automation, and team activity
        as Orbit coordinates work in real time.
      </p>
    </div>

    {/* FEED */}
    <div className="relative mx-auto mt-12 sm:mt-16 md:mt-24 max-w-5xl">

      {/* OUTER GLOW */}
      <div className="absolute inset-0 rounded-[24px] sm:rounded-[40px] bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-blue-500/10 blur-2xl md:blur-3xl" />

      {/* MAIN CARD */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_20px_100px_rgba(0,0,0,0.08)]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between border-b border-black/5 px-4 sm:px-6 md:px-8 py-4 sm:py-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">
              Live Activity Feed
            </p>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap pl-2">
            Updating in real time
          </p>
        </div>

        {/* FEED ITEMS */}
        <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 md:p-8">

          {/* ITEM 1 */}
          <div className="rounded-[20px] sm:rounded-[28px] border border-black/5 bg-white/80 p-4 sm:p-6 shadow-sm backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl bg-violet-100 flex items-center justify-center text-violet-700 font-semibold shrink-0 text-sm sm:text-base">
                    A
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      Alex
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      2 seconds ago
                    </p>
                  </div>
                </div>

                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-800 break-words">
                  “Schedule launch review meeting tomorrow at 4 PM.”
                </p>

                <div className="mt-4 sm:mt-5 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100 px-3 sm:px-4 py-2.5 sm:py-3">
                  <p className="text-xs sm:text-sm font-medium text-emerald-700 break-words">
                    Orbit → Meeting created successfully
                  </p>
                </div>
              </div>

              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 mt-2 sm:mt-2.5 shrink-0" />
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="rounded-[20px] sm:rounded-[28px] border border-black/5 bg-white/80 p-4 sm:p-6 shadow-sm backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-700 font-semibold shrink-0 text-sm sm:text-base">
                    E
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      Emma
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      14 seconds ago
                    </p>
                  </div>
                </div>

                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-800 break-words">
                  “Summarize unread emails and highlight urgent ones.”
                </p>

                <div className="mt-4 sm:mt-5 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 px-3 sm:px-4 py-2.5 sm:py-3">
                  <p className="text-xs sm:text-sm font-medium text-blue-700 break-words">
                    Orbit → 12 emails summarized instantly
                  </p>
                </div>
              </div>

              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 mt-2 sm:mt-2.5 shrink-0" />
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="rounded-[20px] sm:rounded-[28px] border border-black/5 bg-white/80 p-4 sm:p-6 shadow-sm backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 font-semibold shrink-0 text-sm sm:text-base">
                    R
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      Ryan
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      32 seconds ago
                    </p>
                  </div>
                </div>

                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-800 break-words">
                  “Create sprint tasks and sync them to Linear.”
                </p>

                <div className="mt-4 sm:mt-5 rounded-xl sm:rounded-2xl bg-violet-50 border border-violet-100 px-3 sm:px-4 py-2.5 sm:py-3">
                  <p className="text-xs sm:text-sm font-medium text-violet-700 break-words">
                    Orbit → Tasks synced successfully to Linear
                  </p>
                </div>
              </div>

              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 mt-2 sm:mt-2.5 shrink-0" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[500px] lg:w-[700px] h-[280px] sm:h-[500px] lg:h-[700px] bg-violet-500/10 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

    {/* HEADING */}
    <div className="text-center">
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-violet-600">
        Workflow Insights
      </p>

      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
        Understand what your team
        <br className="hidden sm:inline" /> automates most.
      </h2>

      <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
        Discover the workflows saving the most time, improving collaboration,
        and driving productivity every day.
      </p>
    </div>

    {/* INSIGHTS GRID */}
    <div className="mt-12 sm:mt-16 md:mt-24 grid gap-6 sm:grid-cols-2 lg:gap-8">

      {/* CARD 1 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-black/5 bg-white/80 p-5 sm:p-6 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                Meetings Automated
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
                AI-scheduled team coordination
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 shrink-0">
              84%
            </h3>
          </div>

          {/* BAR */}
          <div className="mt-6 sm:mt-8 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>

          {/* MINI STATS */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-violet-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-violet-700 whitespace-nowrap">
                +18% growth
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-emerald-700 whitespace-nowrap">
                2.1K automations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-black/5 bg-white/80 p-5 sm:p-6 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                Tasks Created
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
                Voice-powered task execution
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 shrink-0">
              71%
            </h3>
          </div>

          {/* BAR */}
          <div className="mt-6 sm:mt-8 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[71%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>

          {/* MINI STATS */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-blue-700 whitespace-nowrap">
                +12% efficiency
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-emerald-700 whitespace-nowrap">
                4.8K tasks synced
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-black/5 bg-white/80 p-5 sm:p-6 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                Email Summaries
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
                AI-generated communication insights
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 shrink-0">
              63%
            </h3>
          </div>

          {/* BAR */}
          <div className="mt-6 sm:mt-8 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[63%] rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500" />
          </div>

          {/* MINI STATS */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-fuchsia-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-fuchsia-700 whitespace-nowrap">
                +9% faster reviews
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-emerald-700 whitespace-nowrap">
                8.3K summaries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-black/5 bg-white/80 p-5 sm:p-6 md:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                Team Syncs
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-2">
                Real-time collaboration workflows
              </p>
            </div>
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 shrink-0">
              92%
            </h3>
          </div>

          {/* BAR */}
          <div className="mt-6 sm:mt-8 h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
          </div>

          {/* MINI STATS */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="rounded-xl sm:rounded-2xl bg-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-emerald-700 whitespace-nowrap">
                Highest engagement
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2">
              <p className="text-xs sm:text-sm font-medium text-green-700 whitespace-nowrap">
                24/7 active sync
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="dashboard" className="relative mt-20 md:mt-40">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[80px] sm:blur-[120px]" />
  </div>

  <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">

    {/* LEFT SIDE */}
    <div className="rounded-[24px] sm:rounded-[34px] border border-white/60 bg-white/70 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

      {/* TOP */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs sm:text-sm font-medium text-violet-600">
            Analytics Overview
          </p>
          <h3 className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            AI productivity in real time.
          </h3>
        </div>

        <div className="w-fit rounded-2xl border border-black/5 bg-black px-4 py-2 text-sm font-medium text-white self-start sm:self-center">
          Live
        </div>
      </div>

      {/* CHART CONTAINER */}
      <div className="relative mt-8 sm:mt-10 overflow-hidden rounded-[20px] sm:rounded-[28px] border border-black/5 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[360px] sm:min-h-[320px]">
        
        {/* GRID */}
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
        </div>

        {/* LINE GRAPH */}
        <div className="absolute inset-x-0 bottom-0 top-12 sm:top-0 flex items-center justify-center">
          <svg
            viewBox="0 0 600 260"
            className="w-full h-auto aspect-[600/260]"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 210 C60 170, 120 180, 180 120 C240 60, 300 90, 360 80 C420 70, 480 130, 600 40"
              stroke="url(#paint0_linear)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="600" y2="0">
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* FLOATING STATS */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full z-10 pointer-events-none">
          <div className="relative sm:absolute sm:left-8 sm:top-8 rounded-2xl border border-white/70 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl shadow-lg pointer-events-auto self-start">
            <p className="text-xs text-gray-500">
              Commands Processed
            </p>
            <h4 className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">
              12,482
            </h4>
          </div>

          <div className="relative sm:absolute sm:bottom-8 sm:right-8 rounded-2xl border border-white/70 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl shadow-lg pointer-events-auto self-end sm:self-auto">
            <p className="text-xs text-gray-500">
              Workflow Accuracy
            </p>
            <h4 className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">
              94%
            </h4>
          </div>
        </div>

      </div>

      {/* BOTTOM STATS */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-neutral-50 p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            Avg Response Time
          </p>
          <h4 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
            1.8s
          </h4>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-neutral-50 p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            Tasks Automated
          </p>
          <h4 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
            8.2K
          </h4>
        </div>

        <div className="rounded-2xl sm:rounded-3xl border border-black/5 bg-neutral-50 p-4 sm:p-5 sm:col-span-2 md:col-span-1">
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            Team Efficiency
          </p>
          <h4 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
            +37%
          </h4>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col gap-6">

      {/* CARD 1 */}
      <div className="rounded-[24px] sm:rounded-[30px] border border-white/60 bg-white/70 p-5 sm:p-6 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-gray-500 truncate">
              Voice Activity
            </p>
            <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
              2.4K
            </h3>
          </div>

          <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-violet-100 text-xl sm:text-2xl">
            🎤
          </div>
        </div>

        <div className="mt-5 flex items-end gap-[5px] h-[45px]">
          {[18, 28, 20, 42, 24, 34, 26].map((h, i) => (
            <div
              key={i}
              className="w-[7px] rounded-full bg-gradient-to-t from-violet-500 to-blue-500 transition-all"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>

      {/* CARD 2 */}
      <div className="rounded-[24px] sm:rounded-[30px] border border-white/60 bg-white/70 p-5 sm:p-6 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
        <p className="text-sm text-gray-500">
          Workflow Automation
        </p>
        <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
          84%
        </h3>

        <div className="mt-5 h-2.5 sm:h-3 overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
        </div>

        <p className="mt-3 text-xs sm:text-sm text-gray-500">
          Most workflows are fully automated by Orbit AI.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-[24px] sm:rounded-[30px] border border-white/60 bg-black p-5 sm:p-6 text-white shadow-[0_15px_50px_rgba(0,0,0,0.18)]">
        <p className="text-sm text-white/60">
          Team Collaboration
        </p>
        <h3 className="mt-2 text-3xl sm:text-4xl font-semibold">
          132
        </h3>

        <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">
          Active collaborators syncing meetings, tasks, and workflows in real time.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="relative mt-16 sm:mt-24 md:mt-36 overflow-hidden px-4 sm:px-6">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-1/2 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[80px] sm:blur-[120px]" />
  </div>

  <div className="relative max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center">
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-violet-600">
        Productivity Comparison
      </p>

      <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
        Spend less time managing.
        <br className="hidden sm:inline" /> Focus more on execution.
      </h2>

      <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
        Orbit removes repetitive workflows, task switching,
        and manual coordination — so teams can move faster.
      </p>
    </div>

    {/* COMPARISON */}
    <div className="mt-12 sm:mt-16 md:mt-20 grid gap-6 lg:grid-cols-2">

      {/* BEFORE */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[34px] border border-red-100 bg-gradient-to-br from-red-50 to-white p-5 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)]">
        
        {/* GLOW */}
        <div className="absolute right-0 top-0 h-32 sm:h-48 w-32 sm:w-48 rounded-full bg-red-400/10 blur-[60px] sm:blur-[90px] pointer-events-none" />

        {/* LABEL */}
        <div className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-red-600">
          Before Orbit
        </div>

        {/* BIG NUMBER */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            3 hrs
          </h3>

          <p className="mt-2 sm:mt-3 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
            spent every day managing workflows,
            meetings, and repetitive tasks.
          </p>
        </div>

        {/* PROBLEMS */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3">
          <div className="rounded-xl sm:rounded-2xl border border-red-100 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl">
            <p className="text-sm sm:text-base text-gray-700">
              Manual scheduling across multiple apps
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-red-100 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl">
            <p className="text-sm sm:text-base text-gray-700">
              Constant task switching and distractions
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-red-100 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl">
            <p className="text-sm sm:text-base text-gray-700">
              Delayed collaboration and workflow updates
            </p>
          </div>
        </div>
      </div>

      {/* AFTER */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[34px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 sm:p-8 shadow-[0_20px_80px_rgba(139,92,246,0.10)]">
        
        {/* GLOW */}
        <div className="absolute left-0 top-0 h-32 sm:h-48 w-32 sm:w-48 rounded-full bg-violet-500/10 blur-[60px] sm:blur-[90px] pointer-events-none" />

        {/* LABEL */}
        <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-violet-700">
          After Orbit
        </div>

        {/* BIG NUMBER */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            45 min
          </h3>

          <p className="mt-2 sm:mt-3 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
            managing workflows while Orbit handles
            automation, syncing, and coordination.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3">
          <div className="rounded-xl sm:rounded-2xl border border-violet-100 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl">
            <p className="text-sm sm:text-base text-gray-700">
              AI-powered workflow automation
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-violet-100 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl">
            <p className="text-sm sm:text-base text-gray-700">
              Instant meeting scheduling and summaries
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl border border-violet-100 bg-white/80 px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-xl">
            <p className="text-sm sm:text-base text-gray-700">
              Real-time collaboration across your team
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="relative mt-16 sm:mt-24 md:mt-36 overflow-hidden rounded-[24px] sm:rounded-[42px] bg-[#070b14] py-16 sm:py-20 md:py-28">

  {/* BACKGROUND EFFECTS */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute left-[-20%] sm:left-[-10%] top-[-20%] sm:top-[-10%] h-[300px] sm:h-[420px] w-[300px] sm:w-[420px] rounded-full bg-violet-500/10 blur-[80px] sm:blur-[140px]" />
    <div className="absolute right-[-20%] sm:right-[-10%] bottom-[-20%] sm:bottom-[-10%] h-[300px] sm:h-[420px] w-[300px] sm:w-[420px] rounded-full bg-blue-500/10 blur-[80px] sm:blur-[140px]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:70px_70px]" />
  </div>

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

    {/* HEADING */}
    <div className="text-center">
      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-violet-300">
        AI Infrastructure
      </p>

      <h2 className="mt-4 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
        Enterprise-grade AI performance.
      </h2>

      <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/55">
        Built for high-speed automation, real-time collaboration,
        and reliable workflow execution at scale.
      </p>
    </div>

    {/* METRICS GRID */}
    <div className="mt-12 sm:mt-16 md:mt-20 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

      {/* CARD 1 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-7 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.45)] shrink-0" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/35 truncate">
              Accuracy
            </p>
          </div>

          <h3 className="mt-6 sm:mt-8 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            99.2%
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-white/50">
            Advanced voice recognition with context-aware AI processing.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-7 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.45)] shrink-0" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/35 truncate">
              Speed
            </p>
          </div>

          <h3 className="mt-6 sm:mt-8 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            1.8s
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-white/50">
            Ultra-fast AI response time for seamless workflow execution.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-7 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(240,171,252,0.4)] shrink-0" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/35 truncate">
              Reliability
            </p>
          </div>

          <h3 className="mt-6 sm:mt-8 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            98%
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-white/50">
            High workflow completion rate across connected platforms.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-7 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(165,243,252,0.4)] shrink-0" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/35 truncate">
              Availability
            </p>
          </div>

          <h3 className="mt-6 sm:mt-8 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            24/7
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-white/50">
            Always-on AI infrastructure built for modern global teams.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-[#f6f9fc] py-16 sm:py-24 md:py-32 px-4 sm:px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-20%] h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-violet-500/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-blue-500/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute left-1/2 top-0 h-[500px] sm:h-[700px] w-[500px] sm:w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px] sm:blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="text-center">
          <p className="mb-4 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-violet-600">
            Graph Analytics
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Visualize AI activity
            <br />
            in real time.
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Monitor workflows, voice activity, automation performance,
            and collaboration trends through beautifully designed analytics.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid gap-6 lg:grid-cols-[1.55fr_0.85fr]">

          {/* LEFT SIDE */}
          <div className="rounded-[24px] sm:rounded-[36px] border border-white/60 bg-white/70 p-4 sm:p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl">

            {/* TOP */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  AI Workflow Activity
                </p>
                <h3 className="mt-1 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                  Real-time automation insights
                </h3>
              </div>

              <div className="w-fit rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-1.5 sm:px-4 sm:py-2 self-start sm:self-center">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs sm:text-sm font-medium text-emerald-700">
                    Live
                  </p>
                </div>
              </div>
            </div>

            {/* GRAPH */}
            <div className="relative mt-8 sm:mt-14 overflow-hidden rounded-[20px] sm:rounded-[30px] border border-black/5 bg-gradient-to-br from-white to-violet-50/40 p-4 sm:p-8 md:p-10 flex flex-col justify-between min-h-[400px] sm:min-h-[420px]">
              
              {/* GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:70px_70px]" />

              {/* GLOW */}
              <div className="absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-violet-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* SVG GRAPH */}
              <div className="absolute inset-x-0 bottom-0 top-20 sm:top-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 1000 400"
                  className="w-full h-auto aspect-[1000/400]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 320 C120 260 180 280 260 220 C340 160 420 180 500 130 C580 80 660 100 740 140 C820 180 900 120 1000 40"
                    fill="none"
                    stroke="rgba(139,92,246,0.15)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 320 C120 260 180 280 260 220 C340 160 420 180 500 130 C580 80 660 100 740 140 C820 180 900 120 1000 40"
                    fill="none"
                    stroke="url(#main_section_gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="main_section_gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* FLOATING CARDS */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 w-full z-10 pointer-events-none">
                <div className="relative sm:absolute sm:left-10 sm:top-10 rounded-2xl sm:rounded-3xl border border-white/60 bg-white/80 px-4 sm:px-6 py-3 sm:py-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl pointer-events-auto self-start">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Commands Processed
                  </p>
                  <h4 className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    12.4K
                  </h4>
                </div>

                <div className="relative sm:absolute sm:bottom-10 sm:right-10 rounded-2xl sm:rounded-3xl border border-white/60 bg-white/80 px-4 sm:px-6 py-3 sm:py-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl pointer-events-auto self-end sm:self-auto">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Workflow Accuracy
                  </p>
                  <h4 className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    99.2%
                  </h4>
                </div>
              </div>
            </div>

            {/* BOTTOM INSIGHT CARDS */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-[20px] sm:rounded-[28px] border border-white/60 bg-white/70 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  Avg Response
                </p>
                <h4 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                  1.8s
                </h4>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">
                  Instant AI processing across workflows and voice actions.
                </p>
              </div>

              <div className="rounded-[20px] sm:rounded-[28px] border border-white/60 bg-white/70 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  Team Productivity
                </p>
                <h4 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                  +84%
                </h4>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">
                  Teams complete tasks faster with automated coordination.
                </p>
              </div>

              <div className="rounded-[20px] sm:rounded-[28px] border border-white/60 bg-white/70 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:col-span-2 md:col-span-1">
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  Automations Running
                </p>
                <h4 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                  248
                </h4>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">
                  Active workflows syncing tasks, meetings, and communication.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* CIRCULAR ANALYTICS */}
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
              <p className="text-xs sm:text-sm text-gray-500">
                Automation Success
              </p>

              <div className="mt-6 sm:mt-8 flex items-center justify-center">
                <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border-[12px] sm:border-[14px] border-violet-100">
                  <div className="absolute inset-x-0 inset-y-0 -m-[12px] sm:-m-[14px] rounded-full border-[12px] sm:border-[14px] border-transparent border-t-violet-500 border-r-cyan-400 rotate-45" />
                  <div className="text-center z-10">
                    <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                      98%
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      Success Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PULSE GRAPH */}
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Live Processing
                  </p>
                  <h4 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                    AI Pulse
                  </h4>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-medium text-emerald-700">
                    Active
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 flex items-end gap-1.5 sm:gap-2 h-[100px]">
                {[40, 70, 50, 90, 60, 80, 45, 65, 100, 55].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-violet-500 to-cyan-400 transition-all duration-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* HEATMAP */}
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
              <p className="text-xs sm:text-sm text-gray-500">
                Workspace Activity
              </p>
              <h4 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Productivity Heatmap
              </h4>

              <div className="mt-6 sm:mt-10 grid grid-cols-7 gap-1.5 sm:gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-[6px] sm:rounded-xl transition-colors ${
                      i % 5 === 0
                        ? "bg-cyan-400/60"
                        : i % 3 === 0
                        ? "bg-violet-400/50"
                        : "bg-gray-100"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden py-20 sm:py-32 md:py-40 bg-[#f6f9fc] px-4 sm:px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-[-20%] h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-violet-500/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-cyan-400/10 blur-[100px] sm:blur-[140px]" />
        <div className="absolute left-1/2 top-0 h-[500px] sm:h-[700px] w-[500px] sm:w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px] sm:blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-violet-500" />
              <p className="text-xs sm:text-sm font-medium text-violet-700">
                AI-Powered Productivity
              </p>
            </div>

            <h2 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
              Let Orbit handle
              <br />
              the busy work.
            </h2>

            <p className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Automate meetings, workflows, task coordination,
              and collaboration with AI designed for modern teams
              and high-performance workspaces.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link to="/Signup" className="inline-block">
                <button className="bg-black text-white hover:bg-neutral-800 font-medium border border-black rounded-xl px-6 py-3 text-sm sm:text-base transition-colors">
                  Start Free
                </button>
              </Link>
              <Link to="/book-demo" className="inline-block">
                <button className="bg-white text-black hover:bg-neutral-50 font-medium border border-neutral-300 rounded-xl px-6 py-3 text-sm sm:text-base transition-colors">
                  Book Demo
                </button>
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-12 sm:mt-14 flex flex-wrap gap-6 sm:gap-10">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  12K+
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
                  Commands automated daily
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  99.2%
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
                  Workflow accuracy
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                  320hrs
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
                  Saved every month
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full">

            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] border border-white/60 bg-white/70 p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl">

              {/* TOP */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Orbit Workspace
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                    Live AI Activity
                  </h3>
                </div>

                <div className="w-fit rounded-2xl border border-emerald-100 bg-emerald-50 px-3 py-1 sm:px-4 sm:py-1.5 self-start sm:self-center">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-xs sm:text-sm font-medium text-emerald-700">
                      Live
                    </p>
                  </div>
                </div>
              </div>

              {/* ACTIVITY LIST */}
              <div className="mt-8 sm:mt-10 flex flex-col gap-3.5">
                {[
                  "Meeting scheduled with design team",
                  "Sprint tasks synced to Linear",
                  "Unread emails summarized",
                  "Calendar updated automatically",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl sm:rounded-3xl border border-black/5 bg-white/80 p-4 sm:px-5 sm:py-4 transition-all hover:bg-white"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                        <div className="h-2 w-2 rounded-full bg-violet-500" />
                      </div>
                      <p className="text-sm sm:text-base font-medium text-gray-700 truncate">
                        {item}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 self-end sm:self-auto shrink-0">
                      Just now
                    </p>
                  </div>
                ))}
              </div>

              {/* BOTTOM GRAPH */}
              <div className="relative mt-8 sm:mt-10 h-[140px] sm:h-[180px] overflow-hidden rounded-[20px] sm:rounded-[28px] border border-black/5 bg-gradient-to-br from-violet-50 to-cyan-50">
                <svg
                  viewBox="0 0 1000 300"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 250 C120 180 220 220 320 160 C420 100 520 140 620 90 C720 40 820 80 1000 20"
                    fill="none"
                    stroke="url(#ctaGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="ctaGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    </div>
    
    </>
  )
}

export default Analytics
