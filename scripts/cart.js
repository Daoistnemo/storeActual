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
  // Obtén la imagen predeterminada basada en el id del producto
  const defaultImage = defaultImagesById[product.id] || "./assets/default-image.jpg";
  const imageSrc = product.imageSrc || defaultImage;

  return `
  
      <div class="product-card">
              <img class="product-img" src="${imageSrc}" alt="${product.title}" />
              <div class="product-info">
                  <span class="product-title">${product.title}</span>
                  <span class="product-color">${(product.colors || []).join(", ")}</span>
                        <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>${product.description}</p>
      </div>
                  <div class="product-price-block">
                      <span class="product-price">${product.price.toLocaleString(('es-AR', { style: 'currency', currency: 'ARS' }))}</span>
                      <span class="product-discount">${product.discount}</span>
                  </div>
                  <div class="product-tax-policy">
                      Incluye impuesto País y percepción AFIP
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
    console.error('Elemento con id "cartproducts" no encontrado.');
  }
}

// Llama a la función para actualizar la vista cuando la página se carga
document.addEventListener("DOMContentLoaded", () => {
  updateCartView();
});
