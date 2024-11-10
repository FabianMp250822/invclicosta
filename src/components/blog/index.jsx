import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import PostBox from "./post-box";
import Header from "@/layout/header/header";

const Blog = () => {
  return (
    <>
      <Header />
      <Banner />
      <PostBox />
      <FooterFour />
    </>
  );
};

export default Blog;
