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
  ctx.lineTo(50,0);
  ctx.lineTo(-30,30);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx2.save();
  ctx2.lineWidth = 20;
  ctx2.strokeStyle= "rgb(0,0,0,0.9)";
  ctx2.fillStyle = "rgb(255,255,255,.9)";
  ctx2.translate(this.loc.x,this.loc.y);
  ctx2.rotate(this.dir.getDirection());
  ctx2.beginPath();
  ctx2.moveTo(-30,-30);
  ctx2.lineTo(30,0);
  ctx2.lineTo(-30,30);
  ctx2.closePath();
  ctx2.fill();
  ctx2.restore();


};
