import AboutSection from "../atoms/AboutSection";
import Images from "../atoms/Images";
import DownloadResume from "../atoms/DownloadResume";

function AboutGroup() {
  return (
    <>
      <div
        id="about"
        className="w-full mt-10 py-10 mb-20 gap-5 md:flex-row h-max md:mt-36 md:py-28 md:mb-64 flex flex-col items-center justify-start md:justify-center lg:justify-evenly relative"
      >
        <div className="hidden md:block">
          <Images />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <AboutSection />
          <DownloadResume />
        </div>
      </div>
    </>
  );
}

export default AboutGroup;
