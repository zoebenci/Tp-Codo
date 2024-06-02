//Analizo la funcion de enviar//
function validarEnviar(){
    const parrafo = document.getElementById('error')
        if(document.formulario.Nombre.value.length <= 2){
            alert ("Ingrese un nombre correcto.")
            document.formulario.Nombre.focus()
            return
        }
    //Analizo el apellido//    
        const parrafito = document.getElementById('error')
        if(document.formulario.Apellido.value.length <= 2){
            alert ("Ingrese un apellido correcto.")
            document.formulario.Apellido.focus()
            return
        }
    //Analizo el select//
    const elegir = document.getElementById('error')
    if (document.formulario.Buscar.selectedIndex == 0){
        alert ("Seleccione lo que desea buscar.")
        document.formulario.Buscar.focus()
        return
    }
    //Analizo el comentario//
    const textito1 = document.getElementById('error')
    if (document.formulario.textito.value.length <= 0){
        alert("Por favor complete su comentario.")
        document.formulario.textito.focus()
        return
    }
    //Analizo el correo//
        const correo = document.getElementById('correo').value;
        const expresion = /\w+@\w+\.+[a-z]/;
        if(!expresion.test(correo)){ 
        alert("No es válido el email.")
        return;
    }
    else{
        alert("Gracias por llenar el formulario, a la brevedad nos comunicaremos contigo.")
document.formulario.submit();
    }
}

