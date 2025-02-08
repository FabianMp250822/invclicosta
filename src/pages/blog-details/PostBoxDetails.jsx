// components/blog-details/PostBoxDetails.jsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import RecentPost from "@/components/blog/recent-post.jsx";


import { getBlogById } from "@/components/services/firebaseService.js"; // Ruta relativa correcta
import DOMPurify from 'dompurify'; // Importa DOMPurify

const PostBoxDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const data = await getBlogById(id);
          if (data) {
            setBlog(data);
          } else {
            setError("Blog no encontrado."); // Mensaje si no se encuentra
          }
        } catch (err) {
          console.error("Error al cargar el blog:", err);
          setError("Error al cargar el blog.  Por favor, inténtalo de nuevo."); // Mejor mensaje de error
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBlog();
  }, [id]);


  if (loading) return <p>Cargando blog...</p>;
  if (error) return <p>{error}</p>; // Muestra el mensaje de error
  if (!blog) return <p>No se encontró el blog.</p>; //  redundante con el anterior, pero lo dejo por si acaso

  // Sanitiza el HTML antes de renderizarlo
    const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <div className="postbox__area pt-130 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
            <div className="postbox__wrapper pr-20">
              <article className="postbox__item format-image mb-50 transition-3">
                <div className="postbox__thumb w-img mb-30">
                  {/* No es necesario el Link aquí si ya estás en la página de detalles */}
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="postbox__content">
                  <div className="postbox__meta mb-40">
                    <span>
                      <Link href="/team-details">
                        <i className="fa-regular fa-user"></i> {blog.author}
                      </Link>
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i> {blog.date}
                    </span>
                    <span>
                      <a href="#">
                        <i className="fa-regular fa-message-dots"></i>{" "}
                        {blog.commentsCount || "0"} Comments
                      </a>
                    </span>
                    <span>
                      <i className="fa-light fa-eye"></i> {blog.views} views
                    </span>
                  </div>
                  <h3 className="postbox__title mb-35">
                    {/* No necesitas Link aquí */}
                    {blog.title}
                  </h3>
                  <div className="postbox__content-area pb-20">
                    {/* Usa dangerouslySetInnerHTML con precaución y sanitización */}
                    <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                  </div>
                </div>
              </article>
              <div className="postbox__comment mb-65">
                <h3 className="postbox__comment-title">
                  ({blog.commentsCount || "0"}) Comments
                </h3>
                {/* Renderiza los comentarios aquí (si los tienes) */}
              </div>
             
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
            <div className="sidebar__wrapper pl-25 pb-50">
           
           
            <RecentPost />
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBoxDetails;