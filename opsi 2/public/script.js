function drawLine(context, x1, y1, x2, y2,mode) {
	
	// context.lineTo(x1, y1);
    
    // // context.beginPath();
    // context.moveTo(x2, y2);
	// context.stroke();
	if(mode=="pen"){
		context.strokeStyle='black'
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();

	}
	else if(mode=="eraser"){
		// context.strokeStyle="red"
		// context.moveTo(x1, y1);
		// context.lineTo(x2, y2);
		// context.stroke();
		context.globalCompositeOperation="destination-out";
        context.arc(x2,y2,20,0,Math.PI*2,false);
        context.fill();
        context.beginPath();
        context.moveTo(x2,y2);

	}

	
}

// function erase(context, x1, y1, x2, y2,mode){
// 	context.strokeStyle="red"
// 	context.moveTo(x1, y1);
// 	context.lineTo(x2, y2);
// 	context.stroke();
// }

document.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = window.innerWidth;
	var height = window.innerHeight;

	canvas.width = width;
	canvas.height = height;

	var drawing = false;
	var x, y, prevX, prevY;

	var socket = io.connect();
	
	canvas.onmousedown = function(e) {
		drawing = true;
		prevX = x;
		prevY = y;
	}

	canvas.onmouseup = function(e) {
		drawing = false;
	}

	var btn1 = document.getElementById("eraser");

    var btn2 = document.getElementById("pen");

	var mode = "pen";
	

	canvas.onmousemove = function(e) {
		x = e.clientX;
		y = e.clientY;
		
		if (drawing) {


			socket.emit('draw', {
				
				'x1': prevX,
				'y1': prevY,
				'x2': x,
				'y2': y,
				'mode': mode
			});

			drawLine(context, prevX, prevY, x, y,mode);
			prevX = x;
			prevY = y;
			// mode1=mode;

		}
	}

	socket.on('draw', function(data) {
		drawLine(context, data.x1, data.y1, data.x2, data.y2, mode);
	});

	btn1.addEventListener("click", function(e) {
        mode="eraser"
    });

    btn2.addEventListener("click", function(e) {
        mode="pen"
    });
});
