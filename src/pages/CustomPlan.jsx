import React, { useState } from "react";
import {
  Check,
  Clock3,
  Sparkles,
} from "lucide-react";

const features = [
  "Advanced Security",
  "Custom Workflows",
  "Dedicated Success Manager",
  "Priority Support",
  "API & Integrations",
  "Multi-Team Management",
];

const stats = [
  "99.99% Uptime",
  "24h Response",
  "Enterprise Security",
  "Global Teams",
];

const timelineSteps = [
  "Submit your request",
  "Requirements review",
  "Personal consultation",
  "Custom proposal",
  "Deployment & onboarding",
];

const enterpriseBenefits = [
  "Custom Pricing",
  "Dedicated Success Manager",
  "Advanced Security Controls",
  "Priority Support",
  "Custom Integrations",
  "Team Training",
  "SLA Options",
];

const trustMetrics = [
  ["500+", "Organizations"],
  ["50+", "Countries"],
  ["99.99%", "Reliability"],
  ["24/7", "Support"],
];

const CustomPlan = () => {
  const [selected, setSelected] = useState([]);

  const toggleFeature = (feature) => {
    setSelected((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-slate-600 uppercase shadow-sm">
              <Sparkles size={14} />
              Enterprise Solutions
            </span>

            <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight text-slate-950">
              Build an Orbit Plan
              <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Tailored To Your Team
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your organization and we'll create a customized
              solution designed around your workflows, security requirements,
              and growth goals.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl p-4 shadow-sm"
                >
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8">
          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 md:p-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Tell Us About Your Team
            </h2>

            <p className="mt-2 text-slate-500">
              Complete the form below and our team will reach out with a
              personalized proposal.
            </p>

            <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-violet-500"
                />

                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-violet-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-violet-500"
                />

                <select className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none bg-white focus:border-violet-500">
                  <option>Team Size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>501-1000</option>
                  <option>1000+</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Phone Number (Optional)"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-violet-500"
              />

              {/* Features */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">
                  Interested In
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <button
                      type="button"
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        selected.includes(feature)
                          ? "border-violet-500 bg-violet-50 font-medium text-violet-900"
                          : "border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                rows="5"
                placeholder="Describe your goals, requirements, or challenges..."
                className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none focus:border-violet-500 resize-none"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-950 py-4 text-white font-semibold transition-all hover:scale-[1.01]"
              >
                Request Custom Proposal
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* What Happens Next */}
            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-bold text-slate-900">
                What Happens Next?
              </h3>

              <div className="mt-8 space-y-6">
                {timelineSteps.map((step, i) => (
                  <div key={step} className="flex gap-4 items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white flex items-center justify-center font-semibold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-bold text-slate-900">
                Included With Enterprise
              </h3>

              <div className="mt-6 space-y-4">
                {enterpriseBenefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <Check
                      size={18}
                      className="text-emerald-600 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Card */}
            <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-8 text-white">
              <Clock3 size={28} />
              <h3 className="mt-4 text-xl font-bold">
                Average Response Time
              </h3>
              <p className="mt-2 text-white/90">
                Our enterprise specialists typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustMetrics.map(([value, label]) => (
            <div
              key={label}
              className="text-center rounded-3xl border border-slate-200 bg-white p-8"
            >
              <h3 className="text-3xl font-bold text-slate-950">{value}</h3>
              <p className="text-slate-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-slate-950 p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Scale with Orbit?
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Let's build a solution tailored specifically to your organization.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-xl bg-white text-slate-950 px-8 py-4 font-semibold hover:bg-slate-100 transition">
              Request Proposal
            </button>

            <button className="rounded-xl border border-slate-700 text-white px-8 py-4 font-semibold hover:bg-white/5 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomPlan;