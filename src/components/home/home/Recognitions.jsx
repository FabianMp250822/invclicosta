import React, { useState, useEffect } from "react";
import Link from "next/link";
import ImagePopup from "@/modals/ImagePopup";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

// Opciones del slider
const sliderSettings = {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1400: { slidesPerView: 4 },
    1200: { slidesPerView: 3 },
    992: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
};

const Recognitions = () => {
  const { t } = useTranslation();

  // Obtenemos los textos desde los archivos de traducción
  const recognitionsTitle = t("recognitions.title");
  const sectionTitle = t("recognitions.sectionTitle");
  const textContent = t("recognitions.textContent", { returnObjects: true });
  const textContentRight = t("recognitions.textContentRight", { returnObjects: true });
  const bottomRecognitions = t("recognitions.bottomRecognitions", { returnObjects: true });

  // Estado para el loop del swiper
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  // Estados para el popup de imágenes
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Abrir el popup de la imagen correspondiente
  const handleImagePopup = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Extraer las imágenes del arreglo bottomRecognitions
  const images = bottomRecognitions.map((item) => item.image);

  return (
    <section
      className="recognitions-area pt-120 pb-130"
      style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
    >
      <div className="container">
        {/* Título principal de la sección */}
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-section text-center">
              <span className="tp-section__sub-title left-line right-line mb-25">
                {recognitionsTitle}
              </span>
              <h3 className="tp-section__title mb-70">
                {sectionTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* Reconocimientos en dos columnas */}
        <div className="row">
          <div className="col-lg-6">
            {textContent.map((item, index) => (
              <div className="recognition-item mb-30" key={index}>
                <h5 className="recognition-item__title">{item.title}</h5>
                <p className="recognition-item__desc">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {textContentRight.map((item, index) => (
              <div className="recognition-item mb-30" key={index}>
                <h5 className="recognition-item__title">{item.title}</h5>
                <p className="recognition-item__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Carrusel con las imágenes de reconocimientos */}
        <div className="row pt-50">
          <div className="col-lg-12">
            <div className="swiper-container recognition-slider">
              <Swiper {...sliderSettings} loop={isLoop} modules={[Navigation]} navigation>
                {bottomRecognitions.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="recognition-swiper-item">
                      <div className="recognition-image-wrapper">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ cursor: "pointer", width: "55%" }}
                          onClick={() => handleImagePopup(index)}
                        />
                      </div>
                      <div className="recognition-caption">
                        <h5>{item.title}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Popup de imágenes */}
      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </section>
  );
};

export default Recognitions;
