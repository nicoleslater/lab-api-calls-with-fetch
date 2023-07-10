


const url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=boolean"

const button = document.querySelector('button[type="submit"]')

const centeredSection = document.querySelector(".centered")

const newSection = document.querySelector(".card")

button.addEventListener("click",  (e) => {
    e.preventDefault()
    console.log("firing click")
   
    fetch(url)

    .then(data => data.json())
    
    .then(json => console.log(json))

    .catch(err => alert("Try Again"));
})

const showQuestion = (json) => {

    let results = json.results
    let questionHTML = '';



  for (let i = 0; i < results.length; i++) {
    questionsHTML += `
    <article class="card">
    <h2>${results[i].category}</h2>
    <p>${results[i].question}</p>
    <button class="show-answer-btn">Show Answer</button>
    <p class="hidden">${results[i].correct_answer}</p>
    </article>`;
  }

    centered.innerHTML = questionsHTML;
   
    // const showAnswerButton
}