import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="container mx-auto relative">
      <Image
        className="mx-auto h-[400px] lg:h-[600px] object-cover"
        src="/banner/hero-banner.png"
        width={1900}
        height={500}
        alt="futureflx banner"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full w-full bg-black/30 text-white space-y-3">
        <h1 className="text-5xl lg:text-6xl font-bold">FutureFlex</h1>
        <p>Web & Android Application support </p>
      </div>
    </div>
  );
};

export default HeroBanner;
