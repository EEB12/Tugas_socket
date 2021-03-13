document.addEventListener("DOMContentLoaded", function(){
    var messages = document.getElementById('messages');
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    const $messagesContainer = document.getElementById('messagesContainer')
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
          socket.emit('chat message', {
          'value': input.value,
          'user': userName
          })
        
        //   $messagesContainer.innerHTML +=
		// 	`<div class="chat-message">
		// 		  <span style="color: red; font-weight: bold;">${userName}:</span> <span class="msg">${input.value}</span>
		// 	</div>`
          input.value = '';
          login()
        //   input.value = '';
        }
      });

     function login(){
        
        socket.on('msg', (msg) => {
            console.log("hlaooo")
            speak(msg.message,msg.from)
          });
     }
    function speak(konten,nama){
        			$messagesContainer.innerHTML +=
					`<div class="chat-message">
					    <span style="color: red; font-weight: bold;">${nama}:</span> <span class="msg">${konten}</span>
					</div>`
                     $messagesContainer.scrollTop = $messagesContainer.scrollHeight
    }
     
			
	  



})