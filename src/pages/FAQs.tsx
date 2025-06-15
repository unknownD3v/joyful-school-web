
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const faqs = [
  { q: "What is the admission age?", a: "Playgroup: 1.5+, Nursery: 2.5+, LKG: 3.5+, UKG: 4.5+" },
  { q: "Do you offer daycare?", a: "Yes, we have a dedicated daycare section open until 6pm." },
  { q: "Is transportation available?", a: "Currently not offered, but parking is available for drop-off/pick-up." },
  { q: "What curriculum do you follow?", a: "We blend Montessori and Play-way approaches for holistic learning." },
];
const FAQs = () => (
  <>
    <Navbar />
    <main className="max-w-2xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-6 text-primary">Frequently Asked Questions</h1>
      {faqs.map((f, i) => (
        <div key={i} className="mb-7">
          <h2 className="font-semibold">{f.q}</h2>
          <p>{f.a}</p>
        </div>
      ))}
    </main>
    <Footer />
  </>
);
export default FAQs;
