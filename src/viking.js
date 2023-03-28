// Soldier
class Soldier {
    constructor (health, strenght){
        this.health = health;
        this.strenght = strenght;
    }
}
attack (){
return this.strenght;
}

receiveDamage(damage){
    this.health = this.health - damage;
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strenght){
        super (health, strenght);
        this.name = name.argument;
    }

receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }

    battleCry() {
        return `Odin Owns You All!`;
      }
}
    

// Saxon
class Saxon extends Soldier {
    constructor (health, strenght){
    super (health, strenght);}

ReceiveDamage(damage) {
    this.health = this.health - damage;}
    
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }


// War
class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
  
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
  
    vikingAttack() {
      const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
      const saxonSoldier = this.saxonArmy[randomSaxon];
  
      const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
      const vikingSoldier = this.vikingArmy[randomViking];
  
      const result = saxonSoldier.receiveDamage(vikingSoldier.attack());
  
     
      if (saxonSoldier.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
      }
  
      return result;
    }
}