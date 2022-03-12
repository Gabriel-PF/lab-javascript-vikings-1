


// Iteration 1: Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}



// Iteration 2: Viking

class Viking extends Soldier{
  constructor(name, health, strength){
  super(name, health, strength)
  this.name = name
  this.health = health
  this.strength = strength
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health <=0) { 
      return `${this.name} has died in act of combat`}
      else { return `${this.name} has received ${damage} points of damage`}
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}


//Iteration 3: Saxon

class Saxon extends Soldier {

  receiveDamage(damage){
    this.health -= damage

    if(this.health <= 0) { 
      return `A Saxon has died in combat`}
    else { return `A Saxon has received ${damage} points of damage`}
  }
}


// War

// ### BONUS - Iteration 4: War 

class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    saxon.receiveDamage(viking.attack())
    this.saxonArmy.forEach((saxon) => {
      if (saxon.health <= 0) {
        this.saxonArmy.splice(0, 1)
      }
    })
    return `A Saxon has died in combat`
  }
  saxonAttack(){
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
    viking.receiveDamage(saxon.attack())
    this.vikingArmy.forEach((viking) => {
      if (viking.health <= 0) {
        this.vikingArmy.splice(0, 1)
      }
    })
    return `${viking.name} has received ${saxon.strength} points of damage`
  }
  


  // ### SUPER BONUS - Iteration 5
  
  showStatus(){
    if(!this.saxonArmy.length){ return "Vikings have won the war of the century!"}
    else if(!this.vikingArmy.length){ return "Saxons have fought for their lives and survived another day..."}
    else{return "Vikings and Saxons are still in the thick of battle."}
  }

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


