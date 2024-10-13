import React, { useState } from 'react';
import VideoPopup from '@/modals/video-popup';

const ProjectDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const sections = [
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
      title: 'Innovación en Fases de Investigación Clínica',
      content: (
        <>
          <ul>
            <li>Fase I: Ensayos de seguridad</li>
            <li>Fase II: Evaluación de eficacia preliminar</li>
            <li>Fase III: Estudios a gran escala</li>
            <li>Fase IV: Monitorización post-comercialización</li>
            <li>Estudios observacionales y dispositivos médicos</li>
            <li>Proyectos de investigación académica (pregrado y posgrado)</li>
          </ul>
          <h5 className="card-subtitle mt-4">¿Qué investigaciones respaldamos?</h5>
          <p>
            Respaldamos investigaciones de todas las fases, colaborando estrechamente con instituciones académicas como la Universidad Simón Bolívar y apoyando proyectos dentro de la IPS Clínica de la Costa S.A.S.
          </p>
        </>
      ),
      img: 'assets/img/about/parte2.jpg',
      alt: 'Fases de Investigación Clínica',
    },
    {
      id: 3,
      title: 'Adopción de Principios Éticos Internacionales',
      content: (
        <>
          <p>
            Nos guiamos por códigos éticos reconocidos globalmente, lo que asegura que cada proyecto cumpla con los estándares internacionales:
          </p>
          <ul>
            <li>Código de Núremberg (1946)</li>
            <li>Declaración de Helsinki (2013)</li>
            <li>Informe Belmont (1979)</li>
            <li>Pautas éticas del CIOMS (2017)</li>
            <li>Organización Mundial de la Salud (OMS)</li>
          </ul>
          <p>
            Estos principios garantizan que cada decisión se tome con integridad y en beneficio de los pacientes.
          </p>
        </>
      ),
      img: 'assets/img/about/parte3.jpg',
      alt: 'Principios Éticos en Investigación',
    }
  ];

  return (
    <>
      <section className="ethics-committee-area pt-125 pb-35">
        <div className="container">
          {sections.map((section, index) => (
            <div className="row mb-40" key={section.id}>
              <div className="col-lg-12">
                <div
                  className={`card-horizontal d-flex ${
                    index % 2 === 0 ? 'flex-lg-row' : 'flex-lg-row-reverse'
                  } flex-column mb-60 wow fadeInUp`}
                  data-wow-delay=".2s"
                >
                  <div className="card-img">
                    <img src={section.img} alt={section.alt} className="img-fluid" />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title">{section.title}</h5>
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="video-card mb-60">
            <img
              src="assets/img/about/video-thumbnail.jpg"
              alt="Comité de Ética en Acción"
              className="img-fluid"
            />
            <button
              className="play-btn"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Reproducir video del Comité de Ética"
            >
              ▶
            </button>
          </div>
        </div>

        {/* <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId="d8w5SICzzxc"
        /> */}
      </section>

      <style jsx>{`
        .card-horizontal {
          display: flex;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-horizontal:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        .card-img {
          flex: 1;
          min-width: 300px;
        }
        .card-body {
          flex: 2;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          color: #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        .play-btn:hover {
          background: #e64a19;
        }
      `}</style>
    </>
  );
};

export default ProjectDetailsArea;
