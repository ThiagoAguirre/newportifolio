
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-primary overflow-x-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
