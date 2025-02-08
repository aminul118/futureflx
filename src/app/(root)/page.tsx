import React from "react";
import HeroBanner from "./component/HeroBanner";
import Services from "@/components/common/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | FutureFLX",
  description:
    "FutureFLX provides expert web development, Android app support, UI/UX design, and SEO services to help businesses grow. Build your future with us!",
  keywords:
    "web development, Android app development, SEO services, UI/UX design, FutureFLX, business solutions",
  robots: "index, follow",
};

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Services />
    </div>
  );
};

export default HomePage;
