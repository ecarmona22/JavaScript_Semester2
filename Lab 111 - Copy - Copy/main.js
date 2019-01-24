'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var center;
var canvasLoc;
var mouseX;
var mouseY;
var objects;

function init(){
  objects = [];
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("mousemove",moveCanvas);
  ctx = canvas.getContext('2d'); // This is the context
  mouseX = canvas.width/2;
  mouseY = canvas.height/2;
  center = new JSVector(canvas.width/2,canvas.height/2);
  canvasLoc = new JSVector(0,0);
  makeObjects();
  animate();
}

function animate(){
  var mouseT = new JSVector(mouseX,mouseY);
  var temp = JSVector.subGetNew(mouseT,center);
  temp.multiply(.05);
  canvasLoc.add(temp);
  console.log("canvasLoc : "+canvasLoc.x+", "+canvasLoc.y);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.save();
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  for(let i = 0;i<objects.length;i++){
    objects[i].run();
  }
  ctx.restore();
  requestAnimationFrame(animate);
}

function moveCanvas(){
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function makeObjects(){
  for(let i = 0;i<60;i++){
    var locx = Math.random()*(4000+4000)-4000;
    var locy = Math.random()*(2000+2000)-2000;
    objects.push(new Object(locx,locy));
  }
}
