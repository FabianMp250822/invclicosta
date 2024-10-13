// firebaseService.js
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 


// Función para obtener todos los investigadores
export const getResearchers = async () => {
  try {
    // Accede a la colección "researchers"
    const querySnapshot = await getDocs(collection(db, "researchers"));
    
    // Recorre los documentos obtenidos y almacénalos en un array
    const researchers = [];
    querySnapshot.forEach((doc) => {
      researchers.push({ id: doc.id, ...doc.data() });
    });
    
    return researchers;  // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error obteniendo investigadores: ", error);
    throw new Error(error);
  }
};
