# Uso de IA en el proyecto

Proyecto M1 - Daniel Gomez - Herramienta: Claude (Anthropic)

## Cómo la usé

Empecé sin saber programar, así que usé la IA como tutor y no para que hiciera el proyecto por mí:

- Le pedía que me explicara cada paso antes de escribir el código.
- Escribía el código a mano en VS Code y le enviaba lo que me salía para que lo revisara.
- Los errores los corregía yo, siguiendo sus pistas.
- Los mensajes de commit los elegía yo después de entender qué había cambiado.

Aquí no están todos mis mensajes, sino los que guiaron el trabajo. Las preguntas básicas, como qué es una etiqueta o una clase, las dejé fuera porque son contenido de clase.

## Cómo escribir un buen prompt

Al principio escribía mensajes largos o muy cortos, y la IA me respondía de más o tenía que preguntarme cosas. Aprendí que un prompt sirve mejor si tiene cuatro partes:

| Parte | Qué dice | Ejemplo |
| --- | --- | --- |
| Contexto | Quién soy y qué estoy haciendo | "Soy principiante, estoy haciendo un generador de paletas" |
| Tarea | Qué necesito, una sola cosa | "Revisa este código" |
| Límites | Qué no quiero | "No me des la solución, solo la pista" |
| Formato | Cómo quiero la respuesta | "En una lista corta" |

Un prompt así ahorra mensajes de ida y vuelta. Abajo muestro, para cada momento importante, el prompt que usé y cómo lo escribiría ahora.

## Momentos clave

### 1. Planificar el proyecto

**Lo que escribí:** compartí las capturas de la consigna y pedí un paso a paso con checklist, explicando el porqué de cada cosa.

**Cómo lo escribiría ahora:**

> Soy principiante en HTML, CSS y JavaScript. Te comparto la consigna de mi proyecto. Dame un plan por fases para hacerlo, con un checklist por fase y el tiempo aproximado de cada una. Explica en una línea por qué va cada paso. No escribas el código todavía.

**Qué obtuve:** un plan por fases (repositorio, HTML, CSS, JavaScript, publicación, documentación).

**Qué hice yo:** seguí el plan, pero fui haciendo cada fase paso a paso y pidiendo ayuda solo cuando me trababa.

### 2. Escribir mis propios commits

**Lo que escribí:**

> recuerda que estos commits van a revisar mis supervisores debo hacerlo por mi solo dame contextos y yo lo hago

**Cómo lo escribiría ahora:**

> Te muestro el resultado de `git diff`. Explícame qué cambió en una frase y dame dos o tres ideas de mensaje de commit. Yo elijo y escribo el final.

**Qué obtuve:** aprendí que el mensaje de un commit describe qué cambió, empieza con un verbo y va en una línea.

**Qué hice yo:** escribí y ejecuté todos los comandos de Git. Me equivoqué con espacios (`git add.`, `git commit-m`) y comillas sin cerrar, y lo corregí leyendo lo que respondía la terminal.

### 3. Entender qué cambié en cada commit

**Lo que escribí:**

> quiero aprender realmente a identificar como saber de que lineas habla

**Cómo lo escribiría ahora:**

> Explícame cómo leer la salida de `git diff` usando este ejemplo mío. Qué significan los símbolos `@@`, `+` y `-`.

**Qué obtuve:** aprendí a leer `git diff` y `git show --stat`.

**Qué hice yo:** con `git show --stat` vi que mi commit de idioma tenía 5 líneas cambiadas y no 6, y descubrí solo que me faltaba corregir el pie de página.

### 4. Encontrar errores en mi código

**Lo que escribí:** pegaba el error de la consola, por ejemplo `randomNumber is not defined`, y después mi archivo completo.

**Cómo lo escribiría ahora:**

> Mi función `randomNumber` da este error en la consola: `[error]`. Este es mi archivo: `[código]`. Dime en qué línea está el problema, pero no me lo corrijas, quiero arreglarlo yo.

**Qué obtuve:** pistas para encontrar el error y una forma de buscarlo solo: mirar si hay un error en rojo antes del que estoy viendo.

**Qué hice yo:** corregí estos errores, entre otros:

| Error mío | Lo que pasaba |
| --- | --- |
| `funtion` en vez de `function` | Ninguna función existía |
| `0x16777215` en vez de `16777215` | Salían códigos HEX de 7 caracteres |
| Un `#` de más en la función de HSL | Salía `##FF#00#00` |
| `color-swatch` en el HTML y `.swatch` en el CSS | El color no aparecía |
| `"Paleta de"` sin espacio | El aviso decía "Paleta de9" |

### 5. Comprobar el código que me dio la IA

**Lo que escribí:** pedí cómo convertir un color HSL a HEX, porque la consigna pide mostrar siempre el código HEX.

**Cómo lo escribiría ahora:**

> Necesito una función de JavaScript que convierta HSL a HEX. Explícame qué entra y qué sale, y dame valores para probarla en la consola.

**Qué obtuve:** la función `hslToHex` completa. Es una fórmula matemática que no escribí yo.

**Qué hice yo:** la probé en la consola con colores que ya conocía:

| Prueba | Resultado esperado |
| --- | --- |
| `hslToHex(0, 100, 50)` | `#FF0000`, rojo |
| `hslToHex(120, 100, 50)` | `#00FF00`, verde |
| `hslToHex(240, 100, 50)` | `#0000FF`, azul |
| `hslToHex(0, 0, 100)` | `#FFFFFF`, blanco |

### 6. Revisar el proyecto con la rúbrica

**Lo que escribí:** compartí la rúbrica y pregunté cómo la vería un evaluador.

**Cómo lo escribiría ahora:**

> Esta es la rúbrica de mi proyecto. Compárala con lo que tengo y dime, por cada fila, si estoy en Excelente, Satisfactorio o Insuficiente, y qué me falta. En una tabla.

**Qué obtuve:** una lista de lo pendiente, como agregar la sección de mejoras al README.

**Qué hice yo:** prioricé lo obligatorio y entregué antes del cierre.

## Lo que hizo la IA y lo que hice yo

| La IA | Yo |
| --- | --- |
| Explicó cada concepto y cada línea de código | Escribí el código a mano |
| Me dio la fórmula de `hslToHex` y de número aleatorio | Las probé con valores conocidos |
| Señaló errores y dio pistas | Encontré y corregí los errores |
| Propuso opciones de mensajes de commit | Elegí y ejecuté cada commit |
| Hizo un primer borrador del README y de este registro | Respondí preguntas sobre mi experiencia y lo revisé para que diga lo que pasó |

## Capturas

En `docs/ia/capturas/`:

- `github-commit-inicial.png`: aprendiendo a leer un commit en GitHub.
- `github-primer-commit-propio.png`: mi primer commit en el repositorio.
