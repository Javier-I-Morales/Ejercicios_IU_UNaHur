

var p = document.querySelectorAll("p")

for(var i = 0; i < p.length; i ++){
    p[i].addEventListener("click", function(){
        this.classList.toggle("resaltado")
    })
}