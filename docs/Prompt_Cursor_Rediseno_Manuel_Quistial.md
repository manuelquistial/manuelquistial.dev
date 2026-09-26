# Prompt completo para rediseñar manuelquistial.dev con Cursor

Fecha: 25 de septiembre de 2026

Este documento contiene la preparación de imágenes y el prompt de implementación. Añade este archivo al repositorio y pide a Cursor que ejecute la sección «Prompt para Cursor» completa. Las referencias externas orientan el diseño; las imágenes publicadas en el portafolio deben mostrar el trabajo real de Manuel.

## Preparación de las imágenes

### Referencias de diseño que debes descargar

Guarda las imágenes de inspiración en `design-references/`, fuera de `public/`. Así Cursor puede inspeccionarlas sin publicarlas como si fueran proyectos propios. Si la descarga tiene otra extensión, conserva su formato real y ajusta el nombre indicado.

| Archivo propuesto | Fuente y descarga | Para qué sirve |
| --- | --- | --- |
| `01-satz-editorial.webp` | [Página de Satz](https://www.framer.com/marketplace/templates/satz/) · [Abrir imagen](https://www.framer.com/creators-assets/_next/image/?q=100&url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F62068%2Fsatz-5gKYdCwLh0ky34IhhGZVY2faBFptE4&w=3840) | Referencia principal para retícula, jerarquía tipográfica, composición editorial y relación entre presentación y proyectos. |
| `02-hawley-tipografia.jpg` | [Fuente de Squarespace](https://www.squarespace.com/blog/how-to-create-a-marketing-portfolio) · [Abrir imagen](https://images.squarespace-cdn.com/content/5134cbefe4b0c6fb04df8065/ab9e22af-a721-4ba0-ab82-fc69bdc7a714/Article%2B1%2B-%2BImage%2B3%2B%281%29.jpg?content-type=image%2Fjpeg&format=1000w) | Referencia secundaria para simplicidad y protagonismo del nombre de cada proyecto. No copiar la tipografía serif ni su paleta. |
| `03-pinterest-composicion.jpg` | [Abrir pin de Pinterest](https://es.pinterest.com/pin/minimal-portfolio-website-template-en-2024--748723506844020336/) | Referencia complementaria para espacios y agrupación de imágenes. Descargar desde Pinterest si permite hacerlo; no es un requisito para comenzar. |

Abre «Abrir imagen», guarda el archivo original y colócalo con el nombre indicado. Para Pinterest, guarda la imagen del pin, no una captura que incluya el aviso de inicio de sesión. El pin se pudo inspeccionar solo parcialmente por ese aviso. Si no está disponible, las dos primeras referencias son suficientes. No comprar, instalar ni importar ninguna plantilla: se mantendrá el proyecto existente.

Las referencias pueden contener flechas, líneas, colores o elementos que no se usarán. Las reglas del prompt prevalecen sobre las imágenes. Estas referencias no conceden derechos para republicar sus fotografías, identidades o recursos dentro del portafolio.

### Imágenes reales para publicar

Cursor debe revisar primero las imágenes que ya existan en el repositorio. Los nombres siguientes son convenciones propuestas, no archivos que ya estén disponibles.

| Archivo propuesto | Qué preparar | Uso |
| --- | --- | --- |
| `babelscores-reader.webp` | Captura real del lector de partituras y sus controles, con material cuya publicación esté autorizada. | Imagen destacada de Babel Scores en portada. |
| `babelscores-reader-detail.webp` | Captura de una función relevante que Manuel haya implementado. | Detalle del proyecto. |
| `udea-app.webp` | Captura autorizada y anonimizada de una aplicación institucional. | Imagen del proyecto UdeA. |
| `udea-architecture.svg` | Diagrama propio, basado en arquitectura verificada. | Alternativa a la captura cuando no pueda mostrarse la interfaz. No inventar relaciones. |
| `sal-picciotto-web.webp` | Captura del sitio o de una implementación identificada. | Selección web. |
| `trapatsas-web.webp` | Captura real, si el proyecto sigue incluido. | Página de proyectos web. |
| `giving-tuesday-web.webp` | Captura real, si el proyecto sigue incluido. | Página de proyectos web. |
| `manuel-portrait.webp` | Retrato real de Manuel, preferentemente vertical. | Página de Trayectoria. |
| `research-setup.webp` | Fotografía propia y autorizada del trabajo de investigación. | Investigación. |

Para capturas de sitios públicos, la página completa no demuestra qué partes desarrolló Manuel. El texto debe identificar siempre su contribución. No publicar datos personales de usuarios, interfaces restringidas, credenciales ni resultados de investigación no autorizados.

Ubicación propuesta: `public/images/projects/`, `public/images/profile/` y `public/images/research/`, adaptada al mecanismo de assets del repositorio. Las referencias de inspiración permanecen fuera del contenido público.

---

## Prompt para Cursor

Actúa como desarrollador frontend senior con criterio de diseño UI/UX y edición de contenido. Implementa el rediseño integral del sitio personal de Manuel Quistial en este repositorio. El dominio de referencia es https://www.manuelquistial.dev.

Debes modificar el proyecto, no limitarte a describir una propuesta. Trabaja hasta dejar una versión local o de desarrollo revisable, con cambios de contenido, composición, estilos, componentes, navegación y adaptación móvil. No publiques en producción ni hagas push sin una instrucción explícita para ello.

### 1. Inspección inicial y alcance

1. Lee las instrucciones aplicables del repositorio, incluido `AGENTS.md` si existe.
2. Inspecciona el estado de Git y conserva los cambios previos del usuario. No uses comandos destructivos ni reemplaces el proyecto con una plantilla.
3. Identifica framework, gestor de paquetes, rutas, internacionalización, estilos, componentes, fuentes, imágenes, SEO, contenido y pruebas existentes. Aunque el sitio publicado indicaba Next.js, TypeScript y Tailwind, el repositorio es la autoridad sobre su implementación actual.
4. Revisa todas las rutas públicas existentes en español e inglés: portada, proyectos, detalles, trayectoria o about, investigación y contacto. Incluye estados vacíos y 404 si existen.
5. Inspecciona visualmente los archivos de `design-references/`. Identifica qué reglas tomarás de cada uno. Si no puedes ver imágenes, indícalo y aplica las especificaciones textuales; no afirmes haberlas inspeccionado.
6. Revisa los assets existentes antes de solicitar o crear otros.
7. Haz un inventario breve de componentes, contenido repetido y tareas; luego implementa. No detengas el trabajo para preguntar por decisiones ya definidas aquí.
8. Conserva integraciones, enlaces válidos, archivos de CV y funcionalidad ajena al rediseño. No añadas backend, CMS, formulario, nuevas dependencias importantes ni una nueva plataforma de hosting para resolver un cambio visual.

Si falta un dato verificable, no lo inventes. Completa el trabajo independiente y registra la dependencia al final. Distingue errores preexistentes de errores introducidos por el cambio.

### 2. Objetivo del sitio

La página debe ayudar a reclutadores, clientes y colaboradores a comprender qué hace Manuel, qué ha desarrollado, cuál fue su participación y cómo contactarlo.

El posicionamiento principal es ingeniería de software, aplicaciones web, integración de sistemas y modernización de plataformas. La investigación en neuroingeniería se presenta como una línea específica. No describas todos los proyectos de software como derivados del procesamiento de datos neuronales.

La experiencia profesional se demuestra mediante proyectos y responsabilidades concretas. Evita adjetivos de autopromoción sin respaldo. No inventes años de experiencia, métricas, certificaciones, clientes, premios, testimonios ni resultados. No atribuyas trabajo de un equipo o agencia íntegramente a Manuel.

### 3. Dirección visual obligatoria

Construye un portafolio editorial claro y cálido, con tipografía protagonista, retícula consistente, imágenes reales y espacio suficiente para leer.

El cambio debe ser visible en la composición: elimina el panel lateral de Enfoque, reduce la presentación, acerca los proyectos al inicio, reemplaza los bloques de código decorativo y disminuye las tarjetas y etiquetas. Cambiar solo colores y fuentes no cumple el encargo.

Restricciones:

- Sin flechas decorativas en navegación, enlaces, botones, tarjetas o títulos.
- Sin líneas decorativas debajo de títulos, incluidas las generadas por pseudoelementos.
- Sin emojis.
- Sin etiquetas Live, Publicado, In progress, En progreso, Coming soon ni equivalentes.
- Sin botones View demo, Live Demo, Demo en vivo, Case Study, Estudio de caso o equivalentes repetidos.
- Sin código ficticio, terminales de adorno, cuadrículas tecnológicas, cerebros genéricos, partículas o imágenes de stock de personas programando.
- Sin gradientes, resplandores, cursor personalizado, carruseles automáticos ni scroll controlado artificialmente.
- Sin animaciones de escritura en el título, parallax ni transiciones que oculten o retrasen el contenido.
- No conviertas todas las secciones en tarjetas con bordes y sombras.
- No añadas un blog vacío, servicios genéricos, logos de clientes no verificados ni una sección de testimonios inventados.

Se permiten indicadores funcionales imprescindibles, como los de un selector existente, cuando ayuden a operar el control; no introducir iconos de flecha como decoración. El foco accesible y las señales de enlaces deben seguir siendo visibles.

### 4. Cómo interpretar las imágenes de referencia

Usa `01-satz-editorial` como referencia principal: toma jerarquía de tamaños, alineación, retícula, proporciones y protagonismo de proyectos. No copies textos, fotografías, marcas, premios ni secciones que no correspondan a Manuel.

Usa `02-hawley-tipografia` solo para estudiar reducción de ruido visual y protagonismo de nombres. No adoptes la tipografía serif, el fondo rosado ni una portada formada únicamente por nombres sin explicación.

Usa `03-pinterest-composicion` como referencia complementaria de espacio y agrupación, si está disponible. No es obligatoria.

No mezcles literalmente los tres diseños. El sistema de color, tipografía, navegación y componentes definido en este prompt es la autoridad. Ninguna referencia externa debe aparecer dentro del portafolio como imagen de un proyecto de Manuel.

### 5. Sistema de diseño centralizado

Define tokens mediante el mecanismo existente del proyecto: variables CSS, configuración del sistema de estilos o equivalente. Evita valores independientes repetidos en cada componente.

#### Colores

| Token conceptual | Valor | Uso |
| --- | --- | --- |
| Fondo | `#F7F5F0` | Fondo general |
| Superficie | `#FFFFFF` | Soporte de imágenes o elementos que lo requieran |
| Texto principal | `#20201E` | Títulos y párrafos |
| Texto secundario | `#5F5C56` | Fechas y contexto |
| Acento | `#9E3B2D` | Acción principal y enlaces destacados |
| Acento hover | `#7F2F24` | Interacción |
| Fondo suave | `#EEE9E1` | Agrupaciones puntuales |
| Borde decorativo | `#D8D2C8` | Separación no esencial |

El acento debe ser selectivo. No colorees todos los títulos. Usa blanco en el botón terracota. Los pares blanco/terracota y carbón/marfil tienen contraste aproximado de 6,74:1 y 14,98:1 respectivamente; verifica también los demás pares y estados. El borde suave no sirve como único identificador de controles. Define un foco de alto contraste, separado del elemento por un pequeño espacio.

Usa esta dirección clara como presentación predeterminada. Si hay un modo oscuro funcional, conserva su comportamiento sin romperlo y aplica los mismos principios de jerarquía; no añadas un sistema de temas si no existe.

#### Tipografía

Familia principal: Manrope. Cárgala con el mecanismo optimizado existente y evita solicitudes innecesarias. Si no puede descargarse durante el desarrollo, usa un fallback sans-serif y registra la dependencia.

| Elemento | Escritorio | Móvil | Peso | Interlineado |
| --- | --- | --- | --- | --- |
| H1 | 60 px | 38 px | 600 | 1,1 |
| H2 | 36 px | 28 px | 600 | 1,2 |
| H3 | 28 px | 24 px | 600 | 1,25 |
| Introducción | 20 px | 18 px | 400 | 1,5 |
| Texto | 18 px | 16 px | 400 | 1,55 |
| Navegación y botones | 16 px | 16 px | 500 o 600 | 1,4 |
| Fechas y pies | 14 px | 14 px | 400 | 1,5 |

Implementa tamaños fluidos con límites relativos apropiados para zoom y accesibilidad. El cuerpo de texto tendrá un máximo aproximado de 65ch. No uses párrafos en mayúsculas ni monoespaciadas para etiquetas, ubicación o tecnologías. Reserva una monoespaciada para código real en un detalle que lo justifique.

#### Retícula y espacios

- Contenedor máximo: 1200 px.
- Márgenes mínimos: 20 px móvil, 32 px tableta y 48 px escritorio.
- Escala de espacios: 4, 8, 12, 16, 24, 32, 48, 64 y 96 px.
- Separación entre secciones: 96 px escritorio y 56 px móvil, ajustable cuando la densidad lo justifique.
- Separación título-contenido: 24 a 32 px.
- Columnas: 32 px de separación en escritorio y 24 px en tableta.
- Radio de botones: 6 px. Radio de imágenes: 8 px.
- No usar alturas fijas para contenedores de texto ni cortar párrafos para igualar tarjetas.
- No forzar una portada de 100vh. En una pantalla de escritorio habitual debe empezar a percibirse el bloque de proyectos.

### 6. Arquitectura y rutas

Navegación: nombre enlazado al inicio, Proyectos, Trayectoria, Investigación y Contacto. Selector ES/EN separado y accesible. No es necesario un enlace Inicio adicional.

Conserva las rutas actuales cuando sea posible. El rótulo Trayectoria puede apuntar a `/about`; no cambies URLs solo para cambiar el nombre visible. Si alguna ruta cambia por necesidad, configura redirecciones y actualiza enlaces, sitemap y metadatos. Mantén la página equivalente al cambiar de idioma.

Orden de portada:

1. Presentación.
2. Proyectos seleccionados.
3. Trayectoria resumida.
4. Investigación.
5. Contacto.
6. Pie mínimo.

Elimina de la portada el panel Enfoque, el bloque Sobre mí redundante, la nube extensa de habilidades y la repetición completa del historial laboral. Integra la selección web en Proyectos; no vuelvas a desplegar otra sección extensa con la misma información.

### 7. Redacción de la portada

Utiliza la siguiente base editorial cuando sea consistente con el contenido verificado del repositorio. No agregues afirmaciones nuevas para hacerla parecer más impresionante.

Nombre visible: Manuel Quistial.

Título ES: «Ingeniería de software para aplicaciones web y sistemas conectados».

Introducción ES: «Soy Manuel Quistial. Desarrollo aplicaciones web, integro sistemas y modernizo plataformas. Mi experiencia incluye productos digitales, software institucional y desarrollo web para clientes.»

Título EN: «Software engineering for web applications and connected systems».

Introducción EN: «I'm Manuel Quistial. I build web applications, integrate systems, and modernize platforms. My experience spans digital products, institutional software, and client websites.»

Acción principal: «Ver proyectos» / «View projects». Debe llevar al bloque de proyectos de la portada. Acción secundaria: «Contactar» / «Contact», hacia contacto. No añadas más acciones dentro del hero.

Estos textos no tienen que forzarse a una cantidad fija de líneas. Ajusta anchura y escala para lectura natural en ambos idiomas. No uses saltos de línea manuales que rompan otras pantallas.

Límites editoriales orientativos: presentación de hasta 60 palabras, descripción de proyecto de 30 a 50, investigación en portada de 60 a 90 y contacto de una frase más los medios disponibles. No rellenes para llegar al límite.

### 8. Proyectos seleccionados

Babel Scores será el proyecto destacado a ancho completo, con una captura real amplia. UdeA y la selección web con Sal & Picciotto comparten la siguiente fila en escritorio. En móvil todos pasan a una columna. Si no hay material visual suficiente, usa una composición tipográfica bien resuelta sin cajas vacías.

Cada elemento muestra imagen, título enlazado, descripción breve y contribución. No agregues badge de estado, lista extensa de tecnologías ni dos botones de acceso. El enlace principal abre el detalle local. No anides enlaces en tarjetas clicables.

Base de texto ES, sujeta a verificación del alcance en el contenido disponible:

- Babel Scores: «Plataforma de venta y lectura de partituras digitales. Mi trabajo incluye el lector web, funcionalidades de comercio electrónico e integraciones para el acceso institucional.»
- UdeA: «Aplicaciones institucionales para la Universidad de Antioquia. Trabajo en la modernización de sistemas, la generación de reportes y la integración del acceso entre aplicaciones.»
- Sal & Picciotto: «Desarrollo e implementación de sitios web en colaboración con Sal & Picciotto, con trabajo en interfaces adaptables, gestión de contenido y funcionalidades específicas de cada proyecto.»

No conviertas estos resúmenes en una atribución del diseño visual de la agencia a Manuel. La facultad o unidad de UdeA puede figurar como contexto debajo del título, sin un encabezado excesivamente largo.

Mantén una sola acción «Todos los proyectos» / «All projects» al final si hay más trabajos. No repitas «Ver todo» en cada bloque.

### 9. Página de proyectos y detalles

Organiza el listado en proyectos de software y selección de desarrollo web. Con pocos elementos, no agregues filtros, buscador ni paginación innecesarios. Todos los proyectos existentes con información útil deben seguir siendo accesibles.

En cada detalle, muestra:

1. Nombre, propósito y contexto en una introducción corta.
2. Rol de Manuel, colaboración y periodo, cuando estén verificados.
3. Necesidad que atendía el proyecto.
4. Trabajo realizado por Manuel.
5. Capturas y explicación de lo que demuestran.
6. Decisiones técnicas relevantes, con tecnología y motivo.
7. Resultado comprobable, funcionalidad entregada o alcance disponible.
8. Dominio del producto o repositorio, solo cuando exista y sea público.

No titules las páginas Case Study ni uses ese término en sus metadatos. Usa el nombre del proyecto. Un sitio en producción no debe presentarse como una demo. El enlace externo puede mostrar el dominio, por ejemplo `babelscores.com`, dentro del detalle.

Evita párrafos largos de inventario tecnológico. Relaciona cada herramienta con una responsabilidad o decisión. Si no hay métricas, explica lo implementado sin inventarlas.

### 10. Trayectoria

En portada muestra un resumen compacto con organización, función y periodo verificado. Separa empleos y colaboraciones por proyecto cuando sea necesario para comprender fechas simultáneas.

En la página de Trayectoria incluye biografía breve, experiencia completa, formación, competencias agrupadas y CV existente. Explica una o dos contribuciones diferenciadoras por experiencia. No repitas las descripciones completas de los proyectos.

No dupliques «Actual» cuando la fecha ya diga «presente». Traduce fechas, ubicación y términos de forma consistente. No copies May, Present y Remote dentro de una página en español.

Incluye el retrato real si está disponible. Si no lo está, resuelve la composición sin un avatar genérico ni imagen generada.

### 11. Investigación

Da una presencia propia a la investigación y evita que desplace los proyectos profesionales como primera acción de la portada.

Texto breve provisional y deliberadamente general para la portada: «Mi investigación de maestría se centra en interfaces cerebro-computador e imaginación motora. Esta línea reúne procesamiento de señales y desarrollo de software para estudiar la interacción entre una persona y un sistema.» Ajusta solo con información vigente y verificable.

La página actual revisada hablaba de mano izquierda/derecha, datasets y evaluación entre sujetos. No des por hecho que esos detalles siguen describiendo el proyecto. Contrasta con documentación vigente disponible en el repositorio o proporcionada por Manuel. No uses el texto anterior como prueba de actualidad ni sustituyas el alcance por una conjetura.

Estructura del detalle: pregunta, propósito, metodología vigente, trabajo desarrollado y resultados o materiales realmente disponibles. Distingue objetivos de hallazgos. No equipares tiempo real y lazo cerrado. No prometas efectos clínicos ni presentes evaluación experimental como eficacia terapéutica.

Si falta documentación actual, utiliza el resumen general, omite los detalles no confirmados y registra la revisión pendiente. No muestres avisos internos ni placeholders al visitante. Las publicaciones, repositorios y resultados se incluyen únicamente si existen.

### 12. Contacto y pie

Contacto debe mostrar un correo existente y verificado, LinkedIn, GitHub y CV. La versión revisada mostraba `manuel.quistialj@gmail.com`; confírmalo en la configuración actual antes de usarlo.

Texto orientativo: «Si quieres hablar sobre una oportunidad de trabajo, un proyecto de software o una colaboración de investigación, puedes escribirme.» En inglés, redacta una versión natural con el mismo significado.

El correo debe ser visible y tener un enlace `mailto:`. Si implementas copiar correo, proporciona confirmación accesible. No añadas formularios, promesas de tiempo de respuesta ni disponibilidad laboral específica sin respaldo.

Pie mínimo: nombre, copyright y enlaces útiles. Retira «Construido con Next.js, TypeScript y Tailwind». No repitas una biografía ni todos los CTA del hero.

### 13. Tratamiento de imágenes reales

- Revisa nombres, dimensiones, formato y contenido de cada archivo; no selecciones imágenes únicamente por el nombre.
- Usa las referencias de diseño solo durante el desarrollo. No las importes en componentes públicos.
- Las capturas deben mostrar funcionalidades identificables, con proporción natural y sin deformación.
- Usa 16:10 como marco orientativo de las miniaturas. Si un recorte elimina información relevante, usa `contain`, cambia la composición o prepara otro recorte autorizado.
- No incrustes interfaces en marcos de dispositivos múltiples ni reduzcas capturas hasta que el producto sea ilegible.
- Permite ver una imagen ampliada cuando el detalle lo requiera. Si hay modal, debe gestionar foco, Escape y retorno al control de origen.
- Mantén colores originales de productos. No apliques tintes terracota ni filtros de marca sobre su interfaz.
- Utiliza `width`, `height`, variantes responsive y `sizes` adecuados. Carga diferida fuera de la primera pantalla; no retrases la imagen que sea el contenido principal visible.
- Escribe alt útil para imágenes informativas y alt vacío para decoración. No repitas automáticamente el nombre del archivo.
- Un diagrama debe basarse en información técnica confirmada. No dibujes una arquitectura ficticia para llenar espacio.
- Si falta una captura, omite la zona visual y mantén una composición editorial terminada. Registra el archivo necesario y su uso en el informe, sin detener los cambios restantes.
- No publiques mensajes «imagen pendiente», rectángulos grises ni recursos rotos.

### 14. Componentes e interacción

Reutiliza componentes compartidos para contenedor, encabezados, enlaces, botones, proyecto, entrada de experiencia y contacto. Adapta los nombres a las convenciones del repositorio.

Botón principal: fondo terracota, texto blanco, altura mínima 48 px, radio 6 px y padding horizontal suficiente. Acción secundaria: jerarquía discreta. No usar botones con flechas.

Navegación móvil: botón «Menú» / «Menu», `aria-expanded`, identificación del panel, cierre claro, Escape cuando corresponda y gestión del foco. Evita que una cabecera fija oculte destinos de anclas.

Enlaces: nombre que anticipe el destino, foco visible, hover reconocible. No dependen únicamente de iconos. Las prohibiciones de líneas bajo títulos no eliminan la necesidad de distinguir enlaces en párrafos: utiliza un tratamiento accesible.

Transiciones: 150 a 200 ms para estados simples. Respeta `prefers-reduced-motion`. No dependas de hover para mostrar información esencial y no uses efectos de entrada que dejen contenido invisible si falla JavaScript.

### 15. Idiomas y mantenimiento de contenido

Implementa todas las modificaciones en español e inglés. Traduce navegación, microcopy, alt, metadatos, fechas y errores visibles. Conserva nombres propios y términos técnicos cuando ayuden a entender el contenido.

Evita traducciones literales como «superficies Angular» o «marketplace vivo». Usa «interfaces desarrolladas con Angular», «plataforma en producción» o una descripción concreta, según corresponda.

Una fuente de contenido debe alimentar portada y detalle cuando sea viable. Un resumen y una explicación extensa cumplen funciones diferentes; no renderices ambos consecutivamente dentro de la tarjeta. Adapta el modelo de datos existente sin reconstruir todo el sistema.

### 16. Responsive y accesibilidad

Comprueba 320, 375, 768, 1024 y 1440 px. También verifica al menos una anchura intermedia donde cambien las columnas. No debe haber desplazamiento horizontal involuntario, texto cortado ni controles solapados.

En móvil: una columna, orden semántico coherente, imágenes fluidas, botones que envuelven o se apilan sin cortarse y menú operable. No reduzcas el texto esencial para hacer caber la composición de escritorio.

Usa HTML semántico, un H1 por página, jerarquía de encabezados coherente, enlace para saltar al contenido, foco visible y navegación por teclado. Comprueba zoom de 200 % y reflujo a un ancho equivalente a 320 px. Los estados no dependen solo del color.

Objetivo de interacción del proyecto: áreas de al menos 44 × 44 px cuando sea razonable; botones principales de 48 px de alto. No presentes 44 px como el mínimo universal de WCAG 2.2 AA, cuyo criterio de tamaño mínimo contempla 24 px y excepciones.

### 17. SEO y rendimiento

Conserva o mejora títulos y descripciones únicos, canonical, enlaces entre idiomas, sitemap y robots. No cambies contenido indexable por animaciones o imágenes de texto.

Ejemplos de títulos: «Manuel Quistial | Ingeniería de software», «Proyectos | Manuel Quistial» y «Babel Scores | Manuel Quistial». Traduce según idioma. No uses una descripción idéntica en todas las páginas.

Usa Open Graph existente válido o prepara una imagen social tipográfica propia con nombre y especialidad. No uses una referencia externa como imagen social. Los datos estructurados deben contener solo información comprobada.

Evita dependencias pesadas para efectos simples. Optimiza fuentes e imágenes, conserva dimensiones de assets y previene cambios de layout. No alteres integraciones de analítica ajenas al rediseño. Si ya hay analítica, diferencia clic de contacto, descarga del CV y apertura de proyecto; un clic en correo no equivale a un mensaje enviado. No instales seguimiento nuevo como parte implícita de esta tarea.

### 18. Orden de ejecución

1. Inspeccionar repositorio, rutas, contenido y assets.
2. Corregir posicionamiento y eliminar duplicados.
3. Definir tokens y componentes compartidos.
4. Rediseñar portada con imágenes disponibles.
5. Aplicar el sistema a listado y detalles de proyectos.
6. Actualizar Trayectoria, Investigación y Contacto.
7. Completar ambos idiomas y preservar rutas.
8. Revisar responsive, accesibilidad, SEO y rendimiento.
9. Ejecutar los controles del repositorio y revisar visualmente.
10. Entregar el resumen de cambios y pendientes reales.

No detenerse tras terminar únicamente el hero. No declarar una página completa mientras existan componentes antiguos contradictorios en otras rutas.

### 19. Validación y aceptación

Ejecuta lint, comprobación de tipos, build y pruebas relevantes disponibles. No inventes resultados ni instales una infraestructura de pruebas desproporcionada. Si una comprobación no puede ejecutarse, indica el motivo exacto.

Revisa visualmente portada, listado, un detalle representativo, Trayectoria, Investigación y Contacto en escritorio y móvil, en ambos idiomas. Si tienes herramientas de navegador, conserva capturas de la versión implementada. Si no puedes hacer inspección visual, no la reportes como realizada.

Criterios obligatorios:

- [ ] La portada comunica software sin afirmar que todos los proyectos derivan de datos neuronales.
- [ ] Los proyectos aparecen inmediatamente después de la presentación.
- [ ] No hay panel Enfoque ni bloque Sobre mí redundante en portada.
- [ ] No hay párrafos duplicados dentro de una tarjeta.
- [ ] No aparecen etiquetas Live, In progress, Coming soon o equivalentes como estados decorativos.
- [ ] No hay botones View demo o Case Study y equivalentes.
- [ ] No existen flechas decorativas ni líneas bajo títulos.
- [ ] Las referencias de diseño no se publican como proyectos propios.
- [ ] Cada imagen publicada corresponde a su contexto y no contiene datos sensibles.
- [ ] Cada proyecto distingue la contribución de Manuel de la del equipo.
- [ ] Falta de imágenes resuelta sin placeholders visibles ni archivos rotos.
- [ ] Paleta, tipografía, tamaños y espacios son coherentes en todas las rutas.
- [ ] ES y EN tienen contenido y navegación completos.
- [ ] No se pierde el contexto al cambiar de idioma.
- [ ] Menú, foco, enlaces y contacto funcionan con teclado.
- [ ] No hay desbordamiento horizontal en las anchuras verificadas.
- [ ] CV y enlaces externos existentes siguen funcionando.
- [ ] SEO y rutas están preservados o redirigidos correctamente.
- [ ] No se inventaron métricas, responsabilidades ni resultados de investigación.
- [ ] Las comprobaciones ejecutadas y sus límites están documentados.

### 20. Entrega de Cursor

Al terminar, proporciona:

1. Resumen concreto de cambios en comunicación, estructura y diseño.
2. Archivos o componentes principales modificados.
3. Rutas e idiomas revisados.
4. Imágenes utilizadas, su función y archivos reales que todavía faltan.
5. Verificaciones ejecutadas y resultado, separando fallos preexistentes.
6. Instrucciones para abrir la versión local o de desarrollo.
7. Datos editoriales que requieren confirmación, sin ocultarlos detrás de afirmaciones inventadas.

No afirmes que el sitio fue publicado. Finaliza con una implementación revisable y conserva el trabajo previo del usuario.

---

## Fuentes del estándar y referencias

- Sitio revisado: https://www.manuelquistial.dev
- Satz, Aathif Thajudeen: https://www.framer.com/marketplace/templates/satz/
- Hawley, referencia publicada por Squarespace: https://www.squarespace.com/blog/how-to-create-a-marketing-portfolio
- Pinterest, referencia complementaria: https://es.pinterest.com/pin/minimal-portfolio-website-template-en-2024--748723506844020336/
- Manrope: https://fonts.google.com/specimen/Manrope
- Nielsen Norman Group, lectura por encabezados: https://www.nngroup.com/articles/layer-cake-pattern-scanning/
- Nielsen Norman Group, claridad de destinos de navegación: https://www.nngroup.com/articles/information-scent/
- W3C, contraste mínimo: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- W3C, tamaño mínimo de objetivos: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

Los tamaños, colores y estructura propuestos son decisiones específicas para este rediseño. Las referencias de usabilidad respaldan principios de legibilidad y navegación, no garantizan conversiones ni resultados comerciales.
