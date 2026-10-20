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
          text: "Las entradas de las dendritas son señales locales. El potencial de acción de este ejemplo solo aparece si se alcanza el umbral.",
          cites: ["communication"],
        },
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
          text: "Esas señales se reúnen en el soma. Su efecto depende de cómo se sumen.",
        },
        {
          id: "threshold",
          label: "Umbral",
          text: "En este ejemplo se alcanza el umbral al inicio del axón.",
        },
        {
          id: "propagation",
          label: "Propagación",
          text: "El potencial de acción recorre el axón hacia los terminales.",
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
          text: "En el sistema nervioso central, el oligodendrocito forma mielina alrededor de tramos del axón. El potencial de acción se regenera en los nodos de Ranvier.",
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
          label: "Axón mielinizado",
          text: "Se ven la mielina, el oligodendrocito y los nodos.",
        },
        {
          id: "node-1",
          label: "Primer nodo",
          text: "El potencial de acción se regenera en el primer nodo.",
        },
        {
          id: "node-2",
          label: "Siguiente nodo",
          text: "La corriente sigue por dentro del axón y el potencial se regenera en el nodo siguiente.",
        },
        {
          id: "node-3",
          label: "Otro nodo",
          text: "La regeneración vuelve a ocurrir en la membrana del nodo.",
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
        "Dos esquemas separados. En la sinapsis química hay vesículas, hendidura y receptores. En la eléctrica, uniones comunicantes dejan pasar iones de una célula a la otra.",
      paragraphs: [
        {
          text: "En la sinapsis química, los neurotransmisores cruzan una hendidura. En la eléctrica, los iones pasan de forma directa por uniones comunicantes.",
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
          text: "Los neurotransmisores se difunden por la hendidura.",
        },
        {
          id: "binding",
          label: "Receptores",
          text: "Se unen a receptores de la membrana postsináptica.",
        },
        {
          id: "response",
          label: "Respuesta",
          text: "Puede haber una respuesta local. No implica, por sí sola, un nuevo potencial de acción.",
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
          text: "Ese paso de iones puede cambiar el voltaje de la segunda célula.",
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
          text: "Durante el potencial de acción, entra Na+ por su canal y luego sale K+ por el suyo. La bomba sodio-potasio mantiene los gradientes, pero no produce esa bajada rápida.",
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
          text: "Na+ está más concentrado fuera y K+ dentro. Los canales de la fase rápida están cerrados.",
        },
        {
          id: "depolarization",
          label: "Despolarización",
          text: "Entra Na+ por su canal.",
        },
        {
          id: "repolarization",
          label: "Repolarización",
          text: "Sale K+ por su canal.",
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
          text: "El voltaje es la diferencia entre el interior y el exterior en el punto marcado, no el voltaje de todo el axón a la vez. Los valores, cerca de -70 mV en reposo y un pico cercano a +30 mV, son aproximados y dependen del tipo de neurona.",
          cites: ["potential"],
        },
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
          text: "Entra Na+ y el voltaje de este punto se vuelve menos negativo.",
        },
        {
          id: "repolarization",
          label: "Repolarización",
          text: "Sale K+ y el voltaje vuelve hacia el reposo.",
        },
        {
          id: "hyperpolarization",
          label: "Hiperpolarización",
          text: "Durante un momento el voltaje queda por debajo del reposo. Luego se acerca otra vez a ese valor.",
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
          text: "Una entrada puede seguir un camino concreto: activa unas neuronas y deja otras en silencio. En esta secuencia, una de las conexiones es inhibitoria.",
          cites: ["communication"],
        },
      ],
      stages: [
        {
          id: "idle",
          label: "En espera",
          text: "La red está en reposo.",
        },
        {
          id: "input",
          label: "Entrada",
          text: "Se activa la primera neurona de la secuencia.",
        },
        {
          id: "relay",
          label: "Relevo",
          text: "Esa señal excita a la segunda, que responde en este ejemplo.",
        },
        {
          id: "split",
          label: "Dos destinos",
          text: "La tercera se activa. La marcada como inhibitoria no se dispara.",
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
