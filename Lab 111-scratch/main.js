'use strict'
window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;





function init(){

  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .9)';

  // get the context
  ctx = canvas.getContext('2d'); // This is the context

  animate();
}

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  requestAnimationFrame(animate);
}





  
