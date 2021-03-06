'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var mouseX;
var mouseY;
var cell;
var cells;
var rows = 20;
var cols = 20;
var sizeOfCell = 50;


function init(){
  canvas = document.getElementById('cnv');
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("click",mouse);
  ctx = canvas.getContext('2d'); // This is the context
  makeGrid();
  animate();
}

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(let i = 0;i<cells.length;i++){
    for(let j = 0;j<cells[i].length;j++){
      cells[i][j].render();
    }
  }
  requestAnimationFrame(animate);
}


function makeGrid(){
  cells = new Array(rows);
  for(let i = 0;i<rows;i++ ){
    cells[i] = new Array(cols);
    for(let j = 0;j<cols;j++){
      cells[i][j] = new Cell(i*sizeOfCell,j*sizeOfCell);;
    }

  }
    for(let i = 0;i<rows;i++ ){
      for(let j = 0;j<cols;j++){
        cells[i][j].GetNeighbor(i,j);
      }
    }
}


function mouse(event){
  var cell;
  mouseX = event.clientX;
  mouseY = event.clientY;
  console.log("mouse: "+mouseX+", "+mouseY);
  var tempR = Math.trunc(mouseX/sizeOfCell);
  var tempC = Math.trunc(mouseY/sizeOfCell);
  console.log(tempR+","+tempC);
  cell = cells[tempR][tempC]
  for(let i=0;i<cell.neighbors.length;i++){
    cell.neighbors[i].occupided = !cell.neighbors[i].occupided;
  }

}
