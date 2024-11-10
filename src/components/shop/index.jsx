import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import ShopArea from "./shop-area";
import ShopBanner from "./shop-banner";
import Header from '@/layout/header/header';
const Shop = () => {
  return (
    <>
      <Header />
      <ShopBanner />
      <ShopArea />
      <FooterFour />
    </>
  );
};

export default Shop;
