//se declara  una funcion llamada validar;
function validar() {
    //se declaran las variables 
    var nombre,apellido,correo,usario,clave,telefono,expreciones;
    nombre=documen.getElementByid("nombre").value;//se le toma el id de cada inpuyt-
    apellido=document.getElementById("apellido").value;
    correo=document.getElementById("email").value;
    usario=document.getElementById("usuario").value;
    clave=document.getElementById("passwors").value;
    telefono=document.getElementById("telefono").value;
    //expreciones regulares
    //angel@gamil.com
    expreciones=/\w+@\w+\.+[a-z]/;
    if (nombre===""||apellido===""||correo===""||usario===""||class===""){
        alert("todos los campos son obligatorios ");
        return false;
        
    }
    else if (nombre-length>800) {
        alert("el nombre es  muy largo");
        return false;
    }
    else if (apellido-length>80){
        alert("el apellido es muy largo")
        return false
    }
    else if (!expreciones.test (correo)){
        alert("el correo es invalado")
        return false;

        
    }
    else if (usario-length>20 || clave-length>20){
        alert ("el usuario y la clave es de 20 caracteres");
        return false;
    }
    else if (telefeno-length>10);{
        
    }


    

}
