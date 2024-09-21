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
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "CIDEACC",
    link: "/research",
    active: "",
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Service",
  //   link: "/service-3",
  //   active: "",
  //   sub_menus: [
  //     { link: "/project-details", title: "Comité de Ética" },
  //     { link: "/service-3", title: "Estudios" },
     
  //   ],
  // },
  {
    id: 10,
    mega_menu: false,
    has_dropdown: false,
    title: "Equipo",
    link: "/equipo",
    active: "",
  },
  {
    id: 8,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Equipo Invclincosta",
    link: "/",
    active: "",
    sub_menus: [
      { link: "https://saimclinico.com/Saim_Inv/", title: "SAIM Investigación", target: "_blank" },
      { link: "https://saimclinico.com/Saim_Inv/", title: "SAIM Monitores", target: "_blank" },
      { link: "https://dmsclinicadelacosta.ngrok.io/", title: "Gestión Documental", target: "_blank" },
    ],
  },
  {
    id: 9,
    mega_menu: false,
    has_dropdown: false,
    title: "FAQ",
    link: "/faq",
    active: "",
  },
  // {
  //   id: 6,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Clínica de la Costa",
  //   link: "http://clinicadelacosta.co/",
  //   active: "",
  //   target: "_blank",
  // },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Nosotros",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/project-details", title: "Comité de Ética" },
      { link: "/service-3", title: "Estudios" },
     
    ],
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contactos",
    link: "/contact",
    active: "",
  },
  
  // New "FAQ" menu
  
  // New "Equipo" menu
  
];

export default menu_data;
