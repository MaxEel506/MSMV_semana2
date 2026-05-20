function ejecutarEjercicio() {
    let mensaje = "";
    const horas = parseFloat(document.getElementById("horas").value);
    if (isNaN(horas) || horas < 0) {
        mensaje = "Ingrese un número válido de horas.";
    } else {
        let total = 0;
        if (horas <= 2) {
            total = horas * 5;
        } else if (horas <= 5) {
            total = 2 * 5 + (horas - 2) * 4;
        } else if (horas <= 10) {
            total = 2 * 5 + 3 * 4 + (horas - 5) * 3;
        } else {
            total = 2 * 5 + 3 * 4 + 5 * 3 + (horas - 10) * 2;
        }
        mensaje = `Total a pagar: $${total.toFixed(2)}`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
