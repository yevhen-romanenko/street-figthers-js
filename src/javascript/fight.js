import Fighter from './fighter';

function fight(enemy, defender) {
    console.log ("say hi FIGHTERS!!!");
    console.log ("1st FIGHTER is: "+enemy.name);
    console.log ("2nd FIGHTER is : "+defender.name);
    console.log ("------------------------------------");


    Fighter.prototype.attackFighter = function(defender){
        //
        let attack = this.getHitPower(this.attack);
        //console.log ("hit attack = "+attack);
        let defence = defender.getBlockPower(defender.defense);
        //console.log ("defence block = "+defence);


        let damage = attack-defence;
        if (damage < 0) {
            damage = 0;
            console.log('dodge!');
        }
        
        defender.health -= damage;
        
        console.log (this.name + " does " + damage + " damage to " + defender.name);
        //console.log (defender.name+' Health:'+ defender.health);
        //console.log (this.name+' Healt:'+ this.health);

    }
    
    let round = 1;
    while (defender.health && enemy.health) {
        oneRound(round, defender, enemy);
        round++;
        console.log('');
      }

      function oneRound(round, fighter1, fighter2) {
        // 
        console.log('-----Begin Round ' + round + ' -----');
        fighter1.attackFighter(fighter2);
        if (fighter2.health <= 0)
        {
            endGame(fighter1,fighter2);
        }
        else if (fighter1.health <= 0)
        {
            endGame(fighter2, fighter1);
        }
        fighter2.attackFighter(fighter1);
        if (fighter2.health <= 0)
        {
            endGame(fighter1,fighter2);
        }
        else if (fighter1.health <= 0)
        {
            endGame(fighter2, fighter1);
        }
        console.log(fighter1.name + ' health: ' + fighter1.health);
        console.log(fighter2.name + ' health: ' + fighter2.health);
      }
      
      function endGame(winner, loser) {
        console.log('\n======== GAME OVER ========');
        console.log(winner.name + " wins against " + loser.name + " with " + winner.health + " health remaining!");
        //process.exit(0);
      }
    

    //console.log (firstFighter);
    //console.log (secondFighter);

}


export default fight;