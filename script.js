const pepperButton = document.getElementById('pepper-btn')
const caliopeButton = document.getElementById('caliope-btn')
const akqButton = document.getElementById('akquinet-btn')
const zwButton = document.getElementById('zw-btn')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const menuButton = document.getElementById('menu-btn')
const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

pepperButton.addEventListener('click', hideStart)

function hideStart(){
    pepperButton.classList.add('hide')
    caliopeButton.classList.add('hide')
    akqButton.classList.add('hide')
    zwButton.classList.add('hide')
    startButton.innerText = 'Start'
    startButton.classList.remove('hide')
    backButton.classList.remove('hide')
}
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
menuButton.addEventListener('click', menu)
backButton.addEventListener('click', menu)

function startGame() {
  startButton.classList.add('hide')
  backButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function menu(){
    resetState()
    pepperButton.classList.remove('hide')
    caliopeButton.classList.remove('hide')
    akqButton.classList.remove('hide')
    zwButton.classList.remove('hide')
    startButton.classList.add('hide')
    menuButton.classList.add('hide')
    backButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
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
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    menuButton.classList.remove('hide')
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
        question: "Wie heißen Peppers Freunde?",
        answers: [
            {text: "Miau und Wuff", correct: false},
            {text: "Nao und Romeo", correct: true},
            {text: "Adam und Eva", correct: false},
            {text: "Wladimir und Vitali", correct: false}
        ]
    },
    {
        question: "Wo ist die Zukunftswerkstatt?",
        answers: [
            {text: "Hamburg", correct: true},
            {text: "Buchholz", correct: true},
            {text: "Hier", correct: true},
            {text: "Auf dem Mond", correct: false}
        ]
    },
    {
        question: "Kann Pepper Tanzen?",
        answers: [
            {text: "Nein", correct: false},
            {text: "Ja", correct: true}
        ]
    },
    {
        question: "Was ist 2 * 4?",
        answers: [
            {text: "6", correct: false},
            {text: "8", correct: true},
            {text: "7", correct: false}
        ]
    }
]
