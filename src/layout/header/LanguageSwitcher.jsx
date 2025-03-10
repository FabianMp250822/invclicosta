import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px", // Ajusta el espacio entre banderas a tu gusto
        padding: 0, 
        margin: 0
      }}
      className="language-switcher"
    >
      <ReactCountryFlag
        countryCode="GB"
        svg
        style={{
          width: "2em",
          height: "2em",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
        }}
        title="English"
        onClick={() => changeLanguage("en")}
      />

      <ReactCountryFlag
        countryCode="ES"
        svg
        style={{
          width: "2em",
          height: "2em",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
        }}
        title="Español"
        onClick={() => changeLanguage("es")}
      />
    </div>
  );
};

export default LanguageSwitcher;
