

class Fighter {
    
    constructor (name, health, attack, defense){
        
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    
    getHitPower(attack){
        let criticalHitChance = (Math.floor(Math.random() * 2) + 1);
        let power = attack * criticalHitChance ;
        return power;
        
    }

    getBlockPower(defense){
        let dodgeChance = (Math.floor(Math.random() * 2) + 1);
        let power = defense * dodgeChance;
        return power;
    }
        
}


export default Fighter;