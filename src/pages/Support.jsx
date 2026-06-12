import React from "react";
import { Link } from "react-router-dom";
import {
  LifeBuoy,
  Search,
  FileText,
  Shield,
  Clock3,
  ArrowRight,
} from "lucide-react";


const Support = () => {
  return (
    <div className="bg-[#f7f9fc] min-h-screen">


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-40 sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]" />
        </div>


        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-16 sm:px-6 sm:pt-20 sm:pb-20 md:pt-28 md:pb-24">


          <div className="text-center max-w-4xl mx-auto">


            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
              <LifeBuoy size={14} className="sm:size-16" />
              Orbit Support Center
            </div>


            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:mt-8">
              Expert Support,
              <br />
              When You Need It.
            </h1>


            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto sm:mt-8 sm:text-xl sm:max-w-3xl">
              Access technical assistance, account support, onboarding guidance,
              and detailed resources designed to keep your team productive and
              moving forward.
            </p>


            {/* Search */}
            <div className="mt-8 max-w-2xl mx-auto sm:mt-12">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
                <Search className="text-slate-400" size={18} sm:size-20 />
                <input
                  type="text"
                  placeholder="Search articles, guides, troubleshooting..."
                  className="w-full outline-none text-slate-700 text-sm sm:text-base"
                />
              </div>
            </div>


            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 sm:mt-10">
              <Link
                to="/Help/SupportPage"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-black transition-all sm:rounded-xl sm:px-8 sm:py-4"
              >
                Contact Support
                <ArrowRight size={16} className="sm:size-18" />
              </Link>


              <Link
                to="/Help"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50 transition-all sm:rounded-xl sm:px-8 sm:py-4"
              >
                Browse Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURE CARDS */}
      <section className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">


          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition sm:rounded-3xl sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center sm:w-12 sm:h-12 sm:rounded-xl">
              <FileText className="text-slate-700" size={20} className="sm:size-9" />
            </div>


            <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:mt-6 sm:text-xl">
              Documentation
            </h3>


            <p className="mt-2 text-sm text-slate-600 leading-relaxed sm:mt-3 sm:text-base">
              Explore detailed product guides, tutorials, API references,
              and best practices.
            </p>


            <Link
              to="/docs"
              className="mt-4 inline-flex items-center gap-1.5 text-slate-900 font-medium sm:mt-6 sm:gap-2"
            >
              Explore Docs
              <ArrowRight size={14} className="sm:size-16" />
            </Link>
          </div>


          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition sm:rounded-3xl sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center sm:w-12 sm:h-12 sm:rounded-xl">
              <Clock3 className="text-slate-700" size={20} className="sm:size-9" />
            </div>


            <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:mt-6 sm:text-xl">
              System Status
            </h3>


            <p className="mt-2 text-sm text-slate-600 leading-relaxed sm:mt-3 sm:text-base">
              Monitor platform uptime, incidents, maintenance schedules,
              and service availability.
            </p>


            <Link
              to="/Help/StatusPage"
              className="mt-4 inline-flex items-center gap-1.5 text-slate-900 font-medium sm:mt-6 sm:gap-2"
            >
              View Status
              <ArrowRight size={14} className="sm:size-16" />
            </Link>
          </div>


          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition sm:rounded-3xl sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center sm:w-12 sm:h-12 sm:rounded-xl">
              <Shield className="text-slate-700" size={20} className="sm:size-9" />
            </div>


            <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:mt-6 sm:text-xl">
              Security & Compliance
            </h3>


            <p className="mt-2 text-sm text-slate-600 leading-relaxed sm:mt-3 sm:text-base">
              Access security documentation, compliance reports,
              and privacy information.
            </p>


            <Link
              to="/Help/SecurityGuide"
              className="mt-4 inline-flex items-center gap-1.5 text-slate-900 font-medium sm:mt-6 sm:gap-2"
            >
              Learn More
              <ArrowRight size={14} className="sm:size-16" />
            </Link>
          </div>


        </div>
      </section>


      {/* PREMIUM CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 sm:pb-24 md:pb-28">
        <div className="bg-slate-900 rounded-[24px] p-8 md:p-16 text-center sm:rounded-[32px] sm:p-10">


          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Personalized Assistance?
          </h2>


          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-base md:mt-5 md:max-w-2xl md:text-lg">
            Our support specialists are available to help with technical
            questions, onboarding guidance, account management, and more.
          </p>


          <Link
            to="/SupportRequest"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-all sm:mt-8 sm:rounded-xl sm:px-8 sm:py-4"
          >
            Submit a Support Request
            <ArrowRight size={16} className="sm:size-18" />
          </Link>


        </div>
      </section>


    </div>
  );
};


export default Support;