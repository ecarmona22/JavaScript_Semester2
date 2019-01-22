function Objects(locX, locY,mousex,mousey){
this.loc = new JSVector(locX,locY);
this.direction;
this.rad = 60;



}

Objects.prototype.run = function(){
  var mouse = new JSVector(mousex,mousey);
  mouse.add(canvasLoc);


this.direction = JSVector.subGetNew(mouse,this.loc);
this.render();
}


Objects.prototype.render = function () {
  ctx.save();
  ctx.strokeStyle = 'rgba(0,0,0,.9)';
  ctx.fillStyle = 'rgba(250,250,250,.9)';
  ctx.translate(this.loc.x,this.loc.y);
  ctx.rotate(1*this.direction.getDirection());
  ctx.beginPath();
  ctx.moveTo(-20,-20);
  ctx.lineTo(30,0);
  ctx.lineTo(-20,20);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};
