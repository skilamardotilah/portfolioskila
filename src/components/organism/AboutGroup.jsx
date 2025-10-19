import AboutSection from "../atoms/AboutSection";
import DownloadResume from "../atoms/DownloadResume";

function AboutGroup() {
  return (
    <>
      <div
        id="about"
        className="w-full mt-10 py-10 mb-20 h-max md:mt-36 md:py-28 md:mb-64 flex flex-col items-center justify-center relative max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-col items-center text-center">
          <AboutSection />
          <DownloadResume />
        </div>
      </div>
    </>
  );
}

export default AboutGroup;
