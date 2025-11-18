const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".listacapitulos")

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

console.log(comic.escenas)