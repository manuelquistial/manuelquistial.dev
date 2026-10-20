import type { LearnLessonContent } from "@/content/learn/types";

export const neuronsLesson = {
  slug: "como-se-comunican-las-neuronas",
  locales: ["es"],
  title: "¿Cómo se comunican las neuronas?",
  description:
    "Ocho escenas para ver cómo una neurona recibe señales, cómo puede generarse un potencial de acción y cómo esa actividad pasa a otra célula.",
  cardDescription:
    "Un recorrido por la neurona, la mielina, la sinapsis y una red. Las figuras son esquemas para seguir el proceso.",
  metaTitle: "¿Cómo se comunican las neuronas? · Aprendamos",
  intro: [
    {
      text: "Una neurona recibe señales, las integra y puede transmitir un mensaje a otra célula.",
      cites: ["tissue"],
    },
  ],
  scenes: [
    {
      id: "una-neurona",
      title: "Una neurona",
      textAlternative:
        "Neurona con un árbol de dendritas, el soma y un axón cubierto por segmentos de mielina que termina en varios botones.",
      paragraphs: [
        {
          text: "Las dendritas reciben, el soma integra y el axón puede llevar un potencial de acción hasta sus terminales. En este dibujo el axón ya muestra segmentos de mielina.",
          cites: ["tissue"],
        },
      ],
    },
    {
      id: "partes",
      title: "Partes de la neurona",
      textAlternative:
        "La misma neurona, sin rótulos fijos. Se pueden elegir el soma, las dendritas y el axón.",
      paragraphs: [
        {
          text: "Toca una parte de la célula para ver qué hace en este recorrido.",
        },
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
        "La misma neurona. Primero llegan señales locales a las dendritas. Solo en este ejemplo, después de alcanzar el umbral, un potencial de acción recorre el axón.",
      paragraphs: [
        {
          text: "Una neurona puede recibir muchas entradas y, aun así, no disparar. El potencial de acción de este ejemplo solo aparece cuando esa suma alcanza el umbral.",
          cites: ["communication"],
        },
      ],
      stages: [
        {
          id: "inputs",
          label: "Llegada",
          title: "Llegan señales locales a las dendritas",
          text: "Varias entradas recorren las ramas hacia el soma. Todavía son señales locales y no un potencial de acción.",
        },
        {
          id: "integration",
          label: "Integración",
          title: "El soma reúne esas señales",
          text: "Su efecto se suma en el cuerpo celular. Si el resultado es pequeño, el axón no se dispara.",
        },
        {
          id: "threshold",
          label: "Umbral",
          title: "El inicio del axón alcanza el umbral",
          text: "En este ejemplo la suma basta en el cono axónico. Solo entonces puede empezar un potencial de acción.",
        },
        {
          id: "propagation",
          label: "Propagación",
          title: "El potencial de acción recorre el axón",
          text: "El impulso avanza hacia los terminales. No es la misma señal local que llegó por las dendritas.",
        },
      ],
    },
    {
      id: "glia-y-mielina",
      title: "Glía y mielina",
      textAlternative:
        "Axón con cuatro segmentos de mielina y un oligodendrocito del sistema nervioso central que contacta esos segmentos.",
      paragraphs: [
        {
          text: "Esa regeneración en los nodos permite que el impulso recorra axones largos sin perderse en cada tramo cubierto.",
          cites: ["myelin"],
        },
      ],
      parts: [
        {
          id: "myelin",
          label: "Mielina",
          text: "Aísla tramos del axón. La corriente local avanza por dentro, entre un nodo y el siguiente.",
        },
        {
          id: "glia",
          label: "Oligodendrocito",
          text: "Forma mielina alrededor de segmentos de axones en el sistema nervioso central.",
        },
        {
          id: "nodes",
          label: "Nodos de Ranvier",
          text: "Tramos de membrana entre la mielina. Ahí se regenera el potencial de acción.",
        },
      ],
      stages: [
        {
          id: "rest",
          label: "Mielina",
          title: "La mielina envuelve tramos del axón",
          text: "El oligodendrocito forma esas vainas en el sistema nervioso central. Entre sus segmentos quedan los nodos de Ranvier.",
        },
        {
          id: "node-1",
          label: "Primer nodo",
          title: "El impulso se regenera en el primer nodo",
          text: "La corriente avanza por dentro del segmento aislado y el potencial de acción vuelve a formarse en la membrana del nodo.",
        },
        {
          id: "node-2",
          label: "Siguiente",
          title: "La regeneración continúa en el nodo siguiente",
          text: "El mismo proceso se repite: la mielina cubre el tramo y el nodo recupera el impulso.",
        },
        {
          id: "node-3",
          label: "Otro nodo",
          title: "Otro nodo vuelve a regenerar el impulso",
          text: "Cada nodo es un tramo de membrana descubierta donde el potencial de acción se rehace.",
        },
        {
          id: "node-4",
          label: "Nodo distal",
          title: "El impulso llega al nodo más lejano",
          text: "En este esquema la secuencia termina en el último nodo, después de saltar los segmentos de mielina.",
        },
      ],
    },
    {
      id: "sinapsis",
      title: "Sinapsis química y eléctrica",
      textAlternative:
        "Dos esquemas separados. En la sinapsis química hay vesículas, hendidura y receptores. En la eléctrica, uniones comunicantes dejan pasar iones de una célula a la otra.",
      paragraphs: [
        {
          text: "La diferencia está en el mensajero: moléculas que cruzan un espacio, o iones que pasan de un interior a otro.",
          cites: ["communication", "chemical"],
        },
      ],
      parts: [
        {
          id: "vesicles",
          label: "Vesículas",
          text: "Guardan neurotransmisor en el terminal presináptico. La llegada del potencial de acción y la entrada de calcio favorecen su liberación.",
        },
        {
          id: "transmitters",
          label: "Neurotransmisores",
          text: "Se difunden por la hendidura hasta los receptores. No son electrones ni una corriente eléctrica.",
        },
        {
          id: "receptors",
          label: "Receptores",
          text: "Proteínas de la membrana postsináptica. Su activación puede producir una respuesta local, no necesariamente un nuevo potencial de acción.",
        },
        {
          id: "junctions",
          label: "Uniones comunicantes",
          text: "Conectan el interior de dos células y dejan pasar iones de una a la otra.",
        },
      ],
      stages: [
        {
          id: "arrival",
          label: "Llegada",
          title: "El impulso llega al terminal",
          text: "El potencial de acción alcanza el extremo del axón. Las vesículas con neurotransmisor siguen dentro.",
        },
        {
          id: "calcium",
          label: "Calcio",
          title: "Entra calcio en el terminal",
          text: "Esa entrada favorece que las vesículas se acerquen a la membrana y puedan fusionarse.",
        },
        {
          id: "release",
          label: "Liberación",
          title: "Las vesículas liberan su contenido",
          text: "El neurotransmisor sale a la hendidura sináptica. No es una corriente de electrones.",
        },
        {
          id: "diffusion",
          label: "Cruce",
          title: "El neurotransmisor cruza la hendidura",
          text: "Se difunde por el espacio que separa las dos células hasta la membrana de enfrente.",
        },
        {
          id: "binding",
          label: "Unión",
          title: "Los receptores reciben el mensaje",
          text: "Las moléculas se unen a proteínas de la membrana postsináptica. Esa unión es local.",
        },
        {
          id: "response",
          label: "Respuesta",
          title: "La otra célula puede responder",
          text: "Puede aparecer un cambio local de voltaje. Eso no implica, por sí solo, un nuevo potencial de acción.",
        },
        {
          id: "connected",
          label: "Uniones",
          title: "Las uniones comunicantes enlazan las células",
          text: "Conectan sus interiores. En este esquema no hay vesículas ni una hendidura química.",
        },
        {
          id: "current",
          label: "Corriente",
          title: "Los iones pasan de una célula a la otra",
          text: "La corriente cruza de forma directa por los poros de las uniones comunicantes.",
        },
        {
          id: "shared",
          label: "Voltaje",
          title: "La segunda célula cambia de voltaje",
          text: "Ese paso de iones puede despolarizarla. El mensaje no depende de un neurotransmisor.",
        },
      ],
    },
    {
      id: "iones-y-membrana",
      title: "Iones y membrana",
      textAlternative:
        "Membrana con el exterior arriba y el interior abajo. El canal azul es de Na+ y el violeta de K+. Los iones de la animación solo se mueven por esos canales.",
      paragraphs: [
        {
          text: "La bomba sodio-potasio conserva esos gradientes a largo plazo. La subida y la bajada rápidas de este ejemplo dependen de los canales, no de la bomba.",
          cites: ["potential"],
        },
      ],
      parts: [
        {
          id: "sodium-channel",
          label: "Canal de Na+",
          text: "En este esquema es la proteína azul. Durante la despolarización deja entrar sodio.",
        },
        {
          id: "potassium-channel",
          label: "Canal de K+",
          text: "En este esquema es la proteína violeta. Durante la repolarización deja salir potasio.",
        },
        {
          id: "other-proteins",
          label: "Otras proteínas",
          text: "La membrana tiene más proteínas que estos dos canales. Este dibujo no las identifica como la bomba sodio-potasio.",
        },
        {
          id: "sodium",
          label: "Na+",
          text: "En reposo está más concentrado fuera. En la despolarización de este ejemplo entra por el canal azul.",
        },
        {
          id: "potassium",
          label: "K+",
          text: "En reposo está más concentrado dentro. En la repolarización sale por el canal violeta.",
        },
      ],
      stages: [
        {
          id: "rest",
          label: "Reposo",
          title: "Sodio y potasio están separados",
          text: "Hay más Na+ fuera y más K+ dentro. Los canales de la fase rápida permanecen cerrados.",
        },
        {
          id: "depolarization",
          label: "Entrada",
          title: "Entra sodio por su canal",
          text: "El canal azul se abre y el Na+ pasa al interior. El potasio no usa ese camino.",
        },
        {
          id: "repolarization",
          label: "Salida",
          title: "Sale potasio por su canal",
          text: "El canal violeta deja salir K+. La bomba mantiene los gradientes, pero no causa esta bajada rápida.",
        },
      ],
    },
    {
      id: "diferencia-de-potencial",
      title: "Diferencia de potencial",
      textAlternative:
        "La neurona con un punto marcado en el axón y, al lado, la gráfica del voltaje de ese punto. El marcador y la gráfica comparten el mismo tiempo.",
      paragraphs: [
        {
          text: "Los valores de este ejemplo, cerca de -70 mV en reposo y un pico cercano a +30 mV, cambian según el tipo de neurona. La gráfica sigue el mismo punto marcado en el axón.",
          cites: ["potential"],
        },
      ],
      stages: [
        {
          id: "rest",
          label: "Reposo",
          title: "Este punto está cerca de -70 mV",
          text: "El voltaje es la diferencia entre el interior y el exterior en el lugar marcado, no en todo el axón.",
        },
        {
          id: "depolarization",
          label: "Subida",
          title: "El voltaje de este punto sube",
          text: "Entra Na+ y el interior se vuelve menos negativo. En el ejemplo el pico se acerca a +30 mV.",
        },
        {
          id: "repolarization",
          label: "Bajada",
          title: "Sale potasio y el voltaje baja",
          text: "El K+ sale por su canal y este punto vuelve hacia el valor de reposo.",
        },
        {
          id: "hyperpolarization",
          label: "Más negativo",
          title: "El voltaje queda un momento más negativo",
          text: "Después de la bajada puede pasar de -70 mV. Luego se acerca otra vez a ese valor.",
        },
      ],
    },
    {
      id: "red-neuronal",
      title: "Red neuronal",
      textAlternative:
        "Varias neuronas del mismo estilo. Una secuencia marca tres células que se activan y una que recibe una señal inhibitoria y no se dispara.",
      paragraphs: [
        {
          text: "El mismo tipo de célula puede seguir caminos distintos. En este ejemplo, la conexión inhibitoria impide que la cuarta neurona se dispare.",
          cites: ["communication"],
        },
      ],
      stages: [
        {
          id: "idle",
          label: "Reposo",
          title: "La red espera una entrada",
          text: "Ninguna de las células de esta secuencia está disparando.",
        },
        {
          id: "input",
          label: "Entrada",
          title: "Se activa la primera neurona",
          text: "Una señal entra por la célula marcada y comienza un camino concreto.",
        },
        {
          id: "relay",
          label: "Relevo",
          title: "La segunda neurona responde",
          text: "La conexión excitatoria basta, en este ejemplo, para que esa célula se active.",
        },
        {
          id: "split",
          label: "Dos destinos",
          title: "Una se activa y otra permanece en silencio",
          text: "La tercera recibe una señal excitatoria y se dispara. La cuarta recibe una conexión inhibitoria y no lo hace.",
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
        {
          text: "Las señales locales pueden sumarse en el espacio y en el tiempo. Si el resultado no alcanza el umbral al inicio del axón, el potencial de acción no se genera. Esta escena muestra el caso en el que sí se alcanza.",
          cites: ["potential"],
        },
      ],
    },
    {
      afterSceneId: "glia-y-mielina",
      title: "No toda la glía produce mielina",
      paragraphs: [
        {
          text: "Astrocitos y microglía tienen otras funciones. En el sistema nervioso periférico, la mielina la forman células de Schwann, que no aparecen en este dibujo.",
          cites: ["tissue"],
        },
      ],
    },
    {
      afterSceneId: "iones-y-membrana",
      title: "Canales y bomba",
      paragraphs: [
        {
          text: "Los canales dejan pasar iones a favor de sus gradientes y el voltaje cambia rápido. La bomba gasta energía para mantener, a más largo plazo, más sodio fuera y más potasio dentro.",
          cites: ["potential"],
        },
      ],
    },
  ],
  sources: [
    {
      id: "tissue",
      title: "Anatomy and Physiology 2e, sección 12.2, Nervous Tissue",
      authors: "Betts et al.",
      year: "2022",
      edition: "Anatomy and Physiology 2e. OpenStax. Sección 12.2, Nervous Tissue.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue",
    },
    {
      id: "potential",
      title: "Anatomy and Physiology 2e, sección 12.4, The Action Potential",
      authors: "Betts et al.",
      year: "2022",
      edition: "Anatomy and Physiology 2e. OpenStax. Sección 12.4, The Action Potential.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential",
    },
    {
      id: "communication",
      title: "Anatomy and Physiology 2e, sección 12.5, Communication Between Neurons",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Sección 12.5, Communication Between Neurons.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
    },
    {
      id: "myelin",
      title: "Increased Conduction Velocity as a Result of Myelination",
      authors: "Purves et al.",
      year: "2001",
      edition:
        "Neuroscience, 2.ª edición. Sinauer Associates. Capítulo sobre mielina y nodos de Ranvier. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK10921/",
    },
    {
      id: "chemical",
      title: "Chemical Synapses",
      authors: "Purves et al.",
      year: "2001",
      edition:
        "Neuroscience, 2.ª edición. Sinauer Associates. Capítulo Chemical Synapses. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK11009/",
    },
  ],
} as const satisfies LearnLessonContent;
