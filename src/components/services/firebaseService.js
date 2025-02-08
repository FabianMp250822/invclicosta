// firebaseService.js 
import { db } from "@/firebaseConfig";
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  doc,       // Agregado
  getDoc     // Agregado
} from "firebase/firestore"; 

// Función para obtener todos los investigadores
export const getResearchers = async () => {
  try {
    // Accede a la colección "researchers"
    const querySnapshot = await getDocs(collection(db, "researchers"));
    
    // Recorre los documentos obtenidos y almacena los datos en un array
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

// Función para obtener todos los blogs cuyo campo "lugar" es "Centro"
export const getBlogs = async () => {
  try {
    // Accede a la colección "blogs"
    const blogsRef = collection(db, "blogs");
    // Crea un query que filtra los documentos donde el campo "lugar" es "Centro"
    const q = query(blogsRef, where("lugar", "==", "Centro"));
    // Obtiene los documentos que cumplen la condición
    const querySnapshot = await getDocs(q);
    
    // Recorre los documentos obtenidos y almacena los datos en un array
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    
    return blogs;  // Retorna los datos obtenidos
  } catch (error) {
    console.error("Error obteniendo blogs: ", error);
    throw new Error(error);
  }
};

// Función para obtener un blog por su id
export const getBlogById = async (id) => {
  try {
    // Crea una referencia al documento específico en la colección "blogs"
    const blogRef = doc(db, "blogs", id);
    // Obtiene el documento
    const blogSnapshot = await getDoc(blogRef);
    
    if (!blogSnapshot.exists()) {
      throw new Error(`No se encontró el blog con el id: ${id}`);
    }
    
    // Retorna el documento con su id
    return { id: blogSnapshot.id, ...blogSnapshot.data() };
  } catch (error) {
    console.error("Error obteniendo el blog: ", error);
    throw new Error(error);
  }
};
