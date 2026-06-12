import React from "react";
import {
  CheckCircle,
  Shield,
  FileText,
  Clock,
  Award,
  Users,
} from "lucide-react";

const guidelines = [
  "Provide original content and real-world experiences.",
  "Ensure technical accuracy and verify information before submitting.",
  "Use clear, professional, and easy-to-follow explanations.",
  "Include examples, screenshots, or code samples when relevant.",
  "Respect community members and maintain a constructive tone.",
  "Avoid promotional, spammy, or misleading content.",
];

const acceptedContributions = [
  "Tutorials & Guides",
  "Workflow Showcases",
  "Integration Examples",
  "Feature Suggestions",
  "Best Practices",
  "Community Resources",
];

const ContributionGuidelines = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            Community Contributions
          </span>

          <h1 className="mt-8 text-5xl font-bold text-slate-900 md:text-6xl">
            Contribution
            <span className="text-blue-600"> Guidelines</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            These guidelines help ensure every contribution delivers value,
            maintains quality standards, and creates a positive experience for
            the entire Orbit community.
          </p>
        </div>
      </section>

      {/* Accepted Contributions */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <FileText className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">
              Accepted Contributions
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {acceptedContributions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">
              Quality Standards
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {guidelines.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <CheckCircle
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-green-500"
                />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Clock className="text-blue-600" size={28} />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Submission
              </h3>
              <p className="mt-2 text-slate-600">
                Submit your content, workflow, guide, or suggestion through the
                contribution portal.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Users className="text-blue-600" size={28} />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Review
              </h3>
              <p className="mt-2 text-slate-600">
                Orbit moderators review submissions for quality, accuracy, and
                community value.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Award className="text-blue-600" size={28} />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Recognition
              </h3>
              <p className="mt-2 text-slate-600">
                Approved contributions may be featured and recognized across
                the Orbit ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Build Something Valuable
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Every tutorial, workflow, and idea shared helps developers learn,
            build, and grow faster. Thank you for contributing to the Orbit
            community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContributionGuidelines;