import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">
                        <Count add_style={true} number={35} />
                      </h3>
                      <i>
                        años de <br />
                        Experiencia
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    El Centro de Investigación Más Grande de la Región Caribe.
                  </h3>
                  <a className="tp-section__link" href="#">
                    35 Años de Excelencia en Salud y Atención Médica{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className=" mr-20 mb-40">
                    Celebramos 35 años siendo un pilar en el cuidado de la salud
                    en Barranquilla. En la Clínica de la Costa, ofrecemos
                    servicios médicos integrales de la más alta calidad,
                    respaldados por tecnología avanzada y un equipo médico
                    especializado. Desde 1989, nuestra misión ha sido brindar
                    atención personalizada y de confianza, convirtiéndonos en un
                    referente para pacientes locales y regionales. Con
                    instalaciones modernas y un compromiso constante con la
                    innovación, garantizamos una experiencia de salud segura y
                    eficiente. Gracias a nuestros 35 años de experiencia,
                    seguimos liderando en tratamientos médicos avanzados en la
                    Costa Caribe
                  </p>
                </div>

                <div className="about-content__btn">
                  <Link href="/contact" className="tp-btn">
                    Contactanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
