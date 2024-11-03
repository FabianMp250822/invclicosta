import React, { useState, useEffect } from 'react';
import { FaSearch, FaCalendarAlt, FaLocationArrow, FaUniversity, FaUsers } from 'react-icons/fa';
import InfoModal from './modal'; // Modal para mostrar información detallada

// Estilos con CSS-in-JS
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

const EventosCientificos = ({ eventos, searchTerm = '', handleSearchChange }) => {
  const [logos, setLogos] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: '', summary: '', pdfUrl: '', pdfLink: '' });

  useEffect(() => {
    // Cargar logos.json desde la carpeta public/assets/
    const fetchLogos = async () => {
      try {
        const res = await fetch('/assets/logos.json');
        const data = await res.json();
        setLogos(data);
      } catch (error) {
        console.error('Error al cargar los logos:', error);
      }
    };
    fetchLogos();
  }, []);

  const handleOpenModal = (info) => {
    setModalInfo(info);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const sortedEventos = [...eventos].sort((a, b) => new Date(b.fecha_inicio) - new Date(a.fecha_inicio));

  const filteredEventos = sortedEventos.filter((evento) =>
    evento.nombre_evento?.toLowerCase().includes(searchTerm.toLowerCase() || '')
  );

  const getInstitutionData = (name) => {
    if (!logos || !name) return null;

    return (
      logos.universities?.find((uni) => uni.name.toLowerCase() === name.toLowerCase()) ||
      logos.hospitals?.find((hospital) => hospital.name.toLowerCase() === name.toLowerCase())
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#1a2e7b', fontWeight: 'bold', marginBottom: '20px' }}>Eventos Científicos</h2>

      {/* Input de búsqueda */}
      <div style={styles.searchBox}>
        <FaSearch style={{ marginRight: '8px', color: '#888' }} />
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Buscar por nombre de evento"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Grid de eventos */}
      {filteredEventos.length > 0 ? (
        <div style={styles.gridContainer}>
          {filteredEventos.map((evento, index) => {
            const isEmpty =
              !evento.nombre_evento &&
              !evento.tipo_evento &&
              !evento.ambito &&
              !evento.fecha_inicio &&
              !evento.fecha_fin &&
              !evento.lugar &&
              evento.instituciones_asociadas?.length === 0 &&
              evento.participantes?.length === 0;
            if (isEmpty) return null;

            const institutionData = getInstitutionData(evento.instituciones_asociadas?.[0]?.nombre_institucion);

            const handleClick = () => {
              handleOpenModal({
                title: evento.nombre_evento,
                summary: `${evento.tipo_evento || ''}, ${evento.ambito || ''}, ${
                  new Date(evento.fecha_inicio).toLocaleDateString() || ''
                } - ${new Date(evento.fecha_fin).toLocaleDateString() || ''}, ${
                  evento.lugar || ''
                }, ${evento.instituciones_asociadas
                  ?.map((inst) => inst.nombre_institucion)
                  .join(', ') || ''}, ${evento.participantes
                  ?.map((part) => part.nombre)
                  .join(', ') || ''}`,
                pdfUrl: evento.pdfUrl || '',
                pdfLink: evento.pdfLink || '',
              });
            };

            return (
              <div
                key={index}
                style={styles.cardItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = styles.cardItemHover.boxShadow;
                  e.currentTarget.style.transform = styles.cardItemHover.transform;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'none';
                }}
                onClick={handleClick}
              >
                {/* Título */}
                <div style={styles.titleBox}>
                  {evento.nombre_evento
                    ? evento.nombre_evento.charAt(0).toUpperCase() + evento.nombre_evento.slice(1).toLowerCase()
                    : 'No disponible'}
                </div>

                {/* Contenido de la tarjeta */}
                <p style={{ marginTop: '10px' }}>
                  <FaCalendarAlt style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Fecha de inicio:</strong> {evento.fecha_inicio ? new Date(evento.fecha_inicio).toLocaleDateString() : 'No disponible'}
                </p>
                <p>
                  <FaLocationArrow style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Lugar:</strong> {evento.lugar || 'No disponible'}
                </p>
                <p>
                  <FaUniversity style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Institución:</strong> {evento.instituciones_asociadas?.[0]?.nombre_institucion || 'No disponible'}
                </p>
                <p>
                  <FaUsers style={{ marginRight: '5px', color: '#555' }} />
                  <strong>Participantes:</strong> {evento.participantes?.map((part) => part.nombre).join(', ') || 'No disponible'}
                </p>

                {/* Footer con logo */}
                <div style={styles.footer}>
                  {institutionData && (
                    <a href={institutionData.url} target="_blank" rel="noopener noreferrer">
                      <img src={institutionData.logo} alt={evento.instituciones_asociadas?.[0]?.nombre_institucion} style={styles.logoImage} />
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

export default EventosCientificos;
