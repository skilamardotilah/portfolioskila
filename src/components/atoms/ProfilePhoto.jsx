function ProfilePhoto() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div 
          data-aos="fade-left"
          data-aos-duration="900" 
          className="bg-[url('/img/skila.png')] bg-cover w-56 h-56 md:w-90 md:h-90 lg:w-90 lg:h-90 rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
        ></div>
      </div>
    </>
  );
}

export default ProfilePhoto;
