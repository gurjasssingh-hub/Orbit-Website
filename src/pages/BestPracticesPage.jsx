import { Link } from "react-router-dom";
import {
  Shield,
  Workflow,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function BestPracticesPage() {
  const sections = [
    {
      title: "Security First",
      icon: Shield,
      description:
        "Protect your workspace with strong authentication, access controls, and monitoring.",
      tips: [
        "Enable multi-factor authentication",
        "Rotate API keys regularly",
        "Review user permissions monthly",
      ],
    },
    {
      title: "Workflow Optimization",
      icon: Workflow,
      description:
        "Build efficient processes that scale with your organization.",
      tips: [
        "Standardize workflow templates",
        "Automate repetitive tasks",
        "Document approval processes",
      ],
    },
    {
      title: "Team Collaboration",
      icon: Users,
      description:
        "Improve communication and ownership across teams.",
      tips: [
        "Assign clear responsibilities",
        "Use shared documentation",
        "Track progress with dashboards",
      ],
    },
    {
      title: "Performance & Automation",
      icon: Zap,
      description:
        "Reduce manual work and increase operational efficiency.",
      tips: [
        "Monitor key metrics",
        "Create automated alerts",
        "Review workflow bottlenecks",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Best Practices
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Build smarter workflows with proven strategies.
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-zinc-400">
            Learn industry-tested practices for security, workflow design,
            collaboration, and automation to get the most out of Orbit.
          </p>
        </div>
      </section>

      {/* Best Practice Sections */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <section.icon className="h-10 w-10 text-emerald-400" />

              <h2 className="mt-5 text-2xl font-semibold">
                {section.title}
              </h2>

              <p className="mt-3 text-zinc-400">
                {section.description}
              </p>

              <div className="mt-6 space-y-3">
                {section.tips.map((tip) => (
                  <div
                    key={tip}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                    <span className="text-zinc-300">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Recommendations */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-3xl font-bold">
            Recommended Success Framework
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              "Plan",
              "Build",
              "Automate",
              "Optimize",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 p-6 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">
                  {index + 1}
                </div>

                <h3 className="mt-4 font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
            <h2 className="text-3xl font-bold">
              Ready to improve your workflows?
            </h2>

            <p className="mt-4 text-zinc-400">
              Explore templates, guides, and resources designed to help teams
              work more efficiently.
            </p>

            <Link
              to="/Resourcespages/guides"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
            >
              View Guides
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}