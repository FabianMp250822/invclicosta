import React from 'react';

const EventosCientificos = ({ eventos }) => {
  return (
    <div>
      <h3>Eventos Científicos</h3>
      <ul>
        {eventos?.map((evento, index) => (
          <li key={index}>{evento.nombreEvento} - {evento.fechaEvento}</li>
        )) || <p>No hay eventos científicos disponibles.</p>}
      </ul>
    </div>
  );
};

export default EventosCientificos;
