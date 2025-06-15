import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const programs = [
  {
    name: "Playgroup",
    age: "1.5+ years",
    highlights: [
      "Social skills & first steps to learning",
      "Play-based, hands-on exploration",
      "Music, art, outdoor fun",
    ],
    photo: "https://images.unsplash.com/photo-1503919545826-a9d9e3de8340?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Nursery",
    age: "2.5+ years",
    highlights: [
      "Language & motor skill focus",
      "Numbers, patterns, letters",
      "Foundation for joyful learning",
    ],
    photo: "https://images.unsplash.com/photo-1527419163649-65481a5390a7?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Lower KG (LKG)",
    age: "3.5+ years",
    highlights: [
      "Pre-reading & pre-writing",
      "Independence, responsibility",
      "Montessori play materials, STEAM",
    ],
    photo: "https://images.unsplash.com/photo-1587413009772-1c05d7a641a1?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Upper KG (UKG)",
    age: "4.5+ years",
    highlights: [
      "School readiness: reading, math",
      "Public speaking, teamwork",
      "Skill mastery, bridging to formal school",
    ],
    photo: "https://images.unsplash.com/photo-1519340241574-2cec6a12a1c1?auto=format&fit=crop&w=400&q=80"
  }
];
const Programs = () => (
  <>
    <Navbar />
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="font-display text-3xl mb-5 text-primary">Our Programs</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((p) => (
          <div
            key={p.name}
            className="section-bg card-pink flex flex-col items-center md:flex-row shadow-soft md:gap-6 gap-3 p-5"
          >
            <img src={p.photo} alt={p.name} className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover mb-2 md:mb-0" />
            <div>
              <h2 className="font-bold text-xl text-primary">{p.name}</h2>
              <div className="text-xs text-primary mb-2">Age: {p.age}</div>
              <ul className="list-disc pl-5 text-sm">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);
export default Programs;
