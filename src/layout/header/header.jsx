// Header.js
import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <>
      {/* Header para escritorio */}
      <HeaderDesktop />

      {/* Header para móvil */}
      <HeaderMobile />
    </>
  );
};

export default Header;
