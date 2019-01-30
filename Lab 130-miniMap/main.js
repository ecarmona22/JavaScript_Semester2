'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var secondCan;
var ctx;
var ctx2;
var object = [];
var mouseX;
var mouseY;
var center;
var canvasLoc;

function init(){

  //get the canvas
  canvas = document.getElementById('cnv');
  secondCan = document.getElementById("cnv2");
  // Set the dimensions of the canvas
  secondCan.width = canvas.width*1/8;
  secondCan.height = canvas.height*1/8;
  mouseX = canvas.width/2;
  mouseY = canvas.height/2;
  secondCan.style.border = "solid black 4px";
  canvas.style.border = 'solid black 5px';
  secondCan.style.backgroundColor = "rgb(0,0,0.9)";
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("mousemove",makeCanvas);
  // get the context
  center = new JSVector(canvas.width/2,canvas.height/2);
  canvasLoc = new JSVector(0,0);
  ctx = canvas.getContext('2d');
  ctx2 = secondCan.getContext('2d');
  ctx2.scale(32,16); // This is the context
  makeobjects();
  animate();
}

function animate(){

  ctx2.clearRect(0,0,secondCan.width,secondCan.height);
  ctx2.save()
  ctx2.translate(4000,2000);
  ctx2.strokeStyle = "white";
  ctx2.fillStyle="rgb(0,0,255,.9)";
  // ctx2.lineWidth = 20;
  ctx2.beginPath();
  ctx2.moveTo(-10000,0);
  ctx2.lineTo(10000,0);
  ctx2.moveTo(0,-10000);
  ctx2.lineTo(0,10000);
  ctx2.rect(0,0,10,10);
  ctx2.stroke();
  ctx2.fill();
  ctx2.restore();

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
