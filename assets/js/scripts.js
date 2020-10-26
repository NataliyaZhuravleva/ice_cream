// Business logic:



// User interface logic:

$(document).ready(function () {

  let flavors = ["chocolate", "strawberry", "raspberry"];
  console.log(flavors);
  $("button#see").click(function () {
    flavors.forEach(function (flavor) {
      $("ul#flavor").prepend("<li>"+ flavor+ "</li>");
    });
  });
});
  