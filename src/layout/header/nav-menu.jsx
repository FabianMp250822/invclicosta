import Link from "next/link.js";
import React from "react";
import menu_data from "./menu-data.js";

const NavMenu = ({ num = false }) => {
  return (
    <>
      <ul>
        {menu_data.map((menu, index) => (
          <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
            <Link href={menu.link} legacyBehavior passHref>
              <a 
                className={`${menu?.active}`} 
                target={menu.title === "CIDEACC" ? "_blank" : "_self"}
                rel={menu.title === "CIDEACC" ? "noopener noreferrer" : ""}
              >
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </a>
            </Link>
            {menu.has_dropdown && menu.sub_menus?.length > 0 && (
              <ul className="sub-menu">
                {menu.sub_menus.map((sub_m, i) => (
                  <li key={i}>
                    <Link href={sub_m.link} legacyBehavior passHref>
                      <a 
                        target={sub_m.target ? sub_m.target : "_self"}
                        rel={sub_m.target === "_blank" ? "noopener noreferrer" : ""}
                      >
                        {sub_m.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
