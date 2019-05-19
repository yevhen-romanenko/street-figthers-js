class Fighter {
    
    constructor (name, health, attack, defense){
        const MIN_NUMBER = 1;
        const MAX_NUMBER = 2;
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    
    getRandom(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    
    getHitPower(){
        return power = attack * getRandom(MIN_NUMBER, MAX_NUMBER);
    }

    getBlockPower(){
        return power = defense * getRandom(MIN_NUMBER, MAX_NUMBER);
    }

}

export default Fighter;