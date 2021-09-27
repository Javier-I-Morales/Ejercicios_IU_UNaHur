

document.getElementById("formulario").addEventListener("submit", function(evento){

    evento.preventDefault()

    var user = document.getElementById("usuario").value

    var pass = document.getElementById("password").value

    if (! /^(?=.{4,})/.test(pass)){
        alert('La clave no es válida, debe contener al menos 4 caracteres')
        return
    }
    if (!/^[0-9]+$/.test(user)){
        alert('El usuario no es válido, debe contener solo números')
        return
    }

    localStorage.setItem("nom", document.getElementById("nombre").value)
   
    this.submit()

})
