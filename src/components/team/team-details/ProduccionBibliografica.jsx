import React, { useState, useEffect } from 'react';
import { FaSearch, FaBook, FaCode, FaUniversity, FaLayerGroup, FaCalendarAlt, FaLink } from 'react-icons/fa';
import InfoModalGoogle from './modalgoogle.jsx'; // Modal para mostrar detalles

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
    transition: 'all 0.3s ease-in-out',
    height: '48px',
  },
  titleBoxHover: {
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
    height: 'auto',
    backgroundColor: '#14458b',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  descriptionBox: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      WebkitLineClamp: 'unset',
    },
  },
};

const ScholarArticles = ({ productions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [hoveredTitle, setHoveredTitle] = useState(null); // Estado para manejar el hover en los títulos

  useEffect(() => {
    // Cargar logos desde public/assets/logos.json
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = productions.filter((article) =>
    article.titulo_articulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (article) => {
    setModalInfo(article);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#1a2e7b', fontWeight: 'bold', marginBottom: '20px' }}>Producción Bibliográfica</h2>

      {/* Input de búsqueda */}
      <div style={styles.searchBox}>
        <FaSearch style={{ marginRight: '8px', color: '#888' }} />
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Buscar por título del artículo"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Grid de artículos */}
      <div style={styles.gridContainer}>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              style={styles.cardItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.cardItemHover.boxShadow;
                e.currentTarget.style.transform = styles.cardItemHover.transform;
                setHoveredTitle(index); // Cambia el estado para este título
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'none';
                setHoveredTitle(null); // Restablece el estado
              }}
              onClick={() => handleCardClick(article)}
            >
              {/* Título del artículo */}
              <div
                style={{
                  ...styles.titleBox,
                  ...(hoveredTitle === index ? styles.titleBoxHover : {}),
                }}
              >
                {article.titulo_articulo ? article.titulo_articulo.charAt(0).toUpperCase() + article.titulo_articulo.slice(1).toLowerCase() : 'No disponible'}
              </div>

              {/* Contenido de la tarjeta */}
              <p style={{ marginTop: '10px' }}>
                <FaBook style={{ marginRight: '5px', color: '#555' }} />
                <strong>Revista:</strong> {article.revista || 'No disponible'}
              </p>
              <p>
                <FaCode style={{ marginRight: '5px', color: '#555' }} />
                <strong>ISSN:</strong> {article.issn || 'No disponible'}
              </p>
              <p>
                <FaUniversity style={{ marginRight: '5px', color: '#555' }} />
                <strong>Editorial:</strong> {article.editorial || 'No disponible'}
              </p>
              <p>
                <FaLayerGroup style={{ marginRight: '5px', color: '#555' }} />
                <strong>Volumen:</strong> {article.volumen || 'No disponible'}, <strong>Número:</strong> {article.numero || 'No disponible'}
              </p>
              <p>
                <FaCalendarAlt style={{ marginRight: '5px', color: '#555' }} />
                <strong>Fecha:</strong> {article.fecha || 'No disponible'}
              </p>
              <p>
                <FaLink style={{ marginRight: '5px', color: '#555' }} />
                <strong>DOI:</strong> {article.doi || 'No disponible'}
              </p>

              {/* Descripción con truncamiento */}
              <div style={styles.descriptionBox}>
                {article.tipo_produccion || 'No disponible'}
              </div>
            </div>
          ))
        ) : (
          <p>No hay resultados disponibles.</p>
        )}
      </div>

      {/* Modal para mostrar más detalles */}
      <InfoModalGoogle open={modalOpen} handleClose={handleCloseModal} info={modalInfo} />
    </div>
  );
};

export default ScholarArticles;
