import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Centro de Innovación y Desarrollo en Salud - Clínica de la Costa" />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default index;
