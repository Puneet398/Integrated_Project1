function lw(){
	
        var xhr=new XMLHttpRequest();
        var a=xhr.open("GET" , "http://3.110.220.63/cgi-bin/cmd.py?command=" +document.getElementById("inputText").value);
        xhr.send();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4) {
				document.getElementById("output").innerHTML=this.responseText;
			}
		}
}

function convertSpeechToText() {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    var result = event.results[0][0].transcript;
    document.getElementById("inputText").value = result;
  }

  recognition.start();
}

/*function runCommand() {
  var command = document.getElementById("inputText").value;
  // Execute the command or perform any desired action here
  console.log("Command executed:", command);
}*/
