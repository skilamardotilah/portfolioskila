import ContactGroup from "../molecules/ContactGroup";

function Contact() {
  return (
    <>
    <div id="contact" className="flex pt-30  flex-col gap-10 lg:gap-0 lg:flex-row-reverse justify-center lg:justify-between lg:px-16 lg:items-baseline items-center ">
    <ContactGroup/>
    </div>
    </>
  );
}
export default Contact