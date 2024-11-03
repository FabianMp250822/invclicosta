import React, { useEffect, useState } from "react";
import { getResearchers } from "@/components/services/firebaseService";
import { db } from "@/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import HeaderTwo from "@/layout/header/header-two";
import FooterFour from "@/layout/footer/footer-4";

const AdminPanelResearchers = () => {
  const [researchers, setResearchers] = useState([]);

  // Cargar los investigadores desde Firebase
  useEffect(() => {
    const fetchResearchers = async () => {
      try {
        const data = await getResearchers();
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

  // Función para suspender un investigador (cambiar visual a false)
  const suspendResearcher = async (id) => {
    try {
      const researcherRef = doc(db, "researchers", id);
      await updateDoc(researcherRef, { visual: false });
      setResearchers((prev) =>
        prev.map((researcher) =>
          researcher.id === id ? { ...researcher, visual: false } : researcher
        )
      );
    } catch (error) {
      console.error("Error al suspender el investigador: ", error);
    }
  };

  return (
    <>
      <HeaderTwo />
      <div className="admin-panel">
        <h1>Panel de Administración - Investigadores</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {researchers.map((researcher) => (
              <tr key={researcher.id}>
                <td>{researcher.informacion_personal?.nombre_completo}</td>
                <td>
                  <button onClick={() => deleteResearcher(researcher.id)}>Eliminar</button>
                  <button onClick={() => suspendResearcher(researcher.id)}>Suspender</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FooterFour />
    </>
  );
};

export default AdminPanelResearchers;