// HeaderMobile.js
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/common/sidebar";

const HeaderMobile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="d-block d-xl-none header-mobile-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo móvil */}
          <div className="col-6">
            <div className="logo">
              <Link href="/">
                <img src="/assets/img/logo/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          {/* Botón hamburguesa */}
          <div className="col-6 d-flex justify-content-end">
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsActive(!isActive)}
            >
              <i className="fa fa-bars" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar que se despliega */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
};

export default HeaderMobile;
