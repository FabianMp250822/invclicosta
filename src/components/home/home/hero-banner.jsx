import Link from "next/link";
import { useState } from "react";
import VideoPopup from "@/modals/video-popup";

// Paleta de colores principal
const colors = {
  primary: "#0D92F4", // Azul fuerte
  secondary: "#77CDFF", // Azul claro
  accent: "#F95454", // Rojo claro
  darkAccent: "#C62E2E", // Rojo oscuro (granate)
  white: "#FFFFFF",
  background: "#0c1841", // Fondo oscuro
};

// Contenido específico para el centro de investigación
const content = {
  sub_title: "Pasión por la investigación e innovación Clínica",
  title: (
    <>
      líder en investigación clínica en Colombia <br />
    </>
  ),
  des: (
    <ul style={{ color: colors.white, paddingLeft: "20px", listStyleType: "disc" }}>
      <li>
        Más de 20 años de experiencia en investigación clínica.
      </li>
      <li>
        Certificaciones de buenas prácticas clínicas desde 2011 e ISO 9001:2015.
      </li>
      <li>
        Cuatro sedes exclusivas para investigación con más de 300 camas.
      </li>
      <li>
        Laboratorios de alta complejidad y tecnología avanzada.
      </li>
      <li>
        Más de 100 ensayos clínicos realizados en áreas como vacunas, cardiología y nefrología.
      </li>
    
    </ul>
  ),
  btn_text1: "Programar Consulta",
  btn_text2: "Descubrir Nuestro Trabajo",
};


const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box con ítems que destacan los valores y fortalezas del centro
const hero_box = [
  {
    id: 1,
    icon: "flaticon-science",
    des: "Pioneros en Investigación Clínica",
    color: colors.primary,
  },
  {
    id: 2,
    icon: "flaticon-certificate",
    des: "Más de 100 ensayos clínicos",
    color: colors.accent,
  },
  {
    id: 3,
    icon: "flaticon-teamwork",
    des: "Colaboración con Líderes Globales",
    color: colors.secondary,
  },
];

const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="banner-area p-relative pt-90"
        style={{ backgroundColor: colors.background }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner__content pt-145 mb-135">
                <span
                  className="banner__sub-title mb-20 text-3xl font-bold"
                  style={{ color: colors.white }}
                >
                  {sub_title}
                </span>
                <h2
                  className="banner__title mb-30"
                  style={{ color: colors.white }}
                >
                  {title}
                </h2>
                {/* Nuevo formato como lista */}
                <div>{des}</div>
                <div className="banner__btn mt-4">
                  <Link
                    className="tp-btn"
                    href="/contact"
                    style={{
                      color: colors.white,
                      backgroundColor: colors.primary,
                    }}
                  >
                    {btn_text1}
                  </Link>
                  <Link
                    className="tp-btn-second ml-25"
                    href="/about"
                    style={{
                      color: colors.white,
                      backgroundColor: colors.accent,
                    }}
                  >
                    {btn_text2}
                  </Link>
                </div>
              </div>
              <div className="banner__box-item">
                <div className="row">
                  {hero_box.map((item) => (
                    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                      <div
                        className="banner__item d-flex align-items-center mb-30 wow fadeInUp"
                        data-wow-delay=".2s"
                        style={{
                          borderColor: item.color,
                          color: colors.white,
                        }}
                      >
                        <div
                          className="banner__item-icon"
                          style={{ color: item.color }}
                        >
                          <i className={item.icon}></i>
                        </div>
                        <div className="banner__item-content">
                          <span style={{ color: colors.white }}>{item.des}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bannerscroll d-none d-xl-block">
          <div className="banner-scroll-btn">
            <a
              className="bannerscroll-icon"
              href="#tp-about-scroll"
              style={{ color: colors.white }}
            >
              <i
                className="fa-light fa-computer-mouse"
                style={{ color: colors.white }}
              ></i>
              <span>Desplazar hacia abajo</span>
            </a>
          </div>
        </div>
        <div className="banner__shape d-none d-lg-block">
          <img
            src="/assets/img/about/banner_pioneros.jpg"
            alt="banner-img"
            style={{ width: "100%" }}
          />
          <div className="banner__video-btn">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="banner__video-icon popup-video"
              style={{ color: colors.white }}
            >
              <i
                className="fa-solid fa-play"
                style={{ color: colors.white }}
              ></i>
            </button>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroBanner;

