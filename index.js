document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");
  var desktop = document.getElementById("desktop");
  var mobile = document.getElementById("mobile");

  if (window.innerWidth > 1024) {
    mobile.remove();
  } else {
    desktop.remove();
  }

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
