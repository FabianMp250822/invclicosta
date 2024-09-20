import Link from "next/link";
import React from "react";

const Banner = ({ researcherName }) => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url("/assets/img/banner/breadcrumb-01.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "250px",  // Ajustamos la altura del banner
          display: "flex",
          justifyContent: "flex-start",  // Alineamos el contenido a la izquierda
          alignItems: "center",  // Alineación vertical
          paddingLeft: "5%",  // Dejamos un margen desde el borde izquierdo
          width: "100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-breadcrumb">
                <h2
                  className="tp-breadcrumb__title"
                  style={{
                    fontSize: "48px",  // Hacemos el texto más grande para ocupar más espacio
                    fontWeight: "600",  // Un peso de fuente ligeramente menor
                    textAlign: "left",  // Alineamos el texto a la izquierda
                    marginBottom: "0",  // Eliminamos el margen inferior
                    color: "#fff",  // Color blanco para que destaque sobre el fondo
                    textTransform: "uppercase",  // Texto en mayúsculas para destacar
                    letterSpacing: "1px",  // Espaciado entre letras
                  }}
                >
                  Investigador: {researcherName || "Nombre no disponible"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
