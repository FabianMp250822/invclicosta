import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper";
import { getResearchers } from "@/components/services/firebaseService";

// Configuración del slider
const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
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
    nextEl: ".team-n",
    prevEl: ".team-p",
  },
};

const Team = () => {
  const [isLoop, setIsLoop] = useState(false);
  const [teamData, setTeamData] = useState([]);
  const [expandedBiography, setExpandedBiography] = useState({});

  useEffect(() => {
    setIsLoop(true);

    // Llama al servicio de Firebase para obtener los investigadores
    const fetchTeamData = async () => {
      try {
        const data = await getResearchers();
        console.log("Datos de investigadores obtenidos:", data);

        // Ordenar los datos
        const sortedData = data.sort((a, b) => {
          // Priorizar Gustavo, Andrés y Alberto
          const nombresPrioritarios = [
            "Gustavo Aroca Martínez",
            "Andres Angelo Cadena Bonfanti",
            "Alberto Jose Cadena Bonfanti",
          ];

          // Si alguno de los dos es Gustavo, Andrés o Alberto, mover al principio
          if (nombresPrioritarios.includes(a.informacion_personal?.nombre_completo)) {
            return -1; // Estos deben estar al principio
          }
          if (nombresPrioritarios.includes(b.informacion_personal?.nombre_completo)) {
            return 1;
          }

          // Ordenar por nivel de investigador
          const levelsOrder = {
            "Investigador Senior": 1,
            "Investigador Asociado": 2,
            "Sub Investigador": 3,
          };

          const nivelA = levelsOrder[a.nivel] || 4; // Si el nivel no está definido, dar una prioridad baja
          const nivelB = levelsOrder[b.nivel] || 4;

          return nivelA - nivelB; // Ordenar de menor a mayor según el nivel
        });

        setTeamData(sortedData); // Actualiza el estado con los datos ordenados
      } catch (error) {
        console.error("Error al obtener los investigadores: ", error);
      }
    };

    fetchTeamData();
  }, []);

  const toggleBiography = (id) => {
    setExpandedBiography((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="team-area grey-bg pt-120 pb-80"
      style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="tp-section">
              <span className="tp-section__sub-title left-line mb-25">
                Nuestro Equipo
              </span>
              <h3 className="tp-section__title mb-75">
                Conoce a Nuestros Especialistas
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="tp-team-arrow d-flex align-items-center">
              <div className="team-p">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="team-n">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-container team-active wow fadeInUp"
          data-wow-delay=".3s"
        >
          <Swiper {...setting} loop={isLoop} modules={[Navigation]}>
            {teamData.length > 0 ? (
              teamData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div
                      className="tp-team mb-50"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div
                        className="tp-team__thumb fix"
                        style={{
                          width: "100%",
                          height: "300px",
                          overflow: "hidden",
                        }}
                      >
                        <Link href={`/team-details/${item.id}`}>
                          <img
                            src={
                              item.informacion_personal?.foto ||
                              "/assets/img/default-avatar.jpg"
                            }
                            alt="team-thumb"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="tp-team__content" style={{ flexGrow: 1 }}>
                        <h4 className="tp-team__title mb-15">
                          <Link href={`/team-details/${item.id}`}>
                            {item.informacion_personal?.nombre_completo}
                          </Link>
                        </h4>
                        <span className="tp-team__position mb-30">
                          {item.nivel || "Nivel Desconocido"}
                        </span>
                        <p>
                          {expandedBiography[item.id]
                            ? item.biografia?.texto
                            : `${item.biografia?.texto?.substring(0, 150)}...`}
                        </p>
                        <button
                          className="tp-btn-link"
                          onClick={() => toggleBiography(item.id)}
                        >
                          {expandedBiography[item.id] ? "Leer menos" : "Leer más"}
                        </button>
                        <div className="tp-team__social">
                          <Link href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>Cargando equipo...</p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
