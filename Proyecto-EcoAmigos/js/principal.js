
// NO ENTIENDO
/*-------------------menu y nav-----------*/
// esto es para que cuando el mouse se coloque sobre la imagen, esta se mueva
// TOMARÁ EL ID DE LOS DIVS 
let ln1=document.getElementById("ln1");
let ln2=document.getElementById("ln2");
let ln3=document.getElementById("ln3");
let bm=document.getElementById("BM");
let nav=document.getElementById("mainNav");

// con toogle mostramos un div, mientras ocultamos otro
//claslist para manipular las clases de css
//el toogle agrega y elimina la clase 
bm.addEventListener('click',function(){
    ln1.classList.toggle('mover1');
    ln2.classList.toggle('mover2');
    ln3.classList.toggle('mover3');
    nav.classList.toggle('movernav');
})




// NO ENTIENDO
 let sl1 = document.getElementById("sl1");
//  document.querySelectorAll una lista de elementos del documento que coinciden con el grupo de selectores indicados.
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

// /*---------------------------------------------------*/

// /*---------------------------banner-------------------*/
// ENTENDIDO!
var h2 = document.getElementById("H2");
var p = document.getElementById("p");
var imgPr = document.getElementById("imgPr");

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");

// que cuando yo coloque en la imagen b1, el título h2 tome el texto y el p también
b1.addEventListener('click',()=>{ 
  h2.textContent="Bienvenidos a EcoAmigos";p.textContent="Ecuentra los mejores productos ecologicos.Comprometidos con el medio ambiente";
   imgPr.src="img/imgPrincipal/productosecoamigables.png";
   imgPr.style.width="400px";
 });

 b2.addEventListener('click',()=>{
   h2.textContent="Productos ecológicos para tu día a día.";
   p.textContent="El jabón de Sandía y Aloe Vera es refrescante y dejará tu piel limpia e hidratada al instante.";
  imgPr.src="img/imgPrincipal/higiene.png";
  imgPr.style.width="400px";
});

b3.addEventListener('click',()=>{
  h2.textContent="Productos ecológicos para tu casa";
  p.textContent="tomatodo de bambú certificado por la FSC reforzado con acero inoxidable 304.";
  imgPr.src="img/imgPrincipal/tomatodbambu.png";
  imgPr.style.marginLeft="20px";
  imgPr.style.width="450px";
});

b4.addEventListener('click',()=>{
  h2.textContent="Productos ecológicos destinados para tu negocio";
  p.textContent="Platos de bagazo de caña de azúcar.Bowls de 12oz-350ML";
  imgPr.src="img/imgPrincipal/negocio.png";
  imgPr.style.width="450px";
  imgPr.style.marginLeft="20px";
});
/*----------------------------------------------------------*/


// /*-----------------tarjeta---------------------------*/
// ENTENDIDO!!
// ha higiene, hb hogar, hc negocio
let ha = document.getElementById("ha");
let hb = document.getElementById("hb");
let hc = document.getElementById("hc");

// la caja completa
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");

// mouseenter se activa cuando el curso entra al elemento
t1.addEventListener('mouseenter',()=>{
  // para que se cuando coloque el cursor se coloque más arriba
  t1.style.transform="translateY(-10px)";
  t1.style.transition="all 1s";
  ha.style.color="black";
});

t1.addEventListener('mouseleave',()=>{
  t1.style.transform="translateY(0px)";
  t1.style.transition="all 1s";
  ha.style.color="white";
});

t2.addEventListener('mouseenter',()=>{
  t2.style.transform="translateY(-10px)";
  t2.style.transition="all 1s";
  hb.style.color="black";
});
t2.addEventListener('mouseleave',()=>{
  t2.style.transform="translateY(0px)";
  t2.style.transition="all 1s";
  hb.style.color="white";
});

t3.addEventListener('mouseenter',()=>{
  t3.style.transform="translateY(-10px)";
  t3.style.transition="all 1s";
  hc.style.color="black";
});
t3.addEventListener('mouseleave',()=>{
  t3.style.transform="translateY(0px)";
  t3.style.transition="all 1s";
  hc.style.color="white";
});


// /*---------------------------------------------------*/

// /*-----------slider de ofertas y anuncios------------*/
// ENTENDIDO!
let imgPer = document.getElementById('imgPer');
let d =document.getElementById("d");
let n =document.getElementById("n");
var c =1;
var c2 =1;

// CUANDO YO ME POSICIONE SOBRE ESA IMAGEN
imgPer.addEventListener('mouseenter',()=>{
  t3.style.transition="all 2s";
  // SCALE MODIFICA EL TAMAÑO DE UN ELEMENTO
  imgPer.style.transform="scale(1.2)";
});

imgPer.addEventListener('mouseleave',()=>{
  t3.style.transition="all 2s";
  imgPer.style.transform="scale(1)";
});


function carrusel(){
  d.style.opacity="0";
  d.style.transition="all 1s";
  setTimeout("cambio()",1000);
}


function cambio(){
  c++;
  if(c>2){
    c=1;
  }
  // transparencia de un elemento
  d.style.opacity="1";
  d.style.transition="all 1s";
  d.setAttribute("src","img/imgPrincipal/d"+ c +".png");
  setTimeout("carrusel()",2000);
}


function carruseln(){
  n.style.opacity="0";
  n.style.transition="all 1s";
  setTimeout("cambion()",1000);
}

function cambion(){
  c2++;
  if(c2>2){
    c2=1;
  }
  n.style.opacity="1";
  n.style.transition="all 1s";
  n.setAttribute("src","img/imgPrincipal/Nuevo"+ c +".png");
  setTimeout("carruseln()",3000);
}

document.body.setAttribute("onload","carrusel();carruseln()");