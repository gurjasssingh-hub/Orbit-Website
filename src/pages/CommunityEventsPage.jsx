import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    title: "Orbit Community Meetup",
    date: "June 28, 2026",
    time: "2:00 PM UTC",
    location: "Online",
    attendees: "320+",
  },
  {
    title: "Developer Workshop",
    date: "July 12, 2026",
    time: "4:00 PM UTC",
    location: "Virtual Event",
    attendees: "180+",
  },
  {
    title: "API Best Practices Webinar",
    date: "July 24, 2026",
    time: "3:00 PM UTC",
    location: "Online",
    attendees: "250+",
  },
];

export default function CommunityEventsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            Community Events
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Connect with the Orbit Community
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-zinc-400">
            Attend webinars, workshops, live Q&A sessions, and community
            meetups designed to help you learn, build, and grow with Orbit.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-10">
          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            Featured Event
          </span>

          <h2 className="mt-5 text-3xl font-bold">
            Orbit Global Community Summit
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Join Orbit users, developers, and industry experts for
            product insights, technical workshops, networking sessions,
            and platform updates.
          </p>
            
          <button className="mt-8 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400">
            Register Now
          </button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-bold">
          Upcoming Events
        </h2>

        <div className="mt-8 space-y-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-xl font-semibold">
                {event.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  {event.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {event.time}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {event.location}
                </div>

                <div className="flex items-center gap-2">
                  <Users size={16} />
                  {event.attendees} attendees
                </div>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 transition hover:border-blue-500/40">
                View Details
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <h2 className="text-3xl font-bold">
              Never Miss an Event
            </h2>

            <p className="mt-4 text-zinc-400">
              Stay informed about upcoming webinars, product launches,
              workshops, and community gatherings.
            </p>

            <Link
              to="/CommunityJoinModal"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black hover:bg-zinc-200 transition"
            >
              Join Community
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}