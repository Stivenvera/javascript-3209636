
const diamantes = document.querySelectorAll(".diamond");
const contador = document.querySelector(".contador");
const sonidodiamante= new Audio("sonidos/diamante.mp3")


let numero= 0

console.log(diamantes)
console.log(contador)

// crear la funciones
diamantes.forEach(item=>
{ /* console.log("elemento:" , item)
    item.style.filter = "grayscale(1)" */


    item.addEventListener("click", () =>{
        item.classList.add("saltar")
        numero++
contador.textContent = numero

    sonidodiamante.play();
   
    })


item.addEventListener("animationed" ,() =>{
item.style.display="none"
}, {once:true})
})


// segundo juego


const moneda = document.querySelectorAll(".mony");
const contador2 = document.querySelector(".contador2");
const sonidomoneda= new Audio("sonidos/moneda.wav")
let nm= 0

console.log(moneda)
console.log(contador2)

// crear la funciones
moneda.forEach(item=>
{ /* console.log("elemento:" , item)
    item.style.filter = "grayscale(1)" */


    item.addEventListener("click", () =>{
        item.classList.add("crecer")
        nm++
contador2.textContent = nm

sonidomoneda.play();

    })

 
item.addEventListener("mony" ,() =>{
item.style.display="none"
}, {once:true})
})



// juego3



const fantasma = document.querySelectorAll(".fnm");
const contador3 = document.querySelector(".contador3");
let numero2= 0
const sonidopacman= new Audio("sonidos/pac-man-dies.mp3" )

console.log(fantasma)
console.log(contador3)

// crear la funciones
fantasma.forEach(item=>
{ /* console.log("elemento:" , item)
    item.style.filter = "grayscale(1)" */


    item.addEventListener("click", () =>{
        item.classList.add("disminuir")
        numero2++
contador3.textContent = numero2

sonidopacman.play();
    })


item.addEventListener(".fnm" ,() =>{
item.style.display="none"
}, {once:true})
})

/*carrusel */

//1.variables
const escena = document.querySelectorAll(".escena")
const btnAnterior= document.querySelector (".flecha1")
const btnsiguiente= document.querySelector(".flecha2")
const miniaturas = document.querySelectorAll(".miniaturas")
let indice = 0

console.log(escena)
console.log(btnAnterior)
console.log(btnsiguiente)
console.log(miniaturas)
//2. funciones
function mostrarEscena(i){
  for (let j = 0; j < escena.length; j++) {
    escena[j].classList.remove('activa')

  } 
   escena[i].classList.add('activa')
   indice = i
}
mostrarEscena (0)

// funcion anterior 
btnAnterior.addEventListener("click", ()=>{
    indice=indice -1
    if (indice<0 ) {
        indice= escena.length -1
    }
    mostrarEscena(indice)
})

// funcion siguiente
btnsiguiente.addEventListener("click", ()=>{
    indice=indice +1
    if (indice > escena.length -1  ) {
        indice= 0
    }
    mostrarEscena(indice)
})
// miniaturas
miniaturas.forEach((min,i)=>{min.addEventListener("click",() =>
mostrarEscena(i)
)})


var x = document.getElementById("myaduio")
function playAudio(){
    x.play();
}
function pauseAudio(){
    x.pause();
}