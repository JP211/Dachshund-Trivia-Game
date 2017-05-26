//Declare variables to hold values for answers
var correct = 0;
var incorrect = 0;
var unanswered = 0;


//Countdown Timer for end of Quiz
var timeleft = 30;
    var quizTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(quizTimer);
    },1000);

//Function to show quiz after button is clicked using toggle to show/hide p and radio

$(document).ready(function() {
    $("#startButton").click(function() {
        $("p, #answerButtons").toggle();
    });
});

//Setting up the end of quiz after 30 seconds

setTimeout(timeUp, 1000 * 30);

function timeUp() {

  $("#countdowntimer").html("<p>Time's Up!<p>");

  //Updates the scores

  $("#scoreSection").html("<p>Correct = " + correct + "<p>Incorrect = " + incorrect + "<p>Unanswered = " + unanswered);

}

//Answers & Scoring

//Correct Answers
$('input:radio[name="mylist"]').change(function(){
    if($(this).val() == "yes"){
        correct++;
    }
});

//Wrong Answers

$('input:radio[name="mylist"]').change(function(){
    if($(this).val() == "no"){
        incorrect++;
    }
});

//Broken unanswered section :checked and :not would not work either
function uncheck() {
    document.getElementById("mylist").checked = false;
    unanswered++;
}

// $('input:radio[name="mylist"]').change(function(){
//     if($(this).val() == ""){
//         unanswered++;
//     }
// });
    
    







