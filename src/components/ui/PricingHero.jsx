import React, { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingHero = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: yearly ? "7" : "9",
      description: "Perfect for individuals getting started.",
      features: [
        "AI Assistant",
        "Basic Automations",
        "Unlimited Tasks",
        "5GB Storage",
        "Community Support",
      ],
      button: "Get Started",
      popular: false,
      link: "/signup",
    },
    {
      name: "Pro",
      price: yearly ? "24" : "29",
      description: "For growing teams that need more power.",
      features: [
        "Everything in Starter",
        "Advanced Automations",
        "Team Collaboration",
        "Knowledge Search",
        "Priority Support",
      ],
      button: "Start Free Trial",
      popular: true,
      link: "/FreeTrial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced security and scale for organizations.",
      features: [
        "Custom Workflows",
        "Dedicated Success Manager",
        "Advanced Security",
        "Unlimited Storage",
        "24/7 Premium Support",
      ],
      button: "Contact Sales",
      popular: false,
      link: "/CustomPlan",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px] rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-slate-600 shadow-sm">
            Pricing
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900">
            Simple pricing for
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
              modern teams
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            AI-powered workflows, collaboration, automation, and knowledge
            management — everything your team needs to move faster.
          </p>

          {/* Toggle */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white p-2 shadow-lg">
              <button
                onClick={() => setYearly(false)}
                className={`w-full sm:w-auto rounded-full px-5 sm:px-6 py-2 text-sm font-medium transition-all ${
                  !yearly
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setYearly(true)}
                className={`w-full sm:w-auto rounded-full px-5 sm:px-6 py-2 text-sm font-medium transition-all ${
                  yearly
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Yearly
                <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-[10px] sm:text-xs text-green-700">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-purple-500 shadow-2xl lg:scale-105"
                  : "border-slate-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-indigo-800 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-8">
                {plan.price === "Custom" ? (
                  <div className="text-4xl sm:text-5xl font-bold text-slate-900">
                    Custom
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900">
                      ${plan.price}
                    </span>

                    <span className="pb-2 text-sm sm:text-base text-slate-500">
                      /month
                    </span>
                  </div>
                )}
              </div>

              <Link to={plan.link}>
                <button
                  className={`mt-8 w-full rounded-xl py-3 sm:py-4 font-semibold transition-all ${
                    plan.popular
                      ? "bg-slate-900 text-white hover:bg-black"
                      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {plan.button}
                </button>
              </Link>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm sm:text-base text-slate-700"
                    >
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Check size={12} />
                      </div>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-slate-500">
            No credit card required • Cancel anytime • Enterprise-grade
            security
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;