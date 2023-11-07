/* sophisticated_code.js */

// This code is a simulation of a car dealership system
// It includes features like adding new cars, searching for cars, calculating pricing, and generating reports

class Car {
  constructor(make, model, year, color, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
  }
}

class Dealership {
  constructor(name) {
    this.name = name;
    this.cars = [];
  }

  addCar(make, model, year, color, price) {
    const car = new Car(make, model, year, color, price);
    this.cars.push(car);
  }

  searchCar(make, model, year, color, price) {
    return this.cars.filter(car =>
      (!make || car.make.toLowerCase() === make.toLowerCase()) &&
      (!model || car.model.toLowerCase() === model.toLowerCase()) &&
      (!year || car.year === year) &&
      (!color || car.color.toLowerCase() === color.toLowerCase()) &&
      (!price || car.price <= price)
    );
  }

  calculateTotalValue() {
    return this.cars.reduce((total, car) => total + car.price, 0);
  }

  generateReport() {
    let report = `Dealership: ${this.name}\n`;
    report += `Total number of cars: ${this.cars.length}\n\n`;

    for (const car of this.cars) {
      report += `Make: ${car.make}\n`;
      report += `Model: ${car.model}\n`;
      report += `Year: ${car.year}\n`;
      report += `Color: ${car.color}\n`;
      report += `Price: ${car.price}\n`;
      report += "-----------\n";
    }

    return report;
  }
}

// Create a Dealership instance
const dealership = new Dealership("Luxury Cars");

// Add cars
dealership.addCar("BMW", "X5", 2021, "Black", 90000);
dealership.addCar("Mercedes", "E-Class", 2020, "Blue", 80000);
dealership.addCar("Audi", "A6", 2019, "White", 70000);
dealership.addCar("Lexus", "RX", 2021, "Silver", 85000);

// Search cars
const searchResults = dealership.searchCar("BMW", "", 2021, "", 90000);
console.log("Search Results:");
console.log(searchResults);

// Calculate total value
const totalValue = dealership.calculateTotalValue();
console.log("Total Value:", totalValue);

// Generate report
const report = dealership.generateReport();
console.log("Dealership Report:");
console.log(report);
