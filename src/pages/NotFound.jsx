import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">


      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-60 md:h-[600px] md:w-[600px]" />
      </div>


      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">


        {/* Small Badge */}
        <div className="rounded-full border border-blue-100 bg-white px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
          <span className="text-xs font-medium text-blue-600 sm:text-sm">
            Error 404
          </span>
        </div>


        {/* 404 */}
        <h1 className="mt-6 text-[80px] font-bold leading-none tracking-tight text-gray-900 sm:text-[100px] md:mt-10 md:text-[140px] lg:text-[180px]">
          404
        </h1>


        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
          This page has drifted
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            out of Orbit.
          </span>
        </h2>


        {/* Description */}
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:max-w-2xl sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist,
          may have been moved, or is no longer available.
        </p>


        {/* Actions */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center">


          <Link
            to="/"
            className="flex w-full items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black sm:w-auto sm:px-8 sm:py-4"
          >
            Back to Home
          </Link>


          <Link
            to="/contact"
            className="flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-gray-400 sm:w-auto sm:px-8 sm:py-4"
          >
            Contact Support
          </Link>


        </div>


        {/* Quick Links */}
        <div className="mt-14 flex w-full flex-wrap justify-center gap-2 sm:mt-20 sm:gap-3">


          <Link
            to="/features"
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm"
          >
            Features
          </Link>


          <Link
            to="/pricing"
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm"
          >
            Pricing
          </Link>


          <Link
            to="/resources"
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm"
          >
            Resources
          </Link>


          <Link
            to="/community"
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm"
          >
            Community
          </Link>


          <Link
            to="/help"
            className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm"
          >
            Help Center
          </Link>


        </div>


      </div>


    </section>
  );
}