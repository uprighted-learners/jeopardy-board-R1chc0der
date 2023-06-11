// click button - question from json object
// question display via <p> tag via click
// input box responses to question from <p>
// guess button compares response from <p>/json object

// get question in console.log then to get i a p tag
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
