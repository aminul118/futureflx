import React from "react";

type SectionHeadingType = {
  heading: string;
  description?: string;
};

const SectionHeading = ({ heading, description }: SectionHeadingType) => {
  return (
    <div className="text-center space-y-3 max-w-3xl mx-auto py-8 lg:py-16">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
