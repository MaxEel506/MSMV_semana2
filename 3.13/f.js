function ejecutarEjercicio() {
    let mensaje = "";
    const alumnos = parseInt(document.getElementById("alumnos").value, 10);
    if (isNaN(alumnos) || alumnos < 0) {
        mensaje = "Ingrese un número válido de alumnos.";
    } else {
        let costo = 0;
        if (alumnos > 100) {
            costo = 20;
        } else if (alumnos >= 50) {
            costo = 35;
        } else if (alumnos >= 20) {
            costo = 40;
        } else {
            costo = 70;
        }
        const total = alumnos * costo;
        mensaje = `Costo por alumno: $${costo.toFixed(2)}. Costo total: $${total.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
