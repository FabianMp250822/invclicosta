import React from 'react';

const TrabajosDirigidosTutorias = ({ trabajosDirigidos }) => {
  return (
    <div>
      <h3>Trabajos Dirigidos</h3>
      <ul>
        {trabajosDirigidos?.map((trabajo, index) => (
          <li key={index}>{trabajo.titulo}: {trabajo.año}</li>
        )) || <p>No hay trabajos dirigidos disponibles.</p>}
      </ul>
    </div>
  );
};

export default TrabajosDirigidosTutorias;
