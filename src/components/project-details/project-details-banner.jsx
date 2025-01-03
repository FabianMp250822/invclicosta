import Link from 'next/link';
import React from 'react';

const ProjectDetailsBanner = () => {
    return (
      <>
        <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url("/assets/img/banner/breadcrumb-01.jpg")`,
          maxWidth: "auto", 
          maxHeight: "200px",  // Establece un ancho máximo de 300px
          margin: "0 auto",   // Centra el contenedor horizontalmente
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Comite de Etica</h2>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-5 col-12">
              <div className="tp-breadcrumb__link d-flex align-items-center">
                <span>
                  Bioxlab : <Link href="/blog-details">Detalles del Blog</Link>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      </>
    );
};

export default ProjectDetailsBanner;