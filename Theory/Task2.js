// Task 2: Singleton Pattern (8 minutos)
// Asegura una única instancia de una clase.

// ❌ Código problemático - múltiples instancias
class DatabaseConnection {
  constructor() {
    this.connection = this.connect();
  }

  connect() {
    // Simula conexión costosa
    console.log('Conectando a base de datos...');
    return { status: 'connected' };
  }
}

// Problema: múltiples conexiones
const db1 = new DatabaseConnection();
const db2 = new DatabaseConnection(); // Nueva conexión

// ✅ Singleton - única instancia
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }

    this.connection = this.connect();
    DatabaseConnection.instance = this;
  }

  connect() {
    console.log('Conectando a base de datos...');
    return { status: 'connected' };
  }

  static getInstance() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}

// Uso correcto
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true - misma instancia
Singleton con ES6 Modules
// database.js - ES6 modules son singletons por defecto
let connection = null;

const connect = () => {
  if (!connection) {
    connection = { status: 'connected', timestamp: Date.now() };
    console.log('Conectando a base de datos...');
  }
  return connection;
};

const disconnect = () => {
  connection = null;
  console.log('Desconectado');
};

export { connect, disconnect };