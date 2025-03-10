import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

// Se elimina la definición fija de "choose" ya que se extraerá desde la traducción

const Specialists = () => {
  const { t } = useTranslation();
  // Se obtiene el objeto con la información desde el JSON
  const specialistsData = t("specialists", { returnObjects: true });

  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  {specialistsData.sectionSubtitle}
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  {specialistsData.sectionTitle}
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {specialistsData.advantages.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    {/* Se usa dangerouslySetInnerHTML para renderizar los <br/> desde el JSON */}
                    <h4
                      className="tp-choose__title mb-20"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></h4>
                    <p dangerouslySetInnerHTML={{ __html: item.des }}></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>{specialistsData.footerText}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialists;
