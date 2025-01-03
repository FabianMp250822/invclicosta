import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ServiceDetailsArea from "./service-details-area";
import Header from '@/layout/header/header';
const ServiceDetails = () => {
  return (
    <>
      <Header />
      <Banner />
      <ServiceDetailsArea />
      <DirectContactUs />
      <FooterFour />
    </>
  );
};

export default ServiceDetails;
