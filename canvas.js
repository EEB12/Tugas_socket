window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    
    
    

    // Resizing canvas box
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
        context.lineWidth = 5;
        context.lineCap = "round";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
    function pen(){
        mode = "pen"
    }
    function eraser(){
        mode = "eraser"
    }

    
    
    //event listener
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("click",draw);
    $("#pen").addEventListener("click",pen);  
    $("#eraser").addEventListener("click",eraser);
    

});


window.addEventListener("resize", () => {
   
    var wrapper = document.getElementById("signature-pad");
    var canvas = wrapper.querySelector("canvas");
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

