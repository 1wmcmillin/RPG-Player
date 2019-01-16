//generic stats object

let p1Name = "Billy";

let p1Stats = {
  hp: 125,
  mp: 75,
  atk: 20,
  def: 90,
  sp: 90,

}

let p2Name = "JeffreySchultz";

let p2Stats = {
  hp: 10,
  mp: 190,
  atk: 1,
  def: 1,
  

}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
