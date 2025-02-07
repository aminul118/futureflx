import { ChildrenType } from "@/app/layout";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px] min-h-[calc(100vh-362px)]">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
