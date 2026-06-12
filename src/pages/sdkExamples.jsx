import { useState } from "react";
import { Link } from "react-router-dom";


const sdkExamples = {
  javascript: {
    label: "JavaScript",
    install: "npm install @orbit/sdk",
    code: `import Orbit from "@orbit/sdk";


const orbit = new Orbit({
  apiKey: process.env.ORBIT_API_KEY,
});


const workspaces =
  await orbit.workspaces.list();


console.log(workspaces);`,
  },


  python: {
    label: "Python",
    install: "pip install orbit-sdk",
    code: `from orbit import Orbit


client = Orbit(
  api_key="YOUR_API_KEY"
)


workspaces = client.workspaces.list()


print(workspaces)`,
  },


  go: {
    label: "Go",
    install: "go get github.com/orbit/sdk-go",
    code: `package main


import (
  "fmt"
  orbit "github.com/orbit/sdk-go"
)


func main() {
  client := orbit.NewClient(
    "YOUR_API_KEY",
  )


  workspaces, _ :=
    client.Workspaces.List()


  fmt.Println(workspaces)
}`,
  },


  php: {
    label: "PHP",
    install: "composer require orbit/sdk",
    code: `<?php


require 'vendor/autoload.php';


$orbit = new Orbit\Client([
  'api_key' => 'YOUR_API_KEY'
]);


$workspaces =
  $orbit->workspaces()->list();


print_r($workspaces);`,
  },
};


export default function SDKSection() {
  const [activeTab, setActiveTab] =
    useState("javascript");


  const current = sdkExamples[activeTab];


  const copyCode = () => {
    navigator.clipboard.writeText(
      `${current.install}\n\n${current.code}`
    );
  };


  return (
    <section className="bg-[#f7f9fc] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">


        {/* Header */}
        <div className="text-center">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 sm:px-4 sm:py-2 sm:text-sm">
            SDKs & Resources
          </span>


          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:mt-6 sm:text-4xl md:text-5xl">
            Build with Your Favorite Language
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:mt-6 sm:max-w-2xl sm:text-lg">
            Install Orbit SDKs and start building in
            minutes using the language your team
            already knows.
          </p>
        </div>


        {/* SDK Card */}
        <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl sm:mt-16 sm:rounded-[32px]">


          {/* Tabs */}
          <div className="border-b border-slate-200 p-3 sm:p-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">


              {Object.entries(sdkExamples).map(
                ([key, sdk]) => (
                  <button
                    key={key}
                    onClick={() =>
                      setActiveTab(key)
                    }
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all sm:rounded-2xl sm:px-6 sm:py-3 ${
                      activeTab === key
                        ? "bg-slate-900 text-white shadow-lg"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {sdk.label}
                  </button>
                )
              )}


            </div>
          </div>


          {/* Code Block */}
          <div className="bg-slate-950">


            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4">


              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>


              <button
                onClick={copyCode}
                className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-slate-800 sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
              >
                Copy
              </button>


            </div>


            <div className="border-b border-slate-800 px-4 py-3 sm:px-6 sm:py-4">
              <span className="text-xs uppercase tracking-wider text-slate-500">
                Installation
              </span>


              <pre className="mt-2 overflow-x-auto text-xs text-emerald-400 sm:text-sm">
                {current.install}
              </pre>
            </div>


            <div className="px-4 py-3 sm:p-6">
              <span className="text-xs uppercase tracking-wider text-slate-500">
                Example
              </span>


              <pre className="mt-4 overflow-x-auto text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
                {current.code}
              </pre>
            </div>


          </div>


        </div>


        {/* Next Steps */}
        <div className="mt-16 sm:mt-24">


          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Next Steps
          </h3>


          <p className="mt-3 text-slate-600">
            Explore the platform and continue
            building with Orbit.
          </p>


          <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-5">


            {[
              {
                icon: "📚",
                title: "API Reference",
                desc: "Complete endpoint documentation",
                href:"/APIReference2"
              },
              {
                icon: "⚡",
                title: "Workflows",
                desc: "Build automations",
                href: "/resourcespages/Guides"
              },
              {
                icon: "📊",
                title: "Monitoring",
                desc: "Track system health",
                href: "/Featurespages/Monitoring"
              },
              {
                icon: "🔗",
                title: "Webhooks",
                desc: "Receive real-time events",
                href: "/Webhooks"
              },
              {
                icon: "🎧",
                title: "Support Center",
                desc: "Get help when needed",
                href: "/Help"
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:rounded-3xl sm:p-8"
              >
                <div className="text-2xl sm:text-3xl">{item.icon}</div>


                <h4 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-xl">
                  {item.title}
                </h4>


                <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">
                  {item.desc}
                </p>


                <div className="mt-4 font-medium text-slate-900 sm:mt-6">
                  Learn More →
                </div>
              </Link>
            ))}


          </div>


        </div>


      </div>
    </section>
  );
}