var question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');

var boi = 0;
var answer = '';
var score = 0;

var questionArray = [
  ["1+1", "A. 1", "B. 2", "C. 3", "D. 4", "B. 2"],
  ["1+2", "A. 1", "B. 2", "C. 3", "D. 4", "C. 3"],
  ["1+3", "A. 1", "B. 2", "C. 3", "D. 4", "D. 4"],
  ["1+4", "A. 5", "B. 6", "C. 7", "D. 8", "A. 5"],
  ["1+5", "A. 5", "B. 6", "C. 7", "D. 8", "B. 6"],
  ["1+6", "A. 5", "B. 6", "C. 7", "D. 8", "C. 7"],
  ["1+7", "A. 5", "B. 6", "C. 7", "D. 8", "D. 8"],
  ["1+8", "A. 9", "B. 10", "C. 11", "D. 12", "A. 9"],
  ["1+9", "A. 10", "B. 11", "C. 12", "D. 13", "A. 10"],
  ["1+10", "A. 10", "B. 11", "C. 12", "D. 13", "B. 11"],


  ["1+11", "A. 10", "B. 11", "C. 12", "D. 13", "B. 11"],
  ["1+12", "A. 10", "B. 11", "C. 12", "D. 13", "D. 13"],
  ["1+13", "A. 14", "B. 15", "C. 16", "D. 17", "A. 14"],
  ["1+14", "A. 14", "B. 15", "C. 16", "D. 17", "B. 14"],
  ["1+15", "A. 14", "B. 15", "C. 16", "D. 17", "C. 16"],
  ["1+16", "A. 14", "B. 15", "C. 16", "D. 17", "D. 17"],
  ["1+17", "A. 18", "B. 19", "C. 20", "D. 21", "A. 18"],
  ["1+18", "A. 18", "B. 19", "C. 20", "D. 21", "B. 19"],
  ["1+19", "A. 18", "B. 19", "C. 20", "D. 21", "C. 20"],
  ["1+20", "A. 18", "B. 19", "C. 20", "D. 21", "D. 21"]
  
];

choice1.addEventListener('click', questionIncrement);
choice2.addEventListener('click', questionIncrement);
choice3.addEventListener('click', questionIncrement);
choice4.addEventListener('click', questionIncrement);

displayQuestion();

function questionIncrement() {
  
  var selectedChoice = event.target.innerHTML;
  if (selectedChoice == answer) {
    score++;
  }


  if (boi != 19) {
    boi++;
    displayQuestion();
    
  } else {
    displayResult();
    repeat()
  }
}

function displayQuestion() {
  question.innerHTML = questionArray[boi][0];
  choice1.innerHTML = questionArray[boi][1];
  choice2.innerHTML = questionArray[boi][2];
  choice3.innerHTML = questionArray[boi][3];
  choice4.innerHTML = questionArray[boi][4];

  answer = questionArray[boi][5];
}

function displayResult() {
  var resultMessage = '';
  if (score >= 15) {
    resultMessage = "Congratulations! You passed!(click OK to repeat)";
  } else if (score >= 14) {
    resultMessage = "failed";
  } else {
    resultMessage = " failed! failed! repeat!";
    

  }alert(resultMessage)

  
  question.innerHTML = resultMessage;
  
}

function repeat() {
  boi = 0;
  question.innerHTML = questionArray[boi][0];
  choice1.innerHTML = questionArray[boi][1];
  choice2.innerHTML = questionArray[boi][2];
  choice3.innerHTML = questionArray[boi][3];
  choice4.innerHTML = questionArray[boi][4];
}
