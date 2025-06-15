
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const staff = [
  { name: "Ms. Neha Singh", role: "Lead Teacher – Nursery", qualification: "B.Ed, Montessori Trained", experience: "8 yrs", img: "https://randomuser.me/api/portraits/women/55.jpg", type: "faculty" },
  { name: "Mr. Arjun Patel", role: "Teacher – Playgroup", qualification: "B.A. Child Development", experience: "5 yrs", img: "https://randomuser.me/api/portraits/men/28.jpg", type: "faculty" },
  { name: "Ms. Sunita Sharma", role: "Coordinator", qualification: "M.A. Education", experience: "12 yrs", img: "https://randomuser.me/api/portraits/women/56.jpg", type: "faculty" },
  { name: "Ms. Priya Verma", role: "Lead Caretaker", qualification: "Certified Nanny", experience: "4 yrs", img: "https://randomuser.me/api/portraits/women/44.jpg", type: "staff" },
  { name: "Mr. Ramesh Kumar", role: "Admin Officer", qualification: "B.Com", experience: "7 yrs", img: "https://randomuser.me/api/portraits/men/41.jpg", type: "staff" },
  { name: "Ms. Anjali Devi", role: "Support Staff", qualification: "High School", experience: "6 yrs", img: "https://randomuser.me/api/portraits/women/48.jpg", type: "staff" },
];

const StaffCard = ({ person }: { person: typeof staff[0] }) => (
  <div className="bg-white rounded-2xl shadow-soft p-5 flex flex-col items-center text-center">
    <img src={person.img} alt={person.name} className="w-20 h-20 rounded-full shadow-xl mb-3" />
    <h4 className="font-semibold text-lg">{person.name}</h4>
    <div className="text-xs text-primary">{person.role}</div>
    <div className="mt-1 text-xs">Qualification: {person.qualification}</div>
    <div className="text-xs">Experience: {person.experience}</div>
  </div>
);

const Faculty = () => {
  const teachers = staff.filter(s => s.type === 'faculty');
  const supportStaff = staff.filter(s => s.type === 'staff');

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto py-24 px-4">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-3 text-primary">Faculty & Staff</h1>
          <p className="max-w-2xl mx-auto text-primary/90">Our team of dedicated educators and caring staff are the heart of Joyful School.</p>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl mb-6 text-primary border-b pb-2">Our Educators</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teachers.map((t) => (
              <StaffCard key={t.name} person={t} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl mb-6 text-primary border-b pb-2">Support Staff</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {supportStaff.map((t) => (
              <StaffCard key={t.name} person={t} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Faculty;
