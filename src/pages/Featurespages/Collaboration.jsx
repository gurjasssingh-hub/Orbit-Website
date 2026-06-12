import React from 'react'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";

const Collaboration = () => {
  return (
    <>
      <div className=' px-6 md:px-10 lg:px-32  py-5 md:py-10 lg:px-20 bg-[#f7f9fc]'> 
       
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Intro */}
    <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6">
        Team Collaboration
      </span>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Everything your team needs to stay aligned.
      </h2>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed md:leading-8">
        Orbit brings meetings, tasks, knowledge, and communication into a
        single AI-powered workspace—so your team can collaborate faster,
        stay organized, and focus on meaningful work.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 bg-white min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 truncate">
          Shared Team Memory
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-7">
          Capture every meeting, decision, and conversation automatically.
          Give your team instant access to the context they need.
        </p>
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 bg-white min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 truncate">
          Real-Time Collaboration
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-7">
          Work together seamlessly with live notes, shared workspaces,
          collaborative documents, and AI-assisted discussions.
        </p>
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 bg-white min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 truncate">
          AI Meeting Summaries
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-7">
          Automatically generate concise meeting recaps, action items,
          decisions, and follow-ups in seconds.
        </p>
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 bg-white min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 truncate">
          Instant Task Assignment
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-7">
          Turn conversations into actionable tasks with owners,
          deadlines, priorities, and progress tracking.
        </p>
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 bg-white min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 truncate">
          Cross-App Team Sync
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-7">
          Connect Slack, Notion, GitHub, Linear, and Google Calendar
          to keep information flowing across your stack.
        </p>
      </div>

      <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 bg-white min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-neutral-900 truncate">
          Automated Project Updates
        </h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sm:leading-7">
          Keep stakeholders informed with AI-generated progress reports,
          status updates, and project insights.
        </p>
      </div>

    </div>
  </div>
</section>

   <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left Content Column */}
      <div className="w-full">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            🧠 Shared Team Memory
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[1.05]">
          Never lose
          <br />
          context again.
        </h2>

        <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-neutral-600 max-w-xl">
          Orbit automatically captures meetings, conversations,
          decisions, and insights—creating a living knowledge base
          your entire team can access instantly.
        </p>

        {/* Feature Grid Stack */}
        <div className="mt-6 sm:mt-12 grid gap-4 sm:gap-5">
          {[
            "Automatically save meeting notes and discussions",
            "Track decisions, action items, and outcomes",
            "Search conversations instantly with AI",
            "Create a centralized source of truth",
            "Preserve context across every project",
            "Onboard new teammates in minutes"
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white text-xs sm:text-sm shrink-0">
                ✓
              </div>
              <p className="text-neutral-700 text-sm sm:text-base md:text-lg min-w-0">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual Column */}
      <div className="relative w-full py-8 sm:py-12 lg:py-0">

        {/* Main Dashboard Card */}
        <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-5 sm:p-8">

          {/* Search Placeholder */}
          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-neutral-400">
            Search anything...
          </div>

          {/* Context Search Results Stack */}
          <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
            {[
              {
                title: "Product Strategy Meeting",
                desc: "Key decision: Launch Orbit AI Assistant in Q3."
              },
              {
                title: "Marketing Sync",
                desc: "Action Item: Prepare launch campaign assets."
              },
              {
                title: "Engineering Review",
                desc: "Decision: Prioritize collaboration features."
              }
            ].map((result, idx) => (
              <div key={idx} className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 sm:p-5 min-w-0">
                <p className="font-medium text-neutral-900 text-sm sm:text-base truncate">
                  {result.title}
                </p>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500">
                  {result.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop-only Floating Badges */}
        <div className="hidden sm:block absolute -top-6 -right-6 lg:-right-8 bg-white border border-neutral-200 rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-4 whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            AI Recall
          </p>
          <p className="text-xs lg:text-sm font-semibold text-neutral-900 mt-0.5">
            2,431 conversations indexed
          </p>
        </div>

        <div className="hidden sm:block absolute -bottom-6 -left-6 lg:-left-8 bg-white border border-neutral-200 rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-4 whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            Knowledge Base
          </p>
          <p className="text-xs lg:text-sm font-semibold text-neutral-900 mt-0.5">
            Always up to date
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Visual Canvas Column */}
      <div className="relative w-full order-2 lg:order-1 py-8 sm:py-12 lg:py-0">

        {/* Main Collaboration Card */}
        <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

          {/* Active Users Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="font-semibold text-neutral-900 text-base sm:text-lg">
                Product Brainstorm
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                5 collaborators online
              </p>
            </div>

            <div className="flex -space-x-2 sm:-space-x-3 self-start sm:self-auto">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-900 border-2 border-white shrink-0" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-400 border-2 border-white shrink-0" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-300 border-2 border-white shrink-0" />
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-200 border-2 border-white shrink-0" />
            </div>
          </div>

          {/* Activity State Notes Stack */}
          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-neutral-700">
                Sarah is editing...
              </p>
              <div className="mt-2 h-1.5 sm:h-2 w-32 sm:w-40 bg-neutral-200 rounded-full animate-pulse" />
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 min-w-0">
              <p className="text-sm sm:text-base font-medium text-neutral-900 truncate">
                Launch collaboration features in Q3
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 min-w-0">
              <p className="text-sm sm:text-base font-medium text-neutral-900 truncate">
                AI-generated action items created
              </p>
            </div>
          </div>

        </div>

        {/* Desktop-only Floating Cards */}
        <div className="hidden sm:block absolute -right-6 lg:-right-8 top-10 bg-white border border-neutral-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            New Comment
          </p>
          <p className="font-semibold text-xs lg:text-sm text-neutral-900 mt-0.5">
            Looks great. Ship it 🚀
          </p>
        </div>

        <div className="hidden sm:block absolute -left-6 lg:-left-8 bottom-10 bg-white border border-neutral-200 rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            Orbit AI
          </p>
          <p className="font-semibold text-xs lg:text-sm text-neutral-900 mt-0.5">
            7 ideas generated
          </p>
        </div>

      </div>

      {/* Content Column */}
      <div className="w-full order-1 lg:order-2">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            ⚡ Real-Time Collaboration
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight md:leading-[1.05] text-neutral-900">
          Work together
          <br />
          without switching tools.
        </h2>

        <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-neutral-600 max-w-xl">
          Collaborate instantly across meetings, notes, documents,
          and AI conversations. Keep everyone aligned with live
          updates and shared context.
        </p>

        {/* Feature Checkmarks Stack */}
        <div className="mt-6 sm:mt-12 grid gap-4 sm:gap-5">
          {[
            "Live note-taking during meetings",
            "Multi-user document editing",
            "Shared AI conversations",
            "Team comments and feedback",
            "Instant workspace updates",
            "Collaborative brainstorming with AI",
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white text-xs sm:text-sm shrink-0">
                ✓
              </div>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 min-w-0">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

 <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-32 right-20 w-[320px] sm:w-[500px] md:w-[600px] h-[320px] sm:h-[500px] md:h-[600px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Content Column */}
      <div className="w-full">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            🎙️ AI Meeting Summaries
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight md:leading-[1.05] text-neutral-900">
          Never miss what
          <br />
          happened in a meeting.
        </h2>

        <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-neutral-600 max-w-xl">
          Orbit automatically turns hours of conversation into
          actionable summaries, helping your team stay aligned
          without rewatching recordings or digging through notes.
        </p>

        {/* Feature Checkmarks Stack */}
        <div className="mt-6 sm:mt-12 grid gap-4 sm:gap-5">
          {[
            "Automatic meeting transcription",
            "Key takeaways extraction",
            "Action item generation",
            "Decision tracking",
            "Follow-up email drafting",
            "Share summaries with one click",
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white text-xs sm:text-sm shrink-0">
                ✓
              </div>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 min-w-0">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Canvas Column */}
 <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto py-6 sm:py-12 lg:py-0">

  {/* Main Interface Dashboard Card */}
  <div className="w-full rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] box-border">

    {/* Card Header */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-neutral-900 text-base sm:text-lg truncate">
          Weekly Product Sync
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-0.5 truncate">
          53 min meeting • Processed by Orbit
        </p>
      </div>

      <div className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium shrink-0">
        Summary Ready
      </div>
    </div>

    {/* Structured Intelligence Blocks */}
    <div className="space-y-3 sm:space-y-4">
      {[
        { label: "Key Takeaway", text: "Collaboration features approved for Q3 launch." },
        { label: "Action Item", text: "Design team to finalize UI by Friday." },
        { label: "Decision", text: "Move onboarding improvements to next sprint." }
      ].map((block, idx) => (
        <div key={idx} className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 sm:p-5 min-w-0 fallback-contain">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-1 sm:mb-2">
            {block.label}
          </p>
          <p className="font-medium text-neutral-900 text-sm sm:text-base whitespace-normal break-words sm:truncate">
            {block.text}
          </p>
        </div>
      ))}
    </div>

  </div>

        {/* Desktop-only Floating Cards */}
        <div className="hidden sm:block absolute -left-4 lg:-left-10 top-16 bg-white border border-neutral-200 rounded-xl shadow-xl p-4 w-48 lg:w-56 whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium mb-2.5">
            Transcript
          </p>
          <div className="space-y-2">
            <div className="h-2 bg-neutral-200 rounded-full w-full animate-pulse" />
            <div className="h-2 bg-neutral-200 rounded-full w-4/5 animate-pulse" />
            <div className="h-2 bg-neutral-200 rounded-full w-3/5 animate-pulse" />
          </div>
        </div>

        <div className="hidden sm:block absolute -right-6 lg:-right-8 bottom-10 bg-white border border-neutral-200 rounded-xl shadow-xl p-3 lg:p-4 whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            Follow-up Draft
          </p>
          <p className="font-semibold text-xs lg:text-sm text-neutral-900 mt-0.5">
            Email ready to send ✉️
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

 <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Visual Canvas Column */}
      <div className="relative w-full order-2 lg:order-1 py-8 sm:py-12 lg:py-0">

        {/* Main Interface Dashboard Card */}
        <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

          {/* Conversation Transcript Simulation */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[85%] sm:max-w-xs rounded-xl sm:rounded-2xl bg-neutral-900 text-white px-4 py-2.5 sm:py-3 text-sm leading-relaxed">
                Design should be finalized before Friday.
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[85%] sm:max-w-xs rounded-xl sm:rounded-2xl bg-neutral-100 text-neutral-800 px-4 py-2.5 sm:py-3 text-sm leading-relaxed">
                We also need launch assets ready next week.
              </div>
            </div>
          </div>

          {/* AI Detection Transformation Badge */}
          <div className="flex justify-center py-6 sm:py-8">
            <div className="px-4 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-800">
              Orbit detected 2 action items
            </div>
          </div>

          {/* Extracted Structured Tasks */}
          <div className="space-y-3 sm:space-y-4">
            <div className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-neutral-900 text-sm sm:text-base truncate">
                  Finalize design system
                </p>
                <span className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full shrink-0">
                  Sarah
                </span>
              </div>
              <p className="mt-1 sm:mt-2 text-xs text-neutral-500 font-medium">
                Due Friday
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-neutral-900 text-sm sm:text-base truncate">
                  Prepare launch assets
                </p>
                <span className="text-xs font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full shrink-0">
                  Marketing
                </span>
              </div>
              <p className="mt-1 sm:mt-2 text-xs text-neutral-500 font-medium">
                Due Next Week
              </p>
            </div>
          </div>

        </div>

        {/* Desktop-only Floating Context Cards */}
        <div className="hidden sm:block absolute -top-6 -right-6 lg:-right-8 rounded-xl lg:rounded-2xl border border-neutral-200 bg-white p-3 lg:p-4 shadow-xl whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            Auto Assignment
          </p>
          <p className="font-semibold text-xs lg:text-sm text-neutral-900 mt-0.5">
            Owners detected 👤
          </p>
        </div>

        <div className="hidden sm:block absolute -bottom-6 -left-6 lg:-left-8 rounded-xl lg:rounded-2xl border border-neutral-200 bg-white p-3 lg:p-4 shadow-xl whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            Follow-up
          </p>
          <p className="font-semibold text-xs lg:text-sm text-neutral-900 mt-0.5">
            Reminder scheduled 📅
          </p>
        </div>

      </div>

      {/* Content Column */}
      <div className="w-full order-1 lg:order-2">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            ✅ Instant Task Assignment
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight md:leading-[1.05] text-neutral-900">
          Turn conversations
          <br />
          into action.
        </h2>

        <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-neutral-600 max-w-xl">
          Orbit automatically transforms discussions into structured,
          trackable tasks—assigning owners, setting deadlines,
          and keeping projects moving without manual work.
        </p>

        {/* Feature Checkmarks Stack */}
        <div className="mt-6 sm:mt-12 grid gap-4 sm:gap-5">
          {[
            "Create tasks directly from meetings",
            "Assign owners automatically",
            "Set deadlines with AI",
            "Track progress in real time",
            "Sync with project management tools",
            "Send reminders and follow-ups",
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white text-xs sm:text-sm shrink-0">
                ✓
              </div>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 min-w-0">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-36 overflow-hidden px-4 sm:px-6">

  {/* Ambient Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute right-0 top-0 w-[320px] sm:w-[500px] md:w-[800px] h-[320px] sm:h-[500px] md:h-[800px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

      {/* Content Column */}
      <div className="w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8">
          <span className="text-xs sm:text-sm font-medium text-neutral-700">
            📊 Automated Project Updates
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight md:leading-[1.02] text-neutral-900">
          Everyone stays informed.
          <br />
          Nobody writes reports.
        </h2>

        <p className="mt-4 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-neutral-600 max-w-xl">
          Orbit continuously monitors project activity, identifies
          important changes, and automatically creates stakeholder-ready
          updates. Your team spends less time reporting and more time
          building.
        </p>

        {/* Checkmarks Stack */}
        <div className="mt-6 sm:mt-12 grid gap-4 sm:gap-5">
          {[
            "Generate daily progress reports",
            "Highlight blockers automatically",
            "Track completed work in real time",
            "Create AI-powered weekly summaries",
            "Notify stakeholders of key changes",
            "Surface project risks and insights",
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-white text-xs sm:text-sm shrink-0">
                ✓
              </div>
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 min-w-0">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Workspace Column */}
      <div className="relative w-full py-8 sm:py-12 lg:py-0">

        {/* Main Executive Report Card */}
        <div className="rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.08)] p-5 sm:p-8">

          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-base sm:text-lg font-semibold text-neutral-900">
                Weekly Project Update
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                Generated automatically by Orbit
              </p>
            </div>

            <div className="inline-flex self-start sm:self-auto px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium shrink-0">
              Ready to Share
            </div>
          </div>

          {/* Progress Breakdown Stack */}
          <div className="space-y-4 sm:space-y-6">
            {[
              { label: "Progress", text: "14 tasks completed this week across Engineering, Design, and Marketing." },
              { label: "Blockers", text: "API integration awaiting approval from external vendor." },
              { label: "Orbit Insight", text: "Current velocity suggests launch is likely 5 days ahead of schedule." }
            ].map((section, idx) => (
              <div key={idx} className="rounded-xl sm:rounded-2xl bg-neutral-50 border border-neutral-100 p-4 sm:p-5 min-w-0">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1 sm:mb-2">
                  {section.label}
                </p>
                <p className="font-medium text-neutral-900 text-sm sm:text-base leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Desktop-only Activity Feed Badge */}
        <div className="hidden sm:block absolute -left-6 lg:-left-12 top-16 rounded-xl lg:rounded-3xl border border-neutral-200 bg-white p-4 lg:p-5 shadow-xl w-40 lg:w-44 whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium mb-3">
            Live Activity
          </p>
          <div className="space-y-2">
            <div className="h-2 w-28 bg-neutral-200 rounded-full animate-pulse" />
            <div className="h-2 w-20 bg-neutral-200 rounded-full animate-pulse" />
            <div className="h-2 w-24 bg-neutral-200 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Desktop-only Notification Badge */}
        <div className="hidden sm:block absolute -right-6 lg:-right-8 bottom-10 rounded-xl lg:rounded-3xl border border-neutral-200 bg-white p-4 lg:p-5 shadow-xl whitespace-nowrap">
          <p className="text-[10px] lg:text-xs text-neutral-500 font-medium">
            Stakeholder Update
          </p>
          <p className="font-semibold text-xs lg:text-sm text-neutral-900 mt-0.5">
            Sent automatically ⚡
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

<section className="relative py-16 sm:py-24 md:py-36 overflow-hidden px-4 sm:px-6">

  {/* Ambient Background Glow */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:900px] rounded-full bg-neutral-100 blur-2xl sm:blur-3xl opacity-80" />
  </div>

  <div className="max-w-5xl mx-auto text-center">

    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-8">
      <span className="text-xs sm:text-sm font-medium text-neutral-700">
        Built for modern teams
      </span>
    </div>

    <h2 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-neutral-900 leading-tight md:leading-[0.95]">
      Focus on building.
      <br />
      Orbit handles the rest.
    </h2>

    <p className="mt-4 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed md:leading-9 text-neutral-600">
      From meetings and collaboration to task management and project
      updates, Orbit keeps your entire team aligned so you can spend
      less time coordinating and more time creating.
    </p>

    {/* Responsive CTA Layout */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-14 w-full">
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

    <p className="mt-6 text-xs sm:text-sm text-neutral-500 font-medium">
      No setup headaches. Get started in minutes.
    </p>

  </div>
</section>
      </div>
    </>
  )
}

export default Collaboration
