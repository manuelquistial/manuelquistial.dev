import type { LearnLessonContent } from "@/content/learn/types";
import type { NeuronSceneId } from "@/content/learn/scene-ids";

export const neuronsLesson = {
  slug: "how-do-neurons-communicate",
  locales: ["en"],
  title: "How do neurons communicate?",
  description:
    "Seven scenes showing how a neuron receives signals, how an action potential can be generated, and how that activity passes to another cell.",
  cardDescription:
    "A tour of the neuron, myelin, the synapse, and a network. The figures are diagrams to help you follow the process.",
  metaTitle: "How do neurons communicate? · Learn",
  publishedAt: "2026-11-17T07:03:34.000Z",
  intro: [
    {
      text: "We will follow how a neuron integrates the signals it receives. We will see how an action potential propagates along its axon and how its activity can change the activity of another cell.",
      cites: ["tissue", "communication"],
    },
  ],
  scenes: [
    {
      id: "partes",
      title: "The neuron",
      textAlternative:
        "A neuron with a dendritic tree, a soma, a nucleus, and an axon. The soma, nucleus, dendrites, and axon can be selected.",
      prompt: "Select a structure to learn about its function.",
      idle: {
        title: "Neuron",
        text: "The neuron is the cell that forms the basis of nervous tissue. It is electrically active: it generates and conducts electrical signals, and it can release chemical signals onto other cells to communicate information. Its shape, with dendrites, a soma, and an axon, allows it to receive, integrate, and transmit that information.",
        cites: ["tissue"],
      },
      paragraphs: [],
      parts: [
        {
          id: "dendrites",
          label: "Dendrites",
          text: "They receive much of the synaptic input from other neurons. Local postsynaptic potentials add together and influence whether the initial segment of the axon reaches the firing threshold.",
          cites: ["tissue", "communication"],
        },
        {
          id: "soma",
          label: "Soma",
          text: "It contains the nucleus and much of the neuron's metabolic machinery. Along with the dendrites, it also receives and integrates synaptic input.",
          cites: ["tissue", "communication"],
        },
        {
          id: "nucleus",
          label: "Nucleus",
          text: "It is located in the soma. It is the most prominent organelle of the cell and stores the genetic instructions for making proteins, which is why it is considered the control center of the cell.",
          cites: ["tissue", "nucleus"],
        },
        {
          id: "axon",
          label: "Axon",
          text: "It conducts action potentials from the initial segment to the terminals. In myelinated axons, the signal is regenerated at the nodes of Ranvier along the way.",
          cites: ["tissue", "communication", "myelin"],
        },
      ],
    },
    {
      id: "recibir-y-transmitir",
      title: "Receiving and transmitting signals",
      textAlternative:
        "Local inputs are integrated in a neuron and reach threshold at the initial segment. An action potential is generated and propagates along the axon.",
      paragraphs: [
        {
          text: "Synaptic inputs change the membrane potential: the voltage difference between the inside and the outside of the cell. Their effects combine and can bring the initial segment of the axon to the firing threshold.",
          cites: ["communication", "potential"],
        },
      ],
      stages: [
        {
          id: "inputs",
          label: "Arrival",
          title: "Inputs produce local voltage changes",
          text: "The inputs in this scene make the inside less negative relative to the outside. This change is called depolarization.",
          cites: ["communication"],
        },
        {
          id: "integration",
          label: "Integration",
          title: "The effects of the inputs combine",
          text: "The local changes spread toward the initial segment and their effects add together.",
          cites: ["communication"],
        },
        {
          id: "threshold",
          label: "Threshold",
          title: "The firing threshold is reached",
          text: "Depolarization activates enough voltage-gated sodium channels to initiate an action potential.",
          cites: ["communication", "potential"],
        },
        {
          id: "propagation",
          label: "Result",
          title: "The action potential propagates",
          text: "In this myelinated axon, the action potential is regenerated at the nodes of Ranvier. The membrane of the regions that were already activated repolarizes.",
          cites: ["myelin", "potential"],
        },
      ],
    },
    {
      id: "iones-y-membrana",
      title: "Ions and the membrane",
      textAlternative:
        "A membrane with the outside at the top and the inside at the bottom. There is more Na⁺ outside and more K⁺ inside. The channels of the fast phase close, open, or inactivate.",
      prompt:
        "Select a channel, the pump, or an ion to see its role in this phase.",
      paragraphs: [
        {
          text: "The opening and closing of channels change the movement of ions across the membrane and, with it, the membrane voltage.",
          cites: ["potential"],
        },
      ],
      parts: [
        {
          id: "sodium-channel",
          label: "Na⁺ channel",
          text: "A voltage-gated channel. When it opens it allows Na⁺ to enter; afterward it can inactivate and stop conducting.",
          cites: ["potential"],
        },
        {
          id: "potassium-channel",
          label: "K⁺ channel",
          text: "A voltage-gated channel. Its opening allows K⁺ to leave and helps return the membrane potential toward negative values.",
          cites: ["potential"],
        },
        {
          id: "pump",
          label: "Na⁺/K⁺ pump",
          text: "It uses energy to transport Na⁺ out and K⁺ in. It maintains the ion gradients that underlie the membrane potential.",
          cites: ["potential"],
        },
        {
          id: "leak",
          label: "Leak channel",
          text: "It allows a continuous flow of ions down their gradients and contributes to the resting membrane potential.",
          cites: ["potential"],
        },
        {
          id: "sodium",
          label: "Na⁺",
          text: "Sodium is more concentrated outside the cell. Its entry through open channels contributes to depolarization.",
          cites: ["potential"],
        },
        {
          id: "potassium",
          label: "K⁺",
          text: "Potassium is more concentrated inside the cell. Its exit through open channels contributes to repolarization.",
          cites: ["potential"],
        },
      ],
      stages: [
        {
          id: "depolarization",
          label: "Entry",
          title: "Sodium entry depolarizes the membrane",
          text: "When voltage-gated sodium channels open, Na⁺ enters and the inside becomes less negative relative to the outside.",
          cites: ["potential"],
        },
        {
          id: "repolarization",
          label: "Exit",
          title: "Sodium channels inactivate and potassium exit increases",
          text: "Inactivation of the Na⁺ channels reduces Na⁺ entry. The exit of K⁺ through voltage-gated channels brings the membrane potential toward negative values.",
          cites: ["potential"],
        },
        {
          id: "recovery",
          label: "Recovery",
          title: "The channels return to their available state",
          text: "The Na⁺ channels recover from inactivation and are again available to respond. The K⁺ channels close again.",
          cites: ["potential"],
        },
      ],
    },
    {
      id: "diferencia-de-potencial",
      title: "The action potential travels along the axon",
      textAlternative:
        "A neuron with three successive action potentials propagating from the initial segment toward the terminals.",
      paragraphs: [
        {
          text: "To produce successive impulses, the initial segment must recover its responsiveness and reach threshold again. The animation shows three action potentials of similar amplitude, with time slowed down.",
          cites: ["potential"],
        },
      ],
      stages: [
        {
          id: "first",
          label: "First",
          title: "The first action potential is initiated",
          text: "The initial segment reaches threshold and an action potential is initiated that propagates along the axon.",
          cites: ["potential"],
        },
        {
          id: "second",
          label: "Second",
          title: "A second action potential is initiated",
          text: "The first potential continues to propagate. A new firing requires the initial segment to recover its responsiveness and reach threshold again.",
          cites: ["potential"],
        },
        {
          id: "third",
          label: "Third",
          title: "The potentials follow one another",
          text: "The refractory period limits how quickly firings can follow one another: during an initial phase another potential cannot be initiated, and afterward a stronger stimulus is needed.",
          cites: ["potential"],
        },
        {
          id: "terminals",
          label: "Terminals",
          title: "The potentials reach the terminals",
          text: "At a chemical synapse, the arrival of an action potential at the terminal can trigger the release of neurotransmitters.",
          cites: ["chemical"],
        },
      ],
    },
    {
      id: "glia-y-mielina",
      title: "Glia and myelin",
      textAlternative:
        "An axon with four myelin segments and a central nervous system oligodendrocyte contacting those segments.",
      prompt:
        "Select the myelin, the oligodendrocyte, or a node to learn about its function.",
      paragraphs: [
        {
          text: "Myelin supports fast conduction. Between its segments are the nodes of Ranvier, where the action potential is regenerated.",
          cites: ["myelin"],
        },
      ],
      parts: [
        {
          id: "myelin",
          label: "Myelin",
          text: "An insulating sheath that reduces current loss across the axonal membrane. It helps depolarization spread more effectively between nodes.",
          cites: ["myelin"],
        },
        {
          id: "glia",
          label: "Oligodendrocyte",
          text: "A glial cell of the central nervous system that forms myelin. A single cell can wrap several axonal segments.",
          cites: ["tissue"],
        },
        {
          id: "nodes",
          label: "Nodes of Ranvier",
          text: "Regions of exposed axonal membrane between myelin sheaths. There, the action potential is regenerated through voltage-gated sodium channels.",
          cites: ["myelin"],
        },
      ],
      stages: [
        {
          id: "spread",
          label: "Between nodes",
          title: "Depolarization reaches the next node",
          text: "Myelin reduces current loss across the membrane it covers. Depolarization spreads along the stretch between nodes.",
          cites: ["myelin"],
        },
        {
          id: "regeneration",
          label: "Regeneration",
          title: "The action potential is regenerated at the node",
          text: "When threshold is reached at the node, voltage-gated sodium channels open and the action potential is regenerated.",
          cites: ["myelin"],
        },
        {
          id: "continuation",
          label: "Continuation",
          title: "The process continues toward the next node",
          text: "The local current depolarizes the next stretch of the axon and allows the signal to keep propagating.",
          cites: ["myelin"],
        },
      ],
    },
    {
      id: "sinapsis",
      title: "Chemical and electrical synapses",
      textAlternative:
        "Two separate diagrams. In the chemical synapse there are vesicles, a cleft, and receptors. In the electrical synapse, gap junctions let ions pass from one cell to the other.",
      prompt: "Select an element of the synapse to learn about its function.",
      paragraphs: [
        {
          text: "Chemical synapses transmit through neurotransmitters that act on receptors. Electrical synapses allow ionic current to pass directly between cells connected by gap junctions.",
          cites: ["communication", "chemical", "electrical"],
        },
      ],
      variantNotes: {
        chemical: {
          text: "This scene depicts an excitatory synapse with an ionotropic receptor.",
          cites: ["communication", "chemical"],
        },
        electrical: {
          text: "The junction shown allows current in both directions. Some electrical synapses show asymmetric transmission.",
          cites: ["electrical"],
        },
      },
      parts: [
        {
          id: "calcium-channel",
          label: "Ca²⁺ channel",
          text: "A channel in the presynaptic membrane that opens in response to depolarization and allows calcium to enter.",
          cites: ["chemical"],
        },
        {
          id: "vesicles",
          label: "Vesicles",
          text: "They contain neurotransmitter and can fuse with the presynaptic membrane to release it.",
          cites: ["chemical"],
        },
        {
          id: "transmitters",
          label: "Neurotransmitters",
          text: "Molecules released by the presynaptic neuron that act on receptors of the postsynaptic cell.",
          cites: ["chemical"],
        },
        {
          id: "receptors",
          label: "Receptors",
          text: "Proteins that respond to the neurotransmitter. The ionotropic receptor shown forms a channel whose opening allows ions to pass.",
          cites: ["communication", "chemical"],
        },
        {
          id: "cleft",
          label: "Synaptic cleft",
          text: "The space between the presynaptic and postsynaptic membranes through which the neurotransmitter diffuses.",
          cites: ["chemical"],
        },
        {
          id: "junctions",
          label: "Gap junctions",
          text: "Channels that connect the cell interiors and allow ionic current to pass directly.",
          cites: ["electrical"],
        },
        {
          id: "cell-1",
          label: "Cell 1",
          text: "In this sequence, the change in potential begins in this cell.",
          cites: ["electrical"],
        },
        {
          id: "cell-2",
          label: "Cell 2",
          text: "Its membrane potential changes because of the current that crosses the gap junction.",
          cites: ["electrical"],
        },
      ],
      stages: [
        {
          id: "arrival",
          label: "Arrival",
          title: "The action potential reaches the terminal",
          text: "The arrival of the action potential depolarizes the presynaptic membrane.",
          cites: ["chemical"],
        },
        {
          id: "calcium",
          label: "Calcium",
          title: "Depolarization opens calcium channels",
          text: "Voltage-gated Ca²⁺ channels open and the calcium concentration inside the terminal increases.",
          cites: ["chemical"],
        },
        {
          id: "release",
          label: "Release",
          title: "Calcium triggers vesicle fusion",
          text: "The rise in Ca²⁺ activates the process by which vesicles fuse with the presynaptic membrane, allowing the neurotransmitter to be released.",
          cites: ["chemical"],
        },
        {
          id: "diffusion",
          label: "Diffusion",
          title: "The neurotransmitter diffuses across the cleft",
          text: "The released molecules spread through the space between the cells and some reach the postsynaptic receptors.",
          cites: ["chemical"],
        },
        {
          id: "binding",
          label: "Binding",
          title: "The neurotransmitter activates the receptor",
          text: "The receptor in this scene is ionotropic: it forms a channel that opens when the neurotransmitter binds.",
          cites: ["communication", "chemical"],
        },
        {
          id: "response",
          label: "Response",
          title: "The postsynaptic current changes the voltage",
          text: "The entry of Na⁺ contributes to a local depolarization. This response spreads with attenuation and is integrated with the neuron's other inputs.",
          cites: ["communication", "chemical"],
        },
        {
          id: "connected",
          label: "Junctions",
          title: "Gap junctions connect the cell interiors",
          text: "Their channels establish a direct pathway for ionic current to pass between the two cells.",
          cites: ["electrical"],
        },
        {
          id: "current",
          label: "Current",
          title: "The voltage difference produces current between the cells",
          text: "Ionic current crosses the gap junction and changes the charge distribution in the coupled cell.",
          cites: ["electrical"],
        },
        {
          id: "shared",
          label: "Voltage",
          title: "The potential of the coupled cell changes",
          text: "In this scene, the current produces a depolarization in the second cell.",
          cites: ["electrical"],
        },
      ],
    },
    {
      id: "red-neuronal",
      title: "Neural network",
      textAlternative:
        "An illustrative diagram with neurons A, B, C, and D. The connection to D is inhibitory. In this sequence C generates an action potential and D stays below threshold.",
      badge: "Illustrative diagram",
      prompt: "Select a cell to see its role in this sequence.",
      paragraphs: [
        {
          text: "Excitatory inputs promote firing and inhibitory inputs reduce its probability. The response of each neuron depends on how its inputs are integrated.",
          cites: ["communication"],
        },
      ],
      closing: [
        {
          text: "The effect of a synapse depends on the neurotransmitter and on the receptor of the cell that receives it. An inhibitory input does not by itself guarantee that the neuron stops firing.",
          cites: ["communication"],
        },
      ],
      parts: [
        {
          id: "cell-a",
          label: "Cell A",
          text: "It starts the sequence shown and makes connections with B and D.",
        },
        {
          id: "cell-b",
          label: "Cell B",
          text: "It receives an excitatory input from A and transmits activity to C when it reaches threshold.",
        },
        {
          id: "cell-c",
          label: "Cell C",
          text: "It receives the input from B and reaches threshold in this sequence.",
        },
        {
          id: "cell-d",
          label: "Cell D",
          text: "It receives the inhibitory connection from A. In this sequence it does not generate an action potential.",
        },
      ],
      stages: [
        {
          id: "input",
          label: "Input",
          title: "A produces an excitatory response in B",
          text: "The activity of A generates a postsynaptic response in B. At this point, B has not yet reached threshold.",
          cites: ["communication"],
        },
        {
          id: "relay",
          label: "Relay",
          title: "B reaches threshold and transmits to C",
          text: "B generates an action potential that propagates along its axon and produces a response in C.",
          cites: ["communication"],
        },
        {
          id: "split",
          label: "Two responses",
          title: "C reaches threshold and D stays below",
          text: "In this sequence, C generates an action potential. D receives an inhibitory input and stays below threshold.",
          cites: ["communication"],
        },
      ],
    },
  ],
  questions: [
    {
      id: "partes-de-la-neurona",
      afterSceneId: "partes",
      prompt: "Which structure conducts action potentials to the terminals?",
      options: [
        {
          id: "dendrites",
          label: "The dendrites",
          feedback:
            "The dendrites receive and integrate many synaptic inputs. The axon conducts action potentials to the terminals.",
          cites: ["tissue"],
        },
        {
          id: "soma",
          label: "The soma",
          feedback:
            "The soma takes part in cell maintenance and in the integration of inputs. Conduction to the terminals is the job of the axon.",
          cites: ["tissue"],
        },
        {
          id: "axon",
          label: "The axon",
          feedback:
            "The axon conducts action potentials from the initial segment to the terminals, where the neuron can communicate its activity to other cells.",
          cites: ["tissue"],
        },
      ],
      correctId: "axon",
    },
    {
      id: "sinapsis-quimica",
      afterSceneId: "sinapsis",
      visibleIn: "chemical",
      prompt: "What triggers vesicle fusion in this synapse?",
      options: [
        {
          id: "calcium",
          label: "The rise in Ca²⁺ inside the presynaptic terminal",
          feedback:
            "The rise in calcium inside the terminal activates the process of vesicle fusion and allows the neurotransmitter to be released.",
          cites: ["chemical"],
        },
        {
          id: "receptor",
          label: "The binding of the neurotransmitter to the postsynaptic receptor",
          feedback:
            "Binding to the postsynaptic receptor occurs after release. Vesicle fusion is triggered by the rise in calcium in the presynaptic terminal.",
          cites: ["chemical"],
        },
        {
          id: "pump",
          label: "The transport of ions by the Na⁺/K⁺ pump",
          feedback:
            "The pump maintains the concentration differences of sodium and potassium. Vesicle fusion in this scene is triggered by the rise in calcium inside the terminal.",
          cites: ["chemical", "potential"],
        },
      ],
      correctId: "calcium",
    },
    {
      id: "iones-voltaje",
      afterSceneId: "iones-y-membrana",
      prompt:
        "What is the main mechanism of fast repolarization in this diagram?",
      options: [
        {
          id: "potassium",
          label: "The exit of K⁺ through its channels",
          feedback:
            "The exit of K⁺ brings the membrane potential toward negative values and contributes to repolarization.",
          cites: ["potential"],
        },
        {
          id: "sodium",
          label: "The entry of Na⁺ through its channels",
          feedback:
            "The entry of Na⁺ contributes to depolarization. In the repolarization shown in this diagram, the exit of K⁺ predominates.",
          cites: ["potential"],
        },
        {
          id: "pump",
          label: "The transport of ions by the Na⁺/K⁺ pump",
          feedback:
            "The pump maintains the ion gradients. The fast repolarization in this diagram depends mainly on the exit of K⁺ through its channels.",
          cites: ["potential"],
        },
      ],
      correctId: "potassium",
    },
  ],
  deepen: [
    {
      afterSceneId: "recibir-y-transmitir",
      title: "Spatial and temporal summation",
      paragraphs: [
        {
          text: "Inputs that arrive at different locations can combine through spatial summation. Inputs that follow one another closely enough in time can also accumulate their effects through temporal summation.",
          cites: ["communication"],
        },
      ],
    },
    {
      afterSceneId: "iones-y-membrana",
      title: "Channels and the pump",
      paragraphs: [
        {
          text: "Channels allow ions to pass down their electrochemical gradients. The Na⁺/K⁺ pump uses energy to maintain the concentration differences.",
          cites: ["potential"],
        },
        {
          text: "The fast repolarization in this scene depends mainly on the exit of K⁺ through its channels.",
          cites: ["potential"],
        },
      ],
    },
    {
      afterSceneId: "glia-y-mielina",
      title: "Cells that form myelin",
      paragraphs: [
        {
          text: "In the central nervous system, myelin is formed by oligodendrocytes. In the peripheral nervous system, it is formed by Schwann cells.",
          cites: ["tissue"],
        },
      ],
    },
  ],
  sources: [
    {
      id: "tissue",
      title: "Anatomy and Physiology 2e, Section 12.2: Nervous Tissue",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Section 12.2: Nervous Tissue.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-2-nervous-tissue",
    },
    {
      id: "nucleus",
      title: "Anatomy and Physiology 2e, Section 3.3: The Nucleus and DNA Replication",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Section 3.3: The Nucleus and DNA Replication.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/3-3-the-nucleus-and-dna-replication",
    },
    {
      id: "communication",
      title: "Anatomy and Physiology 2e, Section 12.5: Communication Between Neurons",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Section 12.5: Communication Between Neurons.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons",
    },
    {
      id: "myelin",
      title: "Increased Conduction Velocity as a Result of Myelination",
      authors: "Purves et al., editors",
      year: "2001",
      edition:
        "Neuroscience, 2nd edition. Sinauer Associates. Increased Conduction Velocity as a Result of Myelination. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK10921/",
    },
    {
      id: "chemical",
      title: "Chemical Synapses",
      authors: "Purves et al., editors",
      year: "2001",
      edition:
        "Neuroscience, 2nd edition. Sinauer Associates. Chemical Synapses. NCBI Bookshelf.",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK11009/",
    },
    {
      id: "potential",
      title: "Anatomy and Physiology 2e, Section 12.4: The Action Potential",
      authors: "Betts et al.",
      year: "2022",
      edition:
        "Anatomy and Physiology 2e. OpenStax. Section 12.4: The Action Potential.",
      href: "https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential",
    },
    {
      id: "electrical",
      title: "Electrical Synapses",
      authors: "Purves et al., editors",
      year: "2001",
      edition:
        "Neuroscience, 2nd edition. Sinauer Associates. Electrical Synapses. NCBI Bookshelf.",
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
