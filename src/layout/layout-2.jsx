import React from "react";
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";
import Header from '@/layout/header/header';
const LayoutTwo = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterTwo />
    </>
  );
};

export default LayoutTwo;
