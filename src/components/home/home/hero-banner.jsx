import Link from "next/link";
import { useState } from "react";
// internal
import VideoPopup from "@/modals/video-popup";

// content
// content
const content = {
  sub_title: "Bienvenido al Centro de Investigación Clínica de la Costa",
  title: (
    <>
      Liderando el Camino <br />
      hacia la Innovación Médica
    </>
  ),
  des: (
    <>
      Somos su aliado en avances clínicos. Nuestra dedicación a la excelencia garantiza resultados precisos y confiables que impulsan el futuro de la medicina.
    </>
  ),
  btn_text1: "Programar Consulta",
  btn_text2: "Conócenos",
};

const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box
const hero_box = [
  {
    id: 1,
    icon: "flaticon-rating",
    des: "100% Satisfacción del Paciente",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-target",
    des: "Acceso y Ayuda es Nuestra Misión",
    color: "pink-icon",
    border: "pink-border",
  },
  {
    id: 3,
    icon: "flaticon-premium-badge",
    des: "Servicios de Laboratorio de Máxima Calidad",
    color: "green-icon",
    border: "green-border",
  },
];


const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="banner-area p-relative pt-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner__content pt-145 mb-135">
                <span className="banner__sub-title mb-20">{sub_title}</span>
                <h2 className="banner__title mb-30">{title}</h2>
                <p>{des}</p>
                <div className="banner__btn">
                  <Link className="tp-btn" href="/contact">
                    {btn_text1}
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about">
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
                          <i className={item.icon}></i>
                        </div>
                        <div className="banner__item-content">
                          <span>{item.des}</span>
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
            <a className="bannerscroll-icon" href="#tp-about-scroll">
              <i className="fa-light fa-computer-mouse"></i>
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
            >
              <i className="fa-solid fa-play"></i>
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
