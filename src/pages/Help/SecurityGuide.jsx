import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  Shield,
  Lock,
  KeyRound,
  Eye,
  ChevronRight,
  BadgeCheck,
  Activity,
} from "lucide-react";

export default function SecurityGuide() {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      icon: Lock,
      title: "Account Security",
      description:
        "Protect your account with strong authentication and access controls.",
    },
    {
      icon: KeyRound,
      title: "API Keys & Credentials",
      description:
        "Learn how to securely manage, rotate, and revoke credentials.",
    },
    {
      icon: Eye,
      title: "Audit Logs",
      description:
        "Track account activity and monitor important security events.",
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description:
        "Recommended guidelines for securing projects and environments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="border-b" aria-labelledby="hero-heading">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10">
          <Link
            to="/Help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium mb-4">
              <Shield className="h-3 w-3" aria-hidden="true" />
              Security
            </div>

            <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Security & Protection Center
            </h1>

            <p className="text-base md:text-lg text-muted-foreground">
              Learn how Orbit protects your data and discover best practices
              for securing accounts, API credentials, and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Search Input */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-8" aria-label="Search articles">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search security articles"
            placeholder="Search security articles..."
            className="w-full rounded-xl border bg-background py-3 pl-11 pr-4 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
          />
        </div>
      </section>

      {/* Security Highlights */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-6 md:pb-8" aria-label="Security standards">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border p-5 bg-card">
            <BadgeCheck className="h-5 w-5 mb-3 text-primary" aria-hidden="true" />
            <h3 className="font-semibold text-sm md:text-base">SOC Compliance</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Enterprise-grade controls and security standards.
            </p>
          </div>

          <div className="rounded-2xl border p-5 bg-card">
            <Lock className="h-5 w-5 mb-3 text-primary" aria-hidden="true" />
            <h3 className="font-semibold text-sm md:text-base">Encryption</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Data encrypted both in transit and at rest.
            </p>
          </div>

          <div className="rounded-2xl border p-5 bg-card sm:col-span-2 lg:col-span-1">
            <Activity className="h-5 w-5 mb-3 text-primary" aria-hidden="true" />
            <h3 className="font-semibold text-sm md:text-base">Monitoring</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Continuous monitoring and threat detection systems.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-8 md:pb-12" aria-label="Support topics">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              to="#"
              className="group flex flex-col justify-between rounded-2xl border bg-card p-5 transition-all outline-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-start justify-between">
                  <article.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-semibold text-base md:text-lg">
                  {article.title}
                </h3>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Security Checklist Section */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-16 md:pb-20" aria-label="Recommendations">
        <div className="rounded-2xl md:rounded-3xl border overflow-hidden bg-card">
          <div className="border-b bg-muted/30 px-5 py-3">
            <h2 className="text-sm font-medium tracking-wide text-foreground">
              Recommended Security Checklist
            </h2>
          </div>

          <div className="p-5">
            <ul className="space-y-3 text-sm text-muted-foreground list-none pl-0">
              <li className="flex items-start gap-2">
                <span className="text-primary select-none" aria-hidden="true">✓</span>
                <span>Enable two-factor authentication (2FA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary select-none" aria-hidden="true">✓</span>
                <span>Rotate API keys regularly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary select-none" aria-hidden="true">✓</span>
                <span>Review audit logs frequently</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary select-none" aria-hidden="true">✓</span>
                <span>Restrict permissions using least privilege</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary select-none" aria-hidden="true">✓</span>
                <span>Monitor suspicious account activity</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}