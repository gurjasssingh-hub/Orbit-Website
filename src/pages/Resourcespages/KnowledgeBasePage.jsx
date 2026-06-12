import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  Shield,
  Workflow,
  CreditCard,
  Settings,
  ArrowRight,
} from "lucide-react";


export default function KnowledgeBasePage() {
  const categories = [
    {
      title: "Getting Started",
      description: "Setup guides, onboarding, and first steps.",
      icon: BookOpen,
      articles: 24,
    },
    {
      title: "Account & Security",
      description: "Authentication, permissions, and security settings.",
      icon: Shield,
      articles: 18,
    },
    {
      title: "Workflows",
      description: "Automation, projects, and operational processes.",
      icon: Workflow,
      articles: 31,
    },
    {
      title: "Billing",
      description: "Subscriptions, invoices, and payment management.",
      icon: CreditCard,
      articles: 15,
    },
    {
      title: "Platform Settings",
      description: "Customize and manage your Orbit workspace.",
      icon: Settings,
      articles: 20,
    },
  ];


  const popularArticles = [
    "Getting Started with Orbit",
    "Managing Team Members",
    "Creating Your First Workflow",
    "Understanding Billing Cycles",
    "API Authentication Guide",
  ];


  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
              Knowledge Base
            </span>


            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
              Find answers instantly.
            </h1>


            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Browse hundreds of articles covering setup, workflows, billing,
              security, integrations, and platform management.
            </p>


            {/* Search */}
            <div className="mt-8 flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-3 sm:py-4">
              <Search className="h-5 w-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="ml-3 w-full bg-transparent outline-none placeholder:text-zinc-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-semibold">Browse Categories</h2>


        <div className="mt-6 sm:mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition hover:border-cyan-500/40 hover:bg-white/[0.05]"
            >
              <category.icon className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />


              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">
                {category.title}
              </h3>


              <p className="mt-2 text-sm text-zinc-400">
                {category.description}
              </p>


              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-zinc-500">
                  {category.articles} articles
                </span>


                <ArrowRight className="h-4 w-4 text-zinc-500 transition group-hover:text-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Popular Articles */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Popular Articles
          </h2>


          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            {popularArticles.map((article) => (
              <button
                key={article}
                className="flex w-full items-center justify-between rounded-xl border border-white/10 px-3 sm:px-4 py-3 sm:py-4 text-left transition hover:border-cyan-500/30 hover:bg-white/[0.04]"
              >
                <span className="text-sm sm:text-base">{article}</span>
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 sm:p-8 md:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Still need help?
            </h2>


            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Our support team is ready to assist with any questions.
            </p>


            <Link
              to="/support/contact"
              className="mt-6 inline-flex items-center rounded-xl bg-cyan-500 px-4 sm:px-5 py-2.5 sm:py-3 font-medium text-black transition hover:bg-cyan-400"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}