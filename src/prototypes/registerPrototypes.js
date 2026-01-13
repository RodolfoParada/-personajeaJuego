const Character = require('../characters/Character');

function registerPrototypes(factory) {
  const warriorProto = new Character('Warrior', 'Fighter');
  warriorProto.stats = { hp: 150, mp: 20, attack: 15 };

  const mageProto = new Character('Mage', 'Caster');
  mageProto.stats = { hp: 80, mp: 100, attack: 5 };

  factory.registerPrototype('warrior', warriorProto);
  factory.registerPrototype('mage', mageProto);
}

module.exports = registerPrototypes;
