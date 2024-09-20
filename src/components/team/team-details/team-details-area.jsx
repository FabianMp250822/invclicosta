import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import ProfessionalExperience from './ProfessionalExperience';
import Recognitions from './Recognitions';
import TrabajosDirigidosTutorias from './TrabajosDirigidosTutorias';
import EventosCientificos from './EventosCientificos';
import ProduccionBibliografica from './ProduccionBibliografica';
import ClinicalTrials from './ClinicalTrials';

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
  },
  generalInfo: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
  },
  leftSection: {
    flex: 1,
    textAlign: 'center',
    maxWidth: '320px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: '22px',
    color: '#4a148c',
    marginTop: '10px',
  },
  tabsContainer: {
    marginTop: '20px',
  },
  tabButton: {
    display: 'block',
    backgroundColor: '#f1f1f1',
    border: 'none',
    color: '#333',
    padding: '10px 20px',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
  activeTabButton: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    borderLeft: '5px solid #4a148c',
  },
  rightSection: {
    flex: 3,
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#4A2AB7',
  },
};

const TeamDetailsArea = ({ researcher }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <GeneralInfo researcher={researcher} />;
      case 1:
        return <ProfessionalExperience experienciaProfesional={researcher.experiencia_profesional} />;
      case 2:
        return <Recognitions recognitions={researcher.reconocimientos} />;
      case 3:
        return <TrabajosDirigidosTutorias trabajosDirigidos={researcher.trabajos_dirigidos_tutorias} />;
      case 4:
        return <EventosCientificos eventos={researcher.eventos_cientificos} />;
      case 5:
        return <ProduccionBibliografica productions={researcher.produccion_bibliografica} />;
      case 6:
        return <ClinicalTrials trials={researcher.clinical_studies} />;
      default:
        return <p>No hay información disponible.</p>;
    }
  };

  const tabs = [
    'INFORMACIÓN GENERAL',
    'EXPERIENCIA PROFESIONAL',
    'RECONOCIMIENTOS',
    'TRABAJOS DIRIGIDOS',
    'EVENTOS CIENTÍFICOS',
    'PRODUCCIÓN BIBLIOGRÁFICA',
    'ENSAYOS CLÍNICOS',
  ];

  return (
    <section style={styles.container}>
      <div style={styles.generalInfo}>
        <div style={styles.leftSection}>
          <img
            src={researcher?.informacion_personal?.foto || "/assets/img/default-avatar.jpg"}
            alt={`Foto de ${researcher.informacion_personal?.nombre_completo}`}
            style={styles.profileImage}
          />
          <h2 style={styles.name}>{researcher?.informacion_personal?.nombre_completo}</h2>

          <div style={styles.tabsContainer}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === index ? styles.activeTabButton : {}),
                }}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.rightSection}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsArea;
