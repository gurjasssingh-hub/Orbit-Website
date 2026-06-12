import React from "react";

export default function CommunitySDKs() {
  const sdks = [
    {
      icon: "🐹",
      language: "Go SDK",
      packageName: "orbit-go",
      status: "Active",
      description:
        "Community-maintained Go client for Orbit APIs with strong typing and modern tooling.",
    },
    {
      icon: "🐘",
      language: "PHP SDK",
      packageName: "orbit-php",
      status: "Active",
      description:
        "Integrate Orbit into Laravel, Symfony, and custom PHP applications.",
    },
    {
      icon: "💎",
      language: "Ruby SDK",
      packageName: "orbit-ruby",
      status: "Beta",
      description:
        "Elegant Ruby wrapper for Orbit APIs with a developer-friendly interface.",
    },
    {
      icon: "🦀",
      language: "Rust SDK",
      packageName: "orbit-rs",
      status: "Experimental",
      description:
        "High-performance Rust bindings for developers building scalable systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            Community SDKs
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
            Built by the Community
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-slate-600">
            Explore open-source SDKs, integrations, and tools built by
            developers around the world extending the Orbit ecosystem.
          </p>
        </div>
      </section>

      {/* SDK Cards */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Featured Community SDKs
        </h2>

        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
          {sdks.map((sdk) => (
            <div
              key={sdk.packageName}
              className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-4xl sm:text-5xl">{sdk.icon}</div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {sdk.status}
                </span>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
                {sdk.language}
              </h3>

              <p className="mt-2 font-mono text-sm text-blue-600 break-all">
                {sdk.packageName}
              </p>

              <p className="mt-4 text-slate-600">
                {sdk.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-black">
                  View SDK
                </button>

                <button className="rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Why Community SDKs?
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: "🌎",
              title: "More Languages",
              desc: "Use Orbit in more programming ecosystems.",
            },
            {
              icon: "🚀",
              title: "Faster Innovation",
              desc: "Community builds new tools quickly.",
            },
            {
              icon: "🛠",
              title: "Open Source",
              desc: "Fully inspectable and modifiable code.",
            },
            {
              icon: "🤝",
              title: "Community Support",
              desc: "Learn and grow with other developers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-5 text-lg sm:text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-slate-900 p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Build the Next Orbit SDK
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Create libraries, tools, and integrations for the Orbit ecosystem.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
              Submit SDK
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              View GitHub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}