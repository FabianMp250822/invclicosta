import Link from 'next/link';
import React from 'react';

const FaqBanner = () => {
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
                <h2 className="tp-breadcrumb__title">FAQ</h2>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      </>
    );
};

export default FaqBanner;