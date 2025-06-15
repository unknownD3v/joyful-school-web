
import React from "react";
import { Smartphone, Shield, ToyBrick, Library, Video, Baby } from "lucide-react";

const facilities = [
  { title: "Smart Classrooms", icon: Smartphone },
  { title: "Safe Campus", icon: Shield },
  { title: "Play Area", icon: ToyBrick },
  { title: "Library", icon: Library },
  { title: "CCTV", icon: Video },
  { title: "Daycare", icon: Baby }
];
const FacilitiesGrid = () => (
  <section className="my-16">
    <h2 className="font-display text-xl text-primary mb-6 text-center">Facilities</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {facilities.map((f, i) => (
        <div
          key={i}
          className={`section-bg card-bg flex flex-col items-center p-5 transition hover:shadow-lg`}
        >
          <div className="text-3xl mb-2 text-primary">
            <f.icon size={36} strokeWidth={1.5} />
          </div>
          <div className="font-semibold">{f.title}</div>
        </div>
      ))}
    </div>
  </section>
);
export default FacilitiesGrid;
