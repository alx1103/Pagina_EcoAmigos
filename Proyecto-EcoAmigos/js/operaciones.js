//SLIDER
function transicion(){
        document.getElementById("imgcab").style.opacity="0";
        document.getElementById("imgcab").style.transition= "all 1s"; 
        setTimeout("slider()", 1000);
    }

var contador = 1;
function slider(){
    contador++;
    if(contador>3) contador=1;
    document.getElementById("imgcab").setAttribute("src","../img/blog/banner"+contador+".png");
    document.getElementById("imgcab").style.opacity="1";
    document.getElementById("imgcab").style.transition= "all 1s"; 
    setTimeout("transicion()", 2000);
}

document.body.setAttribute("onload","slider()");

// para que la imagen cargue con este efecto
var animado= document.querySelectorAll(".animacion");

function scrollReveal(){
let scrollTop= document.documentElement.scrollTop;  
 for (var i=0; i<animado.length;i++){
    //  inicio de la pagina y el borde superior de del elemento
    let altura= animado[i].offsetTop;
    if(altura - 400 < scrollTop){
        animado[i].style.opacity=1;
        animado[i].classList.add("mostrar");
    }
 }
}

window.addEventListener('scroll', scrollReveal);