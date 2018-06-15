function renderAll(){

  renderBG();
  renderPlayers();
}

function renderBG(){
  colorRect(0,0,cwidth,cheight,'whiteSmoke');
}

var players =[];
function renderPlayers(){
  var playerSize = 10;
  for (var i = 0; i < players.length;i++){
    colorRect(players[i].x,players[i].y,playerSize,playerSize,'red');
  }
}
