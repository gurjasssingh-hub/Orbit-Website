import React, { useState } from "react";
import { Link } from 'react-router-dom'


const SecurityReview = () => {
  const [openReview, setOpenReview] = useState(false);
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">


      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-20 md:py-28">


        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full top-[-200px] left-[-200px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]" />
          <div className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-200px] right-[-200px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px]" />
        </div>


        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-medium tracking-widest uppercase text-xs sm:text-sm">
            Security & Trust
          </p>


          <h1 className="text-3xl font-semibold leading-tight mt-3 sm:text-4xl md:text-5xl md:mt-4 md:text-6xl">
            Schedule a Security Review with Orbit
          </h1>


          <p className="text-gray-400 mt-4 text-base leading-relaxed sm:mt-6 sm:text-lg">
            Understand how Orbit protects your data, secures workflows, and
            maintains enterprise-grade compliance across all operations.
          </p>


          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenReview(true)}
              className="rounded-lg bg-cyan-500 px-4 py-2.5 font-medium text-black hover:bg-cyan-400 sm:rounded-xl sm:px-5 sm:py-3"
            >
              Book Security Review
            </button>


            {openReview && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6">
                <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl sm:max-w-2xl sm:rounded-3xl">
                  
                  {/* Header */}
                  <div className="flex flex-col gap-4 items-center justify-between border-b border-white/10 p-4 sm:flex-row sm:p-6">
                    <div>
                      <h2 className="text-xl font-bold text-white sm:text-2xl">
                        Book Security Review
                      </h2>
                      <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                        Schedule a security assessment with Orbit experts.
                      </p>
                    </div>


                    <button
                      onClick={() => setOpenReview(false)}
                      className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>


                  {/* Form */}
                  <form className="space-y-4 p-4 sm:space-y-5 sm:p-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Full Name
                      </label>


                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-cyan-500 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>


                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Work Email
                      </label>


                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-cyan-500 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>


                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Company
                      </label>


                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-cyan-500 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>


                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Team Size
                      </label>


                      <select
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-cyan-500 sm:rounded-xl sm:px-4 sm:py-3"
                      >
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>200+</option>
                      </select>
                    </div>


                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-300">
                        Security Requirements
                      </label>


                      <textarea
                        rows={3}
                        placeholder="Tell us about your compliance, audit, or security needs..."
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none focus:border-cyan-500 sm:rounded-xl sm:px-4 sm:py-3"
                      />
                    </div>


                    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                      <button
                        type="submit"
                        className="flex-1 rounded-lg bg-cyan-500 px-4 py-2.5 font-medium text-black hover:bg-cyan-400 sm:rounded-xl sm:px-5 sm:py-3"
                      >
                        Request Review
                      </button>


                      <button
                        type="button"
                        onClick={() => setOpenReview(false)}
                        className="rounded-lg border border-white/10 px-4 py-2.5 text-white hover:bg-white/5 sm:rounded-xl sm:px-5 sm:py-3"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}


            <Link to="/docs"> 
              <button
                className="px-4 py-2.5 rounded-lg border border-white/20 hover:border-white/40 transition sm:px-6 sm:py-3 sm:rounded-xl"
              >
                View Security Docs
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* TRUST SECTION */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-20 md:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid gap-6 text-center md:gap-8 md:grid-cols-3">


          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Encryption</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              End-to-end encryption for data in transit and at rest.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Access Control</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Role-based permissions with strict authentication layers.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Compliance</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Built with SOC2-ready architecture principles.
            </p>
          </div>


        </div>
      </section>


      {/* WHAT YOU'LL COVER */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-20 md:py-24 bg-white/5 border-t border-white/10">
        <div className="max-w-5xl mx-auto">


          <h2 className="text-2xl font-semibold text-center sm:text-3xl">
            What We Cover in the Security Review
          </h2>


          <div className="grid gap-6 mt-8 md:gap-8 md:grid-cols-2">


            {[
              "System architecture overview",
              "Data storage & encryption model",
              "API & integration security",
              "Access control & authentication",
              "Audit logs & monitoring",
              "Incident response readiness"
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-black/40 border border-white/10 sm:p-5 sm:rounded-xl"
              >
                <p className="text-gray-200 text-sm sm:text-base">{item}</p>
              </div>
            ))}


          </div>
        </div>
      </section>


      {/* BOOKING SECTION */}
      <section id="book" className="px-4 py-16 sm:px-6 sm:py-20 md:px-20 md:py-28 border-t border-white/10">


        <div className="max-w-4xl mx-auto text-center">


          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Book Your Security Review
          </h2>


          <p className="text-gray-400 mt-3 text-sm sm:text-base md:mt-4">
            Choose a time that works for your team. Our security engineers will
            walk you through everything in detail.
          </p>


          {/* Calendar Embed Placeholder */}
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-black/40 h-[400px] flex items-center justify-center sm:mt-10 sm:h-[480px] md:h-[500px] md:rounded-2xl">
            <p className="text-gray-500 text-sm sm:text-base">
              Calendly / Google Calendar Embed Goes Here
            </p>
          </div>


        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-20 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">


          <h3 className="text-xl font-semibold sm:text-2xl">
            Need more information before booking?
          </h3>


          <p className="text-gray-400 mt-2 text-sm sm:text-base md:mt-3">
            Explore our documentation or contact our security team directly.
          </p>


          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center sm:mt-6">


            <Link to="/docs"> 
              <button
                className="px-4 py-2.5 rounded-lg border border-white/20 hover:border-white/40 sm:px-5 sm:py-3 sm:rounded-xl"
              >
                View Docs
              </button>
            </Link>
          
            <Link to="/Contact"> 
              <button
                className="px-4 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-gray-200 sm:px-5 sm:py-3 sm:rounded-xl"
              >
                Contact Security Team
              </button>
            </Link>
          </div>


        </div>
      </section>


    </div>
  );
};


export default SecurityReview;