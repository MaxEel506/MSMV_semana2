function ejecutarEjercicio() {
    let mensaje = "";
    const antiguedad = parseFloat(document.getElementById("antiguedad").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    if (isNaN(antiguedad) || antiguedad < 0 || isNaN(sueldo) || sueldo < 0) {
        mensaje = "Ingrese antigüedad y sueldo válidos.";
    } else {
        let bonoAntiguedad = 0;
        if (antiguedad > 2 && antiguedad < 5) {
            bonoAntiguedad = sueldo * 0.20;
        } else if (antiguedad >= 5) {
            bonoAntiguedad = sueldo * 0.30;
        }
        let bonoSueldo = 0;
        if (sueldo < 1000) {
            bonoSueldo = sueldo * 0.25;
        } else if (sueldo <= 3500) {
            bonoSueldo = sueldo * 0.15;
        } else {
            bonoSueldo = sueldo * 0.10;
        }
        const mayor = Math.max(bonoAntiguedad, bonoSueldo);
        mensaje = `Bono por antigüedad: $${bonoAntiguedad.toFixed(2)}. Bono por sueldo: $${bonoSueldo.toFixed(2)}. Se asignará el mayor: $${mayor.toFixed(2)}.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
