"use client";

import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <div className="rounded-2xl bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        Send a Message
      </h2>

      <textarea
        rows={8}
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-6 w-full rounded-xl bg-slate-800 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Send Message
      </button>
    </div>
  );
}