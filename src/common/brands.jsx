import Link from "next/link";
import React from "react";
import styles from './Brands.module.css';  // Usamos el CSS module

const brands_img = [
  { img: "/assets/img/brand/11.webp", alt: "Brand 1" },
  { img: "/assets/img/brand/2.webp", alt: "Brand 2" },
  { img: "/assets/img/brand/3.webp", alt: "Brand 3" },
  { img: "/assets/img/brand/4.webp", alt: "Brand 4" },
  { img: "/assets/img/brand/5.webp", alt: "Brand 5" },
  { img: "/assets/img/brand/6.webp", alt: "Brand 6" },
  { img: "/assets/img/brand/7.webp", alt: "Brand 7" },
  { img: "/assets/img/brand/8.webp", alt: "Brand 8" },
  { img: "/assets/img/brand/9.webp", alt: "Brand 9" },
  { img: "/assets/img/brand/10.webp", alt: "Brand 10" },
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
