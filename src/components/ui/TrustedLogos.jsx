import React from "react";

import discord from "../../assets/logos/discord.svg";
import github from "../../assets/logos/github.svg";
import googlecalendar from "../../assets/logos/googlecalendar.svg";
import linear from "../../assets/logos/linear.svg";
import notion from "../../assets/logos/notion.svg";
import spotify from "../../assets/logos/spotify.svg";

const logos = [
  discord,
  github,
  googlecalendar,
  linear,
  notion,
  spotify,
];

const LogoSet = () => {
  return (
    <div className="flex items-center gap-10 sm:gap-16 lg:gap-24 xl:gap-40 px-5 sm:px-10 lg:px-20">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="
            h-5
            sm:h-6
            lg:h-8
            w-auto
            shrink-0
            grayscale
            opacity-50
            transition-all
            duration-300
            hover:opacity-100
            hover:grayscale-0
          "
        />
      ))}
    </div>
  );
};

export default function TrustedLogos() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-20 lg:w-48 bg-gradient-to-r from-white to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-20 lg:w-48 bg-gradient-to-l from-white to-transparent" />

      {/* MARQUEE */}
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <LogoSet />
        <LogoSet />
        <LogoSet />
        <LogoSet />
      </div>
    </section>
  );
}