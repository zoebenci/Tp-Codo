// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('form2');
//     if(document.formulario2.name.value.length <= 2){
//         alert ("Ingrese un nombre correcto.")
//         document.formulario2.name.focus()
//         return
//     }
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const email = document.getElementById('email').value;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (emailRegex.test(email)) {
//             this.action = 'https://formspree.io/YOUR_FORM_ID';
//             this.method = 'POST';
//             this.submit();
//         } else {
//             alert('Por favor, introduce un correo electrónico válido.');
//         }
//     });
// });

//Analizo la funcion de enviar//
function validarTurno(){
    const parrafoo = document.getElementById('error')
        if(document.form_2.name.value.length <= 2){
            alert ("Ingrese un nombre correcto.")
            document.form_2.name.focus()
            return
        }
    //Analizo el apellido//    
        const parrafitoo = document.getElementById('error')
        if(document.form_2.apellido.value.length <= 2){
            alert ("Ingrese un apellido correcto.")
            document.form_2.apellido.focus()
            return
        }
    // //Analizo el select//
    // const elegir = document.getElementById('error')
    // if (document.formulario.Buscar.selectedIndex == 0){
    //     alert ("Seleccione lo que desea buscar.")
    //     document.formulario.Buscar.focus()
    //     return
    // }
    //Analizo el correo//
        const correo = document.getElementById('email').value;
        const expresion = /\w+@\w+\.+[a-z]/;
        if(!expresion.test(correo)){ 
        alert("No es válido el email.")
        return;
    }
      //Analizo el telefono//
      const ntelefono = parseInt(document.form_2.phone.value)
      if (isNaN(ntelefono)){
          alert("Por favor ingrese un número de teléfono.")
          document.form_2.phone.focus()
          return
      }
      else{
        if(document.form_2.phone.value.length !=10){ 
            alert("El teléfono tiene que tener mínimo 10 números (característica+n°).")
            document.form_2.phone.focus()
            return
        }
      }
       //Analizo la seleccion de fecha y horario//
       const seleccion = document.getElementById('error')
       if (document.form_2.date.value.length <= 0){
           alert("Por favor seleccione la fecha del turno.")
           document.form_2.date.focus()
           return
       }
       const seleccion1 = document.getElementById('error')
       if (document.form_2.time.value.length <= 0){
           alert("Por favor seleccione el horario del turno.")
           document.form_2.time.focus()
           return
       }
    //Analizo el comentario//
     const textoo = document.getElementById('error')
     if (document.form_2.message.value.length <= 0){
         alert("Por favor complete su comentario.")
         document.form_2.message.focus()
         return
     }
    else{
        alert("Gracias por llenar el formulario, queda agendado su turno.")
document.form_2.submit();
    }
}
