// Task 1: Factory Method Pattern (8 minutos)
// Creación de objetos sin especificar la clase exacta.

// ❌ Código sin patrón - creación directa
class Car {
  constructor(model) {
    this.model = model;
  }
}

class Bike {
  constructor(model) {
    this.model = model;
  }
}

// Creación dispersa por el código
const car = new Car('Toyota');
const bike = new Bike('Yamaha');

// ✅ Factory Method - centraliza creación
class VehicleFactory {
  static createVehicle(type, model) {
    switch (type) {
      case 'car':
        return new Car(model);
      case 'bike':
        return new Bike(model);
      default:
        throw new Error('Tipo de vehículo desconocido');
    }
  }
}

// Uso centralizado
const vehicle1 = VehicleFactory.createVehicle('car', 'Toyota');
const vehicle2 = VehicleFactory.createVehicle('bike', 'Yamaha');
// Factory Method con Subclasses
// Factory Method Pattern
class Creator {
  factoryMethod() {
    throw new Error('Implementar en subclase');
  }

  createProduct() {
    const product = this.factoryMethod();
    return product;
  }
}

class CarCreator extends Creator {
  factoryMethod() {
    return new Car('Toyota Camry');
  }
}

class BikeCreator extends Creator {
  factoryMethod() {
    return new Bike('Honda CBR');
  }
}

// Uso
const carCreator = new CarCreator();
const car = carCreator.createProduct();
