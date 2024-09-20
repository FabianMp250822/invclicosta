import React from 'react';

const Recognitions = ({ recognitions }) => {
  return (
    <div>
      <h3>Reconocimientos</h3>
      <ul>
        {recognitions?.map((rec, index) => (
          <li key={index}>{rec.nombre}: {rec.año}</li>
        )) || <p>No hay reconocimientos disponibles.</p>}
      </ul>
    </div>
  );
};

export default Recognitions;
