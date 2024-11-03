import React, { useState } from 'react';

// Estilos personalizados con CSS-in-JS
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
  trialItem: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    borderLeft: '5px solid #1a2e7b',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-2px)',
    },
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
    transition: 'all 0.3s ease-in-out',
    height: '48px',
    '&:hover': {
      whiteSpace: 'normal',
      overflow: 'visible',
      textOverflow: 'clip',
      height: 'auto',
      backgroundColor: '#14458b',
    },
  },
  descriptionBox: {
    marginTop: '10px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      WebkitLineClamp: 'unset',
    },
  },
  button: {
    marginTop: '15px',
    padding: '10px 15px',
    backgroundColor: '#1a2e7b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#14458b',
    },
  },
};

const ClinicalTrials = ({ trials = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOpenPopup = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=800,height=600');
  };

  const filteredTrials = trials.filter(trial =>
    trial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#1a2e7b', fontWeight: 'bold', marginBottom: '20px' }}>Estudios Clínicos</h2>

      <div style={styles.searchBox}>
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div style={styles.gridContainer}>
        {filteredTrials.length > 0 ? (
          filteredTrials.map((trial, index) => (
            <div
              key={index}
              style={styles.trialItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.cardItemHover?.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = styles.cardItemHover?.transform || 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Título del ensayo clínico */}
              <div style={styles.titleBox}>
                {trial.title}
              </div>

              {/* Descripción del ensayo clínico */}
              <div style={styles.descriptionBox}>
                {trial.initial_description}
              </div>

              {/* Botón para ver más detalles */}
              <button style={styles.button} onClick={() => handleOpenPopup(trial.url)}>
                Ver Caso de Estudio
              </button>
            </div>
          ))
        ) : (
          <p>No hay estudios clínicos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ClinicalTrials;
