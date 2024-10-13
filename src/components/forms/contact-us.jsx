import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="contactform__list mb-60">
        <form onSubmit={(e) => e.preventDefault()} id="contact-form" method="post">
          <div className="row">
            {/* Campo Nombre */}
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <label htmlFor="name" className="visually-hidden">Nombre Completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  aria-label="Nombre Completo"
                  required
                />
              </div>
            </div>

            {/* Campo Correo Electrónico */}
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <label htmlFor="email" className="visually-hidden">Correo Electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  aria-label="Correo Electrónico"
                  required
                />
              </div>
            </div>

            {/* Campo Número de Teléfono */}
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <label htmlFor="number" className="visually-hidden">Número de Teléfono</label>
                <input
                  id="number"
                  name="number"
                  type="tel"
                  placeholder="Ingrese su número de teléfono"
                  aria-label="Número de Teléfono"
                  pattern="[0-9]{10}" // Validación para un número de 10 dígitos
                  required
                />
              </div>
            </div>

            {/* Campo Sitio Web */}
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <label htmlFor="website" className="visually-hidden">Sitio Web</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="Ingrese su sitio web (opcional)"
                  aria-label="Sitio Web"
                />
              </div>
            </div>

            {/* Campo Mensaje */}
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <label htmlFor="message" className="visually-hidden">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Escriba su mensaje o comentario"
                  aria-label="Mensaje"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>

            {/* Botón Enviar */}
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button type="submit" className="tp-btn" aria-label="Enviar Mensaje">
                  Enviar Mensaje
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
