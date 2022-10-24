const cine1 = {
    nombre : "Cine Centro",
    horario1 : "14:30 hs" ,
    horario2 : "18:00 hs" ,
    dia : "20/08",
    dia2 : "21/08",
    peliculas: "Avatar 2 \n"+ "Black Adam \n" +"Blade Runner",
}

const cine2 = {
    horario1 : "20:00 hs" ,
    horario2 : "23:00 hs" ,
    dia : "10/08",
    dia2 : "11/08",
    peliculas: "El Exorcista\n" + "Pasaje al Paraiso\n" + "La Huerfana",
}

let precioEntrada = 400
let totalEntradas =0
const diaCompra=  new Date ()

function nombre(a){
    return a
}

function CalculoEntradas(precio,cantidad){
    totalEntradas += (precio*cantidad)
}


let listaCines = [cine1,cine2]

let listaPeliculas = []

for(const pelicula of listaCines){
    listaPeliculas.push(pelicula.peliculas1)
    listaPeliculas.push(pelicula.peliculas2)
    listaPeliculas.push(pelicula.peliculas3)
}

let listaComplejos = []

for(const complejo of listaCines){
    listaComplejos.push(complejo.nombre)
}


let cartelera = document.getElementById("cartelera")
for (const prod of listaPeliculas){

let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<h2>${cine1.peliculas}</h2><p>Precio: $${precioEntrada}</p>`

    cartelera.append(card)
}

function render(lista){
    catalogo.innerHTML = ""

    for (const prod of lista){

        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `<h2>${cine1.nombre}</h2>`
    
        cartelera.append(card)
    }
}
render(listaComplejos)

let peliculaElegida = ''
let seleccion = document.getElementById ("seleccion")
boton.addEventListener("change", ()=>{peliculaElegida = seleccion.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

function filtrado(){
    let filtroActual = listaCines.filter((prod)=>prod.cat == peliculaElegida)
    if (filtroActual.length == 0){
        console.log("No existe ese complejo")
    }
    render(listaComplejos)
}
