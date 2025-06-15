
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Admissions = () => (
  <>
    <Navbar />
    <main className="max-w-2xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-4 text-primary">Admissions</h1>
      <ol className="list-decimal pl-5 mb-4">
        <li>Check eligibility by age group (Playgroup: 1.5+ yrs, Nursery: 2.5+ yrs, LKG: 3.5+ yrs, UKG: 4.5+ yrs).</li>
        <li>Fill the application form below.</li>
        <li>Visit our campus for a guided tour and interaction.</li>
        <li>Interview & documentation.</li>
        <li>Receive admission decision.</li>
      </ol>
      <form className="bg-white shadow-soft rounded-2xl p-6 flex flex-col gap-4">
        <input type="text" placeholder="Parent Name" required className="px-4 py-2 border rounded" />
        <input type="tel" placeholder="Mobile" required className="px-4 py-2 border rounded" />
        <input type="email" placeholder="Email" required className="px-4 py-2 border rounded" />
        <input type="text" placeholder="Child's Name" required className="px-4 py-2 border rounded" />
        <select required className="px-4 py-2 border rounded">
          <option value="">Class Applying For</option>
          <option>Playgroup</option>
          <option>Nursery</option>
          <option>LKG</option>
          <option>UKG</option>
        </select>
        <textarea placeholder="Message" rows={3} className="px-4 py-2 border rounded"></textarea>
        <button type="submit" className="bg-primary text-white font-semibold rounded py-2 px-6 mt-2 hover:scale-105 transition">Apply Now</button>
      </form>
    </main>
    <Footer />
  </>
); 
export default Admissions;
