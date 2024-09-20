import React, { useState } from 'react';
import VideoPopup from '@/modals/video-popup';

const ProjectDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="ethics-committee-area pt-125 pb-35">
        <div className="container">
          {/* Sección Comité de Ética */}
          <div className="row mb-40">
            <div className="col-lg-6 col-md-6">
              <div
                className="tpoverview mb-60 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Comité de Ética en Investigación</h5>
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
                <p>
                  <a href="#" className="tp-btn-link">Conoce más</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpviewtext mb-60 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <img
                  src="https://picsum.photos/600/400"
                  alt="comite-objetivo"
                  className="mb-20"
                />
                <h5 className="tpproject-title mb-30">Nuestro Objetivo</h5>
                <p className="tpviewtext__para">
                  Evaluar los riesgos y beneficios de la investigación clínica, fomentando la ética e integridad inherente al ser humano conforme a los principios y valores constitucionales y legales.
                </p>
              </div>
            </div>
          </div>

          {/* Sección de Fases Clínicas */}
          <div className="row mb-40">
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Fases de Investigación</h5>
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
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="tpprosolution pb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="https://picsum.photos/600/400"
                  alt="fases-clinicas"
                  className="mb-20"
                />
                <h5 className="tpproject-title mb-30">¿Qué tipo de investigaciones evaluamos?</h5>
                <p>
                  El Comité de Ética en Investigación evalúa estudios clínicos de todas las fases, estudios observacionales, y más. También colaboramos con la Universidad Simón Bolívar en investigaciones académicas.
                </p>
              </div>
            </div>
          </div>

          {/* Principios Éticos */}
          <div className="row mb-40">
            <div className="col-lg-12 col-md-12">
              <div
                className="tpprosolution mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h5 className="tpproject-title mb-50">Principios y Marco Ético</h5>
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
              </div>
            </div>
          </div>

          {/* Imagen del Video del Comité */}
          <div className="row">
            <div className="col-md-12">
              <div
                className="tpprovideo p-relative mb-115 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <img
                  src="https://picsum.photos/1200/600"
                  alt="comite-video"
                  className="mb-20"
                />
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="play-btn popup-video"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popup de Video */}
        <VideoPopup
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoId={"d8w5SICzzxc"}
        />
      </section>
    </>
  );
};

export default ProjectDetailsArea;
