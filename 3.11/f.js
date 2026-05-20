function ejecutarEjercicio() {
    let mensaje = "";
    const anios = parseInt(document.getElementById("anios").value, 10);
    if (isNaN(anios) || anios < 0) {
        mensaje = "Ingrese un número válido de años.";
    } else if (anios === 0) {
        mensaje = "El trabajador no tiene antigüedad para recibir bono.";
    } else if (anios > 5) {
        mensaje = "El bono por antigüedad es de $1000.00.";
    } else {
        const bono = anios * 100;
        mensaje = `El bono por antigüedad es de $${bono.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
