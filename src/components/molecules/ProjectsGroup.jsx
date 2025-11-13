import ChillMovie from "../atoms/ChillMovie";
import Comics from "../atoms/Comics";
import PortoReact from "../atoms/PortoReact";
import Todolist from "../atoms/Todolist";
import PhysicsSimulation from "../atoms/PhysicsSimulation";

function ProjectsGroup() {
  return (
    <>
      <div className="transition duration-300 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center max-w-4xl mx-auto">
        <ChillMovie />
        <Todolist />
        <Comics />
        <PortoReact />
        <PhysicsSimulation />
      </div>
    </>
  );
}

export default ProjectsGroup;
