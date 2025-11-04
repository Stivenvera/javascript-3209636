
const diamantes = document.querySelectorAll(".diamond");
const contador = document.querySelector(".contador");
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
    })


item.addEventListener("animationed" ,() =>{
item.style.display="none"
}, {once:true})
})


// segundo juego


const moneda = document.querySelectorAll(".mony");
const contador2 = document.querySelector(".contador2");
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
    })


item.addEventListener("mony" ,() =>{
item.style.display="none"
}, {once:true})
})



// juego3



const fantasma = document.querySelectorAll(".fnm");
const contador3 = document.querySelector(".contador3");
let numero2= 0

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
    })


item.addEventListener(".fnm" ,() =>{
item.style.display="none"
}, {once:true})
})
