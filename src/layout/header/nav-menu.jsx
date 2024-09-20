import Link from "next/link.js";
import React from "react";
import menu_data from "./menu-data.js";

const NavMenu = ({num=false}) => {
  return (
    <>
      <ul>
        {menu_data.map((menu, index) => (
          <li key={menu.id} className={menu.has_dropdown ? "has-dropdown" : ""}>
            <Link className={`${menu?.active}`} href={menu.link}>
              {num && index <= 9
                ? `0${index + 1 + "."}`
                : num && index + 1 + "."}
              {menu.title}
            </Link>
            {menu.has_dropdown && menu.sub_menus?.length > 0 && (
              <ul className="sub-menu">
                {menu.sub_menus.map((sub_m, i) => (
                  <li key={i}>
                    <Link href={sub_m.link}>{sub_m.title}</Link>
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
