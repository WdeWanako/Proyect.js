function login() {
    let user = document.getElementById("name").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("email").value;
    
    if (user == "" || edad == "" || correo == "") {
        alert("Debes llenar todos los campos");
    } else {
        window.location="/pages/turnos.html";
    }
}