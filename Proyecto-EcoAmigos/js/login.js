
var usuarios = ["jmejia","crodriguez","aramos","lotiniano","lvargas"];
var claves = ["p@$$0rd","pollito123","pana123","Contra","pollofrito123"];

function cargar(frm){
    // para deteener una acción
    window.event.preventDefault();
    let nombreusuario = frm.txtusuario.value;
    let i = -1;
    for(let j=0; j<usuarios.length; j++){

        if(usuarios[j] == nombreusuario){

            i = j; break;
        }       
    }

    if(i == -1){
        alert("Usuario no existe"); return;
    }

    let contrasena = frm.txtclave.value;
    if(contrasena == claves[i]){
        alert("Bienvenido: " + nombreusuario);
        window.location = "../index.html";
    }
    else{
        alert("Contraseña Incorrecta");
    }

    let nombre = document.getElementsById("usuario");
        document.getElementById("nombre").innerHTML= (+nombre);

}






