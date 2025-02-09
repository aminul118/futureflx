import React from "react";
import ContactInfo from "./components/ContactInfo";
import SectionHeading from "@/components/Typrography/SectionHeading";
import ContactForm from "./components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | FutureFLX",
  description:
    "FutureFLX provides expert web development, Android app support, UI/UX design, and SEO services to help businesses grow. Build your future with us!",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen ">
      <SectionHeading heading="Contact" />
      <div className=" max-w-3xl mx-auto space-y-6">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
