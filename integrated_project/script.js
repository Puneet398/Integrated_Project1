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
      fetch('http://65.2.182.244/cgi-bin/chat.py', {
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
      });
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
  