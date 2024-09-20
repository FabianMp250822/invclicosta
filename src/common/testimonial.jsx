import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// ts img
const ts_img = [
  {
    img: "assets/img/icon/testi-ava-04.png",
  },
  {
    img: "assets/img/icon/testi-ava-05.png",
  },
  {
    img: "assets/img/icon/testi-ava-06.png",
  },
  {
    img: "assets/img/icon/testi-ava-07.png",
  },
];

// ts_text con testimonios reales del Centro de Investigación Clínica de la Costa
const ts_text = [
  {
    des: (
      <>
        “El Centro de Investigación Clínica de la Costa ha sido un pilar en la investigación de tratamientos innovadores. Gracias a sus ensayos clínicos, tuve acceso a un tratamiento avanzado para mi condición cardiovascular.”
      </>
    ),
    name: "Juan Pérez",
    title: "Paciente Cardiología",
  },
  {
    des: (
      <>
        “Participar en un estudio sobre nefrología en el centro fue una experiencia increíble. El equipo de profesionales fue amable y me hicieron sentir segura en todo momento.”
      </>
    ),
    name: "Ana González",
    title: "Paciente Nefrología",
  },
  {
    des: (
      <>
        “Colaborar con el equipo del Centro de Investigación ha sido muy enriquecedor. La calidad de los estudios y su compromiso con los más altos estándares de investigación es impecable.”
      </>
    ),
    name: "Dr. Carlos Ramírez",
    title: "Colaborador Oncología",
  },
  {
    des: (
      <>
        “Gracias a los estudios de vacunas realizados aquí, pude participar en ensayos pioneros que han marcado un antes y un después en la salud pública.”
      </>
    ),
    name: "María Torres",
    title: "Participante Estudio de Vacunas",
  },
];

const bg_style = {
  backgroundImage: `url(/assets/img/shape/shape-bg-05.png)`
};

const Testimonial = ({ bg_img }) => {
  const [isLoop, setIsLoop] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <div
        className={`testimonial-area pt-130 pb-125 ${
          bg_img ? "testi-bg theme-light-bg" : "tp-common-area"
        } `}
        style={bg_img ? bg_style : {}}
      >
        <div
          className="container p-relative  wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className={`testi-thumb ${
                  bg_img ? "" : "tp-testi-thumb-ava"
                } text-center`}
              >
                <div className="swiper-container swiper  test-ava-active">
                  <Swiper
                    loop={isLoop}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    navigation={{
                      nextEl: ".testi-button-next",
                      prevEl: ".testi-button-prev",
                    }}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="testi-avta-bottom pb-70"
                    breakpoints={{
                      1400: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      576: {
                        slidesPerView: 1,
                      },
                      0: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {ts_img.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img.img} alt="testi-avata" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div
              className={`${bg_img ? "testi-arrow" : "tp-testimonial-arrow"}`}
            >
              <div className="testi-button-next">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
              <div className="testi-button-prev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 col-md-11 col-12">
              <Swiper
                loop={isLoop}
                spaceBetween={10}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                navigation={{
                  nextEl: ".testi-button-next",
                  prevEl: ".testi-button-prev",
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`swiper-container ${
                  bg_img ? "" : "tp-testimonial-text "
                } test-active`}
              >
                {ts_text.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="testi-content text-center">
                      <p>{item.des}</p>
                      <i>{item.name}</i>
                      <span>{item.title}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
