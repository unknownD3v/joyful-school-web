
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const programs = [
  { name: "Playgroup", desc: "Ages 1.5–2.5. Focus on sensory play, social interaction, and joyful beginnings." },
  { name: "Nursery", desc: "Ages 2.5–3.5. Emergent literacy, creative arts, group games, discovery." },
  { name: "LKG", desc: "Ages 3.5–4.5. Early numeracy/language, cognitive development, life skills." },
  { name: "UKG", desc: "Ages 4.5–5.5. Academic readiness, logic puzzles, public speaking, self-confidence." },
];
const Programs = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-6 text-primary">Our Programs</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl shadow-soft p-6">
            <h2 className="font-display text-xl mb-2">{p.name}</h2>
            <p className="text-primary">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);
export default Programs;
