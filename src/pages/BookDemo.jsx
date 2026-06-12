import React from "react";

const BookDemo = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-50 blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Personalized Product Walkthrough
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
            See Orbit
            <br />
            in Action
          </h1>

          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            Schedule a personalized demo and discover how Orbit helps
            teams automate workflows, centralize knowledge, and move
            faster with AI.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-semibold mb-8">
              Book Your Demo
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 h-14 px-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full mt-2 h-14 px-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Company / Team Size
                </label>
                <select className="w-full mt-2 h-14 px-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black bg-white">
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Preferred Meeting Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full mt-2 h-14 px-4 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-700">
                  What would you like to see?
                </label>

                <textarea
                  rows={5}
                  placeholder="AI workflows, team collaboration, automations, knowledge search..."
                  className="w-full mt-2 p-4 rounded-xl border border-neutral-300 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition-all"
              >
                Schedule My Demo
              </button>

            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <div className="bg-black text-white rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-6">
                What You'll Get
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-medium">
                    Personalized Walkthrough
                  </h4>
                  <p className="text-neutral-300 mt-1">
                    Tailored to your team's workflows and goals.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">
                    AI Automation Showcase
                  </h4>
                  <p className="text-neutral-300 mt-1">
                    See Orbit automate repetitive work in real time.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">
                    Team Collaboration Demo
                  </h4>
                  <p className="text-neutral-300 mt-1">
                    Explore shared workspaces, knowledge search,
                    and workflow management.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">
                    Q&A Session
                  </h4>
                  <p className="text-neutral-300 mt-1">
                    Get answers from our product specialists.
                  </p>
                </div>

              </div>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">

              <h3 className="text-xl font-semibold mb-4">
                Instant Scheduling
              </h3>

              <div className="rounded-2xl overflow-hidden border border-neutral-200 h-[450px]">

                <iframe
                  src="https://calendly.com/YOUR-LINK"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDemo;