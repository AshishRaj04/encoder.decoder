import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Your message has been sent successfully!");
          e.target.reset();
        },
        (error) => {
          setMessage("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 my-16 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Contact Us
      </h1>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2 text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2 text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            className="p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="cursor-pointer bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          />
        </div>
      </form>

      {message && (
        <div
          className={`mt-6 text-center font-semibold ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contact;
