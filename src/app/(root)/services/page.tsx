import Services from "@/components/common/Services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | FutureFLX",
  description:
    "FutureFLX provides expert web development, Android app support, UI/UX design, and SEO services to help businesses grow. Build your future with us!",
  keywords:
    "web development, Android app development, SEO services, UI/UX design, FutureFLX, business solutions",
  robots: "index, follow",
};

const ServicesPage = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default ServicesPage;
