function PortoReact() {
  const tech = ["REACTJS", "TAILWINDCSS", "REACT ROUTER", "MATERIAL UI"];

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" className="h-full">
        <div className="border group relative shadow-2xl hover:shadow-none hover:ease-in-out hover:scale-105 transition duration-400 hover:bg-black hover:text-white hover:border-2 hover:border-teal-300 cursor-pointer px-2 pt-2 pb-2 gap-2 rounded-lg flex flex-col h-full font-poppins max-w-sm mx-auto">
          <a href="https://portfolioskila.vercel.app/" target="_blank" className="inset-0 absolute z-50"></a>
          <div className="bg-[url('/project/portfolio.png')] w-full h-48 bg-cover rounded-lg flex-grow"></div>
          <div className="flex flex-col w-full px-1 gap-1 justify-end">
            <h1 className="inline-block font-poppins group-hover:text-teal-800 px-2 py-0.5 border group-hover:border-teal-300 rounded-lg">Portfolio</h1>
            <p className="text-xs text-gray-600 group-hover:text-gray-300 px-2 py-1">Modern portfolio website with smooth animations, responsive design, and interactive components.</p>
            <div className="flex flex-row gap-1">
              <h4>Tech:</h4>
              <div className="flex flex-wrap gap-2 text-xs max-w-full">
                {tech.map((item, index) => {
                  return (
                    <p className="p-1 rounded-lg group-hover:text-teal-800 px-1 py-0.5 border group-hover:border-teal-300" key={index}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortoReact;
