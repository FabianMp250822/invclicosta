import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React, { useEffect, useState } from "react";
import Banner from "./banner";

import { useRouter } from "next/router";
import { getResearchers } from "@/components/services/firebaseService"; // Servicio para obtener investigadores
import TeamDetailsArea from "./team-details-area";
import Team from "@/components/home/home-2/team";

const TeamDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Obtenemos el ID desde la URL
  const [researcher, setResearcher] = useState(null);

  useEffect(() => {
    const fetchResearcher = async () => {
      if (id) {
        const data = await getResearchers(); // Llamamos a Firebase
        const selectedResearcher = data.find((item) => item.id === id); // Filtramos por ID
        setResearcher(selectedResearcher); // Almacenamos el investigador
      }
    };

    fetchResearcher();
  }, [id]);

  if (!researcher) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <>
      <HeaderTwo />
      <Banner researcherName={researcher.informacion_personal?.nombre_completo} />
      <TeamDetailsArea researcher={researcher} /> {/* Pasamos los datos al componente */}
      <Team />
      <FooterFour />
    </>
  );
};

export default TeamDetails;
