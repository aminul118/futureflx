import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="container mx-auto relative">
      <Image
        className="mx-auto h-[600px] object-cover"
        src="/banner/hero-banner.png"
        width={1900}
        height={500}
        alt="futureflx banner"
      />
      <div className="absolute inset-0 flex items-center justify-center h-full w-full bg-black/30">
        <h1 className="text-white text-5xl font-bold">FutureFlex</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
