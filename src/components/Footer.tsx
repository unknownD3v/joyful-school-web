
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-pastel-blue py-8 mt-16 border-t">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-8">
      <section>
        <img src="https://lovable.dev/opengraph-image-p98pqg.png" className="w-12 h-12 mb-2" alt="Logo" />
        <p className="font-display font-bold text-lg text-primary">Joyful School</p>
        <p className="text-sm max-w-xs text-primary mt-2">
          Early childhood learning that’s safe, warm, and joyful. Where every child shines!
        </p>
      </section>
      <section>
        <h3 className="font-semibold mb-3 text-primary">Quick Links</h3>
        <ul className="space-y-1">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mb-3 text-primary">Contact</h3>
        <ul className="space-y-1 text-primary">
          <li>123, Joy Lane, City, ST 000000</li>
          <li>Phone: +91 12345 67890</li>
          <li>Email: info@joyfulschool.com</li>
          <li className="flex gap-3 mt-2">
            <a href="#" aria-label="Instagram" className="hover:text-[#e1306c]"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#3b5998]"><Facebook /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#ff0000]"><Youtube /></a>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mb-3 text-primary">Legal</h3>
        <ul className="space-y-1 text-primary">
          <li><Link to="/legal/terms" className="hover:underline">Terms & Conditions</Link></li>
          <li><Link to="/legal/privacy" className="hover:underline">Privacy Policy</Link></li>
          <li><Link to="/legal/refund" className="hover:underline">Refund Policy</Link></li>
          <li><Link to="/legal/sitemap" className="hover:underline">Sitemap</Link></li>
        </ul>
      </section>
    </div>
    <div className="text-xs mt-8 text-center text-primary">
      <span>© {new Date().getFullYear()} Joyful School. All rights reserved. | Website developed & maintained by {" "}
        <a href="https://agency.afzaldev.in" className="underline" target="_blank" rel="noopener">AfzalDev Agency</a>
      </span>
    </div>
  </footer>
);
export default Footer;
