// total.js

// Función para crear el template del total
function createTotalTemplate(arrayOfProducts) {
  let total = 0;
  arrayOfProducts.forEach(product => {
      total += product.price * (product.quantity || 1);
  });

  return `
      <h4 class="total-title">Resumen del pedido</h4>
      <p class="total-p">Total: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
      <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
      <button id="buy-btn" type="button">COMPRAR</button>
  `;
}

// Función para actualizar la vista del total
function updateTotalView() {
  const cartProducts = loadCartProducts();
  console.log('Updating total view with cart products:', cartProducts);

  const totalContainer = document.getElementById("total-container");

  if (totalContainer) {
      const totalHTML = createTotalTemplate(cartProducts);
      totalContainer.innerHTML = totalHTML;
      console.log('Total view updated.');

      // Eliminar y agregar el event listener para el botón "COMPRAR"
      const buyButton = document.getElementById("buy-btn");
      if (buyButton) {
          buyButton.removeEventListener("click", finalizePurchase);
          buyButton.addEventListener("click", finalizePurchase);
          console.log('Buy button event listener added.');
      }
  } else {
      console.error('Elemento con id "total-container" no encontrado.');
  }
}

// Función para actualizar la vista del carrito
function updateCartView() {
  const cartProducts = loadCartProducts();
  const cartProductsContainer = document.getElementById("cartproducts");

  if (cartProductsContainer) {
      const productCardsHTML = cartProducts.map(createCartCard).join("");
      cartProductsContainer.innerHTML = productCardsHTML;
      console.log('Cart view updated.');
  } else {
      console.error('Elemento con id "cartproducts" no encontrado.');
  }
}

// Función para finalizar la compra
function finalizePurchase() {
  alert('Proceso de compra finalizado.');
  // Aquí puedes agregar la lógica para finalizar la compra
}

// Función para cambiar la cantidad
function changeQuantity(event) {
  const input = event.target;
  const productId = parseInt(input.id, 10);
  const newQuantity = parseInt(input.value, 10);

  if (isNaN(newQuantity) || newQuantity < 1) {
      input.value = 1;
      return;
  }

  let cartProducts = loadCartProducts();
  cartProducts = cartProducts.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
  );

  localStorage.setItem("cart", JSON.stringify(cartProducts));
  updateCartView(); // Actualiza la vista del carrito
  updateTotalView(); // Actualiza la vista del total
}

// Llama a la función para actualizar la vista cuando la página se carga
document.addEventListener("DOMContentLoaded", () => {
  updateTotalView();
});
