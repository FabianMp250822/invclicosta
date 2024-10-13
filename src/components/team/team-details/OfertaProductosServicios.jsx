import React from 'react';

// Estilos simples personalizados
const styles = {
  container: {
    marginBottom: '1.5rem',
  },
  productItem: {
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    borderLeft: '5px solid #4C3BCF',
    borderRadius: '8px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
  },
  header: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#4C3BCF',
  },
};

const OfertaProductosServicios = ({ oferta_productos_servicios }) => {
  // Si no hay datos de oferta de productos y servicios, mostrar un mensaje
  if (!oferta_productos_servicios || !oferta_productos_servicios.titulo || !oferta_productos_servicios.texto) {
    return <p>No hay oferta de productos y servicios disponible.</p>;
  }

  return (
    <div style={styles.container}>
      <h6 style={styles.header}>Oferta de Productos y Servicios</h6>
      <div style={styles.productItem}>
        <h6 style={{ color: '#4C3BCF' }}>{oferta_productos_servicios.titulo}</h6>
        <p>{oferta_productos_servicios.texto}</p>
      </div>
    </div>
  );
};

export default OfertaProductosServicios;
