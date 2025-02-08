import React, { useEffect, useState } from "react";
import Link from "next/link";
//cargar blogs 
import { getBlogs } from "@/components/services/firebaseService";


const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        if (!data) {
          setError("No se encontraron blogs.");
          setLoading(false);
          return;
        }
        // Limitar a los primeros 3 blogs para mostrar en las tarjetas
        setBlogs(data.slice(0, 3));
      } catch (err) {
        console.error("Error al cargar los blogs:", err);
        setError(
          "Error al cargar los blogs. Por favor, inténtalo de nuevo más tarde."
        );
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

    // Función para extraer un resumen (mejorada para evitar errores)
    const getSummary = (html, maxChars = 150) => {
        if (!html) return ""; // Manejo de caso en que html sea null o undefined
        try {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const plainText = doc.body.textContent || "";
            if (plainText.length > maxChars) {
                return plainText.substring(0, maxChars) + "...";
            }
            return plainText;
        } catch (error) {
            console.error("Error parsing HTML:", error);
            return ""; // Devuelve una cadena vacía en caso de error
        }
    };

  if (loading) return <p>Cargando blogs...</p>;
  if (error) return <p>{error}</p>;
  if (blogs.length === 0) return <p>No hay blogs para mostrar.</p>;

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <Link href={`/blog-details/${blog.id}`}>
                    
                    <img
                        className="w-full h-56 object-cover object-center"
                        src={blog.image}
                        alt={blog.title}
                    />
                </Link>
                <div className="p-6">
                  <h2 className="font-semibold text-xl mb-2">
                    <Link href={`/blog-details/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h2>
                   <p className="text-gray-600 text-base mb-4">
                                    {getSummary(blog.content)}
                                </p>
                  <Link href={`/blog-details/${blog.id}`}>
                    <span  className="text-blue-500 hover:underline">
                      Leer más
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog">
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ver Todos los Blogs
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;