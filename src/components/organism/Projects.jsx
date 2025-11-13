import ProjectsGroup from "../molecules/ProjectsGroup";

function Projects() {
  return (
    <>
      <div
        id="project"
        className="pt-12 md:pt-28 pb-28 flex flex-col gap-10 items-center justify-center mb-20 w-full max-w-7xl mx-auto px-4"
      >
        <h3
          data-aos="fade-down"
          data-aos-duration="900"
          className="font-poppins text-2xl lg:text-4xl font-medium lg:font-semibold cursor-pointer mb-5"
        >
          Project
        </h3>
        <ProjectsGroup />
      </div>
    </>
  );
}

export default Projects;
