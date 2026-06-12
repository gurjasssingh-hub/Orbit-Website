import React from "react";

const categories = [
  { title: "Account & Login", href: "/Help/AccountLoginGuide" },
  { title: "Billing & Payments", href: "/Help/BillingPaymentsGuide" },
  { title: "API Issues", href: "/Help/ApiIssuesGuide " },
  { title: "Workflows", href: "/Help/WorkflowsGuide" },
  { title: "Security", href: "/Help/SecurityGuide" },
  { title: "Troubleshooting", href: "/Help/TroubleshootingGuide" },
];

const quickActions = [
  { title: "Reset Password", href: "/Help/ResetPasswordPage" },
  { title: "Check System Status", href: "/Help/StatusPage" },
  { title: "Contact Support", href: "/Help/SupportPage" },
  { title: "Report a Bug", href: "/Help/ReportBugPage" },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">

      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 sm:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            How can we help?
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Search for articles, errors, or topics.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search for articles, errors, or topics..."
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-xl sm:text-2xl font-semibold mb-8">
            Browse by category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {categories.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-gray-300 hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  View related help articles →
                </p>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-xl sm:text-2xl font-semibold mb-8">
            Quick actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {quickActions.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="p-4 sm:p-5 bg-white border border-gray-100 rounded-xl hover:border-gray-300 transition"
              >
                <span className="font-medium">{item.title}</span>
                <p className="text-sm text-gray-500 mt-1">
                  Open →
                </p>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* FLOW GUIDE */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-xl sm:text-2xl font-semibold">
            Support Flow
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Find answers fast, escalate when needed.
          </p>

          <div className="mt-10 space-y-4 text-left">

            <div className="p-4 sm:p-5 border rounded-xl">
              <p className="font-medium">1. Search Help Center</p>
              <p className="text-gray-600 text-sm mt-1">
                Find instant answers using the search bar.
              </p>
            </div>

            <div className="p-4 sm:p-5 border rounded-xl">
              <p className="font-medium">2. Browse Categories</p>
              <p className="text-gray-600 text-sm mt-1">
                Explore structured help topics by area.
              </p>
            </div>

            <div className="p-4 sm:p-5 border rounded-xl">
              <p className="font-medium">3. Contact Support</p>
              <p className="text-gray-600 text-sm mt-1">
                If needed, escalate directly to the Orbit team.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Help;