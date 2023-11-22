const products = [
  {
    id: "1",
    name: "Bases y Fundamentos de la Doctrina y la Clínica Médica Homeopáticas",
    description: "La Doctrina de Hahnemann solo puede ser conocida a través de sus principios. ¿Qué son la salud y la enfermedad? ¿Qué es la energía vital? ¿Por qué los síntomas homeopáticos son la expresión del nuevo orden que un desequilibrio de la fuerza vital ha producido en la totalidad de este paciente, en tanto individuo singular? ¿Cómo se produce la curación y qué son la acción primaria y secundaria de los medicamentos? ¿Cómo llegó Hahnemann a restaurar el aforismo hipocrático 'similia similibus curantur'? Estas son solo algunas de las preguntas que Bases y Fundamentos de la Doctrina y la Clínica Medica Homeopáticas responde con objetividad y claridad de conceptos, en la primera parte de la obra. La segunda parte, dedicada a la clínica, presenta los pasos de un método preciso para encarar la toma del caso de los pacientes, de acuerdo con los niveles energéticos de su constitución mórbida, y los tiempos del seguimiento del caso, que determinarán si la primera prescripción ha sido la adecuada y si puede suponerse el haber llegado al simillimum, el remedio constitucional que pone en marcha la ley de curación.",
    category: "libros",
    img: "../src/images/Bases.png",
    price: 30.0,
    stock: 100
  },
  {
    id: "2",
    name: "Consultorio de Impregnología",
    description: "Somos parte del linaje familiar que nos precede y esa constelación de informaciones está plasmada en el Infograma Personal de cada uno. Los invito a participar del Consultorio en Impregnología donde estudiaremos, en presencia del consultante, lo que el informe dice de él y aconseja. 7 Encuentros. Todos los cursos de la Universidad se realizan en modalidad On Demand, de esta manera pueden iniciarse cuando deseen. El material de estudio permanecerá habilitado sin límite de tiempo y se puede ver y repetir las veces que se desee. Importante: Los alumnos de Argentina pueden abonar el curso en moneda local y al cambio oficial diario y en hasta 3 cuotas sin interés. Para esto deben seguir los pasos normales, presionando en 'Añadir a la Cesta' y completando sus datos. Cuando deban seleccionar el método de pago, elegir 'MercadoPago' y allí el sistema los irá guiando hasta realizar el pago en pesos y le mostrará el valor en el momento de realizar el pago. Si quisiera realizar el pago en una cuota por transferencia bancaria, también puede hacerlo de la misma manera y seleccionando esa modalidad al momento de seleccionar el método de pago. También allí se le indicará cómo debe consultar el tipo de cambio.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284783750.jpg",
    price: 30.0,
    stock: 100
  },
  {
    id: "3",
    name: "Curso La Risa como Síntoma Homeopático",
    description: "Los invitamos a compartir con la Dra. Anna Juan, 2 encuentros que serán una oportunidad para aprender a identificarla en el repertorio, su semiología y modalidades, y profundizar nuestro conocimiento de Materia Médica. Módulo 1: Ejercicio repertorial de 2 situaciones - Risa, nunca - Risa histérica, nerviosa. Materia Médica: Asarum Europaeum, Aurum-muriaticum-natronatum, Aloe Socotrina. Módulo 2: Ejercicio repertorial de 2 situaciones - Risa, durmiendo - Risa fácil, sin causa. Materia Médica: Moschus, Bufo rana, Crocus Sativa. Todos los cursos de la Universidad se realizan en modalidad On Demand, de esta manera pueden iniciarse cuando deseen. El material de estudio permanecerá habilitado sin límite de tiempo y se puede ver y repetir las veces que se desee. Importante: Los alumnos de Argentina pueden abonar el curso en moneda local y al cambio oficial diario y en hasta 3 cuotas sin interés. Para esto deben seguir los pasos normales, presionando en 'Añadir a la Cesta' y completando sus datos. Cuando deban seleccionar el método de pago, elegir 'MercadoPago' y allí el sistema los irá guiando hasta realizar el pago en pesos y le mostrará el valor en el momento de realizar el pago. Si quisiera realizar el pago en una cuota por transferencia bancaria, también puede hacerlo de la misma manera y seleccionando esa modalidad al momento de seleccionar el método de pago. También allí se le indicará cómo debe consultar el tipo de cambio.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284793250.jpg",
    price: 25.0,
    stock: 100
  },
  {
    id: "4",
    name: "Curso Online Remedios de Leches en Homeopatía",
    description: "El estudio de las Lacs ha sido una experiencia ardua y maravillosa, que me ha llevado a comprender más allá de lo que había imaginado antes de comenzar. Las leches son una categoría importante dentro de la Homeopatía, ya que muchas veces son la base de la sintomatología y de la dinámica de enfermedad de un paciente. Este curso está destinado tanto a aquellos que comienzan su camino en la Homeopatía como a aquellos que quieran profundizar sus conocimientos en esta área específica. Los espero en este viaje que seguramente nos dejará sorpresas y aprendizajes.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284784596.jpg",
    price: 25.0,
    stock: 100
  },
  {
    id: "5",
    name: "Curso Online El Camino de la Felicidad",
    description: "No cabe duda que la llamada “búsqueda de la felicidad” es uno de los temas que más nos moviliza como seres humanos. Pero, ¿qué es la felicidad? ¿Es algo que se puede buscar y encontrar, o es más bien un estado interior que se construye día a día? En este curso exploraremos diferentes enfoques sobre la felicidad, desde la psicología positiva hasta las enseñanzas de filósofos y sabidurías ancestrales. A través de conferencias, ejercicios prácticos y reflexiones, te invitamos a emprender el camino hacia una vida más plena y feliz.",
    category: "cursos",
    img: "../src/images/CaminoFelicidad.png",
    price: 60.0,
    stock: 100
  },
  {
    id: "6",
    name: "Curso Online Alimentación y Microbiota en autismo (TEA) y trastornos del neurodesarrollo",
    description: "Los invitamos a compartir estos encuentros con la Dra. Graciela Varela, en los que exploraremos la relación entre la alimentación, la microbiota y los trastornos del espectro autista (TEA) y otros trastornos del neurodesarrollo. Analizaremos cómo la dieta y la salud intestinal pueden influir en el desarrollo cognitivo y emocional, y qué estrategias nutricionales y de modulación de la microbiota pueden ser beneficiosas en estos casos. Una mirada integral para comprender y abordar estos desafíos desde una perspectiva nutricional y terapéutica.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284650981.jpg",
    price: 25.0,
    stock: 100
  },
  {
    id: "7",
    name: "Curso Online Consejero en Impregnología - Nivel 1",
    description: "¿Qué es la Impregnología? ¿Cómo se estructura el genosociograma? ¿Cuál es la importancia de la información transgeneracional en el proceso salud-enfermedad? Estas son algunas de las preguntas que abordaremos en el Nivel 1 del Curso de Consejero en Impregnología. A través de teoría y ejercicios prácticos, exploraremos los fundamentos de esta disciplina que nos permite comprender la influencia de la información ancestral en la salud individual y familiar.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284702227.jpg",
    price: 99.0,
    stock: 100
  },
  {
    id:"8",
    name: "Curso Online Consejero en Impregnología - Nivel 2",
    description: "¿Qué es la Impregnología? ¿Cómo se estructura el genosociograma? ¿Cuál es la importancia de la información transgeneracional en el proceso salud-enfermedad? Estas son algunas de las preguntas que abordaremos en el Nivel 2 del Curso de Consejero en Impregnología. Continuaremos explorando los conceptos y herramientas de esta disciplina, profundizando en la interpretación de los genogramas y su aplicación en el ámbito clínico.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284736987.jpg",
    price: 69.0,
    stock: 100
  },
  {
    id: "9",
    name: "Curso Online Consejero en Impregnología - Nivel 3",
    description: "¿Qué es la Impregnología? ¿Cómo se estructura el genosociograma? ¿Cuál es la importancia de la información transgeneracional en el proceso salud-enfermedad? Estas son algunas de las preguntas que abordaremos en el Nivel 3 del Curso de Consejero en Impregnología. En este nivel, nos enfocaremos en la aplicación práctica de los conocimientos adquiridos, integrándolos en la práctica clínica y desarrollando habilidades para el asesoramiento en Impregnología.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284762373.jpg",
    price: 49.0,
    stock: 100
  },
  {
    id: "10",
    name: "El Universo de las Leches",
    description: "El estudio de las Lacs ha sido una experiencia ardua y al mismo tiempo fascinante, ya que pueden compartir varios síntomas, pero al mismo tiempo cada una de ellas es diferente, tiene su peculiaridad y parece manifestar la esencia de la especie a la que pertenece. Iniciamos este camino con el Dr. Zalman Bronfman que supo conducirnos y entusiasmarnos en el estudio de Las Lacs. La leche de la hembra de cada especie es esencial para que sus hijos puedan sobrevivir y, en última instancia, para la conservación de la especie en su conjunto.",
    category: "libros",
    img: "../src/images/Leches.png",
    price: 25.0,
    stock: 100
},
{
    id: "11",
    name: "Encuentros Online de Clínica Médica Homeopática con el Dr. Marcelo Candegabe",
    description: "Estos encuentros están destinados a profundizar el Método de la Homeopatía Pura creado por los Dres Hugo Carrara y Marcelo Candegabe hace más de 30 años. El estudio de las modalidades, el trazado de una totalidad sintomatológica coherente, el diagnóstico de Nivel energético, el pronóstico dinámico, los cuadros agudos, los miasmas y la posología serán ejemplificados en historias clínicas de larga evolución.",
    category: "cursos",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/1566136/3284822250.jpg",
    price: 40.0,
    stock: 100
},
{
    id: "12",
    name: "Escritos sobre Homeopatía",
    description: "El Dr. Marcelo Candegabe es uno de los prominentes homeópatas contemporáneos. Su profunda y sólida formación en teología, filosofía, física cuántica, lo han colocado en inmejorables condiciones para abordar desde distintas ópticas los temas más trascendentes de la doctrina homeopática.",
    category: "libros",
    img: "../src/images/Escritos.png",
    price: 20.0,
    stock: 100
},
{
  id: "13",
  name: "Abono 1 crédito",
  description: "Algoritmo Candegabe 2.0\nUna aproximación hacia un paradigma matemático de la Homeopatía: un código fonético numérico como el nuevo parámetro.",
  category: "algoritmo",
  img: "../src/images/AlgoritmoCandegabe.png",
  price: 35,
  stock: 100
},
{
  id: "14",
  name: "Abono 10 créditos",
  description: "Algoritmo Candegabe 2.0\nUna aproximación hacia un paradigma matemático de la Homeopatía: un código fonético numérico como el nuevo parámetro.",
  category: "algoritmo",
  img: "../src/images/AlgoritmoCandegabe.png",
  price: 300,
  stock: 100
},
{
  id: "15",
  name: "Abono 20 créditos",
  description: "Algoritmo Candegabe 2.0\nUna aproximación hacia un paradigma matemático de la Homeopatía: un código fonético numérico como el nuevo parámetro.",
  category: "algoritmo",
  img: "../src/images/AlgoritmoCandegabe.png",
  price: 500,
  stock: 100
},
{
  id: "16",
  name: "Abono 50 créditos",
  description: "Algoritmo Candegabe 2.0\nUna aproximación hacia un paradigma matemático de la Homeopatía: un código fonético numérico como el nuevo parámetro.",
  category: "algoritmo",
  img: "../src/images/AlgoritmoCandegabe.png",
  price: 1000,
  stock: 100
},
{
  id: "17",
  name: "Promoción Primera Compra (20 créditos)",
  description: "Algoritmo Candegabe 2.0\nUna aproximación hacia un paradigma matemático de la Homeopatía: un código fonético numérico como el nuevo parámetro.",
  category: "algoritmo",
  img: "../src/images/AlgoritmoCandegabe.png",
  price: 300,
  stock: 100
},
{
  name: "Licencia 6 meses",
  description: "Complete Dynamics Repertory\nSoftware líder que te brinda herramientas avanzadas y funciones intuitivas para gestionar casos de manera eficiente y ofrecer tratamientos efectivos.",
  category: "complete_dynamics",
  img: "../src/images/CompleteDynamics.png",
  price: 112.50,
  stock: 100
  },
  {
  id: "20",
  name: "Licencia 1 año",
  description: "Complete Dynamics Repertory\nSoftware líder que te brinda herramientas avanzadas y funciones intuitivas para gestionar casos de manera eficiente y ofrecer tratamientos efectivos.",
  category: "complete_dynamics",
  img: "../src/images/CompleteDynamics.png",
  price: 203.50,
  stock: 100
  },
  {
  id: "21",
  name: "Licencia 3 años",
  description: "Complete Dynamics Repertory\nSoftware líder que te brinda herramientas avanzadas y funciones intuitivas para gestionar casos de manera eficiente y ofrecer tratamientos efectivos.",
  category: "complete_dynamics",
  img: "../src/images/CompleteDynamics.png",
  price: 437.80,
  stock: 100
  },
  {
  id: "22",
  name: "Licencia 5 años",
  description: "Complete Dynamics Repertory\nSoftware líder que te brinda herramientas avanzadas y funciones intuitivas para gestionar casos de manera eficiente y ofrecer tratamientos efectivos.",
  category: "complete_dynamics",
  img: "../src/images/CompleteDynamics.png",
  price: 612.50,
  stock: 100
  }
];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };