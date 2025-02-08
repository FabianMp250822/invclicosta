import React from "react";

import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import BlogDetails from "@/components/blog-details/[id]";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
