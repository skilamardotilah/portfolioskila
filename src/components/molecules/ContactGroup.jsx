import ContactHeader from "../atoms/ContactHeader";
import FormContact from "../atoms/FormContact";
import Buttons from "../atoms/Buttons";

function ContactGroup() {
  return (
    <>
      <ContactHeader />
      <div className="p-2 md:p-1 mb-10 mx-2 flex flex-col justify-center items-center font-poppins w-full max-w-md mx-auto -mt-4 md:-mt-3">
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
