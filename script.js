// select DOM elements
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text')
const asnwersContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById('current-question')
const totalQuestionsSpan = document.getElementById("total-questions")
const scoreSpan = document.getElementById('score')
const finalScoreSpan = document.getElementById("final-score")
const maxScoreSpan = document.getElementById('max-score')
const resultMessage = document.getElementById('result-message')
const restartButton = document.getElementById("restart-btn")
const progressBar = document.getElementById('progress')

// Quiz-Question 
const quizQuestions =  [
    {
        question: "What is the capital of France ?",
        answer: [
            {
                text: "London", correct: false,
                text: "Berlin", correct: false,
                text: "Paris", correct: true,
                text:  "Madrid", correct: false,
            }
        ],
    
    },
    {
        question: "Which planet is known as Red Planet ?",
        answer: [
            { text: "Venus", correct: false},
            { text: "Mars", corrent: true},
            { text: "Jupter", correct: false},
            { text: "Satrun", correct: false},
        ],
    },
    {
        question: "What is largest ocean on Earth ?",
        answer: [
            { text: 'Atlantic Ocean', correct: false},
            { text: "Indian Ocean", correct: false},
            { text: "Arctic Ocean", correct: false},
            { text: "Pacific Ocean", correct: true}
        ],
    }, 
    {
        question: "Which of these in NOT a programming language ?",
        answer: [
            { text: 'Java', correct: false },
            { text: 'Python', correct: false },
            { text: 'Banana', correct: true},
            { text: 'JavaScript', correct: false},
        ],
    },
    {
        question: "What is the chemical symbol for gold ?",
        answer: [
            { text: "Go", correct: false },
            { text: "Gd", correct: false },
            { text: 'Au', correct: true },
            { text: "Ag", correct: false }, 
        ],
    },
]

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length
maxScoreSpan.textContent = quizQuestions.length

// event listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz () {
    // reset vars
    currentQuestionIndex = 0;
    // scoreSpan.textContent = 0;

    startScreen.classList.remove('active')
    quizScreen.classList.add("active")

    showQuestion()
}
function showQuestion () {
    // reset state
    answersDisabled = false;
    
    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question
}

function restartQuiz () {
    console.log('quiz re-started')
}
