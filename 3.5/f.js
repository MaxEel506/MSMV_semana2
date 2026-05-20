function ejecutarEjercicio() {
    let mensaje = "";
    const personas = [
        { nombre: document.getElementById("nombre1").value.trim(), edad: parseInt(document.getElementById("edad1").value, 10) },
        { nombre: document.getElementById("nombre2").value.trim(), edad: parseInt(document.getElementById("edad2").value, 10) },
        { nombre: document.getElementById("nombre3").value.trim(), edad: parseInt(document.getElementById("edad3").value, 10) }
    ];

    if (personas.some(p => !p.nombre || isNaN(p.edad) || p.edad < 0)) {
        mensaje = "Complete los tres nombres y edades correctamente.";
    } else {
        let menor = personas[0];
        for (let i = 1; i < personas.length; i++) {
            if (personas[i].edad < menor.edad) {
                menor = personas[i];
            }
        }
        mensaje = `La persona de menor edad es ${menor.nombre} con ${menor.edad} años.`;
    }
    document.getElementById("resul").innerHTML = mensaje;
}
