import React, { useState, useEffect } from 'react';
import { FaSearch, FaUniversity, FaClipboardCheck, FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import InfoModal from './modal.jsx';  // Manteniendo el modal

// Estilos personalizados
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  searchBox: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid #ddd',
    padding: '8px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    flexGrow: 1,
    padding: '8px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '15px',
  },
  cardItem: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardItemHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
  },
  titleBox: {
    backgroundColor: '#1a2e7b',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  titleBoxHover: {
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoImage: {
    height: '45px',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginTop: '10px',
    objectFit: 'contain',
  },
};

const TrabajosDirigidosTutorias = ({ trabajosDirigidos, searchTerm, handleSearchChange }) => {
  const [logos, setLogos] = useState([]);
  const [pdfLinks, setPdfLinks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: '', summary: '', pdfUrl: '', pdfLink: '' });

  useEffect(() => {
    // Obtener logos desde public/assets/logos.json
    const fetchLogos = async () => {
      try {
        const res = await fetch('/assets/logos.json');
        const data = await res.json();
        setLogos(data);
      } catch (error) {
        console.error('Error al cargar los logos:', error);
      }
    };

    // Obtener pdfLinks desde public/assets/pdfLinks.json
    const fetchPdfLinks = async () => {
      try {
        const res = await fetch('/assets/pdfLinks.json');
        const data = await res.json();
        setPdfLinks(data);
      } catch (error) {
        console.error('Error al cargar los pdfLinks:', error);
      }
    };

    fetchLogos();
    fetchPdfLinks();
  }, []);

  const handleOpenModal = (info) => {
    setModalInfo(info);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Ordenar los trabajos por fecha
  const sortedWorks = [...trabajosDirigidos].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  // Filtrar los trabajos por el término de búsqueda
  const filteredWorks = sortedWorks.filter((work) =>
    work.titulo?.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  const getInstitutionData = (name) => {
    const institution = logos.universities?.find((uni) => uni.name.toLowerCase() === name.toLowerCase()) ||
      logos.hospitals?.find((hospital) => hospital.name.toLowerCase() === name.toLowerCase());
    return institution;
  };

  const getPdfUrl = (title) => {
    const event = pdfLinks.events?.find(event => event.name.toLowerCase() === title.toLowerCase());
    return event ? event.pdfUrl : '';
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#1a2e7b', fontWeight: 'bold', marginBottom: '20px' }}>Trabajos Dirigidos y Tutorías</h2>

      {/* Input de búsqueda */}
      <div style={styles.searchBox}>
        <FaSearch style={{ marginRight: '8px', color: '#888' }} />
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredWorks.length > 0 ? (
        <div style={styles.gridContainer}>
          {filteredWorks.map((work, index) => {
            // Check if all required fields are empty or invalid
            const isEmpty = !work.titulo && !work.institucion && !work.estado && !work.especialidad && !work.fecha && !work.rol && work.orientados.length === 0 && work.tutores.length === 0;
            if (isEmpty) return null;

            const institutionData = getInstitutionData(work.institucion);
            const pdfUrl = getPdfUrl(work.titulo);

            const handleClick = () => {
              handleOpenModal({
                title: work.titulo,
                summary: `${work.institucion}, ${work.estado}, ${work.especialidad}, ${new Date(work.fecha).toLocaleDateString()}, ${work.rol}, ${work.orientados.join(', ')}, ${work.tutores.join(', ')}`,
                pdfUrl: pdfUrl,
                pdfLink: pdfUrl,
              });
            };

            return (
              <div
                key={index}
                style={styles.cardItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = styles.cardItemHover.boxShadow;
                  e.currentTarget.style.transform = styles.cardItemHover.transform;
                  const titleElement = e.currentTarget.querySelector('.titleBox');
                  titleElement.style.whiteSpace = styles.titleBoxHover.whiteSpace;
                  titleElement.style.overflow = styles.titleBoxHover.overflow;
                  titleElement.style.textOverflow = styles.titleBoxHover.textOverflow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'none';
                  const titleElement = e.currentTarget.querySelector('.titleBox');
                  titleElement.style.whiteSpace = styles.titleBox.whiteSpace;
                  titleElement.style.overflow = styles.titleBox.overflow;
                  titleElement.style.textOverflow = styles.titleBox.textOverflow;
                }}
                onClick={handleClick}
              >
                {/* Título */}
                <div className="titleBox" style={styles.titleBox}>
                  {work.titulo ? work.titulo.charAt(0).toUpperCase() + work.titulo.slice(1).toLowerCase() : 'No disponible'}
                </div>

                {/* Contenido de la tarjeta */}
                <p style={{ marginTop: '10px' }}>
                  <FaUniversity style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Institución:</strong> {work.institucion || 'No disponible'}
                </p>
                <p>
                  <FaClipboardCheck style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Estado:</strong> {work.estado || 'No disponible'}
                </p>
                <p>
                  <FaUserMd style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Especialidad:</strong> {work.especialidad || 'No disponible'}
                </p>
                <p>
                  <FaCalendarAlt style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Fecha:</strong> {work.fecha ? new Date(work.fecha).toLocaleDateString() : 'No disponible'}
                </p>

                {/* Footer con logo e información adicional */}
                <div style={styles.footer}>
                  {institutionData && (
                    <a href={institutionData.url} target="_blank" rel="noopener noreferrer">
                      <img src={institutionData.logo} alt={work.institucion} style={styles.logoImage} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No hay datos disponibles.</p>
      )}

      {/* Modal para mostrar más detalles */}
      <InfoModal open={modalOpen} handleClose={handleCloseModal} info={modalInfo} />
    </div>
  );
};

export default TrabajosDirigidosTutorias;
