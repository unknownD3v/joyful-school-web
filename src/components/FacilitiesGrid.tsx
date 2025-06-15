
import { Library, Camera, Shield, Users, Baby, MonitorSmartphone } from "lucide-react";

const facilities = [
  { label: "Smart Classrooms", icon: MonitorSmartphone, desc: "Modern digital learning spaces." },
  { label: "Safe Campus", icon: Shield, desc: "CCTV monitoring & secure entry." },
  { label: "Play Area", icon: Baby, desc: "Colorful indoor/outdoor fun zones." },
  { label: "Library", icon: Library, desc: "Reading nooks & story time." },
  { label: "Daycare", icon: Users, desc: "Loving care beyond school hours." }
];

const FacilitiesGrid = () => (
  <section className="max-w-6xl mx-auto py-10 px-2">
    <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-primary text-center">Facilities</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {facilities.map(({ label, icon: Icon, desc }) => (
        <div key={label} className="flex flex-col items-center bg-white/90 rounded-2xl shadow-soft p-6 hover:shadow-lg transition">
          <span className="rounded-full bg-pastel-yellow p-3 mb-3 shadow animate-float">
            <Icon size={32} className="text-primary" />
          </span>
          <h4 className="font-display text-lg font-bold mb-2 text-primary">{label}</h4>
          <p className="text-primary/80 text-sm">{desc}</p>
        </div>
      ))}
      {/* Add more cards if needed */}
    </div>
  </section>
);
export default FacilitiesGrid;
