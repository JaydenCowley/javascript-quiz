const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const qnswerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQ;

startBtn.addEventListener('click', startGame)

function startGame() {
    console.log('Game has started');
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove('hide');
    currentQ = 0;
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQ]) {
        questionElement.innerText = question.question
    }

}

function showQuestion(question) {

}

function selectAnswer () {

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