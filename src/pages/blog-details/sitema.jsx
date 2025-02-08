import React from "react";

import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import BlogDetails from "@/components/blog-details/[id]";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Centro de investigación" />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
