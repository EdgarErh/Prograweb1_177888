function evalua() {
    var cadena = document.getElementById("cadena").value;

    if (cadena === cadena.toUpperCase()) {
        document.getElementById("parrafo").innerText = "La cadena está en mayusculas.";
    } else if (cadena === cadena.toLowerCase()) {
        document.getElementById("parrafo").innerText = "La cadena está en minúsculas.";
    } else {
        document.getElementById("parrafo").innerText = "La cadena está en mayúsculas y minúsculas.";
    }
}
