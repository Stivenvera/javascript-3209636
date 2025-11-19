const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".capitulos-container")

console.log(listaCapitulos)
console.log(infocomic)

infocomic.innerHTML =`
    
         <div class="hero-content">
      <h1>${comic.nombrecomic}</h1>
     <p>${comic.sinopsis}</p>
      <div class="hero-buttons">
        <a href="#" class="btn primary">VER CAPITULOS</a>
        <a href="#" class="btn secondary">Ver Tráiler</a>
      </div>
    </div>

`
// aqui vamos a mostrar nombre de capitulos

comic.escenas.forEach(escenas=>{
    const micard = document.createElement("div")
    micard.classList.add("cap")
    micard.innerHTML= `
        <img src"${escenas.image}">
        <h3>${escenas.nombre}</h3>
        `
    


    listaCapitulos.appendChild(micard)
    console.log(escenas.nombre)
})