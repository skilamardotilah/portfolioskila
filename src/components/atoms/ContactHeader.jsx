function ContactHeader() {
  return (
    <>
      <div className="flex flex-col text-center">
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-4xl font-semibold"
        >
          Get in touch
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="text-sm text-gray-600 mt-4 md:mt-6 max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed px-4 md:px-2"
        >
          I'm actively looking for new opportunities. But even if you don't have a job offer for me, I'd appreciate if you pass by just to say hi! Also, don't hesitate in letting me know any feedback or recommendations you have. Thanks!
        </p>
      </div>
    </>
  );
}

export default ContactHeader;
