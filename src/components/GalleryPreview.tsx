
const images = [
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
];

const GalleryPreview = () => (
  <section className="max-w-6xl mx-auto py-10 px-2">
    <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-primary text-center">Glimpse of Activities</h2>
    <div className="flex gap-4 flex-wrap justify-center">
      {images.map((src, i) => (
        <div key={i} className="relative group overflow-hidden rounded-2xl shadow-soft w-60 h-40">
          <img
            src={src}
            alt={`School Activities ${i + 1}`}
            loading="lazy"
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
    <div className="text-center mt-5">
      <a href="/gallery" className="inline-block font-semibold text-primary underline underline-offset-4 hover:text-blue-600 transition">
        View Full Gallery
      </a>
    </div>
  </section>
);
export default GalleryPreview;
