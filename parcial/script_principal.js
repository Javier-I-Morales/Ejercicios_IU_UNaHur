

document.querySelector("#nombre_usuario").textContent = "Bienvenido "+localStorage.getItem("nom").toUpperCase()+"."



var remedios = {

    "aspirina":{
        "Tres Cruces":{"direccion":"Beiro 12", "descuento": 10, "fecha": "04/12/2021" } ,
        "Central":{"direccion":"Vergara 500", "descuento": 15, "fecha": "31/11/2021" } ,
        "Pedraza":{"direccion":"Pedraza 152", "descuento": 10, "fecha": "31/12/2021" } 
    },
    "ibuprofeno":{
        "Tres Cruces":{"direccion":"Beiro 12", "descuento": 20, "fecha": "01/11/2021" } ,
        "Oeste":{"direccion":"Camargo 510", "descuento": 17, "fecha": "14/12/2021" } ,
        "Italia":{"direccion":"Roma 824", "descuento": 18, "fecha": "24/11/2021" } 
    },
    "paracetamol":{
        "Tres Cruces":{"direccion":"Beiro 12", "descuento": 12, "fecha": "04/12/2021" } ,
        "Central":{"direccion":"Vergara 500", "descuento": 14, "fecha": "05/01/2022" } ,
        "Italia":{"direccion":"Roma 824", "descuento": 20, "fecha": "22/01/2022" }  
    }
}

document.getElementById("buscador").addEventListener("submit", function(event){

    event.preventDefault()

    document.querySelector("#contenido_descuento").innerHTML =""

    document.querySelector("#contenido_descuento").innerHTML += '<span class="span_datos"><strong class="strong_datos"><h3>DESCUENTO</h3></strong></span><hr class="linea_divisora"><span class="span_datos"><strong class="strong_datos"><h3>FARMACIA</h3></strong></span><hr class="linea_divisora"><span class="span_datos"><strong class="strong_datos"><h3>FECHA VENCIMIENTO</h3></strong></span><hr id="linea_final"><br>'
            
    var medicamento = document.getElementById("caja_buscar").value

    medicamento = medicamento.toLowerCase()

    if(remedios.hasOwnProperty(medicamento)){

        ingresar_descuento(document.querySelector("#contenido_descuento"), medicamento)
       
    }
    else{

        document.querySelector("#contenido_descuento").innerHTML += '<span class="span_datos"><strong class="strong_datos"><h3> SIN OFERTA </h3></strong></span><hr class="linea_divisora"><span class="span_datos"><strong class="strong_datos"><h3> SIN OFERTA </h3></strong></span><hr class="linea_divisora"><span class="span_datos"><strong class="strong_datos"><h3> SIN OFERTA </h3></strong></span><hr>'

    }

})


function ingresar_descuento(tag, medicamento){

    for (var key in remedios){
        if(key == medicamento){
            for(var valor in remedios[key]){
                tag.innerHTML += '<span class="span_datos"><strong class="strong_datos"><h1>'+remedios[key][valor]["descuento"]+'</h1><h3> % Desc.</h3></strong></span><hr class="linea_divisora"><span class="span_datos"><strong class="strong_datos"><h3>'+valor+'</h3>,<br> <em>'+remedios[key][valor]["direccion"]+'</em></strong></span><hr class="linea_divisora"><span class="span_datos"><strong class="strong_datos">'+remedios[key][valor]["fecha"]+'</strong></span><hr>'
            }

        }
    }
}


document.getElementById("logo_ayuda").addEventListener("click", function(){

    if(this.getAttribute("src")==="logo_ayuda.png"){
        this.setAttribute("src","logo_ayuda_2.png")
    }
    else{
        this.setAttribute("src","logo_ayuda.png")
    }
    
})
