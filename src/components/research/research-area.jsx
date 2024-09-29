import research_data from "@/data/research-data";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "react-modal";
import cideaccData from "@/data/cideacc.json";

// Configuración del modal
Modal.setAppElement("#__next");

const ResearchArea = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedResearch, setSelectedResearch] = useState(null);

  // Función para abrir el modal y establecer los datos del artículo seleccionado
  const openModal = (id) => {
    const research = cideaccData.find((item) => item.id === id);
    setSelectedResearch(research);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedResearch(null);
  };

  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            {research_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`research-item ${item.color} mb-50 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src={item.img} alt="research-thumb" />
                  </div>
                  <div className="research-item__content">
                    <span>{item.category}</span>
                    <h4 className="research-item__title mb-20">
                      <Link href="/services-details">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <button
                      className="research-item__btn"
                      onClick={() => openModal(item.id)}
                    >
                      Leer más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles de Investigación"
        className="research-modal"
        overlayClassName="research-modal-overlay"
      >
        {selectedResearch && (
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedResearch.title}</h2>
            <h4>{selectedResearch.subtitle}</h4>
            <img
              src={selectedResearch.img}
              alt={`Imagen de ${selectedResearch.title}`}
              className="modal-img"
            />
            <div className="modal-body">
              <h3>{selectedResearch.content.section_1_title}</h3>
              <p>{selectedResearch.content.section_1_text}</p>
              <h3>{selectedResearch.content.section_2_title}</h3>
              <p>{selectedResearch.content.section_2_text}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Estilos del Modal */}
      <style jsx global>{`
        .research-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .research-modal {
          background: #fff;
          padding: 20px;
          width: 80%;
          max-width: 800px;
          border-radius: 10px;
          position: relative;
        }
        .modal-content {
          text-align: left;
        }
        .close-modal {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .modal-img {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
        }
        .modal-body h3 {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default ResearchArea;
