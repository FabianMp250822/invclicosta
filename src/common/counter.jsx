import React from "react";
import { useTranslation } from "react-i18next";
import Count from "./count";

// Calcular los años de experiencia una sola vez
const currentYear = new Date().getFullYear();
const baseYear = 1989;
const years_of_service = currentYear - baseYear;

const Counter = ({ cls = "pt-40 pb-100" }) => {
  // Hook de traducción
  const { t } = useTranslation();

  // Obtenemos la lista de contadores desde la traducción
  // Para devolver un array u objeto completo, usamos `{ returnObjects: true }`.
  const counterList = t("counter.list", { returnObjects: true });

  return (
    <section className={`counter-area ${cls}`} aria-labelledby="counter-section">
      <div className="container">
        {/* Título principal para accesibilidad */}
        <h2 id="counter-section" className="visually-hidden">
          {t("counter.title")}
        </h2>

        <div className="row justify-content-center">
          {counterList.map((item) => {
            // Verificamos si este item se basa en "years_of_service"
            const displayedNumber = item.useYearsService
              ? years_of_service
              : item.counter;

            return (
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
                        <Count number={displayedNumber} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;
