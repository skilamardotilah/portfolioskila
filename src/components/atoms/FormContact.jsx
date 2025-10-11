function FormContact() {
  return (
    <>
      <div className="w-full"  data-aos="fade-up"
          data-aos-duration="1000">
        <form
          className="flex flex-col w-full justify-start gap-7 "
          action="mailto:skilamardotilah@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-5 py-2 rounded-2xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400  px-5 py-2 rounded-2xl"
            required
          />
          <textarea
            name="message"
            placeholder="Message..."
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-4 pt-3 pb-5 rounded-2xl "
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#8eebda] hover:bg-[#42bda6] text-white font-semibold py-3 px-6 rounded-2xl transition duration-300 hover:scale-105 transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContact;
