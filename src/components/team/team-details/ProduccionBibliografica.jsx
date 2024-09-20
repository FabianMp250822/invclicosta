import React from 'react';

const ProduccionBibliografica = ({ productions }) => {
  return (
    <div>
      <h3>Producción Bibliográfica</h3>
      <ul>
        {productions?.map((produccion, index) => (
          <li key={index}>{produccion.titulo} - {produccion.año}</li>
        )) || <p>No hay producción bibliográfica disponible.</p>}
      </ul>
    </div>
  );
};

export default ProduccionBibliografica;
