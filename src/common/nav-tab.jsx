import React from "react";

// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Generar Propuesta",
    des: (
      <>
        Trabajamos con un enfoque en la excelencia <br /> y la seguridad en cada
        proceso.
      </>
    )
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Iniciar Pruebas",
    des: (
      <>
        Nos comprometemos a realizar investigaciones <br /> basadas en
        conocimiento e innovación.
      </>
    )
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Entrega de Reportes",
    des: (
      <>
        Nuestros informes reflejan resultados precisos <br /> y cumpliendo con
        los más altos estándares.
      </>
    )
  }
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        El compromiso con la excelencia y seguridad en nuestras investigaciones
        es fundamental para nosotros. <br />
        Fomentamos el desarrollo continuo de la docencia y la investigación.
      </>
    ),
    title: "Nuestra Misión",
    des_1: (
      <>
        Trabajamos con el corazón comprometidos a la excelencia y seguridad en
        lo que hacemos, fomentando el desarrollo continuo de la docencia y la
        investigación.
      </>
    ),
    des_2: (
      <>
        Nos aseguramos de que todos nuestros procesos sean rigurosos, enfocados
        en garantizar la calidad y seguridad en cada etapa.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-03.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" }
    ]
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
        Nuestra visión es ser una institución líder en la prestación de
        servicios de salud avanzada. <br />
        Nos enfocamos en la atención integral de nuestros usuarios a través del
        conocimiento y la innovación.
      </>
    ),
    title: "Nuestra Visión",
    des_1: (
      <>
        Siempre ser una institución líder en la prestación de servicios de salud
        más avanzados y reconocidos por los más altos estándares de calidad
        disponibles a nivel mundial.
      </>
    ),
    des_2: (
      <>
        Enfocamos nuestra atención integral en nuestros usuarios, utilizando el
        conocimiento y la innovación como pilares fundamentales de nuestra
        labor.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" }
    ]
  }
];

const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Nuestro Proceso
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Nuestra Misión
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Nuestros Valores
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                Somos su laboratorio integral para ensayos clínicos. Nuestro proceso garantiza la generación de <br /> resultados precisos y confiables.
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="forma" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
