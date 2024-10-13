import service_three_data from "@/data/service-three-data";
import Link from "next/link";
import React, { useState } from "react";


const ServiceArea = () => {
  // Estado para controlar qué tarjeta está expandida
  const [expanded, setExpanded] = useState(null);
  // Función para manejar la expansión de una tarjeta
  const toggleExpand = (id) => {
    if (expanded === id) {
      setExpanded(null);  // Si ya está expandida, se colapsa
    } else {
      setExpanded(id);  // Si no, se expande
    }
  };

  return (
    <>
      <section
        className="services-area pt-120 pb-105 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-end mb-45">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  Nuestros Servicios
                </span>
                <h3 className="tp-section__title mb-30">Área de Servicios</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  Siempre te garantizaremos los mejores resultados:
                  <Link href="/contact">
                    Contáctanos<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Contenedor de tarjetas con el mismo tamaño y margen entre ellas */}
          <div className="row">
            {service_three_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-12">
                <div
                  className={`services-thumb-box ${item.color} mb-30 wow fadeInRight`}
                  data-wow-delay=".3s"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '5px',  // Espaciado entre las tarjetas
                  }}
                >
                  <div className="services-thumb-box__thumb fix">
                    <img src={item.img} alt="services-thumb" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  </div>

                  <div className="services-thumb-box__text-area d-flex align-items-center" style={{ flexGrow: 1 }}>
                    <div className="services-thumb-box__icon mr-20">
                      <i className={item.icon}></i>
                    </div>
                    <div className="services-thumb-box__content">
                      <h5 className="services-thumb-box__title">
                        <Link href="/services-details">{item.title}</Link>
                      </h5>
                      {/* Mostrar parte del texto si no está expandida */}
                      <p>
                        {expanded === item.id
                          ? item.description
                          : `${item.description.substring(0, 100)}...`}
                      </p>
                      {/* Botón para mostrar más o menos */}
                      <button
                        className="tp-btn-link"
                        onClick={() => toggleExpand(item.id)}
                      >
                        {expanded === item.id ? "Leer menos" : "Leer más"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
