"use client";

import { useState } from "react";

export default function QuoteForm() {
  const today = new Date().toISOString().split("T")[0];

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
  type: "success" | "error" | "";
  message: string;
}>({
  type: "",
  message: "",
});

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    journeyDate: "",
    returnDate: "",
    vehicle: "Sedan",
    passengers: "",
    tripType: "One Way",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    journeyDate: "",
    passengers: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {
      name: "",
      phone: "",
      pickup: "",
      destination: "",
      journeyDate: "",
      passengers: "",
    };

    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
      valid = false;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit mobile number";
      valid = false;
    }

    if (!form.pickup.trim()) {
      newErrors.pickup = "Pickup location is required";
      valid = false;
    }

    if (!form.destination.trim()) {
      newErrors.destination = "Destination is required";
      valid = false;
    }

    if (!form.journeyDate) {
      newErrors.journeyDate = "Journey date is required";
      valid = false;
    }

    if (
      !form.passengers ||
      Number(form.passengers) < 1
    ) {
      newErrors.passengers = "Enter valid passengers";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

 const sendToWhatsapp = async () => {
  if (!validate()) return;

  setStatus({
  type: "",
  message: "",
});

  setLoading(true);

  try {
  const response = await fetch("/api/quote", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name,
    phone: form.phone,
    email: form.email,
    pickup: form.pickup,
    destination: form.destination,
    date: form.journeyDate,
    vehicle: form.vehicle,
    message: `
Trip Type: ${form.tripType}
Return Date: ${form.returnDate || "-"}
Passengers: ${form.passengers}

${form.message}
    `,
  }),
});

const result = await response.json();

if (!response.ok || !result.success) {
  throw new Error(result.message || "Failed");
}

setStatus({
  type: "success",
  message: "Your enquiry has been sent successfully!",
});

const message = `🚖 *New Booking Enquiry*

👤 Name: ${form.name}

📱 Phone: ${form.phone}

📧 Email: ${form.email || "-"}

📍 Pickup: ${form.pickup}

🏁 Destination: ${form.destination}

📅 Journey Date: ${form.journeyDate}

🚘 Vehicle: ${form.vehicle}

👥 Passengers: ${form.passengers}

📝 Message:
${form.message || "-"}`;

setForm({
  name: "",
  phone: "",
  email: "",
  pickup: "",
  destination: "",
  journeyDate: "",
  returnDate: "",
  vehicle: "Sedan",
  passengers: "",
  tripType: "One Way",
  message: "",
});

setLoading(false);

window.location.href = `https://wa.me/918306110348?text=${encodeURIComponent(message)}`;

} catch (error) {
  console.error(error);

  setLoading(false);

  setStatus({
    type: "error",
    message: "Failed to send enquiry.",
  });

  return;
}
};

  return (
    <div className="rounded-2xl bg-slate-900 p-8 shadow-xl">

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <input
            type="text"
            name="name"
            placeholder="👤 Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="📞 Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
        </div>

        <input
          type="email"
          name="email"
          placeholder="📧 Email (Optional)"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div>
          <input
            type="text"
            name="pickup"
            placeholder="📍 Pickup Location"
            value={form.pickup}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-red-400">{errors.pickup}</p>
        </div>

        <div>
          <input
            type="text"
            name="destination"
            placeholder="🏁 Destination"
            value={form.destination}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-red-400">{errors.destination}</p>
        </div>

        <div>
          <input
            type="date"
            name="journeyDate"
            min={today}
            value={form.journeyDate}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-red-400">
            {errors.journeyDate}
          </p>
        </div>

        {form.tripType === "Round Trip" && (
          <input
            type="date"
            name="returnDate"
            min={form.journeyDate || today}
            value={form.returnDate}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Sedan (4-5 Seater)</option>
          <option>SUV / MUV (6-7 Seater)</option>
          <option>Force Urbania (10/13/17 Seater)</option>
          <option>Tempo Traveller (12/17/20/26 Seater)</option>
        </select>

        <div>
          <input
            type="number"
            name="passengers"
            placeholder="👥 Passengers"
            value={form.passengers}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-sm text-red-400">
            {errors.passengers}
          </p>
        </div>

        <select
          name="tripType"
          value={form.tripType}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>One Way</option>
          <option>Round Trip</option>
        </select>

      </div>

      <textarea
        rows={5}
        name="message"
        placeholder="📝 Additional Message"
        value={form.message}
        onChange={handleChange}
        className="mt-6 w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
      />
      {status.message && (
  <div
    className={`mt-6 rounded-xl border p-4 text-center font-semibold ${
      status.type === "success"
        ? "border-green-500 bg-green-500/10 text-green-400"
        : "border-red-500 bg-red-500/10 text-red-400"
    }`}
  >
    {status.message}
  </div>
)}
      <button
        onClick={sendToWhatsapp}
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-green-600 py-4 text-lg font-bold transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-500"
      >
        {loading
  ? "Sending..."
  : "🟢 Send Enquiry & Open WhatsApp"}
      </button>
    </div>
  );
}