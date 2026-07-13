import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
  data-aos="zoom-in"
  className="bg-slate-900 py-20"
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-800 p-8 transition hover:-translate-y-2"
            >
              <div className="mb-4 flex">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}