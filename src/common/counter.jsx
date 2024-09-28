import React from "react";
import Count from "./count";

// Obtener el año actual
const currentYear = new Date().getFullYear();
// Año base de servicio
const baseYear = 1989;
// Calcular los años de servicio dinámicamente
const years_of_service = currentYear - baseYear;

// counter_text actualizado
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 10000,
    text: "Pacientes atendidos",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 46,
    text: "Investigadores especializados",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: years_of_service,
    text: "Años de servicio",
  },
  {
    id: 4,
    color: "green-hard",
    counter: 30,
    text: "Premios y reconocimientos",
  },
];

const Counter = ({ cls = "pt-40 pb-100" }) => {
  return (
    <>
      <section className={`counter-area ${cls}`} aria-labelledby="counter-section">
        <div className="container">
          <h2 id="counter-section" className="visually-hidden">
            Estadísticas del Centro de Investigación
          </h2>
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                  aria-label={`Contador de ${item.text}`}
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h3 className="counter__title" aria-label={`${item.counter} ${item.text}`}>
                      <span className="counter">
                        <Count number={item.counter} />
                      </span>
                    </h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
