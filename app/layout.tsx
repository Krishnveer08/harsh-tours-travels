import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
  <Navbar />

  <main>{children}</main>

  <Footer />

  <ScrollToTop />

  <FloatingWhatsapp />
</body>
    </html>
  );
}