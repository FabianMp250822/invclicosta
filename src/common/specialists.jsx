import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        Experiencia de <br />
        Más de 30 Años
      </>
    ),
    des: (
      <>
        Con 30 años de experiencia en <br />
        investigación clínica a nivel nacional e internacional.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Investigación en <br />
        Áreas Críticas
      </>
    ),
    des: (
      <>
        Estudios avanzados en oncología, <br />
        cardiología, nefrología, y más.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        Certificación y <br />
        Reconocimientos
      </>
    ),
    des: (
      <>
        Certificados por INVIMA y <br />
        reconocidos por la FDA y otros organismos.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        Equipo de <br /> Expertos
      </>
    ),
    des: (
      <>
        Contamos con más de 46 investigadores <br />
        y un equipo altamente calificado.
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
                  Nuestros Especialistas
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  ¿Por Qué Elegirnos?
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
                  El Centro de Investigación de la Clínica de la Costa lleva 35 años realizando investigaciones en áreas clave, 
                  incluyendo oncología, cardiología, y más. 
                 
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
