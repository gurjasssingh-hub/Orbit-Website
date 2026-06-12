import React from 'react'
import { NavLink, Link, useLocation } from "react-router-dom";

const Community = () => {
  return (
    <>
      <div className="bg-[#f7f9fc] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">

<section className="relative overflow-hidden py-20 md:py-28 lg:py-40 bg-white">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-neutral-100 rounded-full blur-3xl opacity-80" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neutral-200 rounded-full blur-3xl opacity-40" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Community Badge */}
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white shadow-sm">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-neutral-700">
          Orbit Community
        </span>
      </div>
    </div>

    {/* Heading */}
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.05]">
        Learn,
        <span className="block text-neutral-400">
          Connect & Grow
        </span>
        Together
      </h1>

      <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
        Join thousands of Orbit users sharing knowledge, discovering
        best practices, and helping shape the future of AI-powered work.
        Connect with experts, learn faster, and grow alongside a thriving
        community.
      </p>
    </div>

    {/* CTA */}
    <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
      
      <Link to="/CommunityJoinModal"> 
      <button className="h-12 px-8 w-full md:w-auto rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition-all">
        Join Community
      </button>
      </Link>

    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto">

      {[
        ["10K+", "Community Members"],
        ["500+", "Workflows Shared"],
        ["100+", "Expert Sessions"],
        ["24/7", "Peer Support"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="rounded-3xl border border-neutral-200 bg-white/70 backdrop-blur-xl p-8 text-center"
        >
          <div className="text-3xl font-semibold text-black">
            {value}
          </div>
          <div className="mt-2 text-sm text-neutral-500">
            {label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

<section className="relative py-20 md:py-28 lg:py-36 overflow-hidden bg-neutral-50">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-neutral-200 rounded-full blur-3xl opacity-50" />
    <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="max-w-3xl">
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700">
        Connect & Collaborate
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
        Meet People Who
        <span className="block text-neutral-400">
          Build With Orbit
        </span>
      </h2>

      <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl">
        Connect with professionals, creators, teams, and AI enthusiasts
        from around the world. Exchange ideas, solve challenges together,
        and discover new ways to work smarter with Orbit.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

      {[
        {
          title: "User Discussions",
          desc: "Join meaningful conversations, ask questions, and share insights with the community."
        },
        {
          title: "Industry Groups",
          desc: "Find specialized spaces tailored to your profession, team, or area of expertise."
        },
        {
          title: "Peer Support",
          desc: "Get help from experienced users and discover solutions faster."
        },
        {
          title: "Collaboration Opportunities",
          desc: "Work together on workflows, projects, and innovative ideas."
        },
        {
          title: "Professional Networking",
          desc: "Expand your network and connect with like-minded professionals."
        },
        {
          title: "Global Community",
          desc: "Engage with members worldwide and gain diverse perspectives."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="group p-8 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <div className="w-5 h-5 rounded-full bg-black" />
          </div>

          <h3 className="text-xl font-semibold text-black">
            {item.title}
          </h3>

          <p className="mt-3 text-neutral-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Community Banner */}
    <div className="mt-20 rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

      <div>
        <h3 className="text-3xl font-semibold text-black">
          One Community. Endless Connections.
        </h3>

        <p className="mt-3 text-neutral-600 max-w-xl">
          Learn from experts, collaborate with peers, and build lasting
          relationships that help you get more from Orbit.
        </p>
      </div>
     
     <Link to="/CommunityDiscussions"> 
      <button className="px-8 h-12 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition whitespace-nowrap">
        Join the Conversation
      </button>
     </Link>

    </div>

  </div>
</section>

<section className="relative py-20 md:py-28 lg:py-40 overflow-hidden bg-white">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] bg-neutral-100 rounded-full blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-4xl mx-auto">

      <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700">
        Learn From Experts
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
        Master Orbit With
        <span className="block text-neutral-400">
          Expert-Led Learning
        </span>
      </h2>

      <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        Accelerate your growth through workshops, webinars, deep dives,
        and proven best practices shared by Orbit experts and power users.
      </p>

    </div>

    {/* Featured Learning Hub */}
    <div className="mt-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">

      {/* Large Featured Card */}
      <div className="relative overflow-hidden rounded-[36px] bg-black text-white p-10 md:p-14">

        <div className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
          Featured Learning Series
        </div>

        <h3 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight">
          Become an
          <span className="block text-neutral-400">
            Orbit Power User
          </span>
        </h3>

        <p className="mt-6 text-neutral-300 text-lg max-w-xl">
          Learn advanced workflows, AI automation techniques,
          collaboration strategies, and productivity frameworks
          from experienced Orbit professionals.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "Live Workshops",
            "Expert Webinars",
            "AI Training",
            "Advanced Workflows",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

      {/* Side Cards */}
      <div className="space-y-6">

        {[
          {
            title: "Product Deep Dives",
            desc: "Explore Orbit features in detail and learn how to unlock their full potential."
          },
          {
            title: "Best Practice Sessions",
            desc: "Discover proven workflows, productivity techniques, and real-world use cases."
          },
          {
            title: "Community Resources",
            desc: "Access guides, recordings, templates, and educational content created by experts."
          }
        ].map((item) => (
          <div
            key={item.title}
            className="p-8 rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all"
          >
            <h4 className="text-xl font-semibold text-black">
              {item.title}
            </h4>

            <p className="mt-3 text-neutral-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>

    {/* Metrics */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

      {[
        ["100+", "Workshops"],
        ["50+", "Expert Speakers"],
        ["500+", "Learning Resources"],
        ["24/7", "Knowledge Access"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 text-center"
        >
          <div className="text-3xl font-semibold text-black">
            {value}
          </div>

          <div className="mt-2 text-sm text-neutral-500">
            {label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

<section className="relative py-20 md:py-28 lg:py-40overflow-hidden bg-neutral-50">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-0 w-[600px] h-[600px] rounded-full bg-neutral-200 blur-3xl opacity-50" />
    <div className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-4xl mx-auto text-center">

      <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700">
        Community Stories
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
        Learn From Real
        <span className="block text-neutral-400">
          Orbit Success Stories
        </span>
      </h2>

      <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        Discover how teams and professionals use Orbit to streamline
        workflows, automate repetitive tasks, and unlock new levels
        of productivity.
      </p>

    </div>

    {/* Featured Story */}
    <div className="mt-20 rounded-[40px] overflow-hidden bg-black text-white p-10 md:p-16">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            Featured Community Story
          </span>

          <h3 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight">
            From Hours Of Manual Work
            <span className="block text-neutral-400">
              To Fully Automated Workflows
            </span>
          </h3>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            See how Orbit users are transforming everyday operations,
            reducing repetitive work, and creating scalable processes
            through automation and AI-powered workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">

          {[
            ["80%", "Time Saved"],
            ["3x", "Faster Execution"],
            ["500+", "Automations Shared"],
            ["10K+", "Community Insights"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-4xl font-semibold">
                {value}
              </div>

              <div className="mt-2 text-neutral-400">
                {label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

    {/* Community Contributions */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

      {[
        {
          title: "Case Studies",
          desc: "Explore detailed success stories and measurable outcomes from Orbit users."
        },
        {
          title: "Workflow Showcases",
          desc: "Discover creative workflows shared by community members."
        },
        {
          title: "Automation Examples",
          desc: "Learn how users automate repetitive processes and save valuable time."
        },
        {
          title: "Productivity Tips",
          desc: "Gain practical advice and strategies from experienced Orbit users."
        },
        {
          title: "Success Stories",
          desc: "See how individuals and teams achieve more with Orbit."
        },
        {
          title: "Community Contributions",
          desc: "Share your own insights, ideas, and innovations with the community."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl bg-white border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-black">
            {item.title}
          </h3>

          <p className="mt-3 text-neutral-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

      <div>
        <h3 className="text-3xl font-semibold text-black">
          Have A Story To Share?
        </h3>

        <p className="mt-3 text-neutral-600 max-w-xl">
          Showcase your workflows, automations, and achievements to inspire
          the next generation of Orbit users.
        </p>
      </div>
    
    <Link to="/ShareYourStory"> 
      <button className="h-12 px-8 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition">
        Share Your Story
      </button>
    </Link>
    </div>

  </div>
</section>

<section className="relative py-20 md:py-28 lg:py-40 overflow-hidden bg-white">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-neutral-100 blur-3xl opacity-80" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-4xl mx-auto">

      <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700">
        Events & Meetups
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
        Meet, Learn &
        <span className="block text-neutral-400">
          Grow Together
        </span>
      </h2>

      <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
        Join virtual and in-person experiences designed to help you
        learn from experts, connect with fellow members, and stay
        ahead of what's next in Orbit.
      </p>

    </div>

    {/* Featured Event */}
    <div className="mt-20 rounded-[40px] bg-black text-white overflow-hidden">

      <div className="grid lg:grid-cols-2">

        <div className="p-10 md:p-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            Upcoming Community Event
          </span>

          <h3 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight">
            Orbit Community
            <span className="block text-neutral-400">
              Summit 2026
            </span>
          </h3>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            Join community leaders, product experts, and Orbit users
            for live sessions, networking opportunities, product
            showcases, and interactive discussions.
          </p>
        
        
      <Link to="/CommunityJoinModal"> 
          <button className="mt-10 h-12 px-8 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition">
            Reserve Your Spot
          </button>
        </Link>
        </div>

        <div className="border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-8 md:p-10 lg:p-16">

          <div className="space-y-8">

            {[
              ["Live Sessions", "Expert presentations and discussions"],
              ["Networking", "Meet professionals and creators"],
              ["Product Updates", "Exclusive launch announcements"],
              ["Community Awards", "Recognizing top contributors"],
            ].map(([title, desc]) => (
              <div key={title}>
                <h4 className="font-semibold text-lg">
                  {title}
                </h4>
                <p className="text-neutral-400 mt-2">
                  {desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

    {/* Event Categories */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

      {[
        {
          title: "Virtual Events",
          desc: "Attend online sessions, workshops, and expert discussions from anywhere."
        },
        {
          title: "Community Meetups",
          desc: "Connect with Orbit users in local and regional gatherings."
        },
        {
          title: "Product Launches",
          desc: "Get first access to new features and platform updates."
        },
        {
          title: "Q&A Sessions",
          desc: "Ask questions directly to Orbit experts and community leaders."
        },
        {
          title: "Networking Opportunities",
          desc: "Build valuable relationships with professionals worldwide."
        },
        {
          title: "Exclusive Member Events",
          desc: "Unlock invite-only experiences and premium community gatherings."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="p-8 rounded-3xl border border-neutral-200 bg-white hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-black">
            {item.title}
          </h3>

          <p className="mt-3 text-neutral-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Banner */}
    <div className="mt-16 rounded-[32px] border border-neutral-200 bg-neutral-50 p-10 md:p-14 text-center">

      <h3 className="text-3xl md:text-4xl font-semibold text-black">
        Never Miss An Orbit Event
      </h3>

      <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
        Stay informed about upcoming workshops, launches, community
        meetups, and networking opportunities happening across the Orbit ecosystem.
      </p>
    
    <Link to="/CommunityEventsPage"> 
      <button className="mt-8 h-12 px-8 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition">
        Explore Events
      </button>
      </Link>

    </div>

  </div>
</section>

<section className="relative py-20 md:py-28 lg:py-40 overflow-hidden bg-neutral-50">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-neutral-200 blur-3xl opacity-40" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-neutral-100 blur-3xl opacity-70" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-4xl mx-auto">

      <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700">
        Rewards & Recognition
      </div>

      <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black leading-tight">
        Get Recognized For
        <span className="block text-neutral-400">
          Making An Impact
        </span>
      </h2>

      <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
        Every contribution helps the community grow. Earn recognition,
        unlock exclusive rewards, and become a trusted voice within
        the Orbit ecosystem.
      </p>

    </div>

    {/* Featured Recognition Card */}
    <div className="mt-20 rounded-[40px] overflow-hidden bg-black text-white">

      <div className="grid lg:grid-cols-2 gap-10 p-10 md:p-16">

        <div>
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            Community Recognition Program
          </span>

          <h3 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight">
            Become An
            <span className="block text-neutral-400">
              Orbit Champion
            </span>
          </h3>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-xl">
            Share insights, help fellow members, showcase innovative
            workflows, and earn recognition as one of Orbit's most
            influential community contributors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">

          {[
            ["Top 1%", "Community Leaders"],
            ["100+", "Recognized Experts"],
            ["Exclusive", "Member Rewards"],
            ["Early", "Feature Access"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-white/5 border border-white/10 p-6"
            >
              <div className="text-3xl font-semibold">
                {value}
              </div>

              <div className="mt-2 text-neutral-400">
                {label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>

    {/* Recognition Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

      {[
        {
          title: "Contributor Badges",
          desc: "Earn badges that showcase your expertise, activity, and contributions."
        },
        {
          title: "Leaderboards",
          desc: "Climb community rankings and gain visibility among top contributors."
        },
        {
          title: "Community Champions",
          desc: "Receive recognition for helping others and driving community engagement."
        },
        {
          title: "Expert Recognition",
          desc: "Establish yourself as a trusted expert within the Orbit ecosystem."
        },
        {
          title: "Special Member Perks",
          desc: "Unlock exclusive benefits, experiences, and community privileges."
        },
        {
          title: "Early Feature Access",
          desc: "Get invited to preview and test upcoming Orbit releases before everyone else."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl bg-white border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-black">
            {item.title}
          </h3>

          <p className="mt-3 text-neutral-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Recognition Banner */}
    <div className="mt-16 rounded-[32px] border border-neutral-200 bg-white p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

      <div>
        <h3 className="text-3xl font-semibold text-black">
          Your Contributions Matter
        </h3>

        <p className="mt-3 text-neutral-600 max-w-xl">
          Participate in discussions, share knowledge, and help shape
          the future of Orbit while earning recognition from the community.
        </p>
      </div>
     
     <Link to="/Contribute"> 
      <button className="h-12 px-8 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition">
        Start Contributing
      </button>
    </Link>

    </div>

  </div>
</section>

<section id='cta' className="relative py-24 md:py-36 lg:py-48 overflow-hidden bg-black text-white">

  {/* Background Effects */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-white/5 blur-3xl" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
  </div>

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
      <span className="text-sm font-medium text-neutral-300">
        Build The Future Of Orbit
      </span>
    </div>

    {/* Heading */}
    <h2 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95]">
      More Than A Community.
      <span className="block text-neutral-500">
        A Movement.
      </span>
    </h2>

    {/* Description */}
    <p className="mt-10 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
      Orbit is shaped by the people who use it every day. Share ideas,
      influence the roadmap, participate in exclusive beta programs,
      and help create the future of AI-powered productivity alongside
      our team and community leaders.
    </p>

    {/* Community Benefits */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

      {[
        {
          title: "Shape The Product",
          desc: "Share feedback directly and influence future Orbit releases."
        },
        {
          title: "Lead The Community",
          desc: "Become a recognized contributor and inspire other members."
        },
        {
          title: "Get Early Access",
          desc: "Test upcoming features and join exclusive beta programs."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-neutral-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col md:flex-row justify-center gap-4 mt-16">
    
    <Link to="/CommunityJoinModal">
      <button className="h-14 px-8 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition w-full md:w-auto">
        Join The Community
      </button>
    </Link>

    <Link to="/Contribute"> 
      <button className="h-14 px-8 w-full md:w-auto rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition">
        Become A Contributor
      </button>
    </Link>
  
    <Link to="/StartContributing"> 
      <button className="h-14 px-8 w-full md:w-auto rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition">
        Shape The Future
      </button>
    </Link>

    </div>

    {/* Bottom Statement */}
    <div className="mt-24 max-w-4xl mx-auto">

      <p className="text-2xl md:text-3xl font-medium text-neutral-300 leading-relaxed">
        The best ideas don't come from products.
        <span className="text-white block mt-2">
          They come from the people behind them.
        </span>
      </p>

    </div>

  </div>
</section>


      </div>
    </>
  )
}

export default Community
