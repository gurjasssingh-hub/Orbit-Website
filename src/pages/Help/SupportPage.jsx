import {
  ArrowLeft,
  MessageSquare,
  Mail,
  FileText,
  Clock3,
  ChevronRight,
  LifeBuoy,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SupportPage() {
  const options = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get real-time assistance from our support team.",
      href: "#chat", // Update with your actual chat route or handler click state
    },
    {
      icon: Mail,
      title: "Submit a Ticket",
      description: "Describe your issue and receive help via email.",
      href: "/support/ticket",
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Browse guides, tutorials, and troubleshooting articles.",
      href: "/knowledge-base",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="border-b" aria-labelledby="support-heading">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-6 md:py-10">
          <Link
            to="/Help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Help Center
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium mb-4">
              <LifeBuoy className="h-3 w-3 text-primary animate-spin-slow" aria-hidden="true" />
              Support Center
            </div>

            <h1 id="support-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              How can we help?
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Get assistance with your Orbit account, billing,
              workflows, integrations, or technical issues.
            </p>
          </div>
        </div>
      </section>

      {/* Support Cards Grid Options */}
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-6 md:py-10" aria-label="Support Channels">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {options.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border bg-card p-5 sm:p-6 transition-all outline-none hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-start justify-between">
                  <item.icon className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>

                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Response Times SLA Block */}
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 pb-6 md:pb-10" aria-label="Response Time Expectations">
        <div className="rounded-2xl sm:rounded-3xl border p-5 sm:p-6 bg-card">
          <div className="flex items-center gap-2 mb-4">
            <Clock3 className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <h2 className="text-base sm:text-lg font-semibold">
              Typical Response Times
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <div className="rounded-xl border p-4 bg-background/50">
              <p className="font-medium text-sm sm:text-base">Live Chat</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Under 5 minutes
              </p>
            </div>

            <div className="rounded-xl border p-4 bg-background/50">
              <p className="font-medium text-sm sm:text-base">Email Support</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Within 24 hours
              </p>
            </div>

            <div className="rounded-xl border p-4 bg-background/50">
              <p className="font-medium text-sm sm:text-base">Priority Support</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Within 1 hour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Creation CTA */}
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-20" aria-label="Personal assistance request">
        <div className="rounded-2xl sm:rounded-3xl border bg-muted/30 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Need personalized assistance?
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Our support team can help with technical issues,
            billing questions, integrations, account management,
            and workflow troubleshooting.
          </p>

          <Link
            to="/support/ticket"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Create Support Ticket
          </Link>
        </div>
      </section>
    </div>
  );
}