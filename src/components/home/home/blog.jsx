import blog_data from "@/data/blog-data"; // (Si ya no se usa, se puede eliminar)
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { getBlogs } from "@/components/services/firebaseService";
import { useTranslation } from "react-i18next";

// Configuración del slider (ajustada para mayor responsividad)
const setting = {
  slidesPerView: 1, // 1 por defecto
  spaceBetween: 20, // Espacio reducido
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  navigation: {
    nextEl: ".tp-blog-n",
    prevEl: ".tp-blog-p",
  },
};

const Blog = () => {
  const { t } = useTranslation();
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
          setError(t("blog.noBlogsFound"));
          setLoading(false);
          return;
        }
        // Filtra los blogs para incluir solo los que tengan lugar: "centro"
        const filteredBlogs = data.filter((blog) => blog.lugar === "centro");
        setBlogs(filteredBlogs);
      } catch (err) {
        console.error("Error al cargar los blogs:", err);
        setError(t("blog.loadError"));
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(); // Llama a la función asíncrona
  }, [t]);

  // Función para extraer un resumen (mejorada para evitar errores)
  const getSummary = (html, maxChars = 150) => {
    if (!html) return "";
    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const plainText = doc.body.textContent || "";
      if (plainText.length > maxChars) {
        return plainText.substring(0, maxChars) + "...";
      }
      return plainText;
    } catch (error) {
      console.error("Error parsing HTML:", error);
      return "";
    }
  };

  if (loading) return <p>{t("blog.loading")}</p>;
  if (error) return <p>{error}</p>;
  if (blogs.length === 0)
    return <p>{t("blog.noBlogsCategory")}</p>;

  return (
    <>
      <section className="blog-area pt-125 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  {t("blog.sectionSubtitle")}
                </span>
                <h2 className="tp-section__title mb-65">
                  {t("blog.sectionTitle")}
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
            {blogs.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <Link href={`/blog-details/${item.id}`}>
                        <img
                          src={item.image}
                          alt={t("blog.imageAlt", { title: item.title })}
                        />
                      </Link>
                      <div className="tp-blog__date text-center">
                        <h4>{item.date}</h4>
                      </div>
                    </div>
                    <div className="tp-blog__content">
                      <span className="tp-blog__category mb-30">
                        <Link href="/blog-details">{item.category}</Link>
                      </span>
                      <h5 className="tp-blog__title mb-20">
                        <Link href={`/blog-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h5>
                      <p>{getSummary(item.content)}</p>
                      <div className="tp-blog__btn">
                        <Link href={`/blog-details/${item.id}`}>
                          {t("blog.readMore")}
                        </Link>
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
