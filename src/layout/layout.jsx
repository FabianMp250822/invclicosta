import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
// 1. Importa Script de next/script
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      {/* 2. Agrega el script de gtag.js con la estrategia afterInteractive */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WWY830C85E"
        strategy="afterInteractive"
      />
      {/* 3. Agrega el script de configuración de GA con el mismo strategy */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WWY830C85E');
        `}
      </Script>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
