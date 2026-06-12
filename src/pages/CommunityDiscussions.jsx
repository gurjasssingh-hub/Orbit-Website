import React from "react";
import { Search, MessageSquare, Flame, Clock3, Plus } from "lucide-react";

const discussions = [
  {
    title: "Best practices for webhook signature verification",
    category: "Webhooks",
    replies: 24,
    author: "Orbit Team",
  },
  {
    title: "How should I structure large API integrations?",
    category: "API & SDKs",
    replies: 18,
    author: "Alex Chen",
  },
  {
    title: "Feature Request: Advanced Team Permissions",
    category: "Feature Requests",
    replies: 42,
    author: "Sarah Johnson",
  },
  {
    title: "Authentication examples for enterprise deployments",
    category: "Getting Started",
    replies: 12,
    author: "David Kim",
  },
];

const categories = [
  "All Discussions",
  "Getting Started",
  "API & SDKs",
  "Webhooks",
  "Feature Requests",
  "Troubleshooting",
  "Announcements",
];

const CommunityDiscussions = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              Community Discussions
            </span>

            <h1 className="mt-5 text-5xl font-bold text-slate-900">
              Join the Conversation
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Ask questions, share feedback, discover best practices,
              and collaborate with developers building on Orbit.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black">
            <Plus size={18} />
            New Discussion
          </button>
        </div>

        {/* Search */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Search size={20} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Discussion List */}
        <div className="mt-10 space-y-5">
          {discussions.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Started by {item.author}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-500">
                    <MessageSquare size={18} />
                    {item.replies} Replies
                  </div>

                  <button className="rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100">
                    View Thread
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Flame className="text-orange-500" />
            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              12K+
            </h3>
            <p className="mt-2 text-slate-600">
              Active Discussions
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <MessageSquare className="text-blue-600" />
            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              85K+
            </h3>
            <p className="mt-2 text-slate-600">
              Community Replies
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <Clock3 className="text-green-600" />
            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              24/7
            </h3>
            <p className="mt-2 text-slate-600">
              Community Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDiscussions;