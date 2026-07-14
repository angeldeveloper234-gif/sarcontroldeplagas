/**
 * Catálogo de plagas — contenido SEO para /plagas y /plagas/[slug].
 * Especies tomadas del copy original del sitio (plagas comunes, rastreros,
 * voladores, roedores y manejo de fauna).
 */

export type Faq = { q: string; a: string }

export type Pest = {
  slug: string
  name: string
  emoji: string
  /** Título SEO orientado a búsqueda local. */
  seoTitle: string
  /** Meta description (~150 chars). */
  description: string
  h1: string
  intro: string[]
  speciesTitle: string
  species: string[]
  risks: string[]
  treatment: string[]
  faq: Faq[]
  keywords: string[]
}

export const PESTS: Pest[] = [
  {
    slug: 'cucarachas',
    name: 'Cucarachas',
    emoji: '🪳',
    seoTitle: 'Fumigación de Cucarachas en Querétaro | Eliminación Garantizada',
    description:
      'Eliminamos cucarachas alemanas y americanas en casas, restaurantes y negocios de Querétaro con soluciones menos tóxicas. Cotización sin costo el mismo día.',
    h1: 'Fumigación y eliminación de cucarachas en Querétaro',
    intro: [
      'La cucaracha es una de las plagas urbanas más persistentes: se reproduce a gran velocidad, se esconde en grietas y aparece donde hay alimento, humedad y calor. En SAR Control de Plagas la eliminamos de raíz, atacando el nido y no solo a los ejemplares visibles.',
      'Atendemos hogares, restaurantes, hoteles, oficinas y plantas de alimentos en todo Santiago de Querétaro, con productos de baja toxicidad seguros para tu familia, mascotas y clientes.',
    ],
    speciesTitle: 'Especies que controlamos',
    species: [
      'Cucaracha alemana (Blatella germanica) — la más común en cocinas y áreas de manejo de alimentos',
      'Cucaracha americana (Periplaneta americana) — grande, rojiza, habita drenajes y zonas cálidas',
      'Cucaracha oriental — sótanos, registros y zonas húmedas',
    ],
    risks: [
      'Transmiten gastroenteritis, disentería, fiebre tifoidea y otras enfermedades por contaminación de alimentos y superficies',
      'Sus desechos y mudas provocan alergias y crisis de asma, especialmente en niños',
      'En negocios de alimentos, una infestación puede costar clausuras y daño reputacional',
    ],
    treatment: [
      'Inspección para ubicar nidos, grietas y puntos de entrada',
      'Aplicación de gel-cebo profesional y aspersión de baja toxicidad en focos',
      'Recomendaciones de sellado, limpieza y almacenamiento para evitar reinfestación',
      'Visita de seguimiento y plan preventivo periódico si se requiere',
    ],
    faq: [
      { q: '¿Cuánto tarda en eliminarse una infestación de cucarachas?', a: 'Los resultados se notan desde los primeros días. Dependiendo del nivel de infestación, el control completo se logra normalmente en 1 a 2 aplicaciones, con seguimiento a las 2–3 semanas.' },
      { q: '¿Debo salir de casa durante la fumigación?', a: 'Con nuestros tratamientos de baja toxicidad, en la mayoría de los casos solo se recomienda ventilar y esperar un par de horas. Te lo confirmamos en la inspección según el producto a utilizar.' },
      { q: '¿El tratamiento sirve para restaurantes con normativa COFEPRIS?', a: 'Sí. Trabajamos bajo la NOM-256-SSA1-2012 y entregamos constancia de servicio y bitácoras para tus auditorías sanitarias.' },
    ],
    keywords: ['fumigación de cucarachas Querétaro', 'eliminar cucarachas', 'control de cucarachas', 'cucaracha alemana', 'fumigar cocina restaurante'],
  },
  {
    slug: 'chinches-de-cama',
    name: 'Chinches de cama',
    emoji: '🛏️',
    seoTitle: 'Eliminación de Chinches de Cama en Querétaro | Tratamiento Efectivo',
    description:
      'Tratamiento especializado contra chinches de cama (Cimex lectularius) en Querétaro. Inspección profesional, eliminación garantizada y seguimiento. Cotiza gratis.',
    h1: 'Eliminación de chinches de cama en Querétaro',
    intro: [
      'La chinche de cama (Cimex lectularius) es un insecto de 4 a 7 mm que se alimenta de sangre humana mientras duermes. Aparece sin importar el nivel de limpieza del lugar: llega en maletas, ropa, muebles usados o desde habitaciones contiguas.',
      'Su control requiere técnica especializada: se esconden en costuras de colchones, cabeceras, zoclos y enchufes, y resisten remedios caseros. En SAR aplicamos un protocolo dirigido que las elimina en todas sus etapas, incluidos los huevecillos.',
    ],
    speciesTitle: 'Lo que debes saber',
    species: [
      'Cimex lectularius — chinche de cama común, 4–7 mm, activa de noche',
      'Se detecta por ronchas alineadas en la piel, manchas de sangre en sábanas y puntos negros en costuras',
      'Una hembra pone de 200 a 500 huevos: la infestación crece muy rápido',
    ],
    risks: [
      'Ronchas, comezón intensa y reacciones alérgicas en la piel',
      'Insomnio, ansiedad y estrés por la sola presencia de la plaga',
      'Se propagan rápidamente entre habitaciones, departamentos y cuartos de hotel',
    ],
    treatment: [
      'Inspección minuciosa de colchones, bases, cabeceras, muebles y grietas',
      'Tratamiento químico dirigido de baja toxicidad en todos los refugios',
      'Segunda aplicación a los 10–14 días para eliminar huevecillos eclosionados',
      'Indicaciones de lavado y manejo de textiles para asegurar el resultado',
    ],
    faq: [
      { q: '¿Las chinches aparecen por falta de limpieza?', a: 'No. Las chinches llegan "de viaje" en maletas, ropa o muebles, sin importar qué tan limpio esté el lugar. La limpieza ayuda a detectarlas, pero no evita la infestación.' },
      { q: '¿Tengo que tirar mi colchón?', a: 'En la mayoría de los casos no. Con el tratamiento correcto el colchón se recupera; solo en infestaciones muy severas o colchones dañados se recomienda reemplazarlo.' },
      { q: '¿Atienden hoteles y Airbnb?', a: 'Sí, con servicio discreto y protocolos por habitación para no afectar tu operación ni tu reputación.' },
    ],
    keywords: ['chinches de cama Querétaro', 'eliminar chinches', 'fumigación de chinches', 'tratamiento chinches colchón', 'Cimex lectularius'],
  },
  {
    slug: 'roedores',
    name: 'Roedores',
    emoji: '🐀',
    seoTitle: 'Control de Roedores en Querétaro | Ratas y Ratones — SAR',
    description:
      'Control preventivo y correctivo de ratas y ratones en Querétaro: hogar, comercio, condominios e industria. Estaciones de cebado, trampeo y sellado de accesos.',
    h1: 'Control de roedores en Querétaro: ratas y ratones',
    intro: [
      'Los roedores son una de las plagas más destructivas y de mayor riesgo sanitario. Contaminan alimentos, roen cableado e instalaciones (causa frecuente de incendios) y se reproducen a gran velocidad si no se controlan a tiempo.',
      'En SAR Control de Plagas ofrecemos servicio preventivo y correctivo contra roedores en industria, oficinas, comercio, condominios y el hogar, con un enfoque de manejo integrado: control, exclusión y monitoreo documentado.',
    ],
    speciesTitle: 'Especies que controlamos',
    species: [
      'Ratón doméstico (Mus musculus)',
      'Rata de alcantarilla (Rattus norvegicus)',
      'Rata de las azoteas (Rattus rattus)',
      'Rata negra',
      'Ratón de campo',
    ],
    risks: [
      'Transmiten leptospirosis, salmonelosis, hantavirus y otras enfermedades',
      'Dañan cableado eléctrico, tuberías, aislantes y mercancía almacenada',
      'En industria alimentaria, su presencia implica incumplimiento normativo y mermas',
    ],
    treatment: [
      'Inspección de accesos, madrigueras, rutas y evidencias (heces, roeduras, sendas)',
      'Instalación de estaciones de cebado seguras y trampeo estratégico',
      'Exclusión: sellado de puntos de entrada y recomendaciones estructurales',
      'Monitoreo periódico con bitácora y reportes para auditorías',
    ],
    faq: [
      { q: '¿Cómo sé si tengo roedores?', a: 'Las señales más comunes: ruidos nocturnos en techos o muros, heces pequeñas y oscuras, roeduras en empaques o cables, olor a orina y sendas de grasa en zoclos.' },
      { q: '¿Los cebos son peligrosos para mis mascotas o niños?', a: 'Utilizamos estaciones de cebado cerradas y ancladas, diseñadas para que solo los roedores tengan acceso. Además evaluamos alternativas de trampeo cuando hay mascotas.' },
      { q: '¿Ofrecen programas con bitácora para empresas?', a: 'Sí. Nuestro programa industrial incluye mapa de estaciones, bitácoras, hojas de seguridad y reportes de tendencia, todo listo para tus auditorías.' },
    ],
    keywords: ['control de roedores Querétaro', 'exterminio de ratas', 'eliminar ratones', 'desratización', 'control de plagas industrial'],
  },
  {
    slug: 'mosquitos-y-moscas',
    name: 'Mosquitos y moscas',
    emoji: '🦟',
    seoTitle: 'Fumigación de Mosquitos y Moscas en Querétaro | SAR',
    description:
      'Control de insectos voladores en Querétaro: mosquitos, moscas, palomillas y polillas. Nebulización profesional y eliminación de criaderos. Cotización gratuita.',
    h1: 'Control de mosquitos, moscas e insectos voladores',
    intro: [
      'Los insectos voladores no solo son una molestia: son vectores de enfermedades. Los mosquitos pueden transmitir dengue y zika, mientras que las moscas contaminan alimentos y superficies al posarse sobre ellos.',
      'Nuestro tratamiento combina nebulización profesional, eliminación de criaderos y barreras físicas, para reducir la población de inmediato y evitar que regrese.',
    ],
    speciesTitle: 'Insectos voladores que controlamos',
    species: [
      'Mosquitos (Aedes, Culex) — transmisores de dengue y zika',
      'Mosca doméstica y mosca de la fruta',
      'Palomillas y polillas — despensas, granos y textiles',
      'Mariposillas de drenaje',
    ],
    risks: [
      'Transmisión de dengue, zika y chikungunya por picadura de mosquito',
      'Contaminación cruzada de alimentos por moscas en cocinas y comedores',
      'Daños a despensas, granos y textiles por palomillas y polillas',
    ],
    treatment: [
      'Identificación y eliminación de criaderos (agua estancada, drenajes, materia orgánica)',
      'Nebulización / termonebulización en exteriores y áreas críticas',
      'Tratamiento larvicida en puntos de reproducción',
      'Recomendaciones de mallas, cortinas de aire y lámparas según el espacio',
    ],
    faq: [
      { q: '¿Cada cuánto se recomienda fumigar contra mosquitos?', a: 'En temporada de lluvias, cada 30–45 días para mantener la población controlada. Diseñamos el calendario según tu jardín o negocio.' },
      { q: '¿El tratamiento afecta a mis plantas o mascotas?', a: 'Usamos productos de baja toxicidad aplicados por técnicos certificados. Solo pedimos precauciones simples durante la aplicación, que te indicamos previamente.' },
    ],
    keywords: ['fumigación de mosquitos Querétaro', 'control de moscas', 'nebulización', 'eliminar mosquitos jardín', 'dengue prevención'],
  },
  {
    slug: 'aranas-y-alacranes',
    name: 'Arañas y alacranes',
    emoji: '🕷️',
    seoTitle: 'Control de Alacranes y Arañas en Querétaro | Fumigación SAR',
    description:
      'Fumigación contra alacranes, araña violinista y viuda negra en Querétaro. Aspersión perimetral profesional para proteger a tu familia. Cotiza sin costo.',
    h1: 'Control de arañas, alacranes y rastreros en Querétaro',
    intro: [
      'Querétaro es zona de alacranes: su picadura es una urgencia médica, sobre todo para niños y adultos mayores. A esto se suman arañas de importancia médica como la violinista y la viuda negra, además de ciempiés y otros rastreros.',
      'Nuestro tratamiento crea una barrera perimetral en tu propiedad y ataca los refugios donde estas especies se esconden: huecos, piedras, cuartos de servicio, bodegas y jardines.',
    ],
    speciesTitle: 'Especies que controlamos',
    species: [
      'Alacrán (Centruroides spp.) — común en la región de Querétaro',
      'Araña violinista (Loxosceles) — su mordedura puede causar necrosis',
      'Viuda negra (Latrodectus mactans)',
      'Ciempiés y otros artrópodos rastreros',
    ],
    risks: [
      'La picadura de alacrán requiere atención médica inmediata, especialmente en menores',
      'La mordedura de araña violinista puede causar lesiones graves en la piel',
      'Suelen esconderse en ropa, calzado y camas, aumentando el riesgo de contacto',
    ],
    treatment: [
      'Aspersión perimetral e interior en grietas, zoclos y huecos',
      'Tratamiento de jardines, bardas, cuartos de servicio y bodegas',
      'Reducción de insectos-presa que los atraen',
      'Recomendaciones de sellado y orden para eliminar refugios',
    ],
    faq: [
      { q: '¿En qué temporada hay más alacranes en Querétaro?', a: 'Se activan con el calor: de marzo a septiembre aumentan los avistamientos, especialmente en las noches. Es el mejor momento para un tratamiento preventivo.' },
      { q: '¿Qué hago si me pica un alacrán?', a: 'Mantén la calma, no cortes ni succiones la herida y acude de inmediato al servicio médico más cercano. En Querétaro los centros de salud cuentan con antiveneno.' },
    ],
    keywords: ['control de alacranes Querétaro', 'fumigación alacranes', 'araña violinista', 'viuda negra', 'fumigar casa alacranes'],
  },
  {
    slug: 'hormigas',
    name: 'Hormigas',
    emoji: '🐜',
    seoTitle: 'Control de Hormigas en Querétaro | Eliminación desde el Nido',
    description:
      'Eliminamos colonias de hormigas desde el nido en casas y negocios de Querétaro. Geles profesionales y tratamiento perimetral. Cotización sin costo.',
    h1: 'Control y eliminación de hormigas',
    intro: [
      'Las hormigas invaden cocinas, alacenas, muros y jardines siguiendo rastros químicos hacia el alimento. Matar a las visibles no resuelve nada: la colonia, con miles de individuos, sigue intacta.',
      'Nuestro tratamiento utiliza geles-cebo que las obreras llevan al nido, eliminando a la colonia completa incluida la reina.',
    ],
    speciesTitle: 'Especies comunes',
    species: [
      'Hormiga argentina — invasora de cocinas y despensas',
      'Hormiga loca — colonias masivas de rápido crecimiento',
      'Hormiga carpintera — daña madera y estructuras',
      'Hormiga de fuego — picaduras dolorosas en jardines',
    ],
    risks: [
      'Contaminan alimentos y superficies de preparación',
      'La hormiga carpintera debilita estructuras de madera',
      'Las picaduras de algunas especies causan reacciones alérgicas',
    ],
    treatment: [
      'Identificación de especie, rastros y ubicación de nidos',
      'Aplicación de gel-cebo de transferencia (elimina la colonia completa)',
      'Aspersión perimetral para evitar nuevas invasiones',
    ],
    faq: [
      { q: '¿Por qué vuelven las hormigas después de usar insecticida casero?', a: 'Los aerosoles matan solo a las obreras visibles y dispersan la colonia. El gel-cebo profesional es transportado al nido y elimina a la reina, que es la fuente del problema.' },
    ],
    keywords: ['control de hormigas Querétaro', 'eliminar hormigas cocina', 'hormiga carpintera', 'fumigación hormigas'],
  },
  {
    slug: 'abejas-y-avispas',
    name: 'Abejas y avispas',
    emoji: '🐝',
    seoTitle: 'Retiro de Panales de Abejas y Avispas en Querétaro | SAR',
    description:
      'Retiro seguro y responsable de panales de abejas y avispas en Querétaro. Priorizamos la reubicación de abejas con apicultores. Atención rápida.',
    h1: 'Retiro de panales de abejas y avispas',
    intro: [
      'Un panal cerca de tu casa o negocio es un riesgo real: las picaduras múltiples o una reacción alérgica pueden derivar en una emergencia. El retiro debe hacerlo personal capacitado con el equipo adecuado.',
      'En SAR realizamos el manejo de forma segura y responsable: cuando se trata de abejas y es viable, coordinamos su reubicación con apicultores en lugar de exterminarlas, por su papel esencial como polinizadoras.',
    ],
    speciesTitle: 'Qué manejamos',
    species: [
      'Panales de abejas — con protocolo de reubicación cuando es posible',
      'Panales y nidos de avispas',
      'Avispones en aleros, árboles y estructuras',
    ],
    risks: [
      'Picaduras múltiples y riesgo de choque anafiláctico en personas alérgicas',
      'Enjambres defensivos cerca de escuelas, patios y áreas de trabajo',
      'Nidos dentro de muros o techos que crecen si no se atienden',
    ],
    treatment: [
      'Evaluación del panal: especie, tamaño, altura y riesgo',
      'Retiro con equipo de protección y horarios de menor actividad',
      'Reubicación con apicultores cuando la especie y condición lo permiten',
      'Sellado y recomendaciones para evitar nuevos asentamientos',
    ],
    faq: [
      { q: '¿Matan a las abejas?', a: 'Solo como último recurso. Siempre que la ubicación y condición del panal lo permiten, coordinamos su retiro vivo y reubicación con apicultores locales.' },
      { q: '¿Qué hago mientras llegan?', a: 'Mantén a personas y mascotas alejadas, cierra puertas y ventanas cercanas y no intentes retirar o golpear el panal. Los enjambres se defienden en grupo.' },
    ],
    keywords: ['retiro de panal de abejas Querétaro', 'nido de avispas', 'quitar panal', 'reubicación de abejas'],
  },
  {
    slug: 'fauna-urbana',
    name: 'Fauna urbana',
    emoji: '🦇',
    seoTitle: 'Manejo de Fauna Urbana en Querétaro | Tlacuaches y Aves',
    description:
      'Manejo ético de fauna urbana en Querétaro: tlacuaches, palomas y otras aves. Exclusión, retiro responsable y limpieza de áreas afectadas.',
    h1: 'Manejo y control de fauna urbana',
    intro: [
      'Tlacuaches en el techo, palomas anidando en cornisas o gatos ferales en tu propiedad requieren un manejo distinto al de los insectos: soluciones de exclusión y retiro responsable, no exterminio.',
      'Aplicamos técnicas de manejo ético que resuelven el conflicto y evitan que los animales regresen, cuidando tanto tu propiedad como a la fauna.',
    ],
    speciesTitle: 'Fauna que manejamos',
    species: [
      'Tlacuaches — retiro y liberación responsable',
      'Palomas y otras aves — exclusión con púas, mallas y ahuyentadores',
      'Gatos ferales — canalización y manejo responsable',
    ],
    risks: [
      'El excremento de paloma acumulado puede transmitir histoplasmosis y daña estructuras',
      'La fauna anidando en techos daña aislantes, ductos y cableado',
      'Ácaros y pulgas asociados a nidos y madrigueras invaden los interiores',
    ],
    treatment: [
      'Inspección para identificar especie, accesos y zonas de anidación',
      'Retiro o captura responsable según la especie',
      'Exclusión física: mallas, púas, sellado de accesos',
      'Limpieza y sanitización de áreas afectadas',
    ],
    faq: [
      { q: '¿Lastiman a los tlacuaches?', a: 'No. El tlacuach​e es una especie benéfica (controla alacranes e insectos). Lo capturamos vivo y lo liberamos en un hábitat adecuado lejos de tu propiedad.' },
    ],
    keywords: ['control de palomas Querétaro', 'retiro de tlacuaches', 'manejo de fauna urbana', 'exclusión de aves'],
  },
]

export const getPest = (slug: string) => PESTS.find((p) => p.slug === slug)
