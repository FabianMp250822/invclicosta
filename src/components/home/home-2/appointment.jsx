import React from "react";

const Appointment = () => {
  return (
    <>
      <section
        className="appoinment-area grey-bg mb-50 tp-box-space ml-30 mr-30"
        style={{ backgroundImage: `url("/assets/img/shape/shape-bg-08.png")` }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="appoint-thumb">
                <img
                  src="/assets/img/banner/appoinment-02.png"
                  alt="appoinment-img"
                />
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="visitor-info visitor-info-bg">
                <h4 className="appoinment-title mb-25">
                  <i className="fa-light fa-file-signature"></i>Reserva tu visita
                </h4>
                <div className="visitor-form">
                  <form action="#">
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
                          <input
                            type="text"
                            placeholder="Área de Investigación"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="visitor-form__input">
                          <input type="date" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="visitor-form__input">
                          <textarea
                            placeholder="Escribe tu mensaje"
                            name="message"
                          ></textarea>
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
                            <a href="tel:+576053369940">
                              +57 605 336 9999 Ext. 0
                              <i className="fa-regular fa-arrow-right"></i>
                            </a>
                          </span>
                        </div>
                        <div className="visit-serial mt-10">
                          <span>
                            Información del Centro de Investigación:
                            <a href="mailto:infoestudiosclinicos@clinicadelacosta.co">
                              infoestudiosclinicos@clinicadelacosta.co
                              <i className="fa-regular fa-arrow-right"></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
