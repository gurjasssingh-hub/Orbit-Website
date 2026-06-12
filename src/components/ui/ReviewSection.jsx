import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Carter",
    role: "Product Designer",
    review:
      "Orbit completely changed how our team handles meetings and tasks.",
  },
  {
    name: "Sophia Lee",
    role: "Startup Founder",
    review:
      "The voice workflows feel incredibly futuristic and actually useful.",
  },
  {
    name: "James Wilson",
    role: "Operations Lead",
    review:
      "Our productivity increased instantly after integrating Orbit.",
  },
  {
    name: "Emma Brown",
    role: "Marketing Manager",
    review:
      "The collaboration features are smooth, fast, and beautifully designed.",
  },
  {
    name: "Daniel Kim",
    role: "Software Engineer",
    review:
      "Orbit feels like having an AI executive assistant for the whole team.",
  },
  {
    name: "Olivia Martin",
    role: "Creative Director",
    review:
      "Minimal design, powerful automation, and an amazing user experience.",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            Loved by modern teams.
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teams use Orbit to collaborate faster and automate workflows
            effortlessly.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* TOP */}
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  {/* AVATAR */}
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex-shrink-0" />

                  <div>
                    <h4 className="text-sm font-semibold text-black">
                      {review.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* STARS */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3.5 w-3.5 fill-black text-black"
                    />
                  ))}
                </div>
              </div>

              {/* REVIEW */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-gray-700">
                {review.review}
              </p>

              {/* SUBTLE GLOW */}
              <div className="absolute -bottom-10 -right-10 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-blue-100 opacity-40 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}