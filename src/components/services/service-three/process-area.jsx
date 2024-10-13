import service_three_data from "@/data/service-three-data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Configuración del slider
const setting = {
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
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
};

const ProcessArea = () => {
  return (
    <>
    <div className="container">
    <div className="row">
  <div className="col-lg-12 text-center mb-50">
    <h2 className="tp-section__title title-white" style={{ color: "black" }}>
      Nuestros Servicios Especializados en Investigación Clínica
    </h2>
    
  </div>
</div>

        </div>
      <section
        className="process-area process-bg"
        style={{ backgroundImage: `url(/assets/img/banner/process-bg-01.jpg)` }}
      >
        
        <Swiper {...setting} className="container-fluid p-0 process-active">
          {service_three_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide">
                <div className="fea-box">
                  <div className="tp-process">
                    <div className="tp-process__icon mb-40">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tp-process__content">
                      <h5 className="tp-process__title mb-20">{item.title}</h5>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ProcessArea;
