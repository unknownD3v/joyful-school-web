
import React from "react";

const GalleryPreview = () => {
  const images = [
    "https://source.unsplash.com/400x400/?school,classroom",
    "https://source.unsplash.com/400x400/?children,playing",
    "https://source.unsplash.com/400x400/?teacher,student",
    "https://source.unsplash.com/400x400/?kids,art",
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
