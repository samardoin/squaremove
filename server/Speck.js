exports.Coordinate = function(){
  this.x=0;
  this.y=0;
  this.set=function(xi,yi){
    this.x=xi;
    this.y=yi;
  }
}

exports.Inputter = function(){
  this.left=false;
  this.right=false;
  this.up=false;
  this.down=false;
  this.set=function(l,r,u,d){
    this.left=l;
    this.right=r;
    this.up = u;
    this.down =d;
  }
}
exports.Speck = function(){
  this.id ='';
  this.x=0;
  this.y=0;
  this.up=false;
  this.down =false;
  this.left=false;
  this.right=false;

  this.toCoordinate=function(){
    var c =new exports.Coordinate();
    c.set(this.x,this.y);
    return c;
  }

  this.toInputter=function(){
    var n = new Inputter();
    n.set(this.left,this.right,this.up,this.down)
    return n;
  }

  this.updateInput=function(l_inputter){
    this.up=l_inputter.up;
    this.down=l_inputter.down;
    this.left=l_inputter.left;
    this.right=l_inputter.right;
  }
}

//specks is a helper object that allows the easy manipluation of the speckList array
exports.specks = new Object();
exports.specks.speckList=[];
exports.specks.speckListHelper=[];
exports.specks.add=function(speckToAdd){
  exports.specks.speckList[speckToAdd.id]=speckToAdd;
  exports.specks.speckListHelper.push(speckToAdd.id);
  console.log('Speck added')
}
exports.specks.getWID=function(wid){
  return exports.specks.speckList[wid];
}
exports.specks.getWIndex=function(index){
  return exports.specks.speckList[exports.specks.speckListHelper[index]];
}
exports.specks.getLength=function(){
  return exports.specks.speckListHelper.length;
}
exports.specks.removeIndex=function(index){
  delete exports.specks.speckList[speckListHelper(index)];
  exports.specks.speckListHelper.splice(index,1);
}
exports.specks.removeID=function(id){
  exports.specks.speckListHelper.splice(exports.specks.speckListHelper.indexOf(id),1);
  delete exports.specks.speckList[id];
}
exports.specks.logSpecks=function(){
  console.log("----------------Loging Specks---------------")
  for (var i = 0; i < exports.specks.getLength();i++){
    console.log(exports.specks.speckList[exports.specks.speckListHelper[i]]);
  }
  console.log("---------------------END--------------------")
}
