// Definir la clase Product
class Product {
    constructor(title, description, price, discount, imageSrc) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.discount = discount;
      this.imageSrc = imageSrc;
    }
  }
  
  // Crear instancias de la clase Product
  const product1 = new Product('iPad Pro 12.9', 'Silver', '$900,000', '50% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  const product2 = new Product('iPhone 13', 'Blue', '$800,000', '20% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  const product3 = new Product('MacBook Air', 'Space Gray', '$1,200,000', '10% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  const product4 = new Product('Apple Watch Series 7', 'Green', '$400,000', '15% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  const product5 = new Product('AirPods Pro', 'White', '$250,000', '25% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  const product6 = new Product('iMac 24"', 'Pink', '$1,500,000', '5% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  
  // Array con todas las instancias de Product
  const products = [product1, product2, product3, product4, product5, product6];
  