import React from "react";

const GalleryPreview = () => {
  const images = [
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
  ];
  return (
    <section className="my-16">
      <h2 className="font-display text-xl text-primary mb-4 text-center">Glimpse of School Life</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="card-yellow section-bg overflow-hidden aspect-square group transition hover:scale-[1.04]"
          >
            <img
              src={src}
              alt={`Gallery Preview ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default GalleryPreview;
