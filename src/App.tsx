import HeroSection from "./sections/HeroSection";
import Navbar from "./layouts/Navbar";
import ServicesSection from "./sections/ServicesSection";
import FeaturedProjectSection from "./sections/FeaturedProjectSection";
import ProcessSection from "./sections/ProcessSection";
import useSmoothScroll from "./hooks/useSmoothScroll";
import SpatialExperiencesSection from "./sections/SpatialExperiencesSection";
import DesignProcessSection from "./sections/DesignProcessSection";

function App() {
  useSmoothScroll();

  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <ProcessSection />
      <SpatialExperiencesSection />
      <DesignProcessSection />
    </main>
  );
}

export default App;
