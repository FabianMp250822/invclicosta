import React, { useState } from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';

// Estilos personalizados reutilizados de ProfessionalExperience
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
  recognitionItem: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', // Para que todas las tarjetas tengan la misma altura
  },
  recognitionItemHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    color: '#1a2e7b', // Color similar al de la imagen
    fontFamily: 'Arial, sans-serif', // Fuente más legible y profesional
    fontSize: '18px', // Tamaño de texto ajustado
  },
  linkMore: {
    color: '#007bff', // Estilo de enlace similar al botón
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    alignSelf: 'flex-end', // Alinear el enlace a la derecha
    marginTop: 'auto', // Empujar el enlace hacia el final
  },
  linkMoreHover: {
    color: '#0056b3',
  },
  dateText: {
    fontSize: '14px',
    color: '#333', // Texto neutral
    marginBottom: '10px',
    fontWeight: 'bold', // Negrilla en la fecha
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between', // Distribuir "fecha" a la izquierda y "Ver más" a la derecha
    alignItems: 'center',
    marginTop: 'auto', // Asegurar que el footer esté en la parte inferior de la tarjeta
  },
};

const formatTitle = (title) => {
  return title.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
};

const Recognitions = ({ recognitions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecognitions = recognitions
    .filter((recognition) =>
      recognition.nombre_reconocimiento.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)); // Ordenar por fecha, más reciente primero

  return (
    <div style={styles.container}>
      <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#1a2e7b', fontWeight: 'bold' }}>Reconocimientos</h2>

      {/* Search Box */}
      <div style={styles.searchBox}>
        <FaSearch style={{ marginRight: '8px', color: '#888' }} />
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Buscar por nombre de reconocimiento"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Grid de reconocimientos */}
      {filteredRecognitions.length > 0 ? (
        <div style={styles.gridContainer}>
          {filteredRecognitions.map((recognition, index) => (
            <div
              key={index}
              style={styles.recognitionItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.recognitionItemHover.boxShadow;
                e.currentTarget.style.transform = styles.recognitionItemHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={styles.titleBox}>
                <FaStar style={{ marginRight: '8px' }} />
                <h3>{formatTitle(recognition.nombre_reconocimiento)}</h3>
              </div>

              {/* Footer con fecha y enlace */}
              <div style={styles.footer}>
                <p style={styles.dateText}>Fecha: {recognition.fecha}</p>
                <a
                  href="#"
                  style={styles.linkMore}
                  onMouseEnter={(e) => e.currentTarget.style.color = styles.linkMoreHover.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = styles.linkMore.color}
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default Recognitions;
