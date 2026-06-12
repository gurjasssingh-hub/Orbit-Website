import React from 'react'
import PricingHero from '../components/ui/PricingHero'
import { Check, Minus } from "lucide-react";
import FAQSection from '../components/ui/FAQSection';
import TrustedLogos from '../components/ui/TrustedLogos';
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingFaqs = [
    {
      question: "Can I change plans later?",
      answer: "Yes. You can upgrade or downgrade your plan at any time as your needs evolve.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes. Explore Orbit's features with a free trial before choosing a plan.",
    },
    {
      question: "Do you offer pricing for teams?",
      answer: "Absolutely. Orbit includes plans designed for growing teams and organizations.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. There are no long-term contracts and you can cancel whenever you choose.",
    },
    {
      question: "Is my data secure?",
      answer: "Orbit uses modern security practices, encryption, and secure infrastructure.",
    },
    {
      question: "What payment methods are supported?",
      answer: "Major credit cards and additional payment options are supported.",
    },
  ];

  return (
    <>
      <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 bg-[#f7f9fc] overflow-hidden'>
        
        {/* HERO SECTION */}
        <section>
          <PricingHero />
        </section>


        {/* COMPARISON TABLE SECTION */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full border border-slate-200 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-600 bg-white shadow-sm">
                Compare Plans
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Everything you need,
                <span className="block mt-1 sm:mt-2">at every stage of growth.</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600">
                Compare features, limits, and capabilities across plans.
              </p>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="mt-12 sm:mt-16 lg:mt-20 overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white -mx-4 sm:mx-0">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 sm:px-8 py-5 text-sm sm:text-base font-semibold text-slate-900 w-2/5">Features</th>
                    <th className="px-6 sm:px-8 py-5 text-center text-sm sm:text-base font-semibold text-slate-900 w-1/5">Starter</th>
                    <th className="bg-blue-50/60 px-6 sm:px-8 py-5 text-center text-sm sm:text-base font-bold text-slate-900 w-1/5">Pro</th>
                    <th className="px-6 sm:px-8 py-5 text-center text-sm sm:text-base font-semibold text-slate-900 w-1/5">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                  {/* AI & Productivity */}
                  <tr className="bg-slate-100/80">
                    <td colSpan="4" className="px-6 sm:px-8 py-3.5 font-bold text-slate-900 text-sm sm:text-base">
                      AI & Productivity
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">AI Assistant</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">AI Actions / Month</td>
                    <td className="text-center py-4 text-slate-600">1,000</td>
                    <td className="bg-blue-50/40 text-center py-4 font-bold text-slate-900">25,000</td>
                    <td className="text-center py-4 text-slate-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Meeting Summaries</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Knowledge Search</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>

                  {/* Automation */}
                  <tr className="bg-slate-100/80">
                    <td colSpan="4" className="px-6 sm:px-8 py-3.5 font-bold text-slate-900 text-sm sm:text-base">
                      Automation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Workflow Automation</td>
                    <td className="text-center py-4 text-slate-600">10</td>
                    <td className="bg-blue-50/40 text-center py-4 font-bold text-slate-900">Unlimited</td>
                    <td className="text-center py-4 text-slate-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Custom Workflows</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Scheduled Automations</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Advanced Automation Logic</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>

                  {/* Collaboration */}
                  <tr className="bg-slate-100/80">
                    <td colSpan="4" className="px-6 sm:px-8 py-3.5 font-bold text-slate-900 text-sm sm:text-base">
                      Collaboration
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Users Included</td>
                    <td className="text-center py-4 text-slate-600">1</td>
                    <td className="bg-blue-50/40 text-center py-4 font-bold text-slate-900">10</td>
                    <td className="text-center py-4 text-slate-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Shared Workspace</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Team Notes</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Role Permissions</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>

                  {/* Storage & Integrations */}
                  <tr className="bg-slate-100/80">
                    <td colSpan="4" className="px-6 sm:px-8 py-3.5 font-bold text-slate-900 text-sm sm:text-base">
                      Storage & Integrations
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Storage</td>
                    <td className="text-center py-4 text-slate-600">5 GB</td>
                    <td className="bg-blue-50/40 text-center py-4 font-bold text-slate-900">100 GB</td>
                    <td className="text-center py-4 text-slate-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Integrations</td>
                    <td className="text-center py-4 text-slate-600">5</td>
                    <td className="bg-blue-50/40 text-center py-4 font-bold text-slate-900">50+</td>
                    <td className="text-center py-4 text-slate-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">API Access</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Custom Integrations</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>

                  {/* Security & Support */}
                  <tr className="bg-slate-100/80">
                    <td colSpan="4" className="px-6 sm:px-8 py-3.5 font-bold text-slate-900 text-sm sm:text-base">
                      Security & Support
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">SSO Authentication</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Advanced Security</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Priority Support</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4 font-semibold text-slate-900"><div className="inline-flex items-center justify-center text-blue-600"><Check size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                  <tr>
                    <td className="px-6 sm:px-8 py-4 font-medium text-slate-900">Dedicated Success Manager</td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="bg-blue-50/40 text-center py-4"><div className="inline-flex items-center justify-center text-slate-300"><Minus size={18}/></div></td>
                    <td className="text-center py-4"><div className="inline-flex items-center justify-center text-slate-900"><Check size={18}/></div></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* INCLUDED IN EVERY PLAN SECTION */}
        <section className="py-16 sm:py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-600 shadow-sm">
                Included In Every Plan
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Powerful foundations,
                <span className="block mt-1 sm:mt-2">available to every customer.</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                Every Orbit plan includes the essential tools, security,
                and collaboration capabilities your team needs to work
                smarter from day one.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🔒", title: "Enterprise Security", desc: "Advanced encryption, secure infrastructure, and privacy-first architecture protect your data at every level." },
                { icon: "⚡", title: "Fast Onboarding", desc: "Get your workspace running in minutes with intuitive setup flows and guided experiences." },
                { icon: "🚀", title: "Unlimited Projects", desc: "Build, organize, and scale as many projects as your team requires without restrictions." },
                { icon: "📱", title: "Mobile Access", desc: "Stay connected from anywhere with seamless access across desktop, tablet, and mobile devices." },
                { icon: "🔄", title: "Continuous Updates", desc: "New features, improvements, and performance enhancements delivered regularly." },
                { icon: "🤝", title: "Community Support", desc: "Access tutorials, resources, best practices, and a growing community of Orbit users." }
              ].map((card, idx) => (
                <div key={idx} className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-slate-100 text-lg sm:text-xl select-none">
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Everything you need to get started.
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                    No hidden fees. No complicated add-ons.
                    Every Orbit plan is built to deliver value from day one.
                  </p>
                </div>
                <Link to="/FreeTrial" className="w-full sm:w-auto shrink-0">
                  <button className="w-full sm:w-auto rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black active:scale-[0.99]">
                    Start Free Trial
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* PROVEN RESULTS SECTION */}
        <section className="py-16 sm:py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-600 shadow-sm">
                Proven Results
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Built to create
                <span className="block mt-1 sm:mt-2">measurable impact.</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600">
                Orbit helps teams work faster, reduce operational overhead,
                and unlock productivity across every workflow.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                  70%
                </h3>
                <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">
                  Faster Workflows
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Streamline repetitive processes through automation and AI.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:p-10">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                  10+
                </h3>
                <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">
                  Hours Saved Weekly
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Give teams more time to focus on meaningful work.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 sm:col-span-2 lg:col-span-1">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                  95%
                </h3>
                <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">
                  Team Satisfaction
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Better collaboration, communication, and visibility.
                </p>
              </div>
            </div>

            {/* Value Cards Grid */}
            <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Reduce Repetitive Work", desc: "Automate recurring tasks and remove manual bottlenecks." },
                { title: "Faster Collaboration", desc: "Keep teams aligned through shared workspaces and updates." },
                { title: "Better Meeting Management", desc: "Capture notes, summaries, and action items automatically." },
                { title: "Centralized Knowledge", desc: "Organize company information in one searchable location." },
                { title: "Improved Productivity", desc: "Spend less time managing work and more time delivering it." },
                { title: "Scale With Confidence", desc: "Grow your operations without increasing complexity." }
              ].map((value, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm p-5 sm:p-6 md:p-8">
                  <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}
        <section>
          <FAQSection title="Pricing Questions" faqs={pricingFaqs} />
        </section>

        {/* TRUSTED LOGOS SECTION */}
        <section className="mt-20 sm:mt-28 lg:mt-32">
          <h3 className="text-slate-500 text-lg sm:text-xl md:text-2xl font-medium text-center mb-8 sm:mb-10">
            Trusted by the best teams
          </h3>
          <TrustedLogos />
        </section>

        {/* CTA BOTTOM BANNER SECTION */}
        <section className="bg-white py-20 sm:py-28 lg:py-36 -mx-4 sm:mx-0 rounded-[40px] mt-20 sm:mt-28 lg:mt-32 border border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-6 sm:p-12 md:p-24 py-16 text-center">
              
              {/* Background Glow */}
              <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute left-1/2 top-0 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-blue-100 opacity-60 blur-3xl" />
              </div>

              <div className="relative z-10 mx-auto max-w-4xl">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-600 shadow-sm">
                  Get Started Today
                </span>

                <h2 className="mt-6 sm:mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
                  Ready to transform
                  <span className="block mt-1 sm:mt-2">the way your team works?</span>
                </h2>

                <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
                  Streamline workflows, automate repetitive work, and empower
                  your team with AI-driven productivity from day one.
                </p>

                {/* Benefits Badges */}
                <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs">
                    ⚡ Start in minutes
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs">
                    ✓ No setup hassle
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs">
                    ↗ Scale as you grow
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-xs">
                    🚀 Built for modern teams
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
                  <Link to="/FreeTrial" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto rounded-2xl bg-slate-900 px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black shadow-md active:scale-[0.99]">
                      Start Free Trial
                    </button>
                  </Link>
                  <Link to="/book-demo" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm sm:text-base font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 shadow-sm active:scale-[0.99]">
                      Book a Demo
                    </button>
                  </Link>
                </div>

                <p className="mt-8 sm:mt-10 text-xs sm:text-sm text-slate-500">
                  No credit card required • Cancel anytime • Enterprise-grade security
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Pricing