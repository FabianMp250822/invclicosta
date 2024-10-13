import React from 'react';

// Estilos personalizados para el modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '700px',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    zIndex: 1001,
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
  },
  fullTitle: {
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
  },
  description: {
    marginBottom: '20px',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
  },
};

const InfoModalGoogle = ({ open, handleClose, info }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div style={modalStyles.overlay} onClick={handleClose}></div>

      {/* Modal content */}
      <div style={modalStyles.modalContainer}>
        {/* Close button */}
        <button style={modalStyles.closeButton} onClick={handleClose}>
          &times;
        </button>

        {/* Title with hover effect */}
        <div
          style={{
            ...modalStyles.title,
            ...(isHovered ? modalStyles.fullTitle : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {info.title}
        </div>

        {/* Description */}
        <div style={modalStyles.description}>{info.description}</div>

        {/* Download button */}
        {info.download_url && (
          <a
            href={info.download_url}
            target="_blank"
            rel="noopener noreferrer"
            style={modalStyles.button}
          >
            Ver artículo
          </a>
        )}
      </div>
    </>
  );
};

export default InfoModalGoogle;
