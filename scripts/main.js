$(".open").on("click", function(){
    $(".overlay, .popup").addClass("active");
  });
  
  $(".close, .overlay").on("click", function(){
     $(".overlay, .popup").removeClass("active");
  });
  
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      $(".overlay, .popup").removeClass("active");
    }
  });