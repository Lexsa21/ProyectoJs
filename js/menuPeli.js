//Arrays

const cine1 = [
    {
        horario1: "14:00",
        horario2: "17:30",
    }
]

const cine2 = [
    {
        horario1: "20:00",
        horario2: "23:00"
    }
]


//cantidad de entradas que quiere comprar el usuario

let minusBtn = document.querySelector(".material-symbols-outlined");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

plusBtn.addEventListener("click",()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener("click",()=>{
    userInputNumber--;

    userInputNumber <=0? userInputNumber = 0 : 0;
    userInput.value = userInputNumber;
});


//fecha elegida

let fechaEntrada1 = document.querySelector(".fechaEntrada1")
let fechaEntrada2 = document.querySelector(".fechaEntrada2")
let fechaElegida = 0


fechaEntrada1.addEventListener("click",()=>{
    fechaElegida = "21/11"
    fechaEntrada1.style.backgroundColor = "rgb(255, 156, 74)";
    fechaEntrada1.style.color = "#fff";
})
fechaEntrada2.addEventListener("click",()=>{
    fechaElegida = "10/11"
    fechaEntrada2.style.backgroundColor = "rgb(255, 156, 74)";
    fechaEntrada2.style.color = "#fff";
})


//horario elegido pero con inclusion de arrays

let time1 = document.querySelector(".time1")
let time2 = document.querySelector(".time2")
let horarioElegido = 0

cine1.forEach((time) =>{
    let horario = document.querySelector(".time1")
    horario.innerText = time.horario1


    time1.addEventListener("click",()=>{
        time1.style.backgroundColor = "rgb(255, 156, 74)";
        time1.style.color = "#fff";
        horarioElegido = time.horario1
    })
})

cine1.forEach((time) =>{
    let horario = document.querySelector(".time2")
    horario.innerText = time.horario2


    time2.addEventListener("click",()=>{
        time2.style.backgroundColor = "rgb(255, 156, 74)";
        time2.style.color = "#fff";
        horarioElegido = time.horario2
    })
})


//agregar el total de entradas al carrito cuando se presione agregar

const addToCartBtn = document.querySelector(".details__button")
let cartNotificacion = document.querySelector(".header__cart--notificacion")
let lastValue = parseInt(cartNotificacion.innerText)

addToCartBtn.addEventListener("click",()=>{

    lastValue = lastValue + userInputNumber;

    cartNotificacion.innerText= userInputNumber;
    cartNotificacion.style.display="block"; 
    drawProductInModal();
});


//mostar modal con detalle de carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(".cart-modal__chekout-container")

cartIconBtn.addEventListener("click",()=>{
    cartModal.style.display= "block"; //intente con un toggle para que aparezca y desaparezca cuando soy click pero no funciono

    if(lastValue == 0){
        drawProductInModal();
    }
})


//borrar contenido de carrito de compras
    function deleteProduct(){
    const deletePorductBtn = document.querySelector(".cart-modal__delete");
    deletePorductBtn.addEventListener("click",()=>{
        productContainer.innerHTML = '<p class="cart-empty">Tu carro esta vacío</p>'
        lastValue = 0;
        cartNotificacion.innerText = lastValue;
    });
}


//comprar
function buyProduct(){
    const buyProductBtn = document.querySelector(".cart-modal__chekout");
    buyProductBtn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Gracias!',
            text: 'Tu compra fue realizada con exito.',
            icon: 'success',
            confirmButtonText: 'Salir',
            timer: 3000,
        })
    });
}


//funciones
function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            
            <div>
                <p class="cart-modal__product">El precio de su pelicula es:</p>
                <p class="cart-modal__price"><span></span></p>
                <p class="cart-modal__date"></p>
                <p class="cart-modal__hours"></p>
            </div>
            <div class="cart-modal__delete">
            <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <button class="cart-modal__chekout">chekout</button>`
    deleteProduct()
    let priceModal = document.querySelector(".cart-modal__price");
    priceModal.innerHTML=`$500 x ${lastValue} <span>$${lastValue*500}.00</span>`
    let dateModal = document.querySelector(".cart-modal__date");
    dateModal.innerHTML=`Fecha: ${fechaElegida}`
    let hoursModal = document.querySelector(".cart-modal__hours");
    hoursModal.innerHTML=`Horario: ${horarioElegido}`
    buyProduct()
}