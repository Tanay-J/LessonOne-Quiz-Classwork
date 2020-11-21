var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name ");
console.log("Hello "+userName.toUpperCase()+", Let's see if you are a true Nagpurkar!");
console.log("-------------");
//Defining a function
function quiz(question,answer){
  
  var userAns = readlineSync.question(question);
  if(userAns.toLowerCase() === answer){
    console.log("That's a correct answer!");
    score++;
    console.log("Your score: "+score);
    console.log("-------------");
  }else{
    console.log("Your answer is wrong!")
    score--;
    console.log("Your score: "+score);
    console.log("-------------");
  }
}
//array containing objects of question and answer
var questionList = [{
  question : "Which fruit is Nagpur famous for? ",
  answer : "orange",
},{
  question : "Which point in Nagpur is believed to be the geographical center of India?  ",
  answer : "zero mile",
},{
  question : "Name the popular monument related to Dr. Ambedkar ",
  answer: "deekshabhumi",
}];

//high scores
var highScores = {
  name : "Tanay",
  finalScore : 3,
}
//for loop to call the function
for(var i=0;i<questionList.length;i++){
  quiz(questionList[i].question, questionList[i].answer);
}

console.log("-------------");
console.log("Your final score is "+score)
console.log(highScores.name.toUpperCase()+" is the true Nagpurkar with the highest score of "+highScores.finalScore);
console.log("-------------")
console.log("Beaten the highscore? Send us a screenshot and get your name on the leaderboard")