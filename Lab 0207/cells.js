function Cell(x,y){
  this.occupided = false;
  this.loc = new JSVector(x,y);


};





Cell.prototype.render = function () {
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.rect(this.loc.x,this.loc.y,50,50);
  ctx.stroke();

};
