import HeroSection from "./sections/HeroSection";
import Navbar from "./layouts/Navbar";
import ServicesSection from "./sections/ServicesSection";
import FeaturedProjectSection from "./sections/FeaturedProjectSection";
import AtmosphereSection from "./sections/AtmosphereSection";
import ProcessSection from "./sections/ProcessSection";

function App() {
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
