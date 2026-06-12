import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  ArrowLeft,
  Bug,
  Upload,
  AlertTriangle,
  Send,
} from "lucide-react";

export default function ReportBugPage() {
  const [formData, setFormData] = useState({
    title: "",
    severity: "Low",
    description: "",
    steps: "",
    expected: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your submission handler logic here
    console.log("Submitting Bug Report Data:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="border-b">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10">
          <Link
            to="/Help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Support
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-4">
              <Bug className="h-3 w-3" />
              Report a Bug
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">
              Help Us Improve Orbit
            </h1>

            <p className="text-base md:text-lg text-muted-foreground">
              Found something broken or unexpected? Submit a bug report
              and our engineering team will investigate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Formations */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-6 py-6 md:py-10">
        <div className="rounded-2xl md:rounded-3xl border p-5 md:p-8 bg-card">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Bug Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Brief summary of the issue"
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
                required
              />
            </div>

            <div>
              <label htmlFor="severity" className="block text-sm font-medium mb-2">
                Severity
              </label>
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                What happened?
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the issue in detail..."
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary resize-none transition-shadow"
                required
              />
            </div>

            <div>
              <label htmlFor="steps" className="block text-sm font-medium mb-2">
                Steps to Reproduce
              </label>
              <textarea
                id="steps"
                name="steps"
                rows={4}
                value={formData.steps}
                onChange={handleChange}
                placeholder={"1. Go to...\n2. Click...\n3. Observe..."}
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary resize-none transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="expected" className="block text-sm font-medium mb-2">
                Expected Result
              </label>
              <textarea
                id="expected"
                name="expected"
                rows={3}
                value={formData.expected}
                onChange={handleChange}
                placeholder="What should have happened?"
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none text-sm md:text-base focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary resize-none transition-shadow"
              />
            </div>

            <div>
              <span className="block text-sm font-medium mb-2">
                Attach Screenshot (Optional)
              </span>
              <label className="flex cursor-pointer flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl border border-dashed p-6 md:p-8 text-sm text-muted-foreground transition-colors hover:bg-muted/30 outline-none focus-within:ring-2 focus-within:ring-primary">
                <Upload className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="text-center">Upload Screenshot</span>
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Submit Bug Report
            </button>
          </form>
        </div>
      </section>

      {/* Helpful Tips Guidelines Info */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-6 pb-16 md:pb-20">
        <div className="rounded-2xl md:rounded-3xl border bg-muted/30 p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-warning" aria-hidden="true" />
            <h2 className="font-semibold text-base">
              Helpful Bug Reports Include
            </h2>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground list-none pl-0">
            <li>✓ Clear description of the issue</li>
            <li>✓ Steps required to reproduce it</li>
            <li>✓ Screenshots or recordings</li>
            <li>✓ Browser, device, or environment details</li>
            <li className="sm:col-span-2">✓ Any error messages shown</li>
          </ul>
        </div>
      </section>
    </div>
  );
}