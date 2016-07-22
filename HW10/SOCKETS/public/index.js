(function() {
	var nameInput = document.getElementById("nameInput"),
		messages = document.getElementById("messages"),
		text = document.getElementById("text"),
		messageSubmit = document.getElementById("messageSubmit");
	
	var userName = "User1";
	var socket = io.connect();
	
	messageSubmit.onclick = function() {

		if (text.value === "")
			return;

		if (nameInput.value != "")
			userName = nameInput.value;
		
		var data = {
			name: userName,
			text: text.value,
		};

		text.value = "";
		socket.emit("chat message", data);
	}

	socket.on("chat history", function(msg) {
			for (var i in msg) {
				if (msg.hasOwnProperty(i)) {
					var el = document.createElement("li");
					el.innerText = msg[i].name + ": " + msg[i].text;
					messages.appendChild(el);			
				}
			}
	});

	socket.on("chat message", function(msg) {
			var el = document.createElement("li");
			el.innerText = msg.name + ": " + msg.text;
			messages.appendChild(el);
	});

})();