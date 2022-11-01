//2 productos -> Mostrar productos -> Compra ?
// Que cantidad ? -> Mostrar precio total de compra


/*--------------------------------------------------------CLASE VARIABLES---------------------------------------------------------*/

/*let producto1 = "mesa"
let precioProducto1 = 200

let producto2 = "silla"
let precioProducto2 = 100

let compra = prompt("Ingrese SI, si quiere comprar: "+ producto1 +" y "+ producto2)

let cantidad1= prompt("Que cantidad de: "+producto1+" desea comprar")
let cantidad2= prompt("Que cantidad de: "+producto2+" desea comprar")

total1= cantidad1*precioProducto1
total2= cantidad2*precioProducto2

totalFinal= total1+total2

alert("El precio total de su compra es: "+totalFinal) 

alert("Gracias por su visita!")


/*-----------------------------------------------------------CLASE IF-----------------------------------------------------------*/

/*Ejemplo 1*/

/*
let producto1 = "mesa"
let precioProducto1 = 200

let producto2 = "silla"
let precioProducto2 = 100

let compra = prompt("Ingrese SI, si quiere comprar: "+ producto1 +" y "+ producto2)

if (compra == "SI"){
    let cantidad1= prompt("Que cantidad de: "+producto1+" desea comprar")
    let cantidad2= prompt("Que cantidad de: "+producto2+" desea comprar")

    total1= cantidad1*precioProducto1
    total2= cantidad2*precioProducto2

    totalFinal= total1+total2

    alert("El precio total de su compra es: "+totalFinal) 
}

else{
    alert("Gracias por su visita!")
}
*/

/*Ejemplo 2*/
/*
let producto1 = "mesa"
let precioProducto1 = 200

let producto2 = "silla"
let precioProducto2 = 100

let producto3 = "lampara"
let precioProducto3 = 50

let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara")

if (productoCompra == "Mesa"){
    let cantidadMesa= prompt("Que cantidad de: "+producto1+" desea comprar")
    precioTotal= cantidadMesa*precioProducto1
    alert("El precio total es: "+precioTotal)
}

else if (productoCompra == "Silla"){
    let cantidadSilla= prompt("Que cantidad de: "+producto2+" desea comprar")
    precioTotal= cantidadSilla*precioProducto2
    alert("El precio total es: "+precioTotal)
}

else if (productoCompra == "Lampara"){
    let cantidadLampara= prompt("Que cantidad de: "+producto3+" desea comprar")
    precioTotal= cantidadLampara*precioProducto3
    alert("El precio total es: "+precioTotal)
}

else{
    alert("No tenemos ese producto a la venta!")
}
*/


/*Ejemplo 3*/
/*
let producto1 = "mesa"
let precioProducto1 = 200

let producto2 = "silla"
let precioProducto2 = 100

let producto3 = "lampara"
let precioProducto3 = 50

let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara")

precioTotal=0

if (productoCompra == "Mesa"){
    let cantidadMesa= prompt("Que cantidad de: "+producto1+" desea comprar")
    precioTotal= cantidadMesa*precioProducto1
}

else if (productoCompra == "Silla"){
    let cantidadSilla= prompt("Que cantidad de: "+producto2+" desea comprar")
    precioTotal= cantidadSilla*precioProducto2
}

else if (productoCompra == "Lampara"){
    let cantidadLampara= prompt("Que cantidad de: "+producto3+" desea comprar")
    precioTotal= cantidadLampara*precioProducto3
}

else{
    alert("No tenemos ese producto a la venta!")
}

if (precioTotal !=0){
    alert("El precio total del producto es: "+ precioTotal)
}
*/


/*El  alert precio total puede ir por fuera del if, asignadole una variable precioTotal=0 por fuera del if, si hacemos esto, despues del else, el alert va a figurar como valor 0 (minuto 1:44), 
para que no pase esto se lo encierra en un nuevo if con valor !=0*/


/* si queremos comprar mas de 2 productos habria que hacer un if dentro de otro if, para eso es mejor hacerlo con while(clase 3)*/


/*Ejemplo 4*/
/*
let producto1 = "mesa"
let precioProducto1 = 200
let stockProducto1 = 10

let producto2 = "silla"
let precioProducto2 = 100
let stockProducto2 = 20

let producto3 = "lampara"
let precioProducto3 = 50
let stockProducto3 = 50

let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara")

let precioTotal=0

if (productoCompra.toLocaleLowerCase() == "mesa"){
    let cantidadMesa= prompt("Que cantidad de "+producto1+" desea comprar")
    if (cantidadMesa <= stockProducto1){
        precioTotal= cantidadMesa*precioProducto1
    }
    else{
        alert("El stock maximo de ese producto es: "+stockProducto1)
    }
}

else if (productoCompra == "Silla"){
    let cantidadSilla= prompt("Que cantidad de: "+producto2+" desea comprar")
    precioTotal= cantidadSilla*precioProducto2
}

else if (productoCompra == "Lampara"){
    let cantidadLampara= prompt("Que cantidad de: "+producto3+" desea comprar")
    precioTotal= cantidadLampara*precioProducto3
}

else{
    alert("No tenemos ese producto a la venta!")
}

if (precioTotal !=0){
    alert("El precio total del producto es: "+ precioTotal)
}
 */


/*-----------------------------------------------CLASE for, while, do while-----------------------------------------------------------*/

/*for (let i = 1 ; i <= 10; i =  i + 1){
    alert("El numero es: "+ i)
}*/

//sentencia break para romper en 5 y sentencia continue para saltear el 5 y sigue hasta el 10//


//EJERCICIO 2//

/*let numero = 1

while(numero <= 10){
    alert(numero)
    numero = numero + 1
} */

//EJERCICIO 3//
/*
let entrada = prompt("1- Cuentas\n2 - Cajero\n3 - Contador\n ESC - salir")

while(entrada != "ESC"){
    alert("Usted ingreso: "+entrada)
    let entrada = prompt("1- Cuentas\n2 - Cajero\n3 - Contador\n ESC - salir")
}


/*

EJERCICIO 4 PRUEBA MIA 

let entrada 

do {
    entrada = prompt("1- Cuentas\n2 - Cajero\n3 - Contador\n ESC - salir")
}while(entrada != "ESC"){
    alert("Usted ingreso: "+entrada)
    
}*/

//EJERCICIO 5//


//ejercicio con for//
/*
let producto1 = "mesa"
let precioProducto1 = 200
let stockProducto1 = 10

let producto2 = "silla"
let precioProducto2 = 100
let stockProducto2 = 20

let producto3 = "lampara"
let precioProducto3 = 50
let stockProducto3 = 50



alert ("Estos son los productos: \n - Mesa\n - Silla\n - Lampara\n")
let cantidadproduc = prompt ("Ingrese que cantidad de productos desea comprar: ")

let precioTotal=0

for (let i=0; i < cantidadproduc; i = i+1){

    let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC para salir")

    if (productoCompra.toLocaleLowerCase() == "mesa"){
        let cantidadMesa= prompt("Que cantidad de "+producto1+" desea comprar")
        if (cantidadMesa <= stockProducto1){
            precioTotal= precioTotal + (cantidadMesa*precioProducto1)
        }
        else{
            alert("El stock maximo de ese producto es: "+stockProducto1)
        }
    }

    else if (productoCompra == "Silla"){
        let cantidadSilla= prompt("Que cantidad de: "+producto2+" desea comprar")
        precioTotal= precioTotal + (cantidadSilla*precioProducto2)
    }

    else if (productoCompra == "Lampara"){
        let cantidadLampara= prompt("Que cantidad de: "+producto3+" desea comprar")
        precioTotal= cantidadLampara*precioProducto3
    }

    else{
        alert("No tenemos ese producto a la venta!")
    }
}

if (precioTotal !=0){
        alert("El precio total del producto es: "+ precioTotal)
} 
*/


//ejercicio con while//
/*
let producto1 = "mesa"
let precioProducto1 = 200
let stockProducto1 = 10

let producto2 = "silla"
let precioProducto2 = 100
let stockProducto2 = 20

let producto3 = "lampara"
let precioProducto3 = 50
let stockProducto3 = 50


alert ("Estos son los productos: \n - Mesa\n - Silla\n - Lampara\n")
let opcion = prompt ("Ingrese que es lo que quiere comprar o ESC para salir")

let precioTotal=0

while(opcion !="ESC"){

    if (opcion.toLocaleLowerCase() == "mesa"){
        let cantidadMesa= prompt("Que cantidad de "+producto1+" desea comprar")
        if (cantidadMesa <= stockProducto1){
            precioTotal= precioTotal + (cantidadMesa*precioProducto1)
        }
        else{
            alert("El stock maximo de ese producto es: "+stockProducto1)
        }
    }

    else if (opcion == "Silla"){
        let cantidadSilla= prompt("Que cantidad de: "+producto2+" desea comprar")
        precioTotal= precioTotal + (cantidadSilla*precioProducto2)
    }

    else if (productoCompra == "Lampara"){
        let cantidadLampara= prompt("Que cantidad de: "+producto3+" desea comprar")
        precioTotal= cantidadLampara*precioProducto3
    }

    else{
        alert("No tenemos ese producto a la venta!")
    }

    opcion = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC para salir")
}


alert("El precio total del producto es: "+ precioTotal)
*/


/*-----------------------------------------------CLASE FUNTION-----------------------------------------------------------*/

/*EJEMPLO 1
function bienvenida(nombre, apellido){
    alert("Bienvenido: "+apellido+" "+nombre) 
}

bienvenida("Coder","House")
bienvenida("Axel","Estrada")
bienvenida("Giovanna","Nocetti")

//el funtion designa los valores y el alert la posicion de los valores// 
*/

//EJEMPLOS 2//
/*
function suma (a, b){
    a + b
}

suma(5, 10)
*/
//en este caso no el valor del resultado no lo estamos viendo de ninguna forma//
//para verlo tendriamos que hacer esto: //
/*
function suma (a, b){
    let resultdado = a + b
    console.log(resultado);
}
suma(5, 10)

//o//

function suma (a, b){
    console.log(a+b);
}
suma(5, 10)

//en estos casos el valor de la variable resultado no se puede volver a usar por fuera del funtion, para que se pueda usar hacemos el ejercicio 3 (return)//
*/

//EJERCICIO 3//
/*
function suma (a, b){
    return a+b
}

let resultado = suma(5, 10)
let ejemplo = prompt("igrese algo:")

//esto me permite usar la varible resultado en otra parte del codigo por ejemplo://
console.log(resultado); tengo que pensar al return como un prompt
*/

//EJERCICIO 4//

//el switch funciona como un if y else, a cada operacion le asigna un valor//
//siempre que haya un return el breack se anula porque el return cumple la misma funcion de apagar//
/*
function calculador (primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case ("+"):
            return primerNumero + segundoNumero
            break;
        case ("-"):
            return primerNumero - segundoNumero
            break;
        case ("*"):
            return primerNumero * segundoNumero
            break;
        case ("/"):
            return primerNumero / segundoNumero
            break;
        default:
            return 0;
            break;
    }
}

alert (calculador(5,10,"+"))
*/

//se podria aplicar de esta forma//

/*
function calculadora (primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case ("+"):
            return primerNumero + segundoNumero
            break;
        case ("-"):
            return primerNumero - segundoNumero
            break;
        case ("*"):
            return primerNumero * segundoNumero
            break;
        case ("/"):
            return primerNumero / segundoNumero
            break;
        default:
            return 0;
            break;
    }
}

let numeroA = parseInt(prompt("Ingrese un numero: "))
let numeroB = parseInt(prompt("Ingrese otro numero: "))
let operacion = prompt("Ingrese una operacion: ")

alert (calculadora (numeroA, numeroB, operacion))
*/

//EJERCICIO 5//
/*
let producto1 = "mesa"
let precioProducto1 = 200
let stockProducto1 = 10

let producto2 = "silla"
let precioProducto2 = 100
let stockProducto2 = 20

let producto3 = "lampara"
let precioProducto3 = 50
let stockProducto3 = 50

let precioTotal=0

function precio(cantidad,precio){
    precioTotal +=(cantidad*precio)
}

function CalculoStock(cantidad,stock,precio){
    if (cantidad <= stock){
        precio(cantidad,precio)
    }
    else{
        alert("El stock maximo de ese producto es: "+stock)
    }
}

alert ("Estos son los productos: \n - Mesa\n - Silla\n - Lampara\n")
let cantidadproduc = prompt ("Ingrese que cantidad de productos desea comprar: ")


for (let i=0; i < cantidadproduc; i = i+1){

    let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC para salir")

    if (productoCompra.toLocaleLowerCase() == "mesa"){
        let cantidadMesa= prompt("Que cantidad de "+producto1+" desea comprar")
        CalculoStock(cantidadMesa,stockProducto1,precioProducto1)
    }

    else if (productoCompra == "Silla"){
        let cantidadSilla= prompt("Que cantidad de: "+producto2+" desea comprar")
        CalculoStock(cantidadSilla,stockProducto2,precioProducto2)
    }

    else if (productoCompra == "Lampara"){
        let cantidadLampara= prompt("Que cantidad de: "+producto3+" desea comprar")
        CalculoStock(cantidadLampara,stockProducto3,precioProducto3)
    }

    else{
        alert("No tenemos ese producto a la venta!")
    }
}

if (precioTotal !=0){
        alert("El precio total del producto es: "+ precioTotal)
} 
*/


/*-------------------------------------------------OBJETOS-----------------------------------------------------------*/
/*
let producto1 = "mesa"
let precioProducto1 = 200
let stockProducto1 = 10

let producto2 = "silla"
let precioProducto2 = 100
let stockProducto2 = 20

let producto3 = "lampara"
let precioProducto3 = 50
let stockProducto3 = 50
*/
/*
function Producto (producto,precio,stock){
    this.producto = producto;
    this.precio = precio;
    this.stock= stock;
}

let producto1 = new Producto ("mesa",200,10)
let producto2 = new Producto ("silla",100,20)
let producto3 = new Producto ("lampara",50,50)

let precioTotal=0

function precio(cantidad,precio){
    precioTotal +=(cantidad*precio)
}

function CalculoStock(cantidad,stock,precio){
    if (cantidad <= stock){
        precio(cantidad,precio)
    }
    else{
        alert("El stock maximo de ese producto es: "+stock)
    }
}

alert ("Estos son los productos: \n - Mesa\n - Silla\n - Lampara\n")
let cantidadproduc = prompt ("Ingrese que cantidad de productos desea comprar: ")


for (let i=0; i < cantidadproduc; i = i+1){

    let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC para salir")

    if (productoCompra.toLocaleLowerCase() == "mesa"){
        let cantidadMesa= prompt("Que cantidad de "+producto1.producto+" desea comprar")
        CalculoStock(cantidadMesa,producto1.stock,producto1.precio)
    }

    else if (productoCompra == "Silla"){
        let cantidadSilla= prompt("Que cantidad de: "+producto2.producto+" desea comprar")
        CalculoStock(cantidadSilla,producto2.stock,producto2.precio)
    }

    else if (productoCompra == "Lampara"){
        let cantidadLampara= prompt("Que cantidad de: "+producto3.producto+" desea comprar")
        CalculoStock(cantidadLampara,producto3.stock,producto3.precio)
    }

    else{
        alert("No tenemos ese producto a la venta!")
    }
}

if (precioTotal !=0){
        alert("El precio total del producto es: "+ precioTotal)
} 
*/
//----------------------------------------------------ARRAYS------------------------------------------//

/*
//                      0  1     3
let listaDeNumeros = [10,20,"Coder"]

/*let segundoElemento = listaDeNumeros[1]

console.log(segundoElemento);*/
/*
for (let i=0 ;i < 3; i++){
    console.log(listaDeNumeros [i]);

-----otro ejemplo------
let listaNumeros = [15,20,"coder",30]
for (let i=0 ;i < listaDeNumeros.Length; i++){
    console.log(listaDeNumeros [i]);
    /por si cambio la cantidad de la lista de elementos
}*/

//puedo hacer esto con la lista de peliculas, explica en minuto 15:20


//---------otro ejemplo --------

//si quiero agregar a mi lista lo que ingrese el usuario entonces:
/*
let listaNumeros = [15,20,"coder",30]
let nombre = prompt("Ingrese un nombre: ")

listaNumeros.push(nombre) //si se quiere posicionar primero al valor ingresado se usa ".unshift"

alert("hola "+listaNumeros) */

//---------otro ejemplo --------

// si quiero sacar el ultimo elemento:
/*
let listaNumeros = [15,20,"coder",30]
listaNumeros.pop() //no se pone nada dentro porque estoy sacando el ultimo valor
listaNumeros.shift()//esto es para sacar el primero

//ademas se puede sacar el primer o ultimo valor y guardarlo en otra variable ejemplo:

let primerElemento = listaNumeros.shift() //estamos guardando el 15 en "primer elemento"
*/

//---------otro ejemplo --------
//.join se encarga de alinear todos los elementos de una lista
/*
let listaNumeros = [15,20,"coder",30]
console.log(listaNumeros.join(", "));
*/

//.concat se encarga de unir 2 o mas arrays ejemplo:
/*
const perros = ["jamil", "citric"]
const gatos = ["polenta"]
const mascotas = perros.concat(gatos) //si quiero mas arrays al lado de gatos pongo coma y la otra variable y asi sucesivamente
console.log(mascotas);
//["jamil", "citric", "polenta"]
*/

//---------otro ejemplo --------

//con .splice el primer numero entre parentesis designa donde arranca a elimar y el siguiente cuantos mas va a eliminar (1,2) (saca elementos de una array)
//con el .slice hace una copia, pero con el segundo elemento no toma el tercero ejemplo  .slice(1,3) pole jamil citric polenta munch, tomaria jamil y citric porque polenta no se incluye (es al pedo usarlo)
// con el .include podemos ver si algo esta dentro o no de un array (se puede usar para volver a agregar algo en un carrito de compra)
//.reverse me invierte el orden que tiene un array (si aplicamos reverse perdemos el orden original que teniamos antes)

//ejemplo practico 1:07

//------- ejercitacion ---------------
/*
function Producto (producto,precio,stock){
    this.producto = producto;
    this.precio = precio;
    this.stock= stock;
}

let producto1 = new Producto ("mesa",200,10)
let producto2 = new Producto ("silla",100,20)
let producto3 = new Producto ("lampara",50,50)

let listaProductos = [producto1,producto2,producto3]

let listaNombres = []

for(const prod of listaProductos){
    if(prod.stock > 0){
        listaNombres.push(prod.producto)
    }
}

let precioTotal=0

function precio(cantidad,precio){
    precioTotal +=(cantidad*precio)
}

function CalculoStock(cantidad,stock,precio){
    if (cantidad <= stock){
        precio(cantidad,precio)
    }
    else{
        alert("El stock maximo de ese producto es: "+stock)
    }
}


alert ("Estos son los productos: \n"+listaNombres.join("\n"))
let cantidadproduc = prompt ("Ingrese que cantidad de productos desea comprar: ")


for (let i=0; i < cantidadproduc; i = i+1){

    let productoCompra = prompt("Ingrese que producto desea comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC para salir")

    if (productoCompra.toLocaleLowerCase() == "mesa"){
        let cantidadMesa= prompt("Que cantidad de "+producto1.producto+" desea comprar")
        CalculoStock(cantidadMesa,producto1.stock,producto1.precio)
    }

    else if (productoCompra == "Silla"){
        let cantidadSilla= prompt("Que cantidad de: "+producto2.producto+" desea comprar")
        CalculoStock(cantidadSilla,producto2.stock,producto2.precio)
    }

    else if (productoCompra == "Lampara"){
        let cantidadLampara= prompt("Que cantidad de: "+producto3.producto+" desea comprar")
        CalculoStock(cantidadLampara,producto3.stock,producto3.precio)
    }

    else{
        alert("No tenemos ese producto a la venta!")
    }
}

if (precioTotal !=0){
        alert("El precio total del producto es: "+ precioTotal)
} 
*/


//--------------------------------- FUNCIONES DE ORDEN SUPERIOR ---------------------------------------//
/*
function poCadaUno(array,fn){
    for(const elemento of array){
        fn(elemento)     //elemento seria lo que contiene nuestro array
    }
}

porCadaUno([1,3,4,5], console.log) */

//-------- otro ejemplo ----------
/*
//concepto de abstraccion es no saber lo que pasa en las funciones de orden superior
let total = 0
function acumular(num){
    total += num
}

function poCadaUno(array,fn){
    for(const elemento of array){
        fn(elemento)     
    }
}

porCadaUno([1,3,4,5], acumular) //el total seria 13
*/

// ------ otro ejemplo --------

//.forEach es una funcion de orden superior que funcionar como contador del ejemplo anterior pero ahorrandote mucha parte de codigo
// minuto 30 ejemplo .forEach
/*
function poCadaUno(array,fn){
    for(const elemento of array){
        fn(elemento)     
    }
}

//esto es igual a lo de arriba y lo de arriba es lo que se abstrae
let numeros = [1,3,4,5]
numeros.forEach((numero) => console.log (numero));
*/

// ------ otro ejemplo --------

//.find busca un valor o string dentro del array y lo guarda dentro de una variable, sirve por ejemplo para cuando tipeamos algo en la barra de navegacion nos devuelva con .find lo que tipeamos (a tener en cuenta es que solo nos devuelve el primer elemento que encuentre)


// ------ otro ejemplo --------
//.filter es igual a .find pero a diferencia de este ultimo, .filter nos devuelve todos los elementos que cumplen con la condicion, no solo el primero (sirve por ejemplo para un filtro de precios o barra de navegacion)
// explicacion minuto 45
/*
function Producto (producto,precio,stock){
    this.producto = producto;
    this.precio = precio;
    this.stock= stock;
}

let producto1 = new Producto ("mesa",200,10)
let producto2 = new Producto ("silla",100,20)
let producto3 = new Producto ("lampara",50,50)

let listaProductos = [producto1,producto2,producto3]

let listaNombres = listaProductos.filter((prod) => prod.stock > 0) //reemplazamos la linea 679 de codigo por .filter
*/


// ------ otro ejemplo --------
//.some sirve para ver si existe un elemento o no pero no nos devuelve nada, es parecido a find pero sin devolver algo, es mas simple

// ------ otro ejemplo --------
//.map es como filter, pero filter devuelvo todo lo que haya en ese elemento, en cambio con .map podemos seleccionar que necesesitamos de ese elemento, por ejemplo el nombre o el precio
//otro ejemplo es actualizacion de precio, nos sirve generar nuevos arrays pero con alguna transformacion que nosotros determinamos que le pasamos por parametro

/*
let listaProductos = [producto1,producto2,producto3]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)
let listaNombres = listaProductosConStock.map((prod) => prod.nombres)
*/

// ------ otro ejemplo --------
//.reduce (se usa mucho) sirve como un acumulador para el total, osea compre zapatillas remeras pantalones entonces uso reduce para sumar esos 3 elementos

// ------ otro ejemplo --------
//.sort reordena el contenido de un array, normalmente se usa en numeros



//---------------------------------------------- DOOM -------------------------------------------------//

// para vincular html y JS se hace atraves de let variable = document.getElementById ("nombre de id = variable")
//minuto 28:00 explica como escribir texto a traves de JS escribiendo .innerText a la varible que queramos modificar

/*
let nombre = prompt ("Ingrese su nombre")

let catalogo = document.getElementById("catalogo")

catalogo.innerText = "Bienvenido" + nombre*/

//hasta aca con esto ya podemos reemplazar todos los alert por elementos en pantalla minuto 30:00


//-------- otro ejemplo---------

//con .innerHTML puedo agregar y sacar un elemento dentro de otro, osea modifico los div que estan dentro de un div (representa todo el texto que tenga adentro un elemento, asi que vamos a poder agregar o modificar texto)
// con .className puedo agregar otra clase a una clase (podemos agregar o quitar clases a un elemento) (sirve para modificar un elemento especifico dentro de un elemento a diferencia del get que modifica todos)

//card[0].className = "nuevaCard"

//esto sirve para las clases y luego deberiamos poner .nuevaCard en el CSS con los valores que queremos o colores. Siempre que trabaje con className voy a tener que trabajar con un array


//-------- otro ejemplo---------
/*
let catalogo = document.getElementById("catalogo")

let card = document.createElement("div")
card.className = "card"
card.innerHTML = "<h2>Mesa</h2><p>Precio: $100</p>"

catalogo.append(card)*/

//estoy agarrando el elemento padre que es catalago, y creando a traves del createElement un elemento en este caso div, las cards van a ir dentro del elemento padre catalogo y con el append estoy metiendo al card dentro del div, el inner html es para modificar agregar lo que hayd dentro del div

/*
let catalogo = document.getElementById("catalogo")

function render(lista){
    catalogo.innerHTML= " "

    for(const prod of lista){

    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p>`

    catalogo.append(card)
}
}
render(listaDeProductosConStock)
*/

//con lo visto aca podemos generar un producto y para realizar mas necesitas un for (minuto 1:11) y reemplazar las comillas de los productos por alt+96 :

//card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p>` //

//hora 1:17 explica como hacerlo con una imagen 


//------categoria---
// a partir del 1:24 enseña como filtrar por categoria a traves del promp osea lo que pide el usuario



//------------------------------------------EVENTOS----------------------------------------

//opcion 1 addeventlistener
//explicacion minuto 10
/*
let boton = document.getElementById ("primerBoton")
boton.addEventListener("click", mostrarPorConsola)

function mostrarPorConsola(){
    console.log("hola");
}*/

//minuto 18 explica las 2 formas de funcion para el eventlistener, si la funcion es larga conviene hacerla por fuera

//----- otro ejemplo mouse
//la opcion 2 es .onlick (.on seguido de algo)

//despues explican otros eventos del mouse como desplazar un objeto manteniendo el click
/*
let nombreIngresado = prompt("Ingrese su nombre: ")

function mostrarPorConsola(nombre){
    console.log("Bienvenido "+nombre);
}

let boton = document.getElementById ("primerBoton")
boton.addEventListener("click", function(){mostrarPorConsola(nombreIngresado)}) //esto nos sirve para que no se ejecute automaticamente la funcion y solo lo haga cuando hacemos click
*/
//hasta aca eventos del mouse


//----- ejemplo de usos teclado----
//esta el evento click y el change y el evento input (el change agrega un cambio cadavez que se da enter osea pasa a otra ventana y el input es por cada vez que se agrega un caracter)

/*
let input1 = document.getElementById ("nombre")
boton.addEventListener("change", function(){mostrarPorConsola(input1.value)})
*/

//otro ejemplo
/*
let input1 = document.getElementById ("nombre")

let nombreIngresado = " "

input1.addEventListener("change",()=>{nombreIngresado=input1.value;
                                        input1.value = " "}) //esto sirve para que una vez que nosotros ya guardamos el inputvalue en una varible automaticamente me lo limpie y deje libre el input

//se le agrega esta parte que esta arriba,
function mostrarPorConsola(nombre){
    console.log("Bienvenido "+nombre);
}

let boton = document.getElementById ("primerBoton")
boton.addEventListener("click", function(){mostrarPorConsola(nombreIngresado)}) //se vuelve al ejemplo de arriba pero sumandole la utilizacion de un change, uno sirve para un boton y el ultimo para un input
*/

//-------- evento submit-------
//me trae todos los input dentro de un formulario y me los envia como uno solo, uno de los usos mas comunes es validar el formulario
//para usar submit si o si tenemos que estar dentro de un form

//despues explico el submithandler no se entendio mucho 1:20

let categoriaElegida = " "

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    if (filtroActual.length == 0){
        console.log("esta categoria no existe")
    }
    render(filtroActual)
}

let botonTodos = document.getElementById("todos")
botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)})



















/*
let horario1Cine1 = "14:30 hs" 
let horario2Cine1 = "20:00 hs" 
let diaCine1 = "20/08"
let dia2Cine1 = "21/08"

let horario1Cine2 = "20:00 hs" 
let horario2Cine2 = "23:00 hs" 
let diaCine2 = "20/08"
let dia2Cine2 = "21/08"
*/

//podria poner el while por fuera de los if y agregar un break a cada else asi no muestra la parte de compra y pasa directamente al alert gracias vuelva prontos ?//

//nombre de usuario y contraseña (se puede usar la propiedad "length" para contar los digitos de un string o contraseña ingresada(ej requisito 10 numeros)//


