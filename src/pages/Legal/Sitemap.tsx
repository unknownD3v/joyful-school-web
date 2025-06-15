
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Sitemap = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="font-display text-2xl mb-3 text-primary">Sitemap</h1>
      <ul className="list-disc pl-6">
        <li>Home</li>
        <li>About Us</li>
        <li>Admissions</li>
        <li>Faculty</li>
        <li>Gallery</li>
        <li>Contact</li>
        <li>Programs</li>
        <li>Achievements</li>
        <li>FAQs</li>
        <li>Policies: Terms, Privacy, Refund</li>
      </ul>
    </main>
    <Footer />
  </>
);
export default Sitemap;
