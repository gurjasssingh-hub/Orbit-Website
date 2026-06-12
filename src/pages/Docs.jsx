import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Getting Started",
    desc: "Set up Orbit API in minutes.",
    href: "/GettingStarted",
  },
  {
    title: "Authentication",
    desc: "API keys, tokens, and security setup.",
    href: "/Authentication",
  },
  {
    title: "API Reference",
    desc: "Complete endpoint documentation.",
    href: "/APIReference2",
  },
  {
    title: "Webhooks",
    desc: "Event-driven integrations and callbacks.",
    href: "/Webhooks",
  },
  {
    title: "Guides",
    desc: "Real-world workflows and tutorials.",
    href: "/Guides2",
  },
  {
    title: "SDKs",
    desc: "Official libraries for fast integration.",
    href: "/SDKs",
  },
  {
    title: "Examples",
    desc: "Copy-paste integration samples.",
    href: "/Examples",
  },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      {/* HERO */}
      <section className="px-6 md:px-20 py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Documentation
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Everything you need to build, integrate, and scale with Orbit.
          </p>

          {/* Search Bar */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-gray-600">
            <span className="px-3 py-1 border rounded-full cursor-pointer hover:bg-slate-50 transition">Getting Started</span>
            <span className="px-3 py-1 border rounded-full cursor-pointer hover:bg-slate-50 transition">API Keys</span>
            <span className="px-3 py-1 border rounded-full cursor-pointer hover:bg-slate-50 transition">Webhooks</span>
            <span className="px-3 py-1 border rounded-full cursor-pointer hover:bg-slate-50 transition">Rate Limits</span>
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-10">
            Explore Documentation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition hover:shadow-sm block"
              >
                <h3 className="font-semibold text-lg text-slate-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>

                <span className="text-blue-600 text-sm mt-4 inline-block">
                  View →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;