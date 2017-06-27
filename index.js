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
});
