import blog_data from "@/data/blog-data"; //  Importa desde tu archivo de datos local
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { getBlogs } from "@/components/services/firebaseService";



// Configuración del slider (ajustada para mayor responsividad)
const setting = {
    slidesPerView: 1, // 1 por defecto
    spaceBetween: 20,  // Espacio reducido
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    breakpoints: {
      // Ajusta los breakpoints para que sean más comunes y se adapten mejor
      640: { // sm: en Tailwind
        slidesPerView: 1,
      },
      768: { // md: en Tailwind
        slidesPerView: 2,
      },
      1024: { // lg: en Tailwind
        slidesPerView: 3,
      },
      // No necesitas 1200 (xl:) si ya tienes 1024
    },
    navigation: {
      nextEl: ".tp-blog-n",
      prevEl: ".tp-blog-p",
    },
  };
  

const Blog = () => {
  const [isLoop, setIsLoop] = useState(false);
  const [blogs, setBlogs] = useState([]); // Estado para almacenar los blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoop(true);
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs(); // Obtiene *todos* los blogs de Firebase
        if (!data) {
          setError("No se encontraron blogs.");
          setLoading(false);
          return;
        }
        // Filtra los blogs para incluir solo los que tengan lugar: "Centro"
        const filteredBlogs = data.filter((blog) => blog.lugar === "centro");
        setBlogs(filteredBlogs);
      } catch (err) {
        console.error("Error al cargar los blogs:", err);
        setError("Error al cargar blogs. Intenta de nuevo.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(); // Llama a la función asíncrona
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

  if (loading) return <p>Cargando blogs...</p>; // Muestra mensaje de carga
  if (error) return <p>{error}</p> // Muestra el error
  if (blogs.length === 0)
    return <p>No hay blogs en la categoría &quot;Centro&quot;.</p>; //Mensaje si no hay blogs con el filtro aplicado.


  return (
    <>
      <section className="blog-area pt-125 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Nuestras Últimas Investigaciones
                </span>
                <h2 className="tp-section__title mb-65">
                  Artículos de Investigación
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-arrow d-flex align-items-center">
                <div className="tp-blog-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-blog-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            {...setting}
            loop={isLoop}
            modules={[Navigation]}
            className="swiper-container tp-blog-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            {blogs.map((item) => ( // Usa el estado 'blogs'
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <Link href={`/blog-details/${item.id}`}>
                        <img
                          src={item.image} // Usa item.image
                          alt={`Imagen del artículo de investigación: ${item.title}`} // Usa item.title
                        />
                      </Link>
                      <div className="tp-blog__date text-center">
                        <h4>{item.date}</h4> {/*Usa item.date*/}
                      </div>
                    </div>
                    <div className="tp-blog__content">
                      <span className="tp-blog__category mb-30">
                        <Link href="/blog-details">{item.category}</Link> {/*Usa item.category*/}
                      </span>
                      <h5 className="tp-blog__title mb-20">
                        <Link href={`/blog-details/${item.id}`}>{item.title}</Link> {/*Usa item.title*/}
                      </h5>
                       <p>{getSummary(item.content)}</p> {/*Usa item.content*/}
                      <div className="tp-blog__btn">
                        <Link href={`/blog-details/${item.id}`}>Leer más</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
