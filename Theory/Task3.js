// Task 3: Builder Pattern (8 minutos)
// Construcción paso a paso de objetos complejos.

// ❌ Código sin patrón - constructor complejo
class Pizza {
  constructor(size, cheese, pepperoni, mushrooms, onions) {
    this.size = size;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.mushrooms = mushrooms;
    this.onions = onions;
  }
}

// Uso confuso
const pizza = new Pizza('large', true, false, true, false);

// ✅ Builder Pattern - construcción clara
class PizzaBuilder {
  constructor() {
    this.size = 'medium';
    this.cheese = false;
    this.pepperoni = false;
    this.mushrooms = false;
    this.onions = false;
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addMushrooms() {
    this.mushrooms = true;
    return this;
  }

  addOnions() {
    this.onions = true;
    return this;
  }

  build() {
    return new Pizza(
      this.size,
      this.cheese,
      this.pepperoni,
      this.mushrooms,
      this.onions
    );
  }
}

// Uso fluido y claro
const pizza = new PizzaBuilder()
  .setSize('large')
  .addCheese()
  .addMushrooms()
  .addOnions()
  .build();