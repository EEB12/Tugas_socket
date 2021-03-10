function drawLine(context, x1, y1, x2, y2,color,mode) {
	// context.lineTo(x1, y1);
    // context.moveTo(x2, y2);
	// context.stroke();
	// if(mode=="pen"){
	if(mode=="pen"){
		context.globalCompositeOperation="source-over"
		context.beginPath();
    	context.moveTo(x1, y1);
    	context.lineTo(x2, y2);
    	context.strokeStyle = color ;
    	context.lineWidth = 2;
    	context.stroke();
    	context.closePath();

	}
	else if(mode=="eraser"){
	// 	// context.strokeStyle="red"
	// 	// context.moveTo(x1, y1);
	// 	// context.lineTo(x2, y2);
	// 	// context.stroke();


        context.arc(x2,y2,20,0,Math.PI*2,false);
        context.fill();
        context.beginPath();
        context.moveTo(x2,y2);
		context.clearrect(0,0,window.innerHeight,window.innerWidth)

	}

document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = window.innerWidth;
	var height = window.innerHeight;

	canvas.width = width;
	canvas.height = height;

	var drawing = false;
	var x, y;

	var socket = io.connect();
	
	var current = {
		color: getRandomColor(),
	  };


	canvas.onmousedown = function(e) {
		drawing = true;
		current.x = x;
		current.y = y;
	}

	canvas.onmouseup = function(e) {
		drawing = false;
	}

	var btn1 = document.getElementById("eraser");

    var btn2 = document.getElementById("pen");

	var mode = "black";
	
	canvas.onmousemove = function(e) {
		x = e.clientX;
		y = e.clientY;
		
		if (drawing) {

				socket.emit('draw', {
				
					'y1': current.y,
					'x2': x,
					'y2': y,
					"color" : current.color,
					"mode": mode
				});
	
				drawLine(context, current.x, current.y, x, y,current.color,mode);
				current.x = x;
				current.y = y;
				// mode1=mode;

			

			

			

		}
	}

	socket.on('draw', function(data) {
		drawLine(context, data.x1, data.y1, data.x2, data.y2, data.color,data.mode);
	});

	// socket.on('eraser', function(data) {
	// 	drawLine(context, data.x1, data.y1, data.x2, data.y2, mode);
	// });

	btn1.addEventListener("click", function(e) {
        mode="eraser"
    });

    btn2.addEventListener("click", function(e) {
        mode="pen"
    });

	function getRandomColor(){
		var temp = [
			"black",
			"blue",
			"red",
			"green",
			"yellow",
			"purple",
			"grey",
			"pink",
			"brown",
			"orange",
		  ];
	
		  var color = temp[Math.floor(Math.random() * 9)];
		  return color;
	}
});
