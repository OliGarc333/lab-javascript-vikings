// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;

  }

     attack() {
      return this.strength
     };
    
    receiveDamage(damage) {
     this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {

  constructor (name, health, strength) {
    

    super(health, strength);
    this.name = name;

    
  }

  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
    }
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!"
    
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {

    this.health -= damage;

    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }

    if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {

  constructor() {

    this.vikingArmy = [];
    this.saxonArmy = [ ];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let damageViking = randomViking.strength;
    let damage = randomSaxon.receiveDamage(damageViking);
    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon !== randomSaxon);
    }
    return damage;
  }
  saxonAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let damageSaxon = randomSaxon.strength;

    let damage = randomViking.receiveDamage(damageSaxon);
    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((viking) => viking !== randomViking);
    }
    return damage;
  }
  showStatus() {

    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
