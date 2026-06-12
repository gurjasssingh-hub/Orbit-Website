import React from 'react'
import { NavLink, Link, useLocation } from "react-router-dom";


const Contact = () => {
  return (
    <>
     <div className='px-32 py-20 bg-[#f7f9fc]'>

<section className="relative overflow-hidden py-20 lg:py-32 border-b border-gray-100">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-40" />
          <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-indigo-100 blur-3xl opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                We typically reply within 24 hours
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-8 max-w-5xl text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
              Get in Touch{' '}
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
                With Orbit
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
              Whether you're exploring Orbit for your team, need technical
              assistance, or want to discuss enterprise solutions, our team is
              here to help every step of the way.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/CustomPlan" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-2xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-black shadow-md">
                  Contact Sales
                </button>
              </Link>

              <Link to="/Support" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-2xl border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50 shadow-2xs">
                  Talk to Support
                </button>
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="mt-20 grid grid-cols-1 gap-8 border-t border-gray-200 pt-12 sm:grid-cols-3">
              <div className="p-4 rounded-2xl transition-colors hover:bg-white/40">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">24h</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Average response time
                </p>
              </div>

              <div className="p-4 rounded-2xl transition-colors hover:bg-white/40">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">99.9%</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Platform reliability
                </p>
              </div>

              <div className="p-4 rounded-2xl transition-colors hover:bg-white/40">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Global</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Support across time zones
                </p>
              </div>
            </div>

            {/* Contact Options Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3 sm:gap-4">
              {['Sales Inquiries', 'Technical Support', 'Partnerships', 'Enterprise Solutions'].map((option) => (
                <div key={option} className="rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-2xs">
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">
                    {option}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none select-none">
          <div className="absolute left-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-100 blur-3xl opacity-60" />
          <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100 blur-3xl opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start">

            {/* LEFT SIDE: VALUE PROPOSITIONS */}
            <div className="lg:sticky lg:top-8">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-2xs">
                <span className="text-xs sm:text-sm font-semibold text-purple-600">
                  Contact Orbit
                </span>
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl leading-tight">
                Tell us how{' '}
                <span className="block text-slate-800">
                  we can help.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
                Whether you're evaluating Orbit, looking for enterprise
                solutions, or need technical assistance, our team is ready
                to help you move faster.
              </p>

              {/* Benefits Cards */}
              <div className="mt-12 space-y-6">
                {[
                  { icon: '⚡', title: 'Fast Response Times', desc: 'Most inquiries receive a response within one business day.' },
                  { icon: '🎯', title: 'Dedicated Specialists', desc: 'Your request is routed directly to the right specialized team.' },
                  { icon: '🔒', title: 'Secure & Confidential', desc: 'Your operational intelligence data is fully secured under end-to-end encryption frameworks.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl transition hover:bg-white/50">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm text-xl border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: SECURE INTERACTIVE FORM CARD */}
            <div className="w-full">
              <div className="rounded-2xl sm:rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl p-6 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Start the Conversation
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    Fill out the configuration details and we'll connect you with the right Orbit expert.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1 */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Carter"
                        className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        placeholder="Acme Inc."
                        className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Team Size
                      </label>
                      <select
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 appearance-none"
                        style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%234B5563\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                      >
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-1000">201-1000</option>
                        <option value="1000+">1000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Block */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-gray-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 appearance-none"
                      style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%234B5563\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    >
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Enterprise Plan">Enterprise Plan</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  {/* Message Block */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell us more about your parameters and requirements..."
                      className="w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none"
                    />
                  </div>

                  {/* File Upload Placeholder Component */}
                  <div className="group relative rounded-xl sm:rounded-2xl border-2 border-dashed border-gray-300 p-6 sm:p-8 text-center transition hover:border-indigo-400 cursor-pointer bg-white/50">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple />
                    <div className="text-3xl transition-transform group-hover:scale-110 duration-200">📎</div>
                    <p className="mt-3 text-sm sm:text-base font-semibold text-gray-900">
                      Attach files (optional)
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      Screenshots, PDFs, documents or target logs up to 10MB
                    </p>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full rounded-xl sm:rounded-2xl bg-gray-900 px-8 py-4 text-sm sm:text-base font-semibold text-white transition hover:scale-[1.01] hover:bg-black shadow-md"
                  >
                    Send Message →
                  </button>

                  {/* Policy Context */}
                  <p className="text-center text-xs text-gray-500 leading-relaxed">
                    By submitting this request, you accept our general Privacy Policy framework. Your identity components are encrypted and hosted securely.
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

<section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-32">
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none select-none">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-2xs">
        <span className="text-xs sm:text-sm font-semibold text-purple-600">
          Contact Directory
        </span>
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
        Connect With the{' '}
        <span className="block sm:inline md:block">Right Team</span>
      </h2>

      <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
        Get faster answers by reaching the department best suited to your request.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[
        { emoji: '💼', bgColor: 'bg-blue-50', title: 'Sales', desc: 'Pricing questions, product demos, enterprise plans, and purchasing assistance.', email: 'sales@orbit.com' },
        { emoji: '🎧', bgColor: 'bg-green-50', title: 'Customer Support', desc: 'Technical issues, account questions, onboarding assistance, and troubleshooting.', email: 'support@orbit.com' },
        { emoji: '🤝', bgColor: 'bg-purple-50', title: 'Partnerships', desc: 'Explore integrations, strategic partnerships, affiliates, and collaboration opportunities.', email: 'partners@orbit.com' },
        { emoji: '📰', bgColor: 'bg-orange-50', title: 'Press & Media', desc: 'Media requests, interviews, company announcements, and press resources.', email: 'press@orbit.com' },
        { emoji: '🔒', bgColor: 'bg-red-50', title: 'Security', desc: 'Report vulnerabilities, security concerns, compliance requests, and data inquiries.', email: 'security@orbit.com' },
        { emoji: '🚀', bgColor: 'bg-indigo-50', title: 'Careers', desc: 'Join our team, explore open roles, internships, and career opportunities.', email: 'careers@orbit.com' }
      ].map((card, idx) => (
        <div
          key={idx}
          className="group rounded-2xl sm:rounded-[32px] border border-gray-200 bg-white p-6 sm:p-8 transition-all duration-300 md:hover:-translate-y-2 md:hover:border-blue-200 md:hover:shadow-xl"
        >
          <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${card.bgColor} text-xl sm:text-2xl`}>
            {card.emoji}
          </div>

          <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-gray-900">
            {card.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed min-h-[3rem] sm:min-h-[4.5rem]">
            {card.desc}
          </p>

          <div className="mt-6 border-t border-gray-100 pt-5 sm:pt-6">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Contact</p>
            <a 
              href={`mailto:${card.email}`}
              className="mt-1 block font-semibold text-gray-900 transition-colors duration-200 hover:text-purple-600 break-all text-sm sm:text-base"
            >
              {card.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-32 border-t border-gray-100">
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none select-none">
    <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-100 blur-3xl opacity-50" />
    <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100 blur-3xl opacity-50" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-2xs">
        <span className="text-xs sm:text-sm font-semibold text-purple-600">
          Personalized Demo Experience
        </span>
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
        See How Orbit Fits{' '}
        <span className="block mt-1 bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
          Your Workflow
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
        Get a tailored walkthrough of Orbit, explore real use cases, and discover how your team can automate work, collaborate faster, and scale efficiently.
      </p>
    </div>

    {/* Main Content */}
    <div className="mt-12 sm:mt-20 grid items-start gap-12 lg:grid-cols-2">
      
      {/* LEFT SIDE: VALUE PROPS */}
      <div className="space-y-6 sm:space-y-8">
        {[
          { icon: '🎯', title: 'Personalized Walkthrough', desc: "Explore Orbit through the lens of your team's specific workflows, goals, and operational challenges." },
          { icon: '💬', title: 'Live Q&A Session', desc: 'Ask complex technical deployment questions in real time and get direct answers from Orbit specialists.' },
          { icon: '⚡', title: 'Workflow Consultation', desc: 'Identify critical automation opportunities to replace repetitive tasks, saving hours across setup pathways.' },
          { icon: '🚀', title: 'Team Onboarding Overview', desc: 'Learn how Orbit can be systematically rolled out across cross-functional operations with maximal adoption rates.' }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-5 items-start p-2 rounded-2xl transition hover:bg-white/40">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-2xs text-lg sm:text-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE: WIDGET CONTAINER */}
      <div className="w-full lg:sticky lg:top-8">
        <div className="rounded-2xl sm:rounded-[32px] border border-white/80 bg-white/90 backdrop-blur-md p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          
          {/* Card Header */}
          <div className="text-center sm:text-left">
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-600">
              Free Demo Session
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900">
              Book Your Orbit Demo
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Schedule a personalized session with our team and see exactly how Orbit can support your workflows.
            </p>
          </div>

          {/* Details Metadata List */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: 'Duration', val: '30 Minutes' },
              { label: 'Format', val: 'Video Meeting' },
              { label: 'Includes', val: 'Live Q&A' },
              { label: 'Availability', val: 'Flexible Hours' }
            ].map((meta, idx) => (
              <div key={idx} className="flex flex-col justify-between rounded-xl sm:rounded-2xl bg-gray-50/70 p-3.5 border border-gray-100">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{meta.label}</span>
                <span className="mt-1 font-bold text-gray-900 text-sm sm:text-base">{meta.val}</span>
              </div>
            ))}
          </div>

          {/* Calendar Interactive Block */}
          <div className="mt-6 rounded-2xl sm:rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 sm:p-10 text-center">
            <div className="text-4xl sm:text-5xl">📅</div>
            <h4 className="mt-3 text-base sm:text-lg font-bold text-gray-900">
              Calendar Scheduling
            </h4>
            <p className="mx-auto mt-1 max-w-xs text-xs sm:text-sm text-gray-500 leading-relaxed">
              Embed Calendly, HubSpot Meetings, or your platform dynamic scheduler module within this container wrapper.
            </p>
          </div>

          {/* Booking Trigger CTA */}
          <button className="mt-6 w-full rounded-xl sm:rounded-2xl bg-gray-900 px-6 py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 md:hover:-translate-y-0.5 md:hover:bg-black shadow-md">
            Book a Demo →
          </button>

          <p className="mt-4 text-center text-xs text-gray-400 leading-relaxed">
            No commitment required • Personalized consultation • Free interactive session
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-32">
  {/* Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none select-none">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl opacity-70" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-2xs">
        <span className="text-xs sm:text-sm font-semibold text-purple-600">
          Support Resources
        </span>
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
        Find Answers{' '}
        <span className="block mt-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Faster
        </span>
      </h2>

      <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
        Explore our help center, technical documentation, tutorials, and community resources to quickly find the information you need.
      </p>
    </div>

    {/* Resource Grid */}
    <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[
        { route: '/KnowledgeBasePage', emoji: '📚', bg: 'bg-blue-50', text: 'text-blue-600', title: 'Knowledge Base', desc: 'Search hundreds of articles covering setup, workflows, account management, and platform features.', action: 'Browse Articles →' },
        { route: '/Docs', emoji: '📖', bg: 'bg-indigo-50', text: 'text-indigo-600', title: 'Documentation', desc: 'Detailed product documentation, onboarding resources, and configuration feature references.', action: 'View Docs →' },
        { route: '/Guides2', emoji: '🎓', bg: 'bg-green-50', text: 'text-green-600', title: 'Guides & Tutorials', desc: 'Learn best operational practices through step-by-step interactive walkthroughs and practical engineering examples.', action: 'Start Learning →' },
        { route: '/ApiReference2', emoji: '⚙️', bg: 'bg-purple-50', text: 'text-purple-600', title: 'API Documentation', desc: 'Integration endpoints architecture guides, tokens authentication references, and dynamic payload examples.', action: 'Explore API →' },
        { route: '/CommunityJoinModal', emoji: '🌎', bg: 'bg-orange-50', text: 'text-orange-600', title: 'Community', desc: 'Connect with other active Orbit users, share workspace templates, and learn deployment mechanics from specialists.', action: 'Join Community →' },
        { route: '/Help/StatusPage', emoji: '📡', bg: 'bg-red-50', text: 'text-red-600', title: 'System Status', desc: 'Check current operational uptime metrics, pending maintenance schedules, active incident logs, and cluster availability.', action: 'View Status →' }
      ].map((card, idx) => (
        <Link key={idx} to={card.route} className="block group outline-hidden">
          <div className="h-full rounded-2xl sm:rounded-[32px] border border-gray-200 bg-white p-6 sm:p-8 transition-all duration-300 md:hover:-translate-y-1.5 md:hover:border-blue-200 md:hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${card.bg} text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-105`}>
                {card.emoji}
              </div>

              <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                {card.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className={`mt-6 sm:mt-8 flex items-center text-sm font-bold ${card.text}`}>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all group-hover:after:w-full">
                {card.action}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 sm:mt-20 text-center">
      <Link to="/Help" className="inline-block w-full sm:w-auto">
        <button className="w-full sm:w-auto rounded-xl sm:rounded-2xl bg-gray-900 px-8 py-4.5 text-sm font-semibold text-white transition-all duration-300 md:hover:-translate-y-0.5 md:hover:bg-black shadow-md">
          Visit Help Center →
        </button>
      </Link>
      <p className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
        Comprehensive documentation, configuration tutorials, direct troubleshooting modules, and developer engineering logs.
      </p>
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-32 border-t border-gray-100">
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none select-none">
    <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-100 blur-3xl opacity-50" />
    <div className="absolute left-0 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100 blur-3xl opacity-40" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-start gap-12 lg:gap-20 lg:grid-cols-2">
      
      {/* LEFT SIDE: CONTEXT CORE */}
      <div className="lg:sticky lg:top-12">
        <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-2xs">
          <span className="text-xs sm:text-sm font-semibold text-purple-600">
            Global Presence
          </span>
        </div>

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
          Supporting Teams{' '}
          <span className="block mt-1 bg-gradient-to-r from-indigo-950 to-slate-800 bg-clip-text text-transparent">
            Around the World
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
          Orbit is architected for modern global infrastructure operating securely across diverse jurisdictions, asynchronous timeline variations, and high-velocity distributed engineering teams.
        </p>

        <div className="mt-10 space-y-6">
          {[
            { icon: '🌎', title: 'Worldwide Customer Base', desc: 'Trusted implicitly by decentralized workspaces deployed across multiple primary data availability sub-regions.' },
            { icon: '🏡', title: 'Asynchronous-First Stack', desc: 'Engineered natively by a globally distributed team that understands modern remote productivity vectors.' },
            { icon: '⚡', title: 'Enterprise-Grade Support', desc: 'Guaranteed high-priority SLA response matrix tailored specifically for rapidly Scaling high-throughput applications.' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start p-2 rounded-2xl transition hover:bg-white/40">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-2xs text-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: METRIC QUAD CARDS & TRUST STATUS BANNER */}
      <div className="w-full space-y-6">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {[
            { icon: '📍', title: 'Headquarters', content: 'San Francisco, CA' },
            { icon: '🌐', title: 'Global Coverage', content: '24/7 Follow-the-Sun availability matrix across EMEA, AMER, and APAC.' },
            { icon: '🕒', title: 'Core Support Hours', content: 'Monday – Friday\n9:00 AM – 6:00 PM EST' },
            { icon: '🛡️', title: 'Enterprise Support', content: 'Dedicated TAM access, critical escalation protocols, and custom uptime guarantees.' }
          ].map((box, idx) => (
            <div key={idx} className="rounded-2xl sm:rounded-[32px] border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl">{box.icon}</div>
              <h3 className="mt-4 text-base sm:text-lg font-bold text-gray-900">
                {box.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {box.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Live Bar Container */}
        <div className="rounded-2xl sm:rounded-[32px] border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Available Across All Zones
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our globally orchestrated monitoring networks guarantee automated continuous failovers and active response pipelines wherever you deploy.
              </p>
            </div>

            <div className="self-start sm:self-center shrink-0 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Online Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-neutral-50 py-20 sm:py-32">
  {/* Ambient Background Blur Elements */}
  <div className="absolute inset-0 -z-10 pointer-events-none select-none">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-40" />
    <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-100 blur-3xl opacity-40" />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] border border-gray-200/80 bg-linear-to-b from-[#f7f9fc] to-white p-6 sm:p-12 md:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
      
      {/* Dynamic Top Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 shadow-2xs">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-purple-600">
            Start Your Orbit Journey
          </span>
        </div>
      </div>

      {/* Main Structural Typography Heading */}
      <div className="mx-auto mt-8 sm:mt-10 max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-tight">
          Ready to See{' '}
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent pb-1">
            Orbit in Action?
          </span>
        </h2>

        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
          Start using Orbit today, streamline systemic workflows, collaborate more effectively, and empower your cross-functional engineering teams with tools explicitly designed for modern work.
        </p>
      </div>

      {/* Structured Core Benefits Grid */}
      <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: '🚀', bg: 'bg-blue-50', label: 'Start Today', copy: 'Create your centralized workspace environment and configure active production pipelines in minutes.' },
          { icon: '🎯', bg: 'bg-indigo-50', label: 'Personalized Demo', copy: "Analyze precisely how Orbit structures its mechanics around your team's distinct operating workflows." },
          { icon: '⚡', bg: 'bg-green-50', label: 'Scale Confidently', copy: 'Expand seamlessly from sandbox localized environments into secure high-availability enterprise clusters.' },
          { icon: '🛟', bg: 'bg-orange-50', label: 'Dedicated Support', copy: 'Access prioritized engineering support pipelines and certified systems specialists whenever needed.' }
        ].map((feat, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-2xs transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-md">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.bg} text-lg sm:text-xl`}>
              {feat.icon}
            </div>
            <h3 className="mt-4 text-base sm:text-lg font-bold text-gray-900">
              {feat.label}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {feat.copy}
            </p>
          </div>
        ))}
      </div>

      {/* Target Route Interactive Actions */}
      <div className="mt-12 sm:mt-16 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
        <Link to="/FreeTrial" className="w-full sm:w-auto">
          <button className="w-full rounded-xl sm:rounded-2xl bg-gray-950 px-8 py-4.5 text-sm font-semibold text-white transition-all duration-200 md:hover:-translate-y-0.5 md:hover:bg-black shadow-sm">
            Start Free Trial
          </button>
        </Link>
        
        <Link to="/book-demo" className="w-full sm:w-auto">
          <button className="w-full rounded-xl sm:rounded-2xl border border-gray-300 bg-white px-8 py-4.5 text-sm font-semibold text-gray-700 transition-all duration-200 md:hover:border-gray-400 md:hover:bg-gray-50/50">
            Book a Demo
          </button>
        </Link>
      </div>

      {/* Global Metadata Operational Trust Signifier */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium">
          No credit card verification required • Core environment deployment in minutes • Cancel commitment anytime
        </p>
      </div>

    </div>
  </div>
</section>

     </div>
    </>
  )
}

export default Contact
