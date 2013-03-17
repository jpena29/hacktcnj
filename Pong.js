var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var x=100;
var y=200;
var dx=-2;
var dy=-5;
var recx=90;
var recy=305;
var recdx=30;
var recx2=90;
var recy2=5;
var recdx2=30;

function init(){
	setInterval(draw, 10);
}
	
function draw(){
	if(y > 330){
		return;
	}
	else{
		ctx.clearRect(0, 0, 480, 320);
		ctx.beginPath();
		ctx.fillStyle="#00FF00";
		//Draw a circle of radius 7 at the coordinates 100, 100 on the canvas
		ctx.arc(x, y, 7, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
		//Create paddles to hit ball
		ctx.rect(recx, recy, 100, 10);
		ctx.stroke();
		
		ctx.rect(recx2, recy2, 100, 10);
		ctx.stroke();
		
		if(x < 0 || x > 480){
			dx = -dx;
		}
		if(y == recy && x <= recx + 100 && x >= recx - 40){
			dy = -dy;
		}
		x += dx;
		y += dy;
	}
}

