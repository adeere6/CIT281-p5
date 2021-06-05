module.exports = class Monster {
    constructor({
      monsterName = "Unknown",
      minimumLife = 0,
      currentLife = 100,
    }) {
        this.monsterName = monsterName
        this.minimumLife = minimumLife
        this.currentLife = currentLife
        this.isAlive = (currentLife >= minimumLife) ?  true : false
    }


updateLife (lifeChangeAmount) {
    this.currentLife = (this.currentLife + lifeChangeAmount) > 0 ? this.currentLife + lifeChangeAmount : 0

    this.isAlive = this.currentLife > this.minimumLife ? true : false
    
    //console.log(this.currentLife)
    
}


randomLifeDrain (minimumLifeDrain, maximumLifeDrain) {
    if(minimumLifeDrain < maximumLifeDrain){
    let lifeDrain = this.getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1)
    this.updateLife(lifeDrain)
    console.log(`${this.monsterName} random power drain of ${lifeDrain}`)
    }
}

getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

}



