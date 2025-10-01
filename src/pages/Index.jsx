import Navbar from "../components/Navbar";
import Hero from "@/components/Hero.jsx";
import Projects from "@/components/Projects.jsx";
import Footer from "@/components/Footer.jsx";
import About from "@/components/About.jsx";
import { useSmoothScroll } from "../hooks/useSmoothScroll"; // Add this line

const Index = () => {
  useSmoothScroll(); // Add this line
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;