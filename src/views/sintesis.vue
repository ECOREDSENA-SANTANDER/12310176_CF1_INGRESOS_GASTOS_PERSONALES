<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La administración adecuada de los ingresos y gastos personales es un componente esencial para lograr estabilidad financiera y bienestar integral. En un entorno económico cada vez más incierto y cambiante, contar con educación financiera no solo permite tomar decisiones informadas sobre el uso del dinero, sino también anticiparse a imprevistos, evitar el sobreendeudamiento y construir un futuro sostenible. Esta síntesis reúne los conceptos fundamentales abordados en el componente formativo, proporcionando una visión clara y estructurada sobre la importancia de planificar, controlar y optimizar los recursos económicos disponibles a nivel personal. 

    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis expone la gestión eficiente de ingresos y gastos se basa en la educación financiera, el manejo adecuado de ingresos (dependientes e independientes), el control responsable de los gastos y la planificación financiera, con el objetivo de lograr una administración personal consciente, sostenible y orientada al bienestar.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
