const service_three_data = [
  {
    id: 1,
    img: "https://iasbh.tmgrup.com.tr/1937e4/1200/627/0/2/650/341?u=https://isbh.tmgrup.com.tr/sbh/2019/11/29/lupus-hastaligi-nedir-belirtileri-nelerdir-lupus-neden-olur-1574981659673.jpg",  // Ruta de la imagen
    icon: "flaticon-dna",
    color: "",
    title: "Lupus Eritematoso Sistémico Activo",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en un estudio de tratamiento con anticuerpo monoclonal para LES activo de moderado a grave.
      
      Requisitos:
      - Ser mayor de 18 años
      - Diagnóstico de LES al menos hace 6 meses
      - LES activo de moderado a grave y positivo para autoanticuerpos
      - Debe recibir terapia estándar para LES al menos hace 3 meses
    `,
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.q_wIBZueVOOaLlFBqzKvRwAAAA?w=450&h=242&rs=1&pid=ImgDetMain",  // Ruta de la imagen
    icon: "flaticon-heart-beat",
    color: "pink-round",
    title: "Insuficiencia Cardíaca Congestiva",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a conocer y participar en el estudio de nuevos tratamientos de insuficiencia cardíaca congestiva.
      
      Requisitos:
      - Presentar una enfermedad cardíaca
    `,
  },
  {
    id: 3,
    img: "https://th.bing.com/th/id/R.34a172a81291a026f28afdf1a39a7c23?rik=bNjZnfqvi9p4Uw&riu=http%3a%2f%2fwww.saludymedicina.org%2fwp-content%2fuploads%2f2017%2f07%2feii1024.jpg&ehk=tYCK4Z8gybHNL5bCDgfFNgQJ%2bQ0jewqPNH2xxQQ9UjY%3d&risl=&pid=ImgRaw&r=0",  // Ruta de la imagen
    icon: "flaticon-stomach",
    color: "sky-round",
    title: "Enfermedad de Crohn",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en un estudio de tratamiento para enfermedad de moderada a severa.
      
      Requisitos:
      - Ser mayor de 18 años
      - Diagnóstico de enfermedad de Crohn confirmado por colonoscopia
      - Tener síntomas de la enfermedad en los últimos 3 meses
    `,
  },
  {
    id: 4,
    img: "https://masterspharma.com.br/wp-content/uploads/2021/11/blog_anemia_falciformeJEP.jpg",  // Ruta de la imagen
    icon: "flaticon-blood-drop",
    color: "blue-round",
    title: "Anemia Falciforme",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en el estudio de tratamiento para prevención de crisis vaso-oclusivas.
      
      Requisitos:
      - Ser mayor de 12 años
      - Diagnóstico de anemia de células falciformes
      - Antecedente de crisis vaso-oclusivas (2 a 10 crisis en los últimos 12 meses)
    `,
  },
  {
    id: 5,
    img: "https://th.bing.com/th/id/R.79486ad2677ab469d65b3ec34c9159e5?rik=po0R%2brWFV%2b6pTQ&pid=ImgRaw&r=0&sres=1&sresct=1",  // Ruta de la imagen
    icon: "flaticon-kidney",
    color: "",
    title: "Nefritis Lúpica",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en un estudio de tratamiento con anticuerpo monoclonal.
      
      Requisitos:
      - Tener entre 18 a 75 años
      - Diagnóstico de nefritis lúpica clase III, IV o IV mediante biopsia renal
      - Diagnóstico de LES
      - Proteinuria en orina de 24 horas mayor a 1 gr
    `,
  },
  {
    id: 6,
    img: "https://www.sabervivirtv.com/medio/2020/07/01/cancer-de-prostata_422f69a6_1280x720.jpg",  // Ruta de la imagen
    icon: "flaticon-prostate",
    color: "pink-round",
    title: "Cáncer de Próstata",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en un estudio de tratamiento para el cáncer de próstata.
      
      Requisitos:
      - Ser mayor de 18 años
      - Tener un adenocarcinoma de próstata confirmado histológicamente o citológicamente
      - Tener una progresión del cáncer de próstata mientras se está en ADT (o después de la orquiectomía bilateral) dentro de los 6 meses
    `,
  },
  {
    id: 7,
    img: "https://th.bing.com/th/id/OIP.hwy2PzHc0f0XvPfvtc31SwHaDt?w=626&h=313&rs=1&pid=ImgDetMain",  // Ruta de la imagen
    icon: "flaticon-head",
    color: "",
    title: "Cáncer de Cabeza y Cuello",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en un estudio de tratamiento para el cáncer de cabeza y cuello.
      
      Requisitos:
      - Ser mayor de 18 años
      - Tener un diagnóstico reciente confirmado histológicamente de carcinoma de células escamosas resecable no metastásico (HNSCC)
    `,
  },
  {
    id: 8,
    img: "https://media.siraplimau.com/2024/02/gerd.jpg",  // Ruta de la imagen
    icon: "flaticon-stomach",
    color: "",
    title: "Cáncer Gastroesofágico",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en el estudio de tratamiento para el cáncer gastroesofágico.
      
      Requisitos:
      - Ser mayor de 18 años
      - Tener un diagnóstico confirmado mediante pruebas histológicas y/o citológicas de adenocarcinoma gastroesofágico metastásico o irresecable
    `,
  },
  {
    id: 9,
    img: "https://th.bing.com/th/id/R.cb3e4c5354eb330f8908b0cd308bbf0e?rik=cTX1EBsDzN4Mwg&pid=ImgRaw&r=0",  // Ruta de la imagen
    icon: "flaticon-kidney",
    color: "",
    title: "Cáncer Renal",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en un estudio de tratamiento para cáncer renal.
      
      Requisitos:
      - Ser mayor de 18 años
      - Tener diagnóstico confirmado mediante análisis histológico de RCC de estadio IV
      - No haber recibido tratamiento sistémico previo para el ccRCC avanzado
    `,
  },
  {
    id: 10,
    img: "https://th.bing.com/th/id/R.ddea1860573f8a5f51733a91ff4d98a4?rik=vzcwysLDnLpSBg&pid=ImgRaw&r=0",  // Ruta de la imagen
    icon: "flaticon-tumor",
    color: "",
    title: "Tumores Sólidos",
    description: `
      El Centro de Investigación de la Clínica de la Costa los invita a participar en el estudio de tratamiento para tumores sólidos.
      
      Requisitos:
      - Ser mayor de 18 años
      - Tener un tumor sólido avanzado (metastásico o irresecable) confirmado histológicamente o citológicamente
    `,
  },
];

export default service_three_data;
