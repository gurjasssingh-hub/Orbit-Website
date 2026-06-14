import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  ChevronDown,
  BarChart3,
  Shield,
  Zap,
  Activity,
  Users,
  Code2,
  BookOpen,
  FileText,
  LifeBuoy,
  Newspaper,
  LayoutTemplate,
  MessageSquare,
  Menu,
  X
} from "lucide-react";

import Button1 from "./ui/Button1";

const PRODUCTS = [
  { title: "Analytics", desc: "Track traffic and performance.", icon: BarChart3, href: "/Featurespages/analytics" },
  { title: "Automation", desc: "Automate workflows instantly.", icon: Zap, href: "/Featurespages/automation" },
  { title: "Monitoring", desc: "Real-time logs and alerts.", icon: Activity, href: "/Featurespages/monitoring" },
  { title: "Security", desc: "Enterprise-grade protection.", icon: Shield, href: "/Featurespages/security" },
  { title: "Collaboration", desc: "Work together with teams.", icon: Users, href: "/Featurespages/collaboration" },
  { title: "API", desc: "Developer-first API access.", icon: Code2, href: "/Featurespages/api" },
];

const RESOURCES = [
  { title: "Documentation", desc: "Learn the platform quickly.", icon: BookOpen, href: "/Resourcespages/documentation" },
  { title: "Guides", desc: "Step-by-step tutorials.", icon: FileText, href: "/Resourcespages/guides" },
  { title: "Help Center", desc: "Support and troubleshooting.", icon: LifeBuoy, href: "/Resourcespages/HelpCenter" },
  { title: "Blog", desc: "News and product updates.", icon: Newspaper, href: "/Resourcespages/blog" },
  { title: "Templates", desc: "Ready-to-use starter kits.", icon: LayoutTemplate, href: "/Resourcespages/templates" },
  { title: "Community", desc: "Connect with other developers.", icon: MessageSquare, href: "/Resourcespages/community" },
];

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const isProductsActive = location.pathname.startsWith("/Featurespages");
  const isResourcesActive = location.pathname.startsWith("/Resourcespages") || location.pathname.startsWith("/resourcespages");

  const baseClass = "text-[15px] font-medium text-neutral-600 hover:text-black px-3 py-2 rounded-full transition-all duration-200 hover:bg-neutral-100/80";
  const activeClass = "bg-neutral-100 text-black font-semibold rounded-full px-3 py-2 text-[15px] transition-all duration-200";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* DESKTOP BRAND & NAVIGATION */}
        <div className="flex items-center gap-6 lg:gap-8">
          <Link to="/" className="shrink-0 flex items-center">
            <img src={logo} alt="logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 relative">
            <div
              className="relative py-4"
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className={`flex items-center gap-1 cursor-pointer ${isProductsActive ? activeClass : baseClass}`}>
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "products" ? "rotate-180" : ""}`} />
              </div>

              {openDropdown === "products" && (
                <div className="absolute top-full left-0 pt-2 animate-fadeIn">
                  <div className="w-[600px] rounded-2xl border border-neutral-200/80 bg-white shadow-xl p-3 grid grid-cols-2 gap-1.5">
                    {PRODUCTS.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-neutral-50 transition-all duration-150 group"
                        >
                          <div className="p-2 rounded-lg border border-neutral-200/60 bg-neutral-50/50 group-hover:bg-white group-hover:border-neutral-300 transition-colors shrink-0">
                            <Icon className="w-4 h-4 text-neutral-600 group-hover:text-black" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-black">{item.title}</h4>
                            <p className="text-xs text-neutral-500 mt-0.5 leading-normal">{item.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative py-4"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className={`flex items-center gap-1 cursor-pointer ${isResourcesActive ? activeClass : baseClass}`}>
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "resources" ? "rotate-180" : ""}`} />
              </div>

              {openDropdown === "resources" && (
                <div className="absolute top-full left-0 pt-2 animate-fadeIn">
                  <div className="w-[600px] rounded-2xl border border-neutral-200/80 bg-white shadow-xl p-3 grid grid-cols-2 gap-1.5">
                    {RESOURCES.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-neutral-50 transition-all duration-150 group"
                        >
                          <div className="p-2 rounded-lg border border-neutral-200/60 bg-neutral-50/50 group-hover:bg-white group-hover:border-neutral-300 transition-colors shrink-0">
                            <Icon className="w-4 h-4 text-neutral-600 group-hover:text-black" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-black">{item.title}</h4>
                            <p className="text-xs text-neutral-500 mt-0.5 leading-normal">{item.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/Pricing" className={({ isActive }) => (isActive ? activeClass : baseClass)}>
              Pricing
            </NavLink>

            <NavLink to="/Contact" className={({ isActive }) => (isActive ? activeClass : baseClass)}>
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button1
              text="Login"
              className="bg-white text-neutral-700 hover:text-black hover:bg-neutral-100 font-medium border border-neutral-200/80 px-5 py-2.5 rounded-full text-sm transition-all duration-200"
            />
          </Link>
          <Link to="/Signup">
            <Button1
              text="Sign Up"
              className="bg-neutral-950 text-white hover:bg-black font-medium shadow-sm hover:shadow-md px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            />
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-neutral-600 hover:text-black hover:bg-neutral-100 transition focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* FIXED MOBILE & TABLET DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-white border-t border-neutral-200/80 flex flex-col h-[calc(100vh-64px)] lg:hidden animate-fadeIn">
          
          {/* TOP SCROLLABLE LINKS WRAPPER */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
            
            {/* FEATURES ACCORDION */}
            <div className="border-b border-neutral-100 pb-1">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
                className="w-full flex items-center justify-between py-3.5 font-semibold text-lg text-neutral-800 text-left"
              >
                <span className={isProductsActive ? "text-blue-600" : ""}>Features</span>
                <ChevronDown size={18} className={`text-neutral-400 transition-transform duration-200 ${mobileDropdown === "products" ? "rotate-180 text-black" : ""}`} />
              </button>
              
              {mobileDropdown === "products" && (
                <div className="mt-1 pl-3 border-l-2 border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-1 py-1 bg-neutral-50/60 rounded-r-xl">
                  {PRODUCTS.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-neutral-100 text-neutral-700 transition text-sm font-medium"
                    >
                      <item.icon size={16} className="text-neutral-400" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* RESOURCES ACCORDION */}
            <div className="border-b border-neutral-100 pb-1">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
                className="w-full flex items-center justify-between py-3.5 font-semibold text-lg text-neutral-800 text-left"
              >
                <span className={isResourcesActive ? "text-blue-600" : ""}>Resources</span>
                <ChevronDown size={18} className={`text-neutral-400 transition-transform duration-200 ${mobileDropdown === "resources" ? "rotate-180 text-black" : ""}`} />
              </button>

              {mobileDropdown === "resources" && (
                <div className="mt-1 pl-3 border-l-2 border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-1 py-1 bg-neutral-50/60 rounded-r-xl">
                  {RESOURCES.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-neutral-100 text-neutral-700 transition text-sm font-medium"
                    >
                      <item.icon size={16} className="text-neutral-400" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* STANDALONE LINKS */}
            <NavLink
              to="/Pricing"
              className={({ isActive }) => `block py-3.5 font-semibold text-lg border-b border-neutral-100 transition ${isActive ? "text-blue-600" : "text-neutral-800"}`}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/Contact"
              className={({ isActive }) => `block py-3.5 font-semibold text-lg border-b border-neutral-100 transition ${isActive ? "text-blue-600" : "text-neutral-800"}`}
            >
              Contact Us
            </NavLink>
          </div>

          {/* ANCHORED ACTION BUTTONS BASE */}
          <div className="p-6 bg-neutral-50 border-t border-neutral-200/60 grid grid-cols-2 gap-4 shrink-0 pb-8 safe-bottom">
            <Link to="/login" className="w-full">
              <Button1
                text="Login"
                className="w-full bg-white text-neutral-700 hover:text-black font-semibold border border-neutral-300 rounded-md text-center shadow-sm text-sm transition block"
              />
            </Link>
            <Link to="/Signup" className="w-full">
              <Button1
                text="Sign Up"
                className="w-full bg-black text-white hover:bg-neutral-900 font-semibold rounded-md text-center shadow-sm text-sm transition block"
              />
            </Link>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;