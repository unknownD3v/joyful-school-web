
import { Link, useLocation } from "react-router-dom";
import { Phone, Instagram, Facebook, Youtube, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Programs", path: "/programs" },
  { name: "Faculty", path: "/faculty" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-30 bg-cream/95 backdrop-blur shadow-md w-full">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-8 py-3">
        <div className="flex items-center gap-3">
          <img src="https://lovable.dev/opengraph-image-p98pqg.png" alt="Joyful School Logo" className="w-10 h-10 rounded-full shadow" />
          <span className="text-2xl font-display font-bold tracking-tight text-primary">Joyful School</span>
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-primary">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`transition px-2 py-1 ${location.pathname === path ? "text-accent font-bold border-b-2 border-accent" : "hover:text-blue-600"}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex gap-4 items-center">
          <a href="tel:+911234567890" className="text-primary hover:text-blue-500">
            <Phone size={20} aria-label="Call School" />
          </a>
          <a href="#" className="hover:text-[#e1306c]"><Instagram size={20} /></a>
          <a href="#" className="hover:text-[#3b5998]"><Facebook size={20} /></a>
          <a href="#" className="hover:text-[#ff0000]"><Youtube size={20} /></a>
          <Link to="/admissions" className="ml-4 bg-primary text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">Apply Now</Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2" aria-label="Open menu">
                <Menu className="h-6 w-6 text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-cream">
              <div className="p-6">
                <span className="text-xl font-display font-bold text-primary">Menu</span>
                <ul className="mt-8 space-y-4">
                  {navLinks.map(({ name, path }) => (
                    <li key={name}>
                      <SheetClose asChild>
                        <Link
                          to={path}
                          className={`block transition font-medium ${location.pathname === path ? "text-accent font-bold" : "text-primary hover:text-blue-600"}`}
                        >
                          {name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <SheetClose asChild>
                  <Link to="/admissions" className="mt-8 w-full inline-block text-center bg-primary text-white px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">Apply Now</Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
