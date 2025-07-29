<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Los ingresos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los ingresos son los recursos económicos que una persona, empresa o entidad recibe de manera regular o esporádica, como resultado de su actividad laboral, comercial, financiera o de otro tipo. En términos simples, los ingresos representan el dinero que entra, y pueden provenir de diferentes fuentes, como sueldos, salarios, ventas, rentas, intereses o inversiones, fundamentales para cubrir necesidades, pagar gastos y, en el caso de las empresas, para evaluar su desempeño y rentabilidad. #[br] #[br]
        p.mb-0 Comprender qué son los ingresos es esencial para llevar un buen control financiero, ya que permite planificar, ahorrar e invertir de manera más eficiente.

    p Los ingresos personales se pueden obtener de dos formas principales: a través del trabajo independiente o del trabajo dependiente.

    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Ingresos independientes

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg3.tarjeta.p-4.p-lg-5
          p.mb-0 Incluye actividades realizadas como empresario o inversionista. Un empresario genera ingresos al crear y gestionar un negocio propio, asumiendo riesgos pero también teniendo la posibilidad de obtener mayores ganancias. Esto incluye la compra y venta de bienes o servicios, así como la prestación de asistencia técnica o profesional. Sumado a esto, los ingresos se consideran variables, ya que no siempre se reciben en un tiempo determinado ni en montos fijos, dependiendo de factores como la demanda del mercado, la frecuencia del trabajo realizado o los acuerdos establecidos con los clientes.
    
    p Por otro lado, un inversionista obtiene ingresos mediante la colocación de su dinero en activos que generen rendimientos, como acciones, bienes raíces o fondos de inversión.

    p.mb-4 Entre quienes reciben ingresos independientes se encuentran:
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-5.col-7.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg2")
          .row.justify-content-around(titulo="Empresario")
            .col-11
              p.mb-0 Un empresario es aquella persona que crea, dirige o administra una empresa con el objetivo de obtener beneficios económicos. Las empresas generan ganancias a partir de la venta de productos o servicios, y una parte significativa de esas utilidades se destinan a los propietarios o socios del negocio. Ser empresario implica asumir riesgos financieros, tomar decisiones estratégicas y gestionar recursos humanos y materiales. A cambio, el empresario puede obtener ingresos variables, que dependen del desempeño y crecimiento de la empresa.
          .row.justify-content-around(titulo="Inversionista")
            .col-11
              p.mb-0 Un inversionista es quien destina su capital a un proyecto, empresa, activo financiero o iniciativa económica con la intención de obtener una ganancia futura. Su objetivo principal es recuperar el dinero invertido junto con un rendimiento adicional, conocido como interés o retorno. Las inversiones pueden variar en nivel de riesgo y plazo, y pueden incluir desde la compra de acciones o bonos, hasta la financiación de emprendimientos o bienes raíces. A diferencia del empresario, el inversionista no necesariamente participa en la gestión del negocio, pero sí espera obtener beneficios en función del éxito del proyecto.
          .row.justify-content-around(titulo="Profesional")
            .col-11
              p.mb-0 El profesional independiente ofrece sus conocimientos y habilidades especializadas en un área determinada, como salud, ingeniería, diseño, derecho, entre otros. Cuando presta sus servicios mediante un contrato de obra o por honorarios, sin establecer una relación laboral formal, genera ingresos sin derecho a prestaciones sociales como seguridad social, vacaciones o indemnizaciones. Este tipo de trabajo, conocido también como #[em freelance] o autónomo, permite mayor flexibilidad, pero también implica una mayor responsabilidad en la administración de los ingresos, impuestos y seguridad personal.

    p Otros ingresos independientes:

    SlyderF.circl-arrow.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-1.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Emprendedor informal o por cuenta propia
        p.text-center Personas que realizan actividades económicas sin constituir una empresa formal, como ventas ambulantes, oficios artesanales, trabajos domésticos, entre otros. Aunque no siempre están registrados legalmente, generan ingresos de manera independiente.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-2.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 #[em Freelancer] o trabajador independiente digital
        p.text-center Quienes ofrecen servicios por encargo a través de plataformas digitales (diseño gráfico, programación, traducción, redacción, #[em marketing], etc.). Trabajan por proyecto y tienen varios clientes sin una relación laboral directa.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-3.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Comerciante o vendedor autónomo
        p.text-center Personas que compran y venden productos de forma independiente, ya sea en mercados, redes sociales, tiendas virtuales o físicas, sin formar parte de una empresa estructurada.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-4.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Artista o creador de contenido
        p.text-center Músicos, escritores, pintores, #[em influencers], y creadores de contenido digital (YouTube, TikTok, blogs, etc.) que obtienen ingresos por ventas, regalías, patrocinios o monetización en plataformas.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-5.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Agricultor o productor rural independiente
        p.text-center Personas que trabajan la tierra o crían animales por cuenta propia y venden su producción directamente, sin intermediarios ni relación de dependencia.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-6.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Alquiler o arrendamiento de bienes
        p.text-center Ingresos generados por alquilar propiedades (casas, apartamentos, vehículos, equipos, etc.). Aunque no requiere una actividad constante, sí es una forma de ingreso independiente.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1-7.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Consultor o asesor externo
        p.text-center Profesionales que brindan orientación o asesoría especializada a empresas o personas, sin ser empleados fijos, en áreas como finanzas, recursos humanos, tecnología, educación, entre otros.
    
    p.mb-4 A continuación, se presentan las principales ventajas y desventajas asociadas a los ingresos independientes:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.color-sistema-texto.bg-textura.p-5
        .row.align-items-end.mb-4
          .col-4.col-md-5.col-lg-3
            img(src='@/assets/curso/temas/t2/4.svg', alt='')
          .col-lg-9.col-7
            .subt2
              h3.mb-0 Ventajas
        p Ofrece la posibilidad de obtener mayores ganancias económicas. Además, brinda un mayor control sobre el manejo del tiempo y una mayor autonomía en la toma de decisiones. Esto permite al trabajador independiente organizar su agenda, elegir los proyectos en los que desea participar y definir su propio rumbo profesional.
      .col-md.tarjeta.bg1.bg-textura.p-5
        .row.align-items-end.mb-4
          .col-4.col-md-5.col-lg-3
            img(src='@/assets/curso/temas/t2/5.svg', alt='')
          .col-lg-9.col-7
            .subt2
              h3.mb-0 Desventajas
        p Esta modalidad implica ciertos riesgos. Los ingresos pueden ser inestables y variar mes a mes debido a la naturaleza variable de las actividades económicas independientes. Existe la posibilidad de que la empresa, el negocio o la labor realizada no generen los ingresos suficientes para cubrir todos los gastos personales u operativos, lo que puede afectar la estabilidad financiera.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")      
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/6.png', alt='')
      .col-lg-7
        img.w-90px.mb-3(src='@/assets/curso/temas/t2/7.png', alt='')
        p Ejercer una actividad económica de forma independiente conlleva responsabilidades adicionales, como la rendición de cuentas ante entidades públicas y privadas, así como el cumplimiento de obligaciones fiscales. 
        p Dependiendo del tipo de actividad, será necesario declarar ingresos, pagar impuestos y realizar aportes conforme a la legislación vigente.

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5(data-aos="fade")
      .row.justify-content-center.align-items-center        
        .col-lg-10.col-md-9.order-2.order-lg-1
          p.p-3.p-lg-2.mb-0 Se precisa una adecuada planificación y manejo financiero para garantizar el cumplimiento legal y la sostenibilidad del trabajo independiente.
        .col-lg-2.col-md-3.order-1
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Ingresos dependientes

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/9.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Son aquellos que una persona percibe como resultado de una relación laboral formal con una empresa, institución pública o privada. En este tipo de vínculo, el trabajador presta sus servicios bajo la dirección y subordinación de un empleador, quien a su vez tiene la obligación de pagar una remuneración acordada, conocida como salario o sueldo. Esta relación está regulada por un contrato laboral, que puede ser verbal o escrito, y está sujeta a lo establecido en la legislación laboral vigente del país. #[br] #[br]
        p.mb-0 El trabajador se compromete a cumplir con una jornada, funciones y normas establecidas, mientras que el empleador debe garantizar condiciones adecuadas de trabajo, remuneración oportuna y el acceso a beneficios como la seguridad social, las prestaciones legales (vacaciones, primas, cesantías, etc.) y, en algunos casos, incentivos adicionales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5
        .bg3.tarjeta.p-4.mb-4.mb-lg-0
          p.mb-0 La naturaleza periódica y estable de estos ingresos permite una mayor previsibilidad financiera, ya que suelen ser fijos y se entregan de manera regular, generalmente de forma mensual, quincenal o semanal, según las políticas de la empresa o las normativas del país. Esta regularidad facilita la planificación de gastos, el acceso al crédito y la creación de hábitos financieros más estructurados.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-4
        p Aunque estos ingresos ofrecen estabilidad económica, también están condicionados a la permanencia del vínculo laboral. Por tanto, factores como despidos, reestructuraciones o crisis económicas pueden afectar la continuidad de los ingresos, lo que refuerza la importancia de la educación financiera y la diversificación de fuentes de ingreso, incluso en contextos de empleo dependiente.

    p A continuación, se presentan las principales ventajas y desventajas asociadas a los ingresos dependientes:

    TabsB.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-4.py-md-5(titulo="Ventajas de los ingresos dependientes" :icono="require('@/assets/curso/temas/t2/tab1-ico1.svg')")
        .row.justify-content-center
          .col-11.col-md-7.mb-4.mb-md-0
            ul.lista-ul--color.fa-lista.lista-ico
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Estabilidad económica:] se recibe un salario fijo y periódico (mensual, quincenal, etc.).
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Prestaciones sociales:] acceso a beneficios como salud, pensión, vacaciones, primas, cesantías y licencias.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Menor riesgo financiero:] no se requiere invertir capital propio ni asumir los riesgos del negocio.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Acceso a crédito más fácil:] los bancos e instituciones financieras suelen considerar más seguros los ingresos fijos.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Derechos laborales protegidos:] el empleado cuenta con protección legal en caso de despido injustificado, enfermedades laborales o accidentes.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Ambiente estructurado:] el trabajador opera bajo una jerarquía clara con funciones y horarios definidos.
          .col-11.col-md-4
            img(src='@/assets/curso/temas/t2/tab1-1.png', alt='')
      .py-4.py-md-5(titulo="Desventajas de los ingresos dependientes" :icono="require('@/assets/curso/temas/t2/tab1-ico2.svg')")
        .row.justify-content-center
          .col-11.col-md-7.mb-4.mb-md-0
            ul.lista-ul--color.fa-lista.lista-ico
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Limitación de ingresos:] el salario suele estar predefinido y tiene menos posibilidades de aumentar significativamente a corto plazo.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Menor autonomía:] el trabajador debe cumplir con horarios, reglas y decisiones tomadas por sus superiores.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Dependencia del empleador:] la estabilidad del ingreso depende de la continuidad del empleo.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Menor flexibilidad de tiempo:] dificultad para ajustar horarios o tomar decisiones personales durante la jornada laboral.
              li
                img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                span.mb-0 #[b Pocas oportunidades de crecimiento rápido:] los ascensos y aumentos pueden ser lentos y depender de factores externos.
          .col-11.col-md-4
            img(src='@/assets/curso/temas/t2/tab1-2.png', alt='')

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')
        .col-lg-10.col-md-9
          p.p-3.p-lg-2.mb-0 Ambas formas de generar ingresos son válidas y pueden complementarse. Mientras que el empleo ofrece estabilidad y seguridad económica, el trabajo independiente puede brindar mayor libertad y potencial de crecimiento financiero si se administra correctamente. Entender estas diferencias permite tomar decisiones más informadas sobre el manejo del dinero y las oportunidades de desarrollo profesional y personal.


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Estrategias para mejorar los ingresos

    p.mb-4 Mejorar los ingresos implica implementar un conjunto de acciones estratégicas orientadas a aumentar las ventas, optimizar la rentabilidad, diversificar las fuentes de ingreso y maximizar el valor percibido por los clientes. A continuación, se detallan las principales estrategias para lograr este objetivo:

    .row.bgc-3.align-items-center.p-4.p-lg-5.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
           
          .tarjeta.tarjeta--blanca.p-4
            PasosB.color-acento-contenido
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Diversificación de productos o servicios
                  p Ampliar la oferta de productos o servicios permite atender nuevas necesidades del mercado, atraer distintos segmentos de clientes y generar fuentes adicionales de ingreso. Esta estrategia reduce la dependencia de un solo producto o línea de negocio.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Expansión a nuevos mercados
                  p Explorar nuevos nichos de mercado, geografías o segmentos demográficos puede generar oportunidades de crecimiento de ingresos. Esto puede incluir expansión local, nacional o internacional, según la capacidad operativa de la empresa.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Optimización de precios
                  p Revisar y ajustar la estrategia de precios en función del valor percibido, la competencia y la disposición a pagar del cliente, permite maximizar los márgenes de ganancia sin necesariamente incrementar los volúmenes de venta.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Mejora de la experiencia del cliente
                  p Ofrecer una experiencia de cliente excepcional aumenta la fidelización y genera recomendaciones. La mejora continua del servicio, la personalización y el soporte posventa son claves en este aspecto.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Digitalización y comercio electrónico
                  p Aprovechar canales digitales para comercializar productos o servicios permite llegar a más clientes a menor costo, automatizar procesos de venta y recolectar datos valiosos para tomar decisiones estratégicas.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Alianzas estratégicas y colaboraciones
                  p Establecer alianzas con otras empresas, marcas o #[em influencers] puede ampliar la base de clientes, reducir costos de adquisición y generar sinergias para crear nuevas propuestas de valor.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Incremento de la productividad y eficiencia operativa
                  p Reducir costos sin sacrificar calidad mejora el margen de beneficio. La optimización de procesos, la automatización y la formación del personal contribuyen directamente a una mayor rentabilidad.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Innovación continua
                  p El desarrollo de nuevas soluciones, mejoras en productos existentes y adopción de nuevas tecnologías fortalece la competitividad y puede dar origen a nuevas líneas de ingresos.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Monetización de activos intangibles
                  p Licenciar propiedad intelectual, vender datos (respetando la legislación vigente) o explotar el #[em branding] son formas de generar ingresos a partir de activos no tangibles que muchas veces están subutilizados. 
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Programas de fidelización y venta cruzada
                  p Implementar estrategias para aumentar la recurrencia de compra y ofrecer productos complementarios (#[em upselling] y #[em cross-selling]) maximiza el valor de vida del cliente (#[em Customer Lifetime Value], CLV).
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Mejora de habilidades
                  p Capacitarse en áreas con alta demanda como idiomas, herramientas digitales, programación u oficios técnicos, lo cual le permite fortalecer su perfil profesional.
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Empleo y crecimiento profesional
                  p Busque opciones de empleo con mejores condiciones, postúlese a ascensos o explore el trabajo remoto. El fortalecimiento de su red de contactos y perfil en plataformas como LinkedIn es clave para destacar.             
              .row.justify-content-center(titulo="")
                .col-11
                  h4 Ingresos extra
                  p Utilice su tiempo libre para ofrecer servicios #[em freelance], vender productos físicos o digitales, o brindar clases en línea. Estas actividades complementarias pueden convertirse en una fuente estable de ingresos adicionales.
              
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p Las posibilidades de generación de ingresos pueden variar sustancialmente según la naturaleza de la actividad económica que se ejerce, el entorno competitivo y, en gran medida, el nivel de visión estratégica y creatividad que se aplique en la toma de decisiones. La capacidad de innovar, repensar modelos tradicionales de negocio y detectar oportunidades no evidentes se convierte en un activo fundamental para alcanzar niveles superiores de desempeño económico.
        .bg5.p-4.mb-3
          p.mb-0 Es crucial liberar la mente de limitaciones autoimpuestas, prejuicios y paradigmas arraigados que puedan estar restringiendo el potencial de crecimiento. Muchas veces, las barreras más fuertes no son externas, sino internas: suposiciones obsoletas, temores al cambio, resistencia a la disrupción o una interpretación rígida del propio rol en el mercado. Romper con estos condicionamientos permite acceder a nuevas ideas, modelos de monetización y formas de añadir valor al mercado.
        p El establecimiento de metas y objetivos claros, medibles y con horizonte temporal definido, tanto a corto como a largo plazo, resulta esencial no solo como herramienta de planificación, sino como motor de motivación sostenida.
      .col-lg-3.col-md-5.d-none.d-md-block    
        img(src='@/assets/curso/temas/t2/11.png', alt='')

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')
        .col-lg-10.col-md-9
          p.p-3.p-lg-2.mb-0 El crecimiento financiero no es exclusivamente producto de condiciones externas o del azar, sino de una combinación entre planificación consciente, creatividad proactiva y una actitud mental orientada al logro y a la transformación constante.


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4  Manejo adecuado de los ingresos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/12.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Este concepto se refiere a la capacidad de gestionar de manera eficiente los recursos monetarios percibidos, ya sea por concepto de salario, renta, utilidades, dividendos u otras fuentes, en relación con los compromisos financieros u obligaciones económicas que deben cubrirse en un periodo determinado. #[br] #[br]
        p.mb-0 No se trata únicamente de equilibrar ingresos y egresos, sino de optimizar la utilización del capital disponible con el fin de satisfacer las necesidades básicas, cumplir metas a corto, mediano y largo plazo, crear patrimonio, y enfrentar contingencias con solvencia. Esta gestión eficaz parte del principio de que el dinero, al ser un recurso limitado, requiere una administración estratégica, intencional y basada en criterios de racionalidad económica.
    
    p.mb-4 Si bien es cierto que el dinero ofrece una protección funcional frente a situaciones presentes y futuras, al permitir el acceso a bienes, servicios y seguridad, su verdadero valor se potencia a través de una planificación financiera rigurosa, lo cual implica organizar y asignar los ingresos de forma deliberada para que no solo cumplan su propósito inmediato, sino que también generen crecimiento y sostenibilidad a lo largo del tiempo.

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5.mb-4(data-aos="fade")
      .row.justify-content-center.align-items-center        
        .col-lg-10.col-md-9.order-2.order-lg-1
          p.p-3.p-lg-2.mb-0 Los expertos en finanzas personales y economía doméstica han demostrado que el éxito en la gestión del dinero no depende exclusivamente del nivel de ingreso, sino de la capacidad de administrarlo con criterio, previsión y disciplina. Esta afirmación se traduce en una regla clave: quien domina sus finanzas personales adquiere poder de decisión, libertad financiera y resiliencia económica.
        .col-lg-2.col-md-3.order-1
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')

    p.mb-4 Gestionar el ingreso de manera adecuada permite:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-3.col-md-5.col-9.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/13.png', alt='')
      .col-lg-5.col-md-7
        ul.lista-ul--color.fa-lista.lista-ico
          li
            img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
            span.mb-0 Establecer un presupuesto estructurado y realista.
          li
            img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
            span.mb-0 Diferenciar entre necesidades y deseos.
          li
            img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
            span.mb-0 Planificar el ahorro sistemático y la inversión prudente.
          li
            img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
            span.mb-0 Evitar el sobreendeudamiento y gestionar eficientemente el crédito.
          li
            img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
            span.mb-0 Prepararse para emergencias económicas sin comprometer la estabilidad general.
          li
            img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
            span.mb-0 Tomar decisiones basadas en metas personales y no en presiones externas o inmediatas.
      .col-lg-4
        .tarjeta.bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 El manejo eficiente del ingreso trasciende la mera administración contable. Se convierte en una herramienta de empoderamiento financiero que permite ejercer control sobre el presente y construir un futuro económico más seguro, estable y libre de dependencia. La educación financiera, en este sentido, es un recurso clave para transformar los ingresos en oportunidades sostenibles de bienestar.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Factores clave

    .row.justify-content-center.cursor-pointer.mb-5.d-none.d-md-flex
      .col-lg-6.col-md-10.col-12.mb-4.mb-lg-0(data-aos="fade-right")
        .crd_hover_txt.tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t2/tarj-hov-1.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Organización
            p.mb-0 Organizar los ingresos de manera efectiva requiere asegurar que estos sean consistentemente mayores que los gastos, generando un superávit que permita ahorrar, invertir y enfrentar imprevistos. Iniciar con un flujo de caja positivo es clave para evitar el endeudamiento y lograr estabilidad financiera. Para ello, es fundamental aplicar herramientas como presupuestos y registros que faciliten decisiones informadas, con el objetivo de no solo cubrir necesidades, sino también construir una base económica sólida y sostenible a largo plazo.
      .col-lg-6.col-md-10.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .crd_hover_txt.tarjeta(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t2/tarj-hov-2.png", alt="")
          .crd_hover_txt--body.text-center
            h4.mb-3 Previsión
            p.mb-0 Los ingresos, ya provengan de trabajo dependiente o independiente, deben distribuirse de forma equilibrada entre el pago de obligaciones, la inversión futura y el ahorro. Esta gestión estratégica permite mantener la estabilidad financiera, generar nuevas oportunidades de crecimiento, mejorar la capacidad de respuesta ante emergencias económicas y construir un patrimonio sólido a lo largo del tiempo, fomentando así una cultura financiera sostenible, responsable y orientada al desarrollo personal, familiar y económico.
    .row.mb-5.d-md-none.d-block
      .col-12.mb-4
        h4.mb-3 Organización
        p.mb-0 Organizar los ingresos de manera efectiva requiere asegurar que estos sean consistentemente mayores que los gastos, generando un superávit que permita ahorrar, invertir y enfrentar imprevistos. Iniciar con un flujo de caja positivo es clave para evitar el endeudamiento y lograr estabilidad financiera. Para ello, es fundamental aplicar herramientas como presupuestos y registros que faciliten decisiones informadas, con el objetivo de no solo cubrir necesidades, sino también construir una base económica sólida y sostenible a largo plazo.
      .col-12.mb-4
        h4.mb-3 Previsión
        p.mb-0 Los ingresos, ya provengan de trabajo dependiente o independiente, deben distribuirse de forma equilibrada entre el pago de obligaciones, la inversión futura y el ahorro. Esta gestión estratégica permite mantener la estabilidad financiera, generar nuevas oportunidades de crecimiento, mejorar la capacidad de respuesta ante emergencias económicas y construir un patrimonio sólido a lo largo del tiempo, fomentando así una cultura financiera sostenible, responsable y orientada al desarrollo personal, familiar y económico.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Necesidades reales y creadas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/14.png', alt='')
      .col-lg-9.col-md-7(data-aos="fade-left")
        p La sociedad actual, influenciada por el consumismo y el #[em marketing], promueve la adquisición de bienes y servicios que muchas veces no responden a necesidades reales, sino a deseos inducidos para aumentar el consumo y el capital. Esta distorsión entre lo esencial y lo superfluo puede generar decisiones financieras poco racionales y sobreendeudamiento. Es fundamental fomentar una educación financiera crítica que permita identificar verdaderas necesidades, tomar decisiones conscientes y alinear el consumo con los objetivos personales y no con presiones externas.
        p Según la interpretación de Montes (2013), la teoría de Maslow plantea cinco niveles que permiten establecer prioridades en los tipos de gasto. Estas prioridades se organizan en los siguientes niveles:

    SlyderF.circl-arrow.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj2-1.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Fisiológicas
        p.text-center Son las necesidades básicas y prioritarias para la supervivencia del ser humano, por lo que deben ser las primeras en cubrirse. Incluyen alimentación, vivienda, vestimenta y descanso, y constituyen la base sobre la cual se estructura el bienestar físico y funcional.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj2-2.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Seguridad
        p.text-center Estas necesidades están estrechamente relacionadas con las fisiológicas, pero se proyectan a mediano y largo plazo. Mientras que en el primer nivel se busca satisfacer necesidades inmediatas como alimentarse, en este nivel se prioriza un estilo de vida estable y saludable, que incluya, por ejemplo, la ingesta de productos nutritivos, acceso a servicios de salud, estabilidad laboral y protección financiera.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj2-3.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Afiliación
        p.text-center Corresponden a necesidades de índole social, vinculadas al sentido de pertenencia y a las relaciones afectivas. Los gastos en este nivel están orientados a fortalecer vínculos personales mediante actividades de esparcimiento o convivencia con amigos, pareja o familiares.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj2-4.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Reconocimiento
        p.text-center Este tipo de necesidad responde al deseo de valoración personal y externa. Los gastos asociados a este nivel buscan reforzar la autoestima, el respeto social y la percepción de éxito, a través de acciones o adquisiciones que reflejen logros, confianza y estatus.
      .tarjeta.bg4.bg-textura.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj2-5.svg' alt='')
        .subt2.mb-3.m-auto
          h4.text-center.mb-0 Autorrealización
        p.text-center Representa el nivel más alto de realización personal. Los gastos dirigidos a esta necesidad buscan alcanzar la plenitud, el desarrollo del potencial y el cumplimiento de metas personales profundas, como la formación continua, el emprendimiento, el arte o experiencias transformadoras.

    p.mb-4 Para una gestión financiera adecuada, es fundamental considerar no solo el monto de los ingresos, sino también la frecuencia con la que se perciben. No es lo mismo administrar un ingreso mensual o semanal que gestionar recursos que se reciben a diario o de forma esporádica. Cada tipo de frecuencia exige una planificación distinta: mientras los ingresos regulares permiten una estructura presupuestaria más estable, los ingresos variables requieren mayor control, disciplina y previsión para garantizar la cobertura de necesidades básicas, el ahorro y la sostenibilidad financiera a lo largo del tiempo.

    .row.mb-5
      .col-lg-10.position-relative
        .avatar
          img(src="@/assets/curso/temas/t2/15.svg", alt="")         
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/16.svg", alt="")
            .col
              p.mb-0 Mantener un #[b registro detallado y actualizado] de los ingresos, egresos y el saldo disponible, lo cual permite tener un panorama claro de la situación financiera en todo momento.
        .crd.crd--avatarHorizontal.crd--second.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/17.svg", alt="")
            .col
              p.mb-0 Establecer una #[b distribución inteligente del ingreso mensual], destinar al menos un 10 % al ahorro, hasta un 20 % al pago de obligaciones financieras, y un 70 % para cubrir inversiones, costos operativos, manutención y gastos esenciales.
        .crd.crd--avatarHorizontal.crd--third.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/18.svg", alt="")
            .col
              p.mb-0 Practicar un #[b consumo responsable], adquiriendo únicamente bienes y servicios que sean realmente necesarios, evitando el gasto impulsivo o innecesario.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/19.svg", alt="alt")
            .col
              p.mb-0 Buscar #[b asesoría profesional en finanzas personales] y capacitarse de manera continua para fortalecer los conocimientos y habilidades que permitan tomar decisiones económicas más informadas y sostenibles.
      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
