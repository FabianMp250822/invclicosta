import Sidebar from "@/common/sidebar";
import useSticky from "hooks/use-sticky";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu2 from "./nav-menu2";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
          sticky ? "header-sticky" : ""
        } `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <div className="tp-mob-logo">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <button onClick={() => setIsActive(true)} className="tp-menu-toggle">
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <header className="d-none d-xl-block">
        <div className={`header-custom ${sticky ? "header-sticky" : ""}`} id="header-sticky">
          <div className="container" style={{ maxWidth: "1360px" }}>
            <div className="d-flex align-items-center">
              {/* Logo Section */}
              <div className="header-logo-box me-3" style={{ paddingRight: "30px" }}>
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
              
              {/* Menu Section */}
              <div className="flex-grow-1">
                <nav className="main-menu main-menu-second d-flex justify-content-center">
                  <NavMenu2 isSticky={sticky} />
                </nav>
              </div>

              {/* Contact Button */}
              <div className="ms-auto">
                <Link className="header-bottom-btn" href="/about">
                  Solicitar Cita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default HeaderTwo;
