import View from './view';
import FighterView from './fighterView';
import { fighterService } from './services/fightersService';
import Fighter from './fighter';
import fight from './fight';

class FightersView extends View {
    constructor(fighters) {
      super();
      
      this.handleClick = this.handleFighterClick.bind(this);
      this.createFighters(fighters);
      
      
      const firstFighter = new Fighter('Ryu',  45,  4, 3);
      const secondFighter = new Fighter("Guile", 45, 4, 3);
      
      try{
        fight(firstFighter,secondFighter);
      }
      catch (error) {
        console.warn(error);
      }

      
    }
  
    fightersDetailsMap = new Map();
  
    createFighters(fighters) {
      const fighterElements = fighters.map(fighter => {
        const fighterView = new FighterView(fighter, this.handleClick);
        return fighterView.element;
      });
  
      this.element = this.createElement({ tagName: 'div', className: 'fighters' });
      this.element.append(...fighterElements);
    }

    async handleFighterClick(event, fighter) {
           
      if (!this.fightersDetailsMap.has(fighter._id)){
        const fighterInfoId = await fighterService.getFighterDetails(fighter._id);
        
        this.fightersDetailsMap.set(fighter._id, fighterInfoId);
        console.log('Added info into Details Map');
      }  else {
        console.log ('Object already in Details map..')
      }
      
      console.log("take info from Details Map");
      let fighterDetails = this.fightersDetailsMap.get(fighter._id);
      console.log (fighterDetails);

      const fighterExample = new Fighter(fighterDetails.name, fighterDetails.health, fighterDetails.attack, fighterDetails.defense);
      //console.log (fighterExample);
      console.log(this.fightersDetailsMap);
      
      document.getElementById("fighterInfo").innerHTML = "Name: " + fighterExample.name + "<br>" + "Health: " + fighterExample.health + "<br>" +
      "Attack: "+ fighterExample.attack + "<br>" + "Defense: " + fighterExample.defense;
      //document.getElementById("fighterInfo").contentEditable = true;
   

      // default block
      //  this.fightersDetailsMap.set(fighter._id, fighter);
      //  console.log('clicked');
      // get from map or load info and add to fightersMap
      // show modal with fighter info
      // allow to edit health and power in this modal
    }
      
    
    
}

export default FightersView;