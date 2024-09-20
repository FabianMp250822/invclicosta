import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Estilos reutilizados de OfertaProductosServicios
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
  productValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: '16px',
  },
  productLabel: {
    fontSize: '16px',
    fontWeight: 'normal',
  },
};

// Función para asignar color según la categoría
const getColor = (key) => {
  switch (key) {
    case 'Artículo - Publicado en revista especializada':
      return '#4CAF50'; // Verde
    case 'Artículo - Corto (Resumen)':
      return '#FF9800'; // Naranja
    case 'Artículo - Revisión (Survey)':
      return '#2196F3'; // Azul
    case 'Artículo - Caso clínico':
      return '#F44336'; // Rojo
    default:
      return '#9E9E9E'; // Gris
  }
};

const ProductosResultadoInvestigacion = ({ produccion_bibliografica }) => {
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    if (produccion_bibliografica) {
      setProductions(produccion_bibliografica);
    }
  }, [produccion_bibliografica]);

  const countByCategory = (products) => {
    return products.reduce((acc, product) => {
      const category = product.tipo_produccion;
      if (acc[category]) {
        acc[category] += 1;
      } else {
        acc[category] = 1;
      }
      return acc;
    }, {});
  };

  const categorizedProducts = countByCategory(productions);

  // Preparar datos para el gráfico
  const chartData = Object.entries(categorizedProducts).map(([key, value]) => ({
    name: key,
    count: value,
    fill: getColor(key),
  }));

  return (
    <div style={styles.container}>
      <h6 style={styles.header}>Productos Resultado De Investigación (Últimos 5 Años)</h6>

      <div>
        {Object.entries(categorizedProducts).map(([key, value], index) => (
          <div key={index} style={styles.productItem}>
            <div style={{ ...styles.productValue, color: getColor(key) }}>{value}</div>
            <div style={styles.productLabel}>{key}</div>
          </div>
        ))}
      </div>

      {/* Sección de la gráfica de barras */}
      <div style={{ marginTop: '32px' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={200} />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductosResultadoInvestigacion;
