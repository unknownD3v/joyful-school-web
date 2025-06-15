
import { Users, Star, Clock } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Students Graduated", value: "1200+", icon: Users },
  { label: "Avg Student–Teacher Ratio", value: "12:1", icon: Star }
];

const SchoolStats = () => (
  <section className="max-w-screen-md mx-auto py-10 px-2">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="bg-white rounded-2xl shadow-soft px-6 py-7 flex flex-col items-center">
          <Icon className="text-accent mb-2" size={36} />
          <span className="text-2xl font-bold text-primary">{value}</span>
          <p className="text-primary/90 text-sm">{label}</p>
        </div>
      ))}
    </div>
  </section>
);
export default SchoolStats;
