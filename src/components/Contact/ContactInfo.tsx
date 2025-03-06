import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-full">
      <div className="bg-white p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Office
        </h3>
        <ul className="space-y-4 text-gray-600">
          <li>
            <strong className="font-medium">Email:</strong>{" "}
            contact@yourdomain.com
          </li>
          <li>
            <strong className="font-medium">Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong className="font-medium">Address:</strong> 123 Your Street,
            City, Country
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
