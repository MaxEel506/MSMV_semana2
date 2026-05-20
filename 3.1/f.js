function verificarEdad() {
    const edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
        document.getElementById("resul").innerHTML = "Puede votar.";
    } else {
        document.getElementById("resul").innerHTML = "No puede votar.";
    }
}