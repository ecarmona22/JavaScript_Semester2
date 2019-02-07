'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var cells;
var mouseX;
var mouseY;

function init(){
  cells = [];
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("click",mouse);
  // get the context

  ctx = canvas.getContext('2d'); // This is the context
  makeCell();
  animate();
}

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(let i =0;i<cells.length;i++){
    cells[i].run();
  }
  requestAnimationFrame(animate);
}


function makeCell(){
  var numOfCells = 25;
  var tempH = 0;
  for(let i =0 ;i<numOfCells;i++){
    var tempW = 0;
    for(let k = 0;k<numOfCells;k++){

      cells.push(new Cell(tempW,tempH,numOfCells,k,i));
      tempW+=canvas.width/numOfCells;
    }
      tempH+=(canvas.height/numOfCells)+33;
  }
}


function mouse(event){
  mouseX = event.clientX;
  mouseY = event.clientY;
  console.log("mouse: "+mouseX+", "+mouseY);
}
