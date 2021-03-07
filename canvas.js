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
        
        // if (mode=="pen"){
            context.lineWidth = 5;
            context.lineCap = "round";
            if(mode=="eraser"){
                // context.globalCompositeOperation = "destination-out";
                // context.strokeStyle = "rgba(0,0,0,1)";
                context.strokeStyle="red"
            }
            
            context.lineTo(e.clientX, e.clientY);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX, e.clientY);
        // } else{
        //     context.globalCompositeOperation="destination-out";
        //     context.arc(e.clientX, e.clientY,8,0,Math.PI*2,false);
        //     context.fill();
        // }
        
    }
    //event listener
    
    function pen(){
        mode = "pen"
    }
    function eraser(){
        mode = "eraser"
    }

    
   
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("click",draw);
    
    $("#pen").addEventListener("click",pen);  
    $("#eraser").addEventListener("click",eraser);
    var mode="eraser";  
    // $("#pen").click(function(){ mode="pen"; });  
    // $("#eraser").click(function(){ mode="eraser"; });

    
    

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


