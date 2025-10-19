import Content from "../organism/Content";
import Navbar from "../organism/Navbar";
import AboutGroup from "../organism/AboutGroup";
import Projects from "../organism/Projects";
import TechSection from "../organism/TechSection";
import Contact from "../organism/Contact";

function HomePage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20 flex flex-col justify-evenly md:justify-evenly w-full max-w-full">
        <Content />
        <AboutGroup />
        <Projects />
        <TechSection />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
