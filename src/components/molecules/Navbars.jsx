import Name from "../atoms/Name";
import Dropdown from "../atoms/Dropdown";
import Menu from "../atoms/Menu";
function Navbars() {
  return (
    <>
      <div className="w-full max-w-full flex fixed top-0 bg-[#F2F8FC] p-4 md:p-8 items-center flex-row justify-between overflow-hidden">
        <Name />
        <Dropdown />
        <Menu />
      </div>
    </>
  );
}

export default Navbars;
