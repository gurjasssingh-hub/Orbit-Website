import React from 'react'
import DocsGuidesHero from '../components/ui/DocsGuidesHero'
import { Link } from 'react-router-dom'

const Guides2 = () => {
  return (
    <>
     <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

<section className="border-b border-gray-100">
  <DocsGuidesHero />
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">


    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          Getting Started
        </span>


        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Start Building with Orbit
        </h2>


        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Create your account, configure your workspace, generate API
          credentials, install SDKs, and make your first API request in
          just a few minutes.
        </p>
      </div>


      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          ⏱ 10–15 Minutes
        </span>


        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          📚 Beginner Friendly
        </span>


        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🚀 Quickstart Guide
        </span>
      </div>
    </div>


    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">


      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">01</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Create an Orbit Account
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Sign up and access your Orbit dashboard, developer tools,
          and project management features.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">02</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Workspace Setup
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Create your workspace, organize projects, and invite
          teammates to collaborate.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">03</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Generate API Credentials
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Create secure API keys and authentication credentials
          for your applications.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">04</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Install SDKs
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Install Orbit SDKs for JavaScript, React, Node.js,
          Python, and more.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">05</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          First API Request
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Send your first request and verify your integration
          is working successfully.
        </p>
      </div>


      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">06</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Quickstart Tutorial
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Follow a complete walkthrough and build your first
          Orbit-powered application.
        </p>
      </div>


    </div>
  </div>
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          Core Concepts
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Understand How Orbit Works
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Learn the foundational concepts behind Orbit, including how
          workspaces, projects, organizations, users, authentication,
          and APIs work together to power your applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🏗 Platform Fundamentals
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          📚 Beginner Friendly
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🔗 System Relationships
        </span>
      </div>
    </div>

    {/* Concepts Grid */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">01</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Workspaces
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Workspaces are the primary environments where your team
          manages projects, resources, integrations, and settings.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">02</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Projects
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Projects organize your applications, APIs, and resources
          within a workspace for easier management and deployment.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">03</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Organizations
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Organizations represent your company or team and can
          contain multiple workspaces and users.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">04</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Users & Roles
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Manage access using role-based permissions, ensuring users
          have the right level of control and visibility.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">05</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Authentication
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Securely identify users and applications using API keys,
          tokens, OAuth flows, and access controls.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">06</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          API Architecture
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Understand how Orbit services communicate through REST APIs,
          endpoints, requests, responses, and integrations.
        </p>
      </div>

    </div>

    {/* Relationship Diagram */}
    <div className="mt-12 sm:mt-14 md:mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 md:p-8">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Platform Relationship Overview
      </h3>

      <p className="mt-2 text-sm sm:text-base text-slate-600">
        Understanding how Orbit resources connect together.
      </p>

      <div className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">

        <div className="rounded-2xl bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4 border border-slate-200 font-medium text-xs sm:text-sm md:text-base">
          Organization
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4 border border-slate-200 font-medium text-xs sm:text-sm md:text-base">
          Workspace
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4 border border-slate-200 font-medium text-xs sm:text-sm md:text-base">
          Project
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4 border border-slate-200 font-medium text-xs sm:text-sm md:text-base">
          APIs & Resources
        </div>

      </div>
    </div>

    {/* Workflow Examples */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Common Workflows
      </h3>

      <div className="mt-5 sm:mt-5 md:mt-6 grid md:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            New Application Setup
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Create a workspace → Create a project → Generate API keys →
            Deploy your application.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Team Collaboration
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Invite users → Assign roles → Share projects →
            Manage permissions securely.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            API Integration
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Authenticate requests → Access resources →
            Process responses → Monitor usage.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          Authentication & Security
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Secure Access to Orbit Services
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Learn how to authenticate requests, manage tokens, protect
          credentials, and implement security best practices across
          your Orbit integrations.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🔐 Security Essentials
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🛡 Production Ready
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🚀 API Authentication
        </span>
      </div>
    </div>

    {/* Security Topics */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">01</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          API Keys
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Generate and manage secure API keys used to authenticate
          requests from your applications and services.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">02</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          OAuth Authentication
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Enable secure third-party authorization using OAuth flows,
          consent screens, and delegated access.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">03</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Access Tokens
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Authenticate API requests using temporary access tokens
          issued after successful authorization.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">04</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Refresh Tokens
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Securely obtain new access tokens without requiring users
          to repeatedly sign in.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">05</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Permission Scopes
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Control resource access by granting only the permissions
          required for a specific application.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">06</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Secure Requests
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Protect data in transit using HTTPS, signed requests,
          token validation, and security headers.
        </p>
      </div>

    </div>

    {/* Token Lifecycle */}
    <div className="mt-12 sm:mt-14 md:mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 md:p-8">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Token Lifecycle
      </h3>

      <p className="mt-2 text-sm sm:text-base text-slate-600">
        Understand how authentication credentials are issued,
        validated, refreshed, and expired.
      </p>

      <div className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">

        <div className="rounded-2xl bg-white border border-slate-200 px-4 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Authenticate
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white border border-slate-200 px-4 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Access Token Issued
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white border border-slate-200 px-4 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          API Requests
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white border border-slate-200 px-4 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Refresh Token
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-white border border-slate-200 px-4 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          New Access Token
        </div>

      </div>
    </div>

    {/* Example Request */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Example Authenticated Request
        </h3>
      </div>

      <pre className="overflow-x-auto bg-slate-950 p-4 sm:p-5 md:p-6 text-xs sm:text-sm text-slate-300">
{`curl https://api.orbit.dev/v1/projects \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -H "Content-Type: application/json"`}
      </pre>
    </div>

    {/* Security Best Practices */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Security Best Practices
      </h3>

      <div className="mt-5 sm:mt-5 md:mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 md:gap-6">

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Store Secrets Securely
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Never expose API keys in client-side code or public
            repositories.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Rotate Credentials
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Regularly rotate API keys and refresh tokens to reduce
            security risks.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Use Least Privilege
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Grant only the minimum permission scopes required.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Enforce HTTPS
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Ensure all requests are encrypted during transmission.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          API Reference
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Comprehensive API Documentation
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Explore Orbit endpoints, request methods, parameters,
          authentication headers, responses, and error handling
          with practical examples and implementation guides.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🔗 REST APIs
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          📖 Developer Reference
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          ⚡ Interactive Examples
        </span>
      </div>
    </div>

    {/* API Categories */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">01</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Endpoints
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Discover available API endpoints for managing projects,
          users, workspaces, integrations, and resources.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">02</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Request Methods
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Learn when to use GET, POST, PUT, PATCH, and DELETE
          requests throughout the Orbit API.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">03</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Parameters
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Understand path parameters, query parameters,
          filters, pagination, and request payloads.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">04</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Headers
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Configure authorization, content types,
          versioning, and custom request headers.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">05</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Responses
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Review response structures, status codes,
          pagination formats, and returned resources.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">06</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Error Codes
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Understand common API errors, troubleshooting
          guidance, and recommended fixes.
        </p>
      </div>

    </div>

    {/* Example Endpoint */}
    <div className="mt-12 sm:mt-14 md:mt-16 rounded-3xl border border-slate-200 overflow-hidden">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4 flex items-center justify-between">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Example Endpoint
        </h3>

        <span className="rounded-lg bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">
          GET
        </span>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-slate-300">
{`GET /v1/projects

Headers:
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
        </pre>
      </div>

    </div>

    {/* Example Payload */}
    <div className="mt-6 sm:mt-7 md:mt-8 rounded-3xl border border-slate-200 overflow-hidden">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Example Response Payload
        </h3>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-slate-300">
{`{
  "id": "proj_123",
  "name": "Orbit Project",
  "status": "active",
  "created_at": "2026-01-15T12:00:00Z"
}`}
        </pre>
      </div>

    </div>

    {/* Interactive Examples */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Interactive Examples
      </h3>

      <p className="mt-2 text-sm sm:text-base text-slate-600">
        Test requests, explore responses, and understand
        Orbit APIs through practical examples.
      </p>

      <div className="mt-6 sm:mt-7 md:mt-8 grid md:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

        <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Authentication
          </h4>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Learn how to authenticate requests using API keys
            and OAuth access tokens.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Project Management
          </h4>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Create, update, retrieve, and delete projects
            using Orbit APIs.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            User Operations
          </h4>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Manage users, permissions, and organizations
            through API requests.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
``
<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          SDKs & Libraries
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Build Faster with Official SDKs
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Integrate Orbit into your applications using official SDKs,
          client libraries, and developer tools designed for speed,
          reliability, and ease of use.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          📦 Official SDKs
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          ⚡ Quick Integration
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🌎 Multi-Language Support
        </span>
      </div>
    </div>

    {/* SDK Cards */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">01</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          JavaScript SDK
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Build browser and frontend applications using the official
          JavaScript SDK.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">02</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          React SDK
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Prebuilt hooks, providers, and components for seamless
          React integration.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">03</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Node.js SDK
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Server-side tools for secure API access, automation,
          and backend integrations.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">04</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Python SDK
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Powerful Python tools for scripting, automation,
          data workflows, and backend services.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">05</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          REST API Client
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Directly interact with Orbit endpoints using standard
          HTTP requests and REST conventions.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">06</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Community SDKs
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Explore community-maintained SDKs and integrations
          built by Orbit developers.
        </p>
      </div>

    </div>

    {/* Installation Commands */}
    <div className="mt-12 sm:mt-14 md:mt-16 rounded-3xl border border-slate-200 overflow-hidden">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Installation Commands
        </h3>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-slate-300">
{`# JavaScript / Node.js
npm install @orbit/sdk

# React
npm install @orbit/react

# Python
pip install orbit-sdk`}
        </pre>
      </div>

    </div>

    {/* Usage Example */}
    <div className="mt-6 sm:mt-7 md:mt-8 rounded-3xl border border-slate-200 overflow-hidden">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Quick Usage Example
        </h3>
      </div>

      <div className="bg-slate-950 p-4 sm:p-5 md:p-6 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-slate-300">
{`import Orbit from "@orbit/sdk";

const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});

const projects = await orbit.projects.list();

console.log(projects);`}
        </pre>
      </div>

    </div>

    {/* SDK Documentation Links */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        SDK Documentation
      </h3>

      <p className="mt-2 text-sm sm:text-base text-slate-600">
        Explore detailed SDK references, examples, and guides.
      </p>

      <div className="mt-6 sm:mt-7 md:mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-4">

        <a
          href="#"
          className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-blue-200 hover:bg-slate-50 transition"
        >
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            JavaScript SDK Docs
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            API reference, examples, and setup instructions.
          </p>
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-blue-200 hover:bg-slate-50 transition"
        >
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            React SDK Docs
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Components, hooks, providers, and guides.
          </p>
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-blue-200 hover:bg-slate-50 transition"
        >
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Node.js SDK Docs
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Backend integrations and server-side examples.
          </p>
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-blue-200 hover:bg-slate-50 transition"
        >
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Python SDK Docs
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Automation, scripting, and API integrations.
          </p>
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-blue-200 hover:bg-slate-50 transition"
        >
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            REST API Guide
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Direct HTTP requests and endpoint documentation.
          </p>
        </a>

        <a
          href="#"
          className="rounded-2xl border border-slate-200 p-4 sm:p-5 hover:border-blue-200 hover:bg-slate-50 transition"
        >
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Community Resources
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Third-party SDKs, templates, and integrations.
          </p>
        </a>

      </div>
    </div>

  </div>
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          Security Best Practices
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Build Secure Orbit Applications
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Follow recommended security practices to protect credentials,
          reduce risk, strengthen compliance, and maintain the integrity
          of your Orbit integrations and infrastructure.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🔒 Security First
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🛡 Production Ready
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          ✅ Compliance Focused
        </span>
      </div>
    </div>

    {/* Security Topics */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">01</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Protect API Keys
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Keep credentials private and never expose API keys in
          public repositories, frontend code, or client applications.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">02</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Environment Variables
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Store secrets securely using environment variables
          instead of hardcoding sensitive values.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">03</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Least-Privilege Access
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Grant only the permissions required for users,
          services, and applications.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">04</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Key Rotation
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Regularly rotate API keys and credentials to
          minimize long-term security risks.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">05</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Audit Logging
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Track authentication events, configuration changes,
          and sensitive operations across your workspace.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">06</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Monitoring
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Monitor API activity, unusual traffic patterns,
          and security-related events in real time.
        </p>
      </div>

    </div>

    {/* Security Checklist */}
    <div className="mt-12 sm:mt-14 md:mt-16 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Security Checklist
      </h3>

      <p className="mt-2 text-sm sm:text-base text-slate-600">
        Review these recommendations before deploying to production.
      </p>

      <div className="mt-6 sm:mt-7 md:mt-8 grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-4">

        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
          <span className="text-sm sm:text-base">✅</span>
          <span className="text-sm sm:text-base text-slate-700">
            Store secrets in environment variables
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
          <span className="text-sm sm:text-base">✅</span>
          <span className="text-sm sm:text-base text-slate-700">
            Enable HTTPS for all requests
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
          <span className="text-sm sm:text-base">✅</span>
          <span className="text-sm sm:text-base text-slate-700">
            Rotate API credentials regularly
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
          <span className="text-sm sm:text-base">✅</span>
          <span className="text-sm sm:text-base text-slate-700">
            Apply least-privilege permissions
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
          <span className="text-sm sm:text-base">✅</span>
          <span className="text-sm sm:text-base text-slate-700">
            Enable audit logs and monitoring
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-slate-50 p-3 sm:p-4">
          <span className="text-sm sm:text-base">✅</span>
          <span className="text-sm sm:text-base text-slate-700">
            Review access permissions periodically
          </span>
        </div>

      </div>

    </div>

    {/* Common Mistakes */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Common Security Mistakes
      </h3>

      <div className="mt-5 sm:mt-6 grid md:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-red-700">
            Exposed API Keys
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Storing secrets directly in frontend code or public repositories.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-red-700">
            Overly Broad Permissions
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Granting unnecessary access to users, services, or applications.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-red-700">
            Ignoring Credential Rotation
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Using the same API keys indefinitely without periodic replacement.
          </p>
        </div>

      </div>

    </div>

    {/* Compliance Recommendations */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Compliance Recommendations
      </h3>

      <div className="mt-5 sm:mt-6 grid md:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

        <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Data Protection
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Encrypt sensitive data at rest and in transit to support
            modern security requirements.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Access Controls
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Maintain role-based access policies and regularly review permissions.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Audit Readiness
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Retain activity logs and security records for investigations,
            reporting, and compliance reviews.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="py-20 sm:py-22 md:py-24 border-t border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-7 md:gap-8">
      <div className="max-w-3xl">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
          Troubleshooting
        </span>

        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Diagnose & Resolve Common Issues
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          Quickly identify errors, understand their causes, and apply
          proven solutions to keep your Orbit integrations running
          smoothly in development and production.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🔧 Debugging Guides
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          🚨 Error Resolution
        </span>

        <span className="rounded-full border border-slate-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700">
          ⚡ Quick Fixes
        </span>
      </div>
    </div>

    {/* Issues Grid */}
    <div className="mt-12 sm:mt-14 md:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-6">

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-red-600 font-semibold text-sm sm:text-base">401</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Authentication Errors
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Invalid API keys, expired access tokens, missing credentials,
          or incorrect authentication headers.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-orange-600 font-semibold text-sm sm:text-base">400</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Invalid Requests
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Missing parameters, malformed payloads, invalid field values,
          or unsupported request formats.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-yellow-600 font-semibold text-sm sm:text-base">429</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Rate Limit Issues
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Too many requests within a short period exceeding
          your current API rate limits.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-purple-600 font-semibold text-xs sm:text-sm md:text-base">Webhook</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Webhook Failures
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Delivery failures, invalid signatures, unreachable endpoints,
          or processing timeouts.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-blue-600 font-semibold text-sm sm:text-base">403</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Permission Errors
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          Insufficient scopes, missing permissions, or access restrictions
          preventing the requested action.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-7 hover:shadow-lg transition">
        <span className="text-slate-600 font-semibold text-xs sm:text-sm md:text-base">Network</span>
        <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-slate-900">
          Connection Problems
        </h3>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
          DNS failures, firewall restrictions, SSL issues,
          timeouts, or connectivity disruptions.
        </p>
      </div>

    </div>

    {/* Error Resolution Table */}
    <div className="mt-12 sm:mt-14 md:mt-16 rounded-3xl border border-slate-200 overflow-hidden">

      <div className="border-b border-slate-200 bg-slate-50 px-4 sm:px-5 md:px-6 py-3 sm:py-3 md:py-4">
        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
          Common Errors & Solutions
        </h3>
      </div>

      <div className="divide-y divide-slate-200">

        <div className="p-4 sm:p-5 md:p-6">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            401 Unauthorized
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Verify API credentials, access tokens, and authorization headers.
          </p>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            403 Forbidden
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Confirm your account has the required scopes and permissions.
          </p>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            429 Too Many Requests
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Implement retries with exponential backoff and monitor usage.
          </p>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            500 Internal Server Error
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Retry the request and review platform status or error logs.
          </p>
        </div>

      </div>

    </div>

    {/* Resolution Steps */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Recommended Resolution Process
      </h3>

      <div className="mt-6 sm:mt-7 md:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center">

        <div className="rounded-2xl bg-slate-50 px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Identify Error
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-slate-50 px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Review Logs
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-slate-50 px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Verify Configuration
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-slate-50 px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Apply Fix
        </div>

        <span className="text-slate-400 text-sm sm:text-base">→</span>

        <div className="rounded-2xl bg-slate-50 px-3 sm:px-4 md:px-5 py-3 sm:py-3 md:py-4 font-medium text-xs sm:text-sm md:text-base">
          Test Again
        </div>

      </div>

    </div>

    {/* Debugging Tips */}
    <div className="mt-10 sm:mt-11 md:mt-12 rounded-3xl border border-slate-200 p-6 sm:p-7 md:p-8">

      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
        Debugging Tips
      </h3>

      <div className="mt-5 sm:mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-5 md:gap-6">

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Check Logs
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Review request, response, and webhook logs for detailed diagnostics.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Verify Credentials
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Confirm API keys, tokens, and environment variables are correct.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Validate Payloads
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Ensure request bodies match API specifications and schemas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm sm:text-base text-slate-900">
            Monitor Usage
          </h4>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
            Track API consumption, rate limits, and service health metrics.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="py-16 sm:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600">
                Changelog & Release Notes
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Stay Up to Date with Orbit
              </h2>

              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                Track new features, platform improvements, API updates,
                deprecations, bug fixes, and security enhancements across
                every Orbit release.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
                🚀 New Features
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
                🔄 Version History
              </span>

              <span className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm">
                📢 Release Updates
              </span>
            </div>
          </div>

          {/* Update Categories Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition duration-300">
              <span className="text-green-600 font-bold text-sm sm:text-base">01</span>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                New Features
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Discover newly released capabilities, tools, APIs,
                integrations, and platform functionality.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition duration-300">
              <span className="text-blue-600 font-bold text-sm sm:text-base">02</span>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                Improvements
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Performance enhancements, usability refinements,
                reliability upgrades, and workflow optimizations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition duration-300">
              <span className="text-purple-600 font-bold text-sm sm:text-base">03</span>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                API Changes
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Review endpoint additions, parameter updates,
                response changes, and SDK compatibility updates.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition duration-300">
              <span className="text-orange-600 font-bold text-sm sm:text-base">04</span>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                Deprecations
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Stay informed about retiring features, outdated APIs,
                and recommended migration paths.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition duration-300">
              <span className="text-emerald-600 font-bold text-sm sm:text-base">05</span>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                Bug Fixes
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Review resolved issues, stability improvements,
                and platform reliability enhancements.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg transition duration-300">
              <span className="text-red-600 font-bold text-sm sm:text-base">06</span>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                Security Updates
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Monitor security improvements, vulnerability fixes,
                compliance enhancements, and policy updates.
              </p>
            </div>
          </div>

          {/* Release Timeline Container */}
          <div className="mt-12 sm:mt-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
              Release Timeline
            </h3>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">
              Follow the progression of Orbit releases and platform evolution.
            </p>

            {/* Visual Timeline component */}
            <div className="mt-8 relative border-l border-slate-200 pl-6 ml-2 space-y-8">
              
              <div className="relative">
                <div className="absolute -left-[32px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600 ring-1 ring-blue-600"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Version 3.2.0
                  </h4>
                  <p className="text-xs text-slate-500">June 2026</p>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    Added enhanced webhook monitoring, improved SDK performance,
                    and expanded authentication controls.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[32px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-slate-300 ring-1 ring-slate-300"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Version 3.1.0
                  </h4>
                  <p className="text-xs text-slate-500">April 2026</p>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    Introduced new API endpoints, workflow improvements,
                    and updated project management tools.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[32px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-slate-300 ring-1 ring-slate-300"></div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Version 3.0.0
                  </h4>
                  <p className="text-xs text-slate-500">January 2026</p>
                  <p className="mt-2 text-sm sm:text-base text-slate-600">
                    Major platform release featuring updated APIs,
                    improved architecture, and expanded integrations.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Migration Notes */}
          <div className="mt-8 sm:mt-12 rounded-3xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
              Migration Notes
            </h3>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">
              Important guidance for upgrading between versions safely.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  API Upgrades
                </h4>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
                  Update endpoint paths, request parameters,
                  and response handling where required.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  SDK Updates
                </h4>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
                  Upgrade SDK versions to maintain compatibility
                  with the latest Orbit services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  Deprecation Review
                </h4>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">
                  Replace deprecated features before removal
                  deadlines to avoid disruptions.
                </p>
              </div>
            </div>
          </div>

          {/* Version History Table-Grid */}
          <div className="mt-8 sm:mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
              Version History
            </h3>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                <div className="text-base sm:text-lg font-bold text-slate-900">v3.2.0</div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Latest stable release.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                <div className="text-base sm:text-lg font-bold text-slate-900">v3.1.0</div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Feature enhancements.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                <div className="text-base sm:text-lg font-bold text-slate-900">v3.0.0</div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Major platform release.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                <div className="text-base sm:text-lg font-bold text-slate-900">v2.x</div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Legacy supported versions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-12 sm:px-12 md:px-16 md:py-20">
            
            {/* Background Glow Elements */}
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Badge */}
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-blue-300 backdrop-blur">
                🚀 Build with Confidence
              </span>

              {/* Heading */}
              <h2 className="mt-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Ready to Build Faster with Orbit?
              </h2>

              <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-300">
                Everything you need to launch, scale, and manage modern
                applications—from comprehensive documentation and
                production-ready APIs to enterprise-grade security and
                dedicated support.
              </p>

              {/* Feature Highlights Grid */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    📚 Comprehensive Documentation
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">
                    Detailed guides, tutorials, references, and examples.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    ⚡ Production-Ready APIs
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">
                    Reliable APIs built for scale, performance, and uptime.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    🔒 Enterprise-Grade Security
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">
                    Advanced authentication, monitoring, and compliance.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    🤝 Dedicated Support
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">
                    Expert assistance whenever your team needs help.
                  </p>
                </div>
              </div>

              {/* Responsive Link-Button Navigation Suite */}
              <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
                
                <Link to="/Signup" className="w-full sm:w-auto"> 
                  <button className="group w-full inline-flex items-center justify-center rounded-2xl bg-white px-6 sm:px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">
                    Start Building
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </Link>
         
                <Link to="/APIReference2" className="w-full sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 sm:px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 active:scale-[0.98]">
                    Explore API Reference
                  </button>
                </Link>
                 
                <Link to="/CustomPlan" className="w-full sm:w-auto"> 
                  <button className="w-full inline-flex items-center justify-center rounded-2xl border border-white/15 bg-transparent px-6 sm:px-8 py-4 font-semibold text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white active:scale-[0.98]">
                    Contact Sales
                  </button>
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>

       </div>
    </>
  )
}

export default Guides2
