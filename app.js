
   // (confirm("I will agree to the I Can Pledge as shown below") === true)

$(document).ready(function() {


      $("#everything").hide();


  $("#confirm").click(function() {
    console.log("push")
      $("#everything").fadeIn();
        $("#confirm").fadeOut();
  });





      $("#femyes1").click(function() {
        console.log("hello")
     $("#result").text("Actually, most feminists don't have problems with men. The whole point of feminism is to promote equality between genders.");

      });

      $("#femno1").click(function() {
        $("#result1").text("correct!");

         });

        $("#femyes2").click(function() {
          $("#result2").text("Correct, Trevor Noah, Will Smith, and so many other men are feminists.");

        });

        $("#femno2").click(function() {
          $("#result").text("Actually, Trevor Noah, Will Smith, and so many other powerful and influential men are feminists.");

           });

          $("#femyes3").click(function() {
            $("#result3").text("During the Women's Liberation Movement, or any true feminist movemnt, no women burned bras. The idea of women burning bras was a scheme to discredit the ideas and points of feminism. And by clicking this yes, that shows it worked.");

             });


          $("#femno3").click(function() {
          $("#result4").text("Okay. You know your stuff.");

           });
 });
