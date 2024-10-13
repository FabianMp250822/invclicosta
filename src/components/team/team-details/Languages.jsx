import React from 'react';
import Flag from 'react-world-flags';

// Estilos personalizados para los bloques de información y encabezados
const styles = {
  infoBlock: {
    marginBottom: '24px',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  languageContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  flag: {
    width: '40px',
    height: '25px',
    marginRight: '8px',
  },
};

// Mapear los códigos de país para las banderas
const getCountryCode = (language) => {
  const normalizedLanguage = language.toLowerCase().trim();
  switch (normalizedLanguage) {
    case 'español':
    case 'spanish':
      return 'ES'; // España
    case 'inglés':
    case 'ingles':
    case 'english':
      return 'GB'; // Reino Unido
    case 'francés':
    case 'frances':
    case 'french':
      return 'FR'; // Francia
    case 'alemán':
    case 'aleman':
    case 'german':
      return 'DE'; // Alemania
    default:
      return ''; // Código vacío si no coincide
  }
};

const Languages = ({ languages }) => {
  return (
    <div style={styles.infoBlock}>
      <div style={styles.sectionHeader}>Idiomas</div>
      <div>
        {languages.length > 0 ? (
          languages.map((language, index) => (
            <div key={index} style={styles.languageContainer}>
              {getCountryCode(language.idioma) && (
                <Flag
                  code={getCountryCode(language.idioma)}
                  style={styles.flag}
                />
              )}
              <div>
                <strong>{language.idioma}</strong>
                <div>
                  <span><strong>Habla:</strong> {language.habla}</span> | 
                  <span><strong> Escribe:</strong> {language.escribe}</span> | 
                  <span><strong> Lee:</strong> {language.lee}</span> | 
                  <span><strong> Entiende:</strong> {language.entiende}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </div>
    </div>
  );
};

export default Languages;
