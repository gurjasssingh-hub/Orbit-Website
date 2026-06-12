import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect backend API authentication routes here:
    console.log({ email, password, rememberMe });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] px-6 select-none flex items-center justify-center">

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-100/60 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">

        {/* LEFT MARKETING PANEL */}
        <div className="hidden lg:flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-neutral-800">
              Welcome back to Orbit
            </span>
          </div>

          <h1 className="mt-8 text-5xl xl:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Work smarter,
            <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              every single day.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-neutral-600 leading-relaxed">
            Access your meetings, workflows, automations, team collaboration, and AI-powered productivity tools from one unified workspace.
          </p>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-8 w-full max-w-md border-t border-neutral-200/60 pt-8">
            <div>
              <h3 className="text-3xl font-extrabold text-neutral-900">50k+</h3>
              <p className="text-neutral-500 mt-1.5 text-sm font-medium">Active Users</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-neutral-900">1M+</h3>
              <p className="text-neutral-500 mt-1.5 text-sm font-medium">Automated Tasks</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-neutral-900">99.9%</h3>
              <p className="text-neutral-500 mt-1.5 text-sm font-medium">Core Uptime</p>
            </div>
          </div>
        </div>

        {/* RIGHT INTERACTIVE LOGIN CARD */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-md rounded-3xl border border-white/80 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            
            {/* Form Header */}
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white font-bold text-lg shadow-sm">
                O
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Sign in to continue to your Orbit dashboard.
              </p>
            </div>

            {/* Social Authentication Access Button */}
            <button 
              type="button"
              className="mt-8 w-full h-12 rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 hover:text-black transition active:scale-[0.98]"
            >
              Continue with Google
            </button>

            {/* Visual Divider Segment */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-neutral-200/80" />
              </div>
              <span className="relative bg-[#fbfbfb] px-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Or secure login
              </span>
            </div>

            {/* Core Authentication Interaction Fields Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Entry Section */}
              <div>
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 rounded-xl border border-neutral-200 bg-white/50 pl-11 pr-4 outline-none text-sm text-neutral-900 focus:border-black focus:bg-white transition shadow-sm"
                  />
                </div>
              </div>

              {/* Password Entry Section */}
              <div>
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Password
                </label>
                <div className="relative mt-2">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 rounded-xl border border-neutral-200 bg-white/50 pl-11 pr-11 outline-none text-sm text-neutral-900 focus:border-black focus:bg-white transition shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember State / Recovery Links */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-600 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-300 accent-black text-white focus:ring-0 cursor-pointer"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm font-semibold text-neutral-900 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Dispatch Action Process trigger button */}
              <button
                type="submit"
                className="group w-full h-12 mt-2 rounded-xl bg-black text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition shadow-md active:scale-[0.99]"
              >
                <span>Sign In</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
              </button>
            </form>

            {/* Bottom Card Footer Navigation Link Container */}
            <div className="mt-6 text-center text-sm text-neutral-500 font-medium">
              Don't have an account?
              <button type="button" className="ml-1.5 font-bold text-neutral-900 hover:underline">
                Create Account
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Login;