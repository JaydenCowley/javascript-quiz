const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-buttons');

let currentScore = 0;

const highscores = document.getElementById('high-scores');
const timerEl = document.getElementById('timer');
const score = document.getElementById('score');

const highScoreInputField = document.getElementById('newHighScore')
const highScoreBtn = document.getElementById('highScoreBtn')
const scoreList = document.getElementById('score-list')

var highScoreData = []
highScoreBtn.addEventListener('click', submitHighScore)
// Function to add highScores to LocalStorage
function submitHighScore() {
    // pushing to highscoreData array
    highScoreData.push(highScoreInputField.value)
    // Attempting to push data to localStorage (not Working)
    scores = {initials: highScoreInputField.value}
    localStorage.push(scores, JSON.stringify(highScoreData))
    console.log(highScoreData)
}
// Function to display Highscores in the scoreList
function displayHighScores() {
    var highScoreData = JSON.parse(localStorage.getItem('highScoreData'))||[]
    highScoreData.forEach(function(input){
        var listItem = document.createElement('li')
        listItem.textContent=input.name
        scoreList.appendChild(listItem)
    })
}
// displaying the currentScore
function displayScore(){
    score.innerText = "Score: " + currentScore
}
// function to adjust the score by adding 1
function adjustScore(){
    console.log('hitting')
    currentScore++
}

function endQuiz() {
    questionContainer.classList.add('hide');
    highscores.classList.remove('hide');
}
// Function to set the timer
function timer(){
    var sec = 15;
    var timer = setInterval(function(){
        timerEl.innerText='00:'+ sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

let shuffledQuestions, currentQ;
// adding event listener to start the quiz
startBtn.addEventListener('click', startGame)

// Adding event listener to next button which then increments the index of the questions thus moving on to the next question
nextBtn.addEventListener('click', () => {
    currentQ++
    setNextQuestion();
})

// function to start the game
function startGame() {
    currentScore = 0;
    console.log('Game has started');
    displayScore();
    timer();
    // removing hidden classes so you can see what needs to be seen
    score.classList.remove('hide');
    startBtn.classList.add('hide');
    timerEl.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove('hide');
    currentQ = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();   
    showQuestion(shuffledQuestions[currentQ]) 
    

}
// function to show the questions
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        // creating a button element and setting the innertext to the value stored in the array of questions
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnEl.appendChild(button)
        
    });
}
// function to reset classes
function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}
// function to handle answer selection
function selectAnswer (e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    // setting the answer buttons to an array so it can cycle through them to check if they are a correct answer or not
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // if the amount of questions are greater than the index value show the next button otherwise change the text in the button to restart
    if (shuffledQuestions.length > currentQ + 1){
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}
// Adding classes based on if the answer selected was correct or not
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        adjustScore();
    } else {
        element.classList.add('wrong')
        
    }
}
// removing the classes so they dont persist from question to question
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// The array of questions
const questions = [
    {
        question: 'which of the following is not a Javascript data type',
        answers: [
            {text: 'boolean', correct: false},
            {text: 'array', correct: false},
            {text: 'string', correct: false},
            {text: 'potatoe', correct: true}
        ]
    },
    {
        question: 'javascript is an ______ language',
        answers: [
            {text: 'Procedural', correct: false},
            {text: 'Object-based', correct: false},
            {text: 'Object-Oriented', correct: true},
            {text: 'none of the above', correct: false}
        ]
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {text: 'getElementbyId()', correct: false},
            {text: 'getElementsByClassName', correct: false},
            {text: 'Both getElementbyId() and getElementsByClassName', correct: true},
            {text: 'none of the above', correct: false}
        ]
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            {text: 'var', correct: false},
            {text: 'let', correct: false},
            {text: 'both var and let', correct: true},
            {text: 'none of the above', correct: false}
        ]
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {text: 'getElementbyId()', correct: false},
            {text: 'getElementsByClassName', correct: false},
            {text: 'Both getElementbyId() and getElementsByClassName', correct: true},
            {text: 'none of the above', correct: false}
        ]
    }
    // {
    //     question: '',
    //     answers: [
    //         {text: '', correct: true},
    //         {text: '', correct: false},
    //         {text: '', correct: false},
    //         {text: '', correct: false}
    //     ]
    // }
]