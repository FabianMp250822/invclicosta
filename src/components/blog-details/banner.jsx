// components/blog-details/banner.jsx
import Link from "next/link";
import React from "react";

const Banner = ({ title }) => {
  return (
    <section
      className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
      style={{
        backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Columna izquierda */}
          <div className="col-xl-6 col-lg-7 col-md-7 col-12">
            <div className="tp-breadcrumb">
              <h2 className="tp-breadcrumb__title">{title}</h2>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-xl-6 col-lg-5 col-md-5 col-12">
            <div className="tp-breadcrumb__link d-flex align-items-center">
              <span>
                Clínica de la costa :{" "}
                <Link href="/blog">Blog</Link>
                {/* Cambia /blog por la ruta que quieras */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
