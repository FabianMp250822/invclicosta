import React from 'react';

// Estilos personalizados para el modal
const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '800px',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '20px',
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'center',
  },
  modalText: {
    fontSize: '1rem',
    lineHeight: '1.5',
  },
};

const InfoModal = ({ open, handleClose, info }) => {
  if (!open) return null; // Si el modal no está abierto, no se renderiza

  const handleOpenPdf = () => {
    if (info.pdfUrl) {
      window.open(info.pdfUrl, 'pdfWindow', 'width=800,height=600');
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        {/* Botón de cerrar */}
        <button onClick={handleClose} style={styles.closeButton}>
          &times;
        </button>

        {/* Contenido del modal */}
        <div>
          <h2 style={styles.modalTitle}>{info.title || 'Sin título'}</h2>
          <p style={styles.modalText}>{info.summary || 'Sin resumen disponible'}</p>

          {/* Botón para abrir el PDF si está disponible */}
          {info.pdfUrl ? (
            <button style={styles.button} onClick={handleOpenPdf}>
              Consultar Artículo
            </button>
          ) : (
            <button style={{ ...styles.button, ...styles.buttonDisabled }} disabled>
              No hay PDF disponible
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
