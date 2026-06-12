import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] px-4 py-10 sm:px-6 sm:py-12 md:py-10">


      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-100 blur-3xl opacity-60 sm:w-[750px] sm:h-[750px] md:w-[900px] md:h-[900px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-purple-100 blur-3xl opacity-60 sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px]" />
      </div>


      <div className="w-full max-w-6xl grid gap-8 items-center lg:grid-cols-2 lg:gap-12">


        {/* Left Side */}
        <div className="hidden lg:block">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            🚀 AI-Powered Workspace
          </span>


          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl">
            Join the future of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              productivity.
            </span>
          </h1>


          <p className="mt-4 max-w-md text-base text-neutral-600 leading-relaxed sm:mt-6 sm:max-w-lg sm:text-lg">
            Create your Orbit account and manage meetings, workflows,
            knowledge, automation, and collaboration from one intelligent
            workspace.
          </p>


          <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
            {[
              "AI Meeting Assistant",
              "Knowledge Search",
              "Workflow Automation",
              "Team Collaboration",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-neutral-700 sm:gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Form Card */}
        <div className="relative">
          <div className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10">


            <div className="text-center">
              <h2 className="text-2xl font-bold text-black sm:text-3xl">
                Create Account
              </h2>


              <p className="mt-2 text-sm text-neutral-500 sm:mt-3 sm:text-base">
                Start building with Orbit today.
              </p>
            </div>


            {/* OAuth */}
            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
              <button className="h-10 rounded-lg border border-neutral-200 bg-white font-medium hover:bg-neutral-50 transition sm:h-12 sm:rounded-xl">
                Continue with Google
              </button>


              <button className="h-10 rounded-lg border border-neutral-200 bg-white font-medium hover:bg-neutral-50 transition sm:h-12 sm:rounded-xl">
                Continue with Microsoft
              </button>
            </div>


            {/* Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="border-t border-neutral-200" />
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-neutral-400 sm:px-4 sm:text-sm">
                OR
              </span>
            </div>


            {/* Form */}
            <form className="space-y-4 sm:space-y-5">


              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Full Name
                </label>


                <div className="relative mt-1.5 sm:mt-2">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
                  />


                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-12 rounded-lg border border-neutral-200 bg-white pl-10 pr-3 outline-none focus:border-black transition sm:h-14 sm:rounded-xl sm:pl-12 sm:pr-4"
                  />
                </div>
              </div>


              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Email Address
                </label>


                <div className="relative mt-1.5 sm:mt-2">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
                  />


                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 rounded-lg border border-neutral-200 bg-white pl-10 pr-3 outline-none focus:border-black transition sm:h-14 sm:rounded-xl sm:pl-12 sm:pr-4"
                  />
                </div>
              </div>


              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Password
                </label>


                <div className="relative mt-1.5 sm:mt-2">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 sm:left-4"
                  />


                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="w-full h-12 rounded-lg border border-neutral-200 bg-white pl-10 pr-10 outline-none focus:border-black transition sm:h-14 sm:rounded-xl sm:pl-12 sm:pr-12"
                  />


                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 sm:right-4"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>


              <div className="flex items-start gap-2.5 sm:gap-3">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4"
                />


                <p className="text-sm text-neutral-500 leading-relaxed">
                  I agree to the Terms of Service and Privacy
                  Policy.
                </p>
              </div>


              <button
                type="submit"
                className="group w-full h-12 rounded-lg bg-black text-white font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition sm:h-14 sm:rounded-xl"
              >
                Create Account


                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </form>


            {/* Footer */}
            <div className="mt-6 text-center text-xs text-neutral-500 sm:mt-8 sm:text-sm">
              Already have an account?
              <button className="ml-1.5 font-semibold text-black hover:underline sm:ml-2">
                Sign In
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};


export default Signup;