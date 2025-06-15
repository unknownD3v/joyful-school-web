
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    date: "August 5, 2025",
    title: "Annual Sports Day",
    desc: "A day of fun, games, and friendly competition for all our little athletes.",
  },
  {
    date: "September 10, 2025",
    title: "Parent-Teacher Meeting",
    desc: "An opportunity for parents to discuss their child's progress with our teachers.",
  },
  {
    date: "October 22, 2025",
    title: "Diwali Celebration",
    desc: "Crafts, stories, and celebrations for the festival of lights.",
  },
  {
    date: "December 20, 2025",
    title: "Christmas Carnival",
    desc: "Join us for a festive day with games, carols, and a visit from Santa!",
  },
];

const Events = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-6 text-primary">Events & Notices</h1>
      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.title} className="bg-pastel-pink/70 border border-pastel-pink rounded-xl p-6 shadow-soft">
            <p className="text-sm font-semibold text-accent">{event.date}</p>
            <h2 className="font-display text-xl font-bold text-primary mt-1 mb-2">{event.title}</h2>
            <p className="text-primary/90">{event.desc}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default Events;
