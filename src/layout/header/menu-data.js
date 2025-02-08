const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Inicio",
    link: "/",
    active: "active",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Sobre el centro",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/project-details", title: "Comité de Ética" },
      { link: "/service-3", title: "Estudios" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "CIDEACC",
    link: "https://cideacc.org/",
    active: "",
    target: "_blank",
  },
  {
    id: 10,
    mega_menu: false,
    has_dropdown: false,
    title: "Investigadores",
    link: "/equipo",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Invclincosta",
    link: "/",
    active: "",
    sub_menus: [
      { link: "https://saimclinico.com/Saim_Inv/", title: "SAIM Investigación", target: "_blank" },
      { link: "https://saimclinico.com/Saim_Inv/", title: "SAIM Monitores", target: "_blank" },
      { link: "https://dmsclinicadelacosta.ngrok.io/", title: "Gestión Documental", target: "_blank" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Nefrología",
    link: "/nefrologia",
    active: "",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Noticias",
    link: "/blog",
    active: "",
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contactos",
    link: "/contact",
    active: "",
  },

];

export default menu_data;
