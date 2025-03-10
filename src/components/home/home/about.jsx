import Count from "@/common/count";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import React from "react";

// Obtener el año actual
const currentYear = new Date().getFullYear();
// Año base de experiencia
const baseYear = 1989;
// Calcular los años de experiencia dinámicamente
const experience_count = currentYear - baseYear;

const About = () => {
  // Hook de traducción
  const { t } = useTranslation();

  // Obtenemos el array de lista y la imagen desde el JSON de traducciones
  // Se usa { returnObjects: true } para asegurar que si hay un array, se retorne completo.
  const about_info_list = t("about.about_info_list", { returnObjects: true });
  const left_img = t("about.left_img");

  return (
    <>
      <section
        id="tp-about-scroll"
        className="about-area pb-70"
        style={{ backgroundColor: "#0c1841", color: "#C62E2E" }}
      >
        <div className="container">
          <div className="row">
            {/* Columna con la imagen y los años de experiencia */}
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  {/* Imagen proveniente de la traducción */}
                  <img
                    src={left_img}
                    alt={t("about.title")}
                    style={{ transform: "scale(1.3)" }}
                  />
                  <div className="about__exprience">
                    <h3 className="counter" style={{ color: "#FFFFFF" }}>
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i style={{ color: "#FFFFFF" }}>
                      {/* Texto "Years of Experience" o la que corresponda al idioma */}
                      {t("about.experience_count_label")}
                    </i>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna con los textos y botones */}
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-about__content pt-125 ml-60 mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="tp-section">
                  <span
                    className="tp-section__sub-title left-line mb-25"
                    style={{ color: "#FFFFFF" }}
                  >
                    {/* Título corto: "About Us" */}
                    {t("about.title")}
                  </span>
                  <h3
                    className="tp-section__title tp-ab-sm-title mb-45"
                    style={{ color: "#FFFFFF" }}
                  >
                    {/* Título principal: "Clinical Research Center, Leader..." */}
                    {t("about.section_title")}
                  </h3>
                  <i style={{ color: "#FFFFFF" }}>
                    {/* Subtítulo */}
                    {t("about.section_sub_title")}
                  </i>
                  <p className="mr-20 mb-45" style={{ color: "#FFFFFF" }}>
                    {/* Descripción principal */}
                    {t("about.section_des")}
                  </p>
                </div>

                {/* Lista de puntos destacados */}
                <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((item, i) => (
                      <li key={i} style={{ color: "#FFFFFF" }}>
                        <i
                          className="fa-solid fa-check"
                          style={{ color: "#FFFFFF" }}
                        ></i>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón para ir a "Nuestra Historia" o "Our History" */}
                <div className="tp-about__btn">
                  <Link
                    className="tp-btn"
                    href="/about"
                    style={{ color: "#FFFFFF" }}
                  >
                    {t("about.read_more_button")}
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

export default About;
