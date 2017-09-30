$(document).ready(function() {
  $(".scroll").click(function(event){
    event.preventDefault();
    this.blur();
    $.smoothScroll({
      scrollTarget: $(this).attr("data-target")
    });
  });
});
