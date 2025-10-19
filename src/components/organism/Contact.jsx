import ContactGroup from "../molecules/ContactGroup";

function Contact() {
  return (
    <>
    <div id="contact" className="flex pt-10 flex-col gap-5 justify-center items-center md:pt-30 md:gap-10">
    <ContactGroup/>
    </div>
    </>
  );
}
export default Contact