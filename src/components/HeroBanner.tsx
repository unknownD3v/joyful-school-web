
const HeroBanner = () => (
  <section className="relative bg-skyblue overflow-hidden min-h-[470px] flex flex-col justify-center py-14 pb-24 rounded-b-[2.5rem] shadow-soft">
    <div className="absolute inset-0">
      {/* Decorative clouds */}
      <div className="absolute top-10 left-[-60px] w-48 h-20 bg-white opacity-70 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-[-40px] w-36 h-16 bg-white opacity-70 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-44 right-32 w-28 h-10 bg-white opacity-30 rounded-full blur-lg animate-float"></div>
    </div>
    <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-primary">
        Where Learning Begins with Joy
      </h1>
      <p className="text-lg md:text-xl mb-6 text-primary">
        Nurturing tomorrow’s achievers—today. Playgroup to Upper KG, safe and joyful every step.
      </p>
      <a href="/admissions" className="inline-block animate-float bg-primary text-white font-semibold px-8 py-3 rounded-full shadow hover:scale-105 hover:bg-blue-700 transition">
        Apply for Admission
      </a>
    </div>
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] md:bottom-[-90px]">
      <img
        src="https://images.unsplash.com/photo-1517524206127-48bbd363f59c?auto=format&fit=crop&w=600&q=80"
        alt="Happy kids learning with a teacher"
        loading="lazy"
        className="rounded-3xl shadow-xl w-80 h-52 object-cover border-4 border-cream"
      />
    </div>
  </section>
);
export default HeroBanner;
