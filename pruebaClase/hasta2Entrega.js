const cine1 = {
    horario1 : "14:30 hs" ,
    horario2 : "18:00 hs" ,
    dia : "20/08",
    dia2 : "21/08",
    peliculas: "Avatar \n"+ "Black Adam \n" +"Blade Runner 1982",
}

const cine2 = {
    horario1 : "20:00 hs" ,
    horario2 : "23:00 hs" ,
    dia : "10/08",
    dia2 : "11/08",
    peliculas: "El Exorcista\n" + "Pasaje al Paraiso\n" + "La Huerfana",
}

//intente hacerlo con funcion constructora y no me lo tomaba, no se si estoy declarando algo mal//
/*
function Cine (horario1,horario2,dia,dia2){
    this.horario1 = horario1;
    this.horario2 = horario2;
    this.dia = dia;
    this.dia2 = dia2;
}

let cine1 = new Cine("14:30 hs" ,"18:00 hs" ,"20/08","21/08")
let cine2 = new Cine("20:00 hs" ,"23:00 hs" ,"10/08","11/08")*/

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
    listaPeliculas.push(pelicula.peliculas)
}


let cliente = prompt ("Ingrese su nombre: ")
let Cine = prompt("Seleccione un cine: \n - Cine Centro\n - Cine Norte").toLocaleLowerCase()

if (Cine == "cine centro"){
    alert("Estas son las peliculas en cartelera: \n"+listaPeliculas.splice(0,1))
    let pelicula = prompt ("Que pelicula desea ver: ")
    if ((pelicula == "black adam") || (pelicula == "avatar") || (pelicula == "blade runner 1982")){
        let horario = prompt("Que horario desea comprar: \n"+cine1.horario1+"\n"+cine1.horario2)
        if((horario == cine1.horario1) || (horario == cine1.horario2)){
            let dia = prompt("Que dia desea ver la pelicula: \n"+cine1.dia+"\n"+cine1.dia2)
            if((dia == cine1.dia) || (dia == cine1.dia2)){
                alert("El valor de cada entrada es de: $"+precioEntrada)
                let cantidadEntradas = prompt("Cuantas entradas desea comprar: \n SALIR")

                while ((cantidadEntradas != "salir")&&(cantidadEntradas != "SALIR")){
                    CalculoEntradas(precioEntrada,cantidadEntradas)
                    alert ("El precio total es: "+totalEntradas)
                    cantidadEntradas = prompt("Desea comprar mas entradas? : \n SALIR")
                    if ((cantidadEntradas != "salir")&&(cantidadEntradas != "SALIR")){
                        cantidadEntradas = prompt("Cuantas entradas desea comprar: \n SALIR")
                    }
                }
                alert(nombre(cliente)+" sus horarios elegidos son: \n"+"Dia: "+dia+"\n"+"Horario: "+horario+"\n"+"Pelicula: "+pelicula+"\n"+" "+"\n"+"Datos de compra: "+"\n"+"Dia de compra: "+diaCompra.toDateString()+"\n"+"Orden de compra: "+Math.random()+"\n"+"Abono de entradas: "+"$"+totalEntradas)
            }
            else{
                alert("No existe ese dia")
            }
        }
        else{
            alert("No existe ese horario")
        }
    }
    else{
        alert("No tenemos esa pelicula en cartelera")
    }
}


else if (Cine == "cine norte"){
    alert("Estas son las peliculas en cartelera: \n"+listaPeliculas.splice(1,1))
    let pelicula = prompt ("Que pelicula desea ver: ")
    if ((pelicula == "el exorcista") || (pelicula == "pasaje al paraiso") || (pelicula == "la huerfana")){
        let horario = prompt("Que horario desea comprar: \n"+cine2.horario1+"\n"+cine2.horario2)
        if((horario == cine2.horario1) || (horario == cine2.horario2)){
            let dia = prompt("Que dia desea ver la pelicula: \n"+cine2.dia+"\n"+cine2.dia2)
            if((dia == cine2.dia) || (dia == cine2.dia2)){
                alert("El valor de cada entrada es de: $"+precioEntrada)
                let cantidadEntradas = prompt("Cuantas entradas desea comprar: \n SALIR")

                //tambien podria hacer esto con un for y hacer un contador con cuantas entradas desea comprar//

                while ((cantidadEntradas != "salir")&&(cantidadEntradas != "SALIR")){
                    CalculoEntradas(precioEntrada,cantidadEntradas)
                    alert ("El precio total es: "+totalEntradas)
                    cantidadEntradas = prompt("Desea comprar mas entradas? : \n SALIR")
                    if ((cantidadEntradas != "salir")&&(cantidadEntradas != "SALIR")){
                        cantidadEntradas = prompt("Cuantas entradas desea comprar: \n SALIR")
                    }
                    //podria ingresar datos de compra con dia y fecha y precio total de la compra, agradeciendo//
                }
                alert(nombre(cliente)+" sus horarios elegidos son: \n"+"Dia: "+dia+"\n"+"Horario: "+horario+"\n"+"Pelicula: "+pelicula+"\n"+" "+"\n"+"Datos de compra: "+"\n"+"Dia de compra: "+diaCompra.toDateString()+"\n"+"Orden de compra: "+Math.random()+"\n"+"Abono de entradas: "+totalEntradas)
            }
            else{
                alert("No existe ese dia")
            }
        }
        else{
            alert("No existe ese horario")
        }
    }
    else{
        alert("No tenemos esa pelicula en cartelera")
    }
}

else{
    alert("No existe ese cine")
}


alert("Gracias vuelva prontos!")


//agregar stock de entrada con funcion de orden superior