import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 w-full">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Send Us a Message
      </h3>
      <form>
        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-lg font-medium text-gray-700"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-lg font-medium text-gray-700"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your email address"
            required
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label
            className="block text-lg font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-36 p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
