// services/firebaseService.js
import { db } from "@/firebaseConfig"; // Importa la instancia de la base de datos desde tu archivo de configuración
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

/**
 * Obtiene todos los investigadores de la colección "researchers".
 *
 * @returns {Promise<Array<Object>>} Un array de objetos, donde cada objeto representa un investigador.
 *   Cada objeto investigador incluye su ID y todos sus campos.
 *   Retorna un array vacío si no hay investigadores.
 * @throws {Error} Si ocurre un error al obtener los datos de Firestore.
 */
export const getResearchers = async () => {
  try {
    const researchersRef = collection(db, "researchers");
    const querySnapshot = await getDocs(researchersRef);

    const researchers = [];
    querySnapshot.forEach((doc) => {
      // Añade el ID del documento al objeto de datos del investigador.
      researchers.push({ id: doc.id, ...doc.data() });
    });

    return researchers;
  } catch (error) {
    console.error("Error al obtener los investigadores:", error);
    throw new Error(
      "Error al obtener los investigadores de Firestore: " + error.message
    ); // Mensaje de error más descriptivo
  }
};

/**
 * Obtiene todos los blogs de la colección "blogs".
 *  Puede filtrar por el campo "lugar" si se proporciona el parámetro `lugar`.
 * @param {string} [lugar] - Opcional. Si se proporciona, filtra los blogs por el valor del campo "lugar".
 *
 * @returns {Promise<Array<Object>>} Un array de objetos, donde cada objeto representa un blog.
 *   Cada objeto blog incluye su ID y todos sus campos.
 *   Retorna un array vacío si no hay blogs.
 * @throws {Error} Si ocurre un error al obtener los datos de Firestore.
 */
export const getBlogs = async (lugar) => {
    try {
      const blogsRef = collection(db, "blogs");
      let q;

      if (lugar) {
        // Si se proporciona el parámetro 'lugar', crea una consulta filtrada.
        q = query(blogsRef, where("lugar", "==", lugar));
      } else {
        // Si no se proporciona 'lugar', obtiene todos los blogs.
        q = blogsRef;
      }
      const querySnapshot = await getDocs(q);

      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() });
      });

      return blogs;
    } catch (error) {
      console.error("Error al obtener los blogs:", error);
      throw new Error(
        "Error al obtener los blogs de Firestore: " + error.message
      );
    }
  };

/**
 * Obtiene un blog específico por su ID de la colección "blogs".
 *
 * @param {string} id - El ID del blog que se quiere obtener.
 * @returns {Promise<Object|null>} Un objeto que representa el blog, incluyendo su ID y todos sus campos.
 *   Retorna `null` si no se encuentra un blog con el ID proporcionado.
 * @throws {Error} Si ocurre un error al obtener los datos de Firestore.
 */
export const getBlogById = async (id) => {
  try {
    if (!id) {
      throw new Error("Se requiere un ID para obtener un blog."); // Validación del ID
    }

    const blogRef = doc(db, "blogs", id);
    const blogSnapshot = await getDoc(blogRef);

    if (blogSnapshot.exists()) {
      return { id: blogSnapshot.id, ...blogSnapshot.data() };
    } else {
      // En lugar de lanzar un error, retorna null.  Es más flexible.
      console.warn(`No se encontró el blog con el id: ${id}`); // Advertencia en lugar de error
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el blog por ID:", error);
    throw new Error(
      "Error al obtener el blog de Firestore: " + error.message
    );
  }
};