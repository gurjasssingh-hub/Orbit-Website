import React, { useState } from "react";
import {
  Upload,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Building2,
  Mail,
  User,
  FileText,
  AlertCircle,
} from "lucide-react";


const SupportRequest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [priority, setPriority] = useState("Medium");


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const priorities = [
    {
      name: "Low",
      description: "General question or request",
    },
    {
      name: "Medium",
      description: "Needs attention soon",
    },
    {
      name: "High",
      description: "Blocking workflow",
    },
    {
      name: "Critical",
      description: "Service unavailable",
    },
  ];


  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl w-full bg-white rounded-[24px] border border-slate-200 shadow-xl p-8 sm:p-10 md:p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto sm:w-24 sm:h-24">
            <CheckCircle2 size={40} className="text-green-600 sm:size-48" />
          </div>


          <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:mt-8 sm:text-4xl">
            Request Submitted
          </h1>


          <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
            Your support request has been successfully received.
          </p>


          <div className="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-200 sm:mt-8 sm:rounded-2xl sm:p-6">
            <p className="text-xs text-slate-500 sm:text-sm">Ticket ID</p>


            <h2 className="text-2xl font-bold text-slate-900 mt-2 sm:text-3xl">
              #ORB-84721
            </h2>


            <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base">
              A confirmation email has been sent to your inbox. Our support
              specialists will review your request and get back to you shortly.
            </p>
          </div>


          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center sm:gap-4 sm:mt-8">
            <button className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-black transition sm:px-6 sm:py-3 sm:rounded-xl">
              View Help Center
            </button>


            <button className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition sm:px-6 sm:py-3 sm:rounded-xl">
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 px-4 sm:py-20 sm:px-6 md:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100 blur-3xl opacity-40 rounded-full sm:w-[750px] sm:h-[350px] md:w-[900px] md:h-[400px]" />


        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            <ShieldCheck size={14} className="sm:size-16" />
            Orbit Support
          </div>


          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:mt-8 sm:text-5xl md:text-6xl">
            Submit a Support Request
          </h1>


          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600 sm:mt-6 sm:max-w-3xl sm:text-xl">
            Need help? Our support team is ready to assist. Submit your request
            and we'll work with you to resolve it as quickly as possible.
          </p>


          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-medium text-slate-700 sm:px-5 sm:py-3 sm:text-sm">
              ✓ Average response within 24 hours
            </div>


            <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-medium text-slate-700 sm:px-5 sm:py-3 sm:text-sm">
              ✓ Priority support for Enterprise
            </div>


            <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs font-medium text-slate-700 sm:px-5 sm:py-3 sm:text-sm">
              ✓ Dedicated technical specialists
            </div>
          </div>
        </div>
      </section>


      {/* Main */}
      <section className="pb-16 px-4 sm:pb-20 sm:px-6 md:pb-24">
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* FORM */}
          <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6 lg:col-span-2 lg:rounded-[32px] lg:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Request Details
                </h2>


                <p className="mt-1.5 text-sm text-slate-600 md:mt-2 md:text-base">
                  Provide information about your issue and our team will
                  investigate.
                </p>
              </div>


              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Full Name
                </label>


                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:left-4"
                  />


                  <input
                    type="text"
                    placeholder="John Smith"
                    required
                    className="w-full h-12 pl-10 pr-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 md:h-14 md:rounded-xl md:pl-12 md:pr-4"
                  />
                </div>
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Work Email
                </label>


                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:left-4"
                  />


                  <input
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full h-12 pl-10 pr-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 md:h-14 md:rounded-xl md:pl-12 md:pr-4"
                  />
                </div>
              </div>


              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Company (Optional)
                </label>


                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:left-4"
                  />


                  <input
                    type="text"
                    placeholder="Orbit Inc."
                    className="w-full h-12 pl-10 pr-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 md:h-14 md:rounded-xl md:pl-12 md:pr-4"
                  />
                </div>
              </div>


              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Support Category
                </label>


                <select className="w-full h-12 px-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 md:h-14 md:px-4 md:rounded-xl">
                  <option>Technical Issue</option>
                  <option>Account Access</option>
                  <option>Billing & Subscription</option>
                  <option>Security Concern</option>
                  <option>Feature Request</option>
                  <option>API Support</option>
                  <option>General Inquiry</option>
                </select>
              </div>


              {/* Priority */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3 md:mb-4">
                  Priority Level
                </label>


                <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                  {priorities.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setPriority(item.name)}
                      className={`text-left rounded-xl border p-4 transition-all md:rounded-2xl md:p-5 ${
                        priority === item.name
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white hover:border-slate-400"
                      }`}
                    >
                      <div className="font-semibold text-sm md:text-base">{item.name}</div>
                      <div
                        className={`text-xs mt-0.5 md:text-sm md:mt-1 ${
                          priority === item.name
                            ? "text-slate-300"
                            : "text-slate-500"
                        }`}
                      >
                        {item.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>


              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Subject
                </label>


                <div className="relative">
                  <FileText
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:left-4"
                  />


                  <input
                    type="text"
                    placeholder="Brief summary of your issue"
                    required
                    className="w-full h-12 pl-10 pr-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 md:h-14 md:rounded-xl md:pl-12 md:pr-4"
                  />
                </div>
              </div>


              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Detailed Description
                </label>


                <textarea
                  rows={5}
                  placeholder="Describe the issue in detail, including any error messages, steps to reproduce the issue, and expected outcome."
                  className="w-full rounded-xl border border-slate-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-slate-900 md:rows-7 md:rounded-2xl md:p-4"
                />
              </div>


              {/* Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 md:mb-3">
                  Attach Files
                </label>


                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-slate-50 md:rounded-3xl md:p-10">
                  <Upload size={28} className="mx-auto text-slate-400 md:size-36" />


                  <h3 className="mt-3 font-semibold text-sm text-slate-900 md:mt-4 md:text-base">
                    Drag & Drop Files Here
                  </h3>


                  <p className="text-xs text-slate-500 mt-1.5 md:mt-2 md:text-sm">
                    PNG, JPG, PDF, TXT • Maximum 10MB
                  </p>


                  <button
                    type="button"
                    className="mt-3 px-4 py-2 rounded-lg bg-white border border-slate-300 font-medium hover:bg-slate-100 transition md:mt-5 md:px-5 md:py-3 md:rounded-xl"
                  >
                    Browse Files
                  </button>
                </div>
              </div>


              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-slate-900 text-white font-semibold text-base hover:bg-black transition shadow-lg hover:shadow-xl md:h-14 md:rounded-xl md:text-lg"
              >
                Submit Support Request
              </button>
            </form>
          </div>


          {/* SIDEBAR */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-[24px] border border-slate-200 p-6 shadow-sm sm:rounded-[28px] sm:p-8">
              <div className="flex items-center gap-2.5">
                <Clock3 className="text-slate-700" size={20} />
                <h3 className="font-bold text-lg text-slate-900 sm:text-xl">
                  Support Hours
                </h3>
              </div>


              <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                <div>
                  <p className="font-semibold text-sm text-slate-900 sm:text-base">
                    24/7 Critical Support
                  </p>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Available for enterprise incidents.
                  </p>
                </div>


                <div>
                  <p className="font-semibold text-sm text-slate-900 sm:text-base">
                    Standard Support
                  </p>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Monday – Friday, business hours.
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-[24px] border border-slate-200 p-6 shadow-sm sm:rounded-[28px] sm:p-8">
              <h3 className="font-bold text-lg text-slate-900 sm:text-xl">
                Response Times
              </h3>


              <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Critical</span>
                  <span className="font-semibold">&lt; 2 Hours</span>
                </div>


                <div className="flex justify-between text-sm">
                  <span>High</span>
                  <span className="font-semibold">&lt; 8 Hours</span>
                </div>


                <div className="flex justify-between text-sm">
                  <span>Standard</span>
                  <span className="font-semibold">&lt; 24 Hours</span>
                </div>
              </div>
            </div>


            <div className="rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-black p-6 text-white shadow-xl sm:rounded-[28px] sm:p-8">
              <AlertCircle size={26} className="sm:size-30" />


              <h3 className="mt-3 text-xl font-bold sm:mt-4 sm:text-2xl">
                Security & Privacy
              </h3>


              <p className="mt-2 text-sm text-slate-300 leading-relaxed sm:mt-4 sm:text-base">
                Your request is encrypted and securely processed according to
                Orbit's enterprise-grade security and privacy standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default SupportRequest;