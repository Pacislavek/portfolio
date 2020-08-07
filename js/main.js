var myNav = document.getElementById('navbar');

window.onscroll = function () {
  "use strict";
  
  if (document.body.scrollTop >= 10) {
    myNav.style.backgroundColor = "rgba(0,0,0,0.8)";
  } else {
    myNav.style.backgroundColor = "rgba(0,0,0,0.1)";
  }
  
};