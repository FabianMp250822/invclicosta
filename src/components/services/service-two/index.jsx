import PricingArea from "@/common/pricing-area";
import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";
import Video from "./video";
import Header from '@/layout/header/header';
const ServiceTwo = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServiceArea />
      <Video />
      <PricingArea p_bottom={true} />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceTwo;
