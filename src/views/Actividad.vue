<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Generalidades de los Derechos Campesinos',
      titulo: 'Cuestionario',
      introduccion:
        'Comprender los fundamentos prácticos relacionados con las generalidades de los derechos campesinos, étnicas y herramientas de autodiagnóstico y entidades garantes de los derechos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué reconoce el Acto Legislativo 01 de 2023 sobre el campesinado colombiano?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconoce al campesinado como sujeto de derechos y de especial protección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Lo define como grupo vulnerable sin derechos específicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establece que solo los agricultores tienen derechos rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Declara al campesinado como parte del sector privado rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué implica el derecho a la tierra y al territorio para el campesinado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la tenencia legal de la tierra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El acceso exclusivo a zonas protegidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Uso, control, protección y relación cultural con la tierra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La compra y venta obligatoria de terrenos rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los objetivos del enfoque diferencial aplicado al campesinado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unificar las prácticas culturales de todas las regiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reconocer las condiciones particulares del campesinado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar las diferencias económicas con zonas urbanas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imponer políticas públicas homogéneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica de autodiagnóstico se basa en el análisis de Fortalezas, Oportunidades, Debilidades y Amenazas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Observación participativa.', esCorrecta: false },
            { id: 'b', texto: 'Entrevista dirigida.', esCorrecta: false },
            { id: 'c', texto: 'Cartografía social.', esCorrecta: false },
            { id: 'd', texto: 'FODA.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué derecho permite al campesinado determinar el valor y destino comercial de sus productos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Derecho a la libre escogencia de mercado y determinación del precio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Derecho a la soberanía alimentaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Derecho a contar con medios de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Derecho a la protección territorial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué garantiza el derecho a un nivel de vida adecuado según la Declaración Universal de los Derechos Humanos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo acceso a salud.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Vivienda, alimentación, salud y seguridad social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Derecho exclusivo a servicios rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libertad de expresión y religión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué función cumple la cartografía social como herramienta de diagnóstico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representar colectivamente el territorio y sus problemáticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar entrevistas personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar expedientes judiciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar especies agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué ley promueve el acceso a la tierra y desarrollo rural desde 1994?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 101 de 1993.', esCorrecta: false },
            { id: 'b', texto: 'Ley 731 de 2002.', esCorrecta: false },
            { id: 'c', texto: 'Ley 160 de 1994.', esCorrecta: true },
            { id: 'd', texto: 'Ley 1801 de 2016.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué entidad estatal es responsable de la restitución de tierras a comunidades desplazadas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ministerio del Interior.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Unidad de Restitución de Tierras.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Defensoría del Pueblo.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Fiscalía General de la Nación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué acción constitucional permite proteger derechos fundamentales cuando están en riesgo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acción de tutela.', esCorrecta: true },
            { id: 'b', texto: 'Derecho de petición.', esCorrecta: false },
            { id: 'c', texto: 'Habeas corpus.', esCorrecta: false },
            { id: 'd', texto: 'Acción popular.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El campesinado está compuesto exclusivamente por agricultores.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El enfoque diferencial busca garantizar igualdad real respetando condiciones particulares.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La Ley 731 de 2002 establece normas que favorecen a las mujeres rurales.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El derecho a conservar e intercambiar semillas es parte de los derechos del campesinado.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las ONG son entidades gubernamentales encargadas de administrar recursos públicos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
