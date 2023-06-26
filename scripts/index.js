/* Goals */
// click button - question from json object
// question display via <p> tag via click
// input box responses to question from <p>
// guess button compares response from <p>/json object

//targeting nature buttons
const elements = document.getElementsByClassName("nature");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", natureQuestionsFunk, false);
}

//function for nature questions only using filter method of parse though the object
function natureQuestionsFunk() {
  fetch("../scripts/questions.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const response = data.placeholderQuestions.filter((questionObj) => {
        return questionObj.category === "Nature";
      });
      // logic to get random Nature questions
      const max = response.length - 1;
      const min = 0;
      const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

      document.querySelector("#questionGenerator").innerText =
        response[randomIndex].question;
    });
}
