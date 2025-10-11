import ContactHeader from "../atoms/ContactHeader";
import FormContact from "../atoms/FormContact";
import Tech from "../atoms/Tech";

function ContactGroup() {
  return (
    <>
      <div className="p-4 mx-2   flex flex-col justify-between items-center font-poppins  gap-2 w-[400px] lg:w-2/4">
        <ContactHeader />
        <FormContact />
      </div>
      <div className="px-2">
        <Tech />
      </div>
    </>
  );
}

export default ContactGroup;
