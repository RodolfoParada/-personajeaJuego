// Task 4: Prototype Pattern (6 minutos)
// Creación de objetos clonando instancias existentes.

// Prototype Pattern
class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  clone() {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
  }

  draw() {
    console.log(`Dibujando ${this.type} ${this.color}`);
  }
}

// Uso
const originalShape = new Shape('circle', 'red');
const clonedShape = originalShape.clone();

clonedShape.color = 'blue'; // Solo cambia el clon
console.log(originalShape.color); // 'red'
console.log(clonedShape.color);   // 'blue'