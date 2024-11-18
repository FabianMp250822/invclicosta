import Link from "next/link";
import React from "react";

// Obtener el año actual
const currentYear = new Date().getFullYear();
// Año base de experiencia
const baseYear = 1989;
// Calcular los años de experiencia dinámicamente
const yearsOfExperience = currentYear - baseYear;

// choose data mejorado
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        Pioneros en <br />
        Investigaión Clínica
      </>
    ),
    des: (
      <>
        Amplia experiencia en investigación clínica, <br />
        respaldada por tres décadas de logros nacionales e internacionales.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Estudios Pioneros en <br />
        Áreas Médicas Críticas
      </>
    ),
    des: (
      <>
        Investigaciones avanzadas en oncología, <br />
        cardiología, nefrología, y otras áreas críticas para la salud.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        Certificaciones <br />
        y Reconocimientos Internacionales
      </>
    ),
    des: (
      <>
        Avalados por INVIMA y reconocidos por la FDA, <br />
        cumpliendo con los más altos estándares de calidad.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        Equipo Multidisciplinario de <br />
        Expertos Investigadores
      </>
    ),
    des: (
      <>
        Más de 46 investigadores especializados, <br />
        comprometidos con la excelencia y la innovación en la salud.
      </>
    ),
  },
];

const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Nuestro Equipo de Investigación
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  Conozca Nuestras Ventajas Competitivas
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>
                El Centro de Investigación de la Clínica de la Costa se dedica a desarrollar soluciones innovadoras en áreas clave como oncología, cardiología y nefrología, transformando vidas y promoviendo la salud a través de avances científicos de vanguardia.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
