$(document).ready(function() {
  $("form#quiz1").submit(function(event) {

    $("form#quiz1").hide();
    $("#header").hide();

    var location = $("input:radio[name=location]:checked").val();

    if (location === "not-Portland") {
      $("div#not-Portland").show();
      $("#free").show();
      $("#the-tech-academy").show();
      $("#end-message").show();
      $("#end-nav").show();
    } else if (location === "Portland") {
      $("form#quiz2").show();
    }

    event.preventDefault();
  });

  $("form#quiz2").submit(function(event) {

    $("form#quiz2").hide();
    $("#results-msg").show();
    $("#end-nav").show();

    var goal = $("#goal").val();
    var cost = $("#amount").val();
    var experience = $("#experience").val();
    var language = $("#language").val();
    var learningEnvironment = $("#online-or-irl").val();

    if (goal === "hobby" || cost != "code-camp") {
      $("#free").show();
    }

    if (learningEnvironment === "online") {
      $("#free").show();
      $("div.online-result").show();
      $("#end-message").show();
    }
     else if (experience === "advanced") {
      $("#free").show();
      $("div.advanced").show();
      $("#end-message").show();
    } else if (language === "python" || language === "advanced-js") {
      $("#free").show();
      $("#pdx-code-guild").show();
      $("#end-message").show();
    }

     else if (cost === "code-camp" && learningEnvironment === "online") {
      $("#free").show();
      $("div.online-result").show();
      $("#end-message").show();
    } else if (cost === "code-camp") {
      $("div.bootcamp-result").show();
      $("#end-message").show();
    } else {
      $("#free").show();
      $("div.bootcamp-result").show();
      $("#end-message").show();
    }




    //
    // if (experience === "advanced") {
    //   $("#alchemy-code-lab").show();
    //   $("#end-message").show();
    // }
    //
    // // if (language === "python" || language === "advanced-js") {
    // //   $("#pdx-code-guild").show();
    // //   $("#end-message").show();
    // // }

    event.preventDefault();
  });


  // $("button#view-free").click(function() {
  //   $("#free").show();
  // });

  $("button#try-again").click(function() {
    location.reload(true);
  });
});


// $(document).ready(function() {
//
// $("form#quiz").submit(function(event) {
//
// var answer = $("input:radio[name=gayorstraight]:checked").val();
//
// console.log(answer);
//
// if (answer === "gay") {
//   $("div#gay-message").show();
// } else {
//   $("div#straight-message").show();
// }
//
// /*$(".hidden").show();
// $("#gay-message").show();*/
//
// event.preventDefault();
// });
//
// $("button#try-again").click(function() {
// location.reload(true);
// });
//
// });
