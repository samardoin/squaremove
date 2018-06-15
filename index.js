var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var SpeckFile = require('./server/Speck.js')

users=[];
connections=[];

server.listen(process.env.PORT || 8080);//server.listen(process.env.PORT || 3000);
console.log("server running");

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html')
  app.use(express.static('client'))
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  //add the new socket as a speck
  var s = new SpeckFile.Speck();
  s.id = socket.id;
  s.x=Math.floor(Math.random() * 300);
  s.y=Math.floor(Math.random() * 300);
  SpeckFile.specks.add(s);
  SpeckFile.specks.logSpecks();

  //loop through all specks
  for (var i = 0; i < SpeckFile.specks.getLength();i++){
    var s = SpeckFile.specks.getWIndex(i);
    console.log(s.id+"\tx:" + s.x + "\ty:" + s.y)
  }

  socket.on('disconnect', function(data){
    console.log('Disconnected: %s sockets connected',connections.length);
    SpeckFile.specks.removeID(socket.id);
    SpeckFile.specks.logSpecks();
  });

  socket.on('connection_successful', function(data){
    socket.join('update_room');
  });

  socket.on('player_input',function(data){
    SpeckFile.specks.getWID(socket.id).updateInput(data);
  });

});

async function update(){
  var framesPerSecond=50;
  setInterval(function(){
    //move players
    var distance = 3;
    var pl=[];
    for (var i =0; i < SpeckFile.specks.getLength();i++){
      var s = SpeckFile.specks.getWIndex(i);
      if (s.up){s.y-=distance;}
      else if (s.down){s.y+=distance;}
      if (s.left){s.x-=distance;}
      else if (s.right){s.x+=distance;}
      pl.push(s.toCoordinate());
    }

    io.to('update_room').emit('game_loop',pl);
  },1000/framesPerSecond);
}
//update();
