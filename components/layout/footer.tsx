import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Harsh Tours
          </h2>

          <p className="text-blue-400">& Travels</p>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            Safe, reliable and comfortable travel services across Rajasthan
            and India with premium vehicles and professional drivers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/fleet">Fleet</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Fleet */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Our Fleet
          </h3>

          <div className="flex flex-col gap-3">
            <p>Sedan</p>
            <p>SUV / MUV</p>
            <p>Force Urbania</p>
            <p>Tempo Traveller</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <span>{company.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <span>{company.email}</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-blue-400" />
              <span>{company.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
        © {year} Harsh Tours & Travels. All Rights Reserved.
      </div>
    </footer>
  );
}