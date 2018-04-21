$(document).ready(function() {
    var main = $("body");

    // $(".questionPages").hide();
    $(".score").hide();
    $("#one").hide();
    $("#two").hide();

    $("#start").click(function() {

        $("#start").hide();
        $('#one').show();

        run();

    });

    $(".nextPage").click(function() {

        $("#one").hide();
        $('#two').show();

    });

    $(".submit").click(function() {

        $("#two").hide();
        $('.score').show();

    });



    // ------------------Timer--------------------------
    
    var number = 60;
    var intervalId;

    function run() {

      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000); //timer
    }

    function decrement() {

      number--;

      $("#countdown").html('<strong>' + number + '</strong>');

      if (number === 0) {

        stop();

        $("#one").hide();
        $("#two").hide();
        $('.score').show();

        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    
})

$(document).ready(function(){
 
    $('.radio-inlion').change(function(){
        selected_value = $("input[name='my_options']:checked").val();
        alert(selected_value);
    });

});