import React from "react";
import SectionHeading from "../Typrography/SectionHeading";
import ServiceCard from "./ServiceCard";
import getServices from "@/lib/getServices";

const Services = () => {
  const services = getServices();

  return (
    <>
      <SectionHeading heading="Services" />
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
