function Cell(x,y){
  this.occupided = false;
  this.loc = new JSVector(x,y);


};





Cell.prototype.render = function () {
  if(this.occupided === false){

    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.rect(this.loc.x,this.loc.y,50,50);
    ctx.stroke();
  }else if(this.occupided === true){

    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(39, 164, 247)";
    ctx.beginPath();
    ctx.rect(this.loc.x,this.loc.y,sizeOfCell,sizeOfCell);
    ctx.fillRect(this.loc.x,this.loc.y,sizeOfCell,sizeOfCell);
    ctx.stroke();



  }

};
