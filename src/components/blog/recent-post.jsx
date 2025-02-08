import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getBlogs } from "../services/firebaseService";

const RecentPost = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const data = await getBlogs();
        if (!data) {
          setError("No se encontraron blogs.");
          setLoading(false);
          return;
        }

        const filteredBlogs = data.filter((blog) => blog.lugar === "Centro");
        const sortedBlogs = filteredBlogs.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        const recent = sortedBlogs.slice(0, 4);
        setRecentPosts(recent);
      } catch (err) {
        console.error("Error al cargar los blogs recientes:", err);
        setError("Error al cargar los blogs recientes. Intenta de nuevo.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  if (loading) return <p>Cargando posts recientes...</p>;
  if (error) return <p>{error}</p>;
  if (recentPosts.length === 0)
    return <p>No hay posts recientes de Centro de investigación.</p>;

  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recentPosts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-20 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20"> {/* Agregado mr-20 aquí */}
                  <Link href={`/blog-details/${item.id}`}>
                    {/* Ajuste para la imagen: contenedor con tamaño fijo */}
                    <div style={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '4px' }}>
                      <img
                        src={item.image}
                        alt="blog-sidebar"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;