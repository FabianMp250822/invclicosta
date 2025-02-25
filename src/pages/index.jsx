import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const RECAPTCHA_SITE_KEY = "6LcD-7sqAAAAABOcQvLv0LWfFEJMf1BKfFol4pC3";

const Index = () => {
  // URL de la imagen del logo
  const logoUrl = "https://invclicosta.info/assets/img/logo/logo.png";

  // Variables para SEO
  const pageTitle = "Centro de Investigación - Clínica de la Costa | Innovación en Salud";
  const pageDescription = "Centro de Investigación de la Clínica de la Costa: Más de 20 años de experiencia en investigación clínica. Certificaciones de buenas prácticas clínicas desde 2011. Cuatro sedes, más de 300 camas, laboratorios de alta complejidad y tecnología avanzada. Más de 100 ensayos clínicos en vacunas, cardiología, nefrología y más.";
  const keywords = "investigación clínica, clínica de la costa, Barranquilla, Colombia, salud, ensayos clínicos, vacunas, cardiología, nefrología, ISO 9001, buenas prácticas clínicas, laboratorio clínico, tecnología médica, innovación en salud, estudios clínicos";
  const author = "Clínica de la Costa";
  const siteUrl = "https://www.invclicosta.info";

  // Componente para manejar reCAPTCHA  correcion de estilos
  const ReCaptchaComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptcha = async () => {
      if (!executeRecaptcha) {
        console.error("reCAPTCHA no está listo debes cargarlo primero");
        return;
      }

      try {
        const token = await executeRecaptcha("homepage_action"); // Acción personalizada
        console.log("Token reCAPTCHA:", token);
        // Puedes enviar este token a tu backend para validación
      } catch (error) {
        console.error("Error ejecutando reCAPTCHA:", error);
      }
    };

    React.useEffect(() => {
      handleReCaptcha(); // Ejecuta el reCAPTCHA al cargar la página
    }, [executeRecaptcha]);

    return null; // Este componente no renderiza nada visual
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <Wrapper>
        <SEO
          pageTitle={pageTitle}
          description={pageDescription}
          keywords={keywords}
          author={author}
          siteUrl={siteUrl}
          imageUrl={logoUrl}
        />
        <Layout logoUrl={logoUrl}>
          <HomeOne />
        </Layout>
        <ReCaptchaComponent />
      </Wrapper>
    </GoogleReCaptchaProvider>
  );
};

export default Index;
