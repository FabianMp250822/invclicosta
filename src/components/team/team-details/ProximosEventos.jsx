import React from 'react';

// Estilos personalizados para los tickets
const styles = {
  eventItem: {
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderLeft: '5px solid #4C3BCF',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '10px', // Borde redondeado
    display: 'flex', // Para mostrar el ticket como un "ticket de evento"
    flexDirection: 'column',
  },
  eventTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4C3BCF',
    marginBottom: '8px',
  },
  eventDetails: {
    fontSize: '1rem',
    marginBottom: '4px',
  },
  ticketDecoration: {
    position: 'relative',
    borderTop: '2px dashed #4C3BCF',
    marginTop: '16px',
    paddingTop: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const ProximosEventos = ({ eventos }) => {
  // Asegurarse de que eventos sea un array
  const eventosList = Array.isArray(eventos) ? eventos : [eventos];

  return (
    <div>
      <h6>Próximos Eventos</h6>
      {eventosList.length > 0 ? (
        eventosList.map((evento, index) => (
          <div key={index} style={styles.eventItem}>
            <h6 style={styles.eventTitle}>{evento.nombreEvento}</h6>
            <p style={styles.eventDetails}>
              <strong>Fecha:</strong> {evento.fechaEvento}
            </p>
            <p style={styles.eventDetails}>
              <strong>Hora:</strong> {evento.horaEvento}
            </p>
            <p style={styles.eventDetails}>
              <strong>Lugar:</strong> {evento.lugarEvento}
            </p>

            {/* Decoración del ticket */}
            <div style={styles.ticketDecoration}>
              <span>Código del evento: #{index + 1}</span>
              <span>Entrada válida</span>
            </div>
          </div>
        ))
      ) : (
        <p>No hay eventos próximos disponibles.</p>
      )}
    </div>
  );
};

export default ProximosEventos;
