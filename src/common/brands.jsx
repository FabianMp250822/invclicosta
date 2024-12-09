import Link from "next/link";
import React from "react";
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
];



const Brands = ({ style_2 = false, border_style = false }) => {
  return (
    <div className={styles.brandArea}>
      <div className={styles.brandContainer}>
        <h2 className={styles.brandTitle}>Nuestros Patrocinadores</h2>
        <p className={styles.brandDescription}>
          Agradecemos el apoyo de nuestros patrocinadores, quienes hacen posible nuestras investigaciones y el avance en la atención médica.
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
