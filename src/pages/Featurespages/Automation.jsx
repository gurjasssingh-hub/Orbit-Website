import React from 'react'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";

const Automation = () => {
  return (
    <>
       <div className=' px-6 md:px-10 lg:px-32  py-5 md:py-10 lg:px-20 bg-[#f7f9fc]'> 

      <section className="relative py-16 sm:py-24 md:py-40 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[1000px] h-[200px] sm:h-[350px] md:h-[500px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-80" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Intro */}
    <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-neutral-600 bg-white">
        Automation
      </span>

      <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
        Work should
        <br />
        move itself.
      </h2>

      <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed md:leading-8 max-w-3xl mx-auto">
        Orbit automates meetings, workflows, scheduling, and collaboration—
        transforming busywork into background work so your team can focus on
        what matters most.
      </p>
    </div>

    {/* Feature Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {[
        {
          title: "AI Meeting Assistant",
          desc: "Capture conversations, summaries, decisions, and action items automatically."
        },
        {
          title: "Workflow Automation",
          desc: "Connect tools and automate repetitive business processes."
        },
        {
          title: "Task Management",
          desc: "Turn discussions into organized tasks with owners and deadlines."
        },
        {
          title: "Calendar Intelligence",
          desc: "Schedule, coordinate, and optimize meetings automatically."
        },
        {
          title: "Team Collaboration",
          desc: "Keep everyone aligned with shared context and updates."
        },
        {
          title: "Knowledge Search",
          desc: "Instantly find answers across meetings, docs, and projects."
        },
        {
          title: "Voice Actions",
          desc: "Create tasks, run workflows, and retrieve information with voice."
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 transition-colors group-hover:text-black">
              {item.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 leading-normal sm:leading-7">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

  <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[200px] sm:h-[350px] md:h-[500px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-80" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content */}
      <div className="w-full">
        <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600">
          AI Meeting Assistant
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          Every meeting.
          <br />
          Captured perfectly.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Orbit automatically records conversations, understands context,
          extracts decisions, and turns discussions into actionable work—
          without anyone taking notes.
        </p>
      </div>

      {/* Right Visual */}
      <div className="relative w-full">
        <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

          {/* Top Panel Header */}
          <div className="pb-4 sm:pb-6 border-b border-neutral-100">
            <div className="text-xs sm:text-sm text-neutral-500">
              Product Strategy Sync
            </div>

            <div className="mt-1 sm:mt-2 text-xl sm:text-2xl font-semibold text-neutral-900">
              Meeting Summary
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              "Automatic Recording",
              "Real-Time Transcription",
              "AI Summaries",
              "Action Items",
              "Decision Tracking",
              "Search & Replay",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 p-4 sm:p-5 hover:bg-white hover:border-neutral-200 transition-all duration-200 min-w-0"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black mt-1.5 sm:mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-neutral-700 truncate">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Insight Block */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-neutral-900 p-5 sm:p-6">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              AI Insight
            </div>

            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white leading-relaxed sm:leading-7">
              Orbit identified <span className="font-semibold text-white">3 decisions</span>,
              assigned <span className="font-semibold text-white">7 action items</span>,
              and generated a complete summary automatically.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[800px] h-[320px] sm:h-[600px] md:h-[800px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Workflow Visual */}
      <div className="relative w-full order-2 lg:order-1">
        <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

          <div className="flex items-center justify-between mb-6 sm:mb-10 gap-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 truncate">
              Product Launch Workflow
            </h3>

            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-medium shrink-0">
              Active
            </span>
          </div>

          {/* Workflow Nodes */}
          <div className="space-y-4">
            {[
              "New Launch Request Submitted",
              "Auto Assign Review Team",
              "Manager Approval",
              "Notify Stakeholders",
              "Create Project Tasks",
              "Launch Workflow Complete",
            ].map((step, index, array) => (
              <div key={step} className="flex items-start gap-3 sm:gap-4">

                <div className="flex flex-col items-center shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-black text-white flex items-center justify-center text-xs sm:text-sm font-medium">
                    {index + 1}
                  </div>

                  {index !== array.length - 1 && (
                    <div className="w-px h-6 sm:h-8 bg-neutral-200 mt-2" />
                  )}
                </div>

                <div className="flex-1 rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 sm:px-5 sm:py-4 min-w-0">
                  <p className="text-sm sm:text-base font-medium text-neutral-800 truncate">
                    {step}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Automation Result */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-neutral-900 p-5 sm:p-6">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Automation Result
            </div>

            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white leading-relaxed sm:leading-7">
              Orbit completed the workflow automatically, triggered 4 integrations, 
              notified stakeholders, and created project tasks without manual input.
            </p>
          </div>

        </div>
      </div>

      {/* Content Side */}
      <div className="w-full order-1 lg:order-2">
        <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600">
          Workflow Automation
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          Workflows that
          <br />
          run themselves.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Orbit connects your tools, automates repetitive processes,
          and keeps work moving across teams without constant follow-ups
          or manual coordination.
        </p>

        {/* Features Mini-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {[
            "Custom Workflow Creation",
            "Cross-App Integrations",
            "Automated Triggers",
            "Approval Workflows",
            "Smart Notifications",
            "No-Code Automation",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 sm:px-5 sm:py-4 min-w-0"
            >
              <span className="text-sm sm:text-base font-medium text-neutral-800 block truncate">
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

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Left Content Column */}
      <div className="w-full">
        <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-neutral-600">
          Task Management
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          From conversation
          <br />
          to execution.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Orbit transforms discussions, meetings, and decisions into
          structured work—automatically assigning ownership, tracking
          progress, and ensuring every task moves forward.
        </p>

        {/* Premium Feature List */}
        <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-5">
          {[
            "Auto-create tasks from meetings",
            "Intelligent task assignment",
            "Due date management",
            "Real-time progress tracking",
            "Priority organization",
            "Team accountability",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-neutral-700 truncate">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Task Dashboard Visual Column */}
      <div className="relative w-full">
        <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.06)]">

          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-neutral-100 gap-4">
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">
                Generated from Meeting
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mt-0.5 sm:mt-1">
                Product Launch Tasks
              </h3>
            </div>

            <div className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-medium shrink-0">
              12 Tasks Created
            </div>
          </div>

          {/* Tasks Stack */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {[
              {
                task: "Finalize launch strategy",
                owner: "Sarah",
                status: "High Priority",
              },
              {
                task: "Review marketing assets",
                owner: "Alex",
                status: "In Progress",
              },
              {
                task: "Prepare release notes",
                owner: "James",
                status: "Assigned",
              },
              {
                task: "Approve final timeline",
                owner: "Emily",
                status: "Pending Review",
              },
            ].map((item) => (
              <div
                key={item.task}
                className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 p-4 sm:p-5 min-w-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="font-medium text-neutral-900 text-sm sm:text-base block truncate">
                      {item.task}
                    </h4>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-neutral-500 block truncate">
                      Assigned to {item.owner}
                    </p>
                  </div>

                  <span className="inline-flex self-start sm:self-auto text-[10px] sm:text-xs font-medium text-neutral-600 bg-white border border-neutral-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 whitespace-nowrap">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Insight Block */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-3xl bg-neutral-900 p-5 sm:p-7">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Orbit Insight
            </div>
            <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
              Every action item discussed in the meeting was captured,
              assigned, prioritized, and tracked automatically.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Premium Calendar Visual Column */}
      <div className="relative w-full order-2 lg:order-1">
        <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.06)]">

          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-neutral-100 gap-4">
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">
                Calendar Intelligence
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mt-0.5 sm:mt-1">
                Team Scheduling
              </h3>
            </div>

            <div className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-medium shrink-0">
              Optimized
            </div>
          </div>

          {/* Calendar Preview Stack */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {[
              {
                title: "Product Review",
                time: "09:00 AM",
                status: "Scheduled",
              },
              {
                title: "Design Sync",
                time: "11:30 AM",
                status: "Auto-Rescheduled",
              },
              {
                title: "Client Meeting",
                time: "02:00 PM",
                status: "Confirmed",
              },
              {
                title: "Sprint Planning",
                time: "04:30 PM",
                status: "Coordinated",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 p-4 sm:p-5 min-w-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="font-medium text-neutral-900 text-sm sm:text-base block truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 sm:mt-1 block truncate">
                      {item.time}
                    </p>
                  </div>

                  <span className="inline-flex self-start sm:self-auto text-[10px] sm:text-xs font-medium text-neutral-600 bg-white border border-neutral-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 whitespace-nowrap">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Insight Block */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-3xl bg-neutral-900 p-5 sm:p-7">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Orbit Insight
            </div>
            <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
              Orbit analyzed availability across 12 participants,
              resolved scheduling conflicts, and found the optimal
              meeting time automatically.
            </p>
          </div>

        </div>
      </div>

      {/* Content Column */}
      <div className="w-full order-1 lg:order-2">
        <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-neutral-600">
          Calendar Intelligence
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          Time, perfectly
          <br />
          orchestrated.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Orbit understands schedules, availability, priorities, and
          team preferences to coordinate meetings automatically and
          eliminate scheduling friction.
        </p>

        {/* Features Stack */}
        <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-5">
          {[
            "Smart scheduling",
            "Availability detection",
            "Auto-rescheduling",
            "Meeting coordination",
            "Calendar syncing",
            "Time optimization",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-neutral-700 truncate">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Content Column */}
      <div className="w-full">
        <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-neutral-600">
          Team Collaboration
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          Everyone on the
          <br />
          same page.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Orbit centralizes conversations, updates, decisions,
          and documentation into a single shared workspace
          where teams stay aligned automatically.
        </p>

        {/* Feature List */}
        <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-5">
          {[
            "Shared workspace",
            "Centralized updates",
            "Collaborative notes",
            "Team visibility",
            "Decision sharing",
            "Real-time alignment",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-neutral-700 truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Workspace Display Visual Column */}
      <div className="relative w-full">
        <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.06)]">

          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-neutral-100 gap-4">
            <div>
              <p className="text-xs sm:text-sm text-neutral-500">
                Shared Workspace
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mt-0.5 sm:mt-1">
                Product Launch
              </h3>
            </div>

            <div className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-medium shrink-0">
              18 Members Active
            </div>
          </div>

          {/* Updates Stack */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {[
              "Marketing strategy approved",
              "Design review completed",
              "Launch timeline updated",
              "Engineering milestone achieved",
            ].map((update) => (
              <div
                key={update}
                className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 p-4 sm:p-5 min-w-0"
              >
                <p className="text-sm sm:text-base font-medium text-neutral-800 truncate">
                  {update}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Insight Block */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-3xl bg-neutral-900 p-5 sm:p-7">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Orbit Insight
            </div>
            <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
              Every decision, update, and note is instantly shared across the 
              team—keeping everyone aligned without extra meetings.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Search UI Visual Column */}
      <div className="relative w-full order-2 lg:order-1">
        <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.06)]">

          {/* Search Bar */}
          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-5 sm:py-4">
            <p className="text-sm sm:text-base text-neutral-400">
              Ask Orbit anything...
            </p>
          </div>

          {/* Question Box */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-3xl border border-neutral-100 bg-neutral-50 p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-neutral-500">
              Question
            </p>
            <h4 className="mt-1 sm:mt-2 text-base sm:text-lg font-medium text-neutral-900 leading-snug">
              What decisions were made during yesterday's strategy meeting?
            </h4>
          </div>

          {/* AI Answer Box */}
          <div className="mt-4 rounded-xl sm:rounded-3xl bg-neutral-900 p-5 sm:p-7">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Orbit Answer
            </div>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white leading-relaxed sm:leading-8">
              The team approved the Q4 roadmap, assigned launch ownership, 
              finalized milestones, and scheduled stakeholder reviews.
            </p>
          </div>

          {/* Sources Badges */}
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {[
              "Meeting Transcript",
              "Project Docs",
              "Launch Notes",
            ].map((source) => (
              <div
                key={source}
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-600 whitespace-nowrap"
              >
                {source}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Content Column */}
      <div className="w-full order-1 lg:order-2">
        <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600">
          Knowledge Search
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          Ask once.
          <br />
          Know instantly.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Search across meetings, documents, projects, and conversations 
          with AI that understands context—not just keywords.
        </p>

        {/* Feature List */}
        <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-5">
          {[
            "Unified search",
            "Instant answers",
            "Meeting insights",
            "Document retrieval",
            "Context-aware results",
            "Knowledge organization",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-neutral-700 truncate">
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

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[1000px] h-[320px] sm:h-[600px] md:h-[1000px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Content Column */}
      <div className="w-full">
        <span className="inline-flex px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600">
          Voice-Powered Actions
        </span>

        <h2 className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight md:leading-[1.05] text-neutral-900">
          Work,
          <br />
          just by speaking.
        </h2>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600 max-w-xl">
          Orbit listens, understands context, and takes action across
          your workspace. No clicking, searching, or switching apps.
          Simply say what you need.
        </p>

        {/* Features Stack */}
        <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-5">
          {[
            "Voice commands",
            "Task creation",
            "Meeting scheduling",
            "Information retrieval",
            "Workflow execution",
            "Hands-free productivity",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
              <span className="text-sm sm:text-base md:text-lg text-neutral-700 truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Voice Interface Visual Column */}
      <div className="relative w-full">
        <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.06)]">

          {/* Mic Button Block */}
          <div className="flex justify-center py-2 sm:py-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-neutral-200 animate-ping opacity-30" />
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-neutral-900 flex items-center justify-center transition-transform active:scale-95">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3z" />
                  <path d="M19 11a7 7 0 01-14 0" />
                  <path d="M12 18v3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Transcript Box */}
          <div className="mt-6 sm:mt-10 rounded-xl sm:rounded-3xl border border-neutral-100 bg-neutral-50 p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-neutral-500">
              Voice Command
            </p>
            <h3 className="mt-1 sm:mt-3 text-base sm:text-lg md:text-xl font-medium text-neutral-900 leading-relaxed">
              "Schedule a product review with design and engineering next week, 
              then create follow-up tasks."
            </h3>
          </div>

          {/* Orbit Execution Box */}
          <div className="mt-4 rounded-xl sm:rounded-3xl bg-neutral-990 bg-neutral-900 p-5 sm:p-7">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">
              Orbit Executing
            </div>

            <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {[
                "Meeting scheduled",
                "Invites sent",
                "Tasks created",
                "Workflow triggered",
              ].map((action) => (
                <div
                  key={action}
                  className="flex items-center gap-3 text-white text-sm sm:text-base min-w-0"
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 shrink-0" />
                  <span className="truncate">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Branding */}
          <div className="mt-6 text-center text-xs sm:text-sm text-neutral-500 font-medium">
            Powered by Orbit AI
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 md:py-40 overflow-hidden px-4 sm:px-6">

  {/* Ambient Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[1000px] h-[320px] sm:h-[600px] md:h-[1000px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-80" />
  </div>

  <div className="max-w-5xl mx-auto text-center">

    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-neutral-600">
      Get Started
    </span>

    <h2 className="mt-4 sm:mt-6 md:mt-8 text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[0.95]">
      Work should move
      <br />
      without friction.
    </h2>

    <p className="mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed md:leading-8 text-neutral-600">
      Orbit handles meetings, workflows, scheduling, and collaboration
      automatically—so your team can focus on what actually matters.
    </p>

    {/* Interactive Actions CTA */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
      <Link to="/Signup" className="w-full sm:w-auto"> 
        <Button2
          text="Start Monitoring"
          className="bg-black text-white hover:bg-neutral-800 transition-colors h-12 px-6 w-full sm:w-40 font-medium rounded-xl"
        />
      </Link>

      <Link to="/book-demo" className="w-full sm:w-auto"> 
        <Button2
          text="Book a Demo"
          className="bg-white text-black border border-neutral-300 hover:bg-neutral-50 transition-colors h-12 px-6 w-full sm:w-40 font-medium rounded-xl"
        />
      </Link>
    </div>

    {/* Feature Value Propositions / Social Proof */}
    <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-neutral-500 font-medium">
      <span className="flex items-center gap-1.5 shrink-0">✓ AI Meeting Assistant</span>
      <span className="flex items-center gap-1.5 shrink-0">✓ Workflow Automation</span>
      <span className="flex items-center gap-1.5 shrink-0">✓ Knowledge Search</span>
      <span className="flex items-center gap-1.5 shrink-0">✓ Voice Actions</span>
    </div>

  </div>
</section>



       </div>
    </>
  )
}

export default Automation
