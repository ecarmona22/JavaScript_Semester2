function Objects(locx,locy){
  this.location = new JSVector(locx,locy);
  this.direction;
}

Objects.prototype.run = function () {
  var mousetemp = new JSVector(mouseX,mouseY);
  mousetemp.add(canvasLoc);
  this.direction = JSVector.subGetNew(mousetemp,this.location);
  this.render();
};
Objects.prototype.render = function () {
  ctx.save();
  ctx.strokeStyle = "rgb(0,0,0,0.9)";
  ctx.fillStyle = "rgb(255,255,255,0.9)";
  ctx.translate(this.location.x,this.location.y);
  ctx.rotate(this.direction.getDirection());
  ctx.beginPath();
  ctx.moveTo(-30,-30);
  ctx.lineTo(30,0);
  ctx.lineTo(-30,30);
  ctx.closePath();
  ctx.fill();
  ctx.restore();


};
