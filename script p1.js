// Función para solicitar número al usuario
function solicitarNumero() {
    var num = prompt('Ingresa un número (1-10):');
    num = parseInt(num);

    if (num >= 1 && num <= 10) {
        generarTabla(num);
    } else {
        alert('Por favor ingresa un número válido entre 1 y 10.');
    }
}

// Función para generar la tabla de multiplicar y mostrarla en la página
function generarTabla(num) {
    var tablaHTML = '<h2>Tabla de multiplicar del ' + num + '</h2>';
    tablaHTML += '<table>';
    tablaHTML += '<tr><th>Operación</th><th>Resultado</th></tr>';

    for (var i = 1; i <= 10; i++) {
        var resultado = num * i;
        tablaHTML += '<tr><td>' + num + ' x ' + i + '</td><td>' + resultado + '</td></tr>';
    }

    tablaHTML += '</table>';

    // Agregar la tabla al div con id "tabla"
    document.getElementById('tabla').innerHTML = tablaHTML;
}
