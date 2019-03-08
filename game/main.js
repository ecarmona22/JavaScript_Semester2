'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var ball;
var vehicle;



function init(){
  var tempVehicle = document.createElement('img');
  tempVehicle.src= "carTop.png";
  tempVehicle.addEventListener('load', function (e){vehicle = this});
  document.addEventListener("keydown",keyHandler);
  canvas = document.getElementById('cnv');
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';
  ctx = canvas.getContext('2d');

  ball = new Ball();
  animate();
}

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ball.run();
  requestAnimationFrame(animate);
}


function keyHandler(e){
  console.log(e.key);
   if(e.key === "w" || e.key === "ArrowUp"){
     ball.loc.y -= 10;
   }
   if(e.key ==="s" || e.key === "ArrowDown"){
     ball.loc.y+=10;
   }
   if(e.key ==="a" || e.key === "ArrowLeft"){
     ball.loc.x-=10;
     ctx.rotate(90* Math.PI/180);
   }
   if(e.key ==="d" || e.key === "ArrowRight" ){
     ball.loc.x+=10;
   }
}
