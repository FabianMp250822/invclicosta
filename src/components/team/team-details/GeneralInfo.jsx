import React from "react";
import {
  FaGoogle,
  FaLinkedin,
  FaResearchgate,
  FaUniversity,
  FaOrcid
} from "react-icons/fa";
import ProximosEventos from "./ProximosEventos.jsx";
import Languages from "./Languages.jsx";
import ProduccionBibliografica from "./ProductosResultadoInvestigacion.jsx";
import OfertaProductosServicios from "./OfertaProductosServicios.jsx";
import ResearchLines from "./ResearchLines.jsx";

const ScopusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M64 64v384h384V64Zm116.815 99.926c22.222 0 32.04 2.586 45.736 8.27l-1.292 20.411c-14.729-8.785-26.356-11.367-43.152-11.367c-19.379 0-29.2 14.727-29.2 28.163c0 18.088 17.313 24.807 33.592 34.626c20.93 12.403 42.636 23.514 42.636 48.062c0 32.299-27.65 48.577-54.006 48.577c-18.863 0-32.557-2.843-45.993-9.044l3.102-20.414c13.178 8.01 24.547 11.889 41.86 11.889c17.57 0 32.297-11.887 32.297-28.424c0-17.054-16.535-23.516-32.297-33.076c-21.189-12.92-44.444-24.29-44.444-50.646s19.379-47.027 51.161-47.027m161.705 0c26.097 0 37.725 3.102 51.937 9.82l-1.55 19.38c-15.504-8.527-31.783-11.886-52.971-11.886c-33.592 0-62.274 26.613-62.274 69.765c0 40.826 29.2 71.575 65.892 71.575c16.795 0 33.591-3.359 49.353-11.886l1.55 19.638c-13.953 6.977-31.523 9.82-52.71 9.82c-42.12 0-87.338-31.01-87.338-87.597c0-49.612 37.982-88.63 88.11-88.63"
      opacity="0.999"
    />
  </svg>
);

const iconMapping = {
  google_scholar: FaGoogle,
  researchgate: FaResearchgate,
  linkedin: FaLinkedin,
  academia: FaUniversity,
  scopus: ScopusIcon,
  orcid: FaOrcid
};

const getIcon = (url) => {
  if (url.includes("linkedin")) return FaLinkedin;
  if (url.includes("scholar.google")) return FaGoogle;
  if (url.includes("researchgate")) return FaResearchgate;
  if (url.includes("academia")) return FaUniversity;
  if (url.includes("scopus")) return ScopusIcon;
  if (url.includes("orcid")) return FaOrcid;
  return null;
};

const GeneralInfo = ({ researcher }) => {
  if (!researcher || !researcher.biografia) {
    return <p>No data available.</p>;
  }

  const {
    biografia,
    informacion_personal,
    redes_sociales_academicas,
    identificadores_de_autor,
    idiomas,
    proximos_eventos,
    produccion_bibliografica,
    oferta_productos_servicios,
    lineas_investigacion
  } = researcher;

  return (
    <div style={{ padding: "1.5rem" }}>
      <h5
        style={{
          backgroundColor: "#f0f0f0",
          padding: "0.8rem",
          borderRadius: "8px"
        }}
      >
        General Information
      </h5>

      {biografia && biografia.texto && (
        <div
          style={{
            marginBottom: "1.5rem",
            padding: "0.75rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)"
          }}
        >
          <h6 style={{ marginBottom: "0.8rem" }}>Biography</h6>
          <p>{biografia.texto}</p>
        </div>
      )}

      {/* Sección para colocar Personal Information y Academic Networks uno al lado del otro */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "1.5rem" }}>
        {/* Personal Information */}
        <div
          style={{
            flex: 1,
            padding: "0.75rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)"
          }}
        >
          <h6 style={{ marginBottom: "0.8rem" }}>Personal Information</h6>
          <p>
            <strong>Citation Name:</strong>{" "}
            {informacion_personal?.nombre_en_citaciones || "No data"}
          </p>
          <p>
            <strong>Sex:</strong> {informacion_personal?.sexo || "No data"}
          </p>
          <p>
            <strong>Nationality:</strong>{" "}
            {informacion_personal?.nacionalidad || "No data"}
          </p>
          <p>
            <strong>Place of Birth:</strong>{" "}
            {informacion_personal?.lugar_nacimiento || "No data"}
          </p>
        </div>

        {/* Academic Social Networks */}
        <div
          style={{
            flex: 1,
            padding: "0.75rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)"
          }}
        >
          <h6 style={{ marginBottom: "0.8rem" }}>
            Academic Social Networks and Identifiers
          </h6>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {Object.entries(redes_sociales_academicas || {}).map(
              ([key, value]) => {
                const IconComponent = iconMapping[key] || getIcon(value);
                return (
                  <div
                    key={key}
                    style={{
                      width: "45px",
                      height: "45px",
                      margin: "0.4rem",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <a href={value} target="_blank" rel="noopener noreferrer">
                      {IconComponent && <IconComponent size={22} />}
                    </a>
                  </div>
                );
              }
            )}
            {identificadores_de_autor?.autor_id_scopus && (
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  margin: "0.4rem",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <a
                  href={identificadores_de_autor.autor_id_scopus}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ScopusIcon />
                </a>
              </div>
            )}
            {identificadores_de_autor?.orcid && (
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  margin: "0.4rem",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <a
                  href={identificadores_de_autor.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaOrcid size={22} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flexbox para organizar Oferta de Productos y Producción Bibliográfica uno al lado del otro */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "1.5rem" }}>
        <div style={{ flex: 1 }}>
          <OfertaProductosServicios
            oferta_productos_servicios={oferta_productos_servicios}
          />
          <ResearchLines linea_investigacion={lineas_investigacion} />
        </div>

        <div style={{ flex: 1 }}>
          <ProduccionBibliografica
            produccion_bibliografica={produccion_bibliografica}
          />
        </div>
      </div>

      {/* Flexbox para organizar Próximos Eventos y Languages */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "1.5rem" }}>
        <div style={{ flex: 1 }}>
          <h6>Research Products and Services</h6>
          <ProximosEventos eventos={proximos_eventos} />
        </div>

        <div style={{ flex: 1 }}>
          <Languages languages={idiomas} />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
