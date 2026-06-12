import React, { useState } from "react";
import {
  Sparkles,
  Send,
  CheckCircle2,
  User,
  Building2,
  Link as LinkIcon,
} from "lucide-react";

const ShareYourStory = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    storyTitle: "",
    projectUrl: "",
    story: "",
    results: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Production API payload dispatch track goes here:
    console.log("Submitting story data payload:", formData);

    setSubmitted(true);

    // Reset Form Input Parameters
    setFormData({
      fullName: "",
      company: "",
      email: "",
      storyTitle: "",
      projectUrl: "",
      story: "",
      results: "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-500/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        
        {/* Hero Segment */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles size={14} className="mr-2 text-blue-600" />
            Community Stories
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Have a Story to Share?
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Showcase your workflows, automations, integrations, and achievements to inspire the next generation of Orbit users. We regularly feature outstanding customer stories across our community, documentation, and product channels.
          </p>
        </div>

        {/* Dynamic Form Module */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-10">
            
            {submitted && (
              <div className="mb-8 flex items-start rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-sm transition animate-fadeIn">
                <CheckCircle2 size={20} className="mr-3 mt-0.5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="font-semibold">Submission Received!</h4>
                  <p className="mt-0.5 text-sm text-emerald-700">Thank you! Your community case study has been submitted successfully for verification review.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Grid Wrapper for Base Profile Parameters */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                    <User size={18} className="text-slate-400 shrink-0" />
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="ml-3 w-full bg-transparent outline-none text-sm text-slate-900"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-700">
                    Company / Organization
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                    <Building2 size={18} className="text-slate-400 shrink-0" />
                    <input
                      id="company"
                      name="company"
                      required
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Inc."
                      className="ml-3 w-full bg-transparent outline-none text-sm text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* Project Title Label */}
              <div>
                <label htmlFor="storyTitle" className="mb-2 block text-sm font-semibold text-slate-700">
                  Story Title
                </label>
                <input
                  id="storyTitle"
                  name="storyTitle"
                  required
                  type="text"
                  value={formData.storyTitle}
                  onChange={handleInputChange}
                  placeholder="How we automated customer onboarding with Orbit"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* Project Link Icon Module */}
              <div>
                <label htmlFor="projectUrl" className="mb-2 block text-sm font-semibold text-slate-700">
                  Project URL <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                  <LinkIcon size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="projectUrl"
                    name="projectUrl"
                    type="url"
                    value={formData.projectUrl}
                    onChange={handleInputChange}
                    placeholder="https://your-project.com"
                    className="ml-3 w-full bg-transparent outline-none text-sm text-slate-900"
                  />
                </div>
              </div>

              {/* Central Core Story Content Track */}
              <div>
                <label htmlFor="story" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Core Story
                </label>
                <textarea
                  id="story"
                  name="story"
                  required
                  rows="6"
                  value={formData.story}
                  onChange={handleInputChange}
                  placeholder="Tell us about your production environment, workflow challenge, integration architecture choices, and what you discovered along the journey..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-y"
                />
              </div>

              {/* Measurable Results & Impact Textarea Segment */}
              <div>
                <label htmlFor="results" className="mb-2 block text-sm font-semibold text-slate-700">
                  Key Metrics & Operational Impact
                </label>
                <textarea
                  id="results"
                  name="results"
                  required
                  rows="3"
                  value={formData.results}
                  onChange={handleInputChange}
                  placeholder="e.g., Saved 24 developer pipeline hours per week, cut architectural infrastructure processing costs by 40%."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/30 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-y"
                />
              </div>

              {/* Submit Dispatch Trigger Link */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black hover:-translate-y-0.5 active:translate-y-0 transition"
                >
                  <span>Publish Your Journey</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quality Guidelines Section Box */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              What Makes an Amazing Community Case Study?
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div>
                <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                  Identify the Friction
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-slate-600 leading-relaxed">
                  Clearly describe the core integration roadblock or complex performance challenge your engineering team faced before migrating.
                </p>
              </div>

              <div className="sm:pl-6">
                <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                  Detail the Architecture
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-slate-600 leading-relaxed">
                  Break down how your systems coordinate workflows using Orbit webhooks, dashboard tools, or custom API endpoints.
                </p>
              </div>

              <div className="sm:pl-6">
                <h3 className="font-semibold text-slate-900 text-sm md:text-base">
                  Highlight Data Points
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-slate-600 leading-relaxed">
                  Share measurable production numbers—like concrete speed gains, pipeline hours saved, or lower system crash counts.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShareYourStory;