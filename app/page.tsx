import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        <section className="flex min-h-[80vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Harsh Tours & Travels
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">
              Explore India Comfortably
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}