function AboutSection() {
  return (
    <>
      <div data-aos="fade-left"
          data-aos-duration="900" className="w-full  md:w-[450px] h-min font-poppins p-4 flex flex-col gap-1">
        <p className="font-semibold text-2xl lg:text-3xl">ABOUT ME</p>
        <p className="text-lg lg:text-2xl font-medium">
          {" "}
          <span className=" bg-[#8eebda]  px-1 rounded-lg text-white ">
            Why Choose Me:
          </span>
        </p>
        <p className="text-sm lg:text-xl py-2 text-slate-400">
          <span className="text-slate-800 font-medium ">
            {" "}
            I specialize in Front-End Web Development with ReactJS
          </span>{""}
        . I have experience working in the digital publishing industry with LMS platforms. I love solving complex problems, building user-friendly interfaces, and of course — coding.{" "}
        </p>
      </div>
    </>
  );
}

export default AboutSection;
