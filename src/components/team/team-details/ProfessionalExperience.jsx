import React, { useState, useEffect } from 'react';
import { FaSearch, FaBriefcase } from 'react-icons/fa';

// Estilos simples con CSS-in-JS
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  searchBox: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid #ddd',
    padding: '8px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    flexGrow: 1,
    padding: '8px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '15px',
  },
  experienceItem: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  logoBox: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  logoImage: {
    height: '45px',
    maxWidth: '100%',
  },
  timeline: {
    listStyle: 'none',
    padding: 0,
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '20px',
    marginBottom: '10px',
  },
  timelineConnector: {
    position: 'absolute',
    left: '10px',
    top: 0,
    height: '100%',
    width: '2px',
    backgroundColor: '#ddd',
  },
  timelineDot: {
    position: 'absolute',
    left: '6px',
    top: '6px',
    height: '8px',
    width: '8px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
  },
};

const capitalizeTitle = (title) => title.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

const ProfessionalExperience = ({ experienciaProfesional }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [logos, setLogos] = useState(null);

  useEffect(() => {
    // Cargar logos.json desde la carpeta public/assets/
    const fetchLogos = async () => {
      try {
        const res = await fetch('/assets/logos.json');
        const data = await res.json();
        setLogos(data);
      } catch (error) {
        console.error('Error al cargar los logos:', error);
      }
    };
    fetchLogos();
  }, []);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const getInstitutionData = (name) => {
    if (!logos) return null;
    return (
      logos.universities.find(uni => uni.name.toLowerCase() === name.toLowerCase()) ||
      logos.hospitals.find(hospital => hospital.name.toLowerCase() === name.toLowerCase())
    );
  };

  const filteredExperiencia = experienciaProfesional.filter(experience =>
    experience.institucion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const order = ["CLINICA DE LA COSTA", "UNIVERSIDAD SIMÓN BOLÍVAR", "UNIVERSIDAD DEL NORTE"];

  const orderedExperiences = filteredExperiencia.sort((a, b) => {
    const indexA = order.indexOf(a.institucion.toUpperCase());
    const indexB = order.indexOf(b.institucion.toUpperCase());
    if (indexA === -1 && indexB === -1) return a.institucion.localeCompare(b.institucion);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const groupedExperiences = orderedExperiences.reduce((acc, experience) => {
    if (!acc[experience.institucion]) acc[experience.institucion] = [];
    acc[experience.institucion].push(experience);
    return acc;
  }, {});

  return (
    <div style={styles.container}>
      <h2>Experiencia Profesional</h2>

      {/* Search Box */}
      <div style={styles.searchBox}>
        <FaSearch style={{ marginRight: '8px', color: '#888' }} />
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Buscar por nombre de institución"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {Object.keys(groupedExperiences).length > 0 ? (
        <div style={styles.gridContainer}>
          {Object.entries(groupedExperiences).map(([institution, experiences], index) => {
            const institutionData = getInstitutionData(institution);

            return (
              <div key={index} style={styles.experienceItem}>
                {/* Title */}
                <div style={styles.titleBox}>
                  <FaBriefcase style={{ marginRight: '8px', color: '#007bff' }} />
                  <h3>{capitalizeTitle(institution)}</h3>
                </div>

                {/* Logo */}
                {institutionData && (
                  <div style={styles.logoBox}>
                    <a href={institutionData.url} target="_blank" rel="noopener noreferrer">
                      <img src={institutionData.logo} alt={institution} style={styles.logoImage} />
                    </a>
                  </div>
                )}

                {/* Timeline */}
                <ul style={styles.timeline}>
                  {experiences.map((experience, idx) => (
                    <li key={idx} style={styles.timelineItem}>
                      <div style={styles.timelineDot}></div>
                      {idx < experiences.length - 1 && <div style={styles.timelineConnector}></div>}
                      <p>
                        <strong>Dedicación:</strong> {experience.dedicacion}<br />
                        <strong>Fecha:</strong> {experience.fecha_inicio} - {experience.fecha_fin || 'Actual'}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </div>
  );
};

export default ProfessionalExperience;
