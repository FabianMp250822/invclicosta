// HeaderDesktop.js
import Link from "next/link";
import React from "react";
import NavMenu from "./nav-menu";
import useSticky from "hooks/use-sticky";

const HeaderDesktop = () => {
  const { sticky } = useSticky();

  return (
    <header className={`d-none d-xl-block ${sticky ? "header-sticky" : ""}`}>
      <div
        className={`header__area tp-home-one ${sticky ? "header-sticky" : ""}`}
        id="header-sticky"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xxl-2 col-lg-3">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Menú principal */}
            <div className="col-xxl-7 col-lg-6">
              <div className="main-menu">
                <nav id="desktop-menu">
                  <NavMenu isSticky={sticky} /> 
                </nav>
              </div>
            </div>

            {/* Botón (Solicitar Cita) */}
            <div className="col-xxl-3 col-lg-3 d-flex align-items-center justify-content-end">
              <div className="ms-auto">
                <Link className="header-bottom-btn" href="/about">
                  Solicitar Cita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
