import React from 'react'
import { Link } from "react-router-dom";
import Button2 from '../../components/ui/Button2'

const Blog = () => {
  return (
    <>
      <div className="bg-[#f7f9fc]"> 

        {/* ========================================================================= */}
        {/* SECTION 1: FEATURED INSIGHTS                                             */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6 shadow-sm">
                Featured Content
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
                Featured Insights
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
                Discover the latest updates, expert perspectives, and AI-powered
                productivity strategies shaping the future of work.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1 */}
              <div className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="mb-5 w-12 h-12 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    ✨
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Editor's Picks
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Curated articles and must-read content selected by the Orbit team to build deep foundational workflows.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="mb-5 w-12 h-12 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    🔥
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Trending Insights
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Explore the most popular AI, productivity, and cross-functional framework articles across our modern community.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="mb-5 w-12 h-12 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    🚀
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Product Updates
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Stay thoroughly informed about fresh native features, continuous performance tweaks, and architectural releases.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="mb-5 w-12 h-12 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    📚
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Guides & Workflows
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Learn highly proven automation strategies, tactical recipes, and production-ready productivity configurations.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: AI PRODUCTIVITY HUB                                           */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-neutral-50 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6 shadow-sm">
                Productivity Hub
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
                AI Productivity & Workflows
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
                Discover clean tactical systems, AI-powered automation frameworks,
                and execution routines designed to clear bottlenecks.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Grid 1 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5 shrink-0">⚡</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Time-Saving Workflows
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Streamline deep repetitive pipelines with contextual automated logic blocks that cut down operational drag.
                  </p>
                </div>
              </div>

              {/* Grid 2 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5 shrink-0">📅</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Daily Productivity Systems
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Build systematic organizational systems tailored around deep-focus segments and distraction-free timelines.
                  </p>
                </div>
              </div>

              {/* Grid 3 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5 shrink-0">✅</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Task Management Strategies
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Adopt highly clear sorting structures to visualize critical milestones, assign dependencies, and monitor velocity.
                  </p>
                </div>
              </div>

              {/* Grid 4 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5 shrink-0">🤖</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    AI-Assisted Planning
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Deploy fine-tuned prompt loops to balance team capacities, forecast sprint blockages, and slice data sets.
                  </p>
                </div>
              </div>

              {/* Grid 5 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5 shrink-0">🎙️</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Meeting Optimization
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Extract structured core actions and contextual summaries automatically, reducing sync duration significantly.
                  </p>
                </div>
              </div>

              {/* Grid 6 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5 shrink-0">🔄</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Workflow Automation Tips
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Implement seamless integration triggers that bridge disparate databases together without manual data mapping.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: AUTOMATION HUB BENTO GRID                                      */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6 shadow-sm">
                Automation Hub
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
                Automation & Integrations
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
                Connect disparate API environments, construct rulesets, and implement
                intelligent background nodes with zero maintenance friction.
              </p>
            </div>

            {/* Bento Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Large Feature Card */}
              <div className="md:col-span-2 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-3xl sm:text-4xl mb-6">⚡</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
                    No-Code Automations
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
                    Create heavy-duty automation loops effortlessly using our structural visual canvas.
                    Map logic gates, isolate run criteria, parse data payloads, and generate clean notification systems
                    across operational departments within clicks.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">🔗</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Multi-App Workflows
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Bridge critical platforms cleanly to synchronize execution schemas evenly right down to individual team parameters.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">📚</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Integration Tutorials
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Follow deep, structured technical modules configured to tie enterprise authentication frameworks cleanly into workspace tools.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">📈</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Process Optimization
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Pinpoint slow execution areas across custom application pipelines via unified analytics tracking dashboards.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">🎯</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Trigger-Based Actions
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Initialize complex microservices instantly when strict status criteria matching or webhook signals fire off successfully.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">🚀</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Real-World Examples
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Import practical execution templates used by global tech networks to automate recurring daily tracking logic.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: PRODUCT NEWS TIMELINE STYLE                                    */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-neutral-50 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6 shadow-sm">
                Product News
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
                Product Updates & Releases
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
                Stay tightly synced with our fast engineering pace. From critical patch layers
                to core workspace modules, explore all timeline modifications here.
              </p>
            </div>

            {/* List Layout */}
            <div className="max-w-5xl mx-auto space-y-6">

              {/* Row 1 */}
              <div className="group flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  🚀
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 truncate">
                    Feature Announcements
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Deploy modern visual modules, upgraded canvas nodes, and collaborative tools designed to increase core concurrent pipeline metrics across your groups.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="group flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  ⚡
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 truncate">
                    Platform Improvements
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Monitor our continuous optimization work spanning database queries, interface painting reductions, asset handling compressions, and global content delivery network performance enhancements.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="group flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  📝
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 truncate">
                    Release Notes
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Review our detailed logs detailing code fixes, environment modifications, framework version updates, API edge-case resolutions, and small layout fixes shipped weekly.
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="group flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  🧪
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 truncate">
                    Beta Features
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Toggle experimental testing toggles directly on your dashboard. Provide immediate instrumentation telemetry inputs to help our development teams build robust features.
                  </p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="group flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  🔒
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 truncate">
                    Security Enhancements
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Read updates tracking system infrastructure hardening, single sign-on enterprise additions, automated continuous scanning protocol revisions, and regulatory standards enforcement steps.
                  </p>
                </div>
              </div>

              {/* Row 6 */}
              <div className="group flex flex-col sm:flex-row gap-5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-neutral-100 flex items-center justify-center text-xl sm:text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  🗺️
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 truncate">
                    Roadmap Previews
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Gain a strategic view of our quarterly product objectives, upcoming design overhauls, database scaling strategies, and deep artificial intelligence integration paths.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: CUSTOMER SUCCESS STORIES & CASE STUDIES                         */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6 shadow-sm">
                Success Stories
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
                Customer Success Stories
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
                Review how real product teams, operations networks, and corporate enterprise engineering 
                divisions leverage Orbit to unlock measurable output improvements.
              </p>
            </div>

            {/* Featured Case Study Hero Box */}
            <div className="mb-12 rounded-2xl sm:rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-10 md:p-14 shadow-sm">
              <div className="max-w-4xl">
                <span className="inline-flex rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-xs sm:text-sm font-semibold text-neutral-700 mb-6 shadow-sm">
                  Featured Case Study
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
                  How Teams Are Saving Hours Every Week With Orbit
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                  Get a complete architecture breakdown detailing how global networks restructure their communication layout,
                  replicate vital workspace triggers, remove administrative overhead, and clear departmental barriers.
                </p>

                {/* Metrics Matrix Block */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-neutral-200">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">10x</p>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                      Faster Workflows
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">40%</p>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                      Time Saved
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">3x</p>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                      Team Efficiency
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">95%</p>
                    <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
                      User Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stories Cards Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Case 1 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">📖</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Customer Case Studies
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Read end-to-end organizational reviews profiling technical implementations, data migrations, and custom team alignments.
                  </p>
                </div>
              </div>

              {/* Case 2 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">⚡</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Productivity Gains
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Examine data charts reflecting sharp task velocity optimizations and reduction in operational friction.
                  </p>
                </div>
              </div>

              {/* Case 3 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">⏳</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Time Saved
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Isolate engineering resources from manual synchronization chore lists using automated logic flows.
                  </p>
                </div>
              </div>

              {/* Case 4 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">🤝</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Collaboration Wins
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    See how cross-departmental tasks execute with automated alerts across global hubs.
                  </p>
                </div>
              </div>

              {/* Case 5 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">📈</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Business Growth Stories
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Track the bottom-line financial and scaling effects of implementing enterprise-wide automation routines.
                  </p>
                </div>
              </div>

              {/* Case 6 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 p-6 sm:p-8 hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">💬</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    User Testimonials
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Review raw direct feedback gathered from system managers, company operators, and engineering administrators globally.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: AI KNOWLEDGE HUB BENTO DESIGN                                 */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-neutral-50 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 mb-4 sm:mb-6 shadow-sm">
                Learning Center
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
                AI Knowledge Hub
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed">
                Build competitive technological expertise. Access systematic educational matrices, clear workflow charts, 
                and forward-looking industry research papers.
              </p>
            </div>

            {/* Complex Bento Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Main Extended Block Card */}
              <div className="md:col-span-2 lg:row-span-2 rounded-2xl sm:rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-4xl sm:text-5xl mb-6 sm:mb-8">🧠</div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black mb-4">
                    AI Fundamentals
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                    Gain a crystal clear conceptual footing spanning neural processing paradigms, machine intelligence foundations, 
                    deep learning infrastructure configurations, and context data processing layers.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium">
                        Core AI concepts explained simply
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium">
                        Beginner-to-advanced learning paths
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium">
                        Practical applications and use cases
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Box 1 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">✍️</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Prompt Engineering
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Optimize dynamic token assembly strategies to extract accurate, dependable outputs from your models consistently.
                  </p>
                </div>
              </div>

              {/* Small Box 2 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">⚡</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Productivity Frameworks
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Unify contextual AI utilities with proven habits to generate focused, high-throughput modern workflows.
                  </p>
                </div>
              </div>

              {/* Small Box 3 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">📈</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Industry Trends
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Analyze shifts across automated infrastructure spaces, language model processing breakthroughs, and data regulations.
                  </p>
                </div>
              </div>

              {/* Small Box 4 */}
              <div className="rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-w-0">
                <div>
                  <div className="text-2xl sm:text-3xl mb-5">🚀</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 truncate">
                    Emerging Tech
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Track edge computing systems, next-gen data architectures, and vector graph technologies altering corporate logic.
                  </p>
                </div>
              </div>

              {/* Wide Footer Card within Bento Grid */}
              <div className="md:col-span-2 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-xl transition-all duration-300 min-w-0">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="text-3xl sm:text-4xl shrink-0">🎓</div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 truncate">
                      Expert Insights
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      Access deep thought-leadership modules, continuous optimization strategies, and system orchestration patterns authored directly by practical AI deployment engineering leads.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FINAL CTA CONVERSION BLOCK                                      */}
        {/* ========================================================================= */}
        <section className="relative py-16 sm:py-24 lg:py-40 overflow-hidden px-4 sm:px-6 bg-white">

          {/* Core Ambient Gradient Orb */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[350px] sm:h-[1000px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] border border-neutral-200 bg-white p-6 sm:p-12 md:p-20 text-center shadow-md">

              {/* Decorative Badge */}
              <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-neutral-600 mb-6 sm:mb-8 shadow-sm">
                Start Your Orbit Journey
              </div>

              {/* Title Header */}
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-black max-w-4xl mx-auto leading-tight sm:leading-none">
                Turn Knowledge Into
                <br className="hidden sm:block" />
                <span className="sm:mt-2 inline-block">Action With Orbit</span>
              </h2>

              {/* Explainer Blurb */}
              <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Deploy lightning-fast automation frameworks, orchestrate multi-tool integrations cleanly, 
                and construct scalable workspaces configured around high efficiency.
              </p>

              {/* Capsule Keywords Component */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 max-w-4xl mx-auto">
                {[
                  "Explore Orbit Features",
                  "Try AI Workflows",
                  "Build Custom Automations",
                  "Connect Your Tools",
                  "Scale Team Productivity",
                  "Get Started in Minutes",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs sm:text-sm font-medium text-neutral-700 transition-colors duration-300 hover:bg-neutral-100 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Buttons Hub */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-12 w-full sm:w-auto">
                
                <Link to="/Signup" className="w-full sm:w-auto"> 
                  <Button2
                    className="bg-black text-white hover:bg-neutral-800 h-12 w-full sm:w-48 font-medium rounded-xl shadow-sm transition-all duration-300"
                    text="Start Using Orbit"
                  />
                </Link>
              
                <Link to="/Featurespages/Automation" className="w-full sm:w-auto"> 
                  <Button2
                    className="bg-white text-black border border-neutral-200 hover:bg-neutral-50 h-12 w-full sm:w-48 font-medium rounded-xl shadow-sm transition-all duration-300"
                    text="Explore Features"
                  />
                </Link>

                <Link to="/book-demo" className="w-full sm:w-auto"> 
                  <Button2
                    className="bg-white text-black border border-neutral-200 hover:bg-neutral-50 h-12 w-full sm:w-48 font-medium rounded-xl shadow-sm transition-all duration-300"
                    text="Book a Demo"
                  />
                </Link>

              </div>

              {/* Trust Subtext */}
              <p className="mt-8 sm:mt-10 text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
                Join thousands of high-performing teams and organizations globally scaling operations with Orbit.
              </p>

            </div>
          </div>

        </section>

      </div>
    </>
  )
}

export default Blog