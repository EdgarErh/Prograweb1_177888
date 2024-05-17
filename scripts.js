// Asignación del evento 'submit' al formulario con id 'palindromoForm'
document.getElementById('palindromoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío tradicional del formulario

    // Obtiene el valor del input con id 'cadena'
    var cadena = document.getElementById('cadena').value;

    // Llama a la función palindromo y guarda el resultado
    var resultado = palindromo(cadena);

    // Muestra el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').textContent = resultado;
});

// Función que determina si una cadena es un palíndromo
function palindromo(cadena) {
    // Construye el inicio del mensaje de resultado
    var resultado = "La frase \"" + cadena + "\"";

    // Convierte la cadena a minúsculas para ignorar mayúsculas/minúsculas
    var cadenaOriginal = cadena.toLowerCase();

    // Divide la cadena en un array de caracteres
    var letrasEspacios = cadenaOriginal.split("");

    // Variable para almacenar la cadena sin espacios
    var cadenaSinEspacios = "";

    // Elimina los espacios de la cadena
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    // Crea un array de caracteres sin espacios y su reverso
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();

    // Variable para determinar si la cadena es un palíndromo
    var iguales = true;

    // Compara los caracteres de la cadena con su reverso
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
        }
    }

    // Completa el mensaje de resultado según la comparación
    if (iguales) {
        resultado += " es un palíndromo.";
    } else {
        resultado += " no es un palíndromo.";
    }

    // Retorna el resultado
    return resultado;
}

