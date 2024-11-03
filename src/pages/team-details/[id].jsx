import SEO from "@/components/seo";
import TeamDetails from "@/components/team/team-details/team-details"; 
import Wrapper from "@/layout/wrapper"; 

const TeamDetailsPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Detalles del Investigador" />
      <TeamDetails /> 
    </Wrapper>
  );
};

export default TeamDetailsPage;
