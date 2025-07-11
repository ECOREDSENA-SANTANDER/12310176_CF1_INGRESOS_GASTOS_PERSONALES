<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptualización: ingresos y gastos personales
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}")
        .bloque-texto-g__texto.p-4
          p.mb-0 En el contexto de una economía dinámica, globalizada y marcada por la incertidumbre, la capacidad de administrar eficazmente los recursos financieros personales es una competencia crítica para el desarrollo individual y colectivo. La educación financiera, entendida como el conjunto de conocimientos, habilidades y actitudes necesarias para tomar decisiones informadas en materia de dinero, se convierte en un eje transversal de la vida moderna. Dentro de este marco, la comprensión integral de los ingresos y los gastos personales resulta indispensable para alcanzar el bienestar económico, reducir la vulnerabilidad financiera y construir un futuro sostenible.

      p.mb-4 Los ingresos personales constituyen el conjunto de recursos económicos, tanto monetarios como no monetarios, que una persona percibe como compensación por su participación en actividades productivas, comerciales o de inversión. Esta percepción puede tomar distintas formas, tales como salarios, honorarios, dividendos, alquileres, regalías, transferencias o ingresos en especie. En términos generales, los ingresos se clasifican en dos grandes categorías:

      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-primario.color-sistema-texto.bg-textura.p-5
          .row.align-items-end.mb-4
            .col-5.col-md-5.col-lg-3
              img(src='@/assets/curso/temas/t1/2.svg', alt='')
            .col-lg-9.col-7
              .subt2
                h3.mb-0 Ingresos dependientes
          p Se derivan de una relación laboral subordinada, generalmente regulada por un contrato de trabajo. Incluyen salarios, bonificaciones, comisiones y prestaciones sociales (como seguridad social, pensión, cesantías y primas), lo que otorga al individuo una relativa estabilidad financiera, acceso a servicios de protección social y previsibilidad en sus flujos de caja. Estos ingresos suelen estar limitados por estructuras salariales y jerarquías organizacionales.
        .col-md.tarjeta.bg1.bg-textura.p-5
          .row.align-items-end.mb-4
            .col-5.col-md-5.col-lg-3
              img(src='@/assets/curso/temas/t1/3.svg', alt='')
            .col-lg-9.col-7
              .subt2
                h3.mb-0 Ingresos independientes
          p Corresponden a aquellos generados por actividades económicas autónomas, como el emprendimiento, la prestación de servicios profesionales, el trabajo freelance, la inversión en instrumentos financieros o bienes raíces, entre otros. Aunque estos ingresos pueden ofrecer una mayor rentabilidad potencial, también implican un nivel más alto de incertidumbre, volatilidad y riesgo, además de exigir competencias en gestión financiera, mercadeo y autogestión del tiempo.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
        .col-lg-5
          .bg3.tarjeta.p-4.mb-4.mb-lg-0
            p.mb-0 Cada tipo de ingreso implica una estructura de incentivos distinta y requiere estrategias financieras adaptadas para su administración. Por ejemplo, los ingresos independientes deben gestionarse con especial atención al flujo de efectivo, la planificación tributaria y la construcción de redes de seguridad (como seguros o fondos de emergencia), dado que no cuentan con la protección inherente al empleo formal.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-lg-4
          img.w-90px.mb-3(src='@/assets/curso/temas/t1/5.png', alt='')
          p Por otro lado, los gastos personales comprenden todas las erogaciones que una persona realiza para satisfacer necesidades básicas (como alimentación, vivienda, transporte y salud) y deseos o aspiraciones (como entretenimiento, viajes, formación continua, entre otros). Estos gastos se pueden dividir en:

      .row.justify-content-center.mb-4(data-aos="fade")
        .col-lg-4.col-md-6.mb-3
          .tarjeta.bg1.bg-textura.p-4.tarj1-hover.h-100
            .imgs-hover.mb-3.text-center
              img.img1.w-90px(src='@/assets/curso/temas/t1/tarj1-1-1.svg', alt='')
              img.img2.w-90px(src='@/assets/curso/temas/t1/tarj1-1-2.svg', alt='')
            .subt3.mb-4.m-auto
              h4.mb-0 Gastos fijos
            p.text-center Son aquellos que se mantienen constantes tanto en monto como en frecuencia, independientemente del nivel de consumo o de ingresos. Generalmente, corresponden a compromisos financieros permanentes que deben cumplirse regularmente, como el arriendo de vivienda, el pago de servicios públicos, seguros o las cuotas de préstamos adquiridos.
        .col-lg-4.col-md-6.mb-3
          .tarjeta.bg1.bg-textura.p-4.tarj1-hover.h-100
            .imgs-hover.mb-3.text-center
              img.img1.w-90px(src='@/assets/curso/temas/t1/tarj1-2-1.svg', alt='')
              img.img2.w-90px(src='@/assets/curso/temas/t1/tarj1-2-2.svg', alt='')
            .subt3.mb-4.m-auto
              h4.mb-0 Gastos variables
            p.text-center Se caracterizan por fluctuar según el nivel de consumo, las decisiones personales y las circunstancias del momento. Aunque algunos de ellos son necesarios, como la alimentación o el transporte, su valor puede modificarse mes a mes. También incluyen rubros como el ocio, que pueden incrementarse o reducirse según la situación financiera.
        .col-lg-4.col-md-6.mb-3
          .tarjeta.bg1.bg-textura.p-4.tarj1-hover.h-100
            .imgs-hover.mb-3.text-center
              img.img1.w-90px(src='@/assets/curso/temas/t1/tarj1-3-1.svg', alt='')
              img.img2.w-90px(src='@/assets/curso/temas/t1/tarj1-3-2.svg', alt='')
            .subt3.mb-4.m-auto
              h4.mb-0 Gastos discrecionales
            p.text-center Son aquellos que no resultan esenciales para cubrir las necesidades básicas y, por tanto, pueden ajustarse o eliminarse sin afectar significativamente el nivel de vida. Incluyen actividades o bienes asociados al entretenimiento, la adquisición de tecnología, viajes, salidas sociales o productos de lujo.
          
      p Administrar eficazmente los ingresos y los gastos requiere establecer una planificación financiera personal que permita identificar la frecuencia, magnitud y propósito de cada egreso, diferenciando entre necesidades reales y deseos inducidos por el consumo emocional o la presión social. El reconocimiento de los gastos emocionales, muchas veces originados por situaciones de ansiedad, conflicto o insatisfacción, permite tomar conciencia sobre patrones de consumo irracional que pueden derivar en endeudamiento innecesario y estrés financiero.

      .row.bgc-2.align-items-center.p-2.pt-5.p-md-3.mb-4(data-aos="fade")
        .col-lg-12.col-12.px-lg-4
          .row.justify-content-center.align-items-center

            .row.justify-content-center.align-items-center
              .col-lg-7
                p Desde un enfoque pedagógico y formativo, promover la responsabilidad financiera implica desarrollar habilidades para elaborar presupuestos, llevar registros de ingresos y egresos, priorizar necesidades, establecer metas de ahorro, y tomar decisiones informadas en función de los ingresos disponibles. La implementación de estrategias para incrementar los ingresos (como la capacitación continua, la inversión o la diversificación de fuentes) y para controlar los gastos (como la compra inteligente, la planificación del consumo y la previsión ante emergencias) fortalece la autonomía económica y la resiliencia financiera de los individuos.
              .col-lg-5.col-md-9
                img(src='@/assets/curso/temas/t1/6.png', alt='')

      .tarjeta.color-acento-contenido.p-3.p-lg-4.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/t1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 ¿Qué son los ingresos, gastos y cuáles son los tuyos? | Curso de Manejo del dinero
                p.mb-0 Se invita a revisar el siguiente video, el cual aborda de manera clara y didáctica los conceptos esenciales de ingresos y gastos personales, elementos fundamentales para una adecuada gestión financiera.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://youtu.be/h0Cp6A1hN_M')" target="_blank")
                  span Ir al video
                  i.fas.fa-circle-play
      
      .py-4.py-md-0.py-lg-2
      .tarjeta.bg-color-secundario.px-4.px-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-2.col-md-3
            img.mn-20.w-140px(src='@/assets/curso/temas/t1/7.png', alt='')
          .col-lg-10.col-md-9
            p.text-white.p-3.p-lg-2.mb-0 Entender a fondo los conceptos de ingresos y gastos personales no solo permite ordenar las finanzas, sino que es el primer paso hacia la libertad financiera. Su adecuada conceptualización, medición y control, fomentan hábitos financieros saludables y sostenibles, claves en una economía cada vez más dinámica y exigente.


  </template>

<script>
export default {
  name: 'Tema1',
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
