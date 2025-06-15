
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const images = [
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
];
const Gallery = () => (
  <>
    <Navbar />
    <main className="max-w-5xl mx-auto py-24 px-4 text-center">
      <h1 className="font-display text-3xl mb-5 text-primary">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-44 object-cover transition-transform duration-200 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);
export default Gallery;
