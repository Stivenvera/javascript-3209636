
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