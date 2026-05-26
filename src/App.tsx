import HeroSection from "./sections/HeroSection";
import Navbar from "./layouts/Navbar";
import ServicesSection from "./sections/ServicesSection";
import FeaturedProjectSection from "./sections/FeaturedProjectSection";

function App() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectSection />
    </main>
  );
}

export default App;
