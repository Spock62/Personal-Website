$(document).ready(function() {
  var slide_url = $(location).attr('href').split("#");
  if (slide_url.length > 1) {
    var current_slide = (parseInt(slide_url[1].replace("slide", ""))-1);
  }
  else {
    var current_slide = 0;
  }
  $(this).keydown(function(e){
    var slides = $(".slide");
    //Handle right press
    if (e.keyCode == 37) {
      if (current_slide !== 0) {
        current_slide--;
        $.scrollTo(slides[current_slide], 800);
        window.history.pushState("slide" + (current_slide+1), document.title, "#slide" + (current_slide+1));
      }
    }
    //Handle right press
    if (e.keyCode == 39) {
      if (current_slide <= slides.length) {
        current_slide++;
        $.scrollTo(slides[current_slide], 800);
        window.history.pushState("slide" + (current_slide+1), document.title, "#slide" + (current_slide+1));
      }
    }
  });
});
