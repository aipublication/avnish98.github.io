var i  = 0;
var txt = 'Python Developer';
var speed = 120;

window.onload = function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro-typed").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }