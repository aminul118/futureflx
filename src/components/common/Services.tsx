import React from "react";
import SectionHeading from "../Typrography/SectionHeading";
import ServiceCard from "./ServiceCard";
import SectionContainer from "./SectionContainer";
import getServices from "@/lib/getServices";

const Services = () => {
  const services = getServices;

  return (
    <SectionContainer>
      <SectionHeading heading="Services" />
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
