import { useState, useEffect, useRef } from "react";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    // Add event listener when dropdown is open
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdown]);

  return (
    <div ref={dropdownRef} className="navbar-dropdown relative px-2 rounded md:hidden bg-[#8eebda]" style={{zIndex: 99999999}}>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="text-3xl text-white cursor-pointer md:hidden p-2 touch-manipulation select-none active:scale-95 transition-transform"
        style={{ touchAction: 'manipulation' }}
        type="button"
        aria-label="Toggle mobile menu"
      >
        {dropdown ? '✕' : '☰'}
      </button>
      <div
        className={`fixed bg-[#8eebda] w-40 right-4 top-20 text-center text-white font-poppins font-medium rounded-lg text-lg gap-2 p-3 flex flex-col transition-all duration-300 ease-in-out shadow-lg ${
          dropdown
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-5 pointer-events-none invisible"
        }`}
        style={{zIndex: 999999999}}
      >
        <a 
          className="hover:bg-teal-600 hover:text-white py-2 px-3 rounded transition-colors duration-200" 
          href="#home"
        >
          Home
        </a>
        <a 
          className="hover:bg-teal-600 hover:text-white py-2 px-3 rounded transition-colors duration-200" 
          href="#about"
        >
          About
        </a>
        <a 
          className="hover:bg-teal-600 hover:text-white py-2 px-3 rounded transition-colors duration-200" 
          href="#project"
        >
          Project
        </a>
        <a 
          className="hover:bg-teal-600 hover:text-white py-2 px-3 rounded transition-colors duration-200" 
          href="#skills"
        >
          My Skills
        </a>
        <a 
          className="hover:bg-teal-600 hover:text-white py-2 px-3 rounded transition-colors duration-200" 
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
