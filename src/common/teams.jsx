import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getResearchers } from "@/components/services/firebaseService";

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const specialtiesMap = {
    Nefrología: [
      "Gustavo Aroca Martínez",
      "Andres Angelo Cadena Bonfanti",
      "Lorena Sofía Gómez Escorcia",
      "Hellen Elena Medina Fábregas",
      "Adriana Paola Gómez Hernández",
    ],
    Cardiología: ["Alberto Jose Cadena Bonfanti"],
    Infectología: ["Shirley Patricia Iglesias Pertuz"],
    Pediátrico: [
      "Vilma Carolina Ruiz de Castro",
      "Zilac Espitaleta Vergara",
      "Jorge Antonio Piedrahita Olier",
      "jrMv47mUi7mqLjPUXU5x",
    ],
    Oncología: [
      "Carmen Marcela Alcalá Castro",
      "Ivan Medina",
      "LvA06NNgz5BUi1502OKM",
      "Alejandra Arrieta Muñoz",
    ],
    Medicina_Interna: [
      "Leonardo Fabio Brochado Fontalvo",
      "Luisa Maria Gómez Giraldo",
      "Sandra Yolima Hernández Agudelo",
      "Osvaldo Elías Lara Sarabia",
      "Lisneth de Jesús Almendrales Escobar",
    ],
    Cardiologia: [
      "Diego Felipe Eli Sanchez Calderin",
      "Lina María De Arco Caraballo",
      "Jessica Paola Martínez Escamilla",
    ],
    Reumatología: [
      "Jesús Raimundo Godoy Martínez",
      "Edith Maria Vizcaino Ferreira",
    ],
    Médico_General: ["Saida Ivonne Orozco Paez", "LvA06NNgz5BUi1502OKM"],
    Neurología: [],
    Coordinadora: [],
    Enfermera_Jefe: [
      "Erika Patricia Orozco Cantillo",
      "LvA06NNgz5BUi1502OKM",
    ],
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await getResearchers();

        // Filtrar para excluir nombres específicos
        const excludedNames = [
          "Luis Aurelio Castillo Parodi",
          "Saida Ivonne Orozco Paez",
        ];
        const filteredData = data.filter(
          (member) =>
            !excludedNames.includes(
              member.informacion_personal?.nombre_completo
            )
        );

        // Añadir especialidad y orden dentro de la especialidad
        const enrichedData = filteredData.map((member) => {
          let assignedSpecialty = "Staff";
          let specialtyOrder = Infinity;

          for (const [specialty, identifiers] of Object.entries(
            specialtiesMap
          )) {
            const memberName = member.informacion_personal?.nombre_completo;
            const memberId = member.id;
            const indexInSpecialty = identifiers.findIndex(
              (identifier) => identifier === memberName || identifier === memberId
            );
            if (indexInSpecialty !== -1) {
              assignedSpecialty = specialty;
              specialtyOrder = indexInSpecialty;
              break;
            }
          }

          return {
            ...member,
            specialty: assignedSpecialty,
            specialtyOrder,
          };
        });

        setTeamData(enrichedData);
      } catch (error) {
        console.error("Error al obtener los investigadores: ", error);
      }
    };

    fetchTeamData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Agrupar y ordenar los investigadores por especialidad
  const groupedData = Object.keys(specialtiesMap).reduce((acc, specialty) => {
    const membersInSpecialty = teamData.filter(
      (member) => member.specialty === specialty
    );

    // Ordenar según el orden en specialtiesMap
    membersInSpecialty.sort((a, b) => a.specialtyOrder - b.specialtyOrder);

    acc[specialty] = membersInSpecialty;
    return acc;
  }, {});

  // Añadir los investigadores clasificados como "Staff"
  groupedData["Staff"] = teamData
    .filter((member) => member.specialty === "Staff")
    .sort((a, b) =>
      (a.informacion_personal?.nombre_completo || "").localeCompare(
        b.informacion_personal?.nombre_completo || ""
      )
    );

  // Filtrar por término de búsqueda
  const filteredGroupedData = Object.keys(groupedData).reduce(
    (acc, specialty) => {
      acc[specialty] = groupedData[specialty].filter((member) =>
        member.informacion_personal?.nombre_completo
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      return acc;
    },
    {}
  );

  return (
    <section
      className="team-area grey-bg pt-120 pb-80"
      style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
    >
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-8 col-md-8 col-12">
            <div className="tp-section">
              <span className="tp-section__sub-title left-line mb-25">
                Nuestro Equipo de Investigación
              </span>
              <h2 className="tp-section__title mb-30">
                Conozca a Nuestros Especialistas en Investigación Clínica
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
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

        {Object.keys({ ...specialtiesMap, Staff: [] }).map((specialty) => (
          <div key={specialty}>
            {filteredGroupedData[specialty]?.length > 0 && (
              <>
                <h3
                  className="specialty-title"
                  style={{
                    marginTop: "30px",
                    marginBottom: "15px",
                    borderBottom: "2px solid #ccc",
                    paddingBottom: "5px",
                  }}
                >
                  {specialty.replace(/_/g, " ")}
                </h3>
                <div className="row">
                  {filteredGroupedData[specialty].map((item) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mb-4"
                      key={item.id}
                    >
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
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 16px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "none";
                          e.currentTarget.style.boxShadow =
                            "0 4px 8px rgba(0, 0, 0, 0.1)";
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
                              src={
                                item.informacion_personal?.foto ||
                                "/assets/img/default-avatar.jpg"
                              }
                              alt={`Imagen de ${item.informacion_personal?.nombre_completo}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Link>
                        </div>
                        <div
                          className="tp-team__content mt-3"
                          style={{ textAlign: "center" }}
                        >
                          <h3 className="tp-team__title mb-2">
                            <Link href={`/team-details/${item.id}`}>
                              {item.informacion_personal?.nombre_completo}
                            </Link>
                          </h3>
                          <h4 className="tp-team__position mb-2">
                            {item.nivel || "Investigador Asociado"}
                          </h4>
                          <p>
                            {`${
                              item.biografia?.texto?.substring(0, 100) || ""
                            }...`}
                          </p>
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
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
