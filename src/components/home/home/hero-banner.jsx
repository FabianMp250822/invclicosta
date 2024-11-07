import Link from "next/link";
import { useState } from "react";
import VideoPopup from "@/modals/video-popup";

// Contenido específico para el centro de investigación
const content = {
  sub_title: "Pasión por  la investigación  e imnovacón Clínica",
  title: (
    <>
      líder en investigación clínica en Colombia <br />
     
    </>
  ),
  des: (
    <>
    Con más de 20 años de experiencia y certificaciones de buenas prácticas clínicas desde 2011 e ISO 9001:2015. Con un equipo dedicado, altos estándares de calidad, y tecnología avanzada, cuenta con cuatro sedes exclusivas para investigación, más de 300 camas y laboratorios de alta complejidad. Ha realizado más de 100 ensayos clínicos, destacándose en vacunas, cardiología y nefrología. Comprometidos con el avance científico para el beneficio de la sociedad.
    </>
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
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-certificate",
    des: "Más de 100 ensayos clínicos",
    color: "pink-icon",
    border: "pink-border",
  },
  {
    id: 3,
    icon: "flaticon-teamwork",
    des: "Colaboración con Líderes Globales",
    color: "green-icon",
    border: "green-border",
  },
];

const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="banner-area p-relative pt-90"
        style={{ backgroundColor: "#0c1841" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner__content pt-145 mb-135">
                <span className="banner__sub-title mb-20 text-3xl font-bold" style={{ color: "#FFFFFF" }}>
                  {sub_title}
                </span>
                <h2 className="banner__title mb-30" style={{ color: "#FFFFFF" }}>{title}</h2>
                <p style={{ color: "#FFFFFF" }}>{des}</p>
                <div className="banner__btn">
                  <Link className="tp-btn" href="/contact" style={{ color: "#FFFFFF" }}>
                    {btn_text1}
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about" style={{ color: "#FFFFFF" }}>
                    {btn_text2}
                  </Link>
                </div>
              </div>
              <div className="banner__box-item">
                <div className="row">
                  {hero_box.map((item) => (
                    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                      <div
                        className={`banner__item d-flex ${item.border} align-items-center mb-30 wow fadeInUp`}
                        data-wow-delay=".2s"
                      >
                        <div className={`banner__item-icon ${item.color}`}>
                          <i className={item.icon} style={{ color: "#FFFFFF" }}></i>
                        </div>
                        <div className="banner__item-content">
                          <span style={{ color: "#FFFFFF" }}>{item.des}</span>
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
            <a className="bannerscroll-icon" href="#tp-about-scroll" style={{ color: "#FFFFFF" }}>
              <i className="fa-light fa-computer-mouse" style={{ color: "#FFFFFF" }}></i>
              <span>Desplazar hacia abajo</span>
            </a>
          </div>
        </div>
        <div className="banner__shape d-none d-lg-block">
          <img src="/assets/img/about/banner_pioneros.jpg" alt="banner-img" />
          <div className="banner__video-btn">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="banner__video-icon popup-video"
              style={{ color: "#FFFFFF" }}
            >
              <i className="fa-solid fa-play" style={{ color: "#FFFFFF" }}></i>
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
