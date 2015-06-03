$(document).ready(function(){

  var toggles = $('.work-thumb');

  for (var i = toggles.length - 1; i >= 0; i--) {
  
    var toggle = toggles[i];
    workToggleHandler(toggle);

  };

  function workToggleHandler(toggle) {

    toggle.addEventListener( "click", function(e) {
    
      e.preventDefault();
    
      if ( $(this).hasClass("active") ) {

        $(this).removeClass("active");
    
      } else {

        $(this).addClass("active");
        
      } 
    
    });
  
  }

});