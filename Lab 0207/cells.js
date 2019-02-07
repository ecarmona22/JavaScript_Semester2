function Cell(x,y,numofcells,row,col){
  this.loc = new JSVector(x,y);
  this.width = canvas.width/numofcells;
  this.height = canvas.width/numofcells;
  this.neighbors;
  this.row = row;
  this.col = col;
  this.clicked = false;
};
Cell.prototype.run = function () {
  this.check();
};
Cell.prototype.check = function(){
  var inWidth = false;
  var inheight = false;
  if(mouseX> this.loc.x && mouseX<this.loc.x+this.width ){
    inWidth = true;
  }
  if(mouseY > this.loc.y && mouseY<this.loc.y+this.height){
    inheight = true;
  }
  if(inWidth === true && inheight === true){
    this.render2();
  }else{
    this.render();
  }
}
Cell.prototype.render2 = function () {
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.rect(this.loc.x,this.loc.y,this.width,this.height);
  ctx.stroke();
  ctx.fillRect(this.loc.x,this.loc.y,this.width,this.height);


};

Cell.prototype.render = function () {
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.rect(this.loc.x,this.loc.y,this.width,this.height);
  ctx.stroke();

};
