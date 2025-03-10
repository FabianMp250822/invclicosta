import React from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
// Importa el hook de traducción
import { useTranslation } from "react-i18next";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";

// Instala los módulos que vas a usar
SwiperCore.use([Autoplay, Navigation]);

const ServiceArea = () => {
  const { t } = useTranslation();

  // Obtenemos del JSON de traducción los items del slider
  // Nota: { returnObjects: true } permite retornar el array completo
  const slider_content = t("service_area.slider_items", { returnObjects: true });

  // Función para abrir el modal con SweetAlert2
  const handleReadMore = (item) => {
    Swal.fire({
      // Usamos template strings para interpolar la traducción y los valores
      html: `
        <div style="text-align: left; padding: 20px;">
          <h2 style="color: #0D92F4; font-size: 28px; margin-bottom: 15px;">${item.title}</h2>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            ${item.des}
          </p>
          <p style="color: #555; font-size: 15px; line-height: 1.6;">
            ${t("service_area.modal.paragraph1", { title: item.title })}
          </p>
          <p style="color: #555; font-size: 15px; line-height: 1.6;">
            ${t("service_area.modal.paragraph2")}
          </p>
        </div>
      `,
      showCloseButton: true,
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#C62E2E",
      width: "70%",
      padding: "30px",
      background: "#FFFFFF",
    });
  };

  return (
    <>
      <section className="services-area pt-95 pb-90 grey-bg mt-60 fix">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span
                  className="tp-section__sub-title left-line mb-20"
                  style={{ color: "#77CDFF" }}
                >
                  {/* Traducción del subtítulo */}
                  {t("service_area.section_subtitle")}
                </span>
                <h3 className="tp-section__title" style={{ color: "#0D92F4" }}>
                  {/* Traducción del título */}
                  {t("service_area.section_title")}
                </h3>
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            navigation={{
              nextEl: ".services-n",
              prevEl: ".services-p",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {slider_content.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="services-item">
                  <div
                    className="services-item__icon mb-30"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "30px",
                      color: "#C62E2E",
                    }}
                  >
                    <i className={`${item.icon}`}></i>
                  </div>
                  <div className="services-item__content">
                    <h4 className="services-item__tp-title mb-30">
                      <Link href="/services-details" style={{ color: "#0D92F4" }}>
                        {item.title}
                      </Link>
                    </h4>
                    <p style={{ color: "#333" }}>{item.des}</p>
                    <div className="services-item__btn">
                      <button
                        onClick={() => handleReadMore(item)}
                        className="btn-hexa"
                        style={{
                          backgroundColor: "#F95454",
                          color: "#FFFFFF",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        {t("service_area.read_more")}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Botones de navegación (puedes traducirlos si lo deseas) */}
            <div className="services-n">Next</div>
            <div className="services-p">Prev</div>
          </Swiper>
        </div>
      </section>

      <style jsx>{`
        .services-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 300px;
          text-align: center;
        }

        .services-item:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
        }

        .services-item__icon {
          font-size: 48px;
          margin-bottom: 15px;
          color: #c62e2e;
        }

        .services-n,
        .services-p {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
        }

        .services-n {
          right: 10px;
        }

        .services-p {
          left: 10px;
        }
      `}</style>
    </>
  );
};

export default ServiceArea;
