$(document).ready(function() {
  var current_slide = 0;
  $(this).keydown(function(e){
    var slides = $(".slide");
    //Handle right press
    if (e.keyCode == 37) {
      if (current_slide !== 0) {
        current_slide--;
        $.scrollTo(slides[current_slide], 800);
      }
    }
    //Handle right press
    if (e.keyCode == 39) {
      if (current_slide <= slides.length) {
        current_slide++;
        $.scrollTo(slides[current_slide], 800);
      }
    }
  });
});
