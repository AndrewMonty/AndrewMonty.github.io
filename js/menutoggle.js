// control the toggling of the slideout menu on mobile devices

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
        hamburger.classList.remove("active");
        
        // remove the height after 1 second, so it doesn't shrink before it's done animating
        setTimeout(function(){ menu.removeAttribute("style") }, 500);
    
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