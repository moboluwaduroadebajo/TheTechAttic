import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return (
    <div className="flex flex-col">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default ProductLayout;
