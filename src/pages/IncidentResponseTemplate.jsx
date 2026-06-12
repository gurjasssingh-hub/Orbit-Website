import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Bell,
  Users,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  "Automated alert routing",
  "On-call escalation policies",
  "Incident timeline tracking",
  "Postmortem workflows",
  "Team notifications",
  "Status page integration",
];

const STEPS = [
  {
    title: "Alert Detection",
    desc: "Monitor systems and automatically detect incidents.",
    icon: Activity,
    iconColor: "text-blue-600 bg-blue-50",
  },
  {
    title: "Route Alerts",
    desc: "Send alerts to the correct team instantly.",
    icon: Bell,
    iconColor: "text-amber-600 bg-amber-50",
  },
  {
    title: "Escalation",
    desc: "Escalate unresolved incidents automatically.",
    icon: Users,
    iconColor: "text-purple-600 bg-purple-50",
  },
  {
    title: "Resolution",
    desc: "Track progress and close incidents efficiently.",
    icon: ShieldAlert,
    iconColor: "text-rose-600 bg-rose-50",
  },
];

const BENEFITS = [
  {
    title: "Faster Response",
    desc: "Reduce response times through automated routing and alerts."
  },
  {
    title: "Better Collaboration",
    desc: "Keep every stakeholder informed during critical incidents."
  },
  {
    title: "Complete Visibility",
    desc: "Maintain a full timeline and audit trail for every incident."
  }
];

const IncidentResponseTemplate = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Operations Template
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Incident Response
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed">
            Respond faster to incidents with automated alert routing,
            escalations, notifications, and resolution workflows designed
            for modern operations teams.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-sm hover:bg-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
              Deploy Template
            </button>

            <Link
              to="/Resourcespages/guides"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Template Overview
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              This workflow automatically detects incidents, routes alerts,
              escalates critical issues, notifies stakeholders, and creates
              a complete audit trail for post-incident analysis.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900">
              Template Details
            </h3>

            <div className="mt-6 divide-y divide-slate-100 border-t border-slate-100 text-sm">
              <div className="flex justify-between py-4">
                <span className="text-slate-500">Category</span>
                <span className="font-semibold text-slate-900">Operations</span>
              </div>

              <div className="flex justify-between py-4">
                <span className="text-slate-500">Setup Time</span>
                <span className="font-semibold text-slate-900">5 Minutes</span>
              </div>

              <div className="flex justify-between py-4">
                <span className="text-slate-500">Difficulty</span>
                <span className="font-semibold text-slate-900">Beginner</span>
              </div>

              <div className="flex justify-between py-4">
                <span className="text-slate-500">Automation Steps</span>
                <span className="font-semibold text-slate-900">12+ Steps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Workflow Process
          </h2>

          <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 p-8 bg-white hover:border-slate-300 hover:shadow-md transition duration-200"
                >
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${step.iconColor}`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Teams Use This Template
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {BENEFITS.map((benefit, i) => (
              <div key={benefit.title} className={`${i > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}>
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Ready to Deploy?
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Launch this incident response workflow in minutes and streamline your operational reliability.
          </p>

          <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-md hover:bg-black hover:-translate-y-0.5 transition active:translate-y-0">
            <span>Deploy Template</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default IncidentResponseTemplate;