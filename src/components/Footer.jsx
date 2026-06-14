import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import Analytics from "../pages/Featurespages/Analytics";
import { href } from "react-router-dom";


const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.73C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const socialLinks = [
  { icon: <GitHubIcon />, label: "GitHub" },
  { icon: <TwitterIcon />, label: "X / Twitter" },
  { icon: <LinkedinIcon />, label: "LinkedIn" },
  { icon: <YoutubeIcon />, label: "YouTube" },
  { icon: <DiscordIcon />, label: "Discord" },
  { icon: <RedditIcon />, label: "Reddit" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
];

const footerColumns = [
  {
    title: "Product",
    links: [
       {
    label: "Analytics",
    desc: "Track traffic and performance.",
    href: "/featurespages/Analytics"
  },
      { label: "Automation", desc: "Automate workflows instantly.",
        href:"/Featurespages/automation"
       },
      { label: "Monitoring", desc: "Real-time logs and alerts.",
        href:"/Featurespages/monitoring"
       },
      { label: "Security", desc: "Enterprise-grade protection.",
        href:"/Featurespages/security"
       },
      { label: "Collaboration", desc: "Work together with teams." ,
        href:"/Featurespages/collaboration"
      },
      { label: "API", desc: "Developer-first API access.",
        href:"/Featurespages/api"
       },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", desc: "Learn the platform quickly.",
        href:"/Resourcespages/documentation"
       },
      { label: "Guides", desc: "Step-by-step tutorials."
        ,href:"/Resourcespages/guides"
       },
      { label: "Help Center", desc: "Support and troubleshooting.",
        href:"/Resourcespages/HelpCenter"
       },
      { label: "Blog", desc: "News and product updates." ,
        href:"/Resourcespages/blog"
      },
      { label: "Templates", desc: "Ready-to-use starter kits." ,
        href:"/Resourcespages/templates"
      },
      { label: "Community", desc: "Connect with other developers." ,
        href:"/Resourcespages/community"
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Pricing" , href:"/Pricing" },
      { label: "Contact Us" ,href:"/Contact" },
      { label: "Careers" ,href:"/" },
      { label: "About" , href:"/" },
      { label: "Customers" ,href:"/Contact"},
      { label: "Changelog" ,href:"/ChangelogPage" },
      { label: "Roadmap" , href:"/" },
      { label: "Partners" , href:"/" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Reference", href:"/ApiReference2"},
      { label: "SDKs", href:"/SDKs" },
      { label: "Status" , href:"/Help/StatusPage" },
      { label: "Integrations" , href:"/guides2"},
      { label: "Webhooks" , href:"/Webhooks" },
      { label: "Open Source" },
      { label: "GitHub" , href:"/GithubPage" },
      { label: "System Health" , href:"/Help/StatusPage"},
    ],
  },
];

const bottomLinks = ["Privacy Policy", "Terms", "Security", "Cookies", "Accessibility"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || loading || subscribed) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubscribed(true);
  };

  return (
     <footer
      className="relative overflow-hidden bg-white text-black"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
     
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
       
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
       
        <div
          className="absolute -left-40 top-20 w-[520px] h-[520px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, #4f46e5 50%, transparent 70%)", filter: "blur(60px)" }}
        />
       
        <div
          className="absolute -right-32 top-40 w-[440px] h-[440px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)", filter: "blur(80px)" }}
        />
       
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[300px] opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.6) 30%, rgba(99,102,241,0.9) 50%, rgba(139,92,246,0.6) 70%, transparent 100%)",
          boxShadow: "0 0 24px 0 rgba(139,92,246,0.45)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* ══════════════════════════════
            NEWSLETTER
        ══════════════════════════════ */}
        <div className="py-14 border-b border-black/[0.06]">
          <div
            className="rounded-2xl px-8 py-10 sm:px-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(79,70,229,0.08) 50%, rgba(99,102,241,0.06) 100%)",
              border: "1px solid rgba(139,92,246,0.18)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 0 0 1px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black leading-tight">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-black/45 max-w-xs leading-relaxed">
                Product updates, engineering insights, and new releases delivered monthly.
              </p>
            </div>

            <div className="w-full sm:w-auto flex-shrink-0">
              {subscribed ? (
                <div className="flex items-center gap-2.5 text-emerald-600 bg-emerald-600/10 border border-emerald-600/20 rounded-xl px-5 py-3">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm font-medium">You're subscribed!</span>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row  gap-2.5 w-full sm:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="you@company.com"
                    aria-label="Email address"
                    className="flex-1 sm:w-60 rounded-xl px-4 py-2.5 text-sm text-black placeholder-black/25 outline-none transition-all duration-200 focus:ring-1 focus:ring-violet-500/60"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    aria-label="Subscribe"
                    className="group relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium text-white overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 active:scale-[0.98] disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)", border: "1px solid rgba(139,92,246,0.4)" }}
                  >
                    <span className="relative z-10">{loading ? "Subscribing…" : "Subscribe"}</span>
                    {!loading && (
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    )}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            MAIN GRID
        ══════════════════════════════ */}
        <div className="pt-14 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div
                className="relative w-8 h-8 rounded-[9px] flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  boxShadow: "0 4px 14px rgba(124,58,237,0.45)",
                }}
              >
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[17px] font-semibold tracking-tight text-black">Orbit</span>
            </div>

            <p className="mt-5 text-sm text-black/38 leading-[1.75] max-w-[270px]">
              Build, deploy, automate, and scale faster with the developer platform designed for modern teams.
            </p>

            {/* Socials */}
            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,0,0,0.07)", color: "rgba(0,0,0,0.38)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(124,58,237,0.2)";
                    e.currentTarget.style.border = "1px solid rgba(139,92,246,0.4)";
                    e.currentTarget.style.color = "rgba(167,139,250,1)";
                    e.currentTarget.style.boxShadow = "0 0 14px rgba(139,92,246,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.border = "1px solid rgba(0,0,0,0.07)";
                    e.currentTarget.style.color = "rgba(0,0,0,0.38)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-black/22 mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3.5">
                {col.links.map(({ label, desc, href }) => (
                  <li key={label}>
                    <a
                      href={href || "#"}
                      className="group inline-flex flex-col gap-0.5"
                    >
                      <span className="relative text-sm text-black/58 transition-colors duration-150 group-hover:text-black">
                        {label}
                        <span
                          className="absolute -bottom-px left-0 h-px w-0 group-hover:w-full transition-all duration-200"
                          style={{ background: "rgba(139,92,246,0.75)" }}
                        />
                      </span>
                      {desc && (
                        <span className="text-[11.5px] text-black/22 leading-tight transition-colors duration-150 group-hover:text-black/35">
                          {desc}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════
            BOTTOM BAR
        ══════════════════════════════ */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-black/[0.05]">
          {/* Copyright */}
          <p className="text-black/22 whitespace-nowrap order-3 sm:order-1">
            © 2026 Orbit. All rights reserved.
          </p>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 order-1 sm:order-2" aria-label="Legal">
            {bottomLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative group text-black/28 transition-colors duration-150 hover:text-black/60"
              >
                {link}
                <span
                  className="absolute -bottom-px left-0 h-px w-0 group-hover:w-full transition-all duration-200"
                  style={{ background: "rgba(139,92,246,0.55)" }}
                />
              </a>
            ))}
          </nav>

          {/* Version + Status */}
          <div className="flex items-center gap-4 order-2 sm:order-3">
            <span className="text-black/18 font-mono text-[11.5px] tracking-tight">v2.8.0</span>
            <div
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.18)" }}
              aria-label="System status: all systems operational"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-emerald-600/80 text-[11px] font-medium">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}