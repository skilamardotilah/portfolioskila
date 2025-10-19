function TechFloating() {
  const techIcons = [
    { name: "HTML5", img: "/Tech/html.png", delay: "0s", duration: "3s", left: "20%", top: "18%" },
    { name: "TailwindCSS", img: "/Tech/tailwind.png", delay: "0.5s", duration: "4s", left: "7%", top: "33%" },
    { name: "Githuhb", img: "/Tech/github.png", delay: "0.5s", duration: "4.5s", left: "0.1%", top: "54%" },
    { name: "Javascript", img: "/Tech/javascript.png", delay: "1s", duration: "3.5s", left: "70%", top: "40%" },
    { name: "Bootstrap", img: "/Tech/bootstrap.png", delay: "1.5s", duration: "4.5s", left: "5%", top: "70%" },
    { name: "ReactJs", img: "/Tech/reactjs.png", delay: "2s", duration: "3.2s", left: "13%", top: "47%" },
    { name: "CSS3", img: "/Tech/css.png", delay: "2.5s", duration: "3.8s", left: "75%", top: "25%" },
    { name: "VITE", img: "/Tech/vite.png", delay: "1.5s", duration: "4.2s", left: "85%", top: "60%" },
    { name: "Figma", img: "/Tech/figma.png", delay: "2s", duration: "4.2s", left: "75%", top: "75%" },
    { name: "git", img: "/Tech/git.png", delay: "0.5s", duration: "3.2s", left: "93%", top: "39%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techIcons.map((tech) => (
        <div
          key={tech.name}
          className="absolute w-4 h-4 md:w-8 md:h-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
          style={{
            left: tech.left,
            top: tech.top,
            animation: `float ${tech.duration} ease-in-out infinite`,
            animationDelay: tech.delay,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
            style={{ backgroundImage: `url(${tech.img})` }}
            title={tech.name}
          />
        </div>
      ))}
    </div>
  );
}

export default TechFloating;
