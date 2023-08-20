function solicitarInformacion() {
    const nombreCompleto = prompt("Por favor, ingresa tu nombre completo: ");



    if (nombreCompleto == "") {
        alert("No ingresaste tu nombre");
    } else {
        alert("Bienvenido a la Barberia " + nombreCompleto)
    }

    console.log("Nombre completo:", nombreCompleto);


    let accion;
    do{
        accion = parseInt(prompt("¿Que deseas realizarte? Escribi 1 para corte, 2 = Barba, 3 = Corte + Barba"));

        if (accion == "") {
            alert("No ingresaste ningun numero");
        } else if (accion <= 3 ){
            alert("El numero ingresado es: " + accion);
        } else {
            alert("Número inválido. Por favor, ingresa un número válido.");
        }
    } while (accion !== 1 && accion !== 2 && accion !== 3);


    switch (accion) {
        case 1:
            accion = "Corte"
            console.log("Acción seleccionada: Corte");
            break;
        case 2:
            accion = "Barba"
            console.log("Acción seleccionada: Barba");
            break;
        case 3:
            accion = "Corte + Barba"
            console.log("Acción seleccionada: Corte + Barba");
            break;
        default:
            console.log("Numero invalido");
            break;
    }


    const informacion = document.getElementById("informacion");
    informacion.innerHTML = `La informacion del cliente es: ${nombreCompleto} y se va a realizar ${accion}`;
}
//console.log("Nombre completo:", nombreCompleto);
//console.log("Acción seleccionada:", accion);