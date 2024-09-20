import React from 'react';

const ClinicalTrials = ({ trials }) => {
  return (
    <div>
      <h3>Ensayos Clínicos</h3>
      <ul>
        {trials?.map((ensayo, index) => (
          <li key={index}>{ensayo.titulo}: {ensayo.fechaInicio} - {ensayo.fechaFin}</li>
        )) || <p>No hay ensayos clínicos disponibles.</p>}
      </ul>
    </div>
  );
};

export default ClinicalTrials;
