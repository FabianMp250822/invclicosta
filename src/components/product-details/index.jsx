import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProductDetailsArea from "./product-details-area";
import Header from '@/layout/header/header';
const ProductDetails = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductDetailsArea />
      <FooterFour />
    </>
  );
};

export default ProductDetails;
