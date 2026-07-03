import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "@/data/company";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        Contact Information
      </h2>

      <div className="mt-8 space-y-8">

        <div className="flex items-start gap-4">
          <Phone className="text-blue-400" />
          <div>
            <h3 className="font-semibold text-white">Phone</h3>
            <p className="text-gray-400">{company.phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-blue-400" />
          <div>
            <h3 className="font-semibold text-white">Email</h3>
            <p className="text-gray-400">{company.email}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-blue-400" />
          <div>
            <h3 className="font-semibold text-white">Address</h3>
            <p className="text-gray-400">{company.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="text-blue-400" />
          <div>
            <h3 className="font-semibold text-white">Support</h3>
            <p className="text-gray-400">{company.timings}</p>
          </div>
        </div>

      </div>
    </div>
  );
}