import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import PostBoxDetails from "./post-box-details";
import Header from "@/layout/header/header";

const BlogDetails = () => {
  return (
    <>
     <Header />
      <Banner />
      <PostBoxDetails />
      <FooterFour />
    </>
  );
};

export default BlogDetails;
