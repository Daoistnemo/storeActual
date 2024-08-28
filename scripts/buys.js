// Función para finalizar la compra
function finalizePurchase() {
    // Borrar productos del carrito
    localStorage.removeItem("cart");
  
    // Actualizar la vista del carrito y el total
    updateCartView();
    updateTotalView();
  
  }
  
  // Obtener el botón "Finaliza tu compra" y añadir el listener de clic
  document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.getElementById("cart-btn");
  
    if (buyButton) { //Si el boton existe se le agrega el evento click que llama a la funcion FinalizePuchase
      buyButton.addEventListener("click", finalizePurchase);
    } else {
      console.error('Elemento con id "cart-btn" no encontrado.'); //Esto es por si no encuentra el boton
    }
  });
  