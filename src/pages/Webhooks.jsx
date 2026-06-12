import React from 'react'
import { Link } from 'react-router-dom'

const Webhooks = () => {
  return (
    <>
      <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

<section
        id="webhooks-introduction"
        className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Introduction to Webhooks
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Receive Orbit Events in Real Time
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Orbit Webhooks allow your applications to receive real-time event
              notifications whenever activity occurs within your workspace.
              Instead of repeatedly checking for updates, Orbit automatically
              delivers event data directly to your endpoint.
            </p>
          </div>

          {/* Hero Architecture */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-8 sm:mb-10 text-center">
              How Orbit Webhooks Work
            </h3>

            {/* Changed from grid-cols-5 to flex-col on mobile and flex-row on desktop for better step mapping */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/3 rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="text-sm font-medium text-slate-500">Step 1</div>
                <div className="mt-2 font-semibold text-slate-900">
                  Event Occurs
                </div>
              </div>

              <div className="text-center text-slate-400 text-2xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/3 rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="text-sm font-medium text-slate-500">Step 2</div>
                <div className="mt-2 font-semibold text-slate-900">
                  Orbit Creates Event
                </div>
              </div>

              <div className="text-center text-slate-400 text-2xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/3 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-center">
                <div className="text-sm font-medium text-slate-400">Step 3</div>
                <div className="mt-2 font-semibold text-white">
                  Your Endpoint Receives Data
                </div>
              </div>
            </div>
          </div>

          {/* Core Concepts */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Core Concepts
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="font-semibold text-slate-900">
                  What Are Webhooks?
                </h4>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Webhooks are automated HTTP notifications sent by Orbit when
                  specific events occur. They enable systems to communicate
                  instantly without manual intervention.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="font-semibold text-slate-900">
                  Real-Time Delivery
                </h4>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Events are pushed to your application immediately, helping
                  teams react to changes as they happen.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:col-span-2 lg:col-span-1">
                <h4 className="font-semibold text-slate-900">
                  Event-Driven Architecture
                </h4>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Build scalable systems that respond to business events instead
                  of relying on continuous API requests.
                </p>
              </div>
            </div>
          </div>

          {/* Push vs Polling */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Push vs Polling
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
                <h4 className="font-semibold text-red-800">
                  Traditional Polling
                </h4>
                <ul className="mt-5 space-y-3 text-red-700 text-sm sm:text-base">
                  <li>• Repeated API requests</li>
                  <li>• Higher infrastructure costs</li>
                  <li>• Delayed updates</li>
                  <li>• Increased rate-limit usage</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
                <h4 className="font-semibold text-emerald-800">
                  Orbit Webhooks
                </h4>
                <ul className="mt-5 space-y-3 text-emerald-700 text-sm sm:text-base">
                  <li>• Instant event delivery</li>
                  <li>• Lower API consumption</li>
                  <li>• Better scalability</li>
                  <li>• Real-time automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Use Cases */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Common Use Cases
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Workflow Automation',
                  desc: 'Trigger actions automatically when workflows complete.',
                },
                {
                  title: 'Notifications',
                  desc: 'Send alerts whenever important events occur.',
                },
                {
                  title: 'Analytics Pipelines',
                  desc: 'Stream event data into reporting systems.',
                },
                {
                  title: 'Third-Party Integrations',
                  desc: 'Keep external tools synchronized with Orbit.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Orbit Flow Example */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
            <div className="border-b border-slate-800 px-6 py-4">
              <span className="text-sm text-slate-300">
                Example Event Flow
              </span>
            </div>
            {/* Added code element wrapper and smooth scrolling */}
            <pre className="overflow-x-auto p-6 text-sm text-slate-300 whitespace-pre md:whitespace-pre-line lg:whitespace-pre">
              <code>
{`User creates a project
      ↓
Orbit generates project.created
      ↓
Webhook sent to your endpoint
      ↓
Application receives payload
      ↓
Automation executes instantly`}
              </code>
            </pre>
          </div>

          {/* Navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
            <button className="w-full sm:w-auto order-2 sm:order-1 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Webhooks Overview
            </button>
            <button className="w-full sm:w-auto order-1 sm:order-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition">
              Next: Creating an Endpoint →
            </button>
          </div>
        </div>
</section>

 <section
        id="creating-webhook-endpoint"
        className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Creating a Webhook Endpoint
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Configure a Secure Webhook Receiver
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Before Orbit can deliver events, you'll need a publicly accessible
              endpoint capable of receiving HTTPS requests. This section covers
              endpoint requirements, local testing, and webhook registration.
            </p>
          </div>

          {/* Setup Flow */}
          <div className="mt-14">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Setup Process
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                'Create Endpoint',
                'Enable HTTPS',
                'Register Webhook',
                'Receive Events',
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-3xl border border-slate-200 p-4 sm:p-6 text-center"
                >
                  <div className="text-xs font-semibold text-slate-500">
                    STEP {index + 1}
                  </div>
                  <div className="mt-3 font-semibold text-slate-900 text-sm sm:text-base break-words">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Endpoint Requirements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="font-semibold text-slate-900">
                  Public Accessibility
                </h4>
                <p className="mt-4 text-sm sm:text-base text-slate-600">
                  Orbit must be able to reach your endpoint over the public
                  internet to deliver webhook events.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="font-semibold text-slate-900">
                  HTTPS Required
                </h4>
                <p className="mt-4 text-sm sm:text-base text-slate-600">
                  All production endpoints must use HTTPS to ensure secure
                  transmission of event payloads.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:col-span-2 lg:col-span-1">
                <h4 className="font-semibold text-slate-900">Fast Responses</h4>
                <p className="mt-4 text-sm sm:text-base text-slate-600">
                  Return a successful response quickly and process events
                  asynchronously whenever possible.
                </p>
              </div>
            </div>
          </div>

          {/* Supported Methods */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Supported HTTP Methods
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
                <div className="font-bold text-emerald-700">POST</div>
                <p className="mt-3 text-sm sm:text-base text-emerald-800">
                  Orbit delivers webhook events using HTTP POST requests.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="font-bold text-slate-700">Content-Type</div>
                <p className="mt-3 text-sm sm:text-base text-slate-700 font-mono">
                  application/json
                </p>
              </div>
            </div>
          </div>

          {/* Example Endpoint */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-slate-900">
                Example Endpoint URL
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                A valid webhook endpoint should be publicly accessible and
                capable of handling incoming POST requests.
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 sm:p-5 overflow-x-auto">
                <code className="text-slate-900 font-medium text-xs sm:text-sm whitespace-nowrap">
                  https://your-app.com/api/webhooks/orbit
                </code>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
              <div className="border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-300">Sample Request</span>
              </div>
              <pre className="overflow-x-auto p-6 text-xs sm:text-sm text-slate-300">
                <code>
{`POST /api/webhooks/orbit
Content-Type: application/json

{
  "event": "project.created",
  "id": "evt_123",
  "data": { ... }
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Local Testing */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Testing Locally
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              During development, you can expose local endpoints using tunneling
              tools to receive real webhook traffic before deployment.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {['Run Local Server', 'Expose Public URL', 'Register Webhook'].map(
                (step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl bg-white border border-slate-200 p-5 text-center"
                  >
                    <div className="text-xs font-semibold text-slate-500">
                      STEP {index + 1}
                    </div>
                    <div className="mt-2 font-medium text-slate-900 text-sm sm:text-base">
                      {step}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Registration Process */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Webhook Registration
            </h3>

            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Choose Event Types',
                  'Enter Endpoint URL',
                  'Generate Signing Secret',
                  'Save Configuration',
                ].map((step, index) => (
                  <div key={step}>
                    <div className="text-sm font-semibold text-slate-500">
                      STEP {index + 1}
                    </div>
                    <div className="mt-2 font-medium text-slate-900 text-sm sm:text-base break-words">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
            <button className="w-full sm:w-auto order-2 sm:order-1 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Introduction
            </button>
            <button className="w-full sm:w-auto order-1 sm:order-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition">
              Next: Event Types →
            </button>
          </div>
        </div>
</section>
 
<section
        id="event-types"
        className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Event Types
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Subscribe to Orbit Events
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Orbit emits webhook events whenever important activity occurs within
              your workspace. Subscribe only to the events you need to build
              efficient and scalable integrations.
            </p>
          </div>

          {/* Event Architecture */}
          <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Event Delivery Flow
            </h3>

            {/* Managed via flex-column on mobile and flex-row on desktop for clear visual flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/3 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                User Action
              </div>

              <div className="text-center text-slate-400 text-2xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/3 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                Orbit Generates Event
              </div>

              <div className="text-center text-slate-400 text-2xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/3 rounded-2xl bg-slate-900 p-5 text-center text-white font-medium">
                Webhook Delivered
              </div>
            </div>
          </div>

          {/* Event Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Event Categories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Users */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-slate-900">
                  User Events
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Triggered when user accounts are created, updated, or removed.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    user.created
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    user.updated
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    user.deleted
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-slate-900">
                  Project Events
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Track project lifecycle changes across your workspace.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    project.created
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    project.updated
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    project.deleted
                  </div>
                </div>
              </div>

              {/* Workflows */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-slate-900">
                  Workflow Events
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Monitor automation activity and execution status.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    workflow.started
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    workflow.completed
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    workflow.failed
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-slate-900">
                  Analytics Events
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Receive updates when analytics data becomes available.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    analytics.generated
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    analytics.updated
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-slate-900">
                  Notification Events
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Stay informed when notifications are sent or delivered.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    notification.sent
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 font-mono text-sm break-all">
                    notification.delivered
                  </div>
                </div>
              </div>

              {/* Subscriptions */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 bg-slate-50 md:col-span-2 lg:col-span-1">
                <h4 className="text-lg font-semibold text-slate-900">
                  Event Subscriptions
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  Subscribe to specific events to reduce unnecessary webhook traffic.
                </p>
                <div className="mt-6 text-sm text-slate-500 italic">
                  Recommended for performance optimization.
                </div>
              </div>
            </div>
          </div>

          {/* Naming Convention */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-slate-900">
                Event Naming Convention
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Orbit follows a predictable <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-900">resource.action</code> format, making
                events easy to understand and filter.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <code className="text-base sm:text-lg font-mono text-slate-900 font-bold block">
                  resource.action
                </code>
                <div className="mt-4 text-xs sm:text-sm text-slate-500">
                  Examples: user.created, project.deleted, workflow.completed
                </div>
              </div>
            </div>

            {/* Example Event */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
              <div className="border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-300">Example Event</span>
              </div>
              <pre className="overflow-x-auto p-6 text-xs sm:text-sm text-slate-300">
                <code>
{`{
  "event": "project.created",
  "id": "evt_7b2d91",
  "created_at": "2026-01-15T12:30:00Z",
  "data": {
    "project_id": "proj_123"
  }
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
            <button className="w-full sm:w-auto order-2 sm:order-1 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Creating an Endpoint
            </button>
            <button className="w-full sm:w-auto order-1 sm:order-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition">
              Next: Payload Structure →
            </button>
          </div>
        </div>
</section>

<section
        id="payload-structure"
        className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Webhook Payload Structure
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Understand Orbit Event Payloads
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every webhook delivered by Orbit contains a standardized JSON payload.
              This consistent structure makes it easy to process events, validate
              data, and build reliable integrations across your applications.
            </p>
          </div>

          {/* Overview Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'JSON Format',
                desc: 'All webhook events are delivered as JSON payloads.',
              },
              {
                title: 'Event Metadata',
                desc: 'Includes event type, identifiers, and timestamps.',
              },
              {
                title: 'Unique Event IDs',
                desc: 'Each event contains a globally unique identifier.',
              },
              {
                title: 'Timestamps',
                desc: 'Track exactly when the event occurred.',
              },
              {
                title: 'Resource Objects',
                desc: 'Contains the affected resource data.',
              },
              {
                title: 'Schema Consistency',
                desc: 'Predictable structure across all Orbit events.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-6 sm:p-7 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Payload Anatomy */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Payload Anatomy
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Field Explanation */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
                <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                  <div className="font-mono text-sm font-semibold text-slate-900">
                    event
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    The event type that triggered the webhook.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                  <div className="font-mono text-sm font-semibold text-slate-900">
                    id
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Unique identifier for the webhook event.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                  <div className="font-mono text-sm font-semibold text-slate-900">
                    created_at
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    ISO 8601 timestamp indicating when the event occurred.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
                  <div className="font-mono text-sm font-semibold text-slate-900">
                    data
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    Contains the affected Orbit resource object.
                  </p>
                </div>
              </div>

              {/* Visual Structure */}
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
                <h4 className="font-semibold text-slate-900">
                  Payload Hierarchy
                </h4>

                <div className="mt-8 space-y-4 text-sm sm:text-base font-medium">
                  <div className="rounded-xl bg-slate-900 text-white p-4">
                    Webhook Event
                  </div>
                  <div className="ml-4 sm:ml-6 rounded-xl bg-slate-100 p-4 text-slate-800">
                    Event Metadata
                  </div>
                  <div className="ml-8 sm:ml-12 rounded-xl bg-slate-50 p-4 text-slate-600 font-mono text-xs sm:text-sm">
                    Event ID
                  </div>
                  <div className="ml-8 sm:ml-12 rounded-xl bg-slate-50 p-4 text-slate-600 font-mono text-xs sm:text-sm">
                    Timestamp
                  </div>
                  <div className="ml-4 sm:ml-6 rounded-xl bg-slate-100 p-4 text-slate-800">
                    Resource Data
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Payload */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Sample Payload
            </h3>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
              <div className="border-b border-slate-800 px-6 py-4">
                <span className="text-sm text-slate-300">project.created</span>
              </div>
              <pre className="overflow-x-auto p-6 text-xs sm:text-sm text-slate-300">
                <code>
{`{
  "event": "project.created",
  "id": "evt_4c8a72b9",
  "created_at": "2026-06-06T10:30:00Z",
  "data": {
    "project_id": "proj_123",
    "name": "Marketing Dashboard",
    "status": "active"
  }
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Schema Consistency */}
          <div className="mt-16 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Consistent Across Every Event
            </h3>
            <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Regardless of whether you're handling user events, project events,
              workflow events, or notifications, Orbit maintains the same payload
              structure. This consistency reduces complexity and simplifies
              webhook processing logic.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Standard Fields',
                'Predictable Schemas',
                'Version Stability',
                'Easy Validation',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white border border-slate-200 p-4 text-center font-medium text-slate-900 shadow-sm text-xs sm:text-sm flex items-center justify-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Examples */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Common Event Examples
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['user.created', 'project.created', 'workflow.completed'].map(
                (event) => (
                  <div
                    key={event}
                    className="rounded-3xl border border-slate-200 p-6 sm:p-7"
                  >
                    <div className="font-mono text-sm text-slate-900 font-semibold bg-slate-50 rounded-md px-2 py-1 inline-block">
                      {event}
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Uses the same payload structure while providing
                      event-specific resource data.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
            <button className="w-full sm:w-auto order-2 sm:order-1 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Event Types
            </button>
            <button className="w-full sm:w-auto order-1 sm:order-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition">
              Next: Security & Verification →
            </button>
          </div>
        </div>
</section>

<section
        id="security-verification"
        className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Security & Signature Verification
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Verify Every Webhook with Confidence
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Orbit signs every webhook request to ensure authenticity and
              integrity. Validate signatures, protect against replay attacks,
              and securely manage signing secrets to build trusted integrations.
            </p>
          </div>

          {/* Security Features */}
          <div className="mt-14">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Security Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Signing Secrets",
                  desc: "Unique secrets generated for each webhook endpoint."
                },
                {
                  title: "Signature Headers",
                  desc: "Every request includes verification headers."
                },
                {
                  title: "Request Validation",
                  desc: "Reject forged or tampered requests."
                },
                {
                  title: "Replay Protection",
                  desc: "Prevent attackers from reusing old requests."
                },
                {
                  title: "Secret Rotation",
                  desc: "Rotate secrets without service interruption."
                },
                {
                  title: "HTTPS Enforcement",
                  desc: "Secure communication between Orbit and your app."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-6 sm:p-7 hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Flow */}
          <div className="mt-16 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Signature Verification Flow
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/3 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                Event Triggered
              </div>

              <div className="text-center text-slate-400 text-2xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/3 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                Payload Signed
              </div>

              <div className="text-center text-slate-400 text-2xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/3 rounded-2xl bg-slate-900 text-white p-5 text-center font-medium">
                Verify & Process
              </div>
            </div>
          </div>

          {/* Headers + Code */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Headers */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 flex flex-col">
              <div className="border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-300">
                  Example Request Headers
                </span>
              </div>
              <pre className="overflow-x-auto p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
                <code>
{`POST /api/webhooks/orbit

Content-Type: application/json
Orbit-Signature: sha256=7d9a3f4...
Orbit-Timestamp: 1749200000`}
                </code>
              </pre>
            </div>

            {/* Verification */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 flex flex-col">
              <div className="border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-300">
                  Signature Verification
                </span>
              </div>
              <pre className="overflow-x-auto p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
                <code>
{`import crypto from "crypto";

const expectedSignature =
  crypto
    .createHmac(
      "sha256",
      WEBHOOK_SECRET
    )
    .update(payload)
    .digest("hex");

if (
  receivedSignature !==
  expectedSignature
) {
  throw new Error(
    "Invalid signature"
  );
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Replay Protection */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Replay Attack Protection
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
                <h4 className="font-semibold text-slate-900 text-lg">
                  Recommended Validation
                </h4>
                <ul className="mt-5 space-y-3 text-sm sm:text-base text-slate-600">
                  <li>• Verify request timestamps</li>
                  <li>• Reject expired requests</li>
                  <li>• Track processed event IDs</li>
                  <li>• Prevent duplicate execution</li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 flex flex-col">
                <div className="border-b border-slate-800 px-5 py-4">
                  <span className="text-sm text-slate-300">
                    Timestamp Validation
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 text-xs sm:text-sm text-slate-300 whitespace-pre">
                  <code>
{`const maxAge = 300;

if (
  Date.now()/1000 -
  timestamp >
  maxAge
) {
  throw new Error(
    "Expired webhook"
  );
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Secret Rotation */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Secret Rotation
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {[
                "Generate New Secret",
                "Update Application",
                "Enable Dual Validation",
                "Retire Old Secret"
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 text-center flex flex-col justify-center bg-white shadow-sm"
                >
                  <div className="text-2xs sm:text-xs font-bold text-slate-400 tracking-wider">
                    STEP {index + 1}
                  </div>
                  <div className="mt-3 text-xs sm:text-sm md:text-base font-semibold text-slate-900">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mt-16 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Security Best Practices
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                "Always verify signatures",
                "Use HTTPS endpoints",
                "Store secrets in environment variables",
                "Rotate secrets regularly",
                "Validate timestamps",
                "Monitor failed verification attempts"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 text-sm font-medium text-slate-800 shadow-2xs"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Security Checklist */}
          <div className="mt-16 rounded-2xl sm:rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-emerald-900">
              Security Checklist
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base font-medium text-emerald-800">
              <div>✓ HTTPS enabled</div>
              <div>✓ Signature verification implemented</div>
              <div>✓ Timestamp validation active</div>
              <div>✓ Replay protection configured</div>
              <div>✓ Secrets stored securely</div>
              <div>✓ Secret rotation policy established</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
            <button className="w-full sm:w-auto order-2 sm:order-1 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Payload Structure
            </button>
            <button className="w-full sm:w-auto order-1 sm:order-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition">
              Next: Delivery & Monitoring →
            </button>
          </div>
        </div>
</section>

      <section
        id="delivery-monitoring"
        className="rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-12 shadow-sm"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Delivery, Retries & Monitoring
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Reliable Webhook Delivery
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Orbit automatically delivers webhook events, retries failed
              requests, and provides detailed monitoring tools to help
              maintain reliable integrations at scale.
            </p>
          </div>

          {/* Delivery Lifecycle */}
          <div className="mt-14 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Delivery Lifecycle
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/4 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                Event Generated
              </div>

              <div className="text-center text-slate-400 text-xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/4 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                Queued
              </div>

              <div className="text-center text-slate-400 text-xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/4 rounded-2xl bg-white border border-slate-200 p-5 text-center text-slate-900 font-medium shadow-sm">
                Delivery Attempt
              </div>

              <div className="text-center text-slate-400 text-xl rotate-90 md:rotate-0 my-1 md:my-0">
                →
              </div>

              <div className="w-full md:w-1/4 rounded-2xl bg-slate-900 text-white p-5 text-center font-medium">
                Success
              </div>
            </div>
          </div>

          {/* Reliability Features */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Reliability Features
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Automatic Delivery",
                  desc: "Events are dispatched immediately after creation."
                },
                {
                  title: "Retry System",
                  desc: "Failed deliveries are automatically retried."
                },
                {
                  title: "Event History",
                  desc: "Review historical deliveries and outcomes."
                },
                {
                  title: "Status Tracking",
                  desc: "Monitor webhook health and delivery status."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 p-6 sm:p-7 hover:shadow-xs transition"
                >
                  <h4 className="font-semibold text-slate-900 text-base sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Retry Policy */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-slate-900">
                Retry Policy
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Orbit automatically retries temporary failures to maximize
                delivery success rates and prevent event loss.
              </p>
              <ul className="mt-6 space-y-3 text-sm sm:text-base text-slate-600">
                <li>• Automatic retry scheduling</li>
                <li>• Temporary outage recovery</li>
                <li>• Delivery preservation</li>
                <li>• Intelligent retry handling</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Exponential Backoff
              </h3>
              <div className="space-y-2.5">
                {[
                  "Attempt 1 — Immediate",
                  "Attempt 2 — 1 minute",
                  "Attempt 3 — 5 minutes",
                  "Attempt 4 — 15 minutes",
                  "Attempt 5 — 1 hour",
                  "Attempt 6 — 6 hours",
                ].map((attempt) => (
                  <div
                    key={attempt}
                    className="rounded-xl bg-slate-50 p-3 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    {attempt}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Failed Deliveries Table */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Common Delivery Failures
            </h3>
            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {[
                      ["400", "Bad Request"],
                      ["401", "Unauthorized"],
                      ["403", "Forbidden"],
                      ["404", "Endpoint Not Found"],
                      ["429", "Rate Limited"],
                      ["500", "Server Error"],
                    ].map(([code, desc]) => (
                      <tr key={code} className="hover:bg-slate-50/50 transition">
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-slate-900">
                          {code}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Monitoring Dashboard */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Monitoring Dashboard
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Delivery Logs",
                "Event History",
                "Failed Events",
                "Replay Actions"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 text-center bg-white shadow-xs font-semibold text-slate-800 text-sm sm:text-base flex items-center justify-center hover:border-slate-300 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Replay Failed Events */}
          <div className="mt-16 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Replay Failed Events
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Administrators can manually replay previously failed webhook
              deliveries after resolving endpoint or infrastructure issues.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Inspect Failure",
                "Fix Endpoint",
                "Replay Event"
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-5 text-center shadow-2xs"
                >
                  <div className="text-2xs font-bold text-slate-400 tracking-wider">
                    STEP {index + 1}
                  </div>
                  <div className="mt-2 font-semibold text-slate-900 text-sm sm:text-base">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Delivery Success Rate",
              "Average Response Time",
              "Failed Delivery Count"
            ].map((metric) => (
              <div
                key={metric}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 bg-white shadow-xs"
              >
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Metric
                </div>
                <div className="mt-2 text-base sm:text-lg font-bold text-slate-900">
                  {metric}
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 rounded-2xl sm:rounded-[32px] bg-slate-900 p-6 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Monitor Every Event with Confidence
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Track deliveries, diagnose failures, replay events,
              and maintain reliable webhook integrations at scale.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {/* Note: In production replace <a href="..."> with your router implementation if needed */}
              <a href="/Featurespages/Monitoring#dashboard" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                  Open Monitoring Dashboard
                </button>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
            <button className="w-full sm:w-auto order-2 sm:order-1 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
              ← Security & Verification
            </button>
            <button className="w-full sm:w-auto order-1 sm:order-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition">
              Webhooks Complete ✓
            </button>
          </div>
        </div>
      </section>

      </div>
    </>
  )
}

export default Webhooks
