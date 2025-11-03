<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-4
      .px-4.px-lg-5
        .row.mb-3
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") En el componente formativo Fomento de los derechos del campesinado se propicia la comprensión integral de los derechos del campesino, reconociéndolo como sujeto político y actor esencial en el desarrollo rural. A partir del estudio de las características sociales, económicas, culturales, políticas, productivas y ambientales del territorio, los aprendices fortalecen su capacidad de análisis para identificar problemáticas, potencialidades y dinámicas propias del contexto rural al que pertenecen.

            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    p.mb-0(data-aos="fade-up") Durante la experiencia de aprendizaje, se promueve el uso de herramientas de autodiagnóstico que facilitan la comprensión de los diversos contextos del territorio, fomentando el autoconocimiento, la reflexión colectiva y la construcción de propuestas de transformación social. Así, los aprendices adquieren competencias para reconocer su entorno, analizar las condiciones que afectan la garantía de los derechos campesinos y participar activamente en la búsqueda de soluciones comunitarias.

        .bg-full-width.bg-color-2
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 De igual manera, se estudian las entidades gubernamentales y no gubernamentales encargadas de la protección de los derechos del campesinado, junto con las acciones constitucionales disponibles para su defensa. A través de esta comprensión, los aprendices podrán formular rutas comunitarias de acción que contribuyan al fortalecimiento de la organización campesina y a la promoción de una ciudadanía rural activa, en coherencia con la misión del SENA y los principios de la reforma agraria.


</template>

<script>
export default {
  name: 'Introduccion',
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
