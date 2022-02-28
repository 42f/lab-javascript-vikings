// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
  isAlive() {
    return this.health > 0;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return this.isAlive()
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    return this.isAlive()
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(enrollingViking) {
    this.vikingArmy.push(enrollingViking)
  }
  addSaxon(enrollingSaxon) {
    this.saxonArmy.push(enrollingSaxon)
  }
  vikingAttack() {
    if (this.saxonArmy.length && this.vikingArmy.length) {
      const attackerIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const victimeIndex = Math.floor(Math.random() * this.saxonArmy.length);

      const attackStrength = this.vikingArmy[attackerIndex].attack();

      const attackResult = this.saxonArmy[victimeIndex].receiveDamage(attackStrength);
      if (this.saxonArmy[victimeIndex].isAlive() === false) {
        this.saxonArmy.splice(victimeIndex, 1);
      }
      return attackResult;
    }
  }
  saxonAttack() {
    if (this.saxonArmy.length && this.vikingArmy.length) {
      const attackerIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const victimeIndex = Math.floor(Math.random() * this.vikingArmy.length);

      const attackStrength = this.saxonArmy[attackerIndex].attack();

      const attackResult = this.vikingArmy[victimeIndex].receiveDamage(attackStrength);
      if (this.vikingArmy[victimeIndex].isAlive() === false) {
        this.vikingArmy.splice(victimeIndex, 1);
      }
      return attackResult;
    }
  }
  genericAttack(attackerArmy, victimArmy) {
    if (attackerArmy.length && victimArmy.length) {
      const attackerIndex = Math.floor(Math.random() * attackerArmy.length);
      const victimeIndex = Math.floor(Math.random() * victimArmy.length);

      const attackStrength = attackerArmy[attackerIndex].attack();

      const attackResult = victimArmy[victimeIndex].receiveDamage(attackStrength);
      if (victimArmy[victimeIndex].isAlive() === false) {
        victimArmy.splice(victimeIndex, 1);
      }
      return attackResult;
    }
  }
  showStatus() {
    if (this.vikingArmy.length && this.saxonArmy.length) {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
    return this.vikingArmy.length
        ? `Vikings have won the war of the century!`
        : `Saxons have fought for their lives and survived another day...`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
