import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function IntroButtons() {
  return (
    <>
      <div className="mt-2 md:mt-6 flex w-max h-max flex-row gap-0 md:gap-1 transition duration-500">
        <a href="https://github.com/skilamardotilah" target="_blank" className="flex items-center gap-1 px-1 py-1 transition duration-500 hover:text-white group hover:bg-black rounded-xl text-[40px] md:text-[60px]">
          <GitHubIcon fontSize="inherit" />
        </a>

        <a href="https://www.linkedin.com/in/skila-mardotilah" target="_blank" className="flex group gap-1 items-center px-1 py-1 hover:bg-blue-500 transition duration-500 hover:text-white rounded-xl cursor-pointer text-[40px] md:text-[60px]">
          <LinkedInIcon fontSize="inherit" />
        </a>
      </div>
    </>
  );
}

export default IntroButtons;
