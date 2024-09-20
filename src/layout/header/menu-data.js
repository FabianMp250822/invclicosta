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
    title: "Nosotros",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Service",
    link: "/service-3",
    active: "",
    sub_menus: [
      { link: "/project-details", title: "Comité de Ética" },
      { link: "/service-3", title: "Estudios" },
     
      { link: "/service-details", title: "Service Details" },
    ],
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Research",
  //   link: "/research",
  //   active: "",
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Equipo Invclincosta",  // Menu from the image
    link: "/", // External URL
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
    title: "Clínica de la Costa",  // Another menu from the image
    link: "http://clinicadelacosta.co/",  // External URL
    active: "",
    target: "_blank", // Opens in a new window
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contactos",
    link: "/contact",
    active: "",
  },
  {
    id: 5,
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


];
export default menu_data;
