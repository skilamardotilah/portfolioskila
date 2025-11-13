import { useState } from "react";
import emailjs from "@emailjs/browser";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // EmailJS configuration
    // Get these from https://www.emailjs.com/ after signing up
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey || 
        serviceId === "YOUR_SERVICE_ID" || 
        templateId === "YOUR_TEMPLATE_ID" || 
        publicKey === "YOUR_PUBLIC_KEY") {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please set up EmailJS credentials in .env file. See EMAILJS_SETUP.md for instructions.",
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "skilamardotilah@gmail.com",
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Handle different types of errors
      let errorMessage = "Failed to send message. Please try again or contact me directly.";
      
      if (error.text) {
        // EmailJS specific error
        errorMessage = `Failed to send message: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Failed to send message: ${error.message}`;
      } else if (error.status) {
        // HTTP status errors
        if (error.status === 400) {
          errorMessage = "Invalid request. Please check your form and try again.";
        } else if (error.status === 401) {
          errorMessage = "Authentication failed. Please check your EmailJS configuration.";
        } else if (error.status === 403) {
          errorMessage = "Access denied. Please check your EmailJS service permissions.";
        } else {
          errorMessage = `Failed to send message (Error ${error.status}). Please try again.`;
        }
      }
      
      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
        <form
          className="flex flex-col w-full justify-start gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-4 py-2 rounded-2xl"
            required
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-4 py-2 rounded-2xl"
            required
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Message ..."
            value={formData.message}
            onChange={handleChange}
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-4 py-2 rounded-2xl"
            rows="2"
            required
            disabled={loading}
          ></textarea>

          {status.message && (
            <div
              className={`px-4 py-2 rounded-2xl text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#8eebda] hover:bg-[#42bda6] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-2xl transition duration-300 hover:scale-105 transform"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormContact;
