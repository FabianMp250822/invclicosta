import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from './Brands.module.css';  // Usamos el CSS module

const brands_img = [
  { img: "/assets/img/brand/AstraZeneca-100.jpg", alt: "Brand 1" },
  { img: "/assets/img/brand/Bayer S.A.S-100.jpg", alt: "Brand 2" },
  { img: "/assets/img/brand/BRISTOL-100.jpg", alt: "Brand 3" },
  { img: "/assets/img/brand/Fortrea-100.jpg", alt: "Brand 4" },
  { img: "/assets/img/brand/GlaxoSmithKline -100.jpg", alt: "Brand 5" },
  { img: "/assets/img/brand/INTRIAL S.A.S-100.jpg", alt: "Brand 6" },
  { img: "/assets/img/brand/MSD-100.jpg", alt: "Brand 7" },
  { img: "/assets/img/brand/Novartis-100.jpg", alt: "Brand 8" },
  { img: "/assets/img/brand/Novo Nordisk-100.jpg", alt: "Brand 9" },
  { img: "/assets/img/brand/Parexel-100.jpg", alt: "Brand 10" },
  { img: "/assets/img/brand/PSI CRO -100.jpg", alt: "Brand 11" },
  { img: "/assets/img/brand/Resolution Latin-100.jpg", alt: "Brand 12" },
  { img: "/assets/img/brand/ROCHE-100.jpg", alt: "Brand 13" },
  { img: "/assets/img/brand/Sanofi -100.jpg", alt: "Brand 14" },
  { img: "/assets/img/brand/Syneos-100.jpg", alt: "Brand 15" },
  { img: "/assets/img/brand/Syneos_1-100.jpg", alt: "Brand 16" },
  { img: "/assets/img/brand/The George Washington-100.jpg", alt: "Brand 17" },
  // Agregar marcas faltantes a continuación
  { img: "/assets/img/brand/Valneva Austria GmbH-100.jpg", alt: "Brand 18" },
  { img: "/assets/img/brand/ModernaTX, Inc.-100.jpg", alt: "Brand 19" },
  { img: "/assets/img/brand/UCB Biopharma-100.jpg", alt: "Brand 20" },
  { img: "/assets/img/brand/AbbVie-100.jpg", alt: "Brand 21" },
  { img: "/assets/img/brand/Alumis Inc.-100.jpg", alt: "Brand 22" },
  { img: "/assets/img/brand/Eagle Pharmaceuticals,-100.jpg", alt: "Brand 23" },
  { img: "/assets/img/brand/Enanta Pharmaceuticals-100.jpg", alt: "Brand 24" },
  { img: "/assets/img/brand/Biogen Idec Research Limited-100.jpg", alt: "Brand 25" }
];

const Brands = ({ style_2 = false, border_style = false }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.brandArea}>
      <div className={styles.brandContainer}>
        <h2 className={styles.brandTitle}>{t("brands.title")}</h2>
        <p className={styles.brandDescription}>
          {t("brands.description")}
        </p>
        <div className={styles.brandGrid}>
          {brands_img.map((item, i) => (
            <div key={i} className={styles.brandItem}>
              <Link href="/">
                <img src={item.img} alt={item.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
