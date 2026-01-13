// Sistema de creación de personajes de juego:

// Factory + Builder + Prototype combinados
class CharacterFactory {
  constructor() {
    this.prototypes = {};
  }

  registerPrototype(type, prototype) {
    this.prototypes[type] = prototype;
  }

  createCharacter(type, customizations = {}) {
    const prototype = this.prototypes[type];
    if (!prototype) throw new Error('Tipo no registrado');

    const character = prototype.clone();

    // Aplicar customizations
    Object.assign(character, customizations);

    return character;
  }
}

class Character {
  constructor(name, classType, level = 1) {
    this.name = name;
    this.classType = classType;
    this.level = level;
    this.stats = { hp: 100, mp: 50, attack: 10 };
  }

  clone() {
    const cloned = Object.create(Object.getPrototypeOf(this));
    cloned.stats = { ...this.stats };
    return cloned;
  }

  levelUp() {
    this.level++;
    this.stats.hp += 20;
    this.stats.attack += 2;
  }
}

// Configuración
const factory = new CharacterFactory();

// Crear prototipos
const warriorProto = new Character('Warrior', 'Fighter');
warriorProto.stats = { hp: 150, mp: 20, attack: 15 };

const mageProto = new Character('Mage', 'Caster');
mageProto.stats = { hp: 80, mp: 100, attack: 5 };

factory.registerPrototype('warrior', warriorProto);
factory.registerPrototype('mage', mageProto);

// Crear personajes
const player1 = factory.createCharacter('warrior', { name: 'Conan' });
const player2 = factory.createCharacter('mage', { name: 'Merlin' });

player1.levelUp();
console.log(player1.stats.hp); // 170
console.log(player2.stats.hp); // 80 (no afectado)
// Requerimientos:
// # No se requieren dependencias especiales
// # Los patrones se implementan con JavaScript vanilla

// # Para testing de patrones
// npm install --save-dev jest