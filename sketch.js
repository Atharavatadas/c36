var gameState = 0;
var playerCount,database;
var form,game,player,allPlayers;


function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game()
  game.getState()
  game.start()
 
}

function draw(){
  background("white");
  if(playerCount === 4) {
    game.update(1)
  }
  if(gameState === 1) {
      clear ()
      game.play()
  }
}