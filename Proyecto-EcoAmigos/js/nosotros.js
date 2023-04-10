let ln1=document.getElementById("ln1");
let ln2=document.getElementById("ln2");
let ln3=document.getElementById("ln3");
let bm=document.getElementById("BM");
let nav=document.getElementById("mainNav");

bm.addEventListener('click',function(){
    ln1.classList.toggle('mover1');
    ln2.classList.toggle('mover2');
    ln3.classList.toggle('mover3');
    nav.classList.toggle('movernav');
})


let sl1 = document.getElementById("sl1");
let subLista = document.querySelectorAll(".boton-t");

for (let i = 0; i < subLista.length; i++) {
  subLista[i].addEventListener("click", function () {
    let listaS = document.querySelector(".sub-lista");
    let altura = listaS.scrollHeight;

    if (listaS.classList.contains("desplegar")) {
      listaS.classList.remove("desplegar");
      listaS.removeAttribute("style");
    } else {
      listaS.classList.add("desplegar");
      listaS.style.height = altura + "px";
      
    }
  });
}





// -----------------------------------------------------------------
// CAMBIO DE COLORES TÍTULO
function parpadear(){
    var colors = ['#008000', '#ADFF2F', '#008f39', '#00ff00','#006400', '#00FF7F' ];
    var random = Math.floor(Math.random()* colors.length);
    document.getElementById("h1p").style.color = colors[random];
    setTimeout("parpadear()",2000);
}
document.body.setAttribute("onload", "parpadear(), carrusel()");


// CARRUSEL
var c=0;
function carrusel(){
    c++;
    if(c>3) c=1;
    document.getElementById("im").setAttribute("src", "../img/nosotros/nos" + c + ".PNG" );
    setTimeout("carrusel()",1000);
}

// CAMBIAR DE COLOR AL TEXTO 
// TODOS LOS ELEMENTOS P
var elementos = document.getElementsByTagName("p");
for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("mouseover", function (encima){
        encima.target.style.color = "green";
    });
    elementos[i].addEventListener("mouseout", function (quitar) {
        quitar.target.style.color = "black";
    });
}

var viñeta = document.getElementById("ul1");
viñeta.addEventListener("mouseover", function (encima){
    encima.target.style.color = "green";
});
viñeta.addEventListener("mouseout", function (quitar) {
    quitar.target.style.color = "black";
});


// Agrandar la imagen
var img = document.getElementsByTagName("img");
for(var i=0; i<img.length; i++){ 
img[i].addEventListener("dblclick", function (encima){
    encima.target.style.width = "80%";
});
img[i].addEventListener("click", function (encima){
    encima.target.style.width = "40%";
});
}





 



























