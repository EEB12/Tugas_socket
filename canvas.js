

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

