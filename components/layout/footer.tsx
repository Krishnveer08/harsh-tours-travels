export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 text-center text-gray-400">
      <p className="text-lg font-semibold text-white">
        Harsh Tours & Travels
      </p>

      <p className="mt-2">
        Premium Cab & Tempo Traveller Services Across India
      </p>

      <p className="mt-6 text-sm">
        © {new Date().getFullYear()} Harsh Tours & Travels. All Rights Reserved.
      </p>
    </footer>
  );
}