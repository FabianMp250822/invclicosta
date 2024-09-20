import { getResearchers } from "@/components/services/firebaseService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const setting = {
  slidesPerView: 4,
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
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
  navigation: {
    nextEl: ".team-nxt",
    prevEl: ".team-prv",
  },
};

const Team = () => {
  const [isLoop, setIsLoop] = useState(false);
  const [researchers, setResearchers] = useState([]);

  useEffect(() => {
    setIsLoop(true);

    const fetchResearchers = async () => {
      try {
        const data = await getResearchers();
        setResearchers(data);
      } catch (error) {
        console.error("Error fetching researchers:", error);
      }
    };

    fetchResearchers();
  }, []);

  return (
    <>
      <section className="team-area pb-55">
        <div className="container">
          <div className="p-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title left-line right-line mb-25">
                    Nuestro Equipo
                  </span>
                  <h3 className="tp-section__title mb-70">
                    Conoce a los investigadores
                  </h3>
                </div>
              </div>
            </div>
            <Swiper
              {...setting}
              modules={[Navigation]}
              loop={isLoop}
              className="swiper-container tp-team-active wow fadeInUp"
              data-wow-delay=".3s"
            >
              {researchers.map((researcher) => (
                <SwiperSlide key={researcher.id}>
                  <div className="swiper-slide">
                    <div className="team-item mb-30">
                      <div className="team-item__thumb mb-40">
                        <img
                          src={
                            researcher.informacion_personal?.foto ||
                            "/assets/img/default-avatar.jpg"
                          }
                          alt={`Foto de ${researcher.informacion_personal?.nombre_completo}`}
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                      <div className="team-item__content">
                        <h5 className="team-item__title mb-15">
                          <Link href={`/team-details/${researcher.id}`}>
                            {researcher.informacion_personal?.nombre_completo}
                          </Link>
                        </h5>
                        <span>{researcher.nivel || "No title available"}</span>
                        <div className="team-item__social-info">
                          {researcher.redes_sociales_academicas?.facebook && (
                            <a
                              href={researcher.redes_sociales_academicas.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          )}
                          {researcher.redes_sociales_academicas?.twitter && (
                            <a
                              href={researcher.redes_sociales_academicas.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          )}
                          {/* Add more social links dynamically */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="team-arrow">
              <div className="team-prv">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="team-nxt">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
