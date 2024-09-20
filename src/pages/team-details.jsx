import SEO from "@/components/seo";

import Wrapper from "@/layout/wrapper";
import React from "react";
import TeamDetailsArea from "./team-details/[id]";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" />
      <TeamDetailsArea />
    </Wrapper>
  );
};

export default index;
