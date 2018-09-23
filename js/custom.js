/*var i  = 0;
var txt = 'Python Developer';
var speed = 120;

window.onload = function typeWriter() {
    if (i < txt.length) {
      document.getElementById("intro-typed").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }*/

window.onload = new Typed("#intro-typed", {
    strings: ["PYTHON DEVELOPER", "COMPUTER SCIENCE STUDENT", "OPEN SOURCE CONTRIBUTOR"],
    startDelay: 500,
    backSpeed: 10,
    typeSpeed: 20,
    smartBackspace: true,
    loop: true
  });