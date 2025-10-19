function AboutSection() {
  return (
    <>
      <div data-aos="fade-left"
          data-aos-duration="900" className="w-full md:w-[850px] lg:w-[700px] h-min font-poppins p-4 flex flex-col gap-1">
        <p className="font-semibold text-2xl lg:text-3xl">ABOUT ME</p>
        <p className="text-lg lg:text-2xl font-medium">
          {" "}
          <span className=" bg-[#8eebda]  px-1 rounded-lg text-white ">
            Why Choose Me:
          </span>
        </p>
        <p className="text-sm lg:text-sm mt-4 py-2 text-slate-400 text-justify">
          <span className="text-slate-800 font-medium ">
            {" "}
            I specialize in Front-End Web Development with ReactJS
          </span>{""}
        . I have experience working in the digital publishing industry with LMS platforms. I love solving complex problems, building user-friendly interfaces, and of course — coding.{" "}
        </p>
        
        <div className="mt-4 text-left">
          <p className="text-sm lg:text-lg font-semibold text-slate-800 mb-2">
            Here are my key technical highlights:
          </p>
          <ul className="text-sm lg:text-sm text-slate-600 space-y-1">
            <li className="flex items-start">
              <span className="text-[#8eebda] mr-2">•</span>
              Building interactive and responsive web interfaces
            </li>
            <li className="flex items-start">
              <span className="text-[#8eebda] mr-2">•</span>
              Developing applications using React and React Native
            </li>
            <li className="flex items-start">
              <span className="text-[#8eebda] mr-2">•</span>
              Managing state efficiently with Redux
            </li>
            <li className="flex items-start">
              <span className="text-[#8eebda] mr-2">•</span>
              Building and integrating REST APIs
            </li>
          </ul>
          
          <p className="text-sm lg:text-sm text-slate-600 mt-4 text-justify">
            These skills are backed by my Harisenin.com Front-End Development Bootcamp certification (GPA 4.00/4.00)
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
