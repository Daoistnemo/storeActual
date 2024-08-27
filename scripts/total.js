// total.js

// Función para crear el template del total
function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach(product => {
      total += product.price * (product.quantity || 1); // Suponiendo que 'quantity' puede ser undefined
    });
  
    return `
        <h4 class="total-title">Resumen del pedido</h4>
        <p class="total-p">Total: ${total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
         <div class="product-tax-policy"> Incluye impuesto País y percepción AFIP </div>
        <button id="cart-btn" type="button">COMPRAR</button>
    `;
  }
  
  // Función para actualizar la vista del total
  function updateTotalView() {
    const cartProducts = loadCartProducts();
    const totalContainer = document.getElementById("total");
  
    if (totalContainer) {
      const totalHTML = createTotalTemplate(cartProducts);
      totalContainer.innerHTML = totalHTML;
    } else {
      console.error('Elemento con id "total" no encontrado.');
    }
  }
  
  // Llama a la función para actualizar la vista cuando la página se carga
  document.addEventListener("DOMContentLoaded", () => {
    updateTotalView();
  });
  