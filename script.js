


const url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=boolean"

const button = document.querySelector('button[type="submit"]')

const centeredSection = document.querySelector(".centered")

const newSection = document.querySelector(".card")

button.addEventListener("click",  (e) => {
    e.preventDefault()
    console.log("firing click")
   
    fetch(url)

    .then(data => console.log(data))
    

    .catch(err => alert("Try Again"));
})

const showQuestion = (json) => {

    centeredSection.innerHTML =  `
        <article class="card">
        <h2>CATEGORY</h2>
        <p>QUESTION</p>
        <button>Show Answer</button>
      <p class="hidden">Correct Answer</p>
        </article>
    
    
    `
}