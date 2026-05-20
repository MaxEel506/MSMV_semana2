function ejecutarEjercicio() {
    let mensaje = "";
    const horas = parseFloat(document.getElementById("horas").value);
    const pago = parseFloat(document.getElementById("pago").value);
    if (isNaN(horas) || horas < 0 || isNaN(pago) || pago < 0) {
        mensaje = "Ingrese horas y pago válidos.";
    } else if (horas > 50) {
        mensaje = "No se permite trabajar más de 50 horas.";
    } else {
        let total = 0;
        if (horas <= 40) {
            total = horas * pago;
        } else if (horas <= 45) {
            total = 40 * pago + (horas - 40) * pago * 2;
        } else {
            total = 40 * pago + 5 * pago * 2 + (horas - 45) * pago * 3;
        }
        mensaje = `Sueldo semanal: $${total.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
