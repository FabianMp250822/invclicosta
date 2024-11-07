import React from "react";
import Count from "./count";

// Obtener el año actual
const currentYear = new Date().getFullYear();
const baseYear = 1989;
const years_of_service = currentYear - baseYear;

const counter_text = [
  { id: 2, color: "#007bff", counter: 60, text: "Estudios activos" },
  { id: 3, color: "#007bff", counter: 150, text: "Estudios realizados" },
  { id: 4, color: "#007bff", counter: 15, text: "Áreas terapéuticas" },
  { id: 5, color: "#007bff", counter: years_of_service, text: "Años de experiencia" },
  { id: 6, color: "#007bff", counter: 5000, text: "Visitas anuales completadas" },

];

const Counter = ({ cls = "pt-40 pb-100" }) => {
  return (
    <section className={`counter-area ${cls}`} aria-labelledby="counter-section">
      <div className="container">
        <h2 id="counter-section" className="visually-hidden">
          Estadísticas del Centro de Investigación
        </h2>
        <div className="row justify-content-center">
          {counter_text.map((item) => (
            <div
              key={item.id}
              className="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                margin: "10px",
                textAlign: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div>
                <div
                  className="counter__icon"
                  style={{
                    fontSize: "24px",
                    color: item.color,
                    marginBottom: "10px",
                  }}
                >
                  <i></i>
                </div>
                <div className="counter__content">
                  <h3
                    className="counter__title"
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#1a1a1a",
                      margin: "0",
                    }}
                  >
                    <span className="counter">
                      <Count number={item.counter} />
                    </span>
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#666666",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
