//generic stats object

let p1Name = "Billy";

let p1Stats = {
  hp: 125,
  mp: 75,
  atk: 20,
  def: 90,
  sp: 90,

}


let p1Moves = {

  falconPunch: function(){
    let baseDamage = this.stats.atk * 0.5;
    let bonus = this.stats.atk * Math.random();
    return baseDamage + bonus;

  },
  gohun: function(){
    let bonus = 2 * this.stats.atk * Math.random();
    return bonus;
  },
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp/3);
      if(tetradice < 0.10){
        return pump;

      }
      else if(tetradice < 0.30){
        return 2 * pump;
        
      }
      else if(tetradice < 0.60){
        return 3 * pump;
        
      }
      else{
        return 4 * pump;
        
      }
    }
  },
  roundhouseKick: function(){
    let baseDamage = this.stats.atk * 0.5;
    let tetradice = Math.random();
      if(tetradice < 0.33){
        return baseDamage;

      }
      else if(tetradice < 0.66){
        return 2 * baseDamage;
        
      }
      else{
        return 3 * baseDamage;
        
      }

    }

}


let p1Battle = {

  attack: function(mv){
    if(mv==1){
      return this.moves.falconPunch();

    }
    else if(mv == 2){
      return this.moves.gohun();
    }
    else if(mv == 3){
      return this.moves.hydroPump();
    }
    else if(mv == 4){
      return this.moves.roundhouseKick();
    }


  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.defend;
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp < 0){
      this.stats.hp = 0;

    }
  
  }

}

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  battle: p1Battle
}









let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk * 0.75;
    let bonus = 0.5 * this.stats.atk * Math.random();
    return baseDamage+bonus;
  },
  charge: function(){
    let pain = Math.random()
    let bonus = 0.5 * this.stats.atk * Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk / 4;
      return this.stats.atk + bonus;
    }
    else{
      //no self damage
      return this.stats.atk+bonus;

    }
  },
  falconPunch: function(){
    let baseDamage = this.stats.atk * 0.5;
    let bonus = this.stats.atk * Math.random();
    return baseDamage + bonus;

  },
  gohun: function(){
    let bonus = 2 * this.stats.atk * Math.random();
    return bonus;
  },

  roundhouseKick: function(){
    let baseDamage = this.stats.atk * 0.5;
    let tetradice = Math.random();
      if(tetradice < 0.33){
        return baseDamage;

      }
      else if(tetradice < 0.66){
        return 2 * baseDamage;
        
      }
      else{
        return 3 * baseDamage;
        
      }

    }

  
}


let magic = {
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random();
      let pump = Math.ceil(this.stats.sp/3);
      if(tetradice < 0.10){
        return pump;

      }
      else if(tetradice < 0.30){
        return 2 * pump;
        
      }
      else if(tetradice < 0.60){
        return 3 * pump;
        
      }
      else{
        return 4 * pump;
        
      }
    }
  },

  hyperBeam : function(){
    if(this.stats.mp >= 20){
      this.stats.mp = this.stats.mp - 20;
      let beam = this.stats.sp * 1.5;
        return beam;
    }
    
  }

}

 


let p2Name = "JeffreySchultz";

let p2Stats = {
  hp: 1,
  mp: 199,
  atk: 1,
  def: 1,
  sp: 198,
  

}

let p2Moves = {
  charge: function(){
    let pain = Math.random()
    let bonus = 0.5 * this.stats.atk * Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk / 4;
      return this.stats.atk + bonus;
    }
    else{
      //no self damage
      return this.stats.atk+bonus;

    }
  },
  razorPunch: function(){
    let baseDamage = this.stats.atk * 0.75;
    let bonus = 0.5 * this.stats.atk * Math.random();
    return baseDamage+bonus;
  },

  hyperBeam : function(){
    if(this.stats.mp >= 20){
      this.stats.mp = this.stats.mp - 20;
      let beam = this.stats.sp * 1.5;
        return beam;
    }
    
  },

  gohun: function(){
    let bonus = 2 * this.stats.atk * Math.random();
    return bonus;
  }

}


let p2Battle = {
  attack: function(mv){
    if(mv==1){
      return this.moves.charge();

    }
    else if(mv == 2){
      return this.moves.razorPunch();
    }
    else if(mv == 3){
      return this.moves.hyperBeam();
    }
    else if(mv == 4){
      return this.moves.gohun();
    }


  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.defend;
    this.stats.hp = this.stats.hp - rawDamage;
    if(this.stats.hp < 0){
      this.stats.hp = 0;

    }
  
  }

}



let player2 = {
  name: p2Name,
  stats: p2Stats,
  moves: p2Moves,
  battle: p2Battle
}