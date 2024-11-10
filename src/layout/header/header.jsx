import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import useSticky from "hooks/use-sticky";
import Sidebar from "@/common/sidebar";

const Header = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className={`d-none d-xl-block ${sticky ? "header-sticky" : ""}`}>
        <div
          className={`header__area tp-home-one ${
            sticky ? "header-sticky" : ""
          }`}
          id="header-sticky"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-lg-3">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-lg-6">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <NavMenu isSticky={sticky} /> {/* Pasar prop isSticky */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-3 d-flex align-items-center justify-content-end">
                {/* Botón de contacto o elementos adicionales */}
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

export default Header;
