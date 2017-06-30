document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");
  var desktop = document.getElementById("desktop");
  var mobile = document.getElementById("mobile");
  var arrowLeft = document.getElementById("arrow-left");
  var arrowRight = document.getElementById("arrow-right");
  var slidesEl = document.getElementById("slides");
  var slides = slidesEl.children;

  var current = 0;

  //arrows eventlistners
  arrowRight.addEventListener("click", function() {
    var video = slides[current].children[0];
    pauseVideo(video);

    slides[current].classList.remove("active");
    if (current < slides.length - 1) {
      current ++;
    } else {
      current = 0;
    }

    setTimeout(function() {
      video = slides[current].children[0];
      playVideo(video);
      slides[current].classList.add("active");
    }, 300);
  });

  //menu event listners

  if (window.innerWidth > 1024) {
    mobile.remove();
  } else {
    desktop.remove();
  }

  setTimeout(function() {
    slides[0].classList.add("active");
  }, 100);

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
