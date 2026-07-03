import { company } from "@/data/company";

export default function Stats() {
  const stats = [
    {
      value: company.stats.vehicles,
      label: "Premium Vehicles",
    },
    {
      value: company.stats.customers,
      label: "Happy Customers",
    },
    {
      value: company.stats.cities,
      label: "Cities Covered",
    },
    {
      value: company.stats.support,
      label: "Support",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-slate-800 p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {item.value}
            </h3>

            <p className="mt-3 text-gray-300">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}