import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AOSProvider from "@/components/providers/AOSProvider";

export const metadata: Metadata = {
  title: {
    default: "Harsh Tours & Travels",
    template: "%s | Harsh Tours & Travels",
  },

  description:
    "Premium Tempo Traveller, Force Urbania, SUV, Sedan and Toyota Crysta rental services for Rajasthan tours, weddings, airport transfers and outstation trips.",

  keywords: [
    "Harsh Tours & Travels",
    "Tempo Traveller Jaipur",
    "Force Urbania",
    "Toyota Crysta",
    "Cab Service Rajasthan",
    "Tour Operator Jaipur",
    "Taxi Service Jaipur",
    "Tempo Traveller Rajasthan",
    "Outstation Cab",
    "Wedding Transport",
  ],

  authors: [{ name: "Harsh Tours & Travels" }],

  creator: "Harsh Tours & Travels",

  metadataBase: new URL("https://harsh-tours-travels.vercel.app"),

  openGraph: {
  title: "Harsh Tours & Travels",
  description:
    "Premium Tempo Traveller, Urbania, SUV, Sedan & Toyota Crysta rental services across Rajasthan and India.",
  url: "https://harsh-tours-travels.vercel.app",
  siteName: "Harsh Tours & Travels",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Harsh Tours & Travels",
    },
  ],
  locale: "en_IN",
  type: "website",
},

  twitter: {
  card: "summary_large_image",
  title: "Harsh Tours & Travels",
  description:
    "Premium Tempo Traveller, Urbania, SUV & Sedan rental services across India.",
  images: ["/og-image.jpg"],
},

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <AOSProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />

          <ScrollToTop />

          <FloatingWhatsapp />
        </AOSProvider>
      </body>
    </html>
  );
}