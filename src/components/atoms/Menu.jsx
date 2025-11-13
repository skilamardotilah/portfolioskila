function Menu() {
  return (
    <>
      <div className="hidden md:inline-block ">
        <div className="flex flex-row gap-4 font-poppins font-medium text-lg lg:text-xl">
          <a
            className="hover:text-[#8eebda] hover:underline transition-all duration-200 "
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:text-[#8eebda] hover:underline  transition-all duration-200 "
            href="#about"
          >
            About Me
          </a>
          <a
            className="hover:text-[#8eebda] hover:underline  transition-all duration-200 "
            href="#project"
          >
            Project
          </a>
          <a
            className="hover:text-[#8eebda] hover:underline  transition-all duration-200 "
            href="#skills"
          >
            My Skills
          </a>
          <a
            className="hover:text-[#8eebda]  hover:underline transition-all duration-200 "
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
