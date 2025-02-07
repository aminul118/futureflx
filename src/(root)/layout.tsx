import { ChildrenType } from "@/app/layout";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
