function Tech() {
  const tech = [
    { id: 1, name: "ReactJs", img: "/Tech/reactjs.png" },
    { id: 2, name: "TailwindCSS", img: "/Tech/tailwind.png" },
    { id: 3, name: "Javascript", img: "/Tech/javascript.png" },
    { id: 4, name: "Bootstrap", img: "/Tech/bootstrap.png" },
    { id: 5, name: "HTML5", img: "/Tech/html.png" },
    { id: 6, name: "CSS3", img: "/Tech/css.png" },
    { id: 7, name: "VITE", img: "/Tech/vite.png"},
    { id: 8, name: "Figma", img: "/Tech/figma.png" },
    { id: 9, name: "GitHub", img: "/Tech/github.png" },
  ];
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center mb-24 font-poppins">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-xl lg:text-2xl font-semibold"
        >
          My Skills
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-2 md:grid-cols-3 md:gap-6  gap-5 justify-center items-center"
        >
          {tech.map((item) => {
            return (
              <>
                <div className="flex flex-col border shadow-2xl transition duration-500 border-teal-600 px-4 py-2 rounded-xl gap-2 items-center hover:bg-black hover:text-white">
                  <div
                    key={item.id}
                    style={{ backgroundImage: `url(${item.img})` }}
                    className="w-14 h-14 bg-cover "
                  ></div>
                  <p className="text-center font-medium">{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tech;
