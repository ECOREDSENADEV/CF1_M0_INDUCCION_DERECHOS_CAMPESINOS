<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Características sociales, económicas, culturales, políticas, productivas y ambientales del territorio
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") El territorio, como categoría analítica y espacio de acción social, es mucho más que una delimitación física. En él convergen múltiples dimensiones: sociales, culturales, económicas, políticas, productivas y ambientales,  que permiten comprender la complejidad de los procesos que allí se desarrollan. Por tanto, es necesario aproximarse a su definición y significado desde diferentes enfoques para analizar adecuadamente el contexto rural y campesino.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Territorio
    
    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") A continuación, se presenta un video que aborda el concepto de territorio desde una perspectiva integral, destacando sus dimensiones físicas, jurídicas, sociales y políticas, así como su importancia en la configuración del espacio geográfico y en la planificación del desarrollo.
    
    figure
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Técnicas y herramientas del autodiagnóstico
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/4.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") El autodiagnóstico es un proceso que permite a una persona, grupo o comunidad analizar su situación actual para identificar fortalezas, necesidades, oportunidades y dificultades. Este proceso tiene como propósito comprender de manera más objetiva la realidad que se vive, con el fin de tomar decisiones informadas basadas en los hallazgos.
        p Las técnicas y herramientas del autodiagnóstico son variadas y se utilizan según el contexto y los objetivos del grupo. A continuación, se describen algunas de las más comunes:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Conversatorio
              p Herramienta participativa basada en el diálogo abierto. Varias personas discuten un tema específico para compartir saberes, experiencias y opiniones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Observación
              p Técnica de recolección de información que consiste en mirar, escuchar y registrar sistemáticamente hechos, comportamientos y situaciones tal como ocurren en la realidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Asamblea
              p Técnica de participación colectiva. Reúne a un grupo de personas para dialogar sobre un tema específico y tomar decisiones de forma conjunta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Diálogo
              p Herramienta transversal para el diagnóstico. Permite el entendimiento entre personas, la resolución de conflictos y la construcción colectiva de soluciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Taller
              p Técnica de enseñanza y aprendizaje que se basa en el aprender haciendo. Favorece la reflexión colectiva, el trabajo en grupo y la construcción de conocimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Entrevista
              p Diálogo planificado entre dos o más personas, orientado a recolectar información sobre datos, percepciones, opiniones o experiencias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 FODA
              p Herramienta práctica para organizar información y reflexionar sobre la situación de un grupo, organización o proyecto. Analiza Fortalezas, Oportunidades, Debilidades y Amenazas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Reunión
              p Técnica organizada para reunir a varias personas con el fin de intercambiar información, tomar decisiones o coordinar acciones según el diagnóstico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Cartografía social
              p Técnica participativa que permite representar, analizar y reflexionar colectivamente sobre el territorio, sus problemas y recursos, mediante la elaboración de mapas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Análisis
              p Proceso reflexivo que examina los resultados obtenidos a través de las técnicas aplicadas. Permite profundizar en las causas, consecuencias y relaciones entre los elementos diagnosticados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Evaluación
              p Estrategia que permite recolectar, analizar e interpretar información para emitir juicios y tomar decisiones. Es útil tanto al inicio como al final del proceso de diagnóstico.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas herramientas no solo permiten comprender la realidad desde múltiples perspectivas, sino que fomentan la participación activa de la comunidad en la identificación de problemas y la construcción de soluciones. El uso adecuado y combinado de estas técnicas fortalece los procesos organizativos y promueve decisiones colectivas más conscientes y fundamentadas.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Aspectos claves y conceptos básicos de la situación a diagnosticar

    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") Todo proceso de autodiagnóstico requiere identificar y comprender una serie de aspectos fundamentales que permiten analizar de forma estructurada la situación actual de una persona, grupo o comunidad. Estos aspectos no solo ayudan a identificar problemas concretos, sino también a contextualizarlos dentro de marcos económicos, políticos, sociales, ambientales y productivos. A continuación se presentan los principales elementos que deben considerarse al momento de realizar un diagnóstico participativo:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Problemas
              p Situaciones identificadas por una persona o grupo que afectan su bienestar. Estos problemas deben describirse claramente y hacerse visibles para orientar la búsqueda de soluciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Contexto productivo
              p Conjunto de actividades económicas del territorio, capacidades humanas locales, y procesos de producción de bienes y servicios. Refleja el potencial de desarrollo y sostenibilidad de la comunidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Contexto ambiental
              p Condiciones naturales, físicas y ecológicas del entorno. Incluye la disponibilidad y calidad de recursos naturales como el agua, el aire y el suelo. También abarca los impactos ambientales existentes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Contexto económico
              p Condiciones relacionadas con los recursos, estructuras y dinámicas económicas del territorio. Analiza factores como empleo, ingresos, mercado, acceso a servicios y sostenibilidad financiera.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Contexto político
              p Conjunto de instituciones, normas, ideologías y relaciones de poder que regulan la organización y el funcionamiento del Estado. Afecta directamente la toma de decisiones en el territorio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Contexto social
              p Dinámicas de relación entre actores sociales, culturales, económicos y políticos. Incluye estructuras de organización comunitaria, redes sociales, costumbres, tradiciones y formas de vida.
          
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estos conceptos funcionan como categorías analíticas para entender integralmente una situación en un territorio. Abordarlos de manera articulada permite no solo identificar los problemas, sino también sus causas estructurales, relaciones con el entorno y oportunidades de transformación.
    
    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Contenidos de los contextos

    .row.mb-5.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") El análisis contextual permite comprender de manera integral las condiciones que afectan la vida de una comunidad, su territorio y su desarrollo. Examinar los diferentes contextos: social, político, económico, ambiental y productivo,  facilita la identificación de problemáticas, fortalezas y oportunidades, proporcionando una base sólida para la toma de decisiones y la formulación de propuestas de mejora. A continuación, se presentan los principales contenidos de cada uno de estos contextos.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          .div(titulo="Contexto social").ms-5
            p Este contexto se refiere a las condiciones, relaciones y dinámicas sociales, culturales, económicas, políticas y ambientales que influyen directamente en la vida de una persona, grupo o comunidad. Estas condiciones determinan el comportamiento, la identidad, las oportunidades y las formas de interacción de los individuos con su entorno. El contexto social abarca factores como:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Estructuras familiares y comunitarias.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Redes de apoyo social.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Tradiciones y costumbres.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Acceso a servicios y participación ciudadana.
            p Comprender este contexto permite valorar la cohesión social, los niveles de organización comunitaria y las capacidades colectivas para la acción.
          .div(titulo="Contexto político").ms-5
            p Este contexto comprende el conjunto de condiciones, instituciones, normas, ideologías, actores y dinámicas de poder que definen la organización del Estado y de la vida pública en un tiempo y lugar específicos. Influye en cómo se:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Toman las decisiones.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Distribuye el poder.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Determinan los derechos y deberes ciudadanos.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Desarrollan las políticas públicas.
            p Analizar el contexto político permite identificar los niveles de participación, el grado de representación de la comunidad, el acceso a la institucionalidad y cómo las políticas afectan directa o indirectamente a la población rural.
          .div(titulo="Contexto económico").ms-5
            p Este contexto se centra en las condiciones, recursos, estructuras y dinámicas económicas que afectan la vida de personas, grupos, comunidades o el país en su conjunto. Permite identificar aspectos como:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Nivel de ingresos de la población.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Empleo y desempleo.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Producción de bienes y servicios.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Acceso a recursos materiales y financieros.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Políticas económicas del Estado.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Condiciones del mercado, tanto nacional como internacional.
            p El análisis del contexto económico permite comprender las capacidades de generación de ingresos, las desigualdades existentes y las oportunidades para el desarrollo local.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/23.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          .div(titulo="Contexto ambiental").ms-5
            p Este contexto aborda los principales factores naturales, físicos y ecológicos que condicionan el desarrollo humano y social en un territorio. Incluye elementos como:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Recursos naturales disponibles.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Condiciones climáticas.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Biodiversidad.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Calidad del aire, agua y suelo.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Impactos de la acción humana: contaminación, deforestación, urbanización, cambio climático.
            p Comprender este contexto es esencial para garantizar la sostenibilidad del territorio y tomar decisiones que respeten y protejan el entorno natural.
          .div(titulo="Contexto productivo del territorio").ms-5
            p Este contexto se vincula directamente con el sistema económico del territorio y hace referencia al conjunto de actividades que producen bienes y servicios, aprovechando los recursos locales. Incluye:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Actividades económicas existentes.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Recursos naturales disponibles.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Capacidades humanas.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Infraestructura y tecnología.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Niveles de organización productiva.
            p Analizar el contexto productivo permite identificar el potencial de desarrollo económico local, las limitaciones para la producción y las oportunidades para mejorar la productividad y el bienestar de las comunidades rurales.
          .div(titulo="Reconocimiento de problemáticas").ms-5
            p El reconocimiento de las problemáticas surge a partir del análisis integral de los contextos anteriormente descritos. Este paso permite identificar, describir y visibilizar aquellas situaciones que afectan el bienestar de la comunidad. Además, propicia la participación activa de las personas en el diagnóstico, reconociendo:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Necesidades prioritarias.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Recursos disponibles.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Capacidades organizativas.
              li.mb-0.d-flex
                i.fa-solid.fa-leaf.bg-color-7
                p.mb-0 Oportunidades de transformación.
            p Este reconocimiento es clave para avanzar hacia soluciones concretas y sostenibles, construidas desde la realidad y con la participación de quienes habitan el territorio.
    
          
    
         
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
