export default {
  global: {
    Name: 'Fomento de los derechos del campesino',
    Description:
      'En este componente abordaremos aspectos a partir de la persona y la sociedad teniendo en cuenta la definición y las características de los campesinos, donde se conocerán los derechos fundamentales de los campesinos, los derechos  de especial protección y enfoque diferencial; partiendo a través de los aspectos legales, vinculando  diversos métodos y herramientas de autodiagnóstico para la adquisición de información de los diversos contextos del campesinado y su territorio para el análisis de las problemáticas que se identifiquen; reconociendo así también las entidades que propician la defensa de los derechos del campesinado. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Reconocimiento del campesinado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Persona y sociedad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Enfoque diferencial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Derechos fundamentales del campesino',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Características sociales, económicas, culturales, políticas, productivas y ambientales del territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Territorio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas y herramientas del autodiagnóstico',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Aspectos claves y conceptos básicos de la situación a diagnosticar',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Contenidos de los contextos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Reconocimiento de entidades gubernamentales y no gubernamentales para la defensa de los derechos campesinos',
        desarrolloContenidos: true,
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
      tema: 'Territorio',
      referencia:
        'CENT Nº 40. (2017). <em>El enfoque Socioterritorial</em>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hKKdDdp8Gb4',
    },
    {
      tema: 'Territorio',
      referencia:
        'Abriendo Caminos (2007). <em>El enfoque Socioterritorial . Cap. 1/3</em> [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tzT1DujJ9AM',
    },
    {
      tema: 'Territorio',
      referencia:
        'Canal MVOT. (2023). <em>¿Qué es el territorio?</em>. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Cx7JeL8VLtI',
    },
  ],
  glosario: [
    {
      termino: 'Campesino',
      significado:
        'gente de la tierra, somos agricultores, relacionándolo así como la gente que trabaja con la tierra, siempre existiendo una relación directa con la tierra que produce alimentos.',
    },
    {
      termino: 'Derechos',
      significado:
        'un derecho es una garantía o libertad que tienen todas las personas por el solo hecho de ser seres humanos, y que debe ser respetada y protegida por la sociedad y el Estado.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'de reconocer las particularidades de las personas, sus características y condiciones de vida, ocupándose de crear, incorporar y apropiar las herramientas y metodologías desde la comprensión de sus realidades.',
    },
    {
      termino: 'Entidades gubernamentales',
      significado:
        'organización de estado creada para cumplir funciones públicas, administrar los recursos que beneficien a la sociedad, su propósito principal es organizar y regular los servicios en áreas como salud, educación, seguridad, justicia, transporte, cultura y otros sectores.',
    },
    {
      termino: 'Entidades no gubernamentales',
      significado:
        'son creadas por ciudadanos, que trabajan de manera independiente sin ánimo de lucro con objetos sociales relacionados con causas sociales, ambientales, culturales, humanitarias o bien sea de derechos humanos.',
    },
    {
      termino: 'Herramientas',
      significado:
        'es un instrumento concreto (guía, formato, test, cuestionario, software, matriz) que se utiliza para aplicar una técnica de diagnóstico y así recoger, organizar y analizar la información sobre un problema, situación o necesidad.',
    },
    {
      termino: 'Persona',
      significado:
        'se relaciona con los conceptos hombre o mujer reconociéndose como seres humanos pertenecientes a una sociedad.',
    },
    {
      termino: 'Sociedad',
      significado:
        'las personas son seres sociales que constituyen como grupo propiciando estilos de vida en común como lo es su cultura, su historia y sus costumbres.',
    },
    {
      termino: 'Técnicas',
      significado:
        'es un método o procedimiento que se usa para recopilar información, con el fin de identificar, analizar y comprender una situación, problema o necesidad en una persona, grupo o comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1961). <em>Ley 135 de 1961: Sobre la reforma social agraria</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=74153',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). <em>Ley 101 de 1993: Ley General de Desarrollo Agropecuario y Pesquero</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66787',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002). <em>Ley 731 de 2002: Normas para favorecer a las mujeres rurales</em>.',
      link: '',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). <em>Constitución Política de Colombia</em>. República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2018). <em>Declaración de las Naciones Unidas sobre los derechos de los campesinos y otras personas que trabajan en las zonas rurales</em>.',
      link: '',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2015). <em>Derechos de los campesinos colombianos: Delegados para asuntos agrarios y tierras</em>. Defensoría del Pueblo de Colombia.',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública de Colombia. (2023). <em>Normatividad vigente sobre función pública en Colombia</em>.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Antropología e Historia. (s. f.). <em>Elementos para la conceptualización de lo campesino en Colombia</em>.',
      link:
        'https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/33/311/3172?inline=1',
    },
    {
      referencia:
        'Maritain, J. (1947). <em>La persona y el bien común (Cap. III, “La persona y la sociedad”)</em>.',
      link: 'https://www.jacquesmaritain.com/pdf/07_PER/06_P_PerSoc.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2018). <em>El campesinado y su papel en la seguridad alimentaria y el desarrollo sostenible</em>.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas (ONU). (2023). <em>Informe anual sobre desarrollo rural y derechos campesinos</em>.',
      link: '',
    },
    {
      referencia:
        'Ortega, E., Fernández, M., Meneses, C., Navarro, D., y Fonseca, A. (2018). <em>Manual de técnicas de diagnóstico en trabajo social</em>.',
      link:
        'https://www.researchgate.net/profile/Maria-Belen-Senet-2/publication/337636212_MANUAL_DE_TECNICAS_DIAGNOSTICAS/links/5de197c1a6fdcc2837f6c719/MANUAL-DE-TECNICAS-DIAGNOSTICAS.pdf',
    },
    {
      referencia:
        'República de Colombia. (2025). <em>Acto Legislativo 01 de 2023 (Campesinado)</em>. Diario Oficial.',
      link:
        'https://sidn.ramajudicial.gov.co/SIDN/NORMATIVA/TEXTOS_COMPLETOS/2_ACTOS_LEGISLATIVOS/Acto%20Legislativo%2001%20de%202023%20(Campesinado).pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (s. f.). <em>Proyecto de investigación: Caracterización de la población de la economía campesina popular</em>.',
      link: 'https://www.sena.edu.co/es-co/Documents/Asi-vamos-9.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
