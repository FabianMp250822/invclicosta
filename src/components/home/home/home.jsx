import Brands from "@/common/brands";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Blog from "./blog";
import Counter from "../../../common/counter";
import Cta_Area from "./cta-area";
import Feedback from "./feedback";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import ServiceArea from "./service-area";
import Specialists from "../../../common/specialists";
import Team from "../../../common/team";
import ProcessArea from "@/components/services/service-three/process-area";
import PricingArea from "@/common/pricing-area";

const HomeOne = () => {
  return (
    <>
      <HeroBanner />
      <ServiceArea />
      <About />
      <Counter />
    
      <Brands />
      <Gallery />
      <ProcessArea />
      <Specialists />
      <Appointment />
      <Team />
     
      <Blog /> 
    </>
  );
};

export default HomeOne;
