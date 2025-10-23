
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
        item.classList.add("saltar")
        nm++
contador2.textContent = nm
    })


item.addEventListener("mony" ,() =>{
item.style.display="none"
}, {once:true})
})



// juego3



const fantasma = document.querySelectorAll(".fnm");
const contador3 = document.querySelector(".contador");
let numero2= 0

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
