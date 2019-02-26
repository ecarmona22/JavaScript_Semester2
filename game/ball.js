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
  ctx.drawImage(truck,this.loc.x-truck.width/2,this.loc.y-truck.height/2);
};
