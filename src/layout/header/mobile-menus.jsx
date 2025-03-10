// Dentro de MobileMenus.jsx
import Link from "next/link";
import React, { useState } from "react";
import menu_data from "./menu-data";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  const { t } = useTranslation();

  const openMobileMenu = (menu) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.has_dropdown && menu.sub_menus?.length > 0 ? (
              <li className="has-dropdown">
                <Link href={menu.link} legacyBehavior passHref>
                  <a 
                    target={menu.title === "CIDEACC" ? "_blank" : "_self"}
                    rel={menu.title === "CIDEACC" ? "noopener noreferrer" : ""}
                  >
                    {t(menu.title)}
                  </a>
                </Link>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menus.map((sub, j) => (
                    <li key={j}>
                      <Link href={sub.link} legacyBehavior passHref>
                        <a 
                          target={sub.target ? sub.target : "_self"}
                          rel={sub.target === "_blank" ? "noopener noreferrer" : ""}
                        >
                          {t(sub.title)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            ) : (
              <li>
                <Link href={menu.link} legacyBehavior passHref>
                  <a 
                    target={menu.title === "CIDEACC" ? "_blank" : "_self"}
                    rel={menu.title === "CIDEACC" ? "noopener noreferrer" : ""}
                  >
                    {t(menu.title)}
                  </a>
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
        {/* Nuevo elemento de menú para las banderas */}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenus;
