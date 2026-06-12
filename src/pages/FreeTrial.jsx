import React from "react";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";

const trialBadges = [
  "14-Day Trial",
  "No Credit Card",
  "Cancel Anytime"
];

const trustedBrands = [
  "Nova",
  "Vertex",
  "Pulse",
  "Scale",
  "Flux"
];

const coreBenefits = [
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Automate repetitive work and focus on high-value tasks."
  },
  {
    icon: CheckCircle,
    title: "Team Collaboration",
    desc: "Keep projects, tasks, and communication perfectly aligned."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Built with modern security standards and data protection."
  }
];

const steps = [
  {
    num: "1",
    title: "Create Workspace",
    desc: "Sign up and launch your Orbit workspace instantly."
  },
  {
    num: "2",
    title: "Invite Your Team",
    desc: "Bring your team together with a single click."
  },
  {
    num: "3",
    title: "Start Scaling",
    desc: "Build workflows, automate tasks, and grow faster."
  }
];

const faqs = [
  {
    q: "Do I need a credit card?",
    a: "No. You can start your Orbit trial immediately without entering payment details."
  },
  {
    q: "What happens after the trial?",
    a: "You can choose a plan or continue exploring available free features."
  },
  {
    q: "Can I invite my whole team?",
    a: "Yes. The free trial includes collaboration features so your team can experience Orbit together."
  }
];

const FreeTrial = () => {
  return (
    <div className="bg-white text-slate-900 antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                Start Free — No Credit Card Required
              </span>

              <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Experience Orbit
                <br />
                Without Limits.
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Try Orbit free for 14 days and discover how modern teams
                automate workflows, collaborate faster, and stay productive
                from one powerful workspace.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-medium hover:scale-[1.02] transition">
                  Start Free Trial
                </button>

                <button className="px-8 py-4 rounded-xl border border-slate-300 font-medium hover:bg-slate-50 transition">
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                {trialBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-blue-600" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Start Your Trial
                </h3>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  />

                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
                  />

                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-medium hover:bg-black transition flex items-center justify-center gap-2"
                  >
                    Create Free Workspace
                    <ArrowRight size={18} />
                  </button>
                </form>

                <p className="text-sm text-slate-500 mt-4 text-center">
                  By continuing, you agree to Orbit's Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 mb-8 text-sm font-medium uppercase tracking-wider">
            Trusted by fast-growing teams worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-slate-400 font-semibold text-lg items-center">
            {trustedBrands.map((brand) => (
              <div key={brand} className="hover:text-slate-600 transition duration-200 select-none">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Everything You Need to Move Faster
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Orbit combines collaboration, automation, and AI-powered
              workflows into one seamless platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition bg-white">
                  <IconComponent className="mb-5 text-blue-600" size={32} />
                  <h3 className="font-semibold text-xl mb-3 text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
            Get Started in Minutes
          </h2>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step) => (
              <div key={step.title} className="text-center relative z-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-2xl p-6 bg-white hover:border-slate-300 transition">
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Your Team's Next Chapter Starts Here
          </h2>

          <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals building faster, smarter workflows
            with Orbit.
          </p>

          <button className="mt-10 px-10 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default FreeTrial;