var database;
var gameState = 0
var playerCount = 0
var form,player, game





function setup(){
  database = firebase.database();
  console.log(database);
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  
    drawSprites();
  
}


 
