function ejecutarEjercicio() {
    let mensaje = "";
    const precio = parseFloat(document.getElementById("precio").value);
    if (isNaN(precio) || precio < 0) {
        mensaje = "Ingrese un precio válido.";
    } else {
        let porcentaje = 0;
        if (precio >= 200) {
            porcentaje = 0.15;
        } else if (precio > 100) {
            porcentaje = 0.12;
        } else {
            porcentaje = 0.10;
        }
        const descuento = precio * porcentaje;
        const total = precio - descuento;
        mensaje = `Precio: $${precio.toFixed(2)}. Descuento: $${descuento.toFixed(2)} (${(porcentaje * 100).toFixed(0)}%). Total a pagar: $${total.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
