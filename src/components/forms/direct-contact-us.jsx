import React, { useState } from "react";

const studies_data = [
  {
    value: "Insuficiencia Cardíaca Congestiva",
    label: "Insuficiencia Cardíaca Congestiva"
  },
  {
    value: "Lupus Eritematoso Sistémico Activo",
    label: "Lupus Eritematoso Sistémico Activo"
  },
  {
    value: "Enfermedad de Crohn",
    label: "Enfermedad de Crohn"
  },
  {
    value: "Anemia Falciforme",
    label: "Anemia Falciforme"
  },
  {
    value: "Nefritis Lúpica",
    label: "Nefritis Lúpica"
  },
  {
    value: "Cáncer de Próstata",
    label: "Cáncer de Próstata"
  },
  {
    value: "Cáncer de Cabeza y Cuello",
    label: "Cáncer de Cabeza y Cuello"
  },
  {
    value: "Cáncer Gastroesofágico",
    label: "Cáncer Gastroesofágico"
  },
  {
    value: "Cáncer Renal",
    label: "Cáncer Renal"
  },
  {
    value: "Tumores Sólidos",
    label: "Tumores Sólidos"
  }
];

const DirectContactUs = () => {
  const [selectedStudy, setSelectedStudy] = useState("");

  const handleSelectChange = (e) => {
    setSelectedStudy(e.target.value);
  };

  return (
    <>
      <section className="support-area grey-bg pt-125 pb-130">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line right-line mb-20">
                  Inscripción al Centro de Investigación
                </span>
                <h3 className="tp-section__title mb-70">Formulario de Inscripción</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-12">
              <div className="tp-support-form text-center">
                <span>Contacta con nosotros</span>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="visitor-form__input" style={{ marginBottom: '20px' }}>
                    <input type="text" className="form-control" placeholder="Ingrese su Nombre" required />
                  </div>
                  <div className="visitor-form__input" style={{ marginBottom: '20px' }}>
                    <input type="email" className="form-control" placeholder="Ingrese su Correo" required />
                  </div>

                  {/* Campo Select con el mismo estilo que los inputs */}
                  <div className="visitor-form__input" style={{ marginBottom: '20px' }}>
                    <select
                      className="form-control"
                      value={selectedStudy}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="" disabled>
                        Seleccione un Estudio
                      </option>
                      {studies_data.map((study, index) => (
                        <option key={index} value={study.value}>
                          {study.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="visitor-form__input" style={{ marginBottom: '20px' }}>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Escribe tu mensaje"
                      required
                    ></textarea>
                  </div>

                  <div className="tp-support-form__btn">
                    <button className="tp-btn">Enviar Inscripción</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectContactUs;
