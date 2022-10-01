/*-----------------------------Simulador de promedio de notas---------------------------*/

let alumnos = prompt("La nota de cuantos alumnos deseas cargar: ")

for(let i= 0; i <alumnos; i+=1){

let nombreUsuario= prompt("Ingrese el nombre de los alumnos: ")
let nota1= prompt("Ingrese nota de primer parcial: ")
let nota2= prompt("Ingrese nota de segundo parcial: ")

function solicitarNombre(){
    alert("El alumno "+nombreUsuario)
}

if(nota1 >=11 || nota2>=11){
    alert("Error")
}
else if(nota1 <0 || nota2<0){
    alert("Error")
}
else if(nota1 >=7 && nota2>=7){
    solicitarNombre()
    alert("promociono la materia")
}
else if(nota1 >=4 && nota2>=4){
    solicitarNombre()
    alert("aprobo la materia")
}
else {
    solicitarNombre()
    alert("debe recuperar la materia")
}
}
alert("FIN")
