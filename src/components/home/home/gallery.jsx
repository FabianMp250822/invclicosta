import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import ImagePopup from "@/modals/ImagePopup";

// Slider setting
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

// Array de contenido de la galería (imágenes y alt se mantienen fijos)
const gallery_content = [
  {
    id: 1,
    img: "assets/img/gallery/gal-thum-01.jpg",
    alt: "Ensayos clínicos en Cardiología",
  },
  {
    id: 2,
    img: "assets/img/gallery/gal-thum-02.jpg",
    alt: "Investigación en Nefrología",
  },
  {
    id: 3,
    img: "assets/img/gallery/gal-thum-03.jpg",
    alt: "Estudios Oncológicos",
  },
  {
    id: 4,
    img: "assets/img/gallery/gal-thum-04.jpg",
    alt: "Investigación en Vacunas",
  },
  {
    id: 5,
    img: "assets/img/gallery/gal-thum-05.jpg",
    alt: "Estudios Neurológicos",
  }
];

const Gallery = () => {
  const { t } = useTranslation();
  const [isLoop, setIsLoop] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsLoop(true);
  }, []);

  // Abre el popup de imagen
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  // Extraemos el arreglo de imágenes para el popup
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
                  {t("gallery.subtitle")}
                </span>
                <h3 className="tp-section__title mb-70">
                  {t("gallery.title")}
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
                          <Link href="/portfolio-details">
                            {t(`gallery.items.${item.id}.text1`)}
                          </Link>
                        </h4>
                        <span>
                          <i className="fa-solid fa-tag"></i>
                          <Link href="/services-details">
                            {t(`gallery.items.${item.id}.text2`)}
                          </Link>
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

      {/* Popup de imagen */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
};

export default Gallery;
