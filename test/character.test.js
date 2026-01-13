const CharacterFactory = require('../src/characters/CharacterFactory');
const registerPrototypes = require('../src/prototypes/registerPrototypes');

describe('Character System', () => {
  let factory;

  beforeEach(() => {
    factory = new CharacterFactory();
    registerPrototypes(factory);
  });

  test('creates independent characters from prototype', () => {
    const c1 = factory.createCharacter('warrior', { name: 'Conan' });
    const c2 = factory.createCharacter('warrior', { name: 'Thor' });

    c1.levelUp();

    expect(c1.stats.hp).toBe(170);
    expect(c2.stats.hp).toBe(150);
  });
});
