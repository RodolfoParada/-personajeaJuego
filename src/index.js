const CharacterFactory = require('./characters/CharacterFactory');
const registerPrototypes = require('./prototypes/registerPrototypes');

const factory = new CharacterFactory();
registerPrototypes(factory);

const player1 = factory.createCharacter('warrior', { name: 'Conan' });
const player2 = factory.createCharacter('mage', { name: 'Merlin' });

player1.levelUp();

console.log(player1.name, player1.stats.hp);
console.log(player2.name, player2.stats.hp);
