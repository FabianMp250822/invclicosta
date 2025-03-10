// pages/_app.js

import "../styles/index.scss";
import dynamic from "next/dynamic";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

// Cargar dinámicamente el I18nextProvider solo en el cliente (sin SSR)
const I18nProvider = dynamic(() => import("../../utils/i18nProvider"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  );
}
