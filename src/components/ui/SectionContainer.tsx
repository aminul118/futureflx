import { ChildrenType } from "@/app/layout";
import React from "react";

const SectionContainer = ({ children }: ChildrenType) => {
  return <div className="container mx-auto px-2">{children}</div>;
};

export default SectionContainer;
