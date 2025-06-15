
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const imageCount = 8;
const images = Array.from(
  { length: imageCount },
  (_, i) => `https://source.unsplash.com/800x800/?school,kids,education&sig=${i}`
);

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto py-24 px-4 text-center">
        <h1 className="font-display text-3xl mb-5 text-primary">Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedImg(src)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-44 object-cover transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </main>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close image view"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
};
export default Gallery;
