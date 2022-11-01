//cantidad de entradas que quiere comprar el usuario

let minusBtn = document.querySelector(".material-symbols-outlined");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

plusBtn.addEventListener("click",()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener("click",()=>{
    userInputNumber--;
    if(userInputNumber<=0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
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
        productContainer.innerHTML = '<p class="cart-empty">Gracias por su compra!</p>'
        lastValue = 0;
        cartNotificacion.innerText = lastValue;
    });
}


//funciones
function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="../imagenesCine/blackadam.jpg" alt="">
            <div>
                <p class="cart-modal__product">El precio de su pelicula es:</p>
                <p class="cart-modal__price">$500 x 3 <span>$375.00</span></p>
                <p class="cart-modal__date">fecha</p>
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
    buyProduct()
}

//Para obtener el listado de peliculas Aplico Json y me simplifica la entrega final

const cine1 = {
    pelicula1: "Avatar",
    pelicula2: "Black Adam " ,
    pelicula3: "Blade Runner 1982"
}

const cine2 = {
    pelicula1: "El Exorcista",
    pelicula2: "Halloween",
    pelicula3: "La Huerfana"
}

localStorage.setItem("movies", JSON.stringify(cine1))


function obtenerPeliculas(){

    let cine1 = JSON.parse(localStorage.getItem(cine1.pelicula1));

}

