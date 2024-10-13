import Link from 'next/link';
import React from 'react';

const CartBanner = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="tp-breadcrumb text-center">
                <h2 className="tp-breadcrumb__title" style={{ fontSize: '3rem' }}>
                  Equipo de Investigadores
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartBanner;
