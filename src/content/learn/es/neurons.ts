import type { LearnLessonContent } from "@/content/learn/types";

const openStaxAuthors =
  "Betts, J. Gordon, Kelly A. Young, James A. Wise, Eddie Johnson, Brandon Poe, Dean H. Kruse, Oksana Korol, Jody E. Johnson, Mark Womble y Peter DeSaix";

export const neuronsLesson = {
  slug: "como-se-comunican-las-neuronas",
  locales: ["es"],
  title: "¿Cómo se comunican las neuronas?",
  description:
    "Ocho escenas para ver cómo una neurona recibe señales, cómo puede generarse un potencial de acción y cómo esa actividad pasa a otra célula.",
  cardDescription:
    "Un recorrido por la neurona, la mielina, la sinapsis y una red pequeña. Las figuras son esquemas para seguir el proceso.",
  metaTitle: "¿Cómo se comunican las neuronas? · Aprendamos",
  intro: [
    "Una neurona puede recibir señales, integrarlas y, si la membrana llega a un umbral, enviar un potencial de acción hacia sus terminales. Desde ahí puede comunicarse con otra célula.",
    "Estas ocho escenas muestran ese camino con dibujos. Puedes leer el texto sin usar la animación.",
  ],
  disclaimer:
    "Material educativo. Las figuras son esquemas, no registros ni simulaciones cuantitativas. No es asesoría médica.",
  scenes: [
    {
      id: "una-neurona",
      title: "Una neurona",
      textAlternative:
        "Esquema de una neurona con dendritas a la izquierda, un soma en el centro y un axón hacia la derecha. No es el retrato de una neurona concreta.",
      paragraphs: [
        "Esta ilustración muestra una forma neuronal habitual en las explicaciones: un cuerpo, ramificaciones que reciben señales y una prolongación que puede llevarlas más lejos.",
        "Las neuronas reales no comparten una sola forma. Unas son muy ramificadas y otras son más compactas. El dibujo sirve para reconocer las partes, no para representar una célula concreta.",
      ],
    },
    {
      id: "partes",
      title: "Partes de la neurona",
      textAlternative:
        "La misma neurona de la escena anterior. Se pueden elegir el soma, las dendritas y el axón.",
      paragraphs: [
        "El soma es el cuerpo celular. Ahí está el núcleo y gran parte de la maquinaria que mantiene viva a la célula. También participa en la integración de señales.",
        "Las dendritas reciben muchas de las señales que llegan de otras células.",
        "El axón conduce potenciales de acción hacia sus terminales, donde la neurona puede comunicarse con otra célula.",
      ],
      parts: [
        {
          id: "soma",
          label: "Soma",
          text: "Cuerpo celular. Mantiene la neurona y participa en la integración de señales.",
        },
        {
          id: "dendrites",
          label: "Dendritas",
          text: "Ramificaciones que reciben muchas de las señales de otras células.",
        },
        {
          id: "axon",
          label: "Axón",
          text: "Conduce potenciales de acción hacia sus terminales.",
        },
      ],
    },
    {
      id: "recibir-y-transmitir",
      title: "Recibir y transmitir señales",
      textAlternative:
        "La misma neurona. Primero llegan señales locales a las dendritas, luego se integran en el soma y, solo en este ejemplo, un potencial de acción recorre el axón.",
      paragraphs: [
        "Las dendritas pueden recibir señales locales. Esas señales no son, por sí solas, un potencial de acción.",
        "En el soma se suman e influyen en si la membrana del inicio del axón alcanza un umbral. Si no lo alcanza, no se genera un potencial de acción.",
        "La animación muestra un caso ilustrativo en el que el umbral sí se alcanza y el potencial de acción se propaga por el axón. No es una simulación biofísica exacta, ni cada entrada produce un disparo.",
      ],
      stages: [
        {
          id: "inputs",
          label: "Señales locales",
          text: "Llegan entradas a las dendritas. Todavía no son un potencial de acción.",
        },
        {
          id: "integration",
          label: "Integración",
          text: "Las señales se reúnen en el soma. Su efecto depende de cómo se sumen.",
        },
        {
          id: "threshold",
          label: "Umbral",
          text: "En este ejemplo se alcanza el umbral al inicio del axón. Si no se alcanza, no hay potencial de acción.",
        },
        {
          id: "propagation",
          label: "Propagación",
          text: "El potencial de acción recorre el axón hacia los terminales. Es un caso ilustrativo.",
        },
      ],
    },
    {
      id: "glia-y-mielina",
      title: "Glía y mielina",
      textAlternative:
        "Un axón con segmentos de mielina y nodos de Ranvier. Una célula glial, un oligodendrocito, contacta esos segmentos. El contexto es el sistema nervioso central.",
      paragraphs: [
        "En el sistema nervioso central, los oligodendrocitos pueden envolver tramos del axón con mielina. La mielina aísla esos tramos. Entre ellos quedan los nodos de Ranvier, donde el potencial de acción se regenera.",
        "Por eso se habla de conducción saltatoria: la señal se renueva en los nodos. No es un objeto que salte por fuera del axón. Entre un nodo y el siguiente, la corriente local avanza por dentro.",
        "No toda la glía produce mielina. Aquí el contexto es el sistema nervioso central, así que la célula dibujada es un oligodendrocito. En el sistema nervioso periférico, la mielina la forman células de Schwann. Esta escena no mezcla las dos.",
      ],
      parts: [
        {
          id: "myelin",
          label: "Mielina",
          text: "Capas que aíslan tramos del axón y permiten que la corriente local llegue más lejos por dentro.",
        },
        {
          id: "glia",
          label: "Oligodendrocito",
          text: "Célula glial de este esquema. En el sistema nervioso central puede formar mielina. Otras células gliales no lo hacen.",
        },
        {
          id: "nodes",
          label: "Nodos de Ranvier",
          text: "Espacios entre segmentos de mielina. Ahí se regenera el potencial de acción.",
        },
      ],
      stages: [
        {
          id: "rest",
          label: "Axón mielinizado",
          text: "Se ven la mielina, el oligodendrocito y los nodos. Aún no hay conducción.",
        },
        {
          id: "node-1",
          label: "Primer nodo",
          text: "El potencial de acción se regenera en el primer nodo.",
        },
        {
          id: "node-2",
          label: "Siguiente nodo",
          text: "La corriente avanza por dentro del axón, bajo la mielina, y el potencial se regenera en el nodo siguiente.",
        },
        {
          id: "node-3",
          label: "Otro nodo",
          text: "La regeneración vuelve a ocurrir en la membrana del nodo, no fuera del axón.",
        },
        {
          id: "node-4",
          label: "Nodo distal",
          text: "La secuencia llega al nodo más lejano de este esquema.",
        },
      ],
    },
    {
      id: "sinapsis",
      title: "Sinapsis química y eléctrica",
      textAlternative:
        "Dos esquemas separados. En la sinapsis química hay hendidura, vesículas y neurotransmisores. En la eléctrica, dos células unidas por uniones comunicantes dejan pasar corriente iónica.",
      paragraphs: [
        "Hay dos formas de comunicación entre células. En la sinapsis química, un mensajero se libera y cruza una hendidura. En la eléctrica, unas uniones comunicantes dejan pasar iones de una célula a la otra.",
        "Los neurotransmisores no son electrones y no atraviesan la hendidura como una corriente eléctrica. Una respuesta postsináptica tampoco produce, por fuerza, un nuevo potencial de acción.",
      ],
      stages: [
        {
          id: "arrival",
          label: "Llegada",
          text: "El potencial de acción llega al terminal presináptico.",
        },
        {
          id: "calcium",
          label: "Calcio",
          text: "Entra calcio en el terminal.",
        },
        {
          id: "release",
          label: "Liberación",
          text: "Las vesículas liberan neurotransmisores en la hendidura.",
        },
        {
          id: "diffusion",
          label: "Difusión",
          text: "Los neurotransmisores se difunden por la hendidura. No son una corriente de electrones.",
        },
        {
          id: "binding",
          label: "Receptores",
          text: "Se unen a receptores de la membrana postsináptica.",
        },
        {
          id: "response",
          label: "Respuesta",
          text: "Puede haber una respuesta postsináptica local. No implica, por sí sola, un nuevo potencial de acción.",
        },
        {
          id: "connected",
          label: "Uniones",
          text: "Dos células quedan conectadas por uniones comunicantes.",
        },
        {
          id: "current",
          label: "Corriente iónica",
          text: "Los iones pasan de forma directa de una célula a la otra.",
        },
        {
          id: "shared",
          label: "Cambio compartido",
          text: "El paso de iones puede cambiar el voltaje de la segunda célula sin una hendidura química.",
        },
      ],
    },
    {
      id: "iones-y-membrana",
      title: "Iones y membrana",
      textAlternative:
        "Corte de la membrana con el exterior arriba y el interior abajo. Hay canales distintos para Na+ y K+. Los iones solo se mueven por esos canales.",
      paragraphs: [
        "La membrana separa un interior y un exterior con composiciones iónicas distintas. El sodio (Na+) y el potasio (K+) cruzan por canales selectivos. No atraviesan libremente la bicapa lipídica.",
        "En el reposo de este ejemplo, el interior está más negativo. Durante la despolarización de un potencial de acción, entra Na+ por canales de sodio. Durante la repolarización, sale K+ por canales de potasio.",
        "La bomba sodio-potasio ayuda a mantener esos gradientes a lo largo del tiempo. No es la causa inmediata de la repolarización. Las cantidades dibujadas son esquemáticas y no están a escala.",
      ],
      stages: [
        {
          id: "rest",
          label: "Reposo",
          text: "Na+ está más concentrado fuera y K+ dentro, en este esquema. Los canales de la fase rápida están cerrados.",
        },
        {
          id: "depolarization",
          label: "Despolarización",
          text: "Entra Na+ por su canal. El K+ de este dibujo no cruza la bicapa.",
        },
        {
          id: "repolarization",
          label: "Repolarización",
          text: "Sale K+ por su canal. La bomba no es el movimiento inmediato de esta fase.",
        },
      ],
    },
    {
      id: "diferencia-de-potencial",
      title: "Diferencia de potencial",
      textAlternative:
        "La membrana de la escena anterior junto a una gráfica del voltaje en un punto. El marcador, los canales, los iones y el texto avanzan con el mismo tiempo.",
      paragraphs: [
        "El voltaje de membrana es la diferencia de potencial entre el interior y el exterior, medida en un punto. No es el voltaje de todo el axón al mismo tiempo.",
        "La gráfica sigue ese punto: reposo, despolarización, repolarización y una hiperpolarización breve. En un ejemplo habitual de libro de texto, el reposo está cerca de -70 mV y el pico cerca de +30 mV. Esos valores son aproximados y dependen del tipo de neurona.",
        "El eje de tiempo no tiene escala en milisegundos. Solo ordena las etapas de la animación. La bajada del voltaje en la repolarización corresponde a la salida de K+ por canales. La bomba mantiene los gradientes, pero no dibuja esa fase.",
      ],
      stages: [
        {
          id: "rest",
          label: "Reposo",
          text: "En el ejemplo, el interior está cerca de -70 mV respecto del exterior.",
        },
        {
          id: "depolarization",
          label: "Despolarización",
          text: "Entra Na+ y el voltaje de este punto se vuelve menos negativo, hasta un pico cercano a +30 mV.",
        },
        {
          id: "repolarization",
          label: "Repolarización",
          text: "Sale K+ y el voltaje vuelve hacia el reposo.",
        },
        {
          id: "hyperpolarization",
          label: "Hiperpolarización",
          text: "Durante un momento el voltaje queda por debajo del reposo, mientras sigue saliendo K+. Luego se acerca otra vez al valor de reposo.",
        },
      ],
    },
    {
      id: "red-neuronal",
      title: "Red neuronal",
      textAlternative:
        "Cuatro neuronas del mismo estilo. Una entrada activa una secuencia fija: la segunda neurona excita a la tercera, y una conexión inhibitoria llega a la cuarta, que no se dispara.",
      paragraphs: [
        "Las neuronas forman redes. En este esquema, una entrada sigue una secuencia definida: una neurona excita a la siguiente, y otra conexión evita que una cuarta célula se active.",
        "No todas las conexiones son excitatorias. Una señal tampoco enciende todas las neuronas. Es una secuencia didáctica, no una simulación del cerebro ni una propagación al azar.",
      ],
      stages: [
        {
          id: "idle",
          label: "En espera",
          text: "La red está en reposo. Las conexiones no hacen todas lo mismo.",
        },
        {
          id: "input",
          label: "Entrada",
          text: "Se activa la primera neurona.",
        },
        {
          id: "relay",
          label: "Relevo",
          text: "Esa señal excita a la segunda neurona, que responde en esta secuencia.",
        },
        {
          id: "split",
          label: "Dos destinos",
          text: "La tercera neurona se activa. La de abajo recibe una señal inhibitoria y no se dispara.",
        },
      ],
    },
  ],
  questions: [
    {
      id: "partes-de-la-neurona",
      afterSceneId: "partes",
      prompt: "¿Qué parte conduce los potenciales de acción hacia los terminales?",
      options: [
        { id: "dendrites", label: "Las dendritas" },
        { id: "soma", label: "El soma" },
        { id: "axon", label: "El axón" },
      ],
      correctId: "axon",
      feedback:
        "El axón conduce potenciales de acción hacia sus terminales. Las dendritas reciben muchas señales de otras células. El soma es el cuerpo celular: mantiene la neurona y participa en la integración.",
    },
    {
      id: "sinapsis-quimica",
      afterSceneId: "sinapsis",
      prompt: "En la sinapsis química de este esquema, ¿qué cruza la hendidura?",
      options: [
        {
          id: "transmitters",
          label: "Neurotransmisores que se difunden hasta los receptores",
        },
        {
          id: "electrons",
          label: "Electrones que forman una corriente eléctrica",
        },
        {
          id: "axon-touch",
          label: "El axón, que entra en la otra célula",
        },
      ],
      correctId: "transmitters",
      feedback:
        "En la sinapsis química, los neurotransmisores se liberan, se difunden por la hendidura y pueden unirse a receptores. No son electrones. En la sinapsis eléctrica, la corriente iónica pasa de forma directa por uniones comunicantes.",
    },
    {
      id: "iones-voltaje",
      afterSceneId: "diferencia-de-potencial",
      prompt:
        "En la repolarización de este ejemplo, ¿qué cambia el voltaje de forma inmediata?",
      options: [
        { id: "potassium", label: "Sale K+ por canales de potasio" },
        {
          id: "pump",
          label: "La bomba sodio-potasio vacía el sodio en ese instante",
        },
        {
          id: "lipid",
          label: "El Na+ atraviesa la bicapa lipídica sin canal",
        },
      ],
      correctId: "potassium",
      feedback:
        "En este esquema, la repolarización inmediata ocurre porque sale K+ por sus canales. La bomba sodio-potasio mantiene los gradientes y ayuda a recuperar el reparto de iones, pero no es el mecanismo inmediato de esa fase. Na+ y K+ no cruzan la bicapa por libre.",
    },
  ],
  deepen: [
    {
      afterSceneId: "recibir-y-transmitir",
      title: "Umbral",
      paragraphs: [
        "Las señales locales pueden sumarse en el espacio y en el tiempo. Si el resultado no alcanza el umbral en la zona de inicio del axón, el potencial de acción no se genera.",
        "Esta animación enseña el caso en el que sí se alcanza. No afirma que cualquier entrada baste.",
      ],
    },
    {
      afterSceneId: "glia-y-mielina",
      title: "No toda la glía produce mielina",
      paragraphs: [
        "Astrocitos y microglía, por ejemplo, son células gliales con otras funciones. Formar mielina no es el trabajo de toda la glía.",
        "Un oligodendrocito del sistema nervioso central puede mielinizar más de un segmento. Una célula de Schwann del sistema nervioso periférico suele asociarse a un segmento. Por eso el dibujo usa solo el oligodendrocito.",
      ],
    },
    {
      afterSceneId: "iones-y-membrana",
      title: "Canales y bomba",
      paragraphs: [
        "Durante el potencial de acción, los canales dejan pasar iones a favor de sus gradientes y el voltaje cambia rápido. La bomba trabaja en otra escala.",
        "La bomba gasta energía para mantener, a más largo plazo, más sodio fuera y más potasio dentro. El dibujo no le atribuye la bajada rápida de la repolarización.",
      ],
    },
  ],
  sources: [
    {
      title: "Anatomy and Physiology 2e, sección 12.2, Nervous Tissue",
      detail: `${openStaxAuthors}. OpenStax, 2022.`,
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue",
      supports:
        "Partes de la neurona, variedad de formas, mielina, nodos de Ranvier y la diferencia entre oligodendrocitos y células de Schwann.",
    },
    {
      title: "Anatomy and Physiology 2e, sección 12.4, The Action Potential",
      detail: `${openStaxAuthors}. OpenStax, 2022.`,
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential",
      supports:
        "Reposo cercano a -70 mV como valor habitual, entrada de Na+, salida de K+, hiperpolarización breve, umbral y papel de la bomba en los gradientes.",
    },
    {
      title: "Anatomy and Physiology 2e, sección 12.5, Communication Between Neurons",
      detail: `${openStaxAuthors}. OpenStax, 2022.`,
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
      supports:
        "Señales locales, suma, sinapsis química y eléctrica, calcio, difusión del neurotransmisor y respuesta postsináptica.",
    },
    {
      title: "Increased Conduction Velocity as a Result of Myelination",
      detail:
        "Purves D, Augustine GJ, Fitzpatrick D, et al., editores. Neuroscience, 2.ª edición. Sinauer Associates, 2001. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK10921/",
      supports:
        "La mielina de oligodendrocitos o de células de Schwann, según el contexto, y la regeneración del potencial de acción en los nodos de Ranvier.",
    },
    {
      title: "Chemical Synapses",
      detail:
        "Purves D, Augustine GJ, Fitzpatrick D, et al., editores. Neuroscience, 2.ª edición. Sinauer Associates, 2001. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK11009/",
      supports:
        "Llegada del potencial de acción, entrada de calcio, liberación de neurotransmisor y cambio en la probabilidad de un nuevo disparo, que no está garantizado.",
    },
  ],
  sourcesNote:
    "Las fuentes revisan el contenido. Los dibujos siguen siendo esquemas y no reproducen sus figuras ni una escala temporal medida.",
  closingTitle: "¿Cómo pasamos de esta actividad a controlar un dron?",
  closing: [
    "Registrar señales, procesarlas, identificar patrones y convertir ese resultado en comandos. Sin esos pasos, la actividad de unas neuronas no se vuelve una instrucción para un aparato.",
    "Eso ya es un problema de medición e ingeniería. Esta página no lee actividad cerebral y no usa un EEG real.",
  ],
} as const satisfies LearnLessonContent;
