import Hello from "../atoms/Hello";
import Introduction from "../atoms/Introduction";
import IntroButtons from "../atoms/IntroButtons";
import ProfilePhoto from "../atoms/ProfilePhoto";
Introduction
function TextGrop() {
  return (
    <>
      <div className="py-5 px-5 flex flex-col lg:flex-row w-full mb-10 gap-3 lg:py-30 lg:px-45 lg:mb-20">
        {/* Profile photo positioned at top on mobile, right on desktop */}
        <div className="flex items-center justify-center w-full lg:w-3/12 mb-8 lg:mb-0 lg:mt-0 order-first lg:order-last">
          <ProfilePhoto />
        </div>
        
        <div className="font-poppins flex flex-col relative w-full lg:w-9/12 items-center lg:items-start text-center lg:text-left">
          <Hello />
          <Introduction />
          <IntroButtons/>
        </div>
      </div>
    </>
  );
}

export default TextGrop;
