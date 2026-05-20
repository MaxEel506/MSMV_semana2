function ejecutarEjercicio() {
    let mensaje = "";
    const destino = document.getElementById("destino").value.trim().toLowerCase();
    const costoKm = parseFloat(document.getElementById("costoKm").value);
    const distancias = {
        "méxico": 750,
        "mexico": 750,
        "p.v.": 800,
        "pv": 800,
        "acapulco": 1200,
        "cancún": 1800,
        "cancun": 1800
    };
    if (destino === "casa" || destino === "casa") {
        mensaje = "Quedarse en casa no tiene costo de pasaje.";
    } else if (isNaN(costoKm) || costoKm < 0) {
        mensaje = "Ingrese un costo por kilómetro válido.";
    } else if (!distancias.hasOwnProperty(destino)) {
        mensaje = "Ingrese un destino válido: México, P.V., Acapulco, Cancún o Casa.";
    } else {
        const distancia = distancias[destino] * 2;
        const total = distancia * costoKm;
        mensaje = `Destino: ${destino}. Distancia de ida y vuelta: ${distancia} km. Costo total: $${total.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
