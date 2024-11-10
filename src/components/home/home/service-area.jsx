import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

// Configuración del slider
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: { slidesPerView: 4 },
    992: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// Contenido del slider
const slider_content = [
  {
    id: 1,
    icon: "flaticon-vaccine",
    title: "Vacunas",
    des: "Desarrollamos vacunas efectivas para proteger su salud y prevenir enfermedades.",
  },
  {
    id: 2,
    icon: "flaticon-cardiology",
    title: "Cardiología",
    des: "Proporcionamos diagnósticos precisos y tratamientos innovadores para enfermedades del corazón.",
  },
  {
    id: 3,
    icon: "flaticon-rheumatology",
    title: "Reumatología",
    des: "Contamos con tratamientos especializados para el manejo de enfermedades reumáticas.",
  },
  {
    id: 4,
    icon: "flaticon-nephrology",
    title: "Nefrología",
    des: "Mejoramos su salud renal mediante terapias avanzadas y cuidados especializados.",
  },
  {
    id: 5,
    icon: "flaticon-oncology",
    title: "Oncología",
    des: "Ofrecemos tratamientos avanzados y personalizados para combatir el cáncer.",
  },
  {
    id: 6,
    icon: "flaticon-pulmonology",
    title: "Neumología",
    des: "Tratamientos efectivos para mejorar la salud de sus pulmones y vías respiratorias.",
  },
  {
    id: 7,
    icon: "flaticon-neurology",
    title: "Neurología",
    des: "Abordamos trastornos del sistema nervioso con terapias innovadoras y precisas.",
  },
  {
    id: 8,
    icon: "flaticon-endocrinology",
    title: "Endocrinología",
    des: "Brindamos atención integral para enfermedades hormonales y metabólicas.",
  },
  {
    id: 9,
    icon: "flaticon-pediatrics",
    title: "Pediatría",
    des: "Cuidamos la salud de sus hijos con investigaciones dedicadas al bienestar infantil.",
  },
  {
    id: 10,
    icon: "flaticon-immunology",
    title: "Inmunología",
    des: "Investigamos el sistema inmunológico para desarrollar tratamientos innovadores.",
  },
  {
    id: 11,
    icon: "flaticon-allergy",
    title: "Alergología",
    des: "Ofrecemos diagnósticos y tratamientos personalizados para controlar sus alergias.",
  },
  {
    id: 12,
    icon: "flaticon-internal-medicine",
    title: "Medicina Interna",
    des: "Abordamos una amplia gama de patologías con un enfoque integral y personalizado.",
  },
  {
    id: 13,
    icon: "flaticon-gastroenterology",
    title: "Gastroenterología",
    des: "Ofrecemos tratamientos avanzados para la salud digestiva y enfermedades gastrointestinales.",
  },
  {
    id: 14,
    icon: "flaticon-infectology",
    title: "Infectología",
    des: "Tratamos y prevenimos enfermedades infecciosas con terapias efectivas.",
  },
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  // Función para abrir el modal con SweetAlert2
  const handleReadMore = (item) => {
    Swal.fire({
      html: `
        <div style="text-align: left; padding: 20px;">
          <h2 style="color: #0D92F4; font-size: 28px; margin-bottom: 15px;">${item.title}</h2>
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            ${item.des}
          </p>
          <p style="color: #555; font-size: 15px; line-height: 1.6;">
            Este estudio se centra en las últimas investigaciones y avances en ${item.title}. Nuestro equipo de especialistas trabaja constantemente para ofrecer soluciones y tratamientos innovadores, con el objetivo de mejorar la calidad de vida de nuestros pacientes.
          </p>
          <p style="color: #555; font-size: 15px; line-height: 1.6;">
            Además, colaboramos con diversas organizaciones para asegurar que cada tratamiento y estudio cumpla con los más altos estándares de calidad y seguridad.
          </p>
        </div>
      `,
      showCloseButton: true,
      confirmButtonText: "Cerrar",
      confirmButtonColor: "#C62E2E",
      width: "70%",
      padding: "30px",
      background: "#FFFFFF",
    });
  };

  return (
    <>
      <section className="services-area pt-95 pb-90 grey-bg mt-60 fix">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20" style={{ color: "#77CDFF" }}>
                  Especialidades Médicas de Nuestro Centro de Investigación
                </span>
                <h3 className="tp-section__title" style={{ color: "#0D92F4" }}>
                  Descubre nuestras áreas de investigación dedicadas a mejorar la salud y el bienestar.
                </h3>
              </div>
            </div>
          </div>
          <div className="services-grid">
            {slider_content.map((item) => (
              <div key={item.id} className="services-item">
                <div
                  className="services-item__icon mb-30"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "30px",
                    color: "#C62E2E",
                  }}
                >
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="services-item__content">
                  <h4 className="services-item__tp-title mb-30">
                    <Link href="/services-details" style={{ color: "#0D92F4" }}>
                      {item.title}
                    </Link>
                  </h4>
                  <p style={{ color: "#333" }}>{item.des}</p>
                  <div className="services-item__btn">
                    <button
                      onClick={() => handleReadMore(item)}
                      className="btn-hexa"
                      style={{
                        backgroundColor: "#F95454",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Leer Más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .services-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 300px;
        }

        .services-item:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
        }

        .services-item__content h4,
        .services-item__content p {
          text-align: center;
        }

        .services-item__icon {
          font-size: 48px;
          margin-bottom: 15px;
          color: #C62E2E;
        }
      `}</style>
    </>
  );
};

export default ServiceArea;
