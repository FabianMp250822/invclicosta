import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// Configuración del slider
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Flechas de navegación
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// Contenido del slider
const slider_content = [
  {
    id: 1,
    icon: "flaticon-vaccine",
    title: "Vacunas",
    des: "Investigación y desarrollo en vacunas para prevenir diversas enfermedades.",
    color_icon: "",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-oncology",
    title: "Oncología",
    des: "Estudios clínicos en tratamientos innovadores contra el cáncer.",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 3,
    icon: "flaticon-pediatrics",
    title: "Pediatría",
    des: "Investigaciones enfocadas en la salud y bienestar de los niños.",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 4,
    icon: "flaticon-cardiology",
    title: "Cardiología",
    des: "Estudios en enfermedades cardiovasculares y nuevos tratamientos.",
    color_icon: "sky-icon",
    color: "sky-hexa",
  },
  {
    id: 5,
    icon: "flaticon-nephrology",
    title: "Nefrología",
    des: "Investigación en enfermedades renales y terapias innovadoras.",
    color_icon: "",
    color: "",
  },
  {
    id: 6,
    icon: "flaticon-internal-medicine",
    title: "Medicina Interna",
    des: "Amplio enfoque en estudios de diversas patologías de medicina interna.",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 7,
    icon: "flaticon-lupus",
    title: "Lupus",
    des: "Investigaciones en tratamientos y manejo del lupus.",
    color_icon: "green-icon",
    color: "green-hexa",
  },
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        className="services-area pt-95 pb-90 grey-bg mt-60 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row mb-125">
            <div className="col-lg-12">
              <div className="search-form">
                <form action="#">
                  <input type="text" placeholder="¿Qué estás buscando?" />
                  <button className="tp-btn search-btn" type="submit">
                    Buscar
                    <i className="fa-light fa-magnifying-glass ml-5"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  Nuestros Servicios
                </span>
                <h3 className="tp-section__title mb-50">Áreas de Servicio</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-40">
                      <div
                        className={`services-item__icon ${item.color_icon} mb-30`}
                      >
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title mb-30">
                          <Link href="/services-details">{item.title}</Link>
                        </h4>
                        <p>{item.des}</p>
                        <div className="services-item__btn">
                          <Link
                            className={`btn-hexa ${item.color}`}
                            href="/services-01"
                          >
                            <i></i>Leer Más
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
