"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section 
    data-aos="fade-up"
    className="bg-slate-950 py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900 p-6"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp className="text-blue-400" />
                ) : (
                  <ChevronDown className="text-blue-400" />
                )}
              </button>

              {open === index && (
                <p className="mt-4 leading-7 text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}