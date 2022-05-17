//Exercise 14,15// This is the code for the quiz :)
var score=0;
var check=0;
console.log("Answer the questions using a simple Yes/No");
function quiz(question,answer)
  {
    var readLineSync=require("readline-sync");
    var user_answer=readLineSync.question(question);
    if(user_answer.toUpperCase() === answer.toUpperCase())
    {
      score++;
      console.log("Correct!!Current Score="+score);
    }
    else
    {
      console.log("Incorrect!!!Current Score="+score);
    }
  }
var qOne={
  question : "Will RCB win IPL this year?", answer:"Yes"
};

var qTwo={question: "Will Virat Kohli score a century this year?",answer:"No"};

var qThree={question: "Will Delhi Weather ever Be Good?",answer:"No"};

var qFour={question: "Is Gokul a good room-mate? :)",answer:"No"};

var qFive={question:"Am I excited to go to BLR?!!",answer:"Yes"}

var questionList=[qOne,qTwo,qThree,qFour,qFive];
for(var i=0;i<questionList.length;i++)
  {
    quiz(questionList[i].question,questionList[i].answer);
    console.log();
  }
console.log("Final Score is "+score);

var high_scores=[{name : "Siddharth",score:5},{name:"Amma",score:5}];

console.log("These the are high scores currently");
for(var i=0;i<high_scores.length;i++)
  {
    console.log("Name:"+high_scores[i].name+" Score:"+high_scores[i].score);
    if(score < high_scores[i].score)
    {
      check=0;
    }
    else
    {
      check=1;
    
    }
    
  }
if(check === 1)
{
  console.log("Congrats! You have matched or bettered the High Score.Send an SS to get yours added on the leader board");
}
else
{
  console.log("You don't know me well enough yo....can't be on the leaderboard and all");
}


//Exercise 1
// console.log("Siddarth Reddy");

//Exercise 2
/*var readLineSync=require('readline-sync');
var input=readLineSync.question("Enter you name:");*/

//Exercise 3,4
/*var readLineSync=require("readline-sync");
var userName=readLineSync.question("Enter your name:");
console.log("Welcome "+userName);*/

//Exercise 5
/*var readLineSync=require("readline-sync");
var age_answer=readLineSync.question("Is your age greater than 18?");
if(age_answer.toUpperCase() === "YES")
{
  console.log("You are aboe 18, you can drive the car");
}
else
{
    console.log("You are underage!!!");
}*/

//Exercise 6
/*var readLineSync=require("readline-sync");
var city_answer=readLineSync.question("Do you live in Noida?");
var score=0;
if(city_answer.toUpperCase() === "NO")
{
  score++;
  console.log("You are correct. Your score is "+score);
}
else
{
 console.log("You are wrong!!Your score is "+score); 
}*/

//Exercise 7
/*function add(a,b)
  {
    return a+b;
  }
console.log("The sum of 8 and 10 is "+add(8,10));*/

//Exercise 8
/*function check(question,answer)
  {
    var readLineSync=require("readline-sync");
    var user_answer=readLineSync.question(question);
    if(user_answer.toUpperCase() === answer.toUpperCase())
    {
      score++;
      console.log("You have entered the right answer. Your score is "+score);
    }
    else
    {
      console.log("You were incorrect. Your score is "+score);
    }
  }
var score=0;
check("Will RCB win IPL this year?","Yes")*/

//Exercise 9
/*for(var i=0;i<5;i++)
{
  console.log("Siddharth and i="+i);
}*/

//Homework Question
/*var result='';
var readLineSync=require("readline-sync");
var num=readLineSync.question("Enter a number:");
for(var i=1;i<=num;i++)
  {
    for(var j=1;j<=i;j++)
      {
        result=result+"*";
      }
    console.log(result);
    result='';
  }
result=''
console.log("Reverse")
for( var i=num;i>=1;i--)
  {
    for(var j=i;j>=1;j--)
      {
         result=result+"*";
      }
    console.log(result);
    result='';
  }*/

//Exercise 10
/*var groceryList = ["Nutties","Crackle","Mong Dal","Rasmalai","Flowers"];
console.log(groceryList.length);
console.log("First item:"+groceryList[0]);
console.log("Third item:"+groceryList[2]);
console.log("Last item:"+groceryList[groceryList.length-1])*/

//Exercise 11
/*var groceryList = ["Nutties","Crackle","Mong Dal","Rasmalai","Flowers"];
console.log(groceryList.length);
for(i=0;i<groceryList.length;i++)
  {
    console.log(groceryList[i]);
  }*/

//Exercise 12
/*var wanda={
  name : "Scarlet Witch",power:"Witchcraft",strength:10,power:100
};
var drStrange={
  name : "Dr Strange", power:"Wizardry",strength:0,power:90
}
if(wanda.power > drStrange.power)
{
  console.log("Wanda is stronger than Dr.Strange");
}
else{
  console.log("Dr.Strange is stronger than Wanda");
}*/

//Exercise 13
/*var qOne={
  question : "Will RCB win IPL this year?", answer:"Yes"
};

var qTwo={question: "Will Virat Kohli score a century this year?",answer:"No"};

console.log(qOne.question,qOne.answer);
console.log(qTwo.question,qTwo.answer);*/  



