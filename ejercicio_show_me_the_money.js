
var botones = document.querySelectorAll("button")

for(var i = 0; i < botones.length; i ++){
    botones[i].addEventListener("click", function(){
        document.querySelector("img."+this.className).classList.toggle("oculto")
    })
}
