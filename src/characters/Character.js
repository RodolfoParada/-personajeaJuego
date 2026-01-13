class Character {
  constructor(name, classType, level = 1) {
    this.name = name;
    this.classType = classType;
    this.level = level;
    this.stats = { hp: 100, mp: 50, attack: 10 };
  }

  clone() {
    const cloned = Object.create(Object.getPrototypeOf(this));
    Object.assign(cloned, this);
    cloned.stats = { ...this.stats }; // evitar referencias compartidas
    return cloned;
  }

  levelUp() {
    this.level++;
    this.stats.hp += 20;
    this.stats.attack += 2;
  }
}

module.exports = Character;
