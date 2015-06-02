$(document).ready(function(){

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch, .section-link");
  var menu = document.getElementById("menu");
  var hamburger = document.getElementById("hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
  
    var toggle = toggles[i];
    toggleHandler(toggle,menu,hamburger);

  };

  function toggleHandler(toggle,menu,hamburger) {

    toggle.addEventListener( "click", function(e) {
    
      // e.preventDefault();
    
      if (menu.classList.contains("active") === true) {

        menu.classList.remove("active");
        menu.removeAttribute("style");
        hamburger.classList.remove("active");
    
      } else {

        if (document.documentElement.clientWidth <= 800) {

          menu.classList.add("active");
          
          var height = window.outerHeight;
          menu.style.height = height + "px";
          
          hamburger.classList.add("active");
          
        }
        
      } 
    
    });
  
  }

});