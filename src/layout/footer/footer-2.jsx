import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Enlaces útiles",
      cls: "footer-col-2",
      links: [
        { name: "Contáctanos", link: "/contacto" },
        { name: "Sobre nosotros", link: "/about" },
        { name: "Servicios", link: "/servicios" },
        { name: "Política de privacidad", link: "/privacidad" },
      ],
    },
    {
      id: 2,
      title: "Información de contacto",
      cls: "footer-col-3",
      links: [
        { name: "Carrera 50 #80-209, Barranquilla, Colombia" },
        { name: "+57 605 336 9940 Ext. 0" },
        { name: "+57 605 356 3156" },
        { name: "investigación@clinicadelacosta.co" },
        { name: "Horario de oficina: 8AM - 6PM" },
      ],
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> Clinica de Costa / Fabian Muñoz Puello & Leidy Vega Anaya </Link>. <i>Todos los derechos reservados</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <Link href="/">
                      <Image
                        src="/assets/img/logo/logo.png"
                        alt="logo"
                        width={100}
                        height={50}
                      />
                    </Link>
                  </h4>
                  <p>
                    Somos un referente en la atención médica en Barranquilla,
                    comprometidos con la excelencia en salud y la investigación
                    clínica.
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_info.map((item) => (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-md-6"
                >
                  <div
                    className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">
                      {item.title}
                    </h4>
                    <div className="footer-widget__links">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            {link.link ? (
                              <Link href={`${link.link}`}>
                                {link.name}
                              </Link>
                            ) : (
                              link.name
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-4 mb-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="footer-widget__title mb-20">
                    Suscríbete al Boletín
                  </h4>
                  <p>
                    Recibe las últimas noticias y actualizaciones sobre
                    nuestros servicios y estudios clínicos.
                  </p>
                  <div className="footer-widget__newsletter p-relative">
                    <form action="#">
                      <input type="email" placeholder="Ingresa tu correo" />
                      <button className="footer-widget__fw-news-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 text-center text-lg-start">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 text-center text-lg-end">
                <div className="d-flex justify-content-center justify-content-lg-end align-items-center">
                  <div className="footer-vigilado-logo me-3">
                    <Link
                      href="https://www.supersalud.gov.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/img/logo/supersalud.svg"
                        alt="Vigilado Supersalud"
                        width={200}
                        height={50}
                      />
                    </Link>
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

export default FooterTwo;

