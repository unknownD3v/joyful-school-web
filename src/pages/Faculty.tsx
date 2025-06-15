
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const staff = [
  { name: "Ms. Neha Singh", role: "Lead Teacher – Nursery", qualification: "B.Ed, Montessori Trained", experience: "8 yrs", img: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Mr. Arjun Patel", role: "Teacher – Playgroup", qualification: "B.A. Child Development", experience: "5 yrs", img: "https://randomuser.me/api/portraits/men/28.jpg" },
  { name: "Ms. Priya Verma", role: "Caretaker", qualification: "Certified Nanny", experience: "4 yrs", img: "https://randomuser.me/api/portraits/women/44.jpg" },
];
const Faculty = () => (
  <>
    <Navbar />
    <main className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-6 text-primary">Faculty & Staff</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staff.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl shadow-soft p-5 flex flex-col items-center text-center">
            <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full shadow-xl mb-3" />
            <h4 className="font-semibold text-lg">{t.name}</h4>
            <div className="text-xs text-primary">{t.role}</div>
            <div className="mt-1 text-xs">Qualification: {t.qualification}</div>
            <div className="text-xs">Experience: {t.experience}</div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);
export default Faculty;
