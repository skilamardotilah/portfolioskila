import Hello from "../atoms/Hello";
import Introduction from "../atoms/Introduction";
import Buttons from "../atoms/Buttons";
import ProfilePhoto from "../atoms/ProfilePhoto";
Introduction
function TextGrop() {
  return (
    <>
      <div className="py-10 lg:py-30 px-10 lg:px-45 flex flex-col lg:flex-row w-full mb-20 gap-3">
        <div className="font-poppins flex flex-col relative w-full lg:w-9/12">
          <Hello />
          <Introduction />
          <Buttons/>
        </div>
        
        {/* Profile photo positioned on the right - responsive */}
        <div className="flex items-center justify-center w-full lg:w-3/12 mt-8 lg:mt-0">
          <ProfilePhoto />
        </div>
      </div>
    </>
  );
}

export default TextGrop;
