import {
  Activity,
  CheckCircle2,
  Clock,
  Server,
  Database,
  Webhook,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function StatusPage() {
  const services = [
    {
      name: "API Platform",
      status: "Operational",
      icon: Server,
    },
    {
      name: "Authentication",
      status: "Operational",
      icon: Shield,
    },
    {
      name: "Database Services",
      status: "Operational",
      icon: Database,
    },
    {
      name: "Webhooks",
      status: "Operational",
      icon: Webhook,
    },
  ];

  const incidents = [
    {
      title: "Scheduled Infrastructure Maintenance",
      date: "June 14, 2026",
      status: "Scheduled",
    },
    {
      title: "API Latency Increase",
      date: "June 2, 2026",
      status: "Resolved",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b" aria-labelledby="status-heading">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10">
          <Link
            to="/Help"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 md:mb-6 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Help Center
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-4">
              <Activity className="h-3 w-3 text-primary" aria-hidden="true" />
              System Status
            </div>

            <h1 id="status-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Orbit System Status
            </h1>

            <div className="flex items-start gap-3 rounded-2xl border p-4 bg-muted/30">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  All Systems Operational
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  No ongoing incidents affecting Orbit services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Health List */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10" aria-label="Service Health Status">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
          Service Health
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-2xl border p-4 sm:p-5 bg-card"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <service.icon className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <span className="font-medium text-sm sm:text-base">
                  {service.name}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="text-muted-foreground">{service.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uptime Stat Grid */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-6 md:pb-10" aria-label="Platform Analytics">
        <div className="rounded-2xl sm:rounded-3xl border p-5 sm:p-6 bg-card">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Platform Uptime
          </h2>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <div className="border-b sm:border-b-0 sm:border-r last:border-0 pb-3 sm:pb-0 sm:pr-4">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">99.99%</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                API Availability
              </p>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r last:border-0 pb-3 sm:pb-0 sm:px-2 md:px-4">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">99.98%</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Authentication
              </p>
            </div>

            <div className="last:border-0 sm:pl-4">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">99.97%</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Webhook Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Log Incidents */}
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pb-16 md:pb-20" aria-label="Incident History Log">
        <div className="rounded-2xl sm:rounded-3xl border overflow-hidden bg-card">
          <div className="border-b bg-muted/30 px-4 sm:px-6 py-4">
            <h2 className="text-base sm:text-lg font-semibold">
              Recent Incidents & Maintenance
            </h2>
          </div>

          <div className="divide-y">
            {incidents.map((incident) => (
              <div
                key={incident.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5"
              >
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    {incident.title}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {incident.date}
                  </p>
                </div>

                <div className="inline-flex self-start sm:self-auto items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium text-muted-foreground bg-background">
                  <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {incident.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}