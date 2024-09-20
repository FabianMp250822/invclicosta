import React from 'react';

const ProfessionalExperience = ({ experienciaProfesional }) => {
  return (
    <div>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experienciaProfesional?.map((exp, index) => (
          <li key={index}>{exp.institucion}: {exp.cargo}</li>
        )) || <p>No hay experiencia profesional disponible.</p>}
      </ul>
    </div>
  );
};

export default ProfessionalExperience;
