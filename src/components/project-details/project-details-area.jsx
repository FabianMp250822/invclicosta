import React, { useState } from 'react';
import VideoPopup from '@/modals/video-popup';

const ProjectDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const blogSections = [
    {
      id: 1,
      title: 'Compromiso con la Ética en la Investigación Clínica',
      content: (
        <>
          <p>
            El <strong>Comité de Ética en Investigación (CEI)</strong> trabaja bajo los más altos estándares éticos para asegurar la transparencia y el cumplimiento normativo en cada proyecto de investigación. Nuestra misión es proteger los derechos y el bienestar de los participantes en estudios clínicos mediante la evaluación rigurosa de protocolos según:
          </p>
          <ul>
            <li>Resolución 8430 de 1993 y 2378 de 2008</li>
            <li>Guías del INVIMA</li>
            <li>Declaración de Helsinki</li>
            <li>Normas Internacionales de Buena Práctica Clínica</li>
          </ul>
          <a href="#" className="tp-btn-link">Explora nuestros procesos éticos</a>
        </>
      ),
      img: 'assets/img/about/parte1.jpg',
      alt: 'Ética en Investigación Clínica',
    },
    {
      id: 2,
      title: 'Nuestro Objetivo',
      content: (
        <>
          <p>
            Evaluar los riesgos y beneficios de la investigación clínica, fomentando la ética y la integridad inherente al ser humano conforme a los principios y valores constitucionales y legales, salvaguardando los derechos de los participantes en la investigación.
          </p>
          <p>
            El Comité de Ética en Investigación evalúa los estudios clínicos en distintas fases, incluyendo observacionales y de dispositivos médicos, así como proyectos de investigación de universidades en convenio con la IPS Clínica de la Costa S.A.S.
          </p>
        </>
      ),
      img: 'assets/img/about/objetivo.png',
      alt: 'Objetivo del Comité de Ética',
    },
    {
      id: 3,
      title: 'Principios y Marco Ético',
      content: (
        <>
          <p>
            Nos guiamos por principios éticos reconocidos globalmente para llevar a cabo investigaciones con sujetos humanos, en cumplimiento de lineamientos nacionales e internacionales de:
          </p>
          <ul>
            <li>Código de Ética de Núremberg (1946)</li>
            <li>Declaración de Helsinki (2013)</li>
            <li>Informe Belmont (1976-79)</li>
            <li>Pautas éticas internacionales para la investigación biomédica (CIOMS, 2017)</li>
            <li>Organización Mundial de la Salud (OMS)</li>
          </ul>
          <p>
            Estos principios aseguran que cada investigación se realice con integridad y en beneficio de los pacientes.
          </p>
        </>
      ),
      img: 'assets/img/about/marco.jpeg',
      alt: 'Principios y Marco Ético',
    }
  ];

  const committeeMembers = [
    {
      name: "Yamileth Paola Bolívar Machacón",
      profession: "Químico Farmacéutico",
      postgrad: [
        "Especialista en Gerencia de la Calidad y Auditoria en Salud",
        "Especialista en Bioética",
      ],
      role: "Presidente",
    },
    {
      name: "María José Viera Contreras",
      profession: "Médico",
      postgrad: [
        "Especialista en Gerencia de la Salud",
        "Estudiante de medicina interna",
      ],
      role: "Presidente Suplente",
    },
    {
      name: "Shakira Morales Yanes",
      profession: "Psicóloga",
      postgrad: [],
      role: "Secretaria",
    },
    {
      name: "Gustavo Fernando Varón Suarez",
      profession: "Médico",
      postgrad: [
        "Estudiante de medicina interna",
      ],
      role: "Representante Científico",
    },
    {
      name: "Reina María Bawab Miguel",
      profession: "Bacterióloga",
      postgrad: ["Especialista en Gerencia Social"],
      role: "Representante Científico",
    },
    {
      name: "Alberto Carlos Espinosa Garavito",
      profession: "Químico Farmacéutico",
      postgrad: [
        "Especialista en estadística Aplicada",
        "Magíster en estadística Aplicada",
        "Doctor en Genética y Biología Molecular",
      ],
      role: "Representante Científico",
    },
    {
      name: "José Ignacio Guerrero Peña",
      profession: "Licenciado en educación básica",
      postgrad: [],
      role: "Representante No Científico",
    },
    {
      name: "Yesica Daniela Giraldo Ramírez",
      profession: "Abogada",
      postgrad: [],
      role: "Representante No Científico",
    },
    {
      name: "Hugo Alvarado Olaya",
      profession: "Abogado",
      postgrad: ["Especialista en Derecho Procesal"],
      role: "Representante No Científico",
    },
    {
      name: "Kelvin Fernando Navarro Quiroz",
      profession: "Tecnólogo en mantenimiento de equipo-biomédico",
      postgrad: [],
      role: "Representante No Científico",
    },
    {
      name: "Jhon Jairo Suarez Hincapié",
      profession: "Técnico en Mercadeo y Ventas",
      postgrad: [],
      role: "Miembro de la comunidad",
    },
    {
      name: "Ana Mariela De Moya Gutiérrez",
      profession: "Técnico en Asistencia Administrativa",
      postgrad: [],
      role: "Miembro de la comunidad",
    },
  ];
  

  return (
    <>
      <section className="blog-banner">
        <h1 className="text-center">CEI es una organización independiente que revisa los principios éticos y metodológicos de la investigación clínica.</h1>
       
      </section>

      <section className="blog-content container">
        {blogSections.map((section) => (
          <div className="blog-post mb-5" key={section.id}>
            <h2 className="blog-title">{section.title}</h2>
            <div className="row">
              <div className="col-md-6">
                <img src={section.img} alt={section.alt} className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="blog-content">
                  {section.content}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="video-card my-5">
          <img src="assets/img/about/comite.png" alt="Comité de Ética en Acción" className="img-fluid" />
          <button
            className="play-btn"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Reproducir video del Comité de Ética"
          >
            ▶
          </button>
        </div>

        <div className="committee-members mt-5">
          <h3 className="text-center mb-4">Miembros del Comité de Ética</h3>
          <div className="row">
            {committeeMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="member-card text-center p-4">
                  <h5>{member.name}</h5>
                  <p><strong>{member.role}</strong></p>
                  <p>{member.profession}</p>
                  {member.postgrad && member.postgrad.length > 0 && (
                    <div className="specialties">
                      {member.postgrad.map((specialty, idx) => (
                        <p key={idx} className="specialty-item"><em>{specialty}</em></p>
                      ))}
                    </div>
                  )}
                  {member.email && <p><a href={`mailto:${member.email}`}>{member.email}</a></p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="d8w5SICzzxc" />
      </section>

      <style jsx>{`
        .blog-banner {
          background: #f4f4f4;
          padding: 50px 0;
          text-align: center;
          margin-bottom: 40px;
        }
        .blog-post {
          padding: 20px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-bottom: 40px;
        }
        .blog-title {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }
        .video-card {
          position: relative;
          text-align: center;
        }
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #ff5722;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .committee-members {
          margin-top: 40px;
        }
        .member-card {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
        }
        .specialties {
          margin-top: 10px;
        }
        .specialty-item {
          font-size: 0.9rem;
          color: #666;
          margin: 2px 0;
        }
      `}</style>
    </>
  );
};

export default ProjectDetailsArea;
