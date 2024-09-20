import Link from "next/link";
import React from "react";
import "swiper/swiper-bundle.min.css";

// brands_img array
const brands_img = [
  { img: "/assets/img/brand/1.webp", alt: "Brand 1" },
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
    <div
      className={`brand-area ${
        style_2
          ? "tp-common-area grey-bg pb-120"
          : border_style
          ? "pt-170 pb-120"
          : "pt-130 pb-130"
      } `}
    >
      <div className="container">
        <div className={`${border_style ? "brand-border pt-60 pb-60" : ""}`}>
          <div className="brand-grid">
            {brands_img.map((item, i) => (
              <div key={i} className="brand-item">
                <Link href="/">
                  <img src={item.img} alt={item.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 30px;
        }

        .brand-item {
          text-align: center;
          background: #f8f8f8;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          height: 150px; /* Ajusta el tamaño de las tarjetas */
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .brand-item img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Asegura que la imagen se ajuste sin distorsionarse */
          transition: transform 0.3s ease;
        }

        .brand-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .brand-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 1200px) {
          .brand-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 992px) {
          .brand-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .brand-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .brand-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
