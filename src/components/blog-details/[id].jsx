// pages/blog-details/[id].jsx
import React from "react";
import Head from "next/head";
import { getBlogById } from "@/components/services/firebaseService.js";

// Layout y componentes
import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import Banner from "@/components/blog-details/banner";
import PostBoxDetails from "@/components/blog-details/PostBoxDetails";

// Ejemplo con SSR (en cada request)
export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const blog = await getBlogById(id);

    if (!blog) {
      return { notFound: true };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error al obtener el blog:", error);
    return { notFound: true };
  }
}

// Componente principal
const BlogDetails = ({ blog }) => {
  // Si no existiese blog.excerpt, podemos usar blog.title o un resumen corto
  const excerpt = blog.excerpt || "Un breve resumen de tu artículo...";

  // Arma la URL canónica si tu dominio fuese, por ejemplo, https://misitio.com
  // Útil para SEO y redes sociales
  const canonicalUrl = `https://tudominio.com/blog-details/${blog.id}`;

  return (
    <>
      {/* Head para SEO y redes sociales */}
      <Head>
        {/* Título que aparece en la pestaña del navegador */}
        <title>{blog.title} | Clínica de la Costa</title>

        {/* Meta Description (SEO) */}
        <meta name="description" content={excerpt} />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Nombre de tu sitio, si deseas mostrarlo en Open Graph */}
        <meta property="og:site_name" content="Clínica de la Costa" />

        {/* Twitter Card (opcional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={blog.image} />

        {/* Canonical para SEO */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Header />
      
      {/* Banner dinámico - muestra el título del blog */}
      <Banner title={blog.title} />

      {/* Contenido principal del blog */}
      <PostBoxDetails blog={blog} />

      <Footer />
    </>
  );
};

export default BlogDetails;
