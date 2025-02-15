import React from "react";
import HeroBanner from "./components/HeroBanner";
import Services from "@/components/common/Services";
import { Metadata } from "next";
import Projects from "./components/Projects";

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
    <>
      <HeroBanner />
      <div className="container mx-auto px-2">
        <Services />
        <Projects />
      </div>
    </>
  );
};

export default HomePage;
