export default function Map() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">
      <iframe
        title="Harsh Tours & Travels Location"
        src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
        className="h-[400px] w-full"
        loading="lazy"
      />
    </div>
  );
}