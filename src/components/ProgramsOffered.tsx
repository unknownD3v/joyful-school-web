
import { BookOpenCheck, Smile, MoveDownRight, Rocket } from "lucide-react";

const programs = [
  { label: "Playgroup", icon: Smile, desc: "Ages 1.5–2.5 yrs • Joyful beginnings & social play." },
  { label: "Nursery", icon: MoveDownRight, desc: "Ages 2.5–3.5 yrs • Foundations in literacy & fun." },
  { label: "Lower KG", icon: BookOpenCheck, desc: "Ages 3.5–4.5 yrs • Concepts, numbers & creativity." },
  { label: "Upper KG", icon: Rocket, desc: "Ages 4.5–5.5 yrs • Academic readiness & confidence." },
];
const ProgramsOffered = () => (
  <section className="max-w-6xl mx-auto py-10 text-center px-2">
    <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-primary">Programs Offered</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {programs.map(({ label, icon: Icon, desc }) => (
        <div className="bg-blush/80 rounded-2xl shadow-soft px-6 py-7 hover:shadow-lg transition" key={label}>
          <span className="bg-white rounded-full p-3 inline-block shadow animate-float">
            <Icon size={30} className="text-primary" />
          </span>
          <h4 className="font-display text-lg font-bold mt-3 mb-2 text-primary">{label}</h4>
          <p className="text-primary/80 text-xs">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default ProgramsOffered;
