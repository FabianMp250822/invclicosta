import Link from "next/link";
import React, { useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");

  // Abrir/Cerrar menú móvil
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              {menu.has_dropdown && menu.sub_menus?.length > 0 ? (
                <li className="has-dropdown">
                  <Link href={menu.link} target={menu.target ? menu.target : "_self"}>
                    {menu.title}
                  </Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menu.title ? "block" : "none",
                    }}
                  >
                    {menu.sub_menus.map((sub, i) => (
                      <li key={i}>
                        <Link href={sub.link} target={sub.target ? sub.target : "_self"}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              ) : (
                <li>
                  <Link href={menu.link} target={menu.target ? menu.target : "_self"}>
                    {menu.title}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
