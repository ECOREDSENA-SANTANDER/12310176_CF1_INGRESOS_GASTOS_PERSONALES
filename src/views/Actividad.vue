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
      tema: 'Gestión eficiente de ingresos y gastos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión básica de conceptos clave relacionados con ingresos, gastos y planificación financiera personal.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Los ingresos dependientes provienen principalmente de inversiones en bienes raíces o acciones. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'Los gastos hormiga suelen ser pequeños, frecuentes y pasan desapercibidos, pero afectan el presupuesto. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'El ahorro debe considerarse como un gasto obligatorio dentro del presupuesto mensual. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'Los gastos emocionales se realizan de forma racional y planificada, basados en necesidades reales. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'Tener un salario fijo asegura por sí solo la libertad financiera. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'Elaborar un plan de gastos es una estrategia para equilibrar ingresos y egresos. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'Los ingresos independientes ofrecen mayor estabilidad que los ingresos dependientes. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'Los gastos fijos se caracterizan por mantenerse constantes y regulares. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'Gastar en productos por moda o estatus es un ejemplo de necesidad prioritaria. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'Diversificar los ingresos y controlar los gastos son claves para una salud financiera sostenible. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Cada acierto nos acerca a una mejor educación financiera. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! posee una buena comprensión sobre los conceptos fundamentales para el desarrollo de la actividad de chequeo rápido de nuestras finanzas personales. ¡Siga explorando este fascinante mundo de los ingresos y gastos personales! ',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
