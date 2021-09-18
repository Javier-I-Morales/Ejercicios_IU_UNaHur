

var boton = document.querySelector("button")
var parrafo = document.querySelector("p")
var cuerpo = document.querySelector("body")
var cont = 0

/*
boton.addEventListener("click",function(){
    parrafo.insertAdjacentHTML("beforeend", "<p>BEEP NUMERO: " + parseInt(cont += 1)+"</p>")
    cuerpo.classList.toggle("color")
})
*/

boton.addEventListener("click", laFuncion)

function laFuncion(){
    parrafo.insertAdjacentHTML("beforeend", "<p>BEEP NUMERO: " + parseInt(cont += 1)+"</p>")
    cuerpo.classList.toggle("color")
}