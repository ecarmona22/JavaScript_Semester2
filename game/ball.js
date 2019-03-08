function Ball(){
  this.loc = new JSVector(0,0);
  this.vel;
  this.acc;
  this.rad = 50;
}
Ball.prototype.run = function (){
  this.render();
}

Ball.prototype.render = function () {
  if(vehicle){
  ctx.drawImage(vehicle,this.loc.x-vehicle.width/2,this.loc.y-vehicle.height/2);
  }
  if (turn === true){
    
  }
};
