// Filename: complexCode.js
// Description: This code demonstrates a complex system for handling product sales and inventory management.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell(amount) {
    if (amount <= this.quantity) {
      this.quantity -= amount;
      console.log(`${amount} units of ${this.name} sold.`);
    } else {
      console.error(`Insufficient quantity of ${this.name}.`);
    }
  }

  restock(amount) {
    this.quantity += amount;
    console.log(`${amount} units of ${this.name} restocked. Current quantity: ${this.quantity}.`);
  }
}

class Order {
  constructor() {
    this.products = [];
  }

  addProduct(product, quantity) {
    this.products.push({ product, quantity });
    console.log(`${quantity} units of ${product.name} added to the order.`);
  }

  removeProduct(product) {
    const index = this.products.findIndex(item => item.product === product);
    if (index !== -1) {
      const quantity = this.products[index].quantity;
      this.products.splice(index, 1);
      console.log(`${quantity} units of ${product.name} removed from the order.`);
    } else {
      console.error(`${product.name} is not in the order.`);
    }
  }

  getTotal() {
    let total = 0;
    for (const { product, quantity } of this.products) {
      total += product.price * quantity;
    }
    return total;
  }

  printInvoice() {
    console.log('--- Invoice ---');
    for (const { product, quantity } of this.products) {
      console.log(`${product.name} x ${quantity} = ${product.price * quantity}`);
    }
    console.log('---------------');
    console.log(`Total: ${this.getTotal()}`);
  }
}

// Create some products
const product1 = new Product('iPhone', 999, 10);
const product2 = new Product('Samsung Galaxy', 799, 5);
const product3 = new Product('Google Pixel', 699, 7);

// Create a new order
const order = new Order();

// Add products to the order
order.addProduct(product1, 2);
order.addProduct(product2, 1);
order.addProduct(product3, 3);

// Remove a product from the order
order.removeProduct(product2);

// Sell some products
product1.sell(1);
product3.sell(4);

// Restock a product
product1.restock(5);

// Print the invoice
order.printInvoice();