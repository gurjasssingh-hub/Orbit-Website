import React from "react";
import {
  Mic,
  Activity,
  Clock3,
  Sparkles,
  Calendar,
  BarChart3,
} from "lucide-react";
import Button2 from "./Button2";
import { NavLink, Link, useLocation } from "react-router-dom";

const stats = [
  {
    title: "Commands Processed",
    value: "12.4K",
    icon: Mic,
  },
  {
    title: "Workflow Accuracy",
    value: "94%",
    icon: Sparkles,
  },
  {
    title: "Hours Saved",
    value: "320h",
    icon: Clock3,
  },
  {
    title: "Avg Response Time",
    value: "2.4s",
    icon: Activity,
  },
];

const activities = [
  {
    user: "Alex",
    action: "Scheduled launch review",
    result: "Meeting created",
  },
  {
    user: "Emma",
    action: "Summarized unread emails",
    result: "12 emails summarized",
  },
  {
    user: "Daniel",
    action: "Created sprint tasks",
    result: "Tasks synced to Linear",
  },
];

export default function AnalyticsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-36">

  {/* BACKGROUND */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute top-0 left-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[600px] lg:h-[600px] lg:w-[800px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] lg:blur-[140px]" />

    <div className="absolute bottom-[-10%] right-[-5%] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] rounded-full bg-blue-400/10 blur-[80px] lg:blur-[120px]" />

  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* HEADING */}
    <div className="flex flex-col items-center gap-5 text-center">

      <h2 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1]">

        Understand how your team{" "}
        <span className="block">
          works with AI.
        </span>

      </h2>

      <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-2">

        Track voice activity, workflows, automation,
        and productivity in real time.

      </p>

      <div className="mt-2 sm:mt-3">

        <Link to="/book-demo">
          <Button2
            text="Get a demo"
            className="bg-black text-white hover:bg-neutral-800 font-medium border border-neutral-300"
          />
        </Link>

      </div>

    </div>

  </div>

</section>
  );
}