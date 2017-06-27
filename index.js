document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");

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

  window.addEventListener("scroll", handleScroll);
  function handleScroll() {
    var text1 = document.getElementById("text-1");
    var text2 = document.getElementById("text-2");
    var text3 = document.getElementById("text-3");
    var text4 = document.getElementById("text-4");
    var text5 = document.getElementById("text-5");
    var text6 = document.getElementById("text-6");
    var video1 = document.getElementById("video-1");
    var video2 = document.getElementById("video-2");
    var video3 = document.getElementById("video-3");
    var video4 = document.getElementById("video-4");
    var video5 = document.getElementById("video-5");
    console.log(body.scrollTop < text5.offsetTop)
    if (body.scrollTop < text2.offsetTop) {
      playVideo(video1);
      pauseVideo(video2);
      pauseVideo(video3);
      pauseVideo(video4);
      pauseVideo(video5);
      video1.classList.remove("hide");
      video2.classList.add("hide");
      video3.classList.add("hide");
      video4.classList.add("hide");
      video5.classList.add("hide");
    } else if (body.scrollTop < text3.offsetTop) {
      pauseVideo(video1);
      playVideo(video2);
      pauseVideo(video3);
      pauseVideo(video4);
      pauseVideo(video5);
      video1.classList.add("hide");
      video2.classList.remove("hide");
      video3.classList.add("hide");
      video4.classList.add("hide");
      video5.classList.add("hide");
    } else if (body.scrollTop < text4.offsetTop) {
      pauseVideo(video1);
      pauseVideo(video2);
      playVideo(video3);
      pauseVideo(video4);
      pauseVideo(video5);
      video1.classList.add("hide");
      video2.classList.add("hide");
      video3.classList.remove("hide");
      video4.classList.add("hide");
      video5.classList.add("hide");
    } else if (body.scrollTop < text5.offsetTop) {
      pauseVideo(video1);
      pauseVideo(video2);
      pauseVideo(video3);
      playVideo(video4);
      pauseVideo(video5);
      video1.classList.add("hide");
      video2.classList.add("hide");
      video3.classList.add("hide");
      video4.classList.remove("hide");
      video5.classList.add("hide");
    } else if (body.scrollTop < text6.offsetTop) {
      pauseVideo(video1);
      pauseVideo(video2);
      pauseVideo(video3);
      pauseVideo(video4);
      playVideo(video5);
      video1.classList.add("hide");
      video2.classList.add("hide");
      video3.classList.add("hide");
      video4.classList.add("hide");
      video5.classList.remove("hide");
    }
  }

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
