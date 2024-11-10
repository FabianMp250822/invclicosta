import PricingArea from "@/common/pricing-area";
import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProcessArea from "./process-area";
import ServiceArea from "./service-area";
import Header from '@/layout/header/header';
const ServiceThree = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServiceArea />
      <ProcessArea />
   
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceThree;
