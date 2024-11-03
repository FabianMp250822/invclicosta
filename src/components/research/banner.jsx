import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url("/assets/img/banner/breadcrumb-01.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "250px", // Ajusta la altura según sea necesario
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="tp-breadcrumb">
                <h1
                  className="tp-breadcrumb__title"
                  style={{
                    fontSize: "36px",
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                    width: "100%",
                  }}
                >
                  Centro de Innovación, Desarrollo e Inteligencia Artificial de
                  la Clínica de la Costa
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
