(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");
  var menu = document.getElementById("#menu");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle,menu);
  };

  function toggleHandler(toggle,menu) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      if (this.classList.contains("active") === true) {
        this.classList.remove("active");
        menu.classList.remove("active");
      } else {
        this.classList.add("active");
        var height = window.outerHeight;
        menu.style.height = height + "px";
        menu.classList.add("active");
      } 
    });
  }

})();