import TechFloating from "./TechFloating";

function ProfilePhoto() { 
  return (
    <div className="flex justify-center items-center mt-6 md:mt-0">
      <div 
        data-aos="fade-left"
        data-aos-duration="900" 
        className="bg-[url('/img/skila.png')] bg-cover 
                   w-40 h-40 md:w-90 md:h-90 lg:w-90 lg:h-90 
                   rounded-full shadow-2xl 
                   hover:scale-105 transition-all duration-300
                   relative overflow-hidden"
      >
        <TechFloating />
      </div>
    </div>
  );
}

export default ProfilePhoto;
