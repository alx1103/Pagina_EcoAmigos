var c=1;
 var j=document.getElementById('js');
function carrusel(){
    j.style.opacity="0";
    j.style.transition="all 1s";
    setTimeout("cambio()",1000);
}
function cambio(){
    c++;
    if(c>3){
        c=1;
    }
    j.setAttribute("src","../img/higiene/s"+c+".jpg");
    j.style.opacity="1";
    j.style.transition="all 1s";
    setTimeout("carrusel()",2000);
}

document.body.setAttribute("onload","carrusel()");

var animado= document.querySelectorAll(".animado");

function scrollReveal(){
let scrollTop= document.documentElement.scrollTop;  
 for (var i=0; i<animado.length;i++){
    let altura= animado[i].offsetTop;
    if(altura - 400 < scrollTop){
        animado[i].style.opacity=1;
        animado[i].classList.add("mostrar");
    }
  }
}

window.addEventListener('scroll', scrollReveal);

var open = document.getElementById('abrir');
var modal_container = document.getElementById('modal_container');
var close = document.getElementById('close');

open.addEventListener("click", () => {
    modal_container.classList.add('show');
});

close.addEventListener("click", () => {
    modal_container.classList.remove('show');
});

var compra = document.getElementById('compra');

compra.onclick = function Compra(){
    alert("Se ha Añadido al Carrito");
    window.location = "/paginas/hogar.html";
}
