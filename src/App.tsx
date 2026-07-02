import HeroSection from "./sections/HeroSection";
import Navbar from "./layouts/Navbar";
import ServicesSection from "./sections/ServicesSection";
import FeaturedProjectSection from "./sections/FeaturedProjectSection";
import ProcessSection from "./sections/ProcessSection";
import useSmoothScroll from "./hooks/useSmoothScroll";
import SpatialExperiencesSection from "./sections/SpatialExperiencesSection";
import DesignProcessSection from "./sections/DesignProcessSection";
import ContactSection from "./sections/ContactSection";
import PageTransition from "./components/ui/PageTransition";
import MobilePlaceholder from "./layouts/MobilePlaceholder";

function App() {
  useSmoothScroll();

  return (
    <>
      <div className="block lg:hidden">
        <MobilePlaceholder />
      </div>

      <div className="hidden lg:block">
        <main className="bg-[#050505] text-white">
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <FeaturedProjectSection />
          <ProcessSection />
          <SpatialExperiencesSection />
          <DesignProcessSection />
          <ContactSection />

          <PageTransition />
        </main>
      </div>
    </>
  );
}

export default App;
