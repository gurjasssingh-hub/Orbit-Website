import React, { useState } from "react";
import { Users, Sparkles, X, ArrowRight } from "lucide-react";

const perks = [
  "Exclusive product announcements",
  "Early access to new features",
  "Community discussions",
  "Workflow templates",
  "Live events & webinars",
  "Direct feedback opportunities",
];

const CommunityJoinModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="group relative overflow-hidden rounded-2xl bg-slate-950 m-20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
      >
        <span className="relative z-10 flex items-center gap-2">
          Join Community
          <ArrowRight size={18} />
        </span>

        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[36px] border border-white/20 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.25)]">

            {/* Glow Background */}
            <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-100"
            >
              <X size={18} />
            </button>

            <div className="relative grid lg:grid-cols-2">
              {/* LEFT COLUMN */}
              <div className="bg-slate-950 p-8 md:p-12 text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles size={14} />
                  Orbit Community
                </div>

                <h2 className="mt-6 text-4xl font-bold tracking-tight">
                  Connect With Modern Teams
                </h2>

                <p className="mt-4 text-slate-300">
                  Join a growing network of builders, operators, developers,
                  and organizations using Orbit to streamline operations.
                </p>

                <div className="mt-10 space-y-4">
                  {perks.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-violet-400" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <Users size={22} />
                    <div>
                      <h4 className="font-semibold">
                        Growing Community
                      </h4>
                      <p className="text-sm text-slate-400">
                        Connect with members worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-slate-950">
                  Join Today
                </h3>

                <p className="mt-3 text-slate-500">
                  Complete the form below and become part of the Orbit
                  community.
                </p>

                <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-violet-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none transition focus:border-violet-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Role
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 px-4 py-4 outline-none bg-white transition focus:border-violet-500">
                      <option>Select your role</option>
                      <option>Founder</option>
                      <option>Developer</option>
                      <option>Designer</option>
                      <option>Operator</option>
                      <option>Student</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.01]"
                  >
                    Join Community
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </form>

                <p className="mt-5 text-center text-sm text-slate-500">
                  No spam. Only valuable updates, events, and community
                  discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityJoinModal;