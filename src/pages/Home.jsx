import React from 'react'
import { Link } from "react-router-dom";
import Button1 from '../components/ui/Button1'
import SmartScheduleMockup from '../components/ui/SmartScheduleMockup'
import AIChatMockup from '../components/ui/AIChatMockup'
import TrustedLogos from '../components/ui/TrustedLogos'
import Commandcards from '../components/ui/Commandcards'
import TeamWorkspaceMockup from '../components/ui/TeamWorkspaceMockup'
import WorkflowAutomationMockup from '../components/ui/WorkflowAutomationMockup'
import ReviewSection from '../components/ui/ReviewSection'
import VoiceDemo from '../components/ui/VoiceDemo'
import FAQSection from '../components/ui/FAQSection'

const FAQs = [
  {
    question: "What is Orbit?",
    answer: "Orbit is an AI voice assistant that helps individuals and teams manage tasks, meetings, workflows, and collaboration using natural voice commands.",
  },
  {
    question: "How does Orbit understand voice commands?",
    answer: "Orbit uses advanced AI models to understand natural language, context, and intent — turning spoken requests into real actions instantly.",
  },
  {
    question: "Can Orbit automate workflows across apps?",
    answer: "Yes. Orbit connects with tools like Slack, Notion, Linear, calendars, and email platforms to automate tasks and workflows seamlessly.",
  },
  {
    question: "Is Orbit secure and private?",
    answer: "Orbit is designed with privacy-first infrastructure, encrypted communication, and secure data handling to keep your information protected.",
  },
  {
    question: "Can teams collaborate using Orbit?",
    answer: "Absolutely. Orbit enables shared workflows, instant task coordination, voice collaboration, and real-time updates for modern teams.",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-[#f6f9fc]">
        {/* FULL ORGANIC BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {/* HUGE BASE COLOR FIELD */}
          <div className="absolute right-[-35%] md:right-[-25%] lg:right-[-18%] top-[-20%] h-[500px] w-[500px] md:h-[800px] md:w-[800px] lg:h-full lg:max-h-4xl lg:w-full lg:max-w-4xl rounded-full bg-[radial-gradient(circle_at_40%_40%,#f5d0fe_0%,#ddd6fe_18%,#c4b5fd_38%,#a78bfa_58%,#818cf8_72%,transparent_80%)] blur-[12px] opacity-85 animate-pulse duration-[8000ms]" />

          {/* MAIN GIANT ROPE */}
          <div className="hidden md:block absolute right-[-15%] md:right-[0%] lg:right-[8%] top-[-25%] h-[900px] md:h-[1300px] lg:h-[1700px] w-[180px] md:w-[260px] lg:w-[340px] rotate-[16deg] rounded-full bg-[linear-gradient(180deg,#fdf4ff_0%,#f3e8ff_12%,#e9d5ff_28%,#ddd6fe_45%,#c4b5fd_62%,#d8b4fe_78%,#f3e8ff_92%,#fdf4ff_100%)] shadow-[0_0_140px_rgba(168,85,247,0.22)]" />

          {/* SECONDARY ROPE CURVE */}
          <div className="hidden md:block absolute right-[-20%] md:right-[-12%] lg:right-[-8%] top-[-10%] h-[600px] md:h-[900px] lg:h-[1200px] w-[400px] md:w-[580px] lg:w-[760px] rounded-full border-[60px] md:border-[90px] lg:border-[130px] border-[#c4b5fd]/40 blur-[2px]" />

          {/* PINK AMBIENT LIGHT */}
          <div className="absolute right-[0%] md:right-[8%] lg:right-[12%] top-[10%] md:top-[15%] h-[350px] w-[350px] md:h-[600px] md:w-[600px] lg:h-[850px] lg:w-[850px] rounded-full bg-pink-300/15 blur-[120px] lg:blur-[150px] animate-pulse duration-[4000ms]" />

          {/* DEEP INDIGO AMBIENT */}
          <div className="absolute bottom-[-20%] right-[-20%] md:right-[-10%] h-[350px] w-[350px] md:h-[600px] md:w-[600px] lg:h-[850px] lg:w-[850px] rounded-full bg-indigo-400/25 blur-[120px] lg:blur-[160px]" />

          {/* SOFT PURPLE BLEED */}
          <div className="absolute right-[5%] md:right-[15%] lg:right-[20%] top-[35%] h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] rounded-full bg-purple-300/15 blur-[80px] lg:blur-[100px]" />

          {/* EXTRA PINK GLOW */}
          <div className="absolute top-[8%] right-[10%] md:right-[20%] lg:right-[28%] h-[180px] w-[180px] md:h-[250px] md:w-[250px] lg:h-[350px] lg:w-[350px] rounded-full bg-rose-300/10 blur-[80px] lg:blur-[120px]" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 flex flex-col gap-8 items-start justify-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl">
            Orbit — Your AI Voice Assistant
          </h1>

          <h3 className="text-gray-600 text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed max-w-xl">
            Talk naturally. Get things done instantly.
            <br />
            Your voice is all you need.
          </h3>

          <Link to="/Signup">
            <Button1
              text="Get Started"
              className="bg-black text-white hover:bg-neutral-700 font-medium border border-neutral-300 w-32 h-12 rounded-xl transition"
            />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 h-20 md:h-30 lg:h-40 bg-gradient-to-b from-transparent via-white/20 to-[#f6f9fc] pointer-events-none" />
      </section>

      {/* PRODUCT FEATURES DETAILED */}
      <section className="mt-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 lg:gap-32">
          
          {/* FEATURE SECTION 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5 tracking-wide justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-400 leading-tight">
                <span className="text-black block md:inline">Speak Naturally. </span> 
                Orbit Understands Instantly
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Have real-time conversations with Orbit and let AI handle tasks, reminders, scheduling, and more — all through natural voice interaction.
              </p>
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <AIChatMockup />
            </div>
          </div>

          {/* FEATURE SECTION 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
              <SmartScheduleMockup />
            </div>
            <div className="flex flex-col gap-5 tracking-wide justify-center order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-400 leading-tight">
                Your Day, Perfectly <span className="text-black">Organized by AI.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Orbit intelligently manages your meetings, reminders, schedules, and daily workflow — helping you stay productive, focused, and effortlessly in control throughout the day.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SOCIAL PROOF LOGO WALL */}
      <section className="mt-32 border-y border-slate-100 py-16 bg-slate-50/50">
        <h3 className="text-gray-500 font-medium text-center uppercase tracking-widest text-sm mb-10">
          Trusted by the best teams
        </h3>
        <TrustedLogos />
      </section>

      {/* ACTIONS GRID GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <Commandcards />
      </section>

    {/* STICKY SPLIT SIDEBAR COLLABORATION GRID */}
<section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
  <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
    
    {/* FIXED/STICKY DESKTOP ANCHOR TEXT BLOCK */}
    {/* Stacks natively on mobile viewports, pins neatly to view track when scrolling past columns on desktop windows */}
    <div className="lg:sticky lg:top-24 h-fit flex flex-col gap-4 w-full lg:w-[42%] lg:max-w-[480px]">
      <h5 className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
        Collaboration
      </h5>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        Work together at the <br className="hidden md:inline" /> speed of conversation.
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Orbit keeps your team aligned with instant voice actions, shared workflows, and real-time collaboration across every tool you use.
      </p>
    </div>

    {/* MOCKUP VIEWS SCROLL CONTENT TRACK */}
    {/* Seamlessly expands to 100% true layout view boundary across mobile and tablet systems */}
    <div className="flex flex-col gap-16 w-full lg:w-[53%] lg:max-w-xl">
      {/* COLLABORATION TILE 1 */}
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
          Work together in one intelligent workspace.
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Orbit keeps conversations, tasks, and updates perfectly connected through AI-powered collaboration.
        </p>
        <TeamWorkspaceMockup />
      </div>

      {/* COLLABORATION TILE 2 */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
          Every workflow, automatically coordinated.
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          From voice commands to team execution, Orbit automates collaboration and keeps everyone instantly in sync.
        </p>
        <WorkflowAutomationMockup />
      </div>
    </div>

  </div>
</section>

      {/* SOCIAL REVIEWS DISPLAY */}
      <section className="bg-slate-900 py-12 text-white">
        <ReviewSection />
      </section>

      {/* INTERACTIVE PLAYBACK PANEL */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <VoiceDemo />
      </section>

      {/* FAQ SECTION DESPATCHER */}
      <section className="mt-32 mb-20 max-w-4xl mx-auto px-6">
        <FAQSection
          title="Frequently Asked Questions"
          faqs={FAQs}
        />
      </section>
    </>
  )
}

export default Home