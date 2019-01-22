'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var objects;
var randomX;
var randomY;
var mousex;
var mousey;
var canvasLoc;
var center;

function init(){
  objects = [];
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  mousex = canvas.width/2;
  mousey = canvas.height/2;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  canvas.addEventListener("mousemove", moveCanvas);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  canvasLoc = new JSVector(0,0);
  center = new JSVector(canvas.width/2,canvas.height/2);
  makeObjects();
  animate();
}

function animate(){
  var mouseV = new JSVector(mousex,mousey);
  var temp = JSVector.subGetNew(mouseV,center);
  temp.multiply(.05);
  canvasLoc.add(temp);
  console.log("canvasLoc: "+ canvasLoc.x+", "+canvasLoc.y)
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.save();
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  for(let i = 0; i< objects.length;i++){
      objects[i].run();
  }
  ctx.restore();
  requestAnimationFrame(animate);
}





   function makeObjects(){
     for(let i = 0; i<50;i++){
       randomX = Math.random()* (4000+4000)-4000;
       randomY = Math.random() * (2000+2000)-2000;
        objects.push(new Objects(randomX,randomY,mousex,mousey));
     }

}
   function moveCanvas(event){
     mousex = event.clientX;
     mousey = event.clientY;
    console.log("x: "+mousex);
    console.log("y: "+mousey);

   }
