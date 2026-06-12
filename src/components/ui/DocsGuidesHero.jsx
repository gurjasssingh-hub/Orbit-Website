import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  BookOpen,
  Code2,
  Layers3,
  Webhook,
} from "lucide-react";

const DocsGuidesHero = () => {
  const [query, setQuery] = useState("");

  const resources = [
    {
      icon: <BookOpen size={22} />,
      title: "Getting Started",
      description:
        "Set up Orbit, create your first project, and make your first API request.",
      href: "/GettingStarted",
    },
    {
      icon: <Code2 size={22} />,
      title: "API Reference",
      description:
        "Detailed endpoint documentation, parameters, responses, and examples.",
      href: "/APIReference2",
    },
    {
      icon: <Layers3 size={22} />,
      title: "Guides & Tutorials",
      description:
        "Step-by-step tutorials for integrations, automation, and workflows.",
      href: "/Resourcespages/Guides",
    },
    {
      icon: <Webhook size={22} />,
      title: "Webhooks",
      description:
        "Learn event delivery, security, signature verification, and retries.",
      href: "/Webhooks",
    },
  ];

  const filteredResources = resources.filter((item) =>
    (item.title + item.description)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute right-0 top-32 h-[180px] w-[180px] sm:h-[280px] sm:w-[280px] lg:h-[350px] lg:w-[350px] rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute left-0 bottom-0 h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full bg-cyan-200/30 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            Developer Documentation
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-5xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Everything You Need
            <br />
            to Build with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Orbit
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
            Explore comprehensive documentation, production-ready API
            references, SDK guides, tutorials, and developer resources
            designed to help you build, launch, and scale with confidence.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5">
            <Search className="flex-shrink-0 text-slate-400" size={20} />

            <input
              type="text"
              placeholder="Search guides, APIs, SDKs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="ml-3 w-full bg-transparent text-sm text-slate-700 outline-none sm:text-base"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {filteredResources.length > 0 ? (
            filteredResources.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md sm:p-6"
              >
                <div className="flex items-center gap-3 text-blue-600">
                  {item.icon}

                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-2 text-center text-slate-500">
              No results found
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link to="/Signup">
            <button className="group w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-black sm:w-auto sm:px-7 sm:py-4">
              Get Started
              <ArrowRight
                size={18}
                className="ml-2 inline transition-transform group-hover:translate-x-1"
              />
            </button>
          </Link>

          <Link to="/APIReference2">
            <button className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-400 sm:w-auto sm:px-7 sm:py-4">
              API Reference
            </button>
          </Link>

          <Link to="/Support">
            <button className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition-all hover:-translate-y-1 hover:border-slate-400 sm:w-auto sm:px-7 sm:py-4">
              Contact Support
            </button>
          </Link>
        </div>

        {/* Popular Resources */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Popular Resources
            </h2>

            <p className="mt-3 text-slate-600">
              Jump directly into the most frequently accessed documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {resources.map((item, index) => (
              <Link to={item.href} key={index}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center font-medium text-blue-600">
                    Explore

                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-20 sm:p-8">
          <div className="grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                50K+
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Developers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                2M+
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                API Requests Daily
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                99.99%
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Platform Uptime
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 sm:text-3xl">
                Enterprise
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Ready Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsGuidesHero;