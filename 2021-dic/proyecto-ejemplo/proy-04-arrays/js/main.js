/**
 * Descripción general del proyecto - Calculadora de Presupuestos 
 * ESTADO: Esta implementación incluye el uso de objetos y clases mendiante Módulos
 * 
 * Notas sobre el uso de MÓDULOS:
 * ==============================
 *      - De manera breve podemos decir que los módulos son una forma sencilla de separar 
 *        la aplicación en "pequeñas piezas".
 *      - Para esto se utilizan las palabras reservadas "export" e "import" (también para
 *        el uso de módulos se utilizan las palabras "from" y "default" como se verá
 *        más adelante).
 *        De esta forma cuando se declara (por ej.) una función en un archivo, con la 
 *        palabra "export" delante de la función, permitirá que desde otro archivo se 
 *        pueda utilizar "import" para "cargar" la función.
 *      - "export" e "import" funcionan con variables (const, let), funciones, clases, etc.
 *      - es necesario que el <script> (en el .html) tenga la propiedad type="module"
 * 
 * Permitirá al usuario ingresar tres datos:
 *    - cantidad de horas de desarrollo estimada para todo el proyecto
 *    - valor ($) de la hora de desarrollo
 *    - valor ($) de la hora de gestión del proyecto
 * A partir de esto y según ciertos parámetros definidos se mostrará en pantalla:
 *    - Tiempos:
 *      - Horas totales de desarrollo, testing y gestión del proyecto
 *      - Cantidad de días del proyecto
 *    - Costos:
 *      - Costo de desarrollo y gestión
 *      - Impuestos y otros aportes
 *      - Costo final del proyecto
 * 
 * Para la implementación con Objetos/Clases, se consideraron:
 *  1. Qué objetos literales pueden ser útiles a la aplicación.
 *  2. Qué funciones se pueden crear u optimizar al usar objetos (literales o Clases)
 *  3. De qué manera los datos en la aplicación se relacionan y
 *      cómo o bajo qué classes se pueden agrupar.
 *  4. De qué manera las funciones en la aplicación se relacionan y
 *      cómo o bajo qué classes se pueden agrupar.
 *  5. Qué dependencias existen entre variables y funciones 
 *      a lo largo de la aplicación.
 * 
 * En cuanto a qué clases se pueden definir para este proyecto, 
 * a partir del listado anterior también se identificaron dos posibles 2 entidades:
 *      - La que guarda, calcula y muestra las Horas/Dias de trabajo
 *      - La que guarda, calcula y muestra los Montos/Costos de trabajo
 * 
 * NOTA IMPORTANTE:
 * ================
 *      El proceso de creación de este proyecto sigue un orden de mejoras incrementales,
 *      según los temas que nos encontramos estudiando en el curso. Por lo tanto muchas de
 *      las soluciones presentadas respetan más el orden de los temas del curso y no
 *      la arquitectura que para una aplicación de este tipo debería ser planificada (es altamente
 *      probable que en futuras etapas se deban realizar cambios las entidades actuales o cómo se
 *      realiza el proceso de carga-cálculo-mostrado de datos).
 *      En "la vida real", el programador:
 *          1. se sentaría a pensar una solución abstracta según los requisitos del programa
 *          2. definiría un borrador de entidades (y sus relaciones)
 *          3. establecería clases según las entidades definidas (así como sus miembros posibles)
 *          4. comenzaría a escribir código
 *          5. etc...
 */

//se importa la clase principal de la aplicación
import App from "./app/App.js"; // con esta sintaxis se le dice al intérprete que 
                             // "importe la clase App del archivo que se encuentra en app/App"

const app = new App();
