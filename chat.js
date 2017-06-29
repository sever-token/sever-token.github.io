document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");
  var chatEl = document.getElementById("chat");
  var chatElList = document.getElementById("chat-list");
  var messagesArray = [];

  var locationRequest = new XMLHttpRequest();
  locationRequest.onreadystatechange = function () {
    var DONE = 4;
    var OK = 200;
    if (locationRequest.readyState === DONE) {
      if (locationRequest.status === OK) {
        initChat(JSON.parse(locationRequest.responseText));
      } else {
        console.log('Error: ' + locationRequest.status);
      }
    }
  };
  locationRequest.open('GET', 'http://freegeoip.net/json/', true);
  locationRequest.send();

  var chatRequest = new XMLHttpRequest();
  chatRequest.onreadystatechange = function () {
    var DONE = 4;
    var OK = 200;
    if (chatRequest.readyState === DONE) {
      if (chatRequest.status === OK) {
        messagesArray = JSON.parse(chatRequest.responseText).messages;
      } else {
        console.log('Error: ' + chatRequest.status);
      }
    }
  };
  chatRequest.open('GET', '/chat.json', true);
  chatRequest.send();

  function initChat(response) {
    setTimeout(function() {
      chatEl.classList.add("active");
      var i = 0;
      var balance = document.createElement('span');
      balance.classList.add("balance");
      balance.innerHTML = "Your balance: " + Math.round( 100.00 * 2 / (1 + Math.exp(-0.1 * (response.latitude-60)))) + " SVR";

      var int = setInterval(function() {
        var message = document.createElement('li');
        if (i==1) {
          message.innerHTML = messagesArray[i] + response.city + ", " + response.country_code + ".";
        } else if (i==2) {
          body.appendChild(balance);
          message.innerHTML = messagesArray[i];
        } else {
          message.innerHTML = messagesArray[i];
        }
        chatElList.appendChild(message);
        chatEl.scrollTop = chatEl.offsetHeight;
        if (i < messagesArray.length - 1) {
          i++;
        } else {
          clearInterval(int);
        }
      }, 2000);
    }, 300);
  }
});
