//Declare variables to hold values for answers
var correct = 0;
var incorrect = 0;
var unanswered = 0;


// Arrays of questions and possible answers & correct answers

// var questions = [{
//     question: "What country does the dachshund originate from?",
//     choices: ["China", "Germany", "Scottland", "United States"],
//     correctAnswer: 1
// }, {
//     question: "The very first mascot for the 1972 Olympic games was Waldi the dachshund",
//     choices: ["True", "False"],
//     correctAnswer: 0
// }, {
//     question: "Owners of dachshunds must be extra careful of which part of the dogs body?",
//     choices: ["eyes", "ears", "nose", "back"],
//     correctAnswer: 3
// }, {
//     question: "Dachshunds are definitely NOT a super popular breed.",
//     choices: ["True", "False"],
//     correctAnswer: 1
// }, {
//     question: "Dachshunds are the smallest breed used for:",
//     choices: ["hunting", "fishing", "swimming", "flying"],
//     correctAnswer: 0
// }, {
//     question: "Which Queen of England was known for having royal dachshunds and popularizing the breed in England?",
//     choices: ["Queen Victoria", "Queen Elizabeth II", "Queen Maria IV", "Princess Valentina"],
//     correctAnswer: 0
// }, {
//     question: "Doxies are best known for:",
//     choices: ["loyalty", "stubbornness", "resemblance to sausages or hot dogs", "All of the above!"],
//     correctAnswer: 3
// }];


//Countdown Timer for end of Quiz
var timeleft = 10;
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

setTimeout(timeUp, 1000 * 10);

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

//Unanswered
// $('input:radio[name="mylist"]').change(function(){
//     if($(this).is("7" - ":checked")){
//         unanswered++;
//     }
// });

function uncheck() {
    document.getElementById("mylist").checked = false;
    unanswered++;
}

  // ($("input:radio[name='mylist']").is(":checked" unanswered++){

  // }
  // });
    
    







