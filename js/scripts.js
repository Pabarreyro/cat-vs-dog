$(document).ready(function() {
  $("button#choose-cat").click(function() {
    $(".player").toggleClass("hide");
    $("#meow").before("<h6>Player One</h6>");
    $("#woof").before("<h6>Computer</h6>");
    $(this).remove();
    $("button#choose-dog").remove();
  });

  $("button#choose-dog").click(function() {
    $(".player").toggleClass("hide");
    $("#woof").before("<h6>Player One</h6>");
    $("#meow").before("<h6>Computer</h6>");
    $(this).remove();
    $("button#choose-cat").remove();
  });

  $("button#meow").click(function() {
    $("ul#meow-list").prepend("<li>Meow</li>");
    $("ul#woof-list").prepend("<li>Woof</li>");

    $("ul#meow-list").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#woof-list").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("ul#meow-list").prepend("<li>Meow</li>");
    $("ul#woof-list").prepend("<li>Woof</li>");

    $("ul#meow-list").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#woof-list").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
