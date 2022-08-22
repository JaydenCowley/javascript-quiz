const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

startBtn.addEventListener('click', startGame)

function startGame() {
    console.log('Game has started');
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {

}

function selectAnswer () {

}