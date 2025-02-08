// pages/blog-details/[id].jsx
import Footer from "@/layout/footer/footer";  // Asegúrate de que las rutas sean correctas
import Header from "@/layout/header/header";
import React from "react";

import PostBoxDetails from "./PostBoxDetails";
import Banner from "./banner";



const BlogDetails = () => {
  return (
    <>
      <Header />
      <Banner />
      <PostBoxDetails />
      <Footer />
    </>
  );
};

export default BlogDetails;