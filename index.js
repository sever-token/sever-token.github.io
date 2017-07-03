document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");
  var desktop = document.getElementById("desktop");
  var desktopMenu = document.getElementById("desktop-menu").children;
  var mobile = document.getElementById("mobile");
  var arrowLeft = document.getElementById("arrow-left");
  var arrowRight = document.getElementById("arrow-right");
  var slidesEl = document.getElementById("slides");
  var slides = slidesEl.children;

  var current = 0;

  setInterval(function() {
    if (current == 0) {
      desktopMenu[0].classList.add("active");
      desktopMenu[1].classList.remove("active");
      desktopMenu[2].classList.remove("active");
      desktopMenu[3].classList.remove("active");
      desktopMenu[4].classList.remove("active");
      desktopMenu[5].classList.remove("active");
      desktopMenu[6].classList.remove("active");
    } else if (current == 1) {
      desktopMenu[0].classList.remove("active");
      desktopMenu[1].classList.add("active");
      desktopMenu[2].classList.remove("active");
      desktopMenu[3].classList.remove("active");
      desktopMenu[4].classList.remove("active");
      desktopMenu[5].classList.remove("active");
      desktopMenu[6].classList.remove("active");
    } else if (current == 2 || current == 3) {
      desktopMenu[0].classList.remove("active");
      desktopMenu[1].classList.remove("active");
      desktopMenu[2].classList.add("active");
      desktopMenu[3].classList.remove("active");
      desktopMenu[4].classList.remove("active");
      desktopMenu[5].classList.remove("active");
      desktopMenu[6].classList.remove("active");
    } else if (current == 4 || current == 5) {
      desktopMenu[0].classList.remove("active");
      desktopMenu[1].classList.remove("active");
      desktopMenu[2].classList.remove("active");
      desktopMenu[3].classList.add("active");
      desktopMenu[4].classList.remove("active");
      desktopMenu[5].classList.remove("active");
      desktopMenu[6].classList.remove("active");
    } else if (current == 6 || current == 7) {
      desktopMenu[0].classList.remove("active");
      desktopMenu[1].classList.remove("active");
      desktopMenu[2].classList.remove("active");
      desktopMenu[3].classList.remove("active");
      desktopMenu[4].classList.add("active");
      desktopMenu[5].classList.remove("active");
      desktopMenu[6].classList.remove("active");
    } else if (current == 8 || current == 9) {
      desktopMenu[0].classList.remove("active");
      desktopMenu[1].classList.remove("active");
      desktopMenu[2].classList.remove("active");
      desktopMenu[3].classList.remove("active");
      desktopMenu[4].classList.remove("active");
      desktopMenu[5].classList.add("active");
      desktopMenu[6].classList.remove("active");
    } else if (current == 10) {
      desktopMenu[0].classList.remove("active");
      desktopMenu[1].classList.remove("active");
      desktopMenu[2].classList.remove("active");
      desktopMenu[3].classList.remove("active");
      desktopMenu[4].classList.remove("active");
      desktopMenu[5].classList.remove("active");
      desktopMenu[6].classList.add("active");
    }

  }, 300);

  desktopMenu[0].addEventListener("click", function() {
    if (current !== 0) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 0;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.add("hide");
      arrowRight.classList.remove("hide");
    }
  });

  desktopMenu[1].addEventListener("click", function() {
    if (current !== 1) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 1;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.remove("hide");
      arrowRight.classList.remove("hide");
    }
  });

  desktopMenu[2].addEventListener("click", function() {
    if (current !== 2) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 2;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.remove("hide");
      arrowRight.classList.remove("hide");
    }
  });

  desktopMenu[3].addEventListener("click", function() {
    if (current !== 4) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 4;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.remove("hide");
      arrowRight.classList.remove("hide");
    }
  });

  desktopMenu[4].addEventListener("click", function() {
    if (current !== 6) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 6;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.remove("hide");
      arrowRight.classList.remove("hide");
    }
  });

  desktopMenu[5].addEventListener("click", function() {
    if (current !== 8) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 8;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.remove("hide");
      arrowRight.classList.remove("hide");
    }
  });

  desktopMenu[6].addEventListener("click", function() {
    if (current !== 10) {
      var video = slides[current].children[0];
      var text = slides[current].children[1];
      if (video) pauseVideo(video);
      slides[current].classList.remove("active");
      if (text) text.classList.remove("active");

      current = 10;

      video = slides[current].children[0];
      if (video) playVideo(video);
      slides[current].classList.add("active");

      setTimeout(function() {
        text = slides[current].children[1];
        if (text) text.classList.add("active");
      }, 1000);

      arrowLeft.classList.remove("hide");
      arrowRight.classList.add("hide");
    }
  });

  arrowRight.addEventListener("click", function() {
    var video = slides[current].children[0];
    var text = slides[current].children[1];
    if (video) pauseVideo(video);

    slides[current].classList.remove("active");
    if (text) text.classList.remove("active");

    if (current == slides.length - 2) {
      arrowRight.classList.add("hide");
      arrowLeft.classList.remove("hide");
    } else {
      arrowRight.classList.remove("hide");
      arrowLeft.classList.remove("hide");
    }

    current ++;

    video = slides[current].children[0];
    if (video) playVideo(video);
    slides[current].classList.add("active");

    setTimeout(function() {
      text = slides[current].children[1];
      if (text) text.classList.add("active");
    }, 1000);
  });

  arrowLeft.addEventListener("click", function() {
    var video = slides[current].children[0];
    var text = slides[current].children[1];
    if (video) pauseVideo(video);
    slides[current].classList.remove("active");
    if (text) text.classList.remove("active");

    if (current == 1) {
      arrowRight.classList.remove("hide");
      arrowLeft.classList.add("hide");
    } else {
      arrowRight.classList.remove("hide");
      arrowLeft.classList.remove("hide");
    }

    current --;

    video = slides[current].children[0];
    if (video) playVideo(video);
    slides[current].classList.add("active");

    setTimeout(function() {
      text = slides[current].children[1];
      if (text) text.classList.add("active");
    }, 1000);
  });

  //menu event listners

  if (window.innerWidth > 1024) {
    mobile.remove();
  } else {
    desktop.remove();
  }

  slides[0].classList.add("active");

  setTimeout(function() {
    slides[0].children[1].classList.add("active");
  }, 1000);

  window.addEventListener("resize", handleResize);
  function handleResize() {
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    if (wWidth/wHeight > 1.78) {
      body.classList.remove("portrait");
    } else {
      body.classList.add("portrait");
    }
  }
  handleResize();

  function playVideo(video) {
    if (video.paused) {
      video.play();
    }
  }

  function pauseVideo(video) {
    if (!video.paused) {
      video.pause();
    }
  }
});
