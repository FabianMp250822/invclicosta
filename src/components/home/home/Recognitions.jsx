import React, { useState, useEffect } from "react";
import Link from "next/link";
import ImagePopup from "@/modals/ImagePopup";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Opciones del slider
const sliderSettings = {
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

const Recognitions = () => {
  const recognitionsData = {
    reconocimientosTitle: "Reconocimientos",
    recognitions: {
      textContent: [
        {
          title: "MSD",
          description:
            "Reconocimiento al CIC por excelente desempeño y gestión de calidad en la ejecución de estudios clínicos. Abril 2017.",
        },
        {
          title: "MSD",
          description:
            "Reconocimiento al CIC por contribución al desarrollo de la investigación clínica, durante la conmemoración de los 75 años.",
        },
        {
          title: "Noviembre 2022",
          description:
            "MSD - Inventing for Life - Otorga el presente reconocimiento a Clínica de La Costa por su contribución a la ciencia e innovación en la investigación clínica en Colombia.",
        },
      ],
      textContentRight: [
        {
          title: "Mayo 2021",
          description:
            "MSD - Otorga el presente reconocimiento a Clínica de la Costa por su adaptabilidad y eficiencia en los procesos administrativos y regulatorios llevados a cabo durante la pandemia. Bogotá, Colombia.",
        },
        {
          title: "9 de Mayo de 2024",
          description:
            "MSD - Excelentes métricas de calidad durante el año 2023 y el primer trimestre del año 2024. Orgullosamente presentado a Clínica de la Costa. Este certificado se presenta por logro honorable.",
        },
        {
          title: "Mayo 2021",
          description:
            "MSD - Otorga el presente reconocimiento a Clínica de la Costa por los esfuerzos extraordinarios realizados para garantizar la seguridad y continuidad en el estudio de todos los pacientes durante la pandemia. Bogotá, Colombia.",
        },
      ],
      bottomRecognitions: [
        {
          title:
            "Excelente desempeño y gestión de calidad en la ejecución de estudios clínicos",
          image:
            "https://firebasestorage.googleapis.com/v0/b/clinica-de-la-costa.appspot.com/o/web%20imagen%2FWhatsApp%20Image%202024-12-04%20at%2010.48.16%20AM(1).jpeg?alt=media&token=dca190ac-8059-43e6-b6e3-2b6497ce85c7",
        },
        {
          title: "Contribución al desarrollo de la investigación clínica",
          image:
            "https://firebasestorage.googleapis.com/v0/b/clinica-de-la-costa.appspot.com/o/web%20imagen%2FWhatsApp%20Image%202024-12-04%20at%2010.48.16%20AM(1).jpeg?alt=media&token=dca190ac-8059-43e6-b6e3-2b6497ce85c7",
        },
        {
          title:
            "Excelentes métricas de calidad durante el año 2023 y el primer trimestre del año 2024",
          image:
            "https://firebasestorage.googleapis.com/v0/b/clinica-de-la-costa.appspot.com/o/web%20imagen%2FWhatsApp%20Image%202024-12-04%20at%2010.48.16%20AM(1).jpeg?alt=media&token=dca190ac-8059-43e6-b6e3-2b6497ce85c7",
        },
        {
          title:
            "Contribución a la ciencia e innovación en la investigación clínica en Colombia",
          image:
            "https://firebasestorage.googleapis.com/v0/b/clinica-de-la-costa.appspot.com/o/web%20imagen%2FWhatsApp%20Image%202024-12-04%20at%2010.48.16%20AM(1).jpeg?alt=media&token=dca190ac-8059-43e6-b6e3-2b6497ce85c7",
        },
      ],
    },
  };

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
  const images = recognitionsData.recognitions.bottomRecognitions.map(
    (item) => item.image
  );

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
                {recognitionsData.reconocimientosTitle}
              </span>
              <h3 className="tp-section__title mb-70">
                Reconocimientos otorgados al centro de investigación
              </h3>
            </div>
          </div>
        </div>

        {/* Reconocimientos en dos columnas */}
        <div className="row">
          <div className="col-lg-6">
            {recognitionsData.recognitions.textContent.map((item, index) => (
              <div className="recognition-item mb-30" key={index}>
                <h5 className="recognition-item__title">{item.title}</h5>
                <p className="recognition-item__desc">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            {recognitionsData.recognitions.textContentRight.map(
              (item, index) => (
                <div className="recognition-item mb-30" key={index}>
                  <h5 className="recognition-item__title">{item.title}</h5>
                  <p className="recognition-item__desc">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Carrusel con las imágenes de reconocimientos */}
        <div className="row pt-50">
          <div className="col-lg-12">
            <div className="swiper-container recognition-slider">
              <Swiper
                {...sliderSettings}
                loop={isLoop}
                modules={[Navigation]}
                navigation
              >
                {recognitionsData.recognitions.bottomRecognitions.map(
                  (item, index) => (
                    <SwiperSlide key={index}>
                      <div className="recognition-swiper-item">
                        <div className="recognition-image-wrapper">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ cursor: "pointer", width: "55%" }} // <--- se agregó width: "35%"
                            onClick={() => handleImagePopup(index)}
                          />
                        </div>
                        <div className="recognition-caption">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
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
