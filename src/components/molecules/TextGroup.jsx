import Hello from "../atoms/Hello";
import Introduction from "../atoms/Introduction";
import IntroButtons from "../atoms/IntroButtons";
import ProfilePhoto from "../atoms/ProfilePhoto";
Introduction
function TextGrop() {
  return (
    <>
      <div className="py-5 px-4 flex flex-col lg:flex-row w-full mb-10 gap-3 lg:py-30 lg:px-8 lg:mb-20 max-w-7xl xl:max-w-6xl mx-auto">
        {/* Profile photo positioned at top on mobile, right on desktop */}
        <div className="flex items-center justify-center w-full lg:w-3/12 xl:w-2/12 mb-8 lg:mb-0 lg:mt-0 order-first lg:order-last lg:mr-8 xl:mr-12">
          <ProfilePhoto />
        </div>
        
        <div className="font-poppins flex flex-col relative w-full lg:w-9/12 xl:w-10/12 items-center lg:items-start text-center lg:text-left lg:ml-8 xl:ml-12">
          <Hello />
          <Introduction />
          <IntroButtons/>
        </div>
      </div>
    </>
  );
}

export default TextGrop;
