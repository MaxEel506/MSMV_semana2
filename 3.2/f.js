function verificarSueldo() {
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const horas = parseFloat(document.getElementById("horas").value);

    if (horas > 40) {
        horasExtra = horas - 40;
        sueldoExtra = horasExtra * (sueldo * 2);
        sueldoSemanal = sueldo + sueldoExtra;
    } else {
        sueldoSemanal = sueldo*horas;
    }
    document.getElementById("resul").innerHTML = `Sueldo final: $${sueldoSemanal.toFixed(2)}`;
}