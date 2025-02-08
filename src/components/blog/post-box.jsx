// components/blog/PostBox.jsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "@/modals/video-popup"; // Asegúrate de que esta ruta sea correcta
import BlogSearch from "./blog-search";
import Category from "./category";
import RecentPost from "./recent-post";
import Tags from "./tags";
import { getBlogs } from "../services/firebaseService"; // Asegúrate de que la ruta sea correcta


// Configuración del slider (si lo usas)
const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".postbox-slider-button-next",
    prevEl: ".postbox-slider-button-prev",
  },
};

// Función para extraer un resumen (mejorada para evitar errores)
const getSummary = (html, maxChars = 250) => {
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

const PostBox = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        if (!data) {
          setError("No se encontraron blogs."); // Establece un mensaje de error
          setLoading(false);
          return;
        }
        const mappedBlogs = data.map((blog) => ({
          ...blog,
          user: blog.author,
          img: blog.image,
          des: blog.content,
        }));
        setBlogs(mappedBlogs);
      } catch (err) {
        console.error("Error al cargar los blogs:", err);
        setError("Error al cargar los blogs. Por favor, inténtalo de nuevo más tarde."); // Mensaje de error más descriptivo
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  if (loading) return <p>Cargando blogs...</p>;
  if (error) return <p>{error}</p>; // Muestra el mensaje de error
  if (blogs.length === 0) return <p>No hay blogs para mostrar.</p>; //Mensaje si no se encuentran blogs

  return (
    <>
      <div className="postbox-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox pr-20 pb-50">
                {blogs.map((article) => (
                  <article
                    key={article.id}
                    className="postbox__item format-image mb-60 transition-3"
                  >
                    {/* ... (resto del código para mostrar imágenes, videos, etc. -  sin cambios significativos) ... */}
                     {article.img && (
                      <div className="postbox__thumb w-img mb-35">
                        <Link href={`/blog-details/${article.id}`}>
                          <img src={article.img} alt="blog-thumbnail" />
                        </Link>
                      </div>
                    )}
                    {article.slider_img && (
                      <Swiper
                        {...setting}
                        loop={true}
                        modules={[Navigation]}
                        className="postbox__thumb postbox-active swiper-container w-img p-relative mb-35"
                      >
                        {article.slider_img.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div className="postbox__slider-item swiper-slide">
                              <img src={img.img} alt="slider_img" />
                            </div>
                          </SwiperSlide>
                        ))}
                        {/*Botones de navegacion del swiper, configuracion opcional*/}
                        <div className="postbox-nav">
                          <button className="postbox-slider-button-next">
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                          <button className="postbox-slider-button-prev">
                            <i className="fa-solid fa-chevron-left"></i>
                          </button>
                        </div>
                      </Swiper>
                    )}
                    {article.video &&
                      article.video.map((item, i) => (
                        <div
                          key={i}
                          className="postbox__thumb postbox__video p-relative w-img mb-35"
                        >
                          <Link href={`/blog-details/${article.id}`}>
                            <img src={item.video_tum} alt="" />
                          </Link>
                          <VideoPopup
                            isVideoOpen={isVideoOpen}
                            setIsVideoOpen={setIsVideoOpen}
                            videoId={item.videoId}
                          />
                          <button
                            onClick={() => setIsVideoOpen(true)}
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      ))}

                    <div className="postbox__content">
                      <div className="postbox__meta mb-40">
                        <span>
                          <Link href={`/blog-details/${article.id}`}>
                            <i className="fa-regular fa-user"></i>
                            {article.user}
                          </Link>
                        </span>
                        <span>
                          <i className="fa-regular fa-clock"></i> {article.date}
                        </span>
                         <span>
                          <Link href={`/blog-details/${article.id}`}>
                           <i className="fa-regular fa-message-dots"></i>
                            {article.comments}
                          </Link>
                        </span>
                        <span>
                           <i className="fa-light fa-eye"></i> {article.views}
                        </span>
                      </div>
                      <h3 className="postbox__title mb-40">
                        <Link href={`/blog-details/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <div className="postbox__text mb-40">
                        {/* Se muestra solo un resumen del contenido */}
                        <p>{getSummary(article.des)}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href={`/blog-details/${article.id}`} className="tp-btn">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Paginación (si la necesitas) */}
                <div className="basic-pagination">
                  {/* ... (tu código de paginación) ... */}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper pl-25 pb-50">
                <BlogSearch />
                <Category />
                <RecentPost />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBox;