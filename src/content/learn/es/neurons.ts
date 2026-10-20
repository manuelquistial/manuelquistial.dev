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
      prompt: "Toca una parte de la célula para ver qué hace en este recorrido.",
      paragraphs: [],
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
          text: "Cada entrada cambia un tramo de membrana y se atenúa hacia el soma. No es todavía un potencial de acción.",
        },
        {
          id: "integration",
          label: "Integración",
          title: "Esas entradas coinciden en el segmento inicial",
          text: "El indicador junto al inicio del axón reúne su efecto. Si queda bajo la marca, no hay disparo.",
        },
        {
          id: "threshold",
          label: "Umbral",
          title: "El segmento inicial del axón alcanza el umbral",
          text: "En este ejemplo la suma llega a la marca. Solo entonces empieza un potencial de acción, del mismo tamaño.",
        },
        {
          id: "propagation",
          label: "Propagación",
          title: "Una franja estrecha recorre el axón",
          text: "El potencial de acción se regenera en los nodos. Detrás, la membrana vuelve al estado de reposo.",
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
          text: "Sus prolongaciones llegan hasta las vainas de varios axones. Durante el paso del impulso permanece quieto.",
        },
        {
          id: "nodes",
          label: "Nodos de Ranvier",
          text: "Tramos de membrana entre la mielina. Ahí se regenera el potencial de acción.",
        },
      ],
      stages: [
        {
          id: "isolation",
          label: "Aislamiento",
          title: "La vaina ya envuelve el axón",
          text: "El corte muestra capas alrededor del axón. La mielina no se forma ni desaparece con cada impulso.",
        },
        {
          id: "spread",
          label: "Entre nodos",
          title: "La despolarización avanza por el tramo cubierto",
          text: "Ese cambio se extiende por dentro del segmento aislado. No es todavía la regeneración del nodo.",
        },
        {
          id: "regeneration",
          label: "Regeneración",
          title: "En el nodo se abren canales de sodio",
          text: "El Na+ entra por esos canales y el nodo se activa. El oligodendrocito permanece quieto.",
        },
        {
          id: "continuation",
          label: "Continuación",
          title: "El proceso alcanza el nodo siguiente",
          text: "La despolarización sigue por el próximo tramo cubierto hasta el nodo de más adelante.",
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
          id: "calcium-channel",
          label: "Canal de Ca2+",
          text: "Proteína de la membrana presináptica. Cuando se abre, el Ca2+ entra desde el exterior del terminal.",
        },
        {
          id: "vesicles",
          label: "Vesículas",
          text: "Guardan neurotransmisor. En este ejemplo una vesícula preparada se fusiona solo después de la entrada de calcio.",
        },
        {
          id: "transmitters",
          label: "Neurotransmisores",
          text: "Moléculas distintas de los iones. Se difunden por la hendidura y pueden unirse a un receptor sin cruzar la membrana.",
        },
        {
          id: "receptors",
          label: "Receptores",
          text: "En este ejemplo el receptor es ionotrópico: al unirse el mensajero abre un poro para Na+. No representa todos los receptores.",
        },
        {
          id: "cleft",
          label: "Hendidura",
          text: "Espacio entre las dos células. El neurotransmisor se difunde aquí. El Ca2+ también está en el exterior, pero entra por su canal.",
        },
        {
          id: "junctions",
          label: "Uniones comunicantes",
          text: "El poro comunica los interiores. Este ejemplo deja pasar iones en los dos sentidos. No todas las sinapsis eléctricas son así.",
        },
        {
          id: "cell-1",
          label: "Célula 1",
          text: "La célula de arriba. En el ejemplo bidireccional puede iniciar el cambio o recibirlo.",
        },
        {
          id: "cell-2",
          label: "Célula 2",
          text: "La célula de abajo. Su voltaje cambia cuando los iones cruzan el poro desde la otra célula.",
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
          title: "Entra calcio por su canal",
          text: "El canal de Ca2+ se abre y el ion entra desde fuera. Las vesículas siguen cerradas.",
        },
        {
          id: "release",
          label: "Liberación",
          title: "La vesícula se abre y suelta su contenido",
          text: "El contorno cerrado se continúa con la membrana. El neurotransmisor sale después de esa abertura.",
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
          title: "Algunas moléculas se unen al receptor",
          text: "En este ejemplo el receptor ionotrópico cambia de forma. El mensajero no cruza la membrana.",
        },
        {
          id: "response",
          label: "Respuesta",
          title: "Entra sodio y el voltaje local cambia",
          text: "Este receptor deja pasar Na+. El cambio queda en esa membrana y no dispara un potencial de acción.",
        },
        {
          id: "connected",
          label: "Uniones",
          title: "Un poro comunica los dos interiores",
          text: "La unión no está tapada. Este ejemplo puede conducir en los dos sentidos. Otras sinapsis eléctricas no.",
        },
        {
          id: "current",
          label: "Corriente",
          title: "Los iones cruzan el poro",
          text: "La corriente va de la célula que cambió primero hacia la otra. No hay neurotransmisor.",
        },
        {
          id: "shared",
          label: "Voltaje",
          title: "La célula acoplada cambia de voltaje",
          text: "El interior que recibe los iones se despolariza. El dibujo marca solo esa membrana, no toda la célula.",
        },
      ],
    },
    {
      id: "iones-y-membrana",
      title: "Iones y membrana",
      textAlternative:
        "Membrana con el exterior arriba y el interior abajo. Hay más Na+ fuera y más K+ dentro. Los canales de la fase rápida se cierran, se abren o se inactivan.",
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
          id: "pump",
          label: "Bomba Na+/K+",
          text: "Conserva los gradientes de sodio y potasio. No produce la repolarización rápida de este ejemplo.",
        },
        {
          id: "leak",
          label: "Canal de fuga",
          text: "Un poro distinto de los canales dependientes de voltaje. Contribuye al reposo y no conduce este potencial de acción.",
        },
        {
          id: "sodium",
          label: "Na+",
          text: "En reposo está más concentrado fuera. En la despolarización de este ejemplo una parte entra por el canal azul.",
        },
        {
          id: "potassium",
          label: "K+",
          text: "En reposo está más concentrado dentro. En la repolarización una parte sale por el canal violeta.",
        },
      ],
      stages: [
        {
          id: "rest",
          label: "Reposo",
          title: "Los canales rápidos están cerrados",
          text: "Hay más Na+ fuera y más K+ dentro. Las compuertas de Na+ y de K+ de este ejemplo se ven cerradas. El canal de fuga es otro poro.",
        },
        {
          id: "depolarization",
          label: "Entrada",
          title: "Se abre el canal de sodio",
          text: "La compuerta azul se abre y un Na+ entra por ese poro. La mayor parte del sodio sigue fuera.",
        },
        {
          id: "repolarization",
          label: "Salida",
          title: "El sodio se inactiva y sale potasio",
          text: "Una bola cierra el canal de Na+ por dentro. El canal violeta se abre y un K+ sale. La bomba no causa esta bajada.",
        },
        {
          id: "recovery",
          label: "Recuperación",
          title: "Los canales vuelven a cerrarse",
          text: "Las compuertas regresan al cierre. Sigue habiendo más Na+ fuera y más K+ dentro.",
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
        "Varias neuronas. A, B, C y D participan en el ejemplo. La conexión hacia D es inhibitoria y C sí dispara.",
      paragraphs: [
        {
          text: "El mismo tipo de célula puede seguir caminos distintos. En este ejemplo, la conexión inhibitoria llega a D y esa célula no dispara.",
          cites: ["communication"],
        },
      ],
      parts: [
        {
          id: "cell-a",
          label: "Célula A",
          text: "Inicia el episodio de este ejemplo y envía una conexión excitatoria a B.",
        },
        {
          id: "cell-b",
          label: "Célula B",
          text: "Recibe la entrada de A. Después puede disparar hacia C y enviar una conexión inhibitoria a D.",
        },
        {
          id: "cell-c",
          label: "Célula C",
          text: "Recibe una conexión excitatoria desde B. En este ejemplo esa entrada basta para que dispare.",
        },
        {
          id: "cell-d",
          label: "Célula D",
          text: "Recibe una conexión inhibitoria. Muestra una respuesta local y no dispara.",
        },
      ],
      stages: [
        {
          id: "idle",
          label: "Reposo",
          title: "A, B, C y D esperan",
          text: "Ninguna de las células marcadas está disparando.",
        },
        {
          id: "input",
          label: "Entrada",
          title: "A inicia el episodio",
          text: "La señal recorre el axón de A hasta el terminal que contacta con B. B muestra una respuesta local.",
        },
        {
          id: "relay",
          label: "Relevo",
          title: "B dispara hacia C",
          text: "Después de la respuesta local, B conduce un potencial de acción. C empieza a responder.",
        },
        {
          id: "split",
          label: "Dos destinos",
          title: "C dispara y D no",
          text: "La señal llega a C por una conexión excitatoria y C dispara. D recibe la conexión inhibitoria y no lo hace.",
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
