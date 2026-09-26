# Prompt completo para corregir el contenido de manuelquistial.dev sin suposiciones

Versión editorial del 26 de septiembre de 2026. Basada en la revisión directa en navegador de Inicio, Trayectoria, Proyectos, detalles de Babel Scores y UdeA, Investigación y Contacto, en español e inglés.

## Uso

Adjunta este archivo a Cursor y solicita ejecutar íntegramente «Prompt de implementación». Este documento reemplaza los prompts anteriores de contenido, incluidas sus introducciones. No lo combines con textos de versiones previas. El diseño visual existente se conserva.

Este documento fija los textos que Cursor debe implementar. No le delega la creación de una nueva narrativa profesional. Las limitaciones de información están identificadas y tienen una acción concreta: no completarlas, registrarlas fuera del sitio y continuar los cambios independientes.

Importante: un texto ya publicado no constituye verificación independiente de los hechos. Esta edición conserva el alcance limitado de la información revisada, sin certificar nuevos resultados ni añadir responsabilidades. La ampliación de los proyectos y de la metodología de investigación requiere datos que aún no están definidos aquí.

---

## Prompt de implementación

Implementa en este repositorio las modificaciones de contenido especificadas a continuación. Tu función es desarrollar una edición controlada: aplicar textos literales, eliminar redundancias, corregir traducciones y ajustar componentes cuando sea necesario para mostrar el contenido.

No redactes alternativas. No rellenes información faltante. No uses conocimiento general sobre una empresa, una tecnología o un producto para atribuir experiencia a Manuel.

### 1. Reglas obligatorias de ejecución

1. Lee las instrucciones del repositorio y conserva los cambios existentes del usuario.
2. Inspecciona framework, rutas, traducciones, componentes, datos y scripts. Elige soluciones técnicas compatibles con el proyecto real; no supongas rutas de archivos ni APIs.
3. No reconstruyas el proyecto ni cambies de framework, CMS, hosting, tipografía o paleta.
4. No hagas push ni publiques en producción. Entrega una versión local revisable.
5. Aplica literalmente los textos ES y EN de este documento. No los amplíes, resumas, parafrasees ni traduzcas nuevamente.
6. Puedes resolver detalles técnicos de implementación. No puedes resolver vacíos biográficos, comerciales o científicos mediante inferencia.
7. No inventes métricas, clientes, cargos, fechas, funcionalidades, tecnologías por proyecto, resultados, disponibilidad o autoría.
8. No conviertas «participé» en «lideré», ni un propósito en un resultado observado.
9. Si un dato actual contradice este documento por una corrección explícita posterior de Manuel, conserva esa corrección y registra el conflicto. Si el origen es desconocido, no elijas silenciosamente: deja sin modificar el dato conflictivo y pregunta al finalizar.
10. No agregues al sitio notas internas, justificaciones de verificación, información pendiente, placeholders ni advertencias editoriales.
11. No elimines experiencias, activos o datos distintos de los cambios expresamente solicitados.
12. Termina todas las modificaciones independientes. Un dato pendiente no bloquea las demás páginas.

### 2. Alcance y rutas

Revisa y modifica las rutas equivalentes a:

- `/es` y `/en`.
- `/es/about` y `/en/about`.
- `/es/projects` y `/en/projects`.
- `/es/projects/babel-scores` y `/en/projects/babel-scores`.
- `/es/projects/udea-fcf-digital-ecosystem` y su equivalente inglés.
- `/es/research` y `/en/research`.
- `/es/contact` y `/en/contact`.

Conserva las URLs existentes, el selector de idioma y sus correspondencias. Si el repositorio usa otra organización interna, adapta solo la implementación. No inventes redirecciones ni elimines rutas.

Si aparecen otras páginas con contenido que no está cubierto aquí, no les inventes una reescritura. Reutiliza únicamente las cadenas compartidas definidas y registra las páginas adicionales para revisión.

### 3. Protocolo cuando falta información

La ausencia de datos se resuelve así, sin excepciones:

| Situación | Acción obligatoria |
| --- | --- |
| Texto literal definido en este documento | Implementarlo sin variaciones. |
| Función, responsabilidad o resultado no definido | No añadirlo. |
| Dato conservado de la versión actual | Conservar su significado; no presentarlo como recién verificado. |
| Fecha o cargo con contradicción | No inferir la corrección; registrar el conflicto y continuar lo demás. |
| Imagen sin procedencia o significado claro | No atribuirle una función ni generar una descripción especulativa. Conservarla sin nuevas afirmaciones y registrar la duda. |
| Falta información para ampliar un detalle | Implementar el texto limitado definido aquí. No crear secciones vacías ni prosa de relleno. |
| Fuente externa describe una capacidad del producto | No atribuirla a Manuel sin confirmación de su responsabilidad. |
| Comentario técnico o regla editorial | Mantenerlo fuera del contenido público. |

Registra las dudas en `docs/content-pending.md`, adaptando la carpeta si el proyecto publica automáticamente `docs/`: el archivo debe quedar fuera de cualquier ruta servida al visitante. No copies certificados ni datos sensibles dentro del informe.

### 4. Navegación y nombres de secciones

Usa estas correspondencias exactas:

| ES | EN |
| --- | --- |
| Proyectos | Projects |
| Trayectoria | Experience |
| Investigación | Research |
| Contacto | Contact |
| Experiencia profesional | Professional experience |
| Docencia y formación tecnológica | Teaching and technical training |
| Formación académica | Education |
| Competencias | Skills |
| Idiomas | Languages |
| Aplicaciones y plataformas | Applications and platforms |
| Sitios web | Websites |
| Ver proyectos | View projects |
| Todos los proyectos | All projects |
| Trayectoria completa | View experience |
| Ver investigación | View research |
| Volver a proyectos | Back to projects |
| Detalle del proyecto | Project details |
| Abrir sitio | Visit website |
| Descargar CV | Download CV |
| Contactar | Contact |
| Contactar por LinkedIn | Contact me on LinkedIn |

El nombre Manuel Quistial enlaza al inicio. No añadas un segundo menú ni enlaces Inicio redundantes.

### 5. Inicio

Orden fijo: presentación, proyectos, experiencia resumida, investigación, contacto y pie.

#### Presentación

Nombre: Manuel Quistial.

H1 ES: **Ingeniero de software**

Texto ES:

> Desarrollo aplicaciones web, desde la interfaz hasta los servicios que las hacen funcionar. Trabajo tanto en nuevas funcionalidades como en la evolución de productos existentes.

H1 EN: **Software Engineer**

Texto EN:

> I develop web applications, from user interfaces to the services behind them. My work includes building new features and improving existing products.

Acción principal: Ver proyectos / View projects, hacia el bloque de proyectos del inicio. Acción secundaria: Contactar / Contact, hacia Contacto.

Elimina por completo la introducción anterior sobre «gestionar información, contenidos y procesos» y la enumeración de plataformas de aprendizaje, partituras y UdeA dentro del hero. No sustituyas esos textos por la propuesta anterior «entender qué necesitan resolver y convertirlo en software». Solo se usa el texto literal de esta sección.

#### Proyectos

Tres elementos, en este orden: Babel Scores, aplicaciones de UdeA y sitio Sal & Picciotto. Utiliza los textos de la sección 6. No añadas introducción genérica al bloque.

#### Experiencia resumida

Conserva las cuatro organizaciones de la portada revisada: Anthology / Blackboard, Digital Americas Pipeline Initiative, Babel Scores y Universidad de Antioquia — Facultad de Comunicaciones y Filología.

Muestra únicamente organización, función y periodo. Quita de este bloque las viñetas y descripciones. No elimines esas contribuciones de la página Trayectoria. Elimina la ubicación del resumen de portada; se conserva en Trayectoria.

Esta decisión evita repetir el lector de Babel Scores y las aplicaciones de UdeA inmediatamente después de mostrarlos como proyectos. No agregues nuevos resúmenes para reemplazar las viñetas.

Funciones ES/EN:

- Anthology / Blackboard: Ingeniero de software / Software Engineer.
- Digital Americas Pipeline Initiative: Desarrollador backend / Backend Developer.
- Babel Scores: Ingeniero de software / Software Engineer.
- UdeA: Asesoría y desarrollo de software / Software Development and Consulting.

Conserva los valores temporales actuales; aplica solo el formato de fechas de la sección 10. Para UdeA usa «Colaboraciones por proyecto · 2024–2026» / «Project-based work · 2024–2026», sin sugerir empleo continuo. Ese intervalo describe periodos documentados, no cada día comprendido en ellos.

Enlace final: Trayectoria completa / View experience, hacia el apartado de experiencia de Trayectoria.

#### Investigación en inicio

Texto ES:

> Mi investigación de maestría en la Universidad de Antioquia se centra en interfaces cerebro-computador basadas en señales EEG e imaginación motora.

Texto EN:

> My master's research at Universidad de Antioquia focuses on brain-computer interfaces based on EEG signals and motor imagery.

Enlace: Ver investigación / View research. No repitas «Investigación» como encabezado y como etiqueta idéntica del enlace.

#### Contacto en inicio

Utiliza el mismo texto y CTA definidos en la sección 11. Su repetición aquí y en la página Contacto es intencional: permite contactar sin navegar obligatoriamente a otra página.

### 6. Proyectos y tarjetas

H1: Proyectos / Projects.

Elimina «Aplicaciones, plataformas y sitios web en los que he trabajado» y su traducción. No aporta información adicional al título y las agrupaciones.

Grupos: Aplicaciones y plataformas / Applications and platforms; Sitios web / Websites.

#### Babel Scores

Título: Babel Scores.

Descripción ES:

> Desarrollo del lector de partituras en el navegador e integraciones de comercio electrónico y acceso institucional.

Descripción EN:

> Development of the browser-based sheet music reader, e-commerce integrations, and institutional access integrations.

Elimina la etiqueta «Plataforma de partituras digitales» y su traducción. No coloques dos frases con el mismo propósito. Conserva el enlace al detalle y un solo título visible.

#### UdeA

Título ES: **Aplicaciones de la Facultad de Comunicaciones y Filología**

Título EN: **Applications for the Faculty of Communications and Philology**

Contexto, en ambos idiomas: Universidad de Antioquia.

Descripción ES:

> Desarrollo y actualización de aplicaciones de la facultad, con soporte, capacitación y asesoría en datos.

Descripción EN:

> Development and updates for faculty applications, including support, training, and data consulting.

No uses «gestión de aplicaciones» para introducir una responsabilidad de operación que no está definida aquí.

#### Grupo de sitios web

Introducción ES:

> Implementación web de diseños de Sal & Picciotto.

Introducción EN:

> Web development based on designs by Sal & Picciotto.

Este crédito se muestra una vez en el grupo. En la portada, donde el sitio de la agencia aparece separado, conserva un crédito breve «Diseño de Sal & Picciotto» / «Design by Sal & Picciotto».

Textos exactos de las fichas:

| Proyecto | ES | EN |
| --- | --- | --- |
| Sal & Picciotto | Implementación del sitio de la agencia en WordPress. | WordPress implementation of the agency's website. |
| Trapatsas Eye Center | Implementación del sitio web del centro oftalmológico. | Implementation of the eye center's website. |
| Giving Tuesday Panamá | Implementación del sitio web de la campaña Giving Tuesday Panamá. | Implementation of the Giving Tuesday Panamá campaign website. |
| Barrio Alto Panamá | Implementación de un sitio inmobiliario con versiones en varios idiomas. | Implementation of a real estate website in multiple languages. |
| FCI PTY Box | Implementación de la página de FCI PTY Box. | Implementation of the FCI PTY Box page. |

El título del primer sitio será «Sal & Picciotto», sin añadir «Sitio web» o «Website», porque el grupo ya informa el tipo de trabajo.

Estos textos son deliberadamente limitados. No los amplíes con filtros, pagos, agendamiento, donaciones, generación de clientes potenciales o automatizaciones. No conocemos aquí el alcance de esas funciones.

Mantén las URLs externas actuales. El CTA es Abrir sitio / Visit website. No añadas un detalle vacío para los proyectos que actualmente solo tienen enlace externo.

### 7. Detalle de Babel Scores

Conserva la ruta, el H1 Babel Scores, el enlace al dominio y las imágenes reales existentes válidas. No cambies la autoría de imágenes ni generes capturas falsas.

Reemplaza el cuerpo por esta estructura exacta:

**Introducción ES**

> Babel Scores permite explorar, comprar y leer partituras digitales en línea.

**Introducción EN**

> Babel Scores lets users browse, purchase, and read digital sheet music online.

**Sección ES: Desarrollo del lector**

> Desarrollé el lector de partituras para su consulta directamente en el navegador.

**Sección EN: Reader development**

> I developed the sheet music reader for use directly in the browser.

**Sección ES: Comercio electrónico y acceso institucional**

> Implementé funciones de comercio electrónico e integraciones de acceso institucional para la plataforma.

**Sección EN: E-commerce and institutional access**

> I implemented e-commerce features and institutional access integrations for the platform.

Elimina «Qué es», el párrafo que vuelve a resumir la contribución y la lista final «Mi aporte». Las funciones solo se describen una vez en esta página.

No añadas una sección de resultados, retos, arquitectura o aprendizajes sin los datos correspondientes. No atribuyas anotaciones, edición, zoom, exportación o navegación concreta a Manuel basándote solo en lo que veas en el producto.

El detalle seguirá siendo breve porque falta información confirmada sobre funciones y decisiones. Registra B01 y B02 del apartado de pendientes. No declares que recuperaste profundidad técnica: se habrá eliminado redundancia, pero la ampliación factual seguirá pendiente.

### 8. Detalle de UdeA

Título ES: Aplicaciones de la Facultad de Comunicaciones y Filología.

Título EN: Applications for the Faculty of Communications and Philology.

Contexto: Universidad de Antioquia.

Metadato ES: Colaboraciones por proyecto · 2024–2026.

Metadato EN: Project-based work · 2024–2026.

**Introducción ES**

> Colaboré en el desarrollo y la actualización de aplicaciones utilizadas por la facultad, además de brindar soporte, capacitación y asesoría en datos.

**Introducción EN**

> I contributed to developing and updating applications used by the faculty, and provided support, training, and data consulting.

**Sección ES: Sistema de información**

> Participé en el diseño y puesta en marcha de un sistema de información, trabajando en su estructura y funcionalidad.

**Sección EN: Information system**

> I contributed to the design and launch of an information system, working on its structure and functionality.

**Sección ES: Actualización y uso de las aplicaciones**

> Actualicé aplicaciones existentes y brindé soporte y capacitación para su uso.

**Sección EN: Application updates and support**

> I updated existing applications and provided support and training for their use.

**Sección ES: Gestión y análisis de datos**

> Realicé asesoría en gestión y análisis de datos asociados a las aplicaciones de la facultad.

**Sección EN: Data management and analysis**

> I provided advice on managing and analyzing data associated with the faculty's applications.

Elimina el bloque «Mi aporte» y el párrafo «El trabajo corresponde a periodos documentados… no a un único cargo continuo…», incluidos sus equivalentes ingleses. El metadato comunica la modalidad sin una justificación defensiva.

No inventes el nombre del sistema, procesos administrativos, reportes, población usuaria o mejoras operativas. No repongas Keycloak, OIDC, arquitectura de microservicios o patrones de migración desde textos antiguos. Registra U01 y U02 para ampliar con datos confirmados.

### 9. Trayectoria

H1 ES: Trayectoria. H1 EN: Experience.

Introducción ES:

> Soy ingeniero electrónico y trabajo en desarrollo de software. También he impartido formación en programación, análisis de datos e inteligencia artificial en la Universidad de Antioquia.

Introducción EN:

> I am an electronics engineer working in software development. I have also taught programming, data analysis, and artificial intelligence at Universidad de Antioquia.

No utilices «taken part in technical training», que puede interpretarse como formación recibida.

Orden fijo: experiencia profesional, docencia, formación académica, competencias, enlace a investigación e idiomas. Conserva el acceso al CV existente.

#### Anthology / Blackboard

Cargo: Ingeniero de software / Software Engineer.

Viñetas ES, en este orden:

1. Desarrollé interfaces para administrar configuraciones y activar funcionalidades en plataformas de aprendizaje.
2. Participé en la migración de módulos de Angular a React y en la automatización de pruebas de flujos críticos.
3. Implementé validaciones de formularios, manejo de errores y estados de carga en las interfaces administrativas.

Viñetas EN:

1. Developed interfaces for managing settings and activating features in learning platforms.
2. Contributed to migrating modules from Angular to React and automating tests for critical workflows.
3. Implemented form validation, error handling, and loading states in administrative interfaces.

Línea técnica: React, TypeScript, Java, Spring Boot, WebdriverIO.

No vincules todas las tecnologías a cada función. No añadas escala global, ahorro de tiempo, mejora de conversiones, liderazgo de migración o ausencia de incidencias.

#### Digital Americas Pipeline Initiative

Cargo: Desarrollador backend / Backend Developer.

Viñetas ES:

1. Construí herramientas de monitoreo con Electron y Elastic Stack para consultar el estado y la actividad de los servicios.
2. Desarrollé servicios para procesar información y distribuir notificaciones entre componentes de aplicaciones en la nube.

Viñetas EN:

1. Built monitoring tools with Electron and Elastic Stack to inspect service status and activity.
2. Developed services for processing data and distributing notifications across cloud application components.

Línea técnica: Node.js, Express, AWS.

No inventes el tipo de datos, clientes o sector. Registra D01.

#### Babel Scores

Cargo: Ingeniero de software / Software Engineer.

Viñetas ES:

1. Desarrollé el lector de partituras para su consulta en el navegador.
2. Implementé funciones de comercio electrónico e integraciones de acceso institucional.

Viñetas EN:

1. Developed the browser-based sheet music reader.
2. Implemented e-commerce features and institutional access integrations.

Línea técnica: WordPress, WooCommerce, React.

No amplíes el alcance ni agregues bibliotecas de versiones históricas.

#### Sal & Picciotto

Cargo ES: Desarrollador WordPress / Frontend.

Cargo EN: WordPress / Frontend Developer.

Viñetas ES:

1. Implementé sitios web a partir de los diseños de la agencia, adaptándolos a diferentes tamaños de pantalla.
2. Configuré campos y componentes para actualizar el contenido de los sitios desde WordPress.
3. Implementé versiones multilingües en los proyectos que lo requerían.

Viñetas EN:

1. Implemented websites based on the agency's designs and adapted them for different screen sizes.
2. Configured fields and components for updating website content in WordPress.
3. Implemented multilingual versions for projects that required them.

Línea técnica: WordPress, Elementor Pro, ACF, Polylang.

No atribuyas diseño de marca ni diseño visual a Manuel. No añadas personalizaciones concretas no especificadas; registra S01.

#### Universidad de Antioquia — Facultad de Comunicaciones y Filología

Función ES: Asesoría y desarrollo de software.

Función EN: Software Development and Consulting.

Periodo: Colaboraciones por proyecto · 2024–2026 / Project-based work · 2024–2026.

Viñetas ES:

1. Participé en el diseño y puesta en marcha de un sistema de información para la facultad.
2. Actualicé aplicaciones existentes y brindé soporte y capacitación para su uso.
3. Realicé asesoría en gestión y análisis de datos asociados a esas aplicaciones.

Viñetas EN:

1. Contributed to the design and launch of an information system for the faculty.
2. Updated existing applications and provided support and training for their use.
3. Provided advice on managing and analyzing data associated with those applications.

Elimina la línea «Web applications, Data analysis». No es un stack y repite las actividades. No la sustituyas por tecnologías no confirmadas.

#### Docencia y formación tecnológica

Organización: Universidad de Antioquia.

Cargo: Profesor de cátedra / Adjunct Instructor.

Periodo ES: Contratos por periodos · 2022–2025.

Periodo EN: Periodic teaching contracts · 2022–2025.

Texto ES, un solo párrafo:

> Impartí formación en programación, desarrollo web, análisis de datos e inteligencia artificial, además de docencia en prácticas académicas.

Texto EN:

> Taught programming, web development, data analysis, and artificial intelligence, as well as academic practice courses.

Elimina la segunda viñeta repetida sobre bootcamps. No traduzcas niveles explorador e integrador como explorer e integrator: retira esas etiquetas del resumen. No inventes participantes, tasas de aprobación o resultados de aprendizaje.

### 10. Fechas, formación, competencias e idiomas

Preserva los datos actuales de fechas, títulos académicos, ubicaciones e idiomas, salvo los formatos y periodos expresamente indicados aquí. Preservar no equivale a validarlos. No deduzcas meses de inicio a partir del primer contrato encontrado ni reemplaces «Presente» por una fecha de fin.

Formatea las fechas en español: ene., feb., mar., abr., may., jun., jul., ago., sep., oct., nov., dic. En inglés utiliza abreviaturas inglesas coherentes. Ejemplo: «nov. 2021 – may. 2026» / «Nov 2021 – May 2026».

En formación conserva los nombres de los programas y las fechas previstas actuales. No transformes expected/previsto en una graduación obtenida. No recalcules el estado académico en función del calendario.

Competencias: conserva la selección actual, con estos cambios exactos:

- «Web applications» se elimina de la experiencia UdeA, como se indicó.
- «Data analysis» en ES pasa a «Análisis de datos».
- «Signal processing» en ES pasa a «Procesamiento de señales».
- En EN se conservan Data analysis y Signal processing.
- Retira «AWS Lambda» de la lista resumida de Infraestructura si ya muestra AWS; puede permanecer en documentación técnica existente fuera del resumen.

No agregues ni elimines otras habilidades para hacer coincidir un perfil ideal. No uses porcentajes de dominio, barras de progreso ni etiquetas expert/senior nuevas.

En Trayectoria, la investigación se reduce a un encabezado «Investigación» / «Research» y un enlace «Ver investigación» / «View research». Elimina el párrafo repetido de la portada. No la presentes como empleo si no existe una vinculación laboral documentada.

Conserva los niveles actuales de idiomas y registra cualquier contradicción explícita encontrada. No conviertas descripciones generales en bandas IELTS o niveles CEFR.

### 11. Contacto

H1: Contacto / Contact.

Texto ES:

> Para oportunidades de trabajo, proyectos de software o colaboraciones de investigación, escríbeme por LinkedIn.

Texto EN:

> For job opportunities, software projects, or research collaborations, contact me on LinkedIn.

CTA: Contactar por LinkedIn / Contact me on LinkedIn.

Conserva el enlace actual al perfil. No uses una URL inventada para iniciar conversación. No añadas correo, formulario, WhatsApp o calendario.

Muestra Descargar CV / Download CV una sola vez como enlace, sin un párrafo idéntico encima. Mantén GitHub con un único enlace comprensible. Conserva el pie existente sin duplicar el texto de contacto.

No sobrescribas el CV ni sustituyas el archivo por otro adaptado a una postulación. Verifica que el enlace resuelva; si falla, informa el fallo sin inventar un archivo.

### 12. Investigación

La información disponible permite describir el tema, pero no completar aquí la metodología vigente, resultados o avance. No uses versiones antiguas del portafolio para llenar esos campos.

Reemplaza Tema, Enfoque, Enfoque de trabajo y Trabajo actual por una sola presentación con este contenido:

**H1 ES:** Investigación

**Subtítulo ES:** Interfaces cerebro-computador e imaginación motora

**Párrafo 1 ES:**

> Mi investigación de maestría en la Universidad de Antioquia se centra en interfaces cerebro-computador basadas en señales EEG e imaginación motora. Trabajo en procesamiento de señales y desarrollo de software para los experimentos.

**Párrafo 2 ES:**

> La imaginación motora consiste en imaginar un movimiento sin ejecutarlo. El EEG permite registrar la actividad eléctrica cerebral desde el cuero cabelludo.

**H1 EN:** Research

**Subtítulo EN:** Brain-computer interfaces and motor imagery

**Párrafo 1 EN:**

> My master's research at Universidad de Antioquia focuses on brain-computer interfaces based on EEG signals and motor imagery. I work on signal processing and software development for the experiments.

**Párrafo 2 EN:**

> Motor imagery involves imagining a movement without performing it. EEG records the brain's electrical activity from the scalp.

No agregues apartados vacíos de métodos, resultados o publicaciones. Conserva materiales existentes solo si estaban publicados y no contradicen esta edición; si encuentras esa situación, registra el conflicto antes de alterar el material.

No publiques frases como «se mantiene general», «solo cuando esté autorizado», «pendiente de materiales» o «sin atribuir resultados clínicos». Son reglas editoriales internas.

No añadas técnicas, número de participantes, hardware, clasificación de manos, datasets o métricas. No equipares tiempo real y lazo cerrado. La ampliación queda registrada como R01; no puede resolverse adivinando.

### 13. Imágenes y textos asociados

No cambies las imágenes por referencias de diseño ni uses imágenes generadas para representar trabajo real. Esta fase no requiere imágenes nuevas.

No copies el nombre del proyecto dos veces por un fallback de imagen y un título. Usa un solo título visible. Si falta la imagen, omite la zona visual sin mostrar placeholders.

Para alt existentes correctos, conserva su función. Si un alt contiene atribuciones no respaldadas, reduce la descripción al elemento realmente visible. Si no puedes inspeccionar la imagen, no inventes su contenido y registra la duda. No vuelvas decorativa una imagen informativa simplemente para evitar describirla.

Las capturas no demuestran autoría ni resultados. No deduzcas desde ellas que Manuel implementó todas las funciones que muestran.

### 14. Metadatos literales

Aplica títulos y descripciones en cada idioma. No amplíes palabras clave ni añadas especialidades. Usa la misma descripción para Open Graph cuando corresponda.

| Página | Título ES | Título EN |
| --- | --- | --- |
| Inicio | Manuel Quistial · Ingeniero de software | Manuel Quistial · Software Engineer |
| Trayectoria | Trayectoria · Manuel Quistial | Experience · Manuel Quistial |
| Proyectos | Proyectos · Manuel Quistial | Projects · Manuel Quistial |
| Babel Scores | Babel Scores · Manuel Quistial | Babel Scores · Manuel Quistial |
| UdeA | Aplicaciones de la facultad · Manuel Quistial | Faculty applications · Manuel Quistial |
| Investigación | Investigación · Manuel Quistial | Research · Manuel Quistial |
| Contacto | Contacto · Manuel Quistial | Contact · Manuel Quistial |

Descripciones ES/EN, respectivamente:

- Inicio: «Ingeniero de software. Desarrollo de aplicaciones web, nuevas funcionalidades y evolución de productos existentes.» / «Software engineer working on web applications, new features, and improvements to existing products.»
- Trayectoria: «Experiencia de Manuel Quistial en desarrollo de software y formación tecnológica.» / «Manuel Quistial's experience in software development and technical teaching.»
- Proyectos: «Proyectos de aplicaciones, plataformas y sitios web en los que ha trabajado Manuel Quistial.» / «Applications, platforms, and websites Manuel Quistial has worked on.»
- Babel Scores: «Desarrollo del lector de partituras e integraciones de comercio electrónico y acceso institucional en Babel Scores.» / «Sheet music reader development, e-commerce integrations, and institutional access integrations for Babel Scores.»
- UdeA: «Desarrollo y actualización de aplicaciones de la Facultad de Comunicaciones y Filología de la Universidad de Antioquia.» / «Development and updates for applications at Universidad de Antioquia's Faculty of Communications and Philology.»
- Investigación: «Investigación de maestría en interfaces cerebro-computador, señales EEG e imaginación motora.» / «Master's research on brain-computer interfaces, EEG signals, and motor imagery.»
- Contacto: «Contacto con Manuel Quistial para oportunidades de trabajo, proyectos de software y colaboraciones de investigación.» / «Contact Manuel Quistial about job opportunities, software projects, and research collaborations.»

Conserva canonical, hreflang, sitemap y URLs. No inventes nuevos datos estructurados. Corrige las formulaciones sustituidas en campos existentes solo cuando exista correspondencia explícita con los textos anteriores.

### 15. Qué eliminar del contenido público

Busca estas formulaciones y sus equivalentes dentro del contenido público. Elimina el uso rechazado, no palabras técnicas legítimas en cualquier archivo indiscriminadamente:

- Connected systems / sistemas conectados en el posicionamiento.
- Selected projects / proyectos seleccionados como rótulo.
- Gestionar información, contenidos y procesos en la introducción antigua.
- Software institucional y desarrollo web para clientes como propuesta de valor.
- Documentos musicales / musical documents para referirse a partituras.
- Manageable content structures y taken part in technical training en los usos señalados.
- Full background.
- Instrucciones editoriales sobre verificación, autorización o falta de materiales.
- Etiquetas Live, In progress, Coming soon, View demo y Case Study.
- Listas Mi aporte que duplican el cuerpo del detalle.
- Frases sobre impacto, escalabilidad, fiabilidad o resultados no definidas en este documento.

No borres las fuentes históricas o documentos privados que las contengan. La revisión se aplica al contenido publicado y sus metadatos.

### 16. Pendientes exactos y límites de finalización

Crea una tabla privada con estos identificadores. No los resuelvas mediante búsquedas generales ni inspeccionando solo el sitio del producto.

| ID | Dato que requiere respuesta de Manuel | Acción hasta recibirla |
| --- | --- | --- |
| D01 | ¿Qué información procesaban los servicios de Digital Americas y quién utilizaba las herramientas de monitoreo? | Mantener las dos contribuciones limitadas definidas. |
| B01 | ¿Qué funciones concretas del lector de Babel Scores implementó Manuel? | No añadir anotaciones, zoom, edición, exportación ni otras capacidades. |
| B02 | ¿Qué integraciones de comercio y acceso institucional desarrolló y cuál fue su responsabilidad individual? | Mantener la descripción general definida, sin atribuir liderazgo integral. |
| U01 | ¿Qué sistema o módulos de la facultad desarrolló y qué operaciones permitían? | No inventar nombre ni proceso. |
| U02 | ¿Qué reportes, datos o integraciones concretas atendió en UdeA? | Mantener la asesoría en datos sin ampliar funciones. |
| S01 | ¿Qué personalizaciones distintas del montaje de páginas realizó en cada sitio de agencia? | Mantener fichas breves y crédito de agencia. |
| R01 | ¿Cuál es la pregunta, metodología vigente y estado real del trabajo de maestría que se puede publicar? | Mostrar únicamente el texto de investigación fijado. |
| F01 | ¿Las fechas actuales de cada colaboración, estudios y niveles de idiomas siguen siendo correctas? | No alterar valores por inferencia; conservar salvo formatos expresamente definidos. |

Un resumen factual más limitado evita inventar, pero no equivale a completar la documentación de un proyecto. Declara esos límites en la entrega técnica, no en el sitio. No afirmes que la ampliación del detalle está resuelta si B01, B02, U01, U02 o R01 siguen sin respuesta.

### 17. Validación

1. Ejecuta los controles existentes de lint, tipos, build y pruebas relevantes. No instales un sistema de pruebas nuevo para comparar párrafos.
2. Compara las cadenas implementadas con los textos literales de este documento. No debe haber frases añadidas para llenar espacio.
3. Revisa las siete rutas en ambos idiomas. Conserva nombres propios y equivalencia de responsabilidad.
4. Comprueba que las fechas solo cambiaron de formato, salvo la presentación por proyectos de UdeA y docencia definida expresamente.
5. Comprueba que la portada ya no repite viñetas de experiencia y que los detalles no tienen la lista Mi aporte duplicada.
6. Verifica enlaces al CV, a proyectos, LinkedIn, GitHub y cambio de idioma. No envíes mensajes ni formularios.
7. Revisa visualmente 375 px y 1440 px; confirma también que no hay desbordamiento a 320 px. Ajusta espacios y wrapping sin reescribir el texto ni reducir indebidamente la letra.
8. Conserva un H1 por página, estructura semántica, foco visible y accesibilidad de los enlaces. No uses líneas bajo títulos ni flechas decorativas.
9. Si una validación no puede ejecutarse, registra el motivo. No declares un resultado que no observaste.

### 18. Criterios de aceptación

- [ ] La introducción es exactamente la nueva versión ES/EN.
- [ ] No se reutilizó ninguna de las dos introducciones rechazadas.
- [ ] Proyectos y navegación usan los nombres fijados.
- [ ] La portada muestra experiencia sin viñetas de contribuciones.
- [ ] Cada tarjeta contiene una sola descripción, sin etiqueta redundante.
- [ ] Los detalles no repiten sus aportes en una lista final.
- [ ] UdeA comunica modalidad por proyectos sin párrafo defensivo.
- [ ] Trayectoria contiene las contribuciones literales, sin ampliaciones.
- [ ] Docencia tiene un único párrafo sin repetición de materias.
- [ ] No aparecen meses ingleses ni competencias sin traducir en ES.
- [ ] Investigación no tiene cuatro apartados sobre la misma idea.
- [ ] No se inventaron datos metodológicos ni resultados.
- [ ] Contacto y CV no tienen etiquetas consecutivas duplicadas.
- [ ] El CTA de LinkedIn describe el destino real.
- [ ] Las traducciones son las suministradas, no nuevas paráfrasis.
- [ ] Metadatos y contenido visible son coherentes.
- [ ] No se añadieron imágenes falsas ni atribuciones desde capturas.
- [ ] Los pendientes permanecen fuera del sitio público.
- [ ] Fechas y alcance no se corrigieron por inferencia.
- [ ] Se conservaron rutas, diseño y cambios previos ajenos a la tarea.
- [ ] Se informó con precisión qué se verificó y qué falta confirmar.

### 19. Entrega de Cursor

Entrega:

1. Resumen de cambios por ruta.
2. Archivos principales modificados.
3. Resultado de validaciones ejecutadas.
4. Ubicación del registro privado de pendientes.
5. Lista de conflictos encontrados y datos que no modificaste por falta de confirmación.
6. Instrucciones para abrir la versión local.

No entregues solo un plan. Implementa todo lo definido. No afirmes haber mejorado métricas ni haber publicado el sitio. No presentes los detalles pendientes como contenido validado.

---

## Nota para Manuel

Este prompt cierra las decisiones editoriales e incluye todos los textos en ambos idiomas para limitar la improvisación de Cursor. La descripción detallada de funciones y resultados que aún no se ha confirmado no puede completarse con rigor mediante una orden al modelo; queda registrada con preguntas concretas. El documento permite terminar las correcciones de redacción y estructura sin inventar esa información.
