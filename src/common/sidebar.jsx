import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Link from 'next/link';
import React, { useState } from "react";

const images = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  }
];

const Sidebar = ({ isActive, setIsActive }) => {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img);

  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""}`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <img src="/assets/img/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>
      
        <div className="tpsideinfo__content mb-60">
          <p className=" d-none d-xl-block">
            Nuestra misión es consolidar un espacio de innovación tecnológica en salud, donde la inteligencia artificial juegue un rol clave en la creación de soluciones que mejoren la atención médica.
          </p>
          <span>Contáctanos</span>
          <a href="mailto:infoestudiosclinicos@clinicadelacosta.co">
            <i className="fa-solid fa-star"></i> infoestudiosclinicos@clinicadelacosta.co
          </a>
          <a href="tel:+576053369999">
            <i className="fa-solid fa-star"></i> +57 605 3369999 
          </a>
          <a href="mailto:juridica@clinicadelacosta.co">
            <i className="fa-solid fa-star"></i> juridica@clinicadelacosta.co
          </a>
        </div>
        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Obtén Actualizaciones</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form action="#">
              <input type="email" placeholder="Introduce tu correo" />
              <button className="tpsideinfo__content-inputarea-input-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Publicaciones en Instagram</span>
          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(i)}
                className="popup-image"
              >
                <img src={item.img} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="tpsideinfo__socialicon">
          <a href="https://www.facebook.com/clinicadelacostabq">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/clinicadelacost">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCnQ9QHC43hg-kV8hNtwZ1Bg">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-skype"></i>
          </a>
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;
