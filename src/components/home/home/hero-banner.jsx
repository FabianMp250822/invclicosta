import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
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

// Definición de items para el hero_box (se utilizarán las claves de traducción)
const hero_box = [
  {
    id: 1,
    icon: "flaticon-science",
    color: colors.primary,
  },
  {
    id: 2,
    icon: "flaticon-certificate",
    color: colors.accent,
  },
  {
    id: 3,
    icon: "flaticon-teamwork",
    color: colors.secondary,
  },
];

const HeroBanner = () => {
  const { t } = useTranslation();
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
                  {t("hero.sub_title")}
                </span>
                <h2
                  className="banner__title mb-30"
                  style={{ color: colors.white }}
                >
                  {t("hero.title")}
                </h2>
                {/* Lista de características */}
                <div>
                  <ul
                    style={{
                      color: colors.white,
                      paddingLeft: "20px",
                      listStyleType: "disc",
                    }}
                  >
                    <li>{t("hero.list.0")}</li>
                    <li>{t("hero.list.1")}</li>
                    <li>{t("hero.list.2")}</li>
                    <li>{t("hero.list.3")}</li>
                    <li>{t("hero.list.4")}</li>
                  </ul>
                </div>
                <div className="banner__btn mt-4">
                  <Link
                    className="tp-btn"
                    href="/contact"
                    style={{
                      color: colors.white,
                      backgroundColor: colors.primary,
                    }}
                  >
                    {t("hero.btn_text1")}
                  </Link>
                  <Link
                    className="tp-btn-second ml-25"
                    href="/about"
                    style={{
                      color: colors.white,
                      backgroundColor: colors.accent,
                    }}
                  >
                    {t("hero.btn_text2")}
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
                          <span style={{ color: colors.white }}>
                            {t(`hero.hero_box.item${item.id}`)}
                          </span>
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
              <span>{t("hero.scroll_text", "Desplazar hacia abajo")}</span>
            </a>
          </div>
        </div>
        <div className="banner__shape d-none d-lg-block">
          <img
            src="/assets/img/about/Recurso7.svg"
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
      {/* Video modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
    </>
  );
};

export default HeroBanner;
