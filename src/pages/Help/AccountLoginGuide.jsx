import { Link } from "react-router-dom";
import React from "react";
import {
  ArrowLeft,
  Search,
  Shield,
  Key,
  User,
  Lock,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export default function AccountLoginGuide() {
  const articles = [
    {
      icon: User,
      title: "Manage Your Account",
      desc: "Update profile information, preferences, and settings.",
    },
    {
      icon: Key,
      title: "Password & Security",
      desc: "Reset passwords and strengthen account protection.",
    },
    {
      icon: Lock,
      title: "Two-Factor Authentication",
      desc: "Add an extra layer of security to your account.",
    },
    {
      icon: AlertCircle,
      title: "Login Issues",
      desc: "Troubleshoot sign-in errors and account access problems.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10">
          <Link
            to="/Help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-4">
              <Shield className="h-3 w-3" />
              Account & Login
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Account & Login Help
            </h1>

            <p className="text-base md:text-lg text-muted-foreground">
              Everything you need to manage your Orbit account, secure access,
              and resolve login issues.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-8">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search account articles..."
            className="w-full rounded-xl border bg-background pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
          />
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-12 md:pb-16">
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.title}
              to="#"
              className="group flex flex-col justify-between rounded-2xl border p-5 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-start justify-between">
                  <article.icon className="h-5 w-5 text-primary" />
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>

                <h3 className="font-semibold text-base md:text-lg mt-4 mb-2">
                  {article.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {article.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}