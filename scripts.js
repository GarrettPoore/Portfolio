portfolio_items =
[
  {
    "name":"project0",
    "description":"The description",
    "url":"http://www.google.com",
    "picture":"http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg"
  }
]

$(document).ready(function() {
  portfolio_items.forEach(buildPortfolioItem);

  $(".scroll").click(function(event){
    event.preventDefault();
    this.blur();
    $.smoothScroll({
      scrollTarget: $(this).attr("data-target")
    });
  });
});

function buildPortfolioItem(data) {
  console.log(data);
  var item = $("#" + data.name);
  var image = item.find("img")[0];
  
  if (image) {
    item.append(
      $("<a>")
        .attr("href", data.url)
        .append(
          $(image)
            .attr("title", data.description)
            .attr("alt", data.description)
            .attr("src", data.picture)
        )
    );
  }
}
