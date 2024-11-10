import React, { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore"; 
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
  console.log("ResearcherForm: researcherId", researcherId);
  const [researcherData, setResearcherData] = useState({
    informacion_personal: {
      nombre_completo: "",
      nivel: "",
      foto: "",
      nacionalidad: "",
      biografia: "",
    },
    
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
      nombreEvento: "",
    },
    redes_sociales_academicas: { google_scholar: "", researchgate: "" },
    lineas_investigacion: [],
    trabajos_dirigidos_tutorias: [],
  });
  console.log("ResearcherForm: researcherData", researcherData);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchResearcher = async () => {
      if (researcherId) {
        try {
          const researcherRef = doc(db, "researchers", researcherId);
          const docSnap = await getDoc(researcherRef);
          if (docSnap.exists()) {
            setResearcherData(docSnap.data());
          } else {
            console.log("¡No existe tal documento!");
          }
        } catch (error) {
          console.error("Error al cargar los datos del investigador: ", error);
        }
      }
    };
  
    fetchResearcher();
  }, [researcherId]);

  const setNestedValue = (obj, path, value) => {
    const keys = path.split('.');
    let current = obj;
    keys.forEach((key, index) => {
      const isLastKey = index === keys.length - 1;
      const nextKey = keys[index + 1];
  
      // Convert key to number if it's an array index
      if (!isNaN(key)) {
        key = parseInt(key);
      }
  
      if (isLastKey) {
        current[key] = value;
      } else {
        if (current[key] === undefined) {
          // Determine if next key is array index
          if (!isNaN(nextKey)) {
            current[key] = [];
          } else {
            current[key] = {};
          }
        }
        current = current[key];
      }
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setResearcherData((prevData) => {
      const newData = { ...prevData };
      setNestedValue(newData, name, value);
      return newData;
    });
  };
  

  const handleDateChange = (name, date, index, type) => {
    setResearcherData((prevData) => {
      // Asegúrate de que prevData[type] existe y es un array
      const updatedList = prevData[type] ? [...prevData[type]] : [];
      
      // Asegúrate de que el índice existe en updatedList
      if (!updatedList[index]) {
        updatedList[index] = {};
      }
      
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

  const addReconocimiento = () => {
    setResearcherData((prevData) => ({
      ...prevData,
      reconocimientos: [
        ...prevData.reconocimientos,
        { fecha: null, nombre_reconocimiento: "" }
      ]
    }));
  };
  const handleSave = async () => {
    try {
      // Completar los campos vacíos con "No aplica" si están vacíos o undefined
      const sanitizedData = JSON.parse(JSON.stringify(researcherData, (key, value) => {
        return value === "" || value === null || value === undefined ? "No aplica" : value;
      }));
  
      if (researcherId) {
        // Actualizar un investigador existente
        await updateDoc(doc(db, "researchers", researcherId), sanitizedData);
      } else {
        // Verificar si nombre_completo está vacío antes de crear un nuevo investigador
        const nombreCompleto = sanitizedData.informacion_personal.nombre_completo || "Investigador Sin Nombre";
        const newDocRef = doc(db, "researchers", nombreCompleto);
        
        await setDoc(newDocRef, sanitizedData);
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
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          {researcherId
            ? `Actualizar Investigador: ${researcherData.informacion_personal.nombre_completo}`
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
      name="informacion_personal.nombre_completo"
      label="Nombre Completo"
      value={researcherData.informacion_personal.nombre_completo}
      onChange={handleInputChange}
      margin="normal"
    />
    <TextField
      fullWidth
      name="informacion_personal.nivel"
      label="Nivel"
      value={researcherData.nivel}
      onChange={handleInputChange}
      margin="normal"
    />
    <TextField
      fullWidth
      name="informacion_personal.foto"
      label="URL de la Foto"
      value={researcherData.informacion_personal.foto}
      onChange={handleInputChange}
      margin="normal"
    />
    <TextField
      fullWidth
      name="informacion_personal.nacionalidad"
      label="Nacionalidad"
      value={researcherData.informacion_personal.nacionalidad}
      onChange={handleInputChange}
      margin="normal"
    />
    <TextField
  fullWidth
  name="biografia.texto" // Cambiado para acceder al campo de texto en biografía
  label="Biografía"
  value={researcherData.biografia?.texto || ""} // Accede a biografia.texto
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
          name={`experiencia_profesional.${index}.dedicacion`}
          label="Dedicación"
          value={exp.dedicacion || ""}
          onChange={handleInputChange}
          margin="normal"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div style={{ display: "flex", gap: "20px" }}>
            <DatePicker
              label="Fecha Inicio"
              value={exp.fecha_inicio ? new Date(exp.fecha_inicio) : null}
              onChange={(date) =>
                handleDateChange(`experiencia_profesional.${index}.fecha_inicio`, date)
              }
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
            <DatePicker
              label="Fecha Fin"
              value={exp.fecha_fin ? new Date(exp.fecha_fin) : null}
              onChange={(date) =>
                handleDateChange(`experiencia_profesional.${index}.fecha_fin`, date)
              }
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
          </div>
        </LocalizationProvider>
        <TextField
          fullWidth
          name={`experiencia_profesional.${index}.institucion`}
          label="Institución"
          value={exp.institucion || ""}
          onChange={handleInputChange}
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
              value={formacion.fecha_inicio ? new Date(formacion.fecha_inicio) : null}
              onChange={(date) =>
                handleDateChange(`formacion_academica.${index}.fecha_inicio`, date)
              }
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
            <DatePicker
              label="Fecha Fin"
              value={formacion.fecha_fin ? new Date(formacion.fecha_fin) : null}
              onChange={(date) =>
                handleDateChange(`formacion_academica.${index}.fecha_fin`, date)
              }
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
            />
          </div>
        </LocalizationProvider>
        <TextField
          fullWidth
          name={`formacion_academica.${index}.institucion`}
          label="Institución"
          value={formacion.institucion || ""}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name={`formacion_academica.${index}.lugar`}
          label="Lugar"
          value={formacion.lugar || ""}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name={`formacion_academica.${index}.nivel_academico`}
          label="Nivel Académico"
          value={formacion.nivel_academico || ""}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name={`formacion_academica.${index}.programa`}
          label="Programa"
          value={formacion.programa || ""}
          onChange={handleInputChange}
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
                    name={`idiomas.${index}.idioma`}
                    label="Idioma"
                    value={idioma.idioma}
                    onChange={handleInputChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas.${index}.entiende`}
                    label="Nivel de Comprensión"
                    value={idioma.entiende}
                    onChange={handleInputChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas.${index}.escribe`}
                    label="Nivel de Escritura"
                    value={idioma.escribe}
                    onChange={handleInputChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas.${index}.habla`}
                    label="Nivel de Habla"
                    value={idioma.habla}
                    onChange={handleInputChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    name={`idiomas.${index}.lee`}
                    label="Nivel de Lectura"
                    value={idioma.lee}
                    onChange={handleInputChange}
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
            value={reconocimiento.fecha ? new Date(reconocimiento.fecha) : null}
            onChange={(date) =>
              handleDateChange(`reconocimientos.${index}.fecha`, date)
            }
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
        </LocalizationProvider>
        <TextField
          fullWidth
          name={`reconocimientos.${index}.nombre_reconocimiento`}
          label="Nombre del Reconocimiento"
          value={reconocimiento.nombre_reconocimiento || ""}
          onChange={handleInputChange}
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
    {researcherData.produccion_bibliografica.map((produccion, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.doi`}
              label="DOI"
              value={produccion.doi || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.editorial`}
              label="Editorial"
              value={produccion.editorial || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha"
                value={produccion.fecha ? new Date(produccion.fecha) : null}
                onChange={(date) =>
                  handleDateChange(
                    `produccion_bibliografica.${index}.fecha`,
                    date
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
              name={`produccion_bibliografica.${index}.issn`}
              label="ISSN"
              value={produccion.issn || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.numero`}
              label="Número"
              value={produccion.numero || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.paginas`}
              label="Páginas"
              value={produccion.paginas || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.revista`}
              label="Revista"
              value={produccion.revista || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.tipo_produccion`}
              label="Tipo de Producción"
              value={produccion.tipo_produccion || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.titulo_articulo`}
              label="Título del Artículo"
              value={produccion.titulo_articulo || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.url_articulo`}
              label="URL del Artículo"
              value={produccion.url_articulo || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.url_drive`}
              label="URL de Drive"
              value={produccion.url_drive || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              name={`produccion_bibliografica.${index}.volumen`}
              label="Volumen"
              value={produccion.volumen || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
        </Grid>
      </div>
    ))}
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
              volumen: "",
            },
          ],
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
    <Typography variant="h6" style={{ marginBottom: "20px" }}>
      Eventos Científicos
    </Typography>

    {researcherData.eventos_cientificos.map((evento, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name={`eventos_cientificos.${index}.nombre_evento`}
              label="Nombre del Evento"
              value={evento.nombre_evento || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha Inicio"
                value={evento.fecha_inicio ? new Date(evento.fecha_inicio) : null}
                onChange={(date) =>
                  handleDateChange(`eventos_cientificos.${index}.fecha_inicio`, date)
                }
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha Fin"
                value={evento.fecha_fin ? new Date(evento.fecha_fin) : null}
                onChange={(date) =>
                  handleDateChange(`eventos_cientificos.${index}.fecha_fin`, date)
                }
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name={`eventos_cientificos.${index}.lugar`}
              label="Lugar"
              value={evento.lugar || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name={`eventos_cientificos.${index}.ambito`}
              label="Ámbito"
              value={evento.ambito || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name={`eventos_cientificos.${index}.tipo_evento`}
              label="Tipo de Evento"
              value={evento.tipo_evento || ""}
              onChange={handleInputChange}
              margin="normal"
            />
          </Grid>

          {/* Instituciones Asociadas */}
          <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
            Instituciones Asociadas
          </Typography>
          {evento.instituciones_asociadas?.map((institucion, instIndex) => (
            <Grid container spacing={2} key={instIndex} style={{ marginBottom: "10px" }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.instituciones_asociadas.${instIndex}.nombre_institucion`}
                  label="Nombre de la Institución"
                  value={institucion.nombre_institucion || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.instituciones_asociadas.${instIndex}.tipo_producto`}
                  label="Tipo de Producto"
                  value={institucion.tipo_producto || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          ))}
          <IconButton
            onClick={() =>
              setResearcherData((prevData) => {
                const updatedEventos = [...prevData.eventos_cientificos];
                updatedEventos[index].instituciones_asociadas = updatedEventos[index].instituciones_asociadas || [];
                updatedEventos[index].instituciones_asociadas.push({
                  nombre_institucion: "",
                  tipo_producto: ""
                });
                return {
                  ...prevData,
                  eventos_cientificos: updatedEventos,
                };
              })
            }
            color="primary"
          >
            <AddIcon />
          </IconButton>

          {/* Participantes */}
          <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
            Participantes
          </Typography>
          {evento.participantes?.map((participante, partIndex) => (
            <Grid container spacing={2} key={partIndex} style={{ marginBottom: "10px" }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.participantes.${partIndex}.nombre`}
                  label="Nombre del Participante"
                  value={participante.nombre || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.participantes.${partIndex}.rol_evento`}
                  label="Rol en el Evento"
                  value={participante.rol_evento || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          ))}
          <IconButton
            onClick={() =>
              setResearcherData((prevData) => {
                const updatedEventos = [...prevData.eventos_cientificos];
                updatedEventos[index].participantes = updatedEventos[index].participantes || [];
                updatedEventos[index].participantes.push({
                  nombre: "",
                  rol_evento: ""
                });
                return {
                  ...prevData,
                  eventos_cientificos: updatedEventos,
                };
              })
            }
            color="primary"
          >
            <AddIcon />
          </IconButton>

          {/* Productos Asociados */}
          <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
            Productos Asociados
          </Typography>
          {evento.productos_asociados?.map((producto, prodIndex) => (
            <Grid container spacing={2} key={prodIndex} style={{ marginBottom: "10px" }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.productos_asociados.${prodIndex}.nombre_producto`}
                  label="Nombre del Producto"
                  value={producto.nombre_producto || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.productos_asociados.${prodIndex}.tipo_producto`}
                  label="Tipo de Producto"
                  value={producto.tipo_producto || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name={`eventos_cientificos.${index}.productos_asociados.${prodIndex}.tipo_evento`}
                  label="Tipo de Evento"
                  value={producto.tipo_evento || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          ))}
          <IconButton
            onClick={() =>
              setResearcherData((prevData) => {
                const updatedEventos = [...prevData.eventos_cientificos];
                updatedEventos[index].productos_asociados = updatedEventos[index].productos_asociados || [];
                updatedEventos[index].productos_asociados.push({
                  nombre_producto: "",
                  tipo_producto: "",
                  tipo_evento: ""
                });
                return {
                  ...prevData,
                  eventos_cientificos: updatedEventos,
                };
              })
            }
            color="primary"
          >
            <AddIcon />
          </IconButton>
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
              nombre_evento: "",
              fecha_inicio: null,
              fecha_fin: null,
              lugar: "",
              ambito: "",
              tipo_evento: "",
              instituciones_asociadas: [{ nombre_institucion: "", tipo_producto: "" }],
              participantes: [{ nombre: "", rol_evento: "" }],
              productos_asociados: [{ nombre_producto: "", tipo_producto: "", tipo_evento: "" }]
            },
          ],
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
    <Typography variant="h6" style={{ marginBottom: "20px" }}>
      Alianzas y Cooperación
    </Typography>

    {/* Alianzas Internacionales */}
    <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
      Internacionales
    </Typography>
    {researcherData.alianzas_cooperacion.internacionales.map((alianza, index) => (
      <Grid container spacing={2} key={`int-${index}`} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name={`alianzas_cooperacion.internacionales.${index}`}
            label={`Alianza Internacional ${index + 1}`}
            value={alianza || ""}
            onChange={handleInputChange}
            margin="normal"
          />
        </Grid>
      </Grid>
    ))}
    <IconButton
      onClick={() =>
        setResearcherData((prevData) => ({
          ...prevData,
          alianzas_cooperacion: {
            ...prevData.alianzas_cooperacion,
            internacionales: [...prevData.alianzas_cooperacion.internacionales, ""],
          },
        }))
      }
      color="primary"
    >
      <AddIcon />
    </IconButton>

    {/* Alianzas Nacionales */}
    <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
      Nacionales
    </Typography>
    {researcherData.alianzas_cooperacion.nacionales.map((alianza, index) => (
      <Grid container spacing={2} key={`nac-${index}`} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name={`alianzas_cooperacion.nacionales.${index}`}
            label={`Alianza Nacional ${index + 1}`}
            value={alianza || ""}
            onChange={handleInputChange}
            margin="normal"
          />
        </Grid>
      </Grid>
    ))}
    <IconButton
      onClick={() =>
        setResearcherData((prevData) => ({
          ...prevData,
          alianzas_cooperacion: {
            ...prevData.alianzas_cooperacion,
            nacionales: [...prevData.alianzas_cooperacion.nacionales, ""],
          },
        }))
      }
      color="primary"
    >
      <AddIcon />
    </IconButton>
  </div>
)}

         {activeTab === 8 && (
  <div>
    <Typography variant="h6" style={{ marginBottom: "20px" }}>
      Áreas de Actuación
    </Typography>
    {researcherData.areas_actuacion.map((area, index) => (
      <Grid container spacing={2} key={index} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name={`areas_actuacion.${index}.area`}
            label="Área de Actuación"
            value={area.area || ""}
            onChange={handleInputChange}
            margin="normal"
          />
        </Grid>
      </Grid>
    ))}
    <IconButton
      onClick={() =>
        setResearcherData((prevData) => ({
          ...prevData,
          areas_actuacion: [...prevData.areas_actuacion, { area: "" }],
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
              {researcherData.lineas_investigacion.map((linea, index) => (
                <Grid
                  container
                  spacing={2}
                  key={index}
                  style={{ marginBottom: "20px" }}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name={`lineas_investigacion.${index}.linea_investigacion`}
                      label="Línea de Investigación"
                      value={linea.linea_investigacion}
                      onChange={handleInputChange}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name={`lineas_investigacion.${index}.activa`}
                      label="Activa"
                      value={linea.activa}
                      onChange={handleInputChange}
                      margin="normal"
                    />
                  </Grid>
                </Grid>
              ))}
              <IconButton
                onClick={() =>
                  setResearcherData((prevData) => ({
                    ...prevData,
                    lineas_investigacion: [
                      ...prevData.lineas_investigacion,
                      { linea_investigacion: "", activa: "" },
                    ],
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
    {researcherData.trabajos_dirigidos_tutorias.map((trabajo, index) => (
      <Grid container spacing={2} key={index} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name={`trabajos_dirigidos_tutorias.${index}.especialidad`}
            label="Especialidad"
            value={trabajo.especialidad || ""}
            onChange={handleInputChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name={`trabajos_dirigidos_tutorias.${index}.estado`}
            label="Estado"
            value={trabajo.estado || ""}
            onChange={handleInputChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Fecha"
              value={trabajo.fecha ? new Date(trabajo.fecha) : null}
              onChange={(date) =>
                handleDateChange(`trabajos_dirigidos_tutorias.${index}.fecha`, date)
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
            name={`trabajos_dirigidos_tutorias.${index}.institucion`}
            label="Institución"
            value={trabajo.institucion || ""}
            onChange={handleInputChange}
            margin="normal"
          />
        </Grid>

        {/* Orientados */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
            Orientados
          </Typography>
          {trabajo.orientados.map((orientado, orientadoIndex) => (
            <Grid container spacing={2} key={orientadoIndex} style={{ marginBottom: "10px" }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name={`trabajos_dirigidos_tutorias.${index}.orientados.${orientadoIndex}.rol`}
                  label="Rol"
                  value={orientado.rol || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name={`trabajos_dirigidos_tutorias.${index}.orientados.${orientadoIndex}.tipo`}
                  label="Tipo"
                  value={orientado.tipo || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name={`trabajos_dirigidos_tutorias.${index}.orientados.${orientadoIndex}.titulo`}
                  label="Título"
                  value={orientado.titulo || ""}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          ))}
        </Grid>

        {/* Tutores */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
            Tutores
          </Typography>
          {trabajo.tutores.map((tutor, tutorIndex) => (
            <Grid container spacing={2} key={tutorIndex} style={{ marginBottom: "10px" }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name={`trabajos_dirigidos_tutorias.${index}.tutores.${tutorIndex}`}
                  label={`Nombre del Tutor ${tutorIndex + 1}`}
                  value={tutor || ""}
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
                const updatedTrabajos = [...prevData.trabajos_dirigidos_tutorias];
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
    ))}
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
              orientados: [{ rol: "", tipo: "", titulo: "" }],
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
            marginTop: "20px",
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
