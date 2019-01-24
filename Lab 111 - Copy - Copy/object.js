function Object(locX,locY,){
  this.loc = new JSVector(locX,locY);
  this.direction;
}
Object.prototype.run = function () {
  var mouse = new JSVector(mouseX, mouseY);
  mouse.add(canvasLoc);
  this.direction = JSVector.subGetNew(mouse,this.loc);
  this.render();
};
Object.prototype.render = function () {
  ctx.save();
  ctx.strokeStyle = "rgb(0,0,0,.9)";
  ctx.fillStyle = "rgb(255,255,255,.9)";
  ctx.translate(this.loc.x,this.loc.y);
  ctx.rotate(this.direction.getDirection());
  ctx.beginPath();
  ctx.moveTo(-20,-20);
  ctx.lineTo(30,0);
  ctx.lineTo(-20,20);
  ctx.closePath();
  ctx.fill()
  ctx.restore();
};
