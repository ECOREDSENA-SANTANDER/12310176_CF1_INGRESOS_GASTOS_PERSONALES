<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Los ingresos

    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Ingresos independientes



    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Ingresos dependientes



    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Estrategias para mejorar los ingresos



    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4  Manejo adecuado de los ingresos




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
