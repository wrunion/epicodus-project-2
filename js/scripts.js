$(document).ready(function() {
  $("form#quiz1").submit(function(event) {

    $("form#quiz1").hide();

    var location = $("input:radio[name=location]:checked").val();

    if (location === "not-Portland") {
      $("div#not-Portland").show();
      $("#free").show();
      $("#the-tech-academy").show();
      $("#end-message").show();
    } else if (location === "Portland") {
      $("form#quiz2").show();
    }

    event.preventDefault();
  });

  $("button#try-again").click(function() {
    location.reload(true);
  });


  $("form#quiz2").submit(function(event) {

    var experience = $("#experience").val();
    var cost = $("#amount").val();
    var isFree = $("#goal").val();

    if (experience === "advanced") {
      $("#alchemy-code-lab").show();
      $("#end-message").show();
    }

    if (isFree === "free") {
      $("#quiz2").hide();
      $("#free").show();
    }
    event.preventDefault();

  });
});


$(document).ready(function() {

$("form#quiz").submit(function(event) {

var answer = $("input:radio[name=gayorstraight]:checked").val();

console.log(answer);

if (answer === "gay") {
  $("div#gay-message").show();
} else {
  $("div#straight-message").show();
}

/*$(".hidden").show();
$("#gay-message").show();*/

event.preventDefault();
});

$("button#try-again").click(function() {
location.reload(true);
});

});
