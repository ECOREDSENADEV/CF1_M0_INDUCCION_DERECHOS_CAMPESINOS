<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Reconocimiento del campesinado
    
    .bg-full-width.bg-color-9
      .px-4.px-lg-5
        .bg-color-8(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/1.png', alt='')
            .col-lg.order-1.mb-3.mb-lg-0
              .p-4
                p.mb-0(data-aos="fade-up") El campesinado es una figura esencial dentro de la estructura social y económica de los territorios rurales. Reconocer su valor implica comprender su papel en la producción de alimentos, su relación con la tierra, sus saberes ancestrales y su identidad colectiva. Para ello, es necesario partir de una reflexión sobre el ser humano como parte de una comunidad: la persona y la sociedad que lo rodea.

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Persona y sociedad
        
        .row.mb-5.align-items-center
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p(data-aos="fade-left") Antes de hablar del campesinado como sujeto social, es fundamental entender cómo se concibe al ser humano y su entorno. La noción de persona no puede separarse de la vida en sociedad, ya que el individuo desarrolla su identidad en interacción con los demás, guiado por normas, valores y relaciones que dan sentido a su existencia.
        
        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Persona" :icono="require('@/assets/componentes/1.svg')")
            .row.px-5.align-items-center
              .col-lg-7.mb-4.mb-md-0.order-lg-2
                h4 Persona
                p Ser humano que se reconoce a sí mismo como tal, capaz de razonar, tomar decisiones y actuar de manera autónoma. Su vida transcurre en relación con otros, dentro de un entorno donde prevalecen valores éticos, morales y jurídicos. Al pensarse como hombre o mujer, se reconoce como parte de una comunidad.
              .col-lg-5.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Sociedad" :icono="require('@/assets/componentes/2.svg')")
            .row.px-5.align-items-center
              .col-lg-7.mb-4.mb-md-0.order-lg-2
                h4 Sociedad
                p Conjunto de personas que conviven y se organizan compartiendo cultura, historia, costumbres y normas. En la sociedad se crean relaciones de poder, justicia y cooperación que permiten satisfacer las necesidades individuales y colectivas. Es el espacio donde se construye la vida en común.
              .col-lg-5.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Comunidad campesino" :icono="require('@/assets/componentes/3.svg')")
            .row.px-5.align-items-center
              .col-lg-7.mb-4.mb-md-0.order-lg-2
                h4 Comunidad campesino
                p La comunidad campesina se caracteriza por ser un grupo personas que viven y trabajan en el campo, dedicadas principalmente a actividades agrícolas, pecuarias y de aprovechamiento de los recursos naturales. Estas comunidades se caracterizan por tener una identidad cultural propia, una forma colectiva de organización y una relación directa con la tierra, que es su principal medio de sustento.  (FAO,  2018)
              .col-lg-5.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Vereda un territorio campesino" :icono="require('@/assets/componentes/4.svg')")
            .row.px-5.align-items-center
              .col-lg-7.mb-4.mb-md-0.order-lg-2
                h4 Vereda un territorio campesino
                p La unidad territorial más pequeña del área rural, conformada por un conjunto de viviendas, fincas y familias que comparten un mismo espacio geográfico y social, también cumple una función organizativa y cultural, pues es el lugar donde se establecen formas de cooperación, participación comunitaria y mantenimiento de las tradiciones campesinas (DNP, 2014)
              .col-lg-5.order-lg-1
                figure
                  img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')

        h3.bg-color-10.d-inline.text-white.p-2.tarjeta Campesino y enfoque diferencial

        p.mb-5.mt-5 Comprender al campesinado desde un enfoque diferencial implica reconocerlo como una población con características sociales, culturales y económicas particulares, históricamente invisibilizadas. Esta mirada permite valorar sus formas de vida, sus saberes, y su vínculo profundo con la tierra como base para garantizar sus derechos y fortalecer su papel en la sociedad. (SENA, 2024)

        .bg-full-width.bg-fondo-slider
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-white-1.p-4
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src="@/assets/curso/tema1/7.png")
                .col-lg-7.mb-3.mb-lg-0.order-lg-1
                  h5 Campesino
                  p El término “campesino” significa literalmente “gente de la tierra”. Se refiere a quienes trabajan directa y cotidianamente con la tierra para producir alimentos. Más allá de los agricultores, también incluye artesanos rurales, pescadores, pastores y pequeños mineros. Su identidad está ligada al mundo rural, con vínculos con zonas urbanas y cabeceras municipales. (SENA, 2024)
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src="@/assets/curso/tema1/8.png")
                .col-lg-7.mb-3.mb-lg-0.order-lg-1
                  h5 Enfoque diferencial
                  p Perspectiva que reconoce la diversidad del campesinado y sus condiciones particulares. Busca garantizar derechos teniendo en cuenta su contexto territorial, sus prácticas culturales y las desigualdades históricas que han enfrentado. Este enfoque promueve una inclusión real y justa en las políticas públicas.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Enfoque diferencial
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8
        p El enfoque diferencial surge como una herramienta fundamental para promover la equidad en contextos marcados por la diversidad. Su propósito es reconocer y atender las particularidades de las personas, sus condiciones de vida, sus trayectorias históricas y culturales, y las desigualdades estructurales que enfrentan. Tal como lo señala el DANE (2020), este enfoque busca crear, incorporar y apropiar herramientas metodológicas que permitan comprender las realidades específicas de cada grupo poblacional, con el objetivo de visibilizarlo y garantizar sus derechos.
        .bg-color-6.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/10.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Cuando se aplica este enfoque al campesinado, se reconoce que no basta con tratarlos como parte de una categoría genérica. Es necesario tener en cuenta sus modos de vida, su relación con la tierra y el territorio, su cultura, sus formas de producción y organización, así como los desafíos estructurales que enfrentan. Las políticas públicas que busquen garantizar los derechos de los campesinos deben construirse desde esta mirada, respetando y fortaleciendo sus particularidades.
    
    p.mb-5 Además, para que las acciones institucionales sean efectivas y legítimas, es indispensable garantizar el derecho a la participación de las comunidades campesinas y de sus organizaciones sociales. Solo así es posible avanzar hacia un goce efectivo de derechos que responda realmente a sus necesidades y aspiraciones.
        
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Enfoque diferencial" :icono="require('@/assets/componentes/1.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Enfoque diferencial
            p Estrategia orientada a reconocer y atender las diferencias sociales, culturales, económicas y territoriales de los grupos poblacionales. Busca garantizar la igualdad real a través de medidas específicas que respeten su identidad y condiciones de vida.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Aplicación al campesinado" :icono="require('@/assets/componentes/1.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Aplicación al campesinado
            p Implica que las políticas públicas y acciones institucionales deben considerar las particularidades del campesinado: su relación con la tierra, sus formas de vida y organización, su papel en la producción de alimentos y su identidad cultural. Se requiere su participación activa para construir decisiones que respondan a sus realidades.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Derechos fundamentales del campesino
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8
        p El reconocimiento de los derechos fundamentales del campesinado representa un avance histórico en Colombia, al consolidar su condición de sujeto colectivo con garantías específicas dentro del marco constitucional. Este reconocimiento responde a una larga lucha de las comunidades rurales por ser visibilizadas y protegidas frente a las desigualdades estructurales que han limitado su acceso a derechos y oportunidades.
        .bg-color-6.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/14.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") El Acto Legislativo 01 de 2023 modificó el artículo 64 de la Constitución Política para afirmar que el campesinado no solo es un actor económico relevante, sino también una población con identidad propia, saberes, cultura, vínculos territoriales y formas de vida que requieren especial protección y atención diferenciada por parte del Estado.
    
    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Reconocimiento constitucional del campesinado

    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Antes de abordar en detalle los derechos específicos, resulta fundamental comprender el marco normativo que los sustenta. La reforma al artículo 64 de la Constitución introduce un enfoque integral de protección que reconoce las diversas dimensiones del campesinado: económica, social, cultural, política y ambiental, y ordena al Estado garantizar tanto los derechos individuales como los colectivos.
        .bg-color-3.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/16.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Acto Legislativo 01 de 2023
                p.mb-0 Modifica el artículo 64 de la Constitución. Reconoce al campesinado como sujeto de derechos y de especial protección. El Estado debe garantizar el acceso progresivo a la propiedad de la tierra, así como derechos sociales, económicos, culturales, ambientales y políticos, desde un enfoque de género, etario y territorial.

    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derechos del campesinado colombiano

    .row.mb-5.mt-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") A continuación, se presentan los principales derechos reconocidos al campesinado colombiano, con base en la Defensoría del Pueblo (2015). Estos derechos deben entenderse como garantías mínimas necesarias para asegurar condiciones dignas de vida, autonomía productiva y participación activa en la construcción del país.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Derechos del campesinado colombiano 

    figure.mb-5
      img(src='@/assets/curso/tema1/17.svg',, data-aos="zoom-in", alt='Diagrama sobre los derechos del campesino que incluye acceso a tierra y territorio, medios de producción agropecuaria, productos agroalimentarios, financiamiento, mercado y precios, además de libertad de asociación, opinión y expresión. ') 
  
    p.mb-5 A continuación se presentan los principales derechos del campesinado reconocidos en la legislación colombiana, los cuales garantizan su participación activa en la vida económica, social, política y cultural del país, fortaleciendo su vínculo con la tierra, la producción y la organización comunitaria.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          .div(titulo="Derecho a la tierra y al territorio").ms-5
            p Este derecho no se limita a la tenencia o propiedad de la tierra. Implica también el uso, control, protección y relación cultural que las comunidades mantienen con el territorio donde habitan, trabajan y desarrollan su identidad. La tierra representa un elemento vital para la vida campesina, tanto en lo económico como en lo simbólico y colectivo.
          .div(titulo="Derecho a contar con medios de producción agropecuaria").ms-5
            p El acceso a medios de producción adecuados permite a los campesinos garantizar su sustento, mejorar su productividad y participar en el desarrollo económico del país. Este derecho abarca el acceso a insumos, tecnologías, asistencia técnica y conocimiento.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Acceso a información sobre insumos, ciclos de cosecha, comercializadores y distribuidores.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Material genético inocuo y de calidad para proteger la salud y garantizar producción rentable.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Servicios de asistencia técnica, empresarial y acceso a la ciencia, tecnología e innovación.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Medidas sanitarias e información sobre estándares de producción y comercialización.
          .div(titulo="Derecho a acceder a fuentes de financiamiento").ms-5
            p El financiamiento rural debe adaptarse a las condiciones reales del campesinado. Las líneas de crédito deben considerar los tiempos productivos del campo, sus riesgos y las dificultades de acceso geográfico.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Crédito y financiamiento diferenciado para el sector rural.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Líneas de crédito adecuadas a los ciclos de producción.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Tasas preferenciales que reconozcan los riesgos de la actividad agrícola.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Establecimientos financieros cercanos y trámites simplificados.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          .div(titulo="Derecho a disponibilidad de productos agroalimentarios").ms-5
            p Este derecho asegura que las comunidades campesinas puedan acceder a insumos para su propia alimentación y participar en la definición de estrategias orientadas a una producción sostenible y saludable.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Acceso a productos agroalimentarios que garanticen la seguridad alimentaria.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Definición de estrategias sustentables de producción, distribución y consumo.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Conocimiento de la cadena de producción de los alimentos y sus insumos.
          .div(titulo="Derecho a libre escogencia de mercado y determinación del precio").ms-5
            p Los campesinos deben tener libertad para decidir a quién venden sus productos, bajo qué condiciones y con qué beneficios. Este principio es fundamental para alcanzar justicia económica y autonomía comercial.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Determinar el valor de su producción y su destino comercial.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Participación en mercados en condiciones favorables.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Venta directa al consumidor, si así lo deciden.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Eliminación de barreras que impidan sacar productos al mercado.
          .div(titulo="Derecho a la libertad de asociación, opinión y expresión").ms-5
            p La organización colectiva y la participación en espacios de toma de decisiones fortalecen al campesinado como actor político y social.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Libertad de asociación y fortalecimiento organizativo.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Participación en políticas públicas agrarias.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Derecho a ser informados, expresar sus opiniones e intervenir en decisiones que los afectan.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Reconocimiento institucional como actores sociales y políticos con capacidad de incidir en lo local, regional y nacional.
    
    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derechos de especial protección  

    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
      .col-lg-8
        p El campesinado, en tanto población históricamente excluida, requiere medidas que garanticen el pleno ejercicio de sus derechos en condiciones de equidad y dignidad. Estos derechos de especial protección se derivan de instrumentos internacionales como la Declaración Universal de los Derechos Humanos (1948), así como de marcos normativos nacionales e iniciativas enfocadas en la justicia social, la soberanía alimentaria y el respeto por la vida rural.
        .bg-color-11.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/21.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La aplicación del enfoque diferencial es fundamental para entender que los campesinos y campesinas enfrentan condiciones particulares que exigen respuestas específicas del Estado en materia de protección, promoción y garantía de derechos.
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Derechos de especial protección y enfoque diferencial 

    figure.mb-5
      img(src='@/assets/curso/tema1/22.svg',, data-aos="zoom-in", alt='Diagrama sobre derechos de especial protección y enfoque diferencial para campesinos que abarca vida digna, justicia sin discriminación, soberanía alimentaria, reformas agrarias, conservación e intercambio de semillas, y remuneración justa por su trabajo. ') 
    
    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derecho a un nivel de vida adecuado

    .row.mb-5.mt-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Este derecho, consagrado en el Artículo 25 de la Declaración Universal de los Derechos Humanos, establece que toda persona tiene derecho a un nivel de vida que asegure su bienestar y el de su familia. Esto incluye:
    
        .bg-color-5.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 275px").mx-auto
            .col-lg
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Alimentación adecuada.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Vestido.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Vivienda digna.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Asistencia médica. 
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Servicios sociales.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Seguridad en caso de desempleo, enfermedad, discapacidad, viudez o vejez.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Protección especial durante la maternidad y la infancia.
    
    .bg-full-width.bg-color-9
      .px-4.px-lg-5
        h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derechos colectivos para la justicia social sin discriminación

        p.mb-5.mt-5 Estos derechos reconocen la capacidad de las comunidades, incluyendo las rurales, para participar activamente en la construcción de una sociedad más justa e incluyente, sin barreras ni tratos desiguales por razón de origen, sexo, edad, etnia, religión, orientación sexual, condición política o económica. Los principales artículos son:
    
        .row.justify-content-center
          .col-lg-10
            PasosA.color-primario.mb-5(tipo="n")
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0
                  h3 Artículo 1 y 2
                  p Todas las personas nacen libres e iguales en dignidad y derechos. Se prohíbe la discriminación por razón de raza, sexo, idioma, religión u otra condición.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0.order-lg-2
                  h3 Artículo 22
                  p Derecho a la seguridad social y al bienestar común. El Estado debe crear condiciones para el goce de los derechos económicos, sociales y culturales.
                .col-md-2.order-lg-1
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0
                  h3 Artículo 23
                  p Derecho al trabajo digno, condiciones equitativas y salario igual por trabajo igual. Protección contra el desempleo.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0.order-lg-2
                  h3 Artículo 24
                  p Derecho al descanso, jornada laboral razonable y vacaciones pagadas.
                .col-md-2.order-lg-1
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0
                  h3 Artículo 25
                  p Derecho a un nivel de vida adecuado. Incluye salud, vivienda, alimentación y seguridad social. Protección especial a madres e infancia.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0.order-lg-2
                  h3 Artículo 26
                  p Derecho a la educación gratuita en niveles elementales. Debe fomentar la paz, la igualdad y el respeto entre pueblos.
                .col-md-2.order-lg-1
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0
                  h3 Artículo 27
                  p Derecho a participar en la vida cultural y científica. Acceso a artes, cultura y ciencia sin exclusión.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-10.mb-4.mb-md-0.order-lg-2
                  h3 Artículo 28
                  p Derecho a formar parte de un orden social justo donde los derechos sean efectivos.
                .col-md-2.order-lg-1
                  figure
                    img(src='@/assets/curso/tema1/25.svg', alt='Texto que describa la imagen')

        h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derecho a una remuneración digna

        p.mb-5.mt-5 El trabajo campesino debe ser reconocido no solo por su esfuerzo físico, sino por su aporte esencial a la soberanía alimentaria y el desarrollo nacional. Según el <b>Artículo 23</b>:

        .row.justify-content-center.mb-5
          .col-lg-4.mb-4.mb-lg-0
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle.mb-5
                figure
                  img(src="@/assets/curso/tema1/26.svg", alt="alt").img120.m-auto
              p.text-center.mb-5 Toda persona trabajadora tiene derecho a una remuneración equitativa y satisfactoria.
          .col-lg-4.mb-4.mb-lg-0
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle.mb-5
                figure
                  img(src="@/assets/curso/tema1/27.svg", alt="alt").img120.m-auto
              p.text-center.mb-5 Este ingreso debe garantizar una vida digna para el trabajador y su familia.
          .col-lg-4.mb-4.mb-lg-0
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle.mb-5
                figure
                  img(src="@/assets/curso/tema1/28.svg", alt="alt").img120.m-auto
              p.text-center.mb-5 En caso necesario, debe complementarse con otras formas de protección social.

    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derecho a la soberanía alimentaria

    .row.mb-5.mt-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El Artículo 15 de la Declaración de los Derechos de los Campesinos establece el derecho a:
    
        .bg-color-5.tarjeta.p-4.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/30.svg", style="max-width: 275px").mx-auto
            .col-lg
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Una alimentación adecuada y a no padecer hambre.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Determinar sus propios sistemas alimentarios y agrícolas.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Exigir que los Estados respeten, protejan y cumplan este derecho.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Promover sistemas alimentarios justos y sostenibles, basados en la producción local.

        p Este derecho reconoce la autonomía del campesinado para definir qué, cómo y para quién producir los alimentos.
    
    p.mb-5 La Ley 135 de 1961 marcó un hito en la historia agraria de Colombia al establecer las bases de una reforma social orientada a transformar las condiciones del campo, reducir la desigualdad en la tenencia de la tierra y mejorar la calidad de vida de la población rural.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/31.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Inspiración y propósito
              p Basada en el principio del bien común, buscó ampliar los beneficios sociales y económicos a una mayor parte de la población rural colombiana.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/32.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Creación del INCORA
              p Se estableció el Instituto Colombiano de la Reforma Agraria (INCORA) como entidad encargada de implementar programas de redistribución de tierras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/33.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Adjudicación de tierras
              p Se promovió la entrega de tierras baldías y terrenos improductivos a campesinos sin tierra o con tierra insuficiente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/34.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Función social de la propiedad
              p Se reconoció que la tierra debía cumplir una función social, es decir, estar al servicio de la comunidad y no exclusivamente de intereses privados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/35.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Modernización del campo
              p Se impulsó el desarrollo rural mediante créditos, asistencia técnica y apoyo a la producción campesina.
    
    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Derecho a conservar, utilizar e intercambiar semillas

    .row.mb-5.mt-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/36.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El acceso libre a las semillas es parte esencial de la autonomía campesina. El Artículo 19 establece que:
    
        .bg-color-12.tarjeta.mb-3(data-aos="fade-left")
          .row.align-items-center.justify-content-center
            .col-md-3.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/37.svg", style="max-width: 275px").mx-auto
            .col-lg.p-5
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Los campesinos tienen derecho a conservar, utilizar, intercambiar y vender sus propias semillas o material de propagación tradicional.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Pueden mantener, proteger y desarrollar sus conocimientos tradicionales relacionados con las semillas y la biodiversidad agrícola.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Los Estados deben tomar medidas para apoyar estos derechos, promoviendo variedades locales.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Las leyes sobre propiedad intelectual, certificación o comercialización no deben restringir injustamente estos derechos.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Los campesinos tienen derecho a decidir qué cultivos sembrar y qué variedades utilizar, sin imposiciones.
    
    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Adopción de reformas agrarias

    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/38.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La Ley 135 de 1961, inspirada en el principio del bien común, representó un hito en la historia agraria de Colombia. Su objetivo era extender los beneficios de la tierra a sectores rurales excluidos:
    
        .bg-color-5.tarjeta.mb-3(data-aos="fade-left")
          .row.align-items-center.justify-content-center
            .col-md-3.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/39.svg", style="max-width: 275px").mx-auto
            .col-lg.p-5
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Creación del INCORA (Instituto Colombiano de la Reforma Agraria).
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Programas de redistribución de tierras y adjudicación de baldíos a campesinos sin tierra o con tierra insuficiente.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Reconocimiento de la función social de la propiedad, promoviendo su uso al servicio de la comunidad.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Impulso a la modernización del campo mediante créditos, asistencia técnica y apoyo a la producción.

    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Línea de tiempo de leyes para el campesino

    p.mb-5.mt-5 A lo largo de la historia legislativa colombiana, han sido aprobadas múltiples leyes destinadas a mejorar las condiciones de vida, trabajo, participación y reconocimiento del campesinado. A continuación se presenta una línea de tiempo con las normas más relevantes, agrupadas cronológicamente, que evidencian la evolución de las políticas públicas rurales en el país.

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Línea de tiempo de leyes para el campesino 

    figure.mb-5
      img(src='@/assets/curso/tema1/40.svg',, data-aos="zoom-in", alt='Línea de tiempo sobre normativas y políticas en favor del campesinado que incluye leyes de propiedad y reforma agraria, reconocimiento de derechos de mujeres rurales, ordenamiento territorial, desarrollo rural, implementación de programas como CAMPESENA, celebración del Día del Campesino y el Plan Nacional de Desarrollo vigente. ')
    
    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Ley 101 de 1993 – Ley sobre acceso a la propiedad rural

    .bg-full-width.bg-color-13
      .px-4.px-lg-5
        .row.mb-5.mt-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/41.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p(data-aos="fade-left").mb-5 A continuación, se presenta un pódcast que aborda los principios y objetivos fundamentales de la Ley 101 de 1993, la cual regula el acceso a la propiedad rural en Colombia y establece directrices clave para el desarrollo del sector agropecuario y pesquero en el marco constitucional.
            .bg-color-2.tarjeta.mb-5
              .p-4.p-md-5
                .row.justify-content-center.align-items-center
                  .col-md-6.col-lg-4.mb-3.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema1/42.svg", data-aos="zoom-in")
                  .col-lg-8      
                    TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                      texto="Ley 101 de 1993 – Ley sobre acceso a la propiedad rural"
                      tiempo
                      :audio="require('../assets/curso/podcast/podcast1.mp3')"
                    )

        h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Ley 160 de 1994 – Reforma agraria y desarrollo rural

        .row.mb-5.mt-5.align-items-center
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p(data-aos="fade-left") Esta norma regula la reforma agraria y el desarrollo rural en Colombia, promoviendo el acceso a la tierra para campesinos y comunidades rurales, con el fin de mejorar sus condiciones de vida y trabajo a través del apoyo al desarrollo económico y social. La ley establece:


        .row.justify-content-center.mb-5.px-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/44.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Distribución de la tierra
                p.text-center El Estado puede intervenir para repartir tierras mal utilizadas o en exceso por parte de grandes propietarios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/45.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Formalización de la propiedad
                p.text-center Facilita que los campesinos obtengan títulos legales sobre la tierra.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/46.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Planes de desarrollo rural
                p.text-center Mejora la infraestructura, la educación, la salud y la productividad del campo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/47.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Apoyo al campesinado
                p.text-center A través de créditos, asistencia técnica y capacitación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/48.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protección a comunidades indígenas y afrodescendientes
                p.text-center Reconoce sus derechos sobre la tierra y el territorio.   
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/43.png', alt='')

        h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Ley 731 de 2002 - Normas para favorecer a las mujeres rurales

    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/49.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Esta ley busca mejorar la calidad de vida de las mujeres del campo y ofrecerles igualdad de oportunidades, reconociendo y protegiendo a todas aquellas que participan en actividades rurales como agricultura, pesca, ganadería, artesanías, turismo rural, microempresas, entre otras. La ley garantiza:
    
        .bg-color-5.tarjeta.p-4.mb-3(data-aos="fade-left")
          div.bg-color-white.p-3.tarjeta
            ul.lista-ul--color.mb-0
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Acceso a recursos y créditos con tasas preferenciales.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Creación de fondos especiales para apoyo económico.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Educación y capacitación técnica, especialmente en proyectos productivos con apoyo del SENA.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Participación activa en consejos municipales de desarrollo rural y planeación territorial.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Representación del 30 % para mujeres afrocolombianas en órganos de decisión.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Acceso prioritario a vivienda para mujeres cabeza de hogar.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Participación mínima del 30 % de mujeres en proyectos rurales.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Igualdad salarial entre hombres y mujeres.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Seguimiento por parte del Estado a los programas y proyectos para garantizar su cumplimiento.

    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Ley 1801 de 2016 - Código Nacional de Policía y Convivencia

    .bg-full-width.bg-color-13
      .px-4.px-lg-5
        .row.mb-5.mt-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/50.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Aunque esta ley no se dirige exclusivamente al ámbito rural, en sus artículos 12 y 13 establece competencias a los concejos municipales y distritales en relación con el uso del suelo, el ordenamiento territorial y la protección del patrimonio natural y cultural, aspectos que afectan directamente a las comunidades campesinas. Las disposiciones relevantes son:
        
            .bg-color-14.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/51.svg", style="max-width: 275px").mx-auto
                .col-lg
                  div.bg-color-white.p-3.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-leaf.bg-color-7
                        p.mb-0 Los concejos pueden reglamentar comportamientos relacionados con:
                    ul.lista-ul--color.ms-4
                      li.mb-0.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                        p.mb-0 Uso del suelo
                      li.mb-0.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                        p.mb-0 Licencias urbanísticas
                      li.mb-0.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                        p.mb-0 Espacio público
                      li.mb-0.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                        p.mb-0 Patrimonio ecológico y cultural
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-leaf.bg-color-7
                        p.mb-0 Se proyectan medidas correctivas y sanciones para conductas que alteren el ordenamiento territorial o el urbanístico.

        h3.bg-color-10.d-lg-inline.text-white.p-2.tarjeta Sentencia 077 de 2017 - Zonas de interés de desarrollo rural y económico

        .row.mb-5.mt-5.align-items-center
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p(data-aos="fade-left") Esta sentencia promueve un nuevo modelo de desarrollo rural que busca facilitar, fomentar y formalizar el acceso a la tierra para diversos grupos del campo. Está dirigida a:  

        .row.justify-content-center.mb-5
          .col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .bg-color-15.tarjeta.p-4.h-100.shadow-app
              img(src='@/assets/curso/tema1/52.svg' alt='AvatarTop' , style="max-width: 68px").mx-auto.mb-3
              p.text-center Campesinos
          .col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
            .bg-color-15.tarjeta.p-4.h-100.shadow-app
              img(src='@/assets/curso/tema1/53.svg' alt='AvatarTop' , style="max-width: 68px").mx-auto.mb-3
              p.text-center Trabajadores agrarios
          .col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .bg-color-15.tarjeta.p-4.h-100.shadow-app
              img(src='@/assets/curso/tema1/54.svg' alt='AvatarTop' , style="max-width: 68px").mx-auto.mb-3
              p.text-center Mujeres rurales
          .col-lg-2.mb-3.mb-lg-0(data-aos="fade-down")
            .bg-color-15.tarjeta.p-4.h-100.shadow-app
              img(src='@/assets/curso/tema1/55.svg' alt='AvatarTop' , style="max-width: 68px").mx-auto.mb-3
              p.text-center Jóvenes rurales
          .col-lg-2.mb-3.mb-lg-0(data-aos="fade-up")
            .bg-color-15.tarjeta.p-4.h-100.shadow-app
              img(src='@/assets/curso/tema1/56.svg' alt='AvatarTop' , style="max-width: 68px").mx-auto.mb-3
              p.text-center Ocupantes tradicionales
        .bg-full-width.bg-color-5.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/57.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 <b>Objetivo</b>. Promover la inclusión social productiva del campo y brindar reconocimiento a quienes han ocupado y trabajado la tierra de forma tradicional.

    h3.bg-color-10.d-md-inline.text-white.p-2.tarjeta Ley 2223 de 2022 - Institucionalización del día del campesino

    .row.mb-5.mt-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/58.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Esta ley establece la celebración oficial del Día del Campesino en todo el territorio nacional, como forma de visibilizar la labor del campesinado y resaltar su importancia en la sociedad. Los propósitos principales son:
    
        .bg-color-14.tarjeta.p-4.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/59.svg", style="max-width: 272px").mx-auto
            .col-lg
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Visibilizar las labores campesinas.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Reconocer su aporte a la producción de alimentos.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Destacar su valor cultural y social para el país.
    
    h3.bg-color-10.d-lg-inline.text-white.p-2.tarjeta Ley 2294 de 2023 - Plan Nacional de Desarrollo 2022-2026 “Colombia potencia de vida”

    .row.mb-5.mt-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/60.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Esta ley define los propósitos del nuevo Plan Nacional de Desarrollo, orientado a transformar el país mediante un nuevo contrato social que supere las injusticias históricas y promueva una paz total, en armonía con la naturaleza.
        p Los objetivos estratégicos son:
    
        .bg-color-5.tarjeta.mb-3(data-aos="fade-left")
          .row.align-items-center.justify-content-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/61.svg", style="max-width: 275px").mx-auto
            .col-lg.p-5
              div.bg-color-white.p-3.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Sentar las bases para que Colombia se convierta en líder en la protección de la vida.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Promover la superación de exclusiones históricas.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Prevenir la repetición del conflicto armado.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Fortalecer la relación con el medio ambiente mediante una transformación productiva sostenible.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Promover el conocimiento como motor del desarrollo rural.
                  li.mb-0.d-flex
                    i.fa-solid.fa-leaf.bg-color-7
                    p.mb-0 Consolidar la “paz total” como eje de la política pública.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
