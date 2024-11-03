import React, { useEffect, useState } from 'react';
import { FaFlask } from 'react-icons/fa';

// Estilos simples personalizados
const styles = {
  container: {
    padding: '16px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    marginBottom: '1.5rem',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '16px',
    fontSize: '18px',
    color: '#4C3BCF',
  },
  researchGridContainer: {
    maxHeight: '520px', // Limitar la altura a 300px
    overflowY: 'auto', // Habilitar scroll vertical si el contenido excede la altura
    paddingRight: '8px', // Agregar un pequeño margen para evitar que el contenido se corte con el scroll
  },
  researchGridItem: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: '16px',
    borderRadius: '8px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
  },
  researchGridItemHover: {
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-2px)',
  },
  icon: {
    marginRight: '8px',
    color: '#4C3BCF',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: '14px',
    color: '#666',
  },
};

const ResearchLines = ({ linea_investigacion }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    console.log('Líneas de investigación recibidas:', linea_investigacion);
    if (linea_investigacion) {
      setLines(linea_investigacion);
    }
  }, [linea_investigacion]);

  return (
    <div style={styles.container}>
      <h6 style={styles.header}>Líneas de Investigación</h6>
      <div style={styles.researchGridContainer}>
        {lines.length > 0 ? (
          lines.map((line, index) => (
            <div key={index} style={styles.researchGridItem}>
              <FaFlask size={24} style={styles.icon} />
              <div>
                <div style={styles.subtitle}>{line.linea_investigacion}</div>
                <div style={styles.bodyText}>Activa: {line.activa ? 'Sí' : 'No'}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay líneas de investigación disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ResearchLines;
