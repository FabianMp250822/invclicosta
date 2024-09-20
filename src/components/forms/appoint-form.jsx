import React from "react";

const AppointForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="row">
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Tu nombre" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="email" placeholder="Tu correo" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Área de Investigación" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="dd / mm / yyyy" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea placeholder="Escribe tu mensaje" name="message"></textarea>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="visit-btn mt-20">
            <button className="tp-btn">Reservar Ahora</button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className="visit-serial mt-45">
            <span>
              Servicio de Emergencia 24/7 :
              <a href="tel:+576053369999">
                +576053369999
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </span>
          </div>
          
        </div>
      </div>
    </form>
  );
};

export default AppointForm;
