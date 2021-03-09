
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
var mode="pen"; 

window.addEventListener("load", () => {
    
     
    //Resizing canvas box
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // context.fillRect(100, 20, 200, 200);
    //variables 
    let painting = false;

    function startPosition(){
        painting = true;
    }
    function finishedPosition(){
        painting = false;
        context.beginPath();
    }

    function draw(e){
        if(!painting) return;
        context.lineWidth = 3;
        context.lineCap = "round";
         if(mode == "pen"){
            context.globalCompositeOperation="source-over"
            context.strokeStyle="red"
            context.lineTo(e.clientX, e.clientY);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX, e.clientY);
        }
        
        else if(mode=="eraser"){
            
            context.globalCompositeOperation="destination-out";
            context.arc(e.clientX,e.clientY,20,0,Math.PI*2,false);
            context.fill();
            context.beginPath();
            context.moveTo(e.clientX, e.clientY);
        }        
    }
    //event listener

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    
    var btn1 = document.getElementById("eraser");

    var btn2 = document.getElementById("pen");

    btn1.addEventListener("click", function(e) {
        mode="eraser"
    });

    btn2.addEventListener("click", function(e) {
        mode="pen"
    });

});

window.addEventListener("resize", () => {
    var wrapper = document.getElementById("signature-pad");
    var canvas = wrapper.querySelector("canvas");
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

}); 

// document.getElementById("shape-square").addEventListener("click", () => {
//     context.strokeStyle = "blue";
//     context.lineWidth=3;

//     // calculate where the canvas is on the window
//     // (used to help calculate mouseX/mouseY)
//     var canvasOffset= canvas.offset();
//     var offsetX=canvasOffset.left;
//     var offsetY=canvasOffset.top;
//     var scrollX=canvas.scrollLeft();
//     var scrollY=canvas.scrollTop();

//     // this flage is true when the user is dragging the mouse
//     var isDown=false;

//     // these vars will hold the starting mouse position
//     var startX;
//     var startY;


//     function handleMouseDown(e){
//       e.preventDefault();
//       e.stopPropagation();

//       // save the starting x/y of the rectangle
//       startX=parseInt(e.clientX-offsetX);
//       startY=parseInt(e.clientY-offsetY);

//       // set a flag indicating the drag has begun
//       isDown=true;
//     }

//     function handleMouseUp(e){
//       e.preventDefault();
//       e.stopPropagation();

//       // the drag is over, clear the dragging flag
//       isDown=false;
//     }

//     function handleMouseOut(e){
//       e.preventDefault();
//       e.stopPropagation();

//       // the drag is over, clear the dragging flag
//       isDown=false;
//     }

//     function handleMouseMove(e){
//       e.preventDefault();
//       e.stopPropagation();

//       // if we're not dragging, just return
//       if(!isDown){return;}

//       // get the current mouse position
//       mouseX=parseInt(e.clientX-offsetX);
//       mouseY=parseInt(e.clientY-offsetY);

//       // Put your mousemove stuff here

//       // clear the canvas
//       context.clearRect(0,0,canvas.width,canvas.height);

//       // calculate the rectangle width/height based
//       // on starting vs current mouse position
//       var width=mouseX-startX;
//       var height=mouseY-startY;

//       // draw a new rect from the start position 
//       // to the current mouse position
//       context.strokeRect(startX,startY,width,height);

//     }

//     // listen for mouse events
//     $("#canvas").mousedown(function(e){handleMouseDown(e);});
//     $("#canvas").mousemove(function(e){handleMouseMove(e);});
//     $("#canvas").mouseup(function(e){handleMouseUp(e);});
//     $("#canvas").mouseout(function(e){handleMouseOut(e);});
// });

