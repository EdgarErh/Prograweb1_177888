function showContent(id) {
    // Ocultar todas las secciones
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const selectedContent = document.getElementById(id);
    selectedContent.classList.add('active');
}

function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.classList.toggle("show");
}

function showAnswer(question) {
    var answers = {
        "¿Qué es la inteligencia artificial generativa?": "La inteligencia artificial generativa es un campo de la inteligencia artificial que se enfoca en la creación de sistemas capaces de producir contenido original y creativo, como imágenes, música, texto e incluso video, a través de algoritmos y modelos de aprendizaje automático.",
        "¿Cómo funciona la inteligencia artificial generativa?": "La IAG utiliza modelos de aprendizaje automático, como redes neuronales generativas, para aprender patrones y características en conjuntos de datos y luego generar nuevos datos que sigan esas mismas características. Estos modelos pueden ser entrenados con grandes cantidades de datos para producir resultados cada vez más realistas y sofisticados.",
        "¿Cuáles son algunos ejemplos de aplicaciones de la inteligencia artificial generativa?": "La IAG se utiliza en una variedad de campos y aplicaciones, como la creación de arte generativo, la síntesis de voz y música, la generación de imágenes realistas, el diseño de productos, la escritura automática de contenido y la creación de personajes virtuales.",
        "¿Cuáles son los desafíos y preocupaciones éticas asociadas con la inteligencia artificial generativa?": "Algunas preocupaciones éticas incluyen el uso indebido de la IAG para la creación de contenido falso o engañoso, la violación de derechos de autor y privacidad, así como el sesgo y la discriminación en los datos utilizados para entrenar los modelos.",
        "¿Cuál es el futuro de la inteligencia artificial generativa?": "Se espera que la IAG continúe avanzando y teniendo un impacto significativo en una amplia gama de industrias, desde el entretenimiento hasta la medicina y la educación. A medida que los modelos se vuelvan más sofisticados y accesibles, podríamos ver una mayor integración de la IAG en nuestra vida diaria, inspirando la creatividad y mejorando la eficiencia en diversas áreas."
    };

    var answer = answers[question.innerText];
    var answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "<p>" + answer + "</p>";
}

let slideIndex = 0; // Variable para rastrear el índice de la diapositiva actual

// Función para mostrar las diapositivas
function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img'); // Obtener todas las imágenes del carrusel
  
  // Ocultar todas las imágenes
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slideIndex++; // Incrementar el índice de la diapositiva
  
  if (slideIndex > slides.length) { // Si el índice supera el número de imágenes, volver a la primera imagen
    slideIndex = 1;
  }
  
  // Mostrar la imagen actual
  slides[slideIndex - 1].classList.add('active');

  // Llamar a la función showSlides() nuevamente después de 2000 milisegundos (2 segundos)
  setTimeout(showSlides, 2000); 
}

// Llamar a la función showSlides() para iniciar el carrusel
showSlides();