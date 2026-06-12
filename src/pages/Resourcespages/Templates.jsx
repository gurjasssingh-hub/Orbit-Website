import React from 'react'
import { NavLink, Link, useLocation } from "react-router-dom";

const Templates = () => {
  return (
    <>
       <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
                 

  <section className="relative overflow-hidden py-40 sm:py-28 md:py-32">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-neutral-100 blur-3xl opacity-80 sm:w-[600px] sm:h-[600px]" />
    <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-neutral-200 blur-3xl opacity-30 rounded-full sm:w-[300px] sm:h-[300px]" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Badge */}
    <div className="flex justify-center mb-6 sm:mb-8">
      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-sm">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <p className="text-xs sm:text-sm font-medium text-neutral-700">
          150+ Ready-to-Use Templates
        </p>
      </div>
    </div>

    {/* Heading */}
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
        Start with a template.
        <br />
        Launch workflows in
        <span className="text-neutral-400"> minutes.</span>
      </h1>

      <p className="mt-6 sm:mt-8 text-base sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
        Browse AI-powered templates for incident management,
        monitoring, meetings, operations, and automation.
        Deploy proven workflows instantly and customize
        them for your team.
      </p>
    </div>

    {/* Search */}
    <div className="max-w-2xl mx-auto mt-8 sm:mt-12">
      <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg shadow-black/[0.03]">
        <svg
          className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search templates..."
          className="w-full outline-none text-neutral-700 bg-transparent text-sm sm:text-base"
        />
      </div>
    </div>

    {/* CTA */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-10">
      <button className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition text-sm sm:text-base">
        Use a Template
      </button>
    
      <Link to="/Signup"> 
        <button className="h-11 sm:h-12 px-6 sm:px-7 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 transition font-medium text-sm sm:text-base">
          Start Free
        </button> 
      </Link>
    </div>

    {/* Key Points */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-16 sm:mt-20">

      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
        <p className="font-medium text-sm sm:text-base">Ready to Use</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2">
          Skip setup and launch instantly.
        </p>
      </div>

      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
        <p className="font-medium text-sm sm:text-base">AI Configured</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2">
          Smart defaults powered by Orbit AI.
        </p>
      </div>

      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
        <p className="font-medium text-sm sm:text-base">Fully Customizable</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2">
          Adapt workflows to your operations.
        </p>
      </div>

      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
        <p className="font-medium text-sm sm:text-base">One-Click Launch</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2">
          Deploy templates in seconds.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="py-28 sm:py-32 md:py-36">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="flex flex-col sm:flex-row items-end justify-between mb-12 sm:mb-16">

      <div>
        <span className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-[0.2em]">
          Featured Templates
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 sm:mt-4 tracking-tight">
          Proven workflows,
          <br />
          trusted by modern teams.
        </h2>
      </div>
      
      <button className="hidden sm:flex items-center gap-2 text-xs sm:text-sm font-medium hover:opacity-70 transition mt-4 sm:mt-0">
        View all templates →
      </button>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">

      {/* Card 1 */}  
      <div className="group rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-7 hover:-translate-y-1 transition-all duration-300">
      
      <Link to="/IncidentResponseTemplate"> 
        <div className="flex items-center justify-between">
          <span className="px-2 sm:px-3 py-1 rounded-full bg-neutral-100 text-xs sm:text-sm">
            Most Used
          </span>

          <span className="text-green-600 text-xs sm:text-sm font-medium">
            +42%
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-5 sm:mt-6">
          Incident Response
        </h3>

        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Automate alerts, assign responders,
          track incidents and resolve issues faster.
        </p>

        {/* Preview */}
        <div className="mt-6 sm:mt-8 border border-neutral-200 rounded-2xl p-3 sm:p-4 bg-neutral-50">

          <div className="space-y-2 sm:space-y-3">
            <div className="h-2 sm:h-3 bg-neutral-200 rounded-full w-full" />
            <div className="h-2 sm:h-3 bg-neutral-200 rounded-full w-4/5" />
            <div className="h-2 sm:h-3 bg-neutral-200 rounded-full w-2/3" />
          </div>

        </div>

        <div className="flex items-center justify-between mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-neutral-500">
            12k+ deployments
          </p>
          
          <button className="font-medium text-sm sm:text-base">
            Use Template →
          </button>
        </div>
      </Link>
      </div>

      {/* Card 2 */}
      
      <div className="group rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-7 hover:-translate-y-1 transition-all duration-300">
      
       <Link to="/IncidentResponseTemplate"> 
        <div className="flex items-center justify-between">
          <span className="px-2 sm:px-3 py-1 rounded-full bg-neutral-100 text-xs sm:text-sm">
            Staff Pick
          </span>

          <span className="text-blue-600 text-xs sm:text-sm font-medium">
            AI Powered
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-5 sm:mt-6">
          Meeting Intelligence
        </h3>

        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Capture decisions, action items,
          summaries and follow-ups automatically.
        </p>

        <div className="mt-6 sm:mt-8 border border-neutral-200 rounded-2xl p-3 sm:p-4 bg-neutral-50">
          <div className="space-y-2 sm:space-y-3">
            <div className="h-2 sm:h-3 bg-neutral-200 rounded-full w-full" />
            <div className="h-2 sm:h-3 bg-neutral-200 rounded-full w-3/4" />
            <div className="h-2 sm:h-3 bg-neutral-200 rounded-full w-1/2" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-neutral-500">
            8k+ deployments
          </p>

          <button className="font-medium text-sm sm:text-base">
            Use Template →
          </button>
        </div>
       </Link>
      </div>
    
      {/* Card 3 */}
      <div className="group rounded-3xl border border-neutral-200 bg-black text-white p-5 sm:p-6 md:p-7 hover:-translate-y-1 transition-all duration-300">
        
       <Link to="/IncidentResponseTemplate"> 
        <div className="flex items-center justify-between">
          <span className="px-2 sm:px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm">
            Trending
          </span>

          <span className="text-green-400 text-xs sm:text-sm font-medium">
            +91%
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-5 sm:mt-6">
          AI Workflow Builder
        </h3>

        <p className="text-xs sm:text-sm text-neutral-400 mt-2 sm:mt-3">
          Create intelligent automations that
          execute actions across your stack.
        </p>

        <div className="mt-6 sm:mt-8 border border-white/10 rounded-2xl p-3 sm:p-4 bg-white/5">
          <div className="space-y-2 sm:space-y-3">
            <div className="h-2 sm:h-3 bg-white/10 rounded-full w-full" />
            <div className="h-2 sm:h-3 bg-white/10 rounded-full w-4/5" />
            <div className="h-2 sm:h-3 bg-white/10 rounded-full w-2/3" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-neutral-400">
            18k+ deployments
          </p>

          <button className="font-medium text-sm sm:text-base">
            Deploy →
          </button>
        </div>
      </Link>
      </div>

    </div>

  </div>

</section>

<section className="py-20 sm:py-36 border-t border-neutral-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="max-w-3xl">
      <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
        Categories
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 leading-tight">
        Find templates by
        <br className="hidden sm:inline" />{" "}
        workflow category.
      </h2>

      <p className="text-base sm:text-lg text-neutral-600 mt-4 sm:mt-6">
        Explore curated workflows for operations, support,
        monitoring, meetings, automation, and more.
      </p>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">

      {/* Large Card */}
      <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-black text-white p-6 sm:p-8 hover:-translate-y-1 transition duration-300">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4">
          <div className="order-2 sm:order-1">
            <span className="text-xs sm:text-sm text-neutral-400">
              Most Popular
            </span>

            <h3 className="text-2xl sm:text-3xl font-semibold mt-2 sm:mt-3">
              Incident Management
            </h3>

            <p className="text-sm sm:text-base text-neutral-400 mt-3 sm:mt-4 max-w-lg">
              Automate escalation workflows, incident tracking,
              team coordination, and postmortem processes.
            </p>
          </div>

          <div className="sm:text-right order-1 sm:order-2 w-full sm:w-auto flex sm:flex-col justify-between items-baseline sm:items-end">
            <p className="text-3xl sm:text-4xl font-semibold">45+</p>
            <p className="text-xs sm:text-sm text-neutral-400">
              Templates
            </p>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:bg-neutral-50 transition duration-300">
        <h3 className="text-lg sm:text-xl font-semibold">
          Customer Support
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Ticket routing, SLA management, AI replies and support workflows.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:bg-neutral-50 transition duration-300">
        <h3 className="text-lg sm:text-xl font-semibold">
          Team Operations
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Internal requests, approvals, onboarding and task management.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:bg-neutral-50 transition duration-300">
        <h3 className="text-lg sm:text-xl font-semibold">
          Meeting Intelligence
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Meeting notes, summaries, decisions and follow-up actions.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:bg-neutral-50 transition duration-300">
        <h3 className="text-lg sm:text-xl font-semibold">
          Knowledge Management
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Organize documents, search insights and centralize information.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:bg-neutral-50 transition duration-300">
        <h3 className="text-lg sm:text-xl font-semibold">
          Monitoring & Alerts
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Detect issues, monitor systems and automate responses.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:bg-neutral-50 transition duration-300">
        <h3 className="text-lg sm:text-xl font-semibold">
          AI Automation
        </h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Build intelligent workflows powered by Orbit AI.
        </p>
      </div>

    </div>

    {/* Bottom Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16">

      <div className="rounded-2xl bg-neutral-50 p-5 sm:p-6">
        <p className="text-2xl sm:text-3xl font-semibold">150+</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-2">
          Ready-to-use templates
        </p>
      </div>

      <div className="rounded-2xl bg-neutral-50 p-5 sm:p-6">
        <p className="text-2xl sm:text-3xl font-semibold">7</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-2">
          Workflow categories
        </p>
      </div>

      <div className="rounded-2xl bg-neutral-50 p-5 sm:p-6">
        <p className="text-2xl sm:text-3xl font-semibold">1 Click</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-2">
          Template deployment
        </p>
      </div>

      <div className="rounded-2xl bg-neutral-50 p-5 sm:p-6">
        <p className="text-2xl sm:text-3xl font-semibold">AI</p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1 sm:mt-2">
          Smart recommendations
        </p>
      </div>

    </div>

  </div>
</section>

<section className="py-28 sm:py-32 md:py-36 bg-neutral-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] text-neutral-500">
        Template Showcase
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-3 sm:mt-4 md:mt-4">
        Deploy proven workflows
        <br />
        in a single click.
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-neutral-600 mt-5 sm:mt-6 md:mt-6">
        Every template includes automations, integrations,
        best practices, and customizable workflows to help
        your team move faster.
      </p>

    </div>

    {/* Templates */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-16 sm:mt-18 md:mt-20">

      {/* Template */}
      <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:-translate-y-1 transition-all">

        <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 sm:p-5 md:p-6">
          <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-4 shadow-sm">
            <div className="h-2 sm:h-2.5 md:h-3 w-full rounded-full bg-neutral-200" />
            <div className="h-2 sm:h-2.5 md:h-3 w-2/3 rounded-full bg-neutral-200 mt-2 sm:mt-2.5 md:mt-3" />
            <div className="h-2 sm:h-2.5 md:h-3 w-1/2 rounded-full bg-neutral-200 mt-2 sm:mt-2.5 md:mt-3" />
          </div>
        </div>

        <div className="p-5 sm:p-6 md:p-7">

          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base px-3 py-1 bg-neutral-100 rounded-full">
              Operations
            </span>

            <span className="text-xs sm:text-sm md:text-base text-neutral-500">
              5 min setup
            </span>
          </div>

          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-5 md:mt-5">
            Incident Response
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-neutral-500 mt-2 sm:mt-3 md:mt-3">
            Automate alerts, escalations, ownership,
            status tracking and resolution workflows.
          </p>

          {/* Capabilities */}
          <div className="flex flex-wrap gap-2 mt-5 sm:mt-5 md:mt-6">
            <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-neutral-100 rounded-full text-xs sm:text-sm md:text-base">
              Alert Routing
            </span>
            <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-neutral-100 rounded-full text-xs sm:text-sm md:text-base">
              Escalations
            </span>
            <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-neutral-100 rounded-full text-xs sm:text-sm md:text-base">
              Postmortems
            </span>
          </div>

          {/* Integrations */}
          <div className="mt-4 sm:mt-5 md:mt-6 flex gap-2">
            <div className="w-8 sm:w-8 md:w-9 h-8 sm:h-8 md:h-9 rounded-xl bg-neutral-100" />
            <div className="w-8 sm:w-8 md:w-9 h-8 sm:h-8 md:h-9 rounded-xl bg-neutral-100" />
            <div className="w-8 sm:w-8 md:w-9 h-8 sm:h-8 md:h-9 rounded-xl bg-neutral-100" />
          </div>
        
        <Link to="/IncidentResponseTemplate"> 
          <button className="w-full mt-6 sm:mt-7 md:mt-8 h-11 sm:h-11 md:h-12 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition text-sm sm:text-base md:text-medium">
            Use Template
          </button>
        </Link>
        </div>
      </div>

      {/* Template */}
      <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:-translate-y-1 transition-all">

        <div className="h-36 sm:h-40 md:h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 sm:p-5 md:p-6">
          <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-4 shadow-sm">
            <div className="h-2 sm:h-2.5 md:h-3 w-full rounded-full bg-neutral-200" />
            <div className="h-2 sm:h-2.5 md:h-3 w-3/4 rounded-full bg-neutral-200 mt-2 sm:mt-2.5 md:mt-3" />
            <div className="h-2 sm:h-2.5 md:h-3 w-1/2 rounded-full bg-neutral-200 mt-2 sm:mt-2.5 md:mt-3" />
          </div>
        </div>

        <div className="p-5 sm:p-6 md:p-7">

          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-base px-3 py-1 bg-neutral-100 rounded-full">
              Meetings
            </span>

            <span className="text-xs sm:text-sm md:text-base text-neutral-500">
              2 min setup
            </span>
          </div>

          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-5 md:mt-5">
            Meeting Intelligence
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-neutral-500 mt-2 sm:mt-3 md:mt-3">
            Capture notes, summaries, decisions,
            action items and follow-ups automatically.
          </p>

          <div className="flex flex-wrap gap-2 mt-5 sm:mt-5 md:mt-6">
            <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-neutral-100 rounded-full text-xs sm:text-sm md:text-base">
              AI Notes
            </span>
            <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-neutral-100 rounded-full text-xs sm:text-sm md:text-base">
              Summaries
            </span>
            <span className="px-2 sm:px-2.5 md:px-3 py-1 bg-neutral-100 rounded-full text-xs sm:text-sm md:text-base">
              Tasks
            </span>
          </div>

          <div className="mt-4 sm:mt-5 md:mt-6 flex gap-2">
            <div className="w-8 sm:w-8 md:w-9 h-8 sm:h-8 md:h-9 rounded-xl bg-neutral-100" />
            <div className="w-8 sm:w-8 md:w-9 h-8 sm:h-8 md:h-9 rounded-xl bg-neutral-100" />
            <div className="w-8 sm:w-8 md:w-9 h-8 sm:h-8 md:h-9 rounded-xl bg-neutral-100" />
          </div>
        
        <Link to="/IncidentResponseTemplate"> 
          <button className="w-full mt-6 sm:mt-7 md:mt-8 h-11 sm:h-11 md:h-12 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition text-sm sm:text-base md:text-medium">
            Use Template
          </button>
        </Link>
        </div>
      </div>

      {/* Featured Template */}
      <div className="rounded-3xl bg-black text-white p-5 sm:p-6 md:p-8 flex flex-col justify-between">

        <div>

          <span className="inline-flex px-2 sm:px-2.5 md:px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm md:text-base">
            Featured Template
          </span>

          <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold mt-5 sm:mt-5 md:mt-6">
            AI Workflow Builder
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 mt-3 sm:mt-4 md:mt-4">
            Create intelligent automations that connect
            monitoring, meetings, knowledge and operations.
          </p>

          <div className="mt-6 sm:mt-7 md:mt-8 space-y-2 sm:space-y-2.5 md:space-y-3">

            <div className="flex justify-between">
              <span className="text-xs sm:text-sm md:text-base text-neutral-400">
                Setup Time
              </span>
              <span className="text-sm sm:text-base md:text-medium">3 Minutes</span>
            </div>

            <div className="flex justify-between">
              <span className="text-xs sm:text-sm md:text-base text-neutral-400">
                Integrations
              </span>
              <span className="text-sm sm:text-base md:text-medium">25+</span>
            </div>

            <div className="flex justify-between">
              <span className="text-xs sm:text-sm md:text-base text-neutral-400">
                Automations
              </span>
              <span className="text-sm sm:text-base md:text-medium">Unlimited</span>
            </div>

          </div>

        </div>
      
        <Link to="/IncidentResponseTemplate"> 
          <button className="w-full mt-8 sm:mt-9 md:mt-10 h-11 sm:h-11 md:h-12 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition text-sm sm:text-base md:text-medium">
            Deploy Template
          </button>
        </Link>
      </div>

    </div>

  </div>

</section>

<section className="py-28 sm:py-32 md:py-36">

  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* Heading */}
    <div className="max-w-3xl">

      <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-500">
        Customer Success
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-3 sm:mt-4">
        Trusted by teams that
        <br />
        move faster with Orbit.
      </h2>

      <p className="text-base sm:text-lg text-neutral-600 mt-5 sm:mt-6">
        From incident response to AI automation,
        teams use Orbit templates to save time,
        improve collaboration, and streamline operations.
      </p>

    </div>

    {/* Impact Stats */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 sm:mt-16">

      <div className="rounded-3xl border border-neutral-200 p-5 sm:p-6 md:p-8">
        <h3 className="text-4xl sm:text-5xl font-semibold">68%</h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Faster incident resolution
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-5 sm:p-6 md:p-8">
        <h3 className="text-4xl sm:text-5xl font-semibold">12 hrs</h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Saved per team weekly
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-5 sm:p-6 md:p-8">
        <h3 className="text-4xl sm:text-5xl font-semibold">3x</h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Faster workflow deployment
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 p-5 sm:p-6 md:p-8">
        <h3 className="text-4xl sm:text-5xl font-semibold">94%</h3>
        <p className="text-sm sm:text-base text-neutral-500 mt-2 sm:mt-3">
          Team adoption rate
        </p>
      </div>

    </div>

    {/* Testimonials */}
    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">

      {/* Testimonial */}
      <div className="rounded-3xl border border-neutral-200 p-5 sm:p-6 md:p-8 bg-white">

        <div className="text-3xl sm:text-4xl leading-none">"</div>

        <p className="text-base sm:text-lg mt-3 sm:mt-4 leading-relaxed">
          Orbit's Incident Response template reduced our
          average response time dramatically. We launched
          a complete workflow in less than a day.
        </p>

        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-100">
          <h4 className="font-semibold text-sm sm:text-base">Sarah Chen</h4>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            Operations Lead
          </p>
        </div>

      </div>

      {/* Featured Story */}
      <div className="rounded-3xl bg-black text-white p-5 sm:p-6 md:p-8">

        <span className="inline-flex px-2 sm:px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm">
          Featured Success Story
        </span>

        <h3 className="text-2xl sm:text-3xl font-semibold mt-5 sm:mt-6">
          72% faster incident resolution
        </h3>

        <p className="text-sm sm:text-base text-neutral-400 mt-4 sm:mt-5 leading-relaxed">
          By deploying Orbit's monitoring and escalation
          templates, the team automated triage, routing,
          and notifications across departments.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">

          <div>
            <p className="text-2xl sm:text-3xl font-semibold">72%</p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Faster response
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-semibold">15 hrs</p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Saved weekly
            </p>
          </div>

        </div>

      </div>

      {/* Testimonial */}
      <div className="rounded-3xl border border-neutral-200 p-5 sm:p-6 md:p-8 bg-white">

        <div className="text-3xl sm:text-4xl leading-none">"</div>

        <p className="text-base sm:text-lg mt-3 sm:mt-4 leading-relaxed">
          The Meeting Intelligence template automatically
          captured decisions and action items, improving
          alignment across every team.
        </p>

        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-100">
          <h4 className="font-semibold text-sm sm:text-base">Michael Rivera</h4>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            Head of Operations
          </p>
        </div>

      </div>

    </div>

    {/* Logos */}
    <div className="mt-16 sm:mt-20 md:mt-24 border-t border-neutral-200 pt-8 sm:pt-10 md:pt-12">

      <p className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-400 mb-6 sm:mb-8 md:mb-10">
        Trusted by modern teams
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 text-sm sm:text-base md:text-lg text-neutral-400 font-semibold">
        <span>Acme</span>
        <span>Nova</span>
        <span>Vertex</span>
        <span>Pulse</span>
        <span>Horizon</span>
        <span>Apex</span>
      </div>

    </div>

  </div>

</section>

<section className="relative py-28 sm:py-32 md:py-36 md:py-40 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-neutral-100 blur-3xl opacity-80 sm:w-[600px] sm:h-[600px]" />
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-neutral-200 bg-black text-white">

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.03]" />

      <div className="relative p-6 sm:p-8 md:p-12 lg:p-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs sm:text-sm">
            AI-Powered Template Builder
          </span>
        </div>

        {/* Content */}
        <div className="max-w-4xl mt-6 sm:mt-8">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Create workflows
            <br />
            your way.
          </h2>

          <p className="text-base sm:text-xl text-neutral-400 mt-5 sm:mt-6 md:mt-8 max-w-2xl leading-relaxed">
            Start from scratch, customize every step,
            and turn your best processes into reusable templates.
            Orbit AI helps generate workflows, automations,
            and actions in seconds.
          </p>

        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-12 sm:mt-14 md:mt-16">

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
            <p className="font-medium text-sm sm:text-base">
              Build from Scratch
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
            <p className="font-medium text-sm sm:text-base">
              Save Workflows
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
            <p className="font-medium text-sm sm:text-base">
              Team Sharing
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
            <p className="font-medium text-sm sm:text-base">
              Reuse Anywhere
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
            <p className="font-medium text-sm sm:text-base">
              AI Assisted
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-14">
        
        <Link to="/CreateTemplate"> 
          <button className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition text-sm sm:text-base">
            Create Template
          </button>
        </Link>
        
        <Link to="/Signup"> 
          <button className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-medium text-sm sm:text-base">
            Start Building
          </button>
        </Link>
        </div>

        {/* Bottom Trust Text */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm text-neutral-500">

          <span>✓ No coding required</span>
          <span>✓ Deploy instantly</span>
          <span>✓ Share across teams</span>
          <span>✓ Powered by Orbit AI</span>

        </div>

      </div>

    </div>

  </div>

</section>

       </div>
    </>
  )
}

export default Templates
