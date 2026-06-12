import React from 'react'
import Button2 from '../../components/ui/Button2'
import { NavLink, Link, useLocation } from "react-router-dom";

const Security = () => {
  return (
    <>
      <div className=' px-6 md:px-10 lg:px-32  py-5 md:py-10 lg:px-20 bg-[#f7f9fc]'> 


     <section className="relative overflow-hidden py-16 sm:py-24 lg:py-40 px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[300px] sm:h-[500px] bg-neutral-100 rounded-full blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto">

    <div className="text-center max-w-4xl mx-auto">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-700 shadow-sm mb-6 sm:mb-8">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
        <span>Enterprise Security</span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight sm:leading-[0.95]">
        Security at every layer.
        <br />
        Trust in every action.
      </h2>

      {/* Description */}
      <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        Orbit is built with enterprise-grade security, advanced access
        controls, and privacy-first infrastructure to protect your data,
        workflows, and conversations from day one.
      </p>

    </div>

    {/* Security Dashboard */}
    <div className="mt-12 sm:mt-24 relative">

      <div className="rounded-2xl sm:rounded-[32px] border border-neutral-200 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* Header */}
        <div className="border-b border-neutral-100 px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">

          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            <span className="text-sm sm:text-base font-semibold text-neutral-900">
              Orbit Security Center
            </span>
          </div>

          <span className="text-xs sm:text-sm font-medium text-neutral-500">
            All systems protected
          </span>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-100">

          <div className="p-6 sm:p-8 min-w-0">
            <p className="text-xs sm:text-sm text-neutral-500 mb-1 sm:mb-3 truncate">
              Encryption
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              AES-256
            </h3>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              Enterprise-grade encryption for data at rest and in transit.
            </p>
          </div>

          <div className="p-6 sm:p-8 min-w-0">
            <p className="text-xs sm:text-sm text-neutral-500 mb-1 sm:mb-3 truncate">
              Access Control
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              Role-Based
            </h3>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              Granular permissions and authentication controls.
            </p>
          </div>

          <div className="p-6 sm:p-8 min-w-0">
            <p className="text-xs sm:text-sm text-neutral-500 mb-1 sm:mb-3 truncate">
              Infrastructure
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              99.99%
            </h3>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
              Reliable cloud architecture with continuous monitoring.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

   <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-12 sm:mb-20">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-3 sm:mb-5">
        Enterprise-Grade Security
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Built to protect your data
        <br />
        at every layer.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
        Orbit combines modern security standards, privacy-first design,
        and continuous protection to safeguard your organization's
        information across every workflow.
      </p>
    </div>

    {/* Security Specs Table */}
    <div className="border border-neutral-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
      {[
        {
          title: "End-to-End Encryption",
          desc: "Data remains protected in transit and at rest through advanced encryption standards."
        },
        {
          title: "Secure Data Transmission",
          desc: "All communications are secured using encrypted channels and trusted protocols."
        },
        {
          title: "Industry-Standard Protocols",
          desc: "Built on proven security practices trusted by modern enterprises worldwide."
        },
        {
          title: "Continuous Protection",
          desc: "Monitoring, detection, and security safeguards operate around the clock."
        },
        {
          title: "Privacy-First Architecture",
          desc: "Systems designed to prioritize confidentiality, ownership, and controlled access."
        }
      ].map((item, i, arr) => (
        <div
          key={item.title}
          className={`grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] ${
            i !== arr.length - 1 ? "border-b border-neutral-200" : ""
          }`}
        >
          {/* Label Column */}
          <div className="px-5 py-4 sm:px-8 sm:py-6 bg-neutral-50 md:border-r border-neutral-200 flex items-center min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-black truncate">
              {item.title}
            </h3>
          </div>

          {/* Description Column */}
          <div className="px-5 py-4 sm:px-8 sm:py-6 bg-white min-w-0 border-t md:border-t-0 border-neutral-100 md:border-transparent">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

 <section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-12 sm:mb-20">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-3 sm:mb-5">
        Advanced Access Control
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        The right access,
        <br />
        for the right people.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
        Maintain complete control over who can view, manage, and interact
        with information across your workspace through enterprise-grade
        access management and authentication controls.
      </p>
    </div>

    {/* Access Control Matrix */}
    <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 overflow-hidden bg-white shadow-sm">

      {[
        {
          title: "Role-Based Permissions",
          desc: "Assign responsibilities with customizable permission levels tailored to teams and individuals."
        },
        {
          title: "Granular User Access",
          desc: "Control access to specific resources, workflows, and knowledge with fine-grained precision."
        },
        {
          title: "Team-Level Controls",
          desc: "Manage permissions across departments and teams while maintaining organizational oversight."
        },
        {
          title: "Secure Authentication",
          desc: "Strengthen account security through modern authentication standards and identity verification."
        },
        {
          title: "Session Management",
          desc: "Monitor and manage active sessions with controls designed to protect organizational data."
        }
      ].map((item, i, arr) => (
        <div
          key={item.title}
          className={`group grid grid-cols-1 md:grid-cols-[120px_1fr_80px] lg:grid-cols-[160px_1fr_100px] items-stretch ${
            i !== arr.length - 1 ? "border-b border-neutral-200" : ""
          }`}
        >
          {/* Index Counter Column */}
          <div className="px-5 py-4 sm:px-8 sm:py-6 md:border-r border-neutral-200 bg-neutral-50 flex items-center justify-between md:justify-start">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-neutral-400">
              0{i + 1}
            </span>
            {/* Visual indicator visible on mobile inside the index block */}
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 md:hidden" />
          </div>

          {/* Core Text Column */}
          <div className="px-5 py-5 sm:px-8 sm:py-8 bg-white min-w-0 border-t md:border-t-0 border-neutral-100 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-semibold text-black truncate">
              {item.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </div>

          {/* Desktop Visual Indicator Column */}
          <div className="hidden md:flex items-center justify-center bg-white px-4">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0 transition-transform duration-300 group-hover:scale-125" />
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-12 sm:mb-20">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-3 sm:mb-5">
        Identity & Authentication
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Trusted identities.
        <br />
        Secure access.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
        Strengthen security from the moment users sign in with enterprise-grade
        authentication, identity verification, and access controls designed
        for modern organizations.
      </p>
    </div>

    {/* Identity Framework */}
    <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 overflow-hidden bg-white shadow-sm">

      {[
        {
          label: "01",
          title: "Single Sign-On (SSO)",
          desc: "Streamline access with centralized authentication across your organization's tools and services."
        },
        {
          label: "02",
          title: "Multi-Factor Authentication",
          desc: "Add an additional layer of security through trusted verification methods and sign-in protection."
        },
        {
          label: "03",
          title: "Secure User Verification",
          desc: "Validate user identities with security-first authentication workflows and access safeguards."
        },
        {
          label: "04",
          title: "Device Trust Management",
          desc: "Establish trusted devices and monitor access points to reduce unauthorized entry risks."
        },
        {
          label: "05",
          title: "Enterprise Identity Support",
          desc: "Integrate with enterprise identity providers and centralized directory systems."
        }
      ].map((item, i, arr) => (
        <div
          key={item.title}
          className={`grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr] ${
            i !== arr.length - 1 ? "border-b border-neutral-200" : ""
          }`}
        >
          {/* Number Label Column */}
          <div className="flex items-center justify-between md:justify-center px-5 py-4 sm:px-8 md:py-8 bg-neutral-50 md:border-r border-neutral-200">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-neutral-400">
              {item.label}
            </span>
            {/* Visual indicator shown on mobile devices inside layout block */}
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 md:hidden" />
          </div>

          {/* Content Column */}
          <div className="px-5 py-5 sm:p-8 md:px-10 bg-white min-w-0 border-t md:border-t-0 border-neutral-100">
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-lg sm:text-2xl font-semibold text-black truncate">
                {item.title}
              </h3>

              <div className="hidden md:block w-2 h-2 rounded-full bg-green-500 shrink-0" />
            </div>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-12 sm:mb-20">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-3 sm:mb-5">
        Audit & Activity Tracking
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Complete visibility.
        <br />
        Full accountability.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
        Maintain a transparent record of activity across your workspace with
        detailed audit trails, event tracking, and reporting tools designed
        to support governance, security, and compliance.
      </p>
    </div>

    {/* Audit Timeline */}
    <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 overflow-hidden bg-white shadow-sm">

      {[
        {
          time: "01",
          title: "Comprehensive Audit Logs",
          desc: "Maintain a complete record of actions, updates, and system events across your organization."
        },
        {
          time: "02",
          title: "User Activity Monitoring",
          desc: "Track user interactions and workspace activity to improve oversight and operational awareness."
        },
        {
          time: "03",
          title: "Change History Tracking",
          desc: "View historical changes and maintain a clear record of modifications across workflows and data."
        },
        {
          time: "04",
          title: "Security Event Visibility",
          desc: "Monitor authentication events, access attempts, and security-related activities in real time."
        },
        {
          time: "05",
          title: "Compliance Reporting",
          desc: "Generate reports and maintain documentation to support internal governance and regulatory requirements."
        }
      ].map((item, i, arr) => (
        <div
          key={item.title}
          className={`grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr] ${
            i !== arr.length - 1 ? "border-b border-neutral-200" : ""
          }`}
        >
          {/* Timeline Rail Indicator */}
          <div className="relative flex md:justify-center items-center md:items-start px-5 py-4 sm:px-8 md:py-10 bg-neutral-50 md:border-r border-neutral-200">
            
            {/* Desktop vertical connector line */}
            {i !== arr.length - 1 && (
              <div className="hidden md:block absolute top-20 bottom-0 w-px bg-neutral-200" />
            )}

            {/* Step Counter Badge */}
            <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-neutral-300 bg-white text-xs sm:text-sm font-semibold text-neutral-500 shadow-sm shrink-0">
              {item.time}
            </div>

            {/* Mobile horizontal line accent to add structural polish */}
            <div className="md:hidden ml-4 h-px w-full bg-neutral-200" />
          </div>

          {/* Core Text Content */}
          <div className="px-5 py-5 sm:p-8 md:p-10 bg-white min-w-0 border-t md:border-t-0 border-neutral-100 flex flex-col justify-center">
            <h3 className="text-lg sm:text-2xl font-semibold text-black truncate">
              {item.title}
            </h3>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-12 sm:mb-20">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-3 sm:mb-5">
        Infrastructure Reliability
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Built for uptime.
        <br />
        Designed for resilience.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
        Orbit runs on a modern cloud infrastructure engineered for
        reliability, scalability, and continuous availability—ensuring
        your teams stay productive without interruption.
      </p>
    </div>

    {/* Infrastructure Grid */}
    <div className="border border-neutral-200 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-2">

        {[
          {
            number: "01",
            title: "Cloud-Native Architecture",
            desc: "Built on scalable cloud infrastructure designed to adapt seamlessly as your organization grows."
          },
          {
            number: "02",
            title: "High Availability Systems",
            desc: "Distributed services and resilient architecture help maintain consistent platform availability."
          },
          {
            number: "03",
            title: "Redundant Infrastructure",
            desc: "Critical systems are replicated across multiple layers to minimize single points of failure."
          },
          {
            number: "04",
            title: "Automated Backups",
            desc: "Regular backup processes help protect important data and support rapid restoration when needed."
          },
          {
            number: "05",
            title: "Disaster Recovery Readiness",
            desc: "Recovery procedures and infrastructure safeguards are designed to reduce downtime during unexpected events."
          }
        ].map((item, i) => (
          <div
            key={item.title}
            className={`
              p-6 sm:p-10 min-w-0 flex flex-col justify-between
              md:border-r md:odd:border-r-neutral-200 md:even:border-r-transparent
              border-b border-neutral-200 last:border-b-0
              ${i === 3 ? "md:border-b-0" : ""}
              ${i === 4 ? "md:col-span-2 md:border-r-transparent" : ""}
            `}
          >
            <div>
              {/* Card Meta Indicator */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-neutral-400">
                  {item.number}
                </span>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight truncate">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-12 sm:mb-20">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-3 sm:mb-5">
        Compliance & Governance
      </p>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
        Governance built for
        <br />
        growing organizations.
      </h2>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
        Establish clear oversight, maintain operational standards, and
        support compliance requirements with governance controls designed
        for modern teams and enterprise environments.
      </p>
    </div>

    {/* Governance Framework */}
    <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 overflow-hidden bg-white shadow-sm">

      {[
        {
          title: "Data Governance Controls",
          desc: "Define and enforce policies that help manage access, usage, and stewardship of organizational data."
        },
        {
          title: "Regulatory Readiness",
          desc: "Support evolving compliance requirements with processes designed around accountability and transparency."
        },
        {
          title: "Security Best Practices",
          desc: "Built upon established security principles and operational standards to strengthen organizational resilience."
        },
        {
          title: "Retention Policies",
          desc: "Manage how information is stored, retained, and archived while maintaining consistency across teams."
        },
        {
          title: "Organizational Oversight",
          desc: "Provide leadership and administrators with visibility into controls, policies, and operational activity."
        }
      ].map((item, i, arr) => (
        <div
          key={item.title}
          className={`grid grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[80px_320px_1fr] ${
            i !== arr.length - 1 ? "border-b border-neutral-200" : ""
          }`}
        >
          {/* Index Identifier Row/Column */}
          <div className="flex items-center justify-between md:justify-center px-5 py-3 sm:px-8 md:py-0 border-b md:border-b-0 md:border-r border-neutral-200 bg-neutral-50">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-neutral-400">
              0{i + 1}
            </span>
            {/* Soft accent dot on smaller screens */}
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 md:hidden" />
          </div>

          {/* Title Box */}
          <div className="px-5 pt-5 pb-2 sm:px-8 sm:pt-6 sm:pb-3 lg:py-8 lg:border-r border-neutral-200 bg-white min-w-0 flex items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-black tracking-tight truncate">
              {item.title}
            </h3>
          </div>

          {/* Description Box */}
          <div className="px-5 pb-5 pt-1 sm:px-8 sm:pb-6 sm:pt-2 lg:py-8 bg-white min-w-0">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="relative py-16 sm:py-24 lg:py-40 overflow-hidden px-4 sm:px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[300px] sm:h-[900px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
  </div>

  <div className="max-w-5xl mx-auto text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-medium text-neutral-700 shadow-sm mb-6 sm:mb-8">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
      <span>Trusted Security Foundation</span>
    </div>

    {/* Heading */}
    <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black leading-tight sm:leading-[0.95]">
      Security built for today.
      <br />
      Ready for tomorrow.
    </h2>

    {/* Description */}
    <p className="mt-4 sm:mt-8 max-w-3xl mx-auto text-sm sm:text-base md:text-xl leading-relaxed text-neutral-600">
      Orbit combines enterprise-grade protection, privacy-first design,
      and resilient infrastructure to keep your organization's data,
      workflows, and collaboration secure at every stage.
    </p>

    {/* Security Stats */}
    <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80">
      <div className="pt-4 sm:pt-0 min-w-0">
        <div className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">24/7</div>
        <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium truncate">
          Continuous Protection
        </div>
      </div>

      <div className="pt-4 sm:pt-0 min-w-0">
        <div className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">Enterprise</div>
        <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium truncate">
          Access Controls
        </div>
      </div>

      <div className="pt-4 sm:pt-0 min-w-0">
        <div className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">Privacy</div>
        <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-500 font-medium truncate">
          By Design
        </div>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-12 sm:mt-16 w-full sm:w-auto">
      <Link to="/Signup" className="w-full sm:w-auto"> 
        <Button2
          text="Start Securely"
          className="bg-black text-white hover:bg-neutral-800 h-12 w-full sm:w-40 font-medium rounded-xl transition-all duration-300"
        />
      </Link>
      
      <Link to="/SecurityReview" className="w-full sm:w-auto">
        <Button2
          text="Schedule a Security Review"
          className="bg-white text-black border border-neutral-300 hover:bg-neutral-50 h-12 w-full sm:w-60 font-medium rounded-xl transition-all duration-300"
        />
      </Link>
    </div>

  </div>

</section>


    </div>
         
    </>
  )
}

export default Security
