import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Centro de Innovación y Desarrollo en Salud - Clínica de la Costa`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="El Centro de Innovación, Desarrollo e Inteligencia Artificial de la Clínica de la Costa se dedica a transformar la atención médica mediante el uso de inteligencia artificial aplicada a la salud, impulsando la investigación y el desarrollo clínico."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="keywords"
        content="inteligencia artificial en la salud, CIDEACC, Clínica de la Costa, investigación en salud, innovación médica, IA en medicina, salud digital, medicina personalizada"
      />
      <meta
        property="og:title"
        content="Centro de Innovación y Desarrollo en Salud - Clínica de la Costa"
      />
      <meta
        property="og:description"
        content="Transformamos la atención médica a través de soluciones innovadoras basadas en inteligencia artificial y datos clínicos."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://clinicosta.com" />
      <meta property="og:image" content="/assets/img/logo.png" />

      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
