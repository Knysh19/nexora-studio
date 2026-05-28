import HeroSection from "./sections/HeroSection";
import Navbar from "./layouts/Navbar";
import ServicesSection from "./sections/ServicesSection";
import FeaturedProjectSection from "./sections/FeaturedProjectSection";
import ProcessSection from "./sections/ProcessSection";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <ProcessSection />
    </main>
  );
}

export default App;
