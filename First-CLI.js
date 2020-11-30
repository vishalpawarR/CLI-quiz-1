var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var userName = readlineSync.question(chalk.red("Enter your name :")+" ");
console.log(chalk.bgWhite.black("Welcome "+userName+" to my first CLI app"));

function play(question,answer) {
  var question = readlineSync.question(question);
  if(question.toLowerCase()==answer) {
    console.log(chalk.bgWhite.black("Right!"));
    score++;
  } else {
    console.log(chalk.bgRed("Wrong!"));
  }
  console.log("Your current score is "+score);
}

var questionOne = {
  question : "Do you live in Bangalore yes/no? ",
  answer : "yes"
};

var questionTwo = {
  question : "Did you study in Jain University ",
  answer : "yes"
};

var questions = [questionOne,questionTwo];

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question, questions[i].answer);
}