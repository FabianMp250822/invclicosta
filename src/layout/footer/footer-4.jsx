import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>NO DUDES EN CONTACTARNOS</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:+576053369999">+57 605 336 9999</a>
                      </h4>
                      <a href="mailto:info@clinicadelacosta.co">
                        info@clinicadelacosta.co
                      </a>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-5">
                        Carreras
                      </span>
                      <p>
                        Envíe su hoja de vida a{" "}
                        <a href="mailto:seleccion@clinicadelacosta.co">
                          seleccion@clinicadelacosta.co
                        </a>{" "}
                        si está interesado en trabajar con nosotros.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Enlaces útiles
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/contacto">Contáctanos</Link>
                        </li>
                        <li>
                          <Link href="/about">Sobre nosotros</Link>
                        </li>
                        <li>
                          <Link href="/servicios">Servicios</Link>
                        </li>
                        <li>
                          <Link href="/privacidad">Política de privacidad</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Horarios de atención
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>Lunes a Viernes: 8AM - 6PM</li>
                          <li>Sábado: 8AM - 12PM</li>
                          <li>Domingo: Cerrado</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Servicio al Cliente
                    </span>
                    <div className="tp-footer-widget__links">
                      <ul>
                        <li>
                          <a href="#">Órdenes</a>
                        </li>
                        <li>
                          <a href="#">Direcciones</a>
                        </li>
                        <li>
                          <a href="#">Soporte</a>
                        </li>
                        <li>
                          <a href="#">Política de privacidad</a>
                        </li>
                        <li>
                          <a href="#">Términos y condiciones</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Información de Contacto
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>
                          Carrera 50 #80-209, Barranquilla, Colombia
                        </li>
                        <li>
                          <a href="tel:+576053369940">+57 605 336 9940</a>
                        </li>
                        <li>
                          <a href="mailto:infoestudiosclinicos@clinicadelacosta.co">
                            infoestudiosclinicos@clinicadelacosta.co
                          </a>
                        </li>
                        <li>Horario: 9AM - 4PM</li>
                        <li>Sábado y Domingo: Cerrado</li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="https://www.facebook.com/clinicadelacosta">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/clinicadelacosta">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                      © {new Date().getFullYear()}{" "}
                      <a href="https://clinicadelacosta.co">Clínica de la Costa</a>.{" "}
                      <i>Todos los derechos reservados.</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#">Términos y condiciones</a>
                      </li>
                      <li>
                        <a href="#">Política de privacidad</a>
                      </li>
                      <li>
                        <a href="#">Precios</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
