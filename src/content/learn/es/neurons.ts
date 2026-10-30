import type { LearnLessonContent } from "@/content/learn/types";
import type { NeuronSceneId } from "@/content/learn/scene-ids";

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
      text: "Seguiremos cómo una neurona integra las señales que recibe. Veremos cómo un potencial de acción se propaga por su axón y cómo su actividad puede modificar la de otra célula.",
      cites: ["tissue", "communication"],
    },
  ],
  scenes: [
    {
      id: "una-neurona",
      title: "Una neurona",
      textAlternative:
        "Neurona con un árbol de dendritas, el soma y un axón que termina en varios terminales.",
      paragraphs: [
        {
          text: "En esta neurona, las dendritas y el soma reciben entradas sinápticas. Sus efectos se integran y pueden dar lugar a un potencial de acción que se propaga por el axón hasta sus terminales.",
          cites: ["tissue", "communication"],
        },
      ],
    },
    {
      id: "partes",
      title: "Partes de la neurona",
      textAlternative:
        "La misma neurona, sin rótulos fijos. Se pueden elegir el soma, las dendritas y el axón.",
      prompt: "Selecciona una estructura para conocer su función.",
      paragraphs: [],
      parts: [
        {
          id: "dendrites",
          label: "Dendritas",
          text: "Reciben gran parte de las entradas sinápticas de otras neuronas. Los potenciales postsinápticos locales se suman e influyen en si el segmento inicial del axón alcanza el umbral de disparo.",
          cites: ["tissue", "communication"],
        },
        {
          id: "soma",
          label: "Soma",
          text: "Contiene el núcleo y gran parte de la maquinaria metabólica de la neurona. También recibe e integra entradas sinápticas junto con las dendritas.",
          cites: ["tissue", "communication"],
        },
        {
          id: "axon",
          label: "Axón",
          text: "Conduce potenciales de acción desde el segmento inicial hasta los terminales. En axones mielinizados, la señal se regenera en los nodos de Ranvier a lo largo del recorrido.",
          cites: ["tissue", "communication", "myelin"],
        },
      ],
    },
    {
      id: "recibir-y-transmitir",
      title: "Recibir y transmitir señales",
      textAlternative:
        "Entradas locales se integran en una neurona y alcanzan el umbral en el segmento inicial. Se genera un potencial de acción que se propaga por el axón.",
      paragraphs: [
        {
          text: "Las entradas sinápticas modifican el potencial de membrana: la diferencia de voltaje entre el interior y el exterior de la célula. Sus efectos se combinan y pueden llevar al segmento inicial del axón al umbral de disparo.",
          cites: ["communication", "potential"],
        },
      ],
      stages: [
        {
          id: "inputs",
          label: "Llegada",
          title: "Las entradas producen cambios locales de voltaje",
          text: "Las entradas de esta escena hacen que el interior sea menos negativo respecto al exterior. Este cambio se llama despolarización.",
          cites: ["communication"],
        },
        {
          id: "integration",
          label: "Integración",
          title: "Los efectos de las entradas se combinan",
          text: "Los cambios locales se extienden hacia el segmento inicial y sus efectos se suman.",
          cites: ["communication"],
        },
        {
          id: "threshold",
          label: "Umbral",
          title: "Se alcanza el umbral de disparo",
          text: "La despolarización activa suficientes canales de sodio dependientes de voltaje para iniciar un potencial de acción.",
          cites: ["communication", "potential"],
        },
        {
          id: "propagation",
          label: "Resultado",
          title: "El potencial de acción se propaga",
          text: "En este axón mielinizado, el potencial de acción se regenera en los nodos de Ranvier. La membrana de las regiones ya activadas se repolariza.",
          cites: ["myelin", "potential"],
        },
      ],
    },
    {
      id: "iones-y-membrana",
      title: "Iones y membrana",
      textAlternative:
        "Membrana con el exterior arriba y el interior abajo. Hay más Na⁺ fuera y más K⁺ dentro. Los canales de la fase rápida se cierran, se abren o se inactivan.",
      prompt:
        "Selecciona un canal, la bomba o un ion para ver su papel en esta fase.",
      paragraphs: [
        {
          text: "La apertura y el cierre de canales cambian el movimiento de iones a través de la membrana y, con ello, su voltaje.",
          cites: ["potential"],
        },
      ],
      parts: [
        {
          id: "sodium-channel",
          label: "Canal de Na⁺",
          text: "Canal dependiente de voltaje. Cuando se abre permite la entrada de Na⁺; después puede inactivarse y dejar de conducir.",
          cites: ["potential"],
        },
        {
          id: "potassium-channel",
          label: "Canal de K⁺",
          text: "Canal dependiente de voltaje. Su apertura permite la salida de K⁺ y contribuye a devolver el potencial de membrana hacia valores negativos.",
          cites: ["potential"],
        },
        {
          id: "pump",
          label: "Bomba Na⁺/K⁺",
          text: "Utiliza energía para transportar Na⁺ hacia fuera y K⁺ hacia dentro. Mantiene los gradientes iónicos que sustentan el potencial de membrana.",
          cites: ["potential"],
        },
        {
          id: "leak",
          label: "Canal de fuga",
          text: "Permite un paso continuo de iones a favor de sus gradientes y contribuye al potencial de membrana en reposo.",
          cites: ["potential"],
        },
        {
          id: "sodium",
          label: "Na⁺",
          text: "El sodio está más concentrado en el exterior. Su entrada a través de canales abiertos contribuye a la despolarización.",
          cites: ["potential"],
        },
        {
          id: "potassium",
          label: "K⁺",
          text: "El potasio está más concentrado en el interior. Su salida a través de canales abiertos contribuye a la repolarización.",
          cites: ["potential"],
        },
      ],
      stages: [
        {
          id: "depolarization",
          label: "Entrada",
          title: "La entrada de sodio despolariza la membrana",
          text: "Al abrirse los canales de sodio dependientes de voltaje, entra Na⁺ y el interior se vuelve menos negativo respecto al exterior.",
          cites: ["potential"],
        },
        {
          id: "repolarization",
          label: "Salida",
          title: "Los canales de sodio se inactivan y aumenta la salida de potasio",
          text: "La inactivación de los canales de Na⁺ reduce su entrada. La salida de K⁺ por canales dependientes de voltaje lleva el potencial de membrana hacia valores negativos.",
          cites: ["potential"],
        },
        {
          id: "recovery",
          label: "Recuperación",
          title: "Los canales recuperan su estado de disponibilidad",
          text: "Los canales de Na⁺ salen de la inactivación y vuelven a estar disponibles para responder. Los canales de K⁺ vuelven a cerrarse.",
          cites: ["potential"],
        },
      ],
    },
    {
      id: "diferencia-de-potencial",
      title: "El potencial de acción recorre el axón",
      textAlternative:
        "Neurona con tres potenciales de acción sucesivos que se propagan desde el segmento inicial hacia los terminales.",
      paragraphs: [
        {
          text: "Para producir impulsos sucesivos, el segmento inicial debe recuperar su capacidad de respuesta y volver a alcanzar el umbral. La animación muestra tres potenciales de acción de amplitud semejante, con el tiempo ralentizado.",
          cites: ["potential"],
        },
      ],
      stages: [
        {
          id: "first",
          label: "Primero",
          title: "Se inicia el primer potencial de acción",
          text: "El segmento inicial alcanza el umbral y se inicia un potencial de acción que se propaga por el axón.",
          cites: ["potential"],
        },
        {
          id: "second",
          label: "Segundo",
          title: "Se inicia un segundo potencial de acción",
          text: "El primer potencial continúa propagándose. Un nuevo disparo requiere que el segmento inicial recupere su capacidad de respuesta y vuelva a alcanzar el umbral.",
          cites: ["potential"],
        },
        {
          id: "third",
          label: "Tercero",
          title: "Los potenciales se suceden",
          text: "El periodo refractario limita la sucesión de disparos: durante una primera fase no puede iniciarse otro potencial y, después, se necesita una excitación mayor.",
          cites: ["potential"],
        },
        {
          id: "terminals",
          label: "Terminales",
          title: "Los potenciales alcanzan los terminales",
          text: "En una sinapsis química, la llegada de un potencial de acción al terminal puede desencadenar la liberación de neurotransmisores.",
          cites: ["chemical"],
        },
      ],
    },
    {
      id: "glia-y-mielina",
      title: "Glía y mielina",
      textAlternative:
        "Axón con cuatro segmentos de mielina y un oligodendrocito del sistema nervioso central que contacta esos segmentos.",
      prompt:
        "Selecciona la mielina, el oligodendrocito o un nodo para conocer su función.",
      paragraphs: [
        {
          text: "La mielina favorece una conducción rápida. Entre sus segmentos se encuentran los nodos de Ranvier, donde se regenera el potencial de acción.",
          cites: ["myelin"],
        },
      ],
      parts: [
        {
          id: "myelin",
          label: "Mielina",
          text: "Vaina aislante que reduce la pérdida de corriente a través de la membrana axonal. Facilita que la despolarización se propague con mayor eficacia entre nodos.",
          cites: ["myelin"],
        },
        {
          id: "glia",
          label: "Oligodendrocito",
          text: "Célula glial del sistema nervioso central que forma mielina. Una misma célula puede envolver varios segmentos axonales.",
          cites: ["tissue"],
        },
        {
          id: "nodes",
          label: "Nodos de Ranvier",
          text: "Zonas de membrana axonal expuesta entre vainas de mielina. Allí se regenera el potencial de acción mediante canales de sodio dependientes de voltaje.",
          cites: ["myelin"],
        },
      ],
      stages: [
        {
          id: "spread",
          label: "Entre nodos",
          title: "La despolarización alcanza el siguiente nodo",
          text: "La mielina reduce la pérdida de corriente a través de la membrana que recubre. La despolarización se extiende por el tramo entre nodos.",
          cites: ["myelin"],
        },
        {
          id: "regeneration",
          label: "Regeneración",
          title: "El potencial de acción se regenera en el nodo",
          text: "Al alcanzarse el umbral en el nodo, se abren canales de sodio dependientes de voltaje y se regenera el potencial de acción.",
          cites: ["myelin"],
        },
        {
          id: "continuation",
          label: "Continuación",
          title: "El proceso continúa hacia el siguiente nodo",
          text: "La corriente local despolariza el siguiente tramo del axón y permite que la señal continúe propagándose.",
          cites: ["myelin"],
        },
      ],
    },
    {
      id: "sinapsis",
      title: "Sinapsis química y eléctrica",
      textAlternative:
        "Dos esquemas separados. En la sinapsis química hay vesículas, hendidura y receptores. En la eléctrica, uniones comunicantes dejan pasar iones de una célula a la otra.",
      prompt: "Selecciona un elemento de la sinapsis para conocer su función.",
      paragraphs: [
        {
          text: "Las sinapsis químicas transmiten mediante neurotransmisores que actúan sobre receptores. Las eléctricas permiten el paso directo de corriente iónica entre células conectadas por uniones comunicantes.",
          cites: ["communication", "chemical", "electrical"],
        },
      ],
      variantNotes: {
        chemical: {
          text: "Esta escena representa una sinapsis excitatoria con un receptor ionotrópico.",
          cites: ["communication", "chemical"],
        },
        electrical: {
          text: "La unión representada permite corriente en ambos sentidos. Algunas sinapsis eléctricas presentan una transmisión asimétrica.",
          cites: ["electrical"],
        },
      },
      parts: [
        {
          id: "calcium-channel",
          label: "Canal de Ca²⁺",
          text: "Canal de la membrana presináptica que se abre en respuesta a la despolarización y permite la entrada de calcio.",
          cites: ["chemical"],
        },
        {
          id: "vesicles",
          label: "Vesículas",
          text: "Contienen neurotransmisor y pueden fusionarse con la membrana presináptica para liberarlo.",
          cites: ["chemical"],
        },
        {
          id: "transmitters",
          label: "Neurotransmisores",
          text: "Moléculas liberadas por la neurona presináptica que actúan sobre receptores de la célula postsináptica.",
          cites: ["chemical"],
        },
        {
          id: "receptors",
          label: "Receptores",
          text: "Proteínas que responden al neurotransmisor. El receptor ionotrópico representado forma un canal cuya apertura permite el paso de iones.",
          cites: ["communication", "chemical"],
        },
        {
          id: "cleft",
          label: "Hendidura",
          text: "Espacio entre las membranas presináptica y postsináptica por el que se difunde el neurotransmisor.",
          cites: ["chemical"],
        },
        {
          id: "junctions",
          label: "Uniones comunicantes",
          text: "Canales que conectan los interiores celulares y permiten el paso directo de corriente iónica.",
          cites: ["electrical"],
        },
        {
          id: "cell-1",
          label: "Célula 1",
          text: "En esta secuencia, el cambio de potencial comienza en esta célula.",
          cites: ["electrical"],
        },
        {
          id: "cell-2",
          label: "Célula 2",
          text: "Su potencial de membrana cambia por la corriente que atraviesa la unión comunicante.",
          cites: ["electrical"],
        },
      ],
      stages: [
        {
          id: "arrival",
          label: "Llegada",
          title: "El potencial de acción llega al terminal",
          text: "La llegada del potencial de acción despolariza la membrana presináptica.",
          cites: ["chemical"],
        },
        {
          id: "calcium",
          label: "Calcio",
          title: "La despolarización abre canales de calcio",
          text: "Se abren canales de Ca²⁺ dependientes de voltaje y aumenta la concentración de calcio dentro del terminal.",
          cites: ["chemical"],
        },
        {
          id: "release",
          label: "Liberación",
          title: "El calcio desencadena la fusión de vesículas",
          text: "El aumento de Ca²⁺ activa el proceso de fusión de las vesículas con la membrana presináptica y permite liberar el neurotransmisor.",
          cites: ["chemical"],
        },
        {
          id: "diffusion",
          label: "Difusión",
          title: "El neurotransmisor se difunde por la hendidura",
          text: "Las moléculas liberadas se dispersan por el espacio entre las células y algunas alcanzan los receptores postsinápticos.",
          cites: ["chemical"],
        },
        {
          id: "binding",
          label: "Unión",
          title: "El neurotransmisor activa el receptor",
          text: "El receptor de esta escena es ionotrópico: forma un canal que se abre al unirse el neurotransmisor.",
          cites: ["communication", "chemical"],
        },
        {
          id: "response",
          label: "Respuesta",
          title: "La corriente postsináptica modifica el voltaje",
          text: "La entrada de Na⁺ contribuye a una despolarización local. Esta respuesta se extiende con atenuación y se integra con las demás entradas de la neurona.",
          cites: ["communication", "chemical"],
        },
        {
          id: "connected",
          label: "Uniones",
          title: "Las uniones comunicantes conectan los interiores celulares",
          text: "Sus canales establecen una vía directa para el paso de corriente iónica entre las dos células.",
          cites: ["electrical"],
        },
        {
          id: "current",
          label: "Corriente",
          title: "La diferencia de voltaje produce corriente entre las células",
          text: "La corriente iónica atraviesa la unión comunicante y modifica la distribución de carga en la célula acoplada.",
          cites: ["electrical"],
        },
        {
          id: "shared",
          label: "Voltaje",
          title: "Cambia el potencial de la célula acoplada",
          text: "En esta escena, la corriente produce una despolarización en la segunda célula.",
          cites: ["electrical"],
        },
      ],
    },
    {
      id: "red-neuronal",
      title: "Red neuronal",
      textAlternative:
        "Esquema ilustrativo con neuronas A, B, C y D. La conexión hacia D es inhibitoria. En esta secuencia C genera un potencial de acción y D permanece por debajo del umbral.",
      badge: "Esquema ilustrativo",
      prompt: "Selecciona una célula para ver su papel en esta secuencia.",
      paragraphs: [
        {
          text: "Las entradas excitatorias favorecen el disparo y las inhibitorias reducen su probabilidad. La respuesta de cada neurona depende de cómo se integran sus entradas.",
          cites: ["communication"],
        },
      ],
      closing: [
        {
          text: "El efecto de una sinapsis depende del neurotransmisor y del receptor de la célula que lo recibe. Una entrada inhibitoria no garantiza por sí sola que la neurona deje de disparar.",
          cites: ["communication"],
        },
      ],
      parts: [
        {
          id: "cell-a",
          label: "Célula A",
          text: "Inicia la secuencia representada y establece conexiones con B y D.",
        },
        {
          id: "cell-b",
          label: "Célula B",
          text: "Recibe una entrada excitatoria de A y transmite actividad hacia C cuando alcanza el umbral.",
        },
        {
          id: "cell-c",
          label: "Célula C",
          text: "Recibe la entrada procedente de B y alcanza el umbral en esta secuencia.",
        },
        {
          id: "cell-d",
          label: "Célula D",
          text: "Recibe la conexión inhibitoria procedente de A. En esta secuencia no genera un potencial de acción.",
        },
      ],
      stages: [
        {
          id: "input",
          label: "Entrada",
          title: "A produce una respuesta excitatoria en B",
          text: "La actividad de A genera una respuesta postsináptica en B. En este momento, B todavía no alcanza el umbral.",
          cites: ["communication"],
        },
        {
          id: "relay",
          label: "Relevo",
          title: "B alcanza el umbral y transmite hacia C",
          text: "B genera un potencial de acción que se propaga por su axón y produce una respuesta en C.",
          cites: ["communication"],
        },
        {
          id: "split",
          label: "Dos respuestas",
          title: "C alcanza el umbral y D permanece por debajo",
          text: "En esta secuencia, C genera un potencial de acción. D recibe una entrada inhibitoria y permanece por debajo del umbral.",
          cites: ["communication"],
        },
      ],
    },
  ],
  questions: [
    {
      id: "partes-de-la-neurona",
      afterSceneId: "partes",
      prompt: "¿Qué estructura conduce los potenciales de acción hasta los terminales?",
      options: [
        {
          id: "dendrites",
          label: "Las dendritas",
          feedback:
            "Las dendritas reciben e integran muchas entradas sinápticas. El axón conduce los potenciales de acción hasta los terminales.",
          cites: ["tissue"],
        },
        {
          id: "soma",
          label: "El soma",
          feedback:
            "El soma participa en el mantenimiento celular y en la integración de entradas. La conducción hasta los terminales corresponde al axón.",
          cites: ["tissue"],
        },
        {
          id: "axon",
          label: "El axón",
          feedback:
            "El axón conduce los potenciales de acción desde el segmento inicial hasta los terminales, donde la neurona puede comunicar su actividad a otras células.",
          cites: ["tissue"],
        },
      ],
      correctId: "axon",
    },
    {
      id: "sinapsis-quimica",
      afterSceneId: "sinapsis",
      visibleIn: "chemical",
      prompt: "¿Qué desencadena la fusión de las vesículas en esta sinapsis?",
      options: [
        {
          id: "calcium",
          label: "El aumento de Ca²⁺ dentro del terminal presináptico",
          feedback:
            "El aumento de calcio dentro del terminal activa el proceso de fusión vesicular y permite liberar el neurotransmisor.",
          cites: ["chemical"],
        },
        {
          id: "receptor",
          label: "La unión del neurotransmisor al receptor postsináptico",
          feedback:
            "La unión al receptor postsináptico ocurre después de la liberación. La fusión vesicular se desencadena por el aumento de calcio en el terminal presináptico.",
          cites: ["chemical"],
        },
        {
          id: "pump",
          label: "El transporte de iones por la bomba Na⁺/K⁺",
          feedback:
            "La bomba mantiene las diferencias de concentración de sodio y potasio. La fusión vesicular de esta escena se desencadena por el aumento de calcio dentro del terminal.",
          cites: ["chemical", "potential"],
        },
      ],
      correctId: "calcium",
    },
    {
      id: "iones-voltaje",
      afterSceneId: "iones-y-membrana",
      prompt:
        "¿Cuál es el mecanismo principal de la repolarización rápida en este esquema?",
      options: [
        {
          id: "potassium",
          label: "La salida de K⁺ por sus canales",
          feedback:
            "La salida de K⁺ lleva el potencial de membrana hacia valores negativos y contribuye a la repolarización.",
          cites: ["potential"],
        },
        {
          id: "sodium",
          label: "La entrada de Na⁺ por sus canales",
          feedback:
            "La entrada de Na⁺ contribuye a la despolarización. En la repolarización de este esquema predomina la salida de K⁺.",
          cites: ["potential"],
        },
        {
          id: "pump",
          label: "El transporte de iones mediante la bomba Na⁺/K⁺",
          feedback:
            "La bomba mantiene los gradientes iónicos. La repolarización rápida de este esquema depende principalmente de la salida de K⁺ por sus canales.",
          cites: ["potential"],
        },
      ],
      correctId: "potassium",
    },
  ],
  deepen: [
    {
      afterSceneId: "recibir-y-transmitir",
      title: "Sumación espacial y temporal",
      paragraphs: [
        {
          text: "Las entradas que llegan a distintos lugares pueden combinarse mediante sumación espacial. Las que se suceden con suficiente proximidad temporal también pueden acumular sus efectos mediante sumación temporal.",
          cites: ["communication"],
        },
      ],
    },
    {
      afterSceneId: "iones-y-membrana",
      title: "Canales y bomba",
      paragraphs: [
        {
          text: "Los canales permiten el paso de iones a favor de sus gradientes electroquímicos. La bomba Na⁺/K⁺ utiliza energía para mantener las diferencias de concentración.",
          cites: ["potential"],
        },
        {
          text: "La repolarización rápida de esta escena depende principalmente de la salida de K⁺ por sus canales.",
          cites: ["potential"],
        },
      ],
    },
    {
      afterSceneId: "glia-y-mielina",
      title: "Células que forman mielina",
      paragraphs: [
        {
          text: "En el sistema nervioso central, la mielina la forman los oligodendrocitos. En el sistema nervioso periférico, la forman las células de Schwann.",
          cites: ["tissue"],
        },
      ],
    },
  ],
  sources: [
    {
      id: "tissue",
      title: "Anatomy and Physiology 2e, Sección 12.2: Nervous Tissue",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Sección 12.2: Nervous Tissue.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue",
    },
    {
      id: "communication",
      title: "Anatomy and Physiology 2e, Sección 12.5: Communication Between Neurons",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Sección 12.5: Communication Between Neurons.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
    },
    {
      id: "myelin",
      title: "Increased Conduction Velocity as a Result of Myelination",
      authors: "Purves et al., editores",
      year: "2001",
      edition:
        "Neuroscience, 2.ª edición. Sinauer Associates. Increased Conduction Velocity as a Result of Myelination. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK10921/",
    },
    {
      id: "chemical",
      title: "Chemical Synapses",
      authors: "Purves et al., editores",
      year: "2001",
      edition:
        "Neuroscience, 2.ª edición. Sinauer Associates. Chemical Synapses. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK11009/",
    },
    {
      id: "potential",
      title: "Anatomy and Physiology 2e, Sección 12.4: The Action Potential",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Sección 12.4: The Action Potential.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential",
    },
    {
      id: "electrical",
      title: "Electrical Synapses",
      authors: "Purves et al., editores",
      year: "2001",
      edition:
        "Neuroscience, 2.ª edición. Sinauer Associates. Electrical Synapses. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK11164/",
    },
  ],
} as const satisfies LearnLessonContent;

export function getNeuronScene<Id extends NeuronSceneId>(id: Id) {
  const scene = neuronsLesson.scenes.find((item) => item.id === id);
  if (!scene) {
    throw new Error(`Missing neuron scene: ${id}`);
  }
  return scene as Extract<(typeof neuronsLesson.scenes)[number], { id: Id }>;
}

export function getNeuronQuestion(id: string) {
  return neuronsLesson.questions.find((item) => item.id === id);
}
