import PricingArea from "@/common/pricing-area";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import DirectContactUs from "../forms/direct-contact-us";
import BannerPricing from "./banner-pricing";
import Header from '@/layout/header/header';
const PricingPlan = () => {
  return (
    <>
      <Header />
      <BannerPricing />
      <PricingArea dark={false} />
      <PricingArea dark={true} />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default PricingPlan;
