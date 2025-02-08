import React from "react";
import ContactInfo from "./components/ContactInfo";
import SectionHeading from "@/components/Typrography/SectionHeading";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen ">
      {/* Contact Info Section */}
      <SectionHeading heading="Contact" />

      <div className=" max-w-3xl mx-auto space-y-6">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
