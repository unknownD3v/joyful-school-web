
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import AboutOverview from "@/components/AboutOverview";
import FacilitiesGrid from "@/components/FacilitiesGrid";
import ProgramsOffered from "@/components/ProgramsOffered";
import GalleryPreview from "@/components/GalleryPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SchoolStats from "@/components/SchoolStats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroBanner />
      <AboutOverview />
      <FacilitiesGrid />
      <ProgramsOffered />
      <GalleryPreview />
      <TestimonialsCarousel />
      <SchoolStats />
      <CTASection />
    </main>
    <Footer />
  </>
);
export default Index;
