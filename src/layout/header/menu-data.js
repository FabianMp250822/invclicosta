const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "menu.home",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "menu.about",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/project-details", title: "menu.ethics_committee" },
      { link: "/service-3", title: "menu.studies" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "menu.cideacc",
    link: "https://cideacc.org/",
    active: "",
    target: "_blank",
  },
  {
    id: 10,
    mega_menu: false,
    has_dropdown: false,
    title: "menu.researchers",
    link: "/equipo",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "menu.invclincosta",
    link: "/",
    active: "",
    sub_menus: [
      { link: "https://saimclinico.com/Saim_Inv/", title: "menu.saim_research", target: "_blank" },
      { link: "https://saimclinico.com/Saim_Inv/", title: "menu.saim_monitors", target: "_blank" },
      { link: "https://dmsclinicadelacosta.ngrok.io/", title: "menu.document_management", target: "_blank" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "menu.nephrology",
    link: "/nefrologia",
    active: "",
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "menu.blog",
    link: "/blog",
    active: "",
  },
  {
    id: 8,
    mega_menu: false,
    has_dropdown: false,
    title: "menu.contact",
    link: "/contact",
    active: "",
  }
];

export default menu_data;
