import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import menu_data from "./menu-data.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const NavMenu = ({ num = false, isSticky }) => {
  const { t } = useTranslation();

  return (
    // Damos estilos al <ul> para que muestre todo en la misma línea
    <ul
      style={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {menu_data.map((menu, index) => (
        <li
          key={menu.id}
          // Un poco de margen entre items si quieres separarlos
          style={{
            marginRight: "1rem",
            position: "relative", // por si tienes submenús con posición absoluta
          }}
          className={menu.has_dropdown ? "has-dropdown" : ""}
        >
          <Link href={menu.link} legacyBehavior passHref>
            <a
              className={menu?.active}
              target={menu.target || "_self"}
              rel={menu.target === "_blank" ? "noopener noreferrer" : ""}
              style={{ color: isSticky ? "#000000" : "#FFFFFF" }}
            >
              {num && index <= 9
                ? `0${index + 1}. `
                : num
                ? `${index + 1}. `
                : ""}
              {t(menu.title)}
            </a>
          </Link>
          {/* Submenús (dropdown) */}
          {menu.has_dropdown && menu.sub_menus?.length > 0 && (
            <ul className="sub-menu">
              {menu.sub_menus.map((sub_m, i) => (
                <li key={i}>
                  <Link href={sub_m.link} legacyBehavior passHref>
                    <a
                      target={sub_m.target || "_self"}
                      rel={
                        sub_m.target === "_blank" ? "noopener noreferrer" : ""
                      }
                      style={{ color: isSticky ? "#000000" : "#FFFFFF" }}
                    >
                      {t(sub_m.title)}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}

      {/* Finalmente, el selector de idioma al final del menú */}
      <li style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
        <LanguageSwitcher />
      </li>
    </ul>
  );
};

export default NavMenu;
