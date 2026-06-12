import React from 'react'
import { Link } from 'react-router-dom'

const Guides = () => {
  return (
    <>
      <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

   <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
  
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[800px] h-[400px] sm:h-[800px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 mb-6 shadow-sm">
        Getting Started
      </div>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Start using Orbit in minutes
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Everything you need to set up your workspace, connect your tools,
        and launch your first workflow with confidence.
      </p>
    </div>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          number: "01",
          title: "Create Your Account",
          desc: "Sign up, verify your workspace, and access Orbit’s unified productivity platform."
        },
        {
          number: "02",
          title: "Build Your Workspace",
          desc: "Customize teams, projects, permissions, and organizational structure."
        },
        {
          number: "03",
          title: "Connect Your Tools",
          desc: "Integrate calendars, communication apps, documents, and business systems."
        },
        {
          number: "04",
          title: "Configure Preferences",
          desc: "Personalize notifications, workflows, AI settings, and collaboration options."
        },
        {
          number: "05",
          title: "Launch Your First Workflow",
          desc: "Automate tasks, schedule meetings, and streamline operations instantly."
        },
        {
          number: "06",
          title: "Follow the Checklist",
          desc: "Complete a guided setup process to unlock the full Orbit experience."
        }
      ].map((item) => (
        <div
          key={item.number}
          className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-400">
              {item.number}
            </div>

            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-black transition-colors">
              {item.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* Animated Decorative Bottom Border */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
        </div>
      ))}
    </div>

    {/* Bottom Banner */}
    <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-black text-white p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 shadow-sm">
      <div className="text-left">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
          Quick Start
        </p>

        <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
          Be fully operational in under 10 minutes
        </h3>

        <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Orbit guides you through every step—from workspace creation to
          launching your first automated workflow.
        </p>
      </div>
       
      <Link to="/Guides2" className="w-full lg:w-auto shrink-0"> 
        <button className="w-full lg:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-sm">
          View Setup Guide
        </button>
      </Link>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] sm:h-[1000px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 shadow-sm">
        Core Features
      </div>

      <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Everything you need to operate smarter
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Orbit combines intelligence, collaboration, and automation into a
        unified workspace designed to help teams move faster and accomplish more.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          title: "AI-Powered Assistance",
          description:
            "Get instant answers, automate repetitive work, summarize information, and accelerate decision-making with Orbit AI.",
          stat: "24/7 Intelligence"
        },
        {
          title: "Task Management",
          description:
            "Organize projects, assign ownership, track progress, and ensure nothing falls through the cracks.",
          stat: "Centralized Execution"
        },
        {
          title: "Calendar Intelligence",
          description:
            "Automatically manage schedules, optimize availability, and keep meetings aligned with priorities.",
          stat: "Smarter Scheduling"
        },
        {
          title: "Knowledge Search",
          description:
            "Search across conversations, documents, meetings, and tools to find answers instantly.",
          stat: "Unified Knowledge"
        },
        {
          title: "Team Collaboration",
          description:
            "Share updates, coordinate decisions, and maintain visibility across teams in real time.",
          stat: "Connected Teams"
        },
        {
          title: "Automation Workflows",
          description:
            "Build intelligent workflows that automate tasks, approvals, notifications, and operational processes.",
          stat: "Work on Autopilot"
        }
      ].map((feature, index) => (
        <div
          key={index}
          className="group p-6 sm:p-8 rounded-2xl sm:rounded-[28px] border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-sm sm:text-lg font-semibold text-neutral-900 shrink-0">
              0{index + 1}
            </div>

            <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold text-black transition-colors">
              {feature.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-100">
            <span className="text-xs sm:text-sm font-medium text-neutral-500">
              {feature.stat}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Showcase */}
    <div className="mt-12 sm:mt-24 rounded-2xl sm:rounded-[36px] border border-neutral-200 bg-black text-white p-6 sm:p-12 lg:p-16 shadow-sm">
      <div className="max-w-4xl text-left">
        <p className="uppercase tracking-[0.25em] text-neutral-500 text-[10px] sm:text-sm font-semibold">
          Unified Productivity Platform
        </p>

        <h3 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Six powerful capabilities.
          <br />
          One intelligent workspace.
        </h3>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
          From AI assistance and scheduling to collaboration and automation,
          Orbit brings every workflow together so your team can focus on
          meaningful work instead of busywork.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6">

  {/* Background */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute right-0 top-20 w-full max-w-[700px] h-[400px] sm:h-[700px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-3xl text-left">
      <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 shadow-sm">
        Workflow Guides
      </div>

      <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Proven workflows for every team
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
        Discover step-by-step guides designed to help you streamline operations,
        improve collaboration, and get more done with Orbit.
      </p>
    </div>

    {/* Workflow Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          number: "01",
          title: "Project Planning",
          description:
            "Structure initiatives, define milestones, assign ownership, and keep projects moving from idea to execution."
        },
        {
          number: "02",
          title: "Meeting Management",
          description:
            "Prepare agendas, capture decisions, automate follow-ups, and ensure every meeting drives action."
        },
        {
          number: "03",
          title: "Task Automation",
          description:
            "Reduce manual work with automated workflows, notifications, approvals, and recurring processes."
        },
        {
          number: "04",
          title: "Research Workflows",
          description:
            "Collect information, organize findings, generate insights, and accelerate decision-making."
        },
        {
          number: "05",
          title: "Team Coordination",
          description:
            "Align teams around priorities, improve visibility, and ensure everyone stays informed."
        },
        {
          number: "06",
          title: "Daily Productivity Systems",
          description:
            "Build repeatable routines for planning, prioritization, execution, and performance tracking."
        }
      ].map((workflow) => (
        <div
          key={workflow.number}
          className="group rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <div className="flex items-start justify-between">
              <span className="text-3xl sm:text-5xl font-semibold text-neutral-200 group-hover:text-neutral-300 transition-colors duration-300">
                {workflow.number}
              </span>

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-400 transition-colors duration-300 shrink-0">
                →
              </div>
            </div>

            <h3 className="mt-6 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
              {workflow.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {workflow.description}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-500 group-hover:text-black transition-colors duration-300">
            View Guide
          </div>
        </div>
      ))}
    </div>

    {/* Featured Banner */}
    <div className="mt-12 sm:mt-24 rounded-2xl sm:rounded-[40px] bg-black text-white p-6 sm:p-12 lg:p-16 shadow-sm">
      <div className="max-w-4xl text-left">
        <p className="uppercase tracking-[0.25em] text-neutral-500 text-[10px] sm:text-sm font-semibold">
          Workflow Library
        </p>

        <h3 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Stop reinventing processes.
          <br />
          Start with proven systems.
        </h3>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
          Every guide is built around real-world workflows used by modern
          teams to plan projects, run meetings, automate work, and stay aligned.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] sm:h-[800px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 shadow-sm">
        Automation Playbooks
      </div>

      <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Automate repetitive work with confidence
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Learn how to build intelligent workflows that eliminate manual tasks,
        streamline operations, and keep your team moving faster.
      </p>
    </div>

    {/* Playbooks Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          number: "01",
          title: "Trigger-Based Workflows",
          desc: "Automatically launch actions when events occur, ensuring work starts instantly without manual intervention."
        },
        {
          number: "02",
          title: "Multi-Step Automations",
          desc: "Chain multiple actions together to create powerful workflows spanning teams, tools, and processes."
        },
        {
          number: "03",
          title: "Task Routing",
          desc: "Direct work to the right people automatically based on project rules, ownership, and priorities."
        },
        {
          number: "04",
          title: "Smart Notifications",
          desc: "Deliver timely updates, reminders, and alerts without overwhelming teams with unnecessary noise."
        },
        {
          number: "05",
          title: "Approval Processes",
          desc: "Automate reviews, sign-offs, and decision-making workflows while maintaining accountability."
        },
        {
          number: "06",
          title: "Time-Saving Examples",
          desc: "Explore real-world automation templates that teams use every day to increase productivity."
        }
      ].map((item) => (
        <div
          key={item.number}
          className="group relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 flex flex-col justify-between min-w-0 cursor-pointer"
        >
          <div>
            <span className="text-4xl sm:text-6xl font-semibold text-neutral-100 group-hover:text-neutral-200 transition-colors duration-300">
              {item.number}
            </span>

            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold text-neutral-900">
              {item.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {item.desc}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-500 group-hover:text-black transition-colors duration-300">
            View Playbook →
          </div>
        </div>
      ))}
    </div>

    {/* Process Visualization Panel */}
    <div className="mt-12 sm:mt-24 rounded-2xl sm:rounded-[40px] border border-neutral-200 bg-white p-6 sm:p-10 lg:p-14 shadow-sm">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        <div className="text-left">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            Example Workflow
          </p>

          <h3 className="mt-2 sm:mt-4 text-xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
            Trigger → Route → Notify → Approve
          </h3>

          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed">
            Orbit automatically moves work through every stage,
            reducing manual effort while keeping teams informed.
          </p>
        </div>

        {/* Horizontal/Wrap flow elements */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-start lg:justify-end w-full lg:w-auto">
          {["Trigger", "Route", "Notify", "Approve", "Complete"].map(
            (step, index) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <div className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm">
                  {step}
                </div>

                {index < 4 && (
                  <div className="text-neutral-300 text-base sm:text-xl shrink-0 font-medium">
                    →
                  </div>
                )}
              </div>
            )
          )}
        </div>

      </div>
    </div>

    {/* Premium CTA Card */}
    <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-[40px] bg-black text-white p-6 sm:p-12 lg:p-16 text-left shadow-sm">
      <p className="uppercase tracking-[0.25em] text-neutral-500 text-[10px] sm:text-sm font-semibold">
        Automation Library
      </p>

      <h3 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        Work smarter.
        <br />
        Let Orbit handle the repetitive work.
      </h3>

      <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
        Browse proven automation playbooks, deploy workflows in minutes,
        and free your team to focus on high-impact work.
      </p>
    
      <div className="mt-8 sm:mt-10 flex justify-start">
        <Link to="/Featurespages/Automation" className="w-full sm:w-auto"> 
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-sm">
            Explore Automation Guides
          </button>
        </Link>
      </div>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute right-1/2 top-0 translate-x-1/2 w-full max-w-[900px] h-[400px] sm:h-[900px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 shadow-sm">
        Integrations & Connections
      </div>

      <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Connect Orbit to the tools you already use
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Bring your calendars, conversations, projects, and knowledge into one
        intelligent workspace. Orbit keeps everything connected and in sync.
      </p>
    </div>

    {/* Integration Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          number: "01",
          title: "Calendar Integrations",
          description:
            "Connect work and personal calendars to streamline scheduling, availability, and meeting coordination."
        },
        {
          number: "02",
          title: "Communication Tools",
          description:
            "Sync conversations, updates, and notifications across your team's preferred communication channels."
        },
        {
          number: "03",
          title: "Project Management Apps",
          description:
            "Bring tasks, projects, timelines, and ownership into Orbit for complete operational visibility."
        },
        {
          number: "04",
          title: "Knowledge Platforms",
          description:
            "Access documents, notes, wikis, and shared resources without switching between tools."
        },
        {
          number: "05",
          title: "Data Synchronization",
          description:
            "Keep information consistent across systems with secure, real-time synchronization."
        },
        {
          number: "06",
          title: "Setup Instructions",
          description:
            "Follow guided onboarding steps to configure integrations quickly and securely."
        }
      ].map((item) => (
        <div
          key={item.number}
          className="group relative rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-neutral-400">
                {item.number}
              </span>

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 shrink-0 font-medium text-sm sm:text-base">
                +
              </div>
            </div>

            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-semibold text-neutral-900">
              {item.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Orbit Hub Visual Box */}
    <div className="mt-12 sm:mt-24 rounded-2xl sm:rounded-[40px] border border-neutral-200 bg-white p-6 sm:p-12 lg:p-16 shadow-sm">
      <div className="text-center">
        <p className="uppercase tracking-[0.25em] text-neutral-400 text-[10px] sm:text-sm font-semibold">
          Connected Workspace
        </p>

        <h3 className="mt-2 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold text-neutral-900">
          One hub for all your work
        </h3>

        <p className="mt-3 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Orbit acts as the intelligence layer across your entire tech stack,
          ensuring information flows seamlessly between every tool.
        </p>
      </div>

      {/* Visual Connections Diagram */}
      <div className="mt-10 sm:mt-16 flex flex-col items-center gap-3 sm:gap-4">
        
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full">
          <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/80 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
            Calendar
          </div>

          <div className="text-neutral-300 text-xl sm:text-2xl hidden sm:block rotate-45 lg:rotate-0">
            ↘
          </div>

          <div className="px-8 py-3.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl bg-black text-white text-sm sm:text-base font-bold shadow-md z-10 my-1 sm:my-0">
            Orbit
          </div>

          <div className="text-neutral-300 text-xl sm:text-2xl hidden sm:block -rotate-45 lg:rotate-0">
            ↙
          </div>

          <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/80 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
            Projects
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full">
          <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/80 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
            Communication
          </div>

          <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/80 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
            Knowledge
          </div>

          <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50/80 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
            Data
          </div>
        </div>

      </div>
    </div>

    {/* Footer CTA Card */}
    <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-[40px] bg-black text-white p-6 sm:p-12 lg:p-16 text-left shadow-sm">
      <p className="uppercase tracking-[0.25em] text-neutral-500 text-[10px] sm:text-sm font-semibold">
        Integration Guides
      </p>

      <h3 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        Connect your stack.
        <br />
        Unlock your workflow.
      </h3>

      <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
        Explore step-by-step setup guides, best practices, and integration
        tutorials to get the most out of Orbit.
      </p>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] sm:h-[1000px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 shadow-sm">
        Best Practices
      </div>

      <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Get more from Orbit every day
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Discover proven strategies, expert recommendations, and productivity
        frameworks that help teams unlock the full potential of Orbit.
      </p>
    </div>

    {/* Tips Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          number: "01",
          title: "Organizing Workspaces",
          description:
            "Structure projects, teams, and resources in a way that improves visibility, reduces clutter, and scales with your organization."
        },
        {
          number: "02",
          title: "Building Effective Workflows",
          description:
            "Design workflows that are repeatable, efficient, and aligned with how your team actually works."
        },
        {
          number: "03",
          title: "Team Collaboration Strategies",
          description:
            "Create shared processes that improve communication, accountability, and decision-making across teams."
        },
        {
          number: "04",
          title: "Automation Recommendations",
          description:
            "Identify repetitive tasks and apply automation where it delivers the greatest operational impact."
        },
        {
          number: "05",
          title: "AI Prompting Tips",
          description:
            "Learn how to write effective prompts that generate more accurate insights, summaries, and actions."
        },
        {
          number: "06",
          title: "Productivity Frameworks",
          description:
            "Implement proven systems for planning, prioritization, execution, and continuous improvement."
        }
      ].map((tip) => (
        <div
          key={tip.number}
          className="group rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-4xl sm:text-6xl font-semibold text-neutral-100 group-hover:text-neutral-200 transition-colors duration-300">
                {tip.number}
              </span>

              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-400 transition-colors duration-300 shrink-0 text-sm sm:text-base">
                →
              </div>
            </div>

            <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
              {tip.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {tip.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Expert Framework Section */}
    <div className="mt-12 sm:mt-24 rounded-2xl sm:rounded-[40px] border border-neutral-200 bg-white p-6 sm:p-10 lg:p-16 shadow-sm">
      <div className="text-center">
        <p className="uppercase tracking-[0.25em] text-neutral-400 text-[10px] sm:text-sm font-semibold">
          Orbit Productivity Framework
        </p>

        <h3 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
          Organize → Automate → Collaborate → Scale
        </h3>

        <p className="mt-3 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          The most successful teams follow a simple pattern: structure work,
          automate repetitive processes, align teams, and continuously optimize.
        </p>
      </div>

      <div className="mt-8 sm:mt-14 flex flex-wrap justify-center items-center gap-2 sm:gap-4 w-full">
        {[
          "Organize",
          "Automate",
          "Collaborate",
          "Measure",
          "Optimize",
          "Scale"
        ].map((step, index) => (
          <div key={step} className="flex items-center gap-2 sm:gap-4">
            <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
              {step}
            </div>

            {index < 5 && (
              <span className="text-neutral-300 text-lg sm:text-2xl shrink-0 font-medium">→</span>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Premium CTA Card */}
    <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-[40px] bg-black text-white p-6 sm:p-12 lg:p-16 text-left shadow-sm">
      <p className="uppercase tracking-[0.25em] text-neutral-500 text-[10px] sm:text-sm font-semibold">
        Expert Resources
      </p>

      <h3 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        Turn good workflows
        <br />
        into exceptional ones.
      </h3>

      <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
        Explore advanced productivity guides, workflow optimization techniques,
        and expert recommendations used by high-performing teams.
      </p>
    
      <div className="mt-8 sm:mt-10 flex justify-start">
        <Link to="/best-practices" className="w-full sm:w-auto"> 
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-sm">
            Explore Best Practices
          </button>
        </Link>
      </div>
    </div>

  </div>
</section>
 
 <section className="relative overflow-hidden py-16 sm:py-24 lg:py-36 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute right-0 bottom-0 w-full max-w-[900px] h-[400px] sm:h-[900px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-600 shadow-sm">
        Troubleshooting & Support
      </div>

      <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
        Find answers. Resolve issues. Keep moving.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
        Access troubleshooting guides, support resources, and expert
        recommendations to quickly solve problems and maintain productivity.
      </p>
    </div>

    {/* Support Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-20">
      {[
        {
          number: "01",
          title: "Frequently Asked Questions",
          description:
            "Browse answers to the most common questions about Orbit features, setup, and workflows."
        },
        {
          number: "02",
          title: "Connection Issues",
          description:
            "Resolve integration, authentication, synchronization, and connectivity problems quickly."
        },
        {
          number: "03",
          title: "Workflow Debugging",
          description:
            "Identify failed automations, diagnose workflow issues, and restore operations with confidence."
        },
        {
          number: "04",
          title: "Permission Settings",
          description:
            "Manage user access, workspace roles, security controls, and sharing permissions."
        },
        {
          number: "05",
          title: "Performance Optimization",
          description:
            "Improve workspace efficiency, automation performance, and overall platform responsiveness."
        },
        {
          number: "06",
          title: "Support Resources",
          description:
            "Access documentation, tutorials, community discussions, and direct support channels."
        }
      ].map((item) => (
        <div
          key={item.number}
          className="group rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 flex flex-col justify-between min-w-0"
        >
          <div>
            <span className="text-xs sm:text-sm font-semibold text-neutral-400">
              {item.number}
            </span>

            <h3 className="mt-3 sm:mt-6 text-xl sm:text-2xl font-semibold text-neutral-900">
              {item.title}
            </h3>

            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-500 group-hover:text-black transition-colors duration-300">
            Learn More →
          </div>
        </div>
      ))}
    </div>

    {/* Support Flow Panel */}
    <div className="mt-12 sm:mt-24 rounded-2xl sm:rounded-[40px] border border-neutral-200 bg-white p-6 sm:p-10 lg:p-16 shadow-sm">
      <div className="text-center">
        <p className="uppercase tracking-[0.25em] text-neutral-400 text-[10px] sm:text-sm font-semibold">
          Resolution Process
        </p>

        <h3 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
          Diagnose → Fix → Optimize
        </h3>

        <p className="mt-3 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Follow structured troubleshooting guides to identify issues,
          implement solutions, and prevent future disruptions.
        </p>
      </div>

      <div className="mt-8 sm:mt-14 flex flex-wrap justify-center items-center gap-2 sm:gap-4 w-full">
        {[
          "Identify",
          "Diagnose",
          "Resolve",
          "Verify",
          "Optimize"
        ].map((step, index) => (
          <div key={step} className="flex items-center gap-2 sm:gap-4">
            <div className="px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-neutral-200 bg-neutral-50 text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm whitespace-nowrap">
              {step}
            </div>

            {index < 4 && (
              <span className="text-neutral-300 text-lg sm:text-2xl shrink-0 font-medium">→</span>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Premium Support CTA Card */}
    <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-[40px] bg-black text-white p-6 sm:p-12 lg:p-16 text-left shadow-sm">
      <p className="uppercase tracking-[0.25em] text-neutral-500 text-[10px] sm:text-sm font-semibold">
        Need More Help?
      </p>

      <h3 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        Expert support when
        <br />
        you need it most.
      </h3>

      <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
        Explore documentation, browse troubleshooting guides,
        or connect with the Orbit support team for personalized assistance.
      </p>
 
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
        <Link to="/Help" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-sm">
            Visit Help Center
          </button> 
        </Link>
       
        <Link to="/Support" className="w-full sm:w-auto"> 
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 text-sm font-semibold hover:bg-white/10 transition-all duration-200">
            Contact Support
          </button>
        </Link>
      </div>
    </div>

  </div>
</section> 

<section className="relative overflow-hidden py-16 sm:py-24 lg:py-40 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[400px] sm:h-[1200px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
  </div>

  <div className="max-w-6xl mx-auto">

    <div className="relative overflow-hidden rounded-3xl sm:rounded-[48px] bg-black text-white p-6 sm:p-12 md:p-20 shadow-xl">

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center">

        <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-neutral-300 backdrop-blur-sm">
          Become an Orbit Power User
        </div>

        <h2 className="mt-6 sm:mt-8 text-2xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight md:leading-none">
          Master every workflow.
          <br />
          Unlock your full potential.
        </h2>

        <p className="mt-4 sm:mt-8 text-xs sm:text-base md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Go beyond the basics with advanced guides, intelligent automations,
          custom workflows, and AI-powered productivity systems designed for
          modern teams.
        </p>

        {/* Benefits Grid */}
        <div className="mt-8 sm:mt-14 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {[
            "Advanced Guides",
            "Custom Workflows",
            "Master Automations",
            "Team Collaboration",
            "AI Productivity"
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-3 py-4 sm:px-5 sm:py-6 backdrop-blur-sm flex items-center justify-center min-w-0 ${
                index === 4 ? "col-span-2 md:col-span-1" : "col-span-1"
              }`}
            >
              <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-center truncate w-full">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-14 w-full sm:w-auto">
          <Link to="/Guides2" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-sm">
              Explore Guides
            </button>
          </Link>
          
          <Link to="/Signup" className="w-full sm:w-auto"> 
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold hover:bg-white/10 transition-all duration-200">
              Build with Orbit
            </button>
          </Link>
        </div>

        {/* Journey Breadcrumbs */}
        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center items-center gap-x-2 gap-y-1.5 text-[10px] sm:text-xs md:text-sm text-neutral-500 font-medium px-2">
          {["Getting Started", "Features", "Workflows", "Automations", "Integrations", "Best Practices", "Mastery"].map((step, idx, arr) => (
            <React.Fragment key={step}>
              <span className={idx === arr.length - 1 ? "text-neutral-300 font-semibold" : ""}>
                {step}
              </span>
              {idx < arr.length - 1 && <span className="text-neutral-700 font-normal">→</span>}
            </React.Fragment>
          ))}
        </div>

      </div>

    </div>

  </div>
</section>

      </div>
    </>
  )
}

export default Guides
