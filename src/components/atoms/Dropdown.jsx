import { useState } from "react";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="relative px-2 rounded md:hidden bg-[#8eebda]">
      <button
        onClick={() => {
          setDropdown(!dropdown);
        }}
        className="text-3xl text-white cursor-pointer md:hidden"
      >
        ☰
      </button>
      <div
        className={`absolute z-100 group bg-[#8eebda] w-40 right-0  text-center text-white font-poppins font-medium rounded text-lg  gap-4 p-1 mt-6 flex flex-col transition-all duration-300 ease-in-out font- ${
          dropdown
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <a className="hover:bg-[#8eebda]" href="#home">
          Home
        </a>
        <a className="hover:bg-[#8eebda]" href="#about">
          About
        </a>
        <a className="hover:bg-[#8eebda]" href="#project">
          Project
        </a>
        <a className="hover:bg-[#8eebda]" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
