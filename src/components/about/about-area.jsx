import Count from "@/common/count";
import Link from "next/link";
import React from "react";

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Año base de experiencia
const baseYear = 1989;

// Calcular los años de experiencia automáticamente
const experienceCount = currentYear - baseYear;

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            {/* Sección de la Imagen y Experiencia */}
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
                      alt="Centro de Investigación Clínica"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">
                        <Count add_style={true} number={experienceCount} />
                      </h3>
                      <i>
                        Años de <br />
                        Experiencia
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="Forma decorativa"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt="Decoración adicional"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Contenido */}
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    Líderes en Investigación Clínica y Atención Médica en la Región Caribe
                  </h3>
                  <a className="tp-section__link" href="#">
                    Más de {experienceCount} Años de Excelencia en Salud{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <p className="mr-20 mb-40">
                    Desde {baseYear}, la Clínica de la Costa ha sido un pilar fundamental en la atención médica de calidad en Barranquilla y la Región Caribe. Con más de {experienceCount} años de experiencia, ofrecemos servicios de salud integrales, combinando la mejor tecnología médica con un equipo altamente calificado.
                    Nuestra misión ha sido siempre proporcionar atención personalizada, confiable y efectiva, asegurando que cada paciente reciba el mejor cuidado posible. Con instalaciones modernas y un enfoque constante en la innovación, seguimos liderando la investigación clínica y los tratamientos avanzados en la región.
                  </p>
                </div>

                {/* Botón de Contacto */}
                <div className="about-content__btn">
                  <Link href="/contact" className="tp-btn">
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos del Componente */}
      <style jsx>{`
        .about-area {
          background-color: #f9f9f9;
          padding: 130px 0 70px;
        }
        .tp-about-thumb {
          position: relative;
        }
        .tp-ab-main-img img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .about__exprience {
          position: absolute;
          bottom: -30px;
          left: 20px;
          background-color: #fff;
          border-radius: 8px;
          padding: 15px 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .tp-section__title {
          font-size: 32px;
          font-weight: 700;
          color: #1a2e7b;
          line-height: 1.3;
        }
        .tp-section__link {
          color: #ff5722;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s;
        }
        .tp-section__link:hover {
          color: #e64a19;
        }
        .tp-btn {
          background-color: #1a2e7b;
          color: #fff;
          padding: 15px 30px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s;
        }
        .tp-btn:hover {
          background-color: #15306d;
        }
      `}</style>
    </>
  );
};

export default AboutArea;
