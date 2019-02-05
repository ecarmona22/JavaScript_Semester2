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
var worldX;
var worldY;

function init(){
  worldX = 8000;
  worldY = 8000;
  //get the canvas
  canvas = document.getElementById('cnv');
  secondCan = document.getElementById("cnv2");
  // Set the dimensions of the canvas
  secondCan.width = worldX*.08;
  secondCan.height = worldY*0.08;
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

  makeobjects();
  animate();
}

function animate(){

  ctx2.clearRect(0,0,secondCan.width,secondCan.height);
  ctx2.save();
  ctx2.scale(secondCan.width/worldX,secondCan.height/worldY);
  ctx2.translate(worldX/2,worldY/2);
  ctx2.strokeStyle = "white";
  ctx2.lineWidth = 20;
  ctx2.beginPath();
  ctx2.moveTo(-10000,0);
  ctx2.lineTo(10000,0);
  ctx2.moveTo(0,-10000);
  ctx2.lineTo(0,10000);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.strokeStyle = "blue";
  ctx2.rect((canvasLoc.x),(canvasLoc.y),canvas.width,canvas.height);
  //ctx2.fillRect((canvasLoc.x),canvasLoc.y,1000,1000);
  ctx2.stroke();


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

  ctx2.restore();
  ctx.restore();
  requestAnimationFrame(animate);
}


function makeCanvas(event){
 mouseX = event.clientX;
 mouseY = event.clientY;
}

function makeobjects(){
  for(let i = 0;i <80; i++){
    var ranx = Math.random()* (worldX+worldX)-worldX;
    var rany = Math.random()* (worldY+worldY)-worldY;
    object.push(new Objects(ranx,rany));
  }
}
