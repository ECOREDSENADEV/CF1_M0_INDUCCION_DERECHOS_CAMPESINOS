<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Reconocimiento de entidades gubernamentales y no gubernamentales para la defensa de los derechos campesinos
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-md-4.col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/2.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Para la garantía y protección de los derechos del campesinado, es fundamental identificar las entidades estatales y no estatales que actúan en defensa de sus derechos. Este reconocimiento permite a las comunidades campesinas acceder a mecanismos institucionales, ejercer su ciudadanía y defender activamente sus derechos.
        p Además, la Constitución Política de Colombia brinda herramientas legales que protegen a los ciudadanos frente a violaciones de sus derechos fundamentales. En el caso del campesinado, estas acciones constitucionales son clave para salvaguardar el acceso a la tierra, la salud, la educación, la vivienda, el trabajo digno y la soberanía alimentaria.
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Entidades gubernamentales
              p Las entidades gubernamentales hacen parte de la estructura del Estado. Su función es administrar recursos públicos y prestar servicios que garanticen el bienestar social en áreas como salud, educación, justicia, cultura, seguridad, medio ambiente y desarrollo rural. En el caso del campesinado, varias entidades tienen competencias específicas para promover sus derechos y fortalecer su desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Entidades no gubernamentales
              p Las entidades no gubernamentales, como las organizaciones sociales, ONG y asociaciones campesinas, cumplen un papel fundamental en la defensa de los derechos humanos, ambientales, culturales y territoriales. Estas organizaciones operan sin ánimo de lucro y trabajan de forma autónoma, movilizando recursos y generando procesos de acompañamiento, denuncia y formación en las comunidades rurales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Acciones constitucionales en defensa de los derechos del campesino
              p Las acciones constitucionales son mecanismos jurídicos que permiten a cualquier ciudadano proteger sus derechos cuando estos han sido vulnerados o están en riesgo. En el caso del campesinado, estas acciones resultan esenciales para exigir el cumplimiento de derechos fundamentales como la tierra, el territorio, el ambiente sano, la vivienda, la salud, la educación y la participación.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Es importante visualizar de manera estructurada cuáles son las entidades que tienen competencia en la defensa de los derechos del campesinado, tanto desde el ámbito estatal como desde la sociedad civil. A su vez, se presentan las acciones constitucionales disponibles para proteger estos derechos cuando han sido vulnerados o se encuentran en riesgo. El siguiente cuadro resume de forma comparativa las principales entidades gubernamentales, organizaciones no gubernamentales y mecanismos legales de defensa, facilitando su identificación y comprensión por parte de las comunidades.
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Entidades y acciones en defensa de los derechos campesinos 

    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th.bg-color-2 Entidades gubernamentales
            th.bg-color-2 Entidades no gubernamentales
            th.bg-color-2 Acciones constitucionales
        tbody
          tr
            td Ministerio del Interior
            td Asociaciones campesinas
            td Acción de tutela
          tr
            td Ministerio de Agricultura
            td Decreto 660 del 17 de abril de 2018
            td Derecho de petición
          tr
            td Unidad Nacional de Protección (UNP)
            td —
            td Habeas corpus
          tr
            td Procuraduría General de la Nación
            td —
            td Habeas data
          tr
            td Defensoría del Pueblo
            td —
            td Acción de cumplimiento
          tr
            td Gobernaciones, alcaldías y secretarías
            td —
            td Acción popular
          tr
            td Personerías municipales
            td —
            td Acción de grupo
          tr
            td Unidad para la Atención y Reparación Integral a las Víctimas
            td —
            td —
          tr
            td Agencia Nacional de Tierras
            td —
            td —
          tr
            td Unidad de Restitución de Tierras
            td —
            td —
          tr
            td Agencia de Desarrollo Rural
            td —
            td —
          tr
            td Comisarías de Familia
            td —
            td —
          tr
            td Fiscalía General de la Nación
            td —
            td —
          tr
            td Unidad de Planificación Rural Agropecuaria (UPRA)
            td —
            td —

    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas entidades y mecanismos conforman una red institucional y legal que permite al campesinado organizarse, exigir, participar y defender sus derechos en el marco del Estado Social de Derecho. Conocerlos fortalece la capacidad de gestión comunitaria y el ejercicio pleno de la ciudadanía rural.
    

          

</template>

<script>
export default {
  name: 'Tema3',
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
