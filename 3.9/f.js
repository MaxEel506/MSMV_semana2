function ejecutarEjercicio() {
    let mensaje = "";
    const plan = document.getElementById("plan").value.trim().toUpperCase();
    const alcohol = document.getElementById("alcohol").value.trim().toLowerCase();
    const lentes = document.getElementById("lentes").value.trim().toLowerCase();
    const enfermedad = document.getElementById("enfermedad").value.trim().toLowerCase();
    const edad = parseInt(document.getElementById("edad").value, 10);
    let base = null;
    if (plan === "A") {
        base = 1200;
    } else if (plan === "B") {
        base = 950;
    }
    if (base === null || isNaN(edad) || edad < 0) {
        mensaje = "Ingrese plan válido y edad correcta.";
    } else {
        let total = base;
        if (alcohol === "si" || alcohol === "sí") {
            total += base * 0.10;
        }
        if (lentes === "si" || lentes === "sí") {
            total += base * 0.05;
        }
        if (enfermedad === "si" || enfermedad === "sí") {
            total += base * 0.05;
        }
        total += base * (edad > 40 ? 0.20 : 0.10);
        mensaje = `Costo total de la póliza: $${total.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
