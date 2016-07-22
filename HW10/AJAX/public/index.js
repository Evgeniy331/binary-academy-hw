(function() {
	var nameInput = document.getElementById("nameInput"),
		messages = document.getElementById("messages"),
		text = document.getElementById("text"),
		messageSubmit = document.getElementById("messageSubmit");
	
	var userName = "User1";
	
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

		ajaxRequest({
			method: "POST",
			url: "/messages",
			data: data
		});
	}

	var ajaxRequest = function(options) {
		var url = options.url || "/",
			method = options.method || "GET",
			callback = options.callback || function() {},
			data = options.data || {},
			xmlHttp = new XMLHttpRequest();

		xmlHttp.open(method, url, true);
		xmlHttp.setRequestHeader("Content-Type", "application/json");
		xmlHttp.send(JSON.stringify(data));
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
				callback(xmlHttp.responseText);
			}
		};
	};

	var getData = function() {
		ajaxRequest({
			url: "/messages",
			method: "GET",
			callback: function(msg) {
				var msg = JSON.parse(msg);
				messages.innerHTML = "";
				for (var i in msg) {
					if (msg.hasOwnProperty(i)) {
						var el = document.createElement("li");
						el.innerText = msg[i].name + ": " + msg[i].text;
						messages.appendChild(el);			}
				}
			}

		});
	};

	getData();

	setInterval(function() {
		getData();
	}, 1000);

})();