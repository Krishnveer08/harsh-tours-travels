type GalleryFilterProps = {
  selected: string;
  onSelect: (category: string) => void;
};

const categories = [
  "All",
  "Sedan",
  "SUV / MUV",
  "Urbania",
  "Tempo Traveller",
];

export default function GalleryFilter({
  selected,
  onSelect,
}: GalleryFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
            selected === category
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-slate-800 text-gray-300 hover:bg-slate-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}