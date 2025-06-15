
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Contact = () => (
  <>
    <Navbar />
    <main className="max-w-2xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-3 text-primary">Contact Us</h1>
      <ul className="mb-5">
        <li className="mb-1">📍 123 Joy Lane, City, State, Country</li>
        <li className="mb-1">📞 +91 12345 67890</li>
        <li className="mb-1">✉️ info@joyfulschool.com</li>
        <li className="mb-1">WhatsApp: +91 12345 67890</li>
      </ul>
      <iframe
        title="School Location"
        className="rounded-xl border mb-6 min-h-[300px] w-full"
        src="https://maps.google.com/maps?q=delhi%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
      />
      <form className="bg-white shadow-soft rounded-2xl p-6 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" required className="px-4 py-2 border rounded" />
        <input type="email" placeholder="Your Email" required className="px-4 py-2 border rounded" />
        <textarea placeholder="Your Message" rows={3} className="px-4 py-2 border rounded"></textarea>
        <button type="submit" className="bg-primary text-white font-semibold rounded py-2 px-6 mt-2 hover:scale-105 transition">Send Message</button>
      </form>
    </main>
    <Footer />
  </>
);
export default Contact;
