<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Los gastos


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 En términos financieros, un gasto se define como toda erogación monetaria que realiza una persona, hogar o unidad económica con el fin de satisfacer necesidades o cumplir obligaciones dentro de un determinado periodo de tiempo. A diferencia de una inversión, el gasto representa una salida de dinero cuyo retorno económico directo no se espera en el corto ni en el mediano plazo, aunque puede generar beneficios no tangibles o indirectos (por ejemplo, bienestar, salud o educación).

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Tipología de los gastos

    p.mb-4 Los gastos pueden clasificarse en diferentes categorías según su naturaleza, periodicidad y nivel de importancia:

    TabsA.color-acento-botones.mb-4(data-aos="fade-down")
      .tarjeta.bg2.p-4.py-lg-5(titulo="Tipología 1")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-6.mb-3.mb-lg-0
            h4 Tipología 1: gastos opcionales
            img(src="@/assets/curso/temas/t3/tab1-1.png")
          .col-lg-6.col-md-6            
            p Son aquellos gastos que no responden a una necesidad esencial o prioritaria, sino que están relacionados con preferencias, deseos o decisiones voluntarias del consumidor. Suelen ser variables y fácilmente eliminables o reducibles. Ejemplos incluyen entretenimiento, comidas fuera de casa o compras impulsivas.
      .tarjeta.bg2.p-4.py-lg-5(titulo="Tipología 2")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-6.mb-3.mb-lg-0
            h4 Tipología 2: gastos esenciales o flexibles
            img(src="@/assets/curso/temas/t3/tab1-2.png")
          .col-lg-6.col-md-6        
            p Corresponden a necesidades importantes para mantener una calidad de vida adecuada, aunque pueden ser ajustados o diferidos temporalmente según la disponibilidad financiera. Incluyen, por ejemplo, ropa, servicios de salud no urgentes, mantenimiento del hogar, entre otros.
      .tarjeta.bg2.p-4.py-lg-5(titulo="Tipología 3")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-6.mb-3.mb-lg-0
            h4 Tipología 3: gastos fijos o recurrentes
            img(src="@/assets/curso/temas/t3/tab1-3.png")
          .col-lg-6.col-md-6        
            p Son erogaciones periódicas, previsibles y generalmente ineludibles que tienen un monto establecido o relativamente constante, con vencimientos regulares. Ejemplos típicos son el arriendo, servicios públicos, cuotas de préstamos, seguros o suscripciones. Algunos pueden tener periodicidad distinta, como impuestos trimestrales o anuales.
      .tarjeta.bg2.p-4.py-lg-5(titulo="Tipología 4")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-6.mb-3.mb-lg-0
            h4 Tipología 4: gastos imprevistos o de emergencia
            img(src="@/assets/curso/temas/t3/tab1-4.png")
          .col-lg-6.col-md-6        
            p Se refieren a desembolsos no planificados que surgen como consecuencia de situaciones inesperadas (accidentes, enfermedades, reparaciones urgentes, etc.). Dado su impacto potencial en la estabilidad financiera, se recomienda mantener un fondo de reserva o ahorro de contingencia para afrontarlos.
      .tarjeta.bg2.p-4.py-lg-5(titulo="Tipología 5")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-6.mb-3.mb-lg-0
            h4 Tipología 5: gastos discrecionales (autoindulgentes)
            img(src="@/assets/curso/temas/t3/tab1-5.png")
          .col-lg-6.col-md-6        
            p Aunque a veces se agrupan con los opcionales, se pueden distinguir como aquellos gastos voluntarios destinados al disfrute personal o al bienestar emocional. Son elegidos conscientemente para el placer o confort individual, como viajes, regalos o tratamientos estéticos. Su control es clave en una planificación financiera saludable.
      .tarjeta.bg2.p-4.py-lg-5(titulo="Tipología 6")
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-6.mb-3.mb-lg-0
            h4 Tipología 6: gastos hormiga
            img(src="@/assets/curso/temas/t3/tab1-6.png")
          .col-lg-6.col-md-6        
            p Son erogaciones de pequeño valor individual pero de alta frecuencia que, al acumularse, pueden representar una proporción significativa del gasto total sin ser fácilmente detectadas. Suelen pasar desapercibidas, por lo que requieren un seguimiento detallado. Ejemplos: cafés diarios, #[em snacks], aplicaciones de pago, propinas o transporte informal.

    p.mb-4 Identificar y priorizar los gastos es fundamental para una gestión financiera eficaz. Reducirlos sin un análisis previo puede afectar necesidades básicas o generar consecuencias mayores a futuro.

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')
        .col-lg-10.col-md-9
          p.p-3.p-lg-2.mb-0 Controlar los gastos no significa simplemente disminuir el consumo, sino gastar con propósito, diferenciando entre lo esencial y lo prescindible; así se optimiza el uso del ingreso, se evitan desequilibrios financieros y se orientan los recursos hacia objetivos como el ahorro, la inversión o la reducción de deudas.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Responsabilidad frente al gasto

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")      
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            img.w-90px.mb-3(src='@/assets/curso/temas/t3/3.svg', alt='')
          .col
            p.mb-0 Una vez identificada la importancia de categorizar los gastos, el siguiente paso crítico en la gestión financiera responsable es reflexionar sobre el sentido y la intención con la que se utilizan los ingresos disponibles. Esta reflexión implica comprender que el acto de gastar no es neutral ni meramente operativo, sino que conlleva una responsabilidad personal, social y financiera, especialmente cuando los recursos son limitados.
        .tarjeta.bg1.p-4
          p.mb-0 Es fundamental diferenciar entre gastos motivados por necesidades reales, como alimentación, salud, vivienda o educación, y aquellos impulsados por deseos, emociones momentáneas o presiones externas, como el consumo por estatus o la gratificación instantánea. La falta de esta distinción puede conducir al descontrol financiero, al sobreendeudamiento o a la postergación de metas importantes como el ahorro o la inversión.

    p.mb-5 Es importante reflexionar sobre las diversas responsabilidades implicadas en cada decisión de gasto.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 ¿Necesidad o deseo?

    p.mb-4 Antes de realizar un gasto, es esencial analizar si responde a una necesidad real o a un deseo, priorizando siempre lo indispensable para el bienestar o el funcionamiento básico. Tomar decisiones financieras racionales permite evitar impactos negativos en la liquidez, especialmente cuando no se cuenta con el capital suficiente. El consumo debe ser informado y planificado, basado en un presupuesto que priorice los gastos esenciales, evite el endeudamiento innecesario y contribuya a una gestión financiera sostenible orientada al ahorro y la inversión.

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.color-primario.color-sistema-texto.bg-textura.p-5
        .row.align-items-end.mb-4
          .col-4.col-md-5.col-lg-3
            img(src='@/assets/curso/temas/t3/4.svg', alt='')
          .col-lg-9.col-7
            .subt2
              h3.mb-0 Necesidad
        p Se refiere a los bienes y servicios esenciales para garantizar una calidad de vida digna dentro de un entorno social determinado. Entre ellos se incluyen la alimentación, la vivienda, el acceso a servicios públicos, la vestimenta básica y la educación, los cuales constituyen el núcleo del bienestar individual. No obstante, las necesidades pueden variar según la etapa del ciclo vital. Por ejemplo, en la adultez o la tercera edad, pueden surgir nuevas prioridades relacionadas con la salud, como la adquisición de medicamentos o dispositivos médicos para el manejo de enfermedades crónicas, lo que demuestra que las necesidades no son estáticas, sino dinámicas y contextuales.
      .col-md.tarjeta.bg1.bg-textura.p-5
        .row.align-items-end.mb-4
          .col-4.col-md-5.col-lg-3
            img(src='@/assets/curso/temas/t3/5.svg', alt='')
          .col-lg-9.col-7
            .subt2
              h3.mb-0 Deseo
        p Corresponde a aquellos bienes o servicios que, aunque pueden mejorar el confort o el estilo de vida, no son indispensables para la supervivencia ni para el cumplimiento de funciones básicas. Los deseos suelen estar motivados por factores emocionales, sociales o culturales, y frecuentemente son influenciados por estrategias de #[em marketing] y tendencias de consumo. En muchos casos, responden a patrones aspiracionales dentro de una “sociedad de las apariencias”, donde el valor simbólico de los bienes, como estatus, imagen y pertenencia, pesa más que su utilidad real. Por ello, los deseos deben gestionarse con criterio para evitar un consumo innecesario que comprometa la estabilidad financiera.

    p Para identificar el tipo de gasto que se está realizando, es útil formularse una pregunta clave: ¿Este bien o servicio es verdaderamente indispensable para vivir con dignidad o mantenerme seguro, o responde únicamente a un deseo personal? Esta reflexión permite diferenciar si se trata de una necesidad esencial o de un gasto discrecional.
    p.mb-5 Una vez se realiza este análisis consciente, es posible clasificar adecuadamente el gasto y tomar decisiones financieras más responsables y alineadas con los objetivos personales o familiares.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Gastos emocionales

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/6.jpg')})`}")
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Este tipo de gastos, conocidos como gastos impulsivos o compulsivos, representan una categoría de consumo no planificado caracterizada por la falta de racionalidad en la toma de decisiones económicas. #[br] #[br]
        p.mb-0 Según Mendoza (2011), estos gastos suelen originarse como una respuesta emocional frente a situaciones conflictivas o estresantes, tales como problemas laborales, conflictos familiares o de pareja, entre otros. En estos casos, el acto de comprar opera como una estrategia de afrontamiento emocional que proporciona una satisfacción inmediata pero efímera, seguida frecuentemente por sentimientos de culpa, frustración o arrepentimiento al reconocer que el gasto fue innecesario o contraproducente.

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/7.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Desde la perspectiva de la psicología del consumidor, este comportamiento puede estar vinculado a la búsqueda de recompensas emocionales o a la necesidad de validación social, siendo explotado de forma estratégica por las campañas publicitarias. Estas apelan al deseo de pertenencia, estatus o autoestima, incentivando la idea de que el consumo puede aliviar el malestar emocional o mejorar la autoimagen. De este modo, el gasto impulsivo puede enmascararse como una forma de satisfacer una necesidad psicológica profunda, como la aceptación social o la autorrealización, aunque en realidad responde a un deseo inducido y no a una necesidad real.
        .tarjeta.bg1.p-4
          p.mb-0 El problema con este tipo de gasto radica en su carácter irracional y recurrente, lo que lo convierte en uno de los más riesgosos para la salud financiera. Al ser realizados sin una evaluación consciente de su impacto económico, pueden comprometer seriamente el presupuesto personal, fomentar el sobreendeudamiento y obstaculizar el logro de objetivos financieros a largo plazo.

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center        
        .col-lg-10.col-md-9.order-2.order-lg-1
          p.p-3.p-lg-2.mb-0 Es fundamental adoptar una postura crítica y reflexiva frente al consumo, especialmente en momentos de vulnerabilidad emocional. Antes de efectuar una compra, es recomendable hacerse preguntas clave como: ¿Estoy comprando esto por necesidad o por impulso? ¿Me sentiré satisfecho con esta decisión dentro de unos días? ¿Este gasto está alineado con mis prioridades financieras? Desarrollar esta conciencia permite ejercer un mayor autocontrol y promover hábitos financieros saludables basados en la planificación, la moderación y el propósito.
        .col-lg-2.col-md-3.order-1
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Tipos de responsabilidad

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        p Es fundamental comprender que, al igual que el ejercicio de los derechos, toda persona tiene el deber de asumir una responsabilidad activa frente a sus decisiones de gasto, ya que estas impactan directamente en su estabilidad económica y calidad de vida. La falta de control y conciencia financiera puede conducir a situaciones riesgosas, como el uso excesivo del crédito formal (tarjetas, préstamos bancarios) o informal (prestamistas no regulados), para cubrir necesidades básicas como vivienda, alimentación, transporte, educación y vestuario, lo cual es una señal clara de desequilibrio financiero.
        .tarjeta.bg1.p-4
          p.mb-0 Más grave aún es recurrir a este tipo de financiamiento para satisfacer deseos o consumos superfluos, sin una evaluación previa del estado real del presupuesto personal o familiar. Esta práctica puede generar un efecto de bola de nieve, en el que se acumulan obligaciones financieras insostenibles, afectando no solo el presente, sino también las posibilidades futuras de ahorro, inversión y bienestar.
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/8.png', alt='')

    p.mb-4 El manejo responsable del gasto implica desarrollar una cultura financiera basada en la planificación, la priorización y el consumo consciente. En este marco, las responsabilidades frente al gasto pueden clasificarse en las siguientes categorías:

    .row.justify-content-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/9.png', alt='')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Responsabilidad presupuestal")
            .col-lg-6.col-md-6
              p Consiste en elaborar, seguir y ajustar un presupuesto personal o familiar que contemple los ingresos reales y establezca límites claros para los egresos, priorizando siempre los gastos esenciales y evitando el déficit.
            .col-lg-6.col-md-6
              img(src='@/assets/curso/temas/t3/linea1-1.png', alt='')
          .row.justify-content-center(numero="2" titulo="Responsabilidad crediticia")
            .col-lg-6.col-md-6
              p Implica utilizar el crédito únicamente como una herramienta estratégica para inversiones productivas o emergencias justificadas, nunca como un sustituto del ingreso para cubrir consumos recurrentes o deseos momentáneos.
            .col-lg-6.col-md-6
              img(src='@/assets/curso/temas/t3/linea1-2.png', alt='')
          .row.justify-content-center(numero="3" titulo="Responsabilidad emocional")
            .col-lg-6.col-md-6
              p Reconocer y gestionar las emociones que pueden incidir en decisiones impulsivas de consumo, fomentando la autorregulación y el control del gasto ante presiones sociales, publicitarias o estados de ánimo.
            .col-lg-6.col-md-6
              img(src='@/assets/curso/temas/t3/linea1-3.png', alt='')
          .row.justify-content-center(numero="4" titulo="Responsabilidad informativa")
            .col-lg-6.col-md-6
              p Conocer los términos y condiciones de cualquier producto financiero o crédito adquirido, así como educarse continuamente sobre finanzas personales para tomar decisiones fundamentadas.
            .col-lg-6.col-md-6
              img(src='@/assets/curso/temas/t3/linea1-4.png', alt='')
          .row.justify-content-center(numero="5" titulo="Responsabilidad social y familiar")
            .col-lg-6.col-md-6
              p Entender que las decisiones de gasto no afectan solo al individuo, sino también a su entorno familiar o comunitario, por lo que deben ser coherentes con los objetivos comunes, el bienestar colectivo y el uso eficiente de los recursos compartidos.
            .col-lg-6.col-md-6
              img(src='@/assets/curso/temas/t3/linea1-5.png', alt='')


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Estrategias para controlar el gasto

    p.mb-5 Para gestionar el gasto de manera eficiente, es recomendable aplicar estrategias de administración financiera que contribuyan a optimizar el uso de los recursos, mejorar el flujo de efectivo y, en consecuencia, elevar la calidad de vida.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Plan de gastos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/10.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Elaborar un plan de gastos es una herramienta esencial para la administración eficiente de los recursos financieros. Este proceso permite visualizar con claridad la relación entre ingresos y egresos, facilitando la toma de decisiones informadas. El primer paso consiste en realizar un análisis detallado de los ingresos y gastos, considerando su monto, frecuencia y naturaleza (fijos o variables). Posteriormente, se debe calcular el total de ingresos y egresos por separado. #[br] #[br]
        p.mb-0 Una vez obtenidas ambas sumas, se procede a restar los egresos del total de ingresos. Este resultado permitirá determinar si los recursos disponibles fueron suficientes para cubrir las obligaciones financieras del periodo.

    p En caso de que los gastos superen los ingresos, se presenta un desfase presupuestal, lo cual indica un desequilibrio financiero. Ante esta situación, es indispensable revisar los gastos variables y evaluar si es posible reducirlos, así como analizar los gastos fijos en busca de oportunidades de optimización.
    p.mb-4 Paralelamente, puede considerarse la generación de ingresos adicionales como parte de una estrategia integral para recuperar la estabilidad económica y evitar el sobreendeudamiento.

    .mb-4(data-aos='fade')
      .titulo-sexto.color-secundario
        h5 Figura 1.
        span Plantilla de presupuesto personal
      .row.justify-content-center.mb-3
        .col-lg-7
          figure
            img(src="@/assets/curso/temas/t3/fig1.png", alt="Una plantilla de presupuesto personal dividida en dos secciones principales: 'Tus ingresos' y 'Tus gastos'. En la sección de ingresos se distinguen tres categorías: ingresos fijos, ingresos variables y otros ingresos, distribuidos por mes (Mes 1, Mes 2, etc.). Al final de esta sección se calcula el 'TOTAL INGRESOS (A)'. En la sección de gastos, se organiza en tres grupos: Gastos fijos o prioritarios: alimentos/mercado, arriendo, servicios públicos, transporte, ahorro y otros. Gastos variables o de segunda prioridad: salidas, ropa, viajes, regalos y otros. Deudas: préstamos, tarjeta de crédito y otras deudas. Al final de esta sección se calcula el 'TOTAL GASTOS (B)'. En la parte inferior de la plantilla se muestra el cálculo del 'FLUJO DE CAJA MENSUAL (A - B)', es decir, la diferencia entre ingresos y gastos para cada mes.")
      figcaption Fuente: tomado de Comfenalco Santander. 
        a(:href="('https://www.comfenalcosantander.com.co/el-presupuesto-personal-tu-brujula-financiera-hacia-un-futuro-prospero')" target="_blank") https://www.comfenalcosantander.com.co/el-presupuesto-personal-tu-brujula-financiera-hacia-un-futuro-prospero

    .tarjeta.bg7.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center.mb-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t3/cta1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Plantilla de presupuesto personal
              p.mb-0 Le recomendamos visitar el siguiente sitio web, donde encontrará disponible para descarga gratuita una plantilla de presupuesto personal. Esta herramienta le permitirá registrar y gestionar sus ingresos y egresos mensuales, facilitando una planificación financiera más eficiente.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://www.comfenalcosantander.com.co/plantilla-de-presupuesto-personal')" target="_blank")
                span Enlace web
                i.fas.fa-link
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t3/cta2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Cómo organizo mi dinero | Ingresos, gastos, presupuesto | Finanzas personales
              p.mb-0 Se invita a revisar el video “Cómo organizo mi dinero | Ingresos, gastos, presupuesto | Finanzas personales”, el cual aborda de manera clara y didáctica la importancia de elaborar un presupuesto o plan de gastos personales.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=Rir3GoHwgVs')" target="_blank")
                span Ir al video
                i.fas.fa-circle-play


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Finanzas sanas

    p.mb-4 Tener unas finanzas sanas implica mantener el equilibrio entre ingresos, gastos, ahorro y proyección futura. A continuación, se presentan los principales ítems o pilares fundamentales que se deben considerar para lograr y mantener una buena salud financiera:

    .row.bgc-3.align-items-center.p-4.p-lg-5.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
           
          .tarjeta.tarjeta--blanca.p-4
            PasosB.color-acento-contenido
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Presupuesto mensual
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Elaborar y mantener un presupuesto claro y realista que detalle ingresos y egresos.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Clasificar los gastos en fijos, variables y discrecionales.  
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Revisarlo y ajustarlo periódicamente. 
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-1.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Gasto consciente y controlado
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Priorizar necesidades sobre deseos.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Evitar gastos impulsivos y compras por presión social o emocional.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Registrar y analizar patrones de consumo.
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-2.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Ahorro constante
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Ahorrar al menos un 10 % de los ingresos mensuales (si es posible). 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Establecer metas de ahorro a corto, mediano y largo plazo. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Crear un fondo de emergencia que cubra entre 3 y 6 meses de gastos básicos. 
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-3.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Manejo adecuado del crédito
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Utilizar el crédito como herramienta estratégica, no como fuente de consumo habitual. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Evitar el sobreendeudamiento: no destinar más del 30 % al 35 % de los ingresos mensuales al pago de deudas. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Conocer las condiciones de los préstamos: tasas, plazos, comisiones.
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-4.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Educación financiera continua
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Conocer conceptos básicos como intereses, inflación, riesgo, inversión y planificación. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Estar informado sobre productos financieros y alternativas de inversión. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Asistir a talleres, leer libros, seguir contenido educativo confiable. 
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-5.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Planificación financiera a largo plazo
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Establecer objetivos financieros claros: vivienda, estudios, jubilación, emprendimiento, etc. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Diseñar estrategias para alcanzarlos (ahorro, inversión, diversificación de ingresos). 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Evaluar y ajustar el plan de forma periódica.
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-6.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Diversificación de ingresos
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 No depender de una única fuente de ingreso.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Buscar ingresos complementarios o desarrollar habilidades para generar valor adicional. 
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-7.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Protección y previsión
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Contratar seguros (salud, vida, vivienda) según el contexto y necesidad.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Planificar la jubilación desde etapas tempranas.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Prepararse para imprevistos (accidentes, enfermedades, desempleo).
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-8.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Aprovechar promociones y descuentos de forma estratégica
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Identificar y planificar compras durante temporadas de descuentos, días sin IVA o promociones especiales, siempre que respondan a una necesidad real o una compra previamente presupuestada. 
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Comparar precios entre diferentes proveedores para asegurar una relación costo-beneficio óptima.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Evitar caer en el consumismo disfrazado de ahorro: una promoción solo es útil si el producto era necesario y está dentro del presupuesto.
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-9.png")
              .row.justify-content-around.align-items-center(titulo="")
                .col-lg-6.col-md-6.mb-4.mb-md-0
                  h4 Controlar los gastos hormiga
                  p Los pequeños gastos diarios que parecen insignificantes (cafés, #[em snacks], aplicaciones, #[em delivery]) pueden sumar cantidades importantes al mes.
                  ul.lista-ul--color.fa-lista.lista-ico
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Registrar estos gastos y analizarlos.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Establecer límites semanales o mensuales.
                    li
                      img.icono-lista(src="@/assets/curso/temas/t2/lista.svg", alt="Icono")
                      span.mb-0 Reemplazar hábitos costosos por alternativas más económicas.
                .col-lg-4.col-md-5
                  img(src="@/assets/curso/temas/t3/slider1-10.png")

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/temas/t2/subt.svg")
      h3.ps-3.pe-5.mb-0 Comprar de manera inteligente
    
    p Al recibir ingresos, es común olvidar el esfuerzo que se requirió para obtenerlos, lo que puede llevar a gastar de manera impulsiva o innecesaria. Para evitar este error, es fundamental convertirse en un comprador inteligente: alguien que piensa, analiza y planifica antes de realizar una compra o modificar un rubro de gasto.
    p.mb-4 En este sentido, es clave eliminar los gastos discrecionales, emocionales y “hormiga”, ya que estos suelen pasar desapercibidos, pero afectan significativamente el presupuesto. Al reducirlos, se incrementa la capacidad de ahorro y se logra un mejor control financiero. Lo más importante es identificar y cambiar los hábitos que conducen al gasto innecesario.

    .py-4.py-md-0.py-lg-2
    .tarjeta.bg-color-acento-contenido.px-4.px-lg-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3
          img.mn-20.w-140px(src='@/assets/curso/temas/t2/8.png', alt='')
        .col-lg-10.col-md-9
          p.p-3.p-lg-2.mb-0 Finalmente, es fundamental transformar la percepción del ahorro: dejar de verlo como una opción voluntaria y asumirlo como un compromiso financiero obligatorio, al igual que cualquier otro gasto esencial. Aunque al principio pueda parecer una tarea difícil, adoptar esta práctica representa el punto de partida hacia una mejor calidad de vida, mayor estabilidad económica y una adecuada previsión para el futuro.

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
