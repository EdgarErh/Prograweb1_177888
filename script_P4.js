function genera_rfc() {
    var nombre = document.getElementById("nombre").value.toUpperCase();
    var ap = document.getElementById("ap").value.toUpperCase();
    var am = document.getElementById("am").value.toUpperCase();
    var anio = document.getElementById("anio").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    var rfc = '';

    rfc += ap.charAt(0);
    rfc+=ap.charAt(1);

    rfc+=am.charAt(0);

    rfc+=nombre.charAt(0);

    rfc+=anio.charAt(2);
    rfc+=anio.charAt(3);

    rfc+=mes.charAt(0);
    rfc+=mes.charAt(1);
    
    rfc+=dia.charAt(0);
    rfc+=dia.charAt(1);
   
    document.getElementById("resultado").value = rfc;
}


