import AppointForm from "@/components/forms/appoint-form";
import React from "react";
import { useTranslation } from "react-i18next";

const Appointment = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="appoinment-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-12 col-md-12 p-0">
              <div className="appoinment-thumb">
                <img
                  src="/assets/img/banner/contacto2.jpg"
                  alt={t("appointment.alt")}
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-12 col-md-12 p-0">
              <div className="visitor-info">
                <h2 className="appoinment-title mb-25">
                  <i className="fa-light fa-file-signature"></i> {t("appointment.title")}
                </h2>
                <p className="appoinment-description mb-20">
                  {t("appointment.description")}
                </p>
                <div className="visitor-form">
                  {/* form start */}
                  <AppointForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
