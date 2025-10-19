import ProjectsGroup from "../molecules/ProjectsGroup";

function Projects() {
  return (
    <>
      <div
        id="project"
        className="py-10 flex flex-col gap-5 items-center justify-center mb-10 md:py-28 md:gap-10 md:mb-20"
      >
        <h3
          data-aos="fade-down"
          data-aos-duration="900"
          className="font-poppins text-2xl lg:text-4xl font-medium lg:font-semibold cursor-pointer underline  mb-5"
        >
          Project
        </h3>
        <ProjectsGroup />
      </div>
    </>
  );
}

export default Projects;
