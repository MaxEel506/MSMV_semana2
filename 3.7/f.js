function ejecutarEjercicio() {
    let mensaje = "";
    const edad = parseFloat(document.getElementById("edad").value);
    const promedio = parseFloat(document.getElementById("promedio").value);
    if (isNaN(edad) || edad < 0 || isNaN(promedio) || promedio < 0 || promedio > 10) {
        mensaje = "Ingrese edad y promedio válidos.";
    } else {
        let beca = null;
        if (edad > 18) {
            if (promedio >= 9) {
                beca = 2000;
            } else if (promedio >= 7.5) {
                beca = 1000;
            } else if (promedio >= 6.0) {
                beca = 500;
            }
        } else {
            if (promedio >= 9) {
                beca = 3000;
            } else if (promedio >= 8) {
                beca = 2000;
            } else if (promedio >= 6) {
                beca = 100;
            }
        }
        if (beca !== null) {
            mensaje = `El alumno recibe una beca de $${beca.toFixed(2)}.`;
        } else {
            mensaje = "Se enviará una carta de invitación para estudiar más.";
        }
    }
    document.getElementById("resul").innerHTML = mensaje;
}
