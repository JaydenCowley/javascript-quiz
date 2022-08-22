const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-buttons')

let shuffledQuestions, currentQ;

startBtn.addEventListener('click', startGame)

nextBtn.addEventListener('click', () => {
    currentQ++
    setNextQuestion();
})

function startGame() {
    console.log('Game has started');
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove('hide');
    currentQ = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();   
    showQuestion(shuffledQuestions[currentQ]) 
    

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
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
function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}
function selectAnswer (e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    // setting the answer buttons to an array so it can cycle through them to check if they are a correct answer or not
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQ + 1){
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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