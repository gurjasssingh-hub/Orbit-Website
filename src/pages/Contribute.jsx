import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  BookOpen,
  Lightbulb,
  Trophy,
  ArrowRight,
  Users,
} from "lucide-react";

const contributions = [
  {
    icon: <MessageSquare size={24} />,
    title: "Join Discussions",
    description:
      "Help other developers, answer questions, and participate in community conversations.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Create Tutorials",
    description:
      "Share guides, integrations, workflows, and best practices with the Orbit community.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Suggest Improvements",
    description:
      "Provide feedback and feature ideas that help shape the future of Orbit.",
  },
  {
    icon: <Trophy size={24} />,
    title: "Earn Recognition",
    description:
      "Build your reputation through valuable contributions and community engagement.",
  },
];

const Contribute = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            Community Contributions
          </span>

          <h1 className="mt-8 text-5xl font-bold text-slate-900 md:text-6xl">
            Your Contributions
            <span className="block text-blue-600">Matter</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Participate in discussions, share knowledge, and help shape the
            future of Orbit while earning recognition from developers around
            the world.
          </p>
        
          <Link to="/StartContributing"> 
            <button className="mt-10 inline-flex items-center rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black">
              Start Contributing
              <ArrowRight size={18} className="ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Contribution Options */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {contributions.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <Users size={40} className="mx-auto text-blue-600" />

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Become a Recognized Contributor
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Consistent contributors may be featured in community spotlights,
            gain early access to new programs, and receive recognition across
            the Orbit ecosystem.
          </p>
        
          <Link to="/ContributionGuidelines"> 
            <button className="mt-8 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400">
              View Contribution Guidelines
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contribute;