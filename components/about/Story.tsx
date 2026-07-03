import { company } from "@/data/company";

export default function Story() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {company.tagline}
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-400">
            {company.story}
          </p>
        </div>

      </div>
    </section>
  );
}