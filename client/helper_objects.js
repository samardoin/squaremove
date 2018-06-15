var myId= "null"

var Coordinate = function(){
  this.x=0;
  this.y=0;
  this.set=function(xi,yi){
    this.x=xi;
    this.y=yi;
  }
}

var Inputter = function(){
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
