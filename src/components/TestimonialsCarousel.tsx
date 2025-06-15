
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const testimonials = [
  {
    name: "Asha K., Parent",
    quote: "Our daughter loves school! The teachers are warm and attentive. Joyful School made her confident and happy.",
  },
  {
    name: "Rohan M., Parent",
    quote: "Every area is safe and hygienic. Beautiful campus—my son looks forward to every day here.",
  },
  {
    name: "Priya S., Parent",
    quote: "Excellent learning through play and care. Highly recommend to other parents.",
  },
];
const TestimonialsCarousel = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  return (
    <section className="max-w-3xl mx-auto py-12 text-center relative">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-primary">Parents’ Testimonials</h2>
      <div className="bg-pastel-yellow/90 rounded-2xl p-8 shadow-soft">
        <p className="italic text-lg mb-4">“{testimonials[idx].quote}”</p>
        <span className="block font-semibold text-primary">{testimonials[idx].name}</span>
        <div className="flex gap-3 justify-center mt-5">
          <button className="rounded-full bg-primary/10 p-2 hover:bg-primary/30 transition" onClick={prev} aria-label="Previous">
            <ArrowLeft size={18} />
          </button>
          <button className="rounded-full bg-primary/10 p-2 hover:bg-primary/30 transition" onClick={next} aria-label="Next">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
