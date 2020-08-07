var myNav = document.getElementById('navbar');

window.onscroll = function () {
  "use strict";
  
  if (document.body.scrollTop >= 200) {
    myNav.style.backgroundColor = "rgba(0,0,0,1)";
  } else {
    myNav.style.backgroundColor = "rgba(0,0,0,0.1)";
  }
  
};
