import React, { useState } from 'react';
import VideoPopup from '@/modals/video-popup';

const ProjectDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const sections = [
    {
      id: 1,
      title: 'Comité de Ética en Investigación',
      content: (
        <>
          <p>
            El <strong>Comité de Ética en Investigación (CEI)</strong> es una organización independiente cuya misión es revisar los principios éticos y metodológicos de los estudios clínicos y garantizar el cumplimiento de las normativas:
          </p>
          <ul>
            <li>Resolución 8430 de 1993</li>
            <li>Resolución 2378 de 2008</li>
            <li>Guías de Obligatorio cumplimiento del INVIMA</li>
            <li>Estándares propios del CEI</li>
            <li>Declaración de Helsinki</li>
            <li>Normas Internacionales de Buena Práctica Clínica</li>
          </ul>
          <a href="#" className="tp-btn-link">Conoce más</a>
        </>
      ),
      img: 'assets/img/about/parte1.jpg',
      alt: 'comite-etica',
    },
    {
      id: 2,
      title: 'Fases de Investigación',
      content: (
        <>
          <ul>
            <li>Fase I</li>
            <li>Fase IIA</li>
            <li>Fase IIB</li>
            <li>Fase IIIA</li>
            <li>Fase IIIB</li>
            <li>Fase IV (con intervención)</li>
            <li>Estudios observacionales</li>
            <li>Dispositivos Médicos</li>
            <li>Proyectos de investigación de pregrado y posgrado</li>
            <li>Investigaciones propias de la IPS Clínica de la Costa S.A.S.</li>
          </ul>
          <h5 className="card-subtitle mt-4">¿Qué tipo de investigaciones evaluamos?</h5>
          <p>
            El Comité de Ética en Investigación evalúa estudios clínicos de todas las fases, estudios observacionales, y más. También colaboramos con la Universidad Simón Bolívar en investigaciones académicas.
          </p>
        </>
      ),
      img: 'assets/img/about/parte2.jpg',
      alt: 'fases-clinicas',
    },
    {
      id: 3,
      title: 'Principios y Marco Ético',
      content: (
        <>
          <p>
            Nos acogemos a principios éticos internacionales, entre ellos:
          </p>
          <ul>
            <li>Código de Ética de Núremberg (1946)</li>
            <li>Declaración de Helsinki (2013)</li>
            <li>Informe Belmont (1976-79)</li>
            <li>Pautas éticas del CIOMS (2017)</li>
            <li>Organización Mundial de la Salud (OMS)</li>
          </ul>
        </>
      ),
      img: 'assets/img/about/parte3.jpg',
      alt: 'principios-eticos',
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

          {/* Imagen del Video del Comité */}
          
        </div>

        {/* Popup de Video */}
        <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={"d8w5SICzzxc"}
        />
      </section>

      {/* Estilos del Componente */}
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
