import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImagePopup from "@/modals/ImagePopup";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
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
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// gallery_content mejorado
const gallery_content = [
  {
    id: 1,
    img: "assets/img/gallery/gal-thum-01.jpg",
    text1: "Ensayos Clínicos en Cardiología",
    text2: "Ensayos clínicos realizados por cardiólogos expertos en el Centro de Investigación Clínica de la Costa",
    alt: "Ensayos clínicos realizados por cardiólogos expertos en el Centro de Investigación Clínica de la Costa",
  },
  {
    id: 2,
    img: "assets/img/gallery/gal-thum-02.jpg",
    text1: "Investigación en Nefrología",
    text2: "Investigaciones avanzadas en nefrología llevadas a cabo por especialistas en el Centro de Investigación Clínica de la Costa",
    alt: "Investigaciones avanzadas en nefrología llevadas a cabo por especialistas en el Centro de Investigación Clínica de la Costa",
  },
  {
    id: 3,
    img: "assets/img/gallery/gal-thum-03.jpg",
    text1: "Estudios Oncológicos",
    text2: "Estudios clínicos en oncología para el desarrollo de nuevos tratamientos contra el cáncer",
    alt: "Estudios clínicos en oncología para el desarrollo de nuevos tratamientos contra el cáncer",
  },
  {
    id: 4,
    img: "assets/img/gallery/gal-thum-04.jpg",
    text1: "Investigación en Vacunas",
    text2: "Ensayos clínicos de vacunas realizados por infectólogos en el Centro de Investigación Clínica de la Costa",
    alt: "Ensayos clínicos de vacunas realizados por infectólogos en el Centro de Investigación Clínica de la Costa",
  },
  {
    id: 5,
    img: "assets/img/gallery/gal-thum-05.jpg",
    text1: "Estudios Neurológicos",
    text2: "Investigaciones neurológicas avanzadas para comprender mejor las enfermedades del sistema nervioso",
    alt: "Investigaciones neurológicas avanzadas para comprender mejor las enfermedades del sistema nervioso",
  },
];

const Gallery = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  // images
  const images = gallery_content.map((item) => item.img);

  return (
    <>
      <section
        className="gallery-area grey-bg pt-120 pb-130"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Nuestros Servicios de Investigación Clínica
                </span>
                <h3 className="tp-section__title mb-70">
                  Conozca las Áreas de Especialización del Centro de Investigación Clínica de la Costa
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="tp-gallery ml-15 mr-15 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="swiper-container gall-active">
              <Swiper {...setting} loop={isLoop} modules={[Navigation]}>
                {gallery_content.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-gallery__item p-relative mb-70">
                      <div className="tp-gallery__img p-relative">
                        <img src={item.img} alt={item.alt} />
                        <div className="tp-gallery__info">
                          <a
                            onClick={() => handleImagePopup(index)}
                            className="popup-image"
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </a>
                        </div>
                      </div>
                      <div className="tp-gallery__content">
                        <h4 className="tp-gallery__title">
                          <Link href="/portfolio-details">{item.text1}</Link>
                        </h4>
                        <span>
                          <i className="fa-solid fa-tag"></i>
                          <Link href="/services-details">{item.text2}</Link>
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Gallery;
