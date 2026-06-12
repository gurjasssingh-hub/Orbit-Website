import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  Wrench,
  AlertTriangle,
  RefreshCw,
  Bug,
  Activity,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export default function TroubleshootingGuide() {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      icon: AlertTriangle,
      title: "Common Errors",
      description:
        "Understand the most frequently reported issues and how to resolve them.",
    },
    {
      icon: RefreshCw,
      title: "Sync & Connection Problems",
      description:
        "Fix syncing failures, connectivity issues, and delayed updates.",
    },
    {
      icon: Bug,
      title: "Unexpected Behavior",
      description:
        "Troubleshoot broken workflows, failed actions, and system errors.",
    },
    {
      icon: Activity,
      title: "Performance Issues",
      description:
        "Improve loading times, workflow execution, and platform responsiveness.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="border-b" aria-labelledby="trouble-heading">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10">
          <Link
            to="/Help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Guides
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium mb-4">
              <Wrench className="h-3 w-3 text-primary" aria-hidden="true" />
              Troubleshooting
            </div>

            <h1 id="trouble-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Diagnose & Resolve Issues
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Find solutions for common errors, connection problems,
              performance issues, and unexpected behavior across Orbit.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar Input */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-8" aria-label="Search articles">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search troubleshooting articles"
            placeholder="Search troubleshooting articles..."
            className="w-full rounded-xl border bg-background py-3 pl-11 pr-4 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
          />
        </div>
      </section>

      {/* Quick Filter Fixes */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-6 md:pb-8" aria-label="Quick links filter">
        <div className="rounded-2xl border bg-muted/30 p-4 sm:p-5">
          <h2 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
            Quick Troubleshooting Topics
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Login Errors",
              "API Failures",
              "Workflow Issues",
              "Slow Performance",
              "Sync Problems",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setSearchQuery(item)}
                className="rounded-full border bg-card px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors outline-none hover:bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid Map */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-8 md:pb-12" aria-label="Guides index">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              to="#"
              className="group flex flex-col justify-between rounded-2xl border bg-card p-5 transition-all outline-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-start justify-between">
                  <article.icon className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-semibold text-base md:text-lg">
                  {article.title}
                </h3>
              </div>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Diagnostic Checklist Card */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-16 md:pb-20" aria-label="Pre-flight suggestions">
        <div className="rounded-2xl md:rounded-3xl border overflow-hidden bg-card">
          <div className="border-b bg-muted/30 px-5 py-3.5 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
            <h2 className="text-sm font-medium tracking-wide text-foreground">
              Before Contacting Support
            </h2>
          </div>

          <div className="p-5">
            <ul className="space-y-3 text-sm text-muted-foreground list-none pl-0">
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-medium select-none" aria-hidden="true">✓</span>
                <span>Refresh and retry the execution flow action</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-medium select-none" aria-hidden="true">✓</span>
                <span>Verify specific account organization permissions</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-medium select-none" aria-hidden="true">✓</span>
                <span>Check credential verification configurations and headers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-medium select-none" aria-hidden="true">✓</span>
                <span>Review detailed browser console log trace dumps</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary font-medium select-none" aria-hidden="true">✓</span>
                <span>Confirm active live tracking on global platform status indicators</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}