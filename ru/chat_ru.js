document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");
  var chatEl = document.getElementById("chat");
  var balance = document.getElementById("balance");
  var closeButton = document.getElementById("close-button");
  var chatElList = document.getElementById("chat-list");
  var chatElWrapper = document.getElementById("chat-wrapper");
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
  locationRequest.open('GET', 'https://freegeoip.net/json/', true);
  locationRequest.send();

  var chatRequest = new XMLHttpRequest();
  chatRequest.onreadystatechange = function () {
    var DONE = 4;
    var OK = 200;
    if (chatRequest.readyState === DONE) {
      if (chatRequest.status === OK) {
        messagesArray = JSON.parse(chatRequest.responseText);
      } else {
        console.log('Error: ' + chatRequest.status);
      }
    }
  };
  chatRequest.open('GET', '/ru/chat_ru.json', true);
  chatRequest.send();

  var isPaused = false;

  function initChat(response) {
    setTimeout(function() {
      chatEl.classList.add("active");
      var i = 0;
      var cityToTravel,
          latToTravel,
          relativeBalance;

      if (response.latitude < 60) {
        messagesArray = messagesArray.messages1;

        var int = setInterval(function() {
          if (!isPaused) {
            var message = document.createElement('li');
            if (i==0) {
              message.innerHTML = messagesArray[i] + response.city + ", " + response.country_code + ".";
            } else if (i==1) {
              balance.innerHTML = "Баланс = " + Math.round( 100.00 * 2 / (1 + Math.exp(-0.1 * (response.latitude-60))) * 100) / 100 + " SVR";
              message.innerHTML = messagesArray[i];
            } else if (i==6) {
              isPaused = true;

              var murmansk = document.createElement('div');
              murmansk.innerHTML = "Murmansk, RU";
              message.appendChild(murmansk);
              var tromso = document.createElement('div');
              tromso.innerHTML = "Tromsø, NO";
              message.appendChild(tromso);
              var reykjavik = document.createElement('div');
              reykjavik.innerHTML = "Reykjavik, IS";
              message.appendChild(reykjavik);
              var anchorage = document.createElement('div');
              anchorage.innerHTML = "Anchorage, US";
              message.appendChild(anchorage);

              murmansk.addEventListener("click", function() {
                isPaused = false;
                cityToTravel = 'Murmansk, RU';
                latToTravel = '68.9585';
                relativeBalance = '178.37';
              });
              tromso.addEventListener("click", function() {
                isPaused = false;
                cityToTravel = 'Tromsø, NO';
                latToTravel = '69.6492';
                relativeBalance = '179.52';
              });
              reykjavik.addEventListener("click", function() {
                isPaused = false;
                cityToTravel = 'Reykjavik, IS';
                latToTravel = '64.1265';
                relativeBalance = '148.69';
              });
              anchorage.addEventListener("click", function() {
                isPaused = false;
                cityToTravel = 'Anchorage, US';
                latToTravel = '61.2181';
                relativeBalance = '112.73';
              });
            } else if (i==7) {
              message.innerHTML = 'Добро пожаловать в ' + cityToTravel + '. Ваше значение широты ' + latToTravel;
              balance.innerHTML = "Баланс = " + relativeBalance + " SVR";
            } else if (i==10) {
              isPaused = true;
              var button = document.createElement('div');
              button.innerHTML = "Купить обед в ресторане – 6.00 SVR";
              message.appendChild(button);
              button.addEventListener("click", function() {
                isPaused = false;
                relativeBalance = Number(relativeBalance) - 6;
                balance.innerHTML = "Баланс = " + relativeBalance + " SVR";
                i++;
              });
            } else {
              message.innerHTML = messagesArray[i];
            }
            chatElList.appendChild(message);
            chatElWrapper.scrollTop = 1000;

            if (i < messagesArray.length - 1) {
              i++;
            } else {
              clearInterval(int);
            }
          }
        }, 1000);
      } else {
        messagesArray = messagesArray.messages2;

        var int = setInterval(function() {
          if (!isPaused) {
            var message = document.createElement('li');
            if (i==0) {
              message.innerHTML = messagesArray[i] + response.city + ", " + response.country_code + ".";
            } else if (i==1) {
              balance.innerHTML = "Баланс = " + Math.round( 100.00 * 2 / (1 + Math.exp(-0.1 * (response.latitude-60))) * 100) / 100 + " SVR";
              message.innerHTML = messagesArray[i];
              relativeBalance = Math.round( 100.00 * 2 / (1 + Math.exp(-0.1 * (response.latitude-60))) * 100) / 100;
            } else if (i==6) {
              isPaused = true;
              var button = document.createElement('div');
              button.innerHTML = "Купить бакалейные товары в магазине – 16.00 SVR";
              message.appendChild(button);
              button.addEventListener("click", function() {
                isPaused = false;
                relativeBalance = relativeBalance - 16;
                balance.innerHTML = "Баланс = " + Math.round(relativeBalance * 100) / 100 + " SVR";
                i++;
              });
            } else {
              message.innerHTML = messagesArray[i];
            }
            chatElList.appendChild(message);
            chatElWrapper.scrollTop = 1000;

            if (i < messagesArray.length - 1) {
              i++;
            } else {
              clearInterval(int);
            }
          }
        }, 1000);
      }

      closeButton.addEventListener("click", function() {
        chatEl.classList.remove("active");
        clearInterval(int);
      });
    }, 1000);
  }
});
