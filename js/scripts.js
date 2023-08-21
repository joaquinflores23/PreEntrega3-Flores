// Funcion Agregar al Carrito

const addToCart = (id) => {
    const item = productos.find((producto) => producto.id === id)
    carrito.push(item)
    console.log(carrito)
    localStorage.setItem("CARRITO", JSON.stringify(carrito))
    
}

// Seleccionar Contenedor

const containerProd = document.querySelector('#productos-container')

// Funcion para renderizar productos

const generarTarjetas = array => {
    const data =  array.reduce(( acc, element ) => {
    //Operador si descriccion es null 
    const replaceNullDescription = element.descripcion || "No hay descriccion";
    // Operador si imamgen es null
    const ifImgNotFound = element.imagen || "../assets/img/icon-image-not-found.jpeg";   
    return acc + `
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src=${ifImgNotFound} alt=${element.producto} />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h3 class="fw-bolder">${element.producto} ${element.marca}</h3>

                    <h5>Marca</h5>
                    <p>${element.marca}</p>

                    <h5>Categoria</h5>
                    <p>${element.categoria}</p>

                    <h5>Descripcion</h5>
                    <p>${replaceNullDescription}</p>

                    <!-- Product price-->
                    <p class="fw-bold">$ ${element.precio}</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button class="btn btn-outline-dark mt-auto" id="add-cart-prod-${element.id}" onclick="addToCart(${element.id})" href="#">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    </div>

`
},'')

containerProd.innerHTML = data
}

// Llamo funcion con array de productos como argumento

generarTarjetas(productos)

// Crear arrey vacio de Carrito

let carrito = [];


