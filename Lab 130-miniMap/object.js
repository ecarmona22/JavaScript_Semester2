function Objects(x,y){
  this.loc = new JSVector(x,y);
  this.dir;

}
Objects.prototype.run = function () {
  var mouse = new JSVector(mouseX,mouseY);
  mouse.add(canvasLoc);
  this.dir = JSVector.subGetNew(mouse,this.loc);
  this.render();
};
Objects.prototype.render = function () {
  ctx.save();
  ctx.strokeStyle= "rgb(0,0,0,0.9)";
  ctx.fillStyle = "rgb(255,255,255,.9)";
  ctx.translate(this.loc.x,this.loc.y);
  ctx.rotate(this.dir.getDirection());
  ctx.beginPath();
  ctx.moveTo(-30,-30);
  ctx.lineTo(30,0);
  ctx.lineTo(-30,30);
  ctx.closePath();
  ctx.fill();
  ctx.restore();


};
