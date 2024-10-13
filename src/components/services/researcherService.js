// researcherService.js
import { getResearchers } from "@/components/services/firebaseService";

// Servicio intermedio para obtener un investigador por ID
export const getResearcherById = async (id) => {
  try {
    const data = await getResearchers(); // Llama a Firebase para obtener todos los investigadores
    return data.find((researcher) => researcher.id === id); // Filtra por ID
  } catch (error) {
    console.error("Error al obtener el investigador:", error);
    throw error;
  }
};
