
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const About = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="font-display text-3xl mb-3 text-primary">About Us</h1>
      <p className="text-lg text-primary">
        Welcome to Joyful School! Our vision is lifelong joyful learning, nurturing each child’s unique talents towards holistic growth. <br/><br/>
        <strong>Mission:</strong> To provide a secure, stimulating atmosphere using blended Montessori and play-based approaches, fostering resilient, happy learners.—<br />
        <strong>Principal's Message:</strong> “Every child can blossom—at Joyful, we cherish each smile and milestone.”
      </p>
    </main>
    <Footer />
  </>
); 
export default About;
