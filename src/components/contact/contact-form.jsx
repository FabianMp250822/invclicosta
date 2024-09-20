import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Importamos los íconos de react-icons
import ContactUs from "../forms/contact-us";

// Información de contacto de la Clínica de la Costa en Barranquilla
const contact_info = {
  address: (
    <>
      Cra. 50 #80-209, <br /> Barranquilla, Colombia
    </>
  ),
  phone_1: "(605) 3369999 Ext. 0",
  phone_2: "(605) 3563156",
  phone_3: "(605) 3369912",
  email_general: "info@clinicadelacosta.co",
  email_studies: "infoestudiosclinicos@clinicadelacosta.co",
  email_legal: "juridica@clinicadelacosta.co",
  open: (
    <>
      Lunes - Viernes <br />
      07:00 AM - 05:00 PM
    </>
  ),
  website: "www.clinicadelacosta.co",
};

const { address, phone_1, phone_2, phone_3, email_general, email_studies, email_legal, open, website } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              {/* Información de contacto */}
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay=".2s">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Dirección</h4>
                    <span>
                      <Link href="/contact">{address}</Link>
                    </span>
                  </div>
                </div>
              </div>

              {/* Teléfonos */}
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay=".4s">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Teléfonos</h4>
                    <span><a href={`tel:${phone_1}`}>{phone_1}</a></span>
                    <span><a href={`tel:${phone_2}`}>{phone_2}</a></span>
                    <span><a href={`tel:${phone_3}`}>{phone_3}</a></span>
                  </div>
                </div>
              </div>

              {/* Horario de atención */}
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay=".6s">
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Horario de Atención</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>

              {/* Correos electrónicos */}
              <div
className="tpcontact mr-60 mb-60 wow fadeInUp"
data-wow-delay=".8s"
>
<div className="tpcontact__item text-center">
<div className="tpcontact__icon mb-20">
<img
src="/assets/img/icon/email.svg"
alt="Email"
style={{ width: "40px", height: "40px" }}  
/>
</div>

  <div className="tpcontact__address">
    <h4 className="tpcontact__title mb-15">Correos Electrónicos</h4>
    <span>General: <a href={`mailto:${email_general}`}>{email_general}</a></span>
    <span>Estudios Clínicos: <a href={`mailto:${email_studies}`}>{email_studies}</a></span>
    <span>Notificaciones Jurídicas: <a href={`mailto:${email_legal}`}>{email_legal}</a></span>
  </div>
</div>
</div>

              {/* Sitio web */}
              <div className="tpcontact mr-60 mb-60 wow fadeInUp" data-wow-delay="1s">
                <div className="tpcontact__item text-center">
                  <h4 className="tpcontact__title mb-15">Sitio Web</h4>
                  <span><a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></span>
                </div>
              </div>
            </div>

            {/* Formulario y Mapa */}
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">Envíanos un mensaje:</h4>
                <ContactUs />

                {/* Mapa */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2688045013987!2d-74.826014!3d10.9876391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42f67adf77e73%3A0x8d7713be8b041f4b!2sCl%C3%ADnica%20de%20la%20Costa!5e0!3m2!1ses-419!2sco!4v1695123456789!5m2!1ses-419!2sco"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="social-links mt-4 text-center">
                  <h4 className="mb-3">Síguenos en nuestras redes:</h4>
                  <a href="https://www.facebook.com/invclicosta" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebookF size={30} />
                  </a>
                  <a href="https://www.instagram.com/invclicosta/" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
                    <FaInstagram size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;


