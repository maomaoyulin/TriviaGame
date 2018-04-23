$(document).ready(function() {
    var main = $("body");

    var correctAns = 0;
    var incorrectAns = 0;
    var unanswered = 0;

    $(".score").hide();
    $(".questionPages").hide();

    $("#start").click(function() {

        $("#start").hide();
        $(".questionPages").show();
        $('#two').hide();
        
        run();

    });

    $(".nextPage").click(function() {

        calulate()

        $("#one").hide();
        $('#two').show();

    });

    $(".submit").click(function() {

        stop();
        calulate()

        $("#two").hide();
        $('.score').show();
        $(".questionPages").hide();

        $("#correntNum").text(correctAns);
        $("#incorrentNum").text(incorrectAns);
        $("#unansweredNum").text(unanswered);

    });

    // ------------------Timer--------------------------
    
    var number = 90;
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

    function calulate() {

        var answerStatus = $('input[name="question1"]:checked');
        var answerVal = answerStatus.val();
        var answerChecked = answerStatus.length;
    
        if(answerChecked == 0){
            unanswered++;
        }else{
            if(answerVal == "1") {
                correctAns++;
            }else if(answerVal == "0"){
                incorrectAns++;
            }
        }
        
    }

    console.log(correctAns);
    console.log(incorrectAns);
    console.log(unanswered);

    
})


