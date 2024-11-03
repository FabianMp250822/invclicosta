import feedback from "@/data/feedback";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Configuración del slider
const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
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
  navigation: {
    nextEl: ".tp-test-nxt",
    prevEl: ".tp-test-prv",
  },
};

const Feedback = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <section
        className="testimonial-area testimonial-bg pt-125 pb-130"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-02.png)` }}
        data-background="assets/img/shape/shape-bg-02.png"
      >
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".3s">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title sub-title-white left-line-white right-line-white mb-25">
                  Testimonios de Nuestros Pacientes
                </span>
                <h2 className="tp-section__title title-white mb-70">
                  Opiniones y Experiencias de los Pacientes en el Centro de Investigación Clínica de la Costa
                </h2>
                <p className="tp-section__description mb-40">
                  Descubra cómo nuestros tratamientos y servicios han impactado la vida de nuestros pacientes. Sus opiniones reflejan nuestro compromiso con la excelencia en el cuidado de la salud.
                </p>
              </div>
            </div>
          </div>
          <Swiper
            {...setting}
            modules={[Navigation]}
            loop={isLoop}
            className="swiper-container tp-test-active pt-40"
          >
            {feedback.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="tp-testi p-relative mb-70">
                  <div className="tp-testi__avata">
                    <img
                      src={item.img}
                      alt={`Foto de ${item.name}, paciente del Centro de Investigación Clínica de la Costa`}
                    />
                  </div>
                  <div className="tp-testi__content text-center">
                    <p>{item.des}</p>
                    <h4 className="tp-testi__avata-title">{item.name}</h4>
                    <span className="tp-testi__ava-position">{item.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-test-arrow d-flex align-items-center justify-content-center">
                <div className="tp-test-prv" aria-label="Testimonio anterior">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-test-nxt" aria-label="Siguiente testimonio">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
