import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-white">
            Harsh Tours
          </span>
          <span className="text-sm font-medium text-blue-400">
            & Travels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/fleet"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            Fleet
          </Link>

          <Link
            href="/destinations"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            Destinations
          </Link>

          <Link
            href="/gallery"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            Gallery
          </Link>

          <Link
            href="/get-quote"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            Get Quote
          </Link>

          <Link
            href="/about"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-medium text-gray-300 transition hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>

        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 md:flex"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </header>
  );
}