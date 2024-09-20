import React from "react";

const Cta_Area = () => {
  return (
    <>
      <section className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cta-bg clinic-theme-bg pt-65 pb-70"
                style={{
                  backgroundImage: `url("/assets/img/shape/shape-bg-03.png")`,
                }}
              >
                <div className="cta-content ml-90">
                  <h2 className="cta-title mb-35">
                    Innovación al servicio de la salud
                    <br /> en nuestro Centro de Investigación
                  </h2>
                  <a href="tel:+9159008855" className="tp-cta-btn">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="white" />
                      <circle cx="7" cy="2" r="2" fill="white" />
                      <circle cx="12" cy="2" r="2" fill="white" />
                      <circle cx="12" cy="7" r="2" fill="white" />
                      <circle cx="12" cy="12" r="2" fill="white" />
                      <circle cx="7" cy="7" r="2" fill="white" />
                      <circle cx="7" cy="12" r="2" fill="white" />
                      <circle cx="7" cy="17" r="2" fill="white" />
                      <circle cx="2" cy="7" r="2" fill="white" />
                      <circle cx="2" cy="12" r="2" fill="white" />
                    </svg>
                    <span>LLAMA :</span> +57 605 336 9999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .cta-area {
            margin-top: 10px;
          }

          .clinic-theme-bg {
            background-color: #f0f4f8;
            background-size: cover;
            border-radius: 10px;
            position: relative;
          }

          .cta-content {
            color: #000; /* Letra negra */
            font-family: "Arial", sans-serif;
            position: relative;
            z-index: 2;
          }

          .cta-title {
            font-size: 28px;
            line-height: 1.4;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para mejorar la legibilidad */
          }

          .tp-cta-btn {
            display: inline-flex;
            align-items: center;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .tp-cta-btn svg {
            margin-right: 10px;
          }

          .tp-cta-btn:hover {
            background-color: #0056b3;
          }
        `}</style>
      </section>
    </>
  );
};

export default Cta_Area;
