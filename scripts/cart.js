// Función para cargar productos del carrito desde localStorage
function loadCartProducts() {
  const cartItems = localStorage.getItem("cart");
  return cartItems ? JSON.parse(cartItems) : [];
}

const defaultImagesById = {
  1: "./assets/default-ipad.jpg",
  2: "./assets/default-iphone.webp",
  3: "./assets/default-macbook.webp",
  4: "./assets/default-watch.webp",
  5: "./assets/default-ipods.webp",
  6: "./assets/default-imac.webp",
  // Añadir más id si es necesario
};

function createCartCard(product) {
  const defaultImage = defaultImagesById[product.id] || "./assets/default-image.jpg";
  const imageSrc = product.imageSrc || defaultImage;



  return `
      <div class="product-card">
          <img class="product-img" src="${imageSrc}" alt="${product.title}" />
          <div class="product-info">
              <span class="product-title">${product.title}</span>
             <span class="product-color">${product.color || 'Color no disponible'}</span> 
              <div class="product-description">
                  <span class="product-label">Descripción</span>
                  <p>${product.description || 'Descripción no disponible'}</p>
              </div>
              <div class="product-price-block">
                  <span class="product-price">${product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</span>
                  <span class="product-discount">${product.discount}</span>
              </div>
              <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
              </div>
              <div class="Quantity">
          <span class="Quantity-product">Cantidad: </span>
                  <input type="number" name="quantity" min="1" id="${product.id}" value="${product.quantity}" onchange="changeQuantity(event)">
              </div>
          </div>
      </div>
  `;
}

// Función para actualizar la vista de productos en el carrito
function updateCartView() {
  const cartProducts = loadCartProducts();
  const cartProductsContainer = document.getElementById("cartproducts");

  if (cartProductsContainer) {
    const productCardsHTML = cartProducts.map(createCartCard).join("");
    cartProductsContainer.innerHTML = productCardsHTML;
  } else {
    console.error('Elemento con id "cart-products-container" no encontrado.');
  }
}

// Llama a la función para actualizar la vista cuando la página se carga
document.addEventListener("DOMContentLoaded", () => {
  updateCartView();
});

function changeQuantity(event) {
  const input = event.target;
  const productId = parseInt(input.id, 10); // El 10 es la base numerica, para que no tome Hexadecimal u Octal. 
  const newQuantity = parseInt(input.value, 10);

  // Validar la cantidad
  if (isNaN(newQuantity) || newQuantity < 1) { //Si La nueva cantidad esta vacia o es menor que 1 pondra el valor a 1.
    input.value = 1; // Restablecer al mínimo permitido
    return;
  }

  // Obtener productos del carrito
  let cartProducts = loadCartProducts();

  // Actualizar la cantidad del producto en el carrito
  cartProducts = cartProducts.map(product => 
    product.id === productId ? { ...product, quantity: newQuantity } : product //Operador ternario, si El id del input es el mismo del producto, buscara
  ); // La cantidad y la cambiara por la Cantidad nueva, sino mantendra el producto sin cambios.

  // Guardar los productos actualizados en localStorage
  localStorage.setItem("cart", JSON.stringify(cartProducts)); 

  // Actualizar la vista del carrito
  updateCartView();
  updateTotalView();
}

