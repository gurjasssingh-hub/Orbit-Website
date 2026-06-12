import React from 'react'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";


const HelpCenter = () => {
  return (
    <>
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-16 md:py-20 bg-[#f7f9fc]'> 


    <section className="relative overflow-hidden rounded-[40px] border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">
 
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="max-w-7xl mx-auto">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        🚀 Getting Started
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Launch with confidence.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Everything you need to set up Orbit, onboard your team,
        and start building powerful workflows from day one.
      </p>
    </div>


    {/* Cards */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Quickstart Guides
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Follow step-by-step onboarding resources to get up and running in minutes.
        </p>
      </div>


      <div className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Account Setup
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Configure your account, organization settings, and security preferences.
        </p>
      </div>


      <div className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Workspace Configuration
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Customize workspaces, permissions, and team environments.
        </p>
      </div>


      <div className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Team Invitations
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Invite teammates, assign roles, and streamline collaboration.
        </p>
      </div>


      <div className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          First Workflow Creation
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Build and launch your first workflow with guided instructions.
        </p>
      </div>


      <div className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Product Walkthroughs
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Explore Orbit through interactive tutorials and guided product tours.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[40px] mt-16 sm:mt-20 border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="max-w-7xl mx-auto">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        📚 Product Documentation
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Everything your team needs to build and scale.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Explore detailed documentation, technical references, and implementation
        resources designed for developers, operators, and growing teams.
      </p>
    </div>


    {/* Documentation Grid */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Feature Documentation
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          In-depth explanations of Orbit features, capabilities, and workflows.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          API References
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Complete endpoint documentation, request examples, and response schemas.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          SDK Documentation
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Official SDK resources, code examples, and implementation guides.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Integration Guides
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Connect Orbit with your existing tools, platforms, and workflows.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Configuration Tutorials
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Step-by-step setup instructions for advanced configurations and deployments.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Version Updates
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Track releases, improvements, deprecations, and platform enhancements.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[40px] mt-16 sm:mt-20 border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="mx-auto max-w-7xl">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        🔌 Integrations & Connections
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Connect Orbit to your entire workflow.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Seamlessly integrate Orbit with the tools your team already uses,
        creating a unified and connected operational experience.
      </p>
    </div>


    {/* Featured Card */}
    <div className="mb-6 rounded-[32px] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 md:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Unified Ecosystem
      </p>


      <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
        Bring your tools, data, and workflows together.
      </h3>


      <p className="mt-4 max-w-2xl text-neutral-600 leading-6 sm:leading-7">
        Connect productivity platforms, business systems, and communication
        tools to centralize information and automate work across your organization.
      </p>
    </div>


    {/* Integration Cards */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          CRM Integrations
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Connect customer data, sales pipelines, and relationship management systems.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Calendar Connections
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Sync schedules, meetings, and availability across your organization.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Communication Platforms
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Integrate messaging, collaboration, and team communication tools.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Third-Party Applications
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Extend Orbit with hundreds of external services and business applications.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Authentication Setup
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Configure secure access with SSO, OAuth, and identity providers.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Data Synchronization
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Keep information accurate and up-to-date across connected systems.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[40px] mt-16 sm:mt-20 border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="mx-auto max-w-7xl">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        🛠 Troubleshooting & Support
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Fix issues faster, stay productive longer.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Access clear solutions, diagnostics, and system insights to resolve issues
        quickly and keep your workflows running smoothly.
      </p>
    </div>


    {/* Support Cards */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Common Issue Resolutions
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Step-by-step fixes for frequently encountered problems and errors.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Error Code Explanations
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Understand system error codes and recommended actions to resolve them.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Performance Troubleshooting
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Identify and fix latency, slowdown, and resource optimization issues.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Connectivity Issues
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Resolve network, API, and integration connection failures efficiently.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Service Status Guidance
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Real-time updates and insights on system health and platform availability.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all hover:border-neutral-300 hover:shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Diagnostic Resources
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Tools and logs to help identify root causes and accelerate debugging.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[40px] mt-16 sm:mt-20 border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="mx-auto max-w-7xl">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        🔒 Security & Privacy
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Your data, protected by design.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Orbit is built with enterprise-grade security, ensuring full control,
        transparency, and protection across every layer of your data.
      </p>
    </div>


    {/* Highlight Card */}
    <div className="mb-6 rounded-[32px] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 md:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Trust & Compliance
      </p>


      <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
        Security isn't a feature — it's the foundation.
      </h3>


      <p className="mt-4 max-w-2xl text-neutral-600 leading-6 sm:leading-7">
        Every interaction, integration, and workflow is safeguarded with strict
        security standards, continuous monitoring, and privacy-first architecture.
      </p>
    </div>


    {/* Security Cards */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Security Practices
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Industry-standard encryption, secure infrastructure, and continuous monitoring.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Data Protection Measures
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          End-to-end safeguards to ensure data integrity, confidentiality, and resilience.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Access Controls
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Role-based permissions, SSO, and strict authentication mechanisms.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Compliance Information
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Alignment with global security and data protection standards.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Privacy Policies
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Transparent data usage policies with full user control and ownership.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Audit Capabilities
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Full audit trails and activity logs for accountability and governance.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[40px] mt-16 sm:mt-20 border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="mx-auto max-w-7xl">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        🎓 Tutorials & Best Practices
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Work smarter with Orbit.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Learn proven strategies, expert workflows, and productivity frameworks
        to maximize efficiency and collaboration across your team.
      </p>
    </div>


    {/* Featured Insight */}
    <div className="mb-6 rounded-[32px] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 md:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Expert Insight
      </p>


      <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
        Small workflow improvements compound into massive efficiency gains.
      </h3>


      <p className="mt-4 max-w-2xl text-neutral-600 leading-6 sm:leading-7">
        Orbit is designed to help teams reduce friction, automate repetitive tasks,
        and build scalable systems that grow with their operations.
      </p>
    </div>


    {/* Tutorial Grid */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Workflow Optimization
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Design efficient systems that reduce friction and improve execution speed.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Productivity Tips
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Practical techniques to help individuals and teams stay focused and effective.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Automation Strategies
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Eliminate repetitive work with intelligent automation and AI-driven workflows.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Team Collaboration Guides
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Improve communication, alignment, and shared execution across teams.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          AI Usage Best Practices
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Learn how to effectively leverage AI for smarter decisions and workflows.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Expert Recommendations
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Curated insights from industry experts and power users of Orbit.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[40px] mt-16 sm:mt-20 border border-neutral-100  p-6 sm:p-8 md:p-12 lg:p-16">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-70" />
    <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-neutral-100 blur-3xl opacity-60" />
  </div>


  <div className="mx-auto max-w-7xl">


    {/* Header */}
    <div className="max-w-3xl mb-12 md:mb-16">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
        💬 Community & Customer Success
      </span>


      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
        Learn, share, and grow with the Orbit community.
      </h2>


      <p className="mt-5 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
        Connect with experts, power users, and support teams to get answers faster,
        share knowledge, and maximize your success with Orbit.
      </p>
    </div>


    {/* Featured Card */}
    <div className="mb-6 rounded-[32px] border border-neutral-200 bg-neutral-50 p-6 sm:p-8 md:p-10">


      <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Customer Network
      </p>


      <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900">
        Built around collaboration, not just support.
      </h3>


      <p className="mt-4 max-w-2xl text-neutral-600 leading-6 sm:leading-7">
        Orbit's ecosystem connects users, experts, and success teams to ensure
        continuous learning, faster resolutions, and shared innovation.
      </p>


    </div>


    {/* Community Cards */}
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Community Discussions
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Engage with peers, share ideas, and explore real-world use cases.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Knowledge Sharing
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Access community-driven insights, solutions, and best practices.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Feature Requests
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Suggest improvements and influence the future of Orbit.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Customer Success Resources
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Dedicated materials to help teams onboard, scale, and succeed faster.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Product Webinars
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Learn directly from experts through live and recorded sessions.
        </p>
      </div>


      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 hover:shadow-sm transition-all">
        <h3 className="text-lg font-semibold text-neutral-900">
          Dedicated Support Channels
        </h3>
        <p className="mt-3 text-sm leading-6 sm:leading-7 text-neutral-600">
          Get priority assistance from Orbit's customer success team.
        </p>
      </div>


    </div>


  </div>
</section>

<section className="relative overflow-hidden rounded-[48px] border mt-16 sm:mt-20 border-neutral-100 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 sm:py-20">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>


  <div className="mx-auto max-w-4xl text-center">


    {/* Badge */}
    <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
      Everything in one place
    </span>


    {/* Heading */}
    <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
      Your Help Center, reimagined for speed and clarity.
    </h2>


    {/* Description */}
    <p className="mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-neutral-600">
      Explore documentation, integrations, tutorials, and support—built to help your team
      resolve anything, learn faster, and move with confidence.
    </p>


    {/* Single CTA Button */}
    <div className="mt-10 flex justify-center">
      <Link to="/Help"> 
      <Button2
        className="bg-black text-white font-medium hover:bg-neutral-700 transition px-2 py-2 w-48"
        text="Explore Help Center"
      />
      </Link>
      
    </div>


  </div>
</section>


      </div>
    </>
  )
}


export default HelpCenter
