import React, { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import {
  Tabs,
  Tab,
  Modal,
  Button,
  TextField,
  Typography,
  IconButton,
  Grid
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ResearcherForm = ({ researcherId, onClose }) => {
  const [researcherData, setResearcherData] = useState({
    nombre_completo: "",
    nivel: "",
    foto: "",
    nacionalidad: "",
    biografia: "",
    areas_actuacion: [],
    alianzas_cooperacion: { internacionales: [], nacionales: [] },
    experiencia_profesional: [],
    formacion_academica: [],
    idiomas: [],
    reconocimientos: [],
    produccion_bibliografica: [],
    eventos_cientificos: [],
    identificadores_de_autor: { autor_id_scopus: "" },
    oferta_productos_servicios: { titulo: "", texto: "" },
    pasantes_externos: { internacionales: "", nacionales: "" },
    proximos_eventos: {
      fechaEvento: "",
      horaEvento: "",
      lugarEvento: "",
      nombreEvento: ""
    },
    redes_sociales_academicas: { google_scholar: "", researchgate: "" },
    lineas_investigacion: [],
    trabajos_dirigidos_tutorias: []
  });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (researcherId) {
      // Cargar datos del investigador si se va a actualizar uno existente
      // Ejemplo: cargar datos de Firestore y actualizar el estado
    }
  }, [researcherId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResearcherData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDateChange = (name, date, index, type) => {
    setResearcherData((prevData) => {
      const updatedList = [...prevData[type]];
      updatedList[index][name] = date;
      return {
        ...prevData,
        [type]: updatedList
      };
    });
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSave = async () => {
    try {
      if (researcherId) {
        // Actualizar un investigador existente
        await updateDoc(doc(db, "researchers", researcherId), researcherData);
      } else {
        // Crear un nuevo investigador
        const newDocRef = doc(
          db,
          "researchers",
          researcherData.nombre_completo
        );
        await setDoc(newDocRef, researcherData);
      }
      onClose();
    } catch (error) {
      console.error("Error al guardar el investigador: ", error);
    }
  };

  const handleNextTab = () => {
    if (activeTab < 8) {
      setActiveTab((prevTab) => prevTab + 1);
    }
  };
  const addIdioma = () => {
    setResearcherData((prevData) => ({
      ...prevData,
      idiomas: [
        ...prevData.idiomas,
        { idioma: "", entiende: "", escribe: "", habla: "", lee: "" }
      ]
    }));
  };
  const addExperienciaProfesional = () => {
    setResearcherData((prevData) => ({
      ...prevData,
      experiencia_profesional: [
        ...prevData.experiencia_profesional,
        { dedicacion: "", fecha_fin: null, fecha_inicio: null, institucion: "" }
      ]
    }));
  };

  const addFormacionAcademica = () => {
    setResearcherData((prevData) => ({
      ...prevData,
      formacion_academica: [
        ...prevData.formacion_academica,
        {
          fecha_fin: null,
          fecha_inicio: null,
          institucion: "",
          lugar: "",
          nivel_academico: "",
          programa: ""
        }
      ]
    }));
  };
  const addReconocimiento = () => {
    setResearcherData((prevData) => ({
      ...prevData,
      reconocimientos: [
        ...prevData.reconocimientos,
        { fecha: null, nombre_reconocimiento: "" }
      ]
    }));
  };
  return (
    <Modal open={true} onClose={onClose}>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "1400px",
          margin: "50px auto",
          height: "90vh",
          overflowY: "auto"
        }}
      >
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          {researcherId
            ? `Actualizar Investigador: ${researcherData.nombre_completo}`
            : "Agregar Nuevo Investigador"}
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          style={{ marginBottom: "20px" }}
        >
          <Tab label="Información Personal" />
          <Tab label="Experiencia" />
          <Tab label="Formación Académica" />
          <Tab label="Idiomas" />
          <Tab label="Reconocimientos" />
          <Tab label="Producción Bibliográfica" />
          <Tab label="Eventos Científicos" />
          <Tab label="Alianzas y Cooperación" />
          <Tab label="Áreas de Actuación" />
          <Tab label="Líneas de Investigación" />
          <Tab label="Trabajos Dirigidos y Tutorías" />
          <Tab label="Otros" />
        </Tabs>
        <div style={{ marginTop: "20px" }}>
          {activeTab === 0 && (
            <div>
              <TextField
                fullWidth
                name="nombre_completo"
                label="Nombre Completo"
                value={researcherData.nombre_completo}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="nivel"
                label="Nivel"
                value={researcherData.nivel}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="foto"
                label="URL de la Foto"
                value={researcherData.foto}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="nacionalidad"
                label="Nacionalidad"
                value={researcherData.nacionalidad}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="biografia"
                label="Biografía"
                value={researcherData.biografia}
                onChange={handleInputChange}
                margin="normal"
                multiline
                rows={4}
              />
            </div>
          )}
          {activeTab === 1 && (
            <div>
              {researcherData.experiencia_profesional.map((exp, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <TextField
                    fullWidth
                    type="number"
                    name={`experiencia_profesional[${index}].dedicacion`}
                    label="Dedicación (horas por semana)"
                    value={exp.dedicacion}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value <= 48) {
                        handleInputChange({
                          target: {
                            name: `experiencia_profesional.${index}.dedicacion`,
                            value
                          }
                        });
                      }
                    }}
                    margin="normal"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <DatePicker
                        label="Fecha Inicio"
                        value={exp.fecha_inicio}
                        onChange={(date) =>
                          handleDateChange(
                            "fecha_inicio",
                            date,
                            index,
                            "experiencia_profesional"
                          )
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth margin="normal" />
                        )}
                      />
                      <DatePicker
                        label="Fecha Fin"
                        value={exp.fecha_fin}
                        onChange={(date) =>
                          handleDateChange(
                            "fecha_fin",
                            date,
                            index,
                            "experiencia_profesional"
                          )
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth margin="normal" />
                        )}
                      />
                    </div>
                  </LocalizationProvider>
                  <TextField
                    fullWidth
                    name={`experiencia_profesional[${index}].institucion`}
                    label="Institución"
                    value={exp.institucion}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `experiencia_profesional.${index}.institucion`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                </div>
              ))}
              <IconButton onClick={addExperienciaProfesional} color="primary">
                <AddIcon />
              </IconButton>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              {researcherData.formacion_academica.map((formacion, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div style={{ display: "flex", gap: "20px" }}>
                      <DatePicker
                        label="Fecha Inicio"
                        value={formacion.fecha_inicio}
                        onChange={(date) =>
                          handleDateChange(
                            "fecha_inicio",
                            date,
                            index,
                            "formacion_academica"
                          )
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth margin="normal" />
                        )}
                      />
                      <DatePicker
                        label="Fecha Fin"
                        value={formacion.fecha_fin}
                        onChange={(date) =>
                          handleDateChange(
                            "fecha_fin",
                            date,
                            index,
                            "formacion_academica"
                          )
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth margin="normal" />
                        )}
                      />
                    </div>
                  </LocalizationProvider>
                  <TextField
                    fullWidth
                    name={`formacion_academica[${index}].institucion`}
                    label="Institución"
                    value={formacion.institucion}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `formacion_academica.${index}.institucion`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`formacion_academica[${index}].lugar`}
                    label="Lugar"
                    value={formacion.lugar}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `formacion_academica.${index}.lugar`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`formacion_academica[${index}].nivel_academico`}
                    label="Nivel Académico"
                    value={formacion.nivel_academico}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `formacion_academica.${index}.nivel_academico`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`formacion_academica[${index}].programa`}
                    label="Programa"
                    value={formacion.programa}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `formacion_academica.${index}.programa`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                </div>
              ))}
              <IconButton onClick={addFormacionAcademica} color="primary">
                <AddIcon />
              </IconButton>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              {researcherData.idiomas.map((idioma, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <TextField
                    fullWidth
                    name={`idiomas[${index}].idioma`}
                    label="Idioma"
                    value={idioma.idioma}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `idiomas.${index}.idioma`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas[${index}].entiende`}
                    label="Nivel de Comprensión"
                    value={idioma.entiende}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `idiomas.${index}.entiende`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas[${index}].escribe`}
                    label="Nivel de Escritura"
                    value={idioma.escribe}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `idiomas.${index}.escribe`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas[${index}].habla`}
                    label="Nivel de Habla"
                    value={idioma.habla}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `idiomas.${index}.habla`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas[${index}].lee`}
                    label="Nivel de Lectura"
                    value={idioma.lee}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `idiomas.${index}.lee`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                </div>
              ))}
              <IconButton onClick={addIdioma} color="primary">
                <AddIcon />
              </IconButton>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              {researcherData.reconocimientos.map((reconocimiento, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Fecha del Reconocimiento"
                      value={reconocimiento.fecha}
                      onChange={(date) =>
                        handleDateChange(
                          "fecha",
                          date,
                          index,
                          "reconocimientos"
                        )
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth margin="normal" />
                      )}
                    />
                  </LocalizationProvider>
                  <TextField
                    fullWidth
                    name={`reconocimientos[${index}].nombre_reconocimiento`}
                    label="Nombre del Reconocimiento"
                    value={reconocimiento.nombre_reconocimiento}
                    onChange={(e) =>
                      handleInputChange({
                        target: {
                          name: `reconocimientos.${index}.nombre_reconocimiento`,
                          value: e.target.value
                        }
                      })
                    }
                    margin="normal"
                  />
                </div>
              ))}
              <IconButton onClick={addReconocimiento} color="primary">
                <AddIcon />
              </IconButton>
            </div>
          )}
          {activeTab === 5 && (
            <div>
              {researcherData.produccion_bibliografica.map(
                (produccion, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].doi`}
                          label="DOI"
                          value={produccion.doi}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.doi`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].editorial`}
                          label="Editorial"
                          value={produccion.editorial}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.editorial`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Fecha"
                            value={produccion.fecha}
                            onChange={(date) =>
                              handleDateChange(
                                "fecha",
                                date,
                                index,
                                "produccion_bibliografica"
                              )
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                margin="normal"
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].issn`}
                          label="ISSN"
                          value={produccion.issn}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.issn`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].numero`}
                          label="Número"
                          value={produccion.numero}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.numero`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].paginas`}
                          label="Páginas"
                          value={produccion.paginas}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.paginas`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].revista`}
                          label="Revista"
                          value={produccion.revista}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.revista`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].tipo_produccion`}
                          label="Tipo de Producción"
                          value={produccion.tipo_produccion}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.tipo_produccion`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].titulo_articulo`}
                          label="Título del Artículo"
                          value={produccion.titulo_articulo}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.titulo_articulo`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].url_articulo`}
                          label="URL del Artículo"
                          value={produccion.url_articulo}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.url_articulo`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].url_drive`}
                          label="URL de Drive"
                          value={produccion.url_drive}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.url_drive`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name={`produccion_bibliografica[${index}].volumen`}
                          label="Volumen"
                          value={produccion.volumen}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `produccion_bibliografica.${index}.volumen`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                    </Grid>
                  </div>
                )
              )}
              <IconButton
                onClick={() =>
                  setResearcherData((prevData) => ({
                    ...prevData,
                    produccion_bibliografica: [
                      ...prevData.produccion_bibliografica,
                      {
                        doi: "",
                        editorial: "",
                        fecha: null,
                        issn: "",
                        numero: "",
                        paginas: "",
                        revista: "",
                        tipo_produccion: "",
                        titulo_articulo: "",
                        url_articulo: "",
                        url_drive: "",
                        volumen: ""
                      }
                    ]
                  }))
                }
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </div>
          )}

          {activeTab === 6 && (
            <div>
              {researcherData.eventos_cientificos.map((evento, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`eventos_cientificos[${index}].ambito`}
                        label="Ámbito"
                        value={evento.ambito}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `eventos_cientificos.${index}.ambito`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Fecha Inicio"
                          value={evento.fecha_inicio}
                          onChange={(date) =>
                            handleDateChange(
                              "fecha_inicio",
                              date,
                              index,
                              "eventos_cientificos"
                            )
                          }
                          renderInput={(params) => (
                            <TextField {...params} fullWidth margin="normal" />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Fecha Fin"
                          value={evento.fecha_fin}
                          onChange={(date) =>
                            handleDateChange(
                              "fecha_fin",
                              date,
                              index,
                              "eventos_cientificos"
                            )
                          }
                          renderInput={(params) => (
                            <TextField {...params} fullWidth margin="normal" />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`eventos_cientificos[${index}].lugar`}
                        label="Lugar"
                        value={evento.lugar}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `eventos_cientificos.${index}.lugar`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`eventos_cientificos[${index}].nombre_evento`}
                        label="Nombre del Evento"
                        value={evento.nombre_evento}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `eventos_cientificos.${index}.nombre_evento`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>

                    {/* Instituciones Asociadas */}
                    {evento.instituciones_asociadas.map(
                      (institucion, instIndex) => (
                        <Grid item xs={12} key={instIndex}>
                          <TextField
                            fullWidth
                            name={`eventos_cientificos[${index}].instituciones_asociadas[${instIndex}].nombre_institucion`}
                            label="Nombre de la Institución"
                            value={institucion.nombre_institucion}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `eventos_cientificos.${index}.instituciones_asociadas.${instIndex}.nombre_institucion`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                          <TextField
                            fullWidth
                            name={`eventos_cientificos[${index}].instituciones_asociadas[${instIndex}].tipo_producto`}
                            label="Tipo de Producto"
                            value={institucion.tipo_producto}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `eventos_cientificos.${index}.instituciones_asociadas.${instIndex}.tipo_producto`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                        </Grid>
                      )
                    )}

                    {/* Participantes */}
                    {evento.participantes.map((participante, partIndex) => (
                      <Grid item xs={12} key={partIndex}>
                        <TextField
                          fullWidth
                          name={`eventos_cientificos[${index}].participantes[${partIndex}].nombre`}
                          label="Nombre del Participante"
                          value={participante.nombre}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `eventos_cientificos.${index}.participantes.${partIndex}.nombre`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                        <TextField
                          fullWidth
                          name={`eventos_cientificos[${index}].participantes[${partIndex}].rol_evento`}
                          label="Rol en el Evento"
                          value={participante.rol_evento}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `eventos_cientificos.${index}.participantes.${partIndex}.rol_evento`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                    ))}

                    {/* Productos Asociados */}
                    {evento.productos_asociados &&
                      evento.productos_asociados.map((producto, prodIndex) => (
                        <Grid item xs={12} key={prodIndex}>
                          <TextField
                            fullWidth
                            name={`eventos_cientificos[${index}].productos_asociados[${prodIndex}].nombre_producto`}
                            label="Nombre del Producto"
                            value={producto.nombre_producto}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `eventos_cientificos.${index}.productos_asociados.${prodIndex}.nombre_producto`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                          <TextField
                            fullWidth
                            name={`eventos_cientificos[${index}].productos_asociados[${prodIndex}].tipo_producto`}
                            label="Tipo de Producto"
                            value={producto.tipo_producto}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `eventos_cientificos.${index}.productos_asociados.${prodIndex}.tipo_producto`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                          <TextField
                            fullWidth
                            name={`eventos_cientificos[${index}].productos_asociados[${prodIndex}].tipo_evento`}
                            label="Tipo de Evento"
                            value={producto.tipo_evento}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `eventos_cientificos.${index}.productos_asociados.${prodIndex}.tipo_evento`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                        </Grid>
                      ))}
                  </Grid>
                </div>
              ))}
              <IconButton
                onClick={() =>
                  setResearcherData((prevData) => ({
                    ...prevData,
                    eventos_cientificos: [
                      ...prevData.eventos_cientificos,
                      {
                        ambito: "",
                        fecha_inicio: null,
                        fecha_fin: null,
                        lugar: "",
                        nombre_evento: "",
                        instituciones_asociadas: [
                          { nombre_institucion: "", tipo_producto: "" }
                        ],
                        participantes: [{ nombre: "", rol_evento: "" }],
                        productos_asociados: [
                          {
                            nombre_producto: "",
                            tipo_producto: "",
                            tipo_evento: ""
                          }
                        ]
                      }
                    ]
                  }))
                }
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </div>
          )}

          {activeTab === 7 && (
            <div>
              <Grid container spacing={2}>
                {/* Alianzas Nacionales */}
                <Grid item xs={12}>
                  <Typography variant="h6">Alianzas Nacionales</Typography>
                  {researcherData.alianzas_cooperacion.nacionales.map(
                    (alianza, index) => (
                      <Grid
                        container
                        spacing={2}
                        key={index}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name={`alianzas_cooperacion.nacionales[${index}]`}
                            label="Nombre de la Alianza Nacional"
                            value={alianza}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `alianzas_cooperacion.nacionales.${index}`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                        </Grid>
                      </Grid>
                    )
                  )}
                  <IconButton
                    onClick={() =>
                      setResearcherData((prevData) => ({
                        ...prevData,
                        alianzas_cooperacion: {
                          ...prevData.alianzas_cooperacion,
                          nacionales: [
                            ...prevData.alianzas_cooperacion.nacionales,
                            ""
                          ]
                        }
                      }))
                    }
                    color="primary"
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>

                {/* Alianzas Internacionales */}
                <Grid item xs={12}>
                  <Typography variant="h6">Alianzas Internacionales</Typography>
                  {researcherData.alianzas_cooperacion.internacionales.map(
                    (alianza, index) => (
                      <Grid
                        container
                        spacing={2}
                        key={index}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name={`alianzas_cooperacion.internacionales[${index}]`}
                            label="Nombre de la Alianza Internacional"
                            value={alianza}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  name: `alianzas_cooperacion.internacionales.${index}`,
                                  value: e.target.value
                                }
                              })
                            }
                            margin="normal"
                          />
                        </Grid>
                      </Grid>
                    )
                  )}
                  <IconButton
                    onClick={() =>
                      setResearcherData((prevData) => ({
                        ...prevData,
                        alianzas_cooperacion: {
                          ...prevData.alianzas_cooperacion,
                          internacionales: [
                            ...prevData.alianzas_cooperacion.internacionales,
                            ""
                          ]
                        }
                      }))
                    }
                    color="primary"
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          )}
          {activeTab === 8 && (
            <div>
              <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Áreas de Actuación
              </Typography>
              {researcherData.areas_actuacion.map((area, index) => (
                <Grid
                  container
                  spacing={2}
                  key={index}
                  style={{ marginBottom: "20px" }}
                >
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name={`areas_actuacion[${index}].area`}
                      label="Área de Actuación"
                      value={area.area}
                      onChange={(e) =>
                        handleInputChange({
                          target: {
                            name: `areas_actuacion.${index}.area`,
                            value: e.target.value
                          }
                        })
                      }
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              ))}
              <IconButton
                onClick={() =>
                  setResearcherData((prevData) => ({
                    ...prevData,
                    areas_actuacion: [...prevData.areas_actuacion, { area: "" }]
                  }))
                }
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </div>
          )}

          {activeTab === 9 && (
            <div>
              <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Líneas de Investigación
              </Typography>
              {(researcherData.lineas_investigacion || []).map(
                (linea, index) => (
                  <Grid
                    container
                    spacing={2}
                    key={index}
                    style={{ marginBottom: "20px" }}
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`lineas_investigacion[${index}].linea_investigacion`}
                        label="Línea de Investigación"
                        value={linea.linea_investigacion}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `lineas_investigacion.${index}.linea_investigacion`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`lineas_investigacion[${index}].activa`}
                        label="Activa"
                        value={linea.activa}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `lineas_investigacion.${index}.activa`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                )
              )}
              <IconButton
                onClick={() =>
                  setResearcherData((prevData) => ({
                    ...prevData,
                    lineas_investigacion: [
                      ...prevData.lineas_investigacion,
                      { linea_investigacion: "", activa: "" }
                    ]
                  }))
                }
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </div>
          )}

          {activeTab === 10 && (
            <div>
              <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Trabajos Dirigidos y Tutorías
              </Typography>
              {researcherData.trabajos_dirigidos_tutorias?.map(
                (trabajo, index) => (
                  <Grid
                    container
                    spacing={2}
                    key={index}
                    style={{ marginBottom: "20px" }}
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`trabajos_dirigidos_tutorias[${index}].especialidad`}
                        label="Especialidad"
                        value={trabajo.especialidad}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `trabajos_dirigidos_tutorias.${index}.especialidad`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`trabajos_dirigidos_tutorias[${index}].estado`}
                        label="Estado"
                        value={trabajo.estado}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `trabajos_dirigidos_tutorias.${index}.estado`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Fecha"
                          value={trabajo.fecha}
                          onChange={(date) =>
                            handleDateChange(
                              "fecha",
                              date,
                              index,
                              "trabajos_dirigidos_tutorias"
                            )
                          }
                          renderInput={(params) => (
                            <TextField {...params} fullWidth margin="normal" />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name={`trabajos_dirigidos_tutorias[${index}].institucion`}
                        label="Institución"
                        value={trabajo.institucion}
                        onChange={(e) =>
                          handleInputChange({
                            target: {
                              name: `trabajos_dirigidos_tutorias.${index}.institucion`,
                              value: e.target.value
                            }
                          })
                        }
                        margin="normal"
                      />
                    </Grid>

                    {/* Orientados */}
                    {trabajo.orientados.map((orientado, orientadoIndex) => (
                      <Grid item xs={12} key={orientadoIndex}>
                        <TextField
                          fullWidth
                          name={`trabajos_dirigidos_tutorias[${index}].orientados[${orientadoIndex}].rol`}
                          label="Rol"
                          value={orientado.rol}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `trabajos_dirigidos_tutorias.${index}.orientados.${orientadoIndex}.rol`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                        <TextField
                          fullWidth
                          name={`trabajos_dirigidos_tutorias[${index}].orientados[${orientadoIndex}].tipo`}
                          label="Tipo"
                          value={orientado.tipo}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `trabajos_dirigidos_tutorias.${index}.orientados.${orientadoIndex}.tipo`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                        <TextField
                          fullWidth
                          name={`trabajos_dirigidos_tutorias[${index}].orientados[${orientadoIndex}].titulo`}
                          label="Título"
                          value={orientado.titulo}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: `trabajos_dirigidos_tutorias.${index}.orientados.${orientadoIndex}.titulo`,
                                value: e.target.value
                              }
                            })
                          }
                          margin="normal"
                        />
                      </Grid>
                    ))}

                    {/* Tutores */}
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        style={{ marginTop: "20px" }}
                      >
                        Tutores
                      </Typography>
                      {trabajo.tutores.map((tutor, tutorIndex) => (
                        <Grid
                          container
                          spacing={2}
                          key={tutorIndex}
                          style={{ marginBottom: "10px" }}
                        >
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              name={`trabajos_dirigidos_tutorias[${index}].tutores[${tutorIndex}]`}
                              label={`Nombre del Tutor ${tutorIndex + 1}`}
                              value={tutor}
                              onChange={(e) =>
                                handleInputChange({
                                  target: {
                                    name: `trabajos_dirigidos_tutorias.${index}.tutores.${tutorIndex}`,
                                    value: e.target.value
                                  }
                                })
                              }
                              margin="normal"
                            />
                          </Grid>
                        </Grid>
                      ))}
                      <IconButton
                        onClick={() =>
                          setResearcherData((prevData) => {
                            const updatedTrabajos = [
                              ...prevData.trabajos_dirigidos_tutorias
                            ];
                            updatedTrabajos[index] = {
                              ...updatedTrabajos[index],
                              tutores: [...updatedTrabajos[index].tutores, ""]
                            };
                            return {
                              ...prevData,
                              trabajos_dirigidos_tutorias: updatedTrabajos
                            };
                          })
                        }
                        color="primary"
                      >
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                )
              )}
              <IconButton
                onClick={() =>
                  setResearcherData((prevData) => ({
                    ...prevData,
                    trabajos_dirigidos_tutorias: [
                      ...prevData.trabajos_dirigidos_tutorias,
                      {
                        especialidad: "",
                        estado: "",
                        fecha: null,
                        institucion: "",
                        orientados: [
                          {
                            rol: "",
                            tipo: "",
                            titulo: ""
                          }
                        ],
                        tutores: [""]
                      }
                    ]
                  }))
                }
                color="primary"
              >
                <AddIcon />
              </IconButton>
            </div>
          )}
          {activeTab === 11 && (
            <div>
              {/* Otros campos */}
              <TextField
                fullWidth
                name="identificadores_de_autor.autor_id_scopus"
                label="Autor ID Scopus"
                value={researcherData.identificadores_de_autor.autor_id_scopus}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="oferta_productos_servicios.titulo"
                label="Título de Oferta de Productos/Servicios"
                value={researcherData.oferta_productos_servicios.titulo}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="oferta_productos_servicios.texto"
                label="Descripción de Oferta de Productos/Servicios"
                value={researcherData.oferta_productos_servicios.texto}
                onChange={handleInputChange}
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                fullWidth
                name="pasantes_externos.internacionales"
                label="Pasantes Externos Internacionales"
                value={researcherData.pasantes_externos.internacionales}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="pasantes_externos.nacionales"
                label="Pasantes Externos Nacionales"
                value={researcherData.pasantes_externos.nacionales}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="proximos_eventos.fechaEvento"
                label="Fecha del Próximo Evento"
                value={researcherData.proximos_eventos.fechaEvento}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="proximos_eventos.horaEvento"
                label="Hora del Próximo Evento"
                value={researcherData.proximos_eventos.horaEvento}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="proximos_eventos.lugarEvento"
                label="Lugar del Próximo Evento"
                value={researcherData.proximos_eventos.lugarEvento}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="proximos_eventos.nombreEvento"
                label="Nombre del Próximo Evento"
                value={researcherData.proximos_eventos.nombreEvento}
                onChange={handleInputChange}
                margin="normal"
              />
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px"
          }}
        >
          <Button onClick={handleNextTab} variant="contained" color="primary">
            Continuar
          </Button>
          <Button onClick={handleSave} variant="contained" color="secondary">
            Guardar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ResearcherForm;
