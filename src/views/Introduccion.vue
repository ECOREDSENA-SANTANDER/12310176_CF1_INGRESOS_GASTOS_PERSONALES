<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg1.p-4.mb-4
          p.mb-0 El manejo adecuado de los ingresos y gastos personales constituye un pilar esencial para lograr estabilidad económica, bienestar emocional y desarrollo personal. Más allá de una simple práctica contable, la gestión financiera personal implica la adopción de hábitos conscientes que permiten tomar decisiones informadas sobre el uso del dinero, anticiparse a imprevistos, evitar el sobreendeudamiento y planificar de manera estratégica para alcanzar metas de vida, tanto en el corto como en el largo plazo.
        p En un contexto económico caracterizado por la volatilidad de los mercados, el aumento del costo de vida y la proliferación de productos financieros, la educación financiera adquiere un valor estratégico. Esta no solo promueve la autonomía económica de los individuos, sino que también fortalece su capacidad para analizar riesgos, evaluar alternativas de inversión, administrar créditos de manera responsable y construir un patrimonio sostenible.
    
    .bg2.p-4.mb-3
      p.mb-0 Además, la alfabetización financiera es una competencia transversal que impacta positivamente en la toma de decisiones cotidianas, en la calidad de vida y en la reducción de la ansiedad asociada a la incertidumbre económica. Por ello, fomentar la formación en finanzas personales desde una perspectiva integral y contextualizada no es solo una necesidad individual, sino un componente clave para el desarrollo social y económico de los países.

    .row.bgc-1.align-items-center.p-2.pt-5.p-md-3.pt-md-4.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center        
            .col-lg-12
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. 

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
