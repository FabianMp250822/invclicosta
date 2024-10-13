import React, { useEffect, useState } from "react";
import { getResearchers } from "@/components/services/firebaseService";
import { db } from "@/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";
import ResearcherForm from "./AddResearcher";
import { Modal } from "@mui/material";

const AdminPanelResearchers = () => {
  const [researchers, setResearchers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedResearcherId, setSelectedResearcherId] = useState(null);

  // Cargar los investigadores desde Firebase
  useEffect(() => {
    const fetchResearchers = async () => {
      try {
        const data = await getResearchers();
        data.sort((a, b) => a.informacion_personal?.nombre_completo.localeCompare(b.informacion_personal?.nombre_completo));
        setResearchers(data);
      } catch (error) {
        console.error("Error al obtener investigadores: ", error);
      }
    };

    fetchResearchers();
  }, []);

  // Función para eliminar un investigador
  const deleteResearcher = async (id) => {
    try {
      await deleteDoc(doc(db, "researchers", id));
      setResearchers((prev) => prev.filter((researcher) => researcher.id !== id));
    } catch (error) {
      console.error("Error al eliminar el investigador: ", error);
    }
  };

  // Función para cambiar el estado visual de un investigador
  const toggleVisual = async (id, currentVisual) => {
    try {
      const researcherRef = doc(db, "researchers", id);
      await updateDoc(researcherRef, { visual: !currentVisual });
      setResearchers((prev) =>
        prev.map((researcher) =>
          researcher.id === id ? { ...researcher, visual: !currentVisual } : researcher
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado visual del investigador: ", error);
    }
  };

  const filteredResearchers = researchers.filter(
    (researcher) =>
      researcher.informacion_personal?.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterLevel === "" || researcher.nivel === filterLevel)
  );

  const handleAddResearcher = () => {
    setSelectedResearcherId(null);
    setShowForm(true);
  };

  const handleEditResearcher = (id) => {
    setSelectedResearcherId(id);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <HeaderTwo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>Panel de Administración - Investigadores</h1>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Buscar Investigador"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            style={{ padding: "10px", width: "200px", marginRight: "20px" }}
          >
            <option value="">Todos los niveles</option>
            <option value="Investigador Asociado">Investigador Asociado</option>
            <option value="Investigador Senior">Investigador Senior</option>
            <option value="Coordinadora">Coordinadora</option>
          </select>
          <button
            onClick={handleAddResearcher}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#2ecc71",
              color: "white",
            }}
          >
            Agregar Investigador
          </button>
        </div>
        <div style={{ maxWidth: "1000px", width: "100%", margin: "20px 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", backgroundColor: "#f2f2f2" }}>#</th>
                <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", backgroundColor: "#f2f2f2" }}>Foto</th>
                <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", backgroundColor: "#f2f2f2" }}>Nombre</th>
                <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", backgroundColor: "#f2f2f2" }}>Nivel</th>
                <th style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", backgroundColor: "#f2f2f2" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredResearchers.map((researcher, index) => (
                <tr key={researcher.id}>
                  <td style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}>{index + 1}</td>
                  <td style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}>
                    <img
                      src={researcher.informacion_personal?.foto}
                      alt={researcher.informacion_personal?.nombre_completo}
                      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    />
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "12px" }}>{researcher.informacion_personal?.nombre_completo}</td>
                  <td style={{ border: "1px solid #ddd", padding: "12px" }}>{researcher.nivel}</td>
                  <td style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}>
                    <button
                      style={{
                        margin: "5px",
                        padding: "10px 20px",
                        fontSize: "14px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#e74c3c",
                        color: "white",
                      }}
                      onClick={() => deleteResearcher(researcher.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      style={{
                        margin: "5px",
                        padding: "10px 20px",
                        fontSize: "14px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: researcher.visual ? "#f39c12" : "#2ecc71",
                        color: "white",
                      }}
                      onClick={() => toggleVisual(researcher.id, researcher.visual)}
                    >
                      {researcher.visual ? "Suspender" : "Habilitar"}
                    </button>
                    <button
                      style={{
                        margin: "5px",
                        padding: "10px 20px",
                        fontSize: "14px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "blue",
                        color: "white",
                      }}
                      onClick={() => handleEditResearcher(researcher.id)}
                    >
                      Actualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal open={showForm} onClose={handleCloseForm}>
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "50px auto" }}>
          <ResearcherForm researcherId={selectedResearcherId} onClose={handleCloseForm} />
        </div>
      </Modal>
      <FooterFour />
    </>
  );
};

export default AdminPanelResearchers;
