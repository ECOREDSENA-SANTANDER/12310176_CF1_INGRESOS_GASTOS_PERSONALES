export default {
  global: {
    Name: 'Gestión eficiente de ingresos y gastos',
    Description:
      'El manejo adecuado de los ingresos y gastos personales es un pilar fundamental para alcanzar una vida equilibrada y satisfactoria. Una buena administración del dinero permite a las personas tomar decisiones conscientes, reducir el estrés financiero y alcanzar metas a corto y largo plazo. En un entorno económico cambiante, la educación financiera se convierte en una herramienta poderosa que empodera a las personas para tomar el control de su presente y construir un futuro más seguro y pleno. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['circulo'],
        imagen: require('@/assets/curso/portada/circ.png'),
      },
      {
        clases: ['img-fija'],
        imagen: require('@/assets/curso/portada/img-fija.png'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptualización: ingresos y gastos personales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Los ingresos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ingresos independientes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ingresos dependientes',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estrategias para mejorar los ingresos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manejo adecuado de los ingresos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Los gastos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Responsabilidad frente al gasto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estrategias para controlar el gasto',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1 Conceptualización: Ingresos y gastos personales',
      referencia:
        'Exito Financiero. (2021, 18 marzo). La regla 60-10-10-20 para administrar tu dinero [Vídeo].  ',
      tipo: 'Video',
      link: 'https://youtu.be/RCJpt686Wjc',
    },
    {
      tema: '2.4 Manejo adecuado de los ingresos ',
      referencia: 'VALERZA. (2022, 16 agosto). Gastos emocionales [Vídeo].  ',
      tipo: 'Video',
      link: 'https://youtu.be/qlAXd9CY8c0',
    },
    {
      tema: '3.1 Responsabilidad frente al gasto ',
      referencia:
        'Asobancaria, Superintendencia Financiera de Colombia, & Banca de las Oportunidades. (2018). Construir, avanzar y prosperar. [PDF]. Recuperado de  ',
      tipo: 'PDF ',
      link:
        'https://www.bancadelasoportunidades.gov.co/sites/default/files/2017-06/Construir%2C%20Avanzar%20y%20Prosperar%20%20-%20WEB%20Completa%20-%20Final-final.pdf',
    },
    {
      tema: '3.2. Estrategias para controlar el gasto',
      referencia:
        'Alfaro, M., & Ernesto, G. (2012b). Ingresos y Costos, una propuesta para su análisis estratégico. Estudio de caso empresas colombianas. UNIVERSIDAD NACIONAL DE COLOMBIA. https://repositorio.unal.edu.co/handle/unal/9084 ',
      tipo: 'PDF ',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/9084/Tesis_GEMejia.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Consumo responsable',
      significado:
        'uso consciente de los recursos económicos, priorizando necesidades reales sobre deseos inducidos. ',
    },
    {
      termino: 'Crédito',
      significado:
        'permiso o préstamo otorgado para usar dinero ajeno con la promesa de devolverlo en el futuro. ',
    },
    {
      termino: 'Deuda',
      significado:
        'compromiso financiero asumido que debe ser pagado en el futuro, con o sin intereses. ',
    },
    {
      termino: 'Educación financiera',
      significado:
        'conjunto de conocimientos que permiten tomar decisiones informadas sobre el uso y administración del dinero. ',
    },
    {
      termino: 'Egresos',
      significado:
        'gastos u obligaciones que deben cubrirse con los ingresos disponibles. ',
    },
    {
      termino: 'Emprendedor',
      significado:
        'persona que inicia un negocio propio, asumiendo riesgos con el objetivo de obtener ganancias. ',
    },
    {
      termino: 'Erogación',
      significado: 'salida de dinero realizada por una persona o entidad. ',
    },
    {
      termino: 'Estrategia financiera',
      significado:
        'plan diseñado para alcanzar objetivos económicos, como ahorro, inversión o reducción de deudas. ',
    },
    {
      termino: 'Flujo de caja ',
      significado:
        'registro del dinero que entra y sale en un periodo determinado, útil para evaluar la salud financiera. ',
    },
    {
      termino: 'Fondo de emergencia',
      significado: 'ahorro destinado a cubrir gastos imprevistos. ',
    },
    {
      termino: 'Inversionista',
      significado:
        'individuo que coloca su capital en activos (como acciones o bienes raíces) esperando obtener un rendimiento.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'plan financiero que organiza los ingresos y egresos con base en metas y necesidades.',
    },
    {
      termino: 'Salud financiera',
      significado:
        'estado de equilibrio entre ingresos, gastos, ahorro y planificación futura. ',
    },
    {
      termino: 'Sobreendeudamiento',
      significado:
        'situación en la que las deudas superan la capacidad de pago. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Comfenalco Santander. (s.f.). El presupuesto personal: tu brújula financiera hacia un futuro próspero. Recuperado de: ',
      link:
        'https://www.comfenalcosantander.com.co/el-presupuesto-personal-tu-brujula-financiera-hacia-un-futuro-prospero',
    },
    {
      referencia:
        'Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (s.f.). Educación financiera para todos. Recuperado de: ',
      link: 'https://www.gob.mx/condusef',
    },
    {
      referencia:
        'Gitman, L. J., & Joehnk, M. D. (2015). Fundamentos de finanzas personales. Pearson Educación.Referencia clave para conceptos como ingresos, presupuesto, ahorro e inversión en el contexto de la planificación financiera.',
    },
    {
      referencia:
        'Mendoza, L. (2011). Psicología del consumo: Compras impulsivas y toma de decisiones. Editorial Universitaria. ',
    },
    {
      referencia:
        'Montes, M. (2013). La pirámide de Maslow y su aplicación en las finanzas personales. En Revista de Ciencias Sociales Aplicadas.Referencia explícita utilizada para las necesidades fisiológicas, de seguridad, afiliación, reconocimiento y autorrealización. ',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos (OCDE). (2017). PISA 2015 Results (Volume IV): Students’ Financial Literacy. OECD Publishing. ',
      link: 'https://doi.org/10.1787/9789264270282-en',
    },
    {
      referencia:
        'Suárez, M. & Gómez, A. (2018). Finanzas personales: una guía para el manejo inteligente del dinero. Ediciones Ecoe. ',
    },
    {
      referencia:
        'Sullivan, A., & Sheffrin, S. M. (2003). Economía: Principios y herramientas. Pearson Educación.Explica conceptos económicos fundamentales, incluyendo los ingresos desde un punto de vista macro y microeconómico. ',
    },
    {
      referencia:
        'Vitt, L. A. et al. (2000). Personal Finance and the Rush to Competence: Financial Literacy Education in the U.S.Proporciona fundamentos sobre educación financiera como herramienta de empoderamiento y toma de decisiones inteligentes. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dania Aurelia Rueda Guanaro',
          cargo: 'Experta temática',
          centro: 'SENA Regional Risaralda',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
