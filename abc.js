
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Display service details on click
document.querySelectorAll('#services li').forEach(service => {
  service.addEventListener('click', function (e) {
    e.preventDefault();
    const serviceId = this.getAttribute('id');
    const serviceDetails = document.getElementById('service-details');

    // Clear previous content
    serviceDetails.innerHTML = '';

    // Display service details
    switch (serviceId) {
      case 'hadoop':
        serviceDetails.innerHTML = '<h3>Hadoop</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Sed vehicula scelerisque nisl, vitae rutrum justo dapibus sit amet.</p>';
        break;
      case 'jenkins':
        serviceDetails.innerHTML = '<h3>Jenkins</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Sed vehicula scelerisque nisl, vitae rutrum justo dapibus sit amet.</p>';
        break;
      case 'docker':
        serviceDetails.innerHTML = '<h3>Docker</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Sed vehicula scelerisque nisl, vitae rutrum justo dapibus sit amet.</p>';
        break;
      case 'aws':
        serviceDetails.innerHTML = '<h3>AWS Services</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero urna. Sed vehicula scelerisque nisl, vitae rutrum justo dapibus sit amet.</p>';
        break;
      default:
        break;
    }
  });
});
function scrollToService() {
  var dropdown = document.getElementById("service-dropdown");
  var selectedService = dropdown.options[dropdown.selectedIndex].value;
  if (selectedService !== "") {
    var section = document.querySelector(selectedService);
    section.scrollIntoView({ behavior: "smooth" });
  }
}
document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');
    const chatContent = document.getElementById('chatContent');
    const userInput = document.getElementById('userInput');
  
    let chatOpen = false;
  
    // Function to display a chat message
    function displayMessage(text, sender) {
      const messageElem = document.createElement('div');
      messageElem.textContent = `${sender}: ${text}`;
      chatContent.appendChild(messageElem);
    }
  
    // Function to handle user input and get chatbot response
    function handleUserInput() {
      const userMessage = userInput.value;
      displayMessage(userMessage, 'You');
      userInput.value = '';
  
      // Send the user input to the backend (Python script on AWS) using AJAX or Fetch API
      // Replace the 'your_backend_url_here' with the actual URL of your backend API
      fetch('http://35.154.226.134/cgi-bin/Backend.py'), {
        method: 'POST',
        body: JSON.stringify({ input: userMessage }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
	  
      .then(data => {
        const botResponse = data.response; // Assuming your API returns the response field
        displayMessage(botResponse, 'Chatbot');
		 
      })
      .catch(error => {
        console.error('Error:', error);
		alert(response); 
      });
	 alert(response); 
    }
  
    // Toggle chat window visibility when the icon is clicked
    chatIcon.addEventListener('click', function () {
      if (chatOpen) {
        chatWindow.style.display = 'none';
      } else {
        chatWindow.style.display = 'block';
      }
      chatOpen = !chatOpen;
    });
  
    // Handle user input when Enter key is pressed
    userInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        handleUserInput();
      }
    });
  });
function lw(){

var xhr = new XMLHttpRequest();

//alert(cmd)

xhr.onreadystatechange = function() {

var cmd = document.getElementById("in2").value; xhr.open("GET", "http://35.154.203.140/cgi-bin/chat.py?d1="+cmd); xhr.send();

if(this.readyState == 4){

document.getElementById("d1").innerHTML = this.responseText;

}