import Count from "@/common/count";
import Link from "next/link";
import React from "react";

// content
const content = {
  left_img: "assets/img/about/about-bg-01.png",
  experience_count: 35, // Años de experiencia del Centro de Investigación
  experience_count_text: (
    <>
      Años de <br />
      Experiencia
    </>
  ),
  title: "Sobre Nosotros",
  section_title: "Centro de Investigación Clínica de Excelencia",
  section_sub_title:
    "El centro más grande de la Región Caribe en estudios clínicos, con una trayectoria de 35 años en investigación avanzada.",
  section_des: (
    <>
      Contamos con más de 5,000 estudios realizados y colaboramos con líderes
      globales como Pfizer, Sanofi y Novartis en áreas como oncología,
      cardiología, nefrología y más. Nuestro compromiso es garantizar
      investigaciones con los más altos estándares de calidad y seguridad,
      centradas en la atención integral de nuestros usuarios.
    </>
  ),
  about_info_list: [
    {
      text: "Investigación en Vacunas",
    },
    {
      text: "Estudios en Oncología y Cardiología",
    },
    {
      text: "Certificado por INVIMA y FDA",
    },
    {
      text: "Colaboración con grandes farmacéuticas",
    },
  ],
};

const {
  left_img,
  experience_count,
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
      <section id="tp-about-scroll" className="about-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  <img src={left_img} alt="about-bg-img" />
                  <div className="about__exprience">
                    <h3 className="counter">
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i>{experience_count_text}</i>
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
                  <span className="tp-section__sub-title left-line mb-25">
                    {title}
                  </span>
                  <h3 className="tp-section__title tp-ab-sm-title mb-45">
                    {section_title}
                  </h3>
                  <i>{section_sub_title}</i>
                  <p className="mr-20 mb-45">{section_des}</p>
                </div>
                <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/about">
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
