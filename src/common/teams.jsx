import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getResearchers } from "@/components/services/firebaseService";

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await getResearchers();
        console.log("Datos de investigadores obtenidos:", data);

        const sortedData = data
          .filter((researcher) => researcher.visual) // Filtramos solo los investigadores con visual: true
          .sort((a, b) => {
            const nombresPrioritarios = [
              "Gustavo Aroca Martínez",
              "Andres Angelo Cadena Bonfanti",
              "Alberto Jose Cadena Bonfanti",
            ];

            if (nombresPrioritarios.includes(a.informacion_personal?.nombre_completo)) {
              return -1;
            }
            if (nombresPrioritarios.includes(b.informacion_personal?.nombre_completo)) {
              return 1;
            }

            const levelsOrder = {
              "Investigador Senior": 1,
              "Investigador Asociado": 2,
              "Sub Investigador": 3,
            };

            const nivelA = levelsOrder[a.nivel] || 4;
            const nivelB = levelsOrder[b.nivel] || 4;

            return nivelA - nivelB;
          });

        setTeamData(sortedData);
      } catch (error) {
        console.error("Error al obtener los investigadores: ", error);
      }
    };

    fetchTeamData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTeamData = teamData.filter((teamMember) =>
    teamMember.informacion_personal?.nombre_completo
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="team-area grey-bg pt-120 pb-80" style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}>
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="tp-section">
              <span className="tp-section__sub-title left-line mb-25">Nuestro Equipo de Investigación</span>
              <h2 className="tp-section__title mb-30">Conozca a Nuestros Especialistas en Investigación Clínica</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            {/* Buscador de Investigadores */}
            <input
              type="text"
              className="form-control"
              placeholder="Buscar investigador por nombre"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Buscar investigador"
            />
          </div>
        </div>

        <div className="row">
          {filteredTeamData.length > 0 ? (
            filteredTeamData.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
                <div
                  className="tp-team"
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    className="tp-team__thumb"
                    style={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <Link href={`/team-details/${item.id}`}>
                      <img
                        src={item.informacion_personal?.foto || "/assets/img/default-avatar.jpg"}
                        alt={`Imagen de ${item.informacion_personal?.nombre_completo}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="tp-team__content mt-3" style={{ textAlign: "center" }}>
                    <h3 className="tp-team__title mb-2">
                      <Link href={`/team-details/${item.id}`}>
                        {item.informacion_personal?.nombre_completo}
                      </Link>
                    </h3>
                    <h4 className="tp-team__position mb-2">
                      {item.nivel || "Nivel Desconocido"}
                    </h4>
                    <p>{`${item.biografia?.texto?.substring(0, 100)}...`}</p>
                    <Link href={`/team-details/${item.id}`}>
                      <button
                        className="tp-btn-link"
                        style={{
                          background: "none",
                          border: "none",
                          color: "#1a2e7b",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Leer la biografía completa del especialista
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron investigadores. Intente buscar por otro término.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Teams;
