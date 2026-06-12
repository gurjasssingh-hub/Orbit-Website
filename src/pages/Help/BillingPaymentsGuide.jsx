import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  CreditCard,
  Receipt,
  Wallet,
  AlertTriangle,
  ChevronRight,
  BadgeDollarSign,
} from "lucide-react";

export default function BillingPaymentsGuide() {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      icon: CreditCard,
      title: "Manage Payment Methods",
      description: "Add, remove, or update cards and billing information.",
    },
    {
      icon: Receipt,
      title: "Invoices & Receipts",
      description: "Download invoices, payment receipts, and billing history.",
    },
    {
      icon: Wallet,
      title: "Subscriptions & Plans",
      description: "Upgrade, downgrade, or manage your current plan.",
    },
    {
      icon: AlertTriangle,
      title: "Failed Payments",
      description: "Resolve declined transactions and billing issues.",
    },
  ];

  const handlePopularTopicClick = (topic) => {
    setSearchQuery(topic);
    // Optional: add auto-focus to input or direct execution logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b">
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
              <BadgeDollarSign className="h-3 w-3" />
              Billing & Payments
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Billing & Payment Support
            </h1>

            <p className="text-base md:text-lg text-muted-foreground">
              Manage subscriptions, payment methods, invoices, and
              billing-related questions from one place.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search billing articles"
            placeholder="Search billing articles..."
            className="w-full rounded-xl border bg-background py-3 pl-11 pr-4 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
          />
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-6 md:pb-8">
        <div className="rounded-2xl border bg-muted/30 p-4 md:p-5">
          <h2 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Popular Topics</h2>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "Update Card",
              "Download Invoice",
              "Cancel Subscription",
              "Failed Payment",
              "Billing Address",
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => handlePopularTopicClick(topic)}
                className="rounded-full border bg-background px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm transition-all hover:bg-muted/60 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-12 md:pb-16">
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              to="#"
              className="group flex flex-col justify-between rounded-2xl border bg-card p-5 transition-all outline-none hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-start justify-between">
                  <article.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" aria-hidden="true" />
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

      {/* Contact Card */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-16 md:pb-20">
        <div className="rounded-2xl md:rounded-3xl border bg-gradient-to-br from-muted/50 to-background p-6 md:p-8 text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Need Billing Assistance?
          </h2>

          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
            Our billing specialists can help with payments,
            subscriptions, invoices, and account charges.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm md:text-base text-primary-foreground font-medium transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Contact Billing Support
          </Link>
        </div>
      </section>
    </div>
  );
}