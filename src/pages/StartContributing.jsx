import React, { useState } from "react";
import {
  Send,
  FileText,
  Lightbulb,
  Workflow,
  MessageSquare,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const CONTRIBUTION_TYPES = [
  {
    icon: <FileText size={20} />,
    title: "Tutorials & Guides",
    description: "Share educational content and walkthroughs.",
  },
  {
    icon: <Workflow size={20} />,
    title: "Workflow Showcase",
    description: "Demonstrate automations and real-world use cases.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Feature Suggestions",
    description: "Help improve Orbit with new ideas.",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Community Feedback",
    description: "Share insights and recommendations.",
  },
];

const RECOGNITION_ITEMS = [
  { title: "Community Badges", desc: "Earn official profile verification markers." },
  { title: "Featured Spotlights", desc: "Get promoted across public release channels." },
  { title: "Early Access Programs", desc: "Beta test upcoming architectural shifts." },
];

const StartContributing = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Production API integration payload goes here
    console.log("Submitting contribution payload:", formData);

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      type: "",
      title: "",
      description: "",
      link: "",
    });

    // Clean, automated window tracking shift
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-500/10">
      
      {/* Hero */}
      <section className="px-6 py-20 md:py-28 relative overflow-hidden bg-white border-b border-slate-200/60">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
            Community Contributions
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Start <span className="text-blue-600">Contributing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Share your knowledge, workflows, integrations, and ideas with the
            Orbit community. Help developers learn faster while building your
            reputation as an official core contributor.
          </p>
        </div>
      </section>

      {/* Contribution Types */}
      <section className="px-6 -mt-10 relative z-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTRIBUTION_TYPES.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/50">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Submission Module Container */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-10">
          
          {success && (
            <div className="mb-8 flex items-start rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-inner transition animate-fadeIn">
              <CheckCircle2 size={20} className="mr-3 mt-0.5 shrink-0 text-emerald-600" />
              <div>
                <h4 className="font-semibold">Submission Dispatched!</h4>
                <p className="mt-0.5 text-sm text-emerald-700">Thank you for your contribution tracking. Our engineering team will review your payload metadata notes shortly.</p>
              </div>
            </div>
          )}

          <div className="mb-8 border-b border-slate-100 pb-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              Submit Your Contribution
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
              Fill out the processing details below and our content review track will analyze your data.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="mb-2 block text-sm font-semibold text-slate-700">
                Contribution Classification Type
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
              >
                <option value="" disabled>Select structural variant path...</option>
                <option value="Tutorial">Tutorial / Guide</option>
                <option value="Workflow">Workflow Showcase</option>
                <option value="Integration">Integration Example</option>
                <option value="Feature">Feature Suggestion</option>
                <option value="Feedback">Community Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="title" className="mb-2 block text-sm font-semibold text-slate-700">
                Contribution Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                placeholder="Building an Automated Customer Workflow"
              />
            </div>

            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">
                Description & Structural Details
              </label>
              <textarea
                id="description"
                rows="5"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-y"
                placeholder="Describe architectural challenges encountered, frameworks deployed, or recommendations..."
              />
            </div>

            <div>
              <label htmlFor="link" className="mb-2 block text-sm font-semibold text-slate-700">
                Resource URI Link <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="link"
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/40 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                placeholder="https://github.com/example/project"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black hover:-translate-y-0.5 active:translate-y-0 transition"
              >
                <span>Dispatch Contribution Package</span>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Recognition Tier Badges Segment */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 text-center shadow-sm">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 shadow-sm">
            <Trophy size={28} />
          </div>

          <h2 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Contributor Recognition Matrix
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-slate-600 leading-relaxed">
            Outstanding contributions are systematically pushed to public documentation showcases, developer community channels, and feature release notes.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {RECOGNITION_ITEMS.map((badge, idx) => (
              <div key={idx} className="rounded-xl bg-slate-50 border border-slate-100 p-5 text-left">
                <h3 className="font-bold text-sm text-slate-900 tracking-tight">
                  {badge.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default StartContributing;