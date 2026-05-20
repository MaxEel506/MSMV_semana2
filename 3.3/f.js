function verificarRegalo() {
    const presupuesto = parseFloat(document.getElementById("presupuesto").value);
    let mensaje = "";

    if (isNaN(presupuesto) || presupuesto < 0) {
        mensaje = "Ingrese un presupuesto válido mayor o igual a 0.";
    } else if (presupuesto <= 10) {
        mensaje = "Con ese presupuesto, el mejor regalo accesible es: Tarjeta ($10.00 o menos).";
    } else if (presupuesto <= 100) {
        mensaje = "Con ese presupuesto, el mejor regalo accesible es: Chocolates ($11.00 a $100.00).";
    } else if (presupuesto <= 250) {
        mensaje = "Con ese presupuesto, el mejor regalo accesible es: Flores ($101.00 a $250.00).";
    } else {
        mensaje = "Con ese presupuesto, el mejor regalo accesible es: Anillo (más de $251.00).";
    }

    document.getElementById("resul").innerHTML = mensaje;
}
