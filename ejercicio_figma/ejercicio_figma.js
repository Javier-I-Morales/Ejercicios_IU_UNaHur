
document.getElementById("formulario").addEventListener("submit", function(evento){

    evento.preventDefault()

    var user = document.getElementById("usuario").value

    var pass = document.getElementById("password").value

    if (chequear_pass(pass)){
        alert('La clave no es válida')
        return
    }
    if (! /^[0-9]{8}$/.test(user)){
        alert('El usuario no es válido')
        return
    }
    this.submit();
    
})

document.getElementById("password").addEventListener("input", function(){

    var dato = document.getElementById("password").value
    dato = dato.toLowerCase()

    if( chequear_pass(dato)){
        document.querySelector("#password").style.color="red"
    }
    else{
        document.querySelector("#password").style.color="green"
    }
})

function chequear_pass(dato){
    return dato.length < 6 || dato.search(/[a-z]/i) < 0 || dato.search(/[0-9]/i) < 0 //! chequea_letra(dato) || ! chequea_numero(dato)
}


/*
function chequea_numero(s){ 
    var hay_numero = false
    s.split('').forEach(element => {
        if( ! isNaN(element)){ hay_numero = true}
    });
    return hay_numero
}

function chequea_letra(s){ 
    var hay_letra = false
    s.split('').forEach(element => {
        if(isNaN(element)){ hay_letra = true}
    });
    return hay_letra
}
*/


