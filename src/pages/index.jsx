import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const Index = () => {
  // URL de la imagen del logo
  const logoUrl = "https://invclicosta.info/assets/img/logo/logo.png";

  // Variables para SEO
  const pageTitle = "Centro de Investigación - Clínica de la Costa | Innovación en Salud";
  const pageDescription = "Centro de Investigación de la Clínica de la Costa: Más de 20 años de experiencia en investigación clínica. Certificaciones de buenas prácticas clínicas desde 2011 e ISO 9001:2015. Cuatro sedes, más de 300 camas, laboratorios de alta complejidad y tecnología avanzada. Más de 100 ensayos clínicos en vacunas, cardiología, nefrología y más.";
  const keywords = "investigación clínica, clínica de la costa, Barranquilla, Colombia, salud, ensayos clínicos, vacunas, cardiología, nefrología, ISO 9001, buenas prácticas clínicas, laboratorio clínico, tecnología médica, innovación en salud, estudios clínicos";
  const author = "Clínica de la Costa";
  const siteUrl = "https://www.invclicosta.info";

  return (
    <Wrapper>
      <SEO
        pageTitle={pageTitle}
        description={pageDescription}
        keywords={keywords}
        author={author}
        siteUrl={siteUrl}
        imageUrl={logoUrl} // Usar la variable logoUrl para la imagen en SEO
      />
      <Layout logoUrl={logoUrl}> {/* Pasar la URL del logo al Layout */}
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default Index;