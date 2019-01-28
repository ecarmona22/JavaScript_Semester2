'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var object = [];
var mouseX;
var mouseY;
var center;
var canvasLoc;

function init(){

  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mouseX = canvas.width/2;
  mouseY = canvas.height/2;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("mousemove",makeCanvas);
  // get the context
  center = new JSVector(canvas.width/2,canvas.height/2);
  canvasLoc = new JSVector(0,0);
  ctx = canvas.getContext('2d'); // This is the context
  makeobjects();
  animate();
}

function animate(){
  var mouseT = new JSVector(mouseX,mouseY);
  var temp = JSVector.subGetNew(mouseT,center);
  temp.multiply(0.05);
  canvasLoc.add(temp);
  console.log("canvasLoc: "+canvasLoc.x+", "+canvasLoc.y);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.save();
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(-10000,0);
  ctx.lineTo(10000,0);
  ctx.moveTo(0,-10000);
  ctx.lineTo(0,10000);
  ctx.stroke();
  for(let i = 0;i < object.length;i++){
    object[i].run();
  }
  ctx.restore();
  requestAnimationFrame(animate);
}


function makeCanvas(){
 mouseX = event.clientX;
 mouseY = event.clientY;
}

function makeobjects(){
  for(let i = 0;i < 70; i++){
    var ranx = Math.random()* (4000+4000)-4000;
    var rany = Math.random()* (2000+2000)-2000;
    object.push(new Objects(ranx,rany));
  }
}
