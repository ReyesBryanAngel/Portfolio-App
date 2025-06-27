import Navbar from "./components-v2/Navbar";
import HeroSection from "./components-v2/HeroSection";
import AboutSection from "./components-v2/About";
import SkillsSection from "./components-v2/SkillsSection";
import ProjectsSection from "./components-v2/ProjectsSection";
import Footer from "./components-v2/Footer";
import ExperienceSection from "./components-v2/ExperienceSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection /> {/* ← Inserted here */}
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
