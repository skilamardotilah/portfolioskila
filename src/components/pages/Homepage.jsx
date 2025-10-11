import Content from "../organism/Content";
import Navbar from "../organism/Navbar";
import AboutGroup from "../organism/AboutGroup";
import Projects from "../organism/Projects";
import Contact from "../organism/Contact";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 flex flex-col justify-evenly ">
        <Content />
        <AboutGroup />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
