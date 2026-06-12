import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = ({
  title = "Frequently Asked Questions",
  faqs = [],
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full border border-neutral-200 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
        {/* LEFT SIDE */}
        <div className="border-b border-neutral-200 px-6 py-8 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-12">
          <h2 className="text-4xl sm:text-5xl lg:text-[62px] leading-[0.9] tracking-[-0.06em] lg:tracking-[-0.08em] font-semibold text-black">
            {title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                {word}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>

        {/* FAQS */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-neutral-200"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-8 sm:py-7"
                >
                  <h3 className="text-base sm:text-lg font-semibold tracking-[-0.03em] sm:tracking-[-0.04em] text-black">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-sm sm:px-8 sm:pb-7 sm:text-base leading-7 sm:leading-8 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;