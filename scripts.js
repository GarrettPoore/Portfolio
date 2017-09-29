$(document).ready(function() {

  $(".smooth").click(function(event){
    console.log(event.target.hash);
    $.smoothScroll({
      scrollTarget: event.target.hash
    });

    return false;
  });
});
