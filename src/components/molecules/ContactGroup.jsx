import ContactHeader from "../atoms/ContactHeader";
import FormContact from "../atoms/FormContact";
import Buttons from "../atoms/Buttons";

function ContactGroup() {
  return (
    <>
      <ContactHeader />
      <div className="p-2 md:p-1 mb-10 flex flex-col justify-center items-center font-poppins w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto -mt-4 md:-mt-3 px-4 md:px-2">
        {/* Form di tengah */}
        <div className="w-full">
          <FormContact />
        </div>
        
        {/* Contact buttons di bawah form */}
        <div className="w-full flex justify-center mt-2">
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default ContactGroup;
