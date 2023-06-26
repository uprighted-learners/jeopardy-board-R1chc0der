/* Goals */
// click button - question from json object
// question display via <p> tag via click
// input box responses to question from <p>
// guess button compares response from <p>/json object

// requiring in json questions
let jeopardyQuestions = require("../scripts/questions.json");
//console.log(jeopardyQuestions);

//targeting nature200 button
let natureButton200 = document
  .getElementsByClassName("nature")
  .addEventListener("click", natureQuestionsFunk);

//function for nature questions
function natureQuestionsFunk() {}

// get question in console.log then to get in a p tag
let questionButtons = document.querySelectorAll("td button");
for (let questionButton of questionButtons) {
  questionButton.addEventListener("click", () => {
    console.log("Button was pushed");
    //alert("button works")
  });
}

// p tag that generates the question after button click
let paragraphQuestion = document.getElementById("questionGenerator");

paragraphQuestion.textContent("hello");

//

//log("testing the log")

function placeholderQuestions() {
  const data = require("./questions.json"); // passing our file location
  console.log(`${data} log on line 29`);
  //.then(res => res.json())
  //.then(data => {
  let members = data.placeholderQuestions;
  //console.log(members);

  // Used a for/of loop to cycle through the array
  for (let member of members) {
    //  console.log(m); // logs each member object
    console.log(member.category);
  }

  /*     })
    .catch(error => {
        console.log(error);
    } ) */
}
placeholderQuestions();
