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

        calulate1();
        calulate2();
        calulate3();
        calulate4();
        calulate5();

        $("#one").hide();
        $('#two').show();

    });

    $(".submit").click(function() {

        stop();
        
        calulate6();
        calulate7();
        calulate8();
        calulate9();
        calulate10();

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

    function calulate1() {

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

    function calulate2() {

        var answerStatus = $('input[name="question2"]:checked');
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

    function calulate3() {

        var answerStatus = $('input[name="question3"]:checked');
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

    function calulate4() {

        var answerStatus = $('input[name="question4"]:checked');
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

    function calulate5() {

        var answerStatus = $('input[name="question5"]:checked');
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

    function calulate6() {

        var answerStatus = $('input[name="question6"]:checked');
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

    function calulate7() {

        var answerStatus = $('input[name="question7"]:checked');
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

    function calulate8() {

        var answerStatus = $('input[name="question8"]:checked');
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

    function calulate9() {

        var answerStatus = $('input[name="question9"]:checked');
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

    function calulate10() {

        var answerStatus = $('input[name="question10"]:checked');
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
    
})


