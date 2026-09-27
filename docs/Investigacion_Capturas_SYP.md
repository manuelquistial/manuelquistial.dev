# Investigación y capturas reales · Manuel Quistial

Actualización del 26 de septiembre de 2026. Este documento corrige dos aspectos del prompt anterior: la reducción excesiva de Investigación y la ausencia de imágenes reales de los sitios desarrollados con Sal & Picciotto.

## Instrucción para Cursor

Implementa este documento sobre el proyecto existente. En Investigación y capturas de proyectos, sus instrucciones prevalecen sobre el documento `Prompt_Cursor_Contenido_Controlado_Manuel_Quistial.md`, específicamente sobre las secciones 5 (resumen de investigación), 12, 13, los metadatos de Investigación y el pendiente R01. Conserva el resto de cambios anteriores. No combines párrafos antiguos con estos textos.

No inventes datos ni traduzcas otra vez. Utiliza las cadenas ES y EN literalmente. Conserva rutas, framework, paleta, tipografía y cambios ajenos a esta tarea. No publiques ni hagas push. Entrega la implementación local y sus validaciones.

## 1. Investigación: alcance y organización

La página necesita explicar el objetivo científico, el papel de cada señal, el diseño experimental propuesto y las dimensiones de evaluación. No debe reducirse a una biografía de dos líneas ni llenarse con definiciones escolares.

El contenido siguiente describe una propuesta de investigación. No afirma que se haya completado la adquisición, reclutado participantes, aprobado el protocolo, implementado todo el sistema o obtenido resultados. No añadir etiquetas Live, In progress, Coming soon ni porcentajes de avance.

Orden: H1, título del proyecto, afiliación, resumen, objetivo, sistema propuesto, diseño experimental y evaluación. Usar texto editorial con ancho legible, subtítulos y separación vertical. No convertir cada frase en una tarjeta ni añadir líneas bajo títulos o flechas. No agregar imágenes genéricas de cerebros, señales inventadas ni fotografías que aparenten ser del laboratorio.

### Español — /es/research

H1: **Investigación**

Título del proyecto:

**Decodificación de imaginación motora en lazo cerrado con una interfaz EEG–EMG de baja densidad**

Afiliación:

**Maestría en Ingeniería · Universidad de Antioquia**

Resumen:

> Mi investigación aborda la decodificación de imaginación motora del miembro superior mediante una interfaz cerebro-computador híbrida EEG–EMG. La propuesta combina EEG de ocho canales, control de contaminación muscular mediante EMG y retroalimentación visual adaptativa para evaluar la interacción entre el participante y el sistema en lazo cerrado.

H2: **Objetivo de investigación**

> Evaluar el desempeño de la decodificación en línea de imaginación motora con un montaje EEG de baja densidad, considerando la precisión de clasificación y la latencia durante la interacción con retroalimentación visual.

H2: **Sistema propuesto**

Tres elementos, con título y párrafo; presentarlos como una lista editorial, no como tres proyectos independientes:

**Decodificación EEG**

> El diseño contempla ocho canales EEG sobre regiones sensoriomotoras para procesar la actividad cerebral asociada a tareas de imaginación motora del miembro superior.

**Control de contaminación muscular**

> El EMG de antebrazo se plantea como una señal de control para detectar actividad muscular no intencionada y rechazar segmentos contaminados. No se utiliza como una entrada adicional del clasificador ni como un canal independiente de control.

**Retroalimentación visual adaptativa**

> La propuesta incorpora una respuesta visual vinculada a la salida del sistema durante la tarea. Esta interacción permite evaluar la decodificación en lazo cerrado, con el participante recibiendo retroalimentación mientras realiza el experimento.

H2: **Diseño experimental**

> El estudio contempla 15 participantes sanos, de 18 a 45 años, y dos sesiones en días separados. La primera se destina a la adquisición de señales, la calibración offline y la familiarización con la tarea. La segunda se orienta a la evaluación online en lazo cerrado con los mismos participantes.

> La calibración y la evaluación offline se plantean con los datos adquiridos en el estudio, no con bases de datos públicas.

H2: **Evaluación**

> La evaluación propuesta considera la precisión de clasificación, la latencia de respuesta y el rechazo de segmentos con contaminación muscular. El análisis distingue el desempeño offline del comportamiento del sistema durante la interacción en lazo cerrado.

### English — /en/research

H1: **Research**

Project title:

**Closed-loop motor imagery decoding with a low-density EEG–EMG interface**

Affiliation:

**Master’s in Engineering · Universidad de Antioquia**

Summary:

> My research addresses upper-limb motor imagery decoding through a hybrid EEG–EMG brain-computer interface. The proposed approach combines eight-channel EEG, EMG-based muscular contamination control, and adaptive visual feedback to evaluate closed-loop interaction between the participant and the system.

H2: **Research objective**

> To evaluate online motor imagery decoding with a low-density EEG setup, considering classification accuracy and latency during interaction with visual feedback.

H2: **Proposed system**

**EEG decoding**

> The design uses eight EEG channels over sensorimotor regions to process brain activity associated with upper-limb motor imagery tasks.

**Muscular contamination control**

> Forearm EMG is intended to detect unintended muscle activity and reject contaminated segments. It is not used as an additional classifier input or as an independent control channel.

**Adaptive visual feedback**

> The proposed system provides a visual response linked to its output during the task. This interaction enables closed-loop evaluation, with the participant receiving feedback throughout the experiment.

H2: **Experimental design**

> The study is designed for 15 healthy participants aged 18–45, with two sessions on separate days. The first session covers signal acquisition, offline calibration, and task familiarization. The second focuses on online closed-loop evaluation with the same participants.

> Calibration and offline evaluation are planned using data acquired in the study, rather than public datasets.

H2: **Evaluation**

> The proposed evaluation covers classification accuracy, response latency, and the rejection of segments affected by muscular contamination. The analysis distinguishes offline performance from system behavior during closed-loop interaction.

## 2. Portada, metadatos y coherencia

En la portada reemplazar el resumen de investigación por:

ES:

> Investigación de maestría en decodificación de imaginación motora con EEG de ocho canales, control de contaminación muscular mediante EMG y retroalimentación visual en lazo cerrado.

EN:

> Master’s research on motor imagery decoding with eight-channel EEG, EMG-based muscular contamination control, and closed-loop visual feedback.

Conservar el enlace Ver investigación / View research a la página completa. En Trayectoria conservar el enlace existente sin duplicar el artículo.

Título SEO ES: Investigación EEG–EMG · Manuel Quistial

Título SEO EN: EEG–EMG Research · Manuel Quistial

Descripción SEO ES: Investigación de maestría sobre imaginación motora, EEG de baja densidad, control de contaminación muscular y retroalimentación visual en lazo cerrado.

Descripción SEO EN: Master’s research on motor imagery, low-density EEG, muscular contamination control, and closed-loop visual feedback.

Aplicar también las descripciones a Open Graph donde corresponda. No cambiar canonical, hreflang ni URLs.

## 3. Restricciones científicas

- El título mostrado es un título editorial corto. No sustituye el título oficial de la tesis en documentos académicos.
- El antecedente que proponía datasets públicos quedó superado por la corrección metodológica del usuario. No recuperarlo de borradores antiguos.
- No equiparar procesamiento en tiempo real con interacción en lazo cerrado.
- No afirmar fusión EEG–EMG para clasificación: el papel de EMG aquí es el control de contaminación.
- No incorporar NEUROCO, rehabilitación cognitiva u otros trabajos como si fueran parte de esta tesis.
- No añadir resultados, métricas numéricas de rendimiento, algoritmos seleccionados, aprobaciones éticas, marcas de hardware ni publicaciones que no están definidos en este documento.
- El número de participantes describe el diseño previsto, no participantes reclutados o evaluados.
- No convertir estos límites en advertencias públicas. El uso de «propuesta», «contempla» y «evaluación propuesta» ya distingue el diseño de los resultados.
- R01 deja de bloquear el objetivo y diseño descritos aquí. Mantener como pendientes privados solamente el avance experimental actual, resultados medidos y materiales públicos disponibles. No afirmar que no existen resultados; simplemente no se suministran en esta edición.

## 4. Capturas reales de Sal & Picciotto

Los JPG incluidos son capturas de navegador de las páginas públicas, no mockups ni imágenes generadas. Cada una mide 1348 × 926 px. Muestran el área visible inicial; no son capturas de página completa. Las páginas pueden cambiar después de esta fecha.

| Proyecto | Archivo incluido | URL de origen |
| --- | --- | --- |
| Sal & Picciotto | `syp.jpg` | https://salypicciotto.com/ |
| Barrio Alto Panamá | `barrio.jpg` | https://barrioaltopanama.com/ |
| FCI PTY Box | `fci.jpg` | https://fcipty.com/box/ |
| Trapatsas Eye Center | Sin captura nueva | https://trapatsaseyecenter.com/ |
| Giving Tuesday Panamá | Sin captura nueva | https://givingtuesdaypanama.org/ |

Los dos últimos sitios mostraron una verificación de seguridad de Cloudflare en el navegador utilizado. No se incluyen capturas de esa verificación como si fueran imágenes del proyecto. No intentar eludirla. Conservar la imagen anterior si es una captura real válida; si no existe, conservar la tarjeta sin imagen ni placeholder.

### Implementación exacta de las imágenes

1. Copiar los tres archivos al directorio público de imágenes que ya utilice el repositorio. Si no existe una convención, usar `public/images/projects/`.
2. Renombrar así: `syp.jpg` a `sal-picciotto.jpg`; `barrio.jpg` a `barrio-alto-panama.jpg`; `fci.jpg` a `fci-box.jpg`.
3. Asociar por proyecto, no por orden del arreglo. Sal & Picciotto usa sal-picciotto; Barrio Alto usa barrio-alto; FCI usa fci-box.
4. Mostrar las capturas completas con proporción `1348 / 926`, `width: 100%`, `height: auto`. Si el componente impone un contenedor, utilizar `object-fit: contain`; no cortar el encabezado con `cover`.
5. Conservar colores y contenido de la captura. No aplicar filtros, máscaras, degradados, textos superpuestos, perspectiva, dispositivos ficticios ni ampliación al pasar el cursor.
6. Usar el componente de imagen existente. Declarar width=1348 y height=926 para reservar espacio. Usar carga diferida en las tarjetas que están debajo del primer bloque visible.
7. Servir las imágenes desde el proyecto. No usar hotlinks a archivos del cliente ni servicios externos de captura en cada visita.
8. La misma imagen se utiliza en ES y EN. El idioma visible dentro de la captura pertenece al sitio capturado; no editarlo ni traducir sus píxeles.
9. Conservar los enlaces externos actuales por proyecto. Para FCI, el origen correcto de esta captura es `/box/`, no la portada corporativa de otra sección.
10. Mantener el crédito de diseño de Sal & Picciotto separado de la contribución de desarrollo de Manuel. La captura no acredita autoría de todas las fotografías, marcas o funciones presentes en el sitio.

Alt exactos:

| Archivo final | ES | EN |
| --- | --- | --- |
| sal-picciotto.jpg | Página de inicio de Sal & Picciotto con una cuadrícula de proyectos de marca. | Sal & Picciotto homepage with a grid of branding projects. |
| barrio-alto-panama.jpg | Página de Barrio Alto con imagen de acceso al proyecto y formulario de contacto. | Barrio Alto page showing the property entrance and a contact form. |
| fci-box.jpg | Página de FCI Box con su navegación y la imagen principal del servicio. | FCI Box page showing its navigation and main service image. |

Las restricciones anteriores sobre flechas y textos se aplican a los componentes del portafolio. No alterar contenido de los sitios capturados para borrar palabras como «Caso de Estudio» o elementos de navegación dentro de la propia imagen.

### Descripción de FCI

La visita permite identificar el propósito de la página sin atribuir su funcionamiento completo a Manuel. Sustituir la instrucción anterior que dejaba esta ficha sin descripción por:

ES: **Página del servicio de casillero internacional FCI Box.**

EN: **Website for the FCI Box international package forwarding service.**

No afirmar que Manuel desarrolló la calculadora, el seguimiento de paquetes, el sistema de registro ni otras funciones observadas sin confirmar su contribución individual.

## 5. Validación y entrega

- Investigación tiene la totalidad de los textos ES y EN anteriores, con un H1 y jerarquía consistente.
- No hay metatexto editorial publicado, secciones duplicadas ni resultados inventados.
- La portada enlaza al artículo ampliado y no lo reproduce completo.
- Cada captura corresponde al proyecto correcto, carga localmente, conserva su proporción y tiene el alt definido.
- Trapatsas y Giving Tuesday no muestran capturas de error ni imágenes inventadas.
- Revisar a 375 px y 1440 px, y comprobar ausencia de desbordamiento a 320 px.
- Ejecutar los controles disponibles de build, tipos y lint. Informar lo que no pudo verificarse.
- Entregar archivos modificados, vista local y pendientes. No publicar automáticamente.
