
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const highlights = [
  { title: "Best Pre-School Award 2023", desc: "Recognized for commitment to early education excellence." },
  { title: "Olympiad Winners", desc: "Students awarded in inter-school competitions." },
  { title: "15+ Years Nurturing Leaders", desc: "Proud legacy of alumni excelling in top schools." },
];
const Achievements = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-6 text-primary">Achievements</h1>
      <div className="grid gap-7">
        {highlights.map((h, i) => (
          <div key={i} className="bg-blush/70 border rounded-2xl shadow-soft p-6">
            <h2 className="font-semibold font-display mb-1">{h.title}</h2>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);
export default Achievements;
