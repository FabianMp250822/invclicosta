import React, { useState } from 'react';

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
    maxWidth: '320px',  // Aumentado el ancho un 10%
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

const tabsData = [
  { title: 'INFORMACIÓN GENERAL', content: 'Aquí va la información general del investigador.' },
  { title: 'EXPERIENCIA PROFESIONAL', content: 'Aquí va la experiencia profesional del investigador.' },
  { title: 'RECONOCIMIENTOS', content: 'Aquí van los reconocimientos del investigador.' },
  { title: 'TRABAJOS DIRIGIDOS', content: 'Aquí van los trabajos dirigidos del investigador.' },
  { title: 'EVENTOS CIENTÍFICOS', content: 'Aquí van los eventos científicos del investigador.' },
  { title: 'PRODUCCIÓN BIBLIOGRÁFICA', content: 'Aquí va la producción bibliográfica del investigador.' },
  { title: 'ENSAYOS CLÍNICOS', content: 'Aquí van los ensayos clínicos del investigador.' },
];

const TeamDetailsArea = ({ researcher }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    return (
      <div>
        <h3 style={styles.sectionTitle}>{tabsData[activeTab].title}</h3>
        <p>{tabsData[activeTab].content}</p>
      </div>
    );
  };

  return (
    <section style={styles.container}>
      <div style={styles.generalInfo}>
        {/* Foto e Información Básica */}
        <div style={styles.leftSection}>
          <img
            src={researcher?.informacion_personal?.foto || "/assets/img/default-avatar.jpg"}
            alt={`Foto de ${researcher.informacion_personal?.nombre_completo}`}
            style={styles.profileImage}
          />
          <h2 style={styles.name}>{researcher?.informacion_personal?.nombre_completo}</h2>

          {/* Tabs */}
          <div style={styles.tabsContainer}>
            {tabsData.map((tab, index) => (
              <button
                key={index}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === index ? styles.activeTabButton : {}),
                }}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido del tab seleccionado */}
        <div style={styles.rightSection}>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsArea;
