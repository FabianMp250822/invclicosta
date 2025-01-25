import Count from "@/common/count";
import Link from "next/link";
import React from "react";

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Año base de experiencia
const baseYear = 1989;

// Calcular los años de experiencia dinámicamente
const experience_count = currentYear - baseYear;

// content
const content = {
  left_img: "assets/img/about/principl3.jpeg",
  experience_count_text: (
    <>
      Años de <br />
      Experiencia
    </>
  ),
  title: "Sobre Nosotros",
  section_title: "Centro de Investigación Clínica de la costa, Líder en la Región Caribe",
  section_sub_title:
    "El principal centro de estudios clínicos en la Región Caribe, con 35 años de experiencia en investigación médica avanzada.",
  section_des: (
    <>
      Realizamos más de 100 estudios clínicos y colaboramos con reconocidas farmacéuticas globales como Pfizer, Sanofi y Novartis. Nos especializamos en áreas como oncología, cardiología, nefrología y más, asegurando siempre los más altos estándares de calidad y seguridad. Nuestro enfoque se centra en la atención integral de nuestros pacientes, brindando soluciones innovadoras para mejorar la salud y el bienestar.
    </>
  ),
  about_info_list: [
    {
      text: "Desarrollo de Vacunas Efectivas",
    },
    {
      text: "Investigación en Oncología y Cardiología",
    },
    {
      text: "Certificación por INVIMA y FDA",
    },
    {
      text: "Alianzas con Líderes Farmacéuticos",
    },
  ],
};

const {
  left_img,
  experience_count_text,
  title,
  section_title,
  section_sub_title,
  section_des,
  about_info_list,
} = content;

const About = () => {
  return (
    <>
      <section
        id="tp-about-scroll"
        className="about-area pb-70"
        style={{ backgroundColor: "#0c1841", color: "#C62E2E" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  <img
                    src={left_img}
                    alt="Imagen del Centro de Investigación Clínica"
                    style={{ transform: "scale(1.3)" }}
                  />
                  <div className="about__exprience">
                    <h3 className="counter" style={{ color: "#FFFFFF" }}>
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i style={{ color: "#FFFFFF" }}>{experience_count_text}</i>
                  </div>
                </div>
              </div>
            </div>
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
                    {title}
                  </span>
                  <h3
                    className="tp-section__title tp-ab-sm-title mb-45"
                    style={{ color: "#FFFFFF" }}
                  >
                    {section_title}
                  </h3>
                  <i style={{ color: "#FFFFFF" }}>{section_sub_title}</i>
                  <p className="mr-20 mb-45" style={{ color: "#FFFFFF" }}>
                    {section_des}
                  </p>
                </div>
                <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i} style={{ color: "#FFFFFF" }}>
                        <i className="fa-solid fa-check" style={{ color: "#FFFFFF" }}></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/about" style={{ color: "#FFFFFF" }}>
                    Nuestra Historia
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
