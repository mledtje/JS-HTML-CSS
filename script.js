//Load aus index
const pepperButton = document.getElementById('pepper-btn')
const calliopeButton = document.getElementById(' calliope-btn')
const akqButton = document.getElementById('akquinet-btn')
const zwButton = document.getElementById('zw-btn')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const menuButton = document.getElementById('menu-btn')
const backButton = document.getElementById('back-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var questions

//Die Buttons werden clickbar gemacht, die Funktion hideStart wird ausgeführt
pepperButton.addEventListener('click', pepper)
calliopeButton.addEventListener('click', calliope)
akqButton.addEventListener('click', akq)
zwButton.addEventListener('click', zkw)
menuButton.addEventListener('click', menu)
backButton.addEventListener('click', menu)

//Initialisierung der Fragen -- HIER NEUE FRAGEN HINZUFÜGEN --
const questionsQ1 = [
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
          {text: "Atlantis", correct: false},
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
          {text: "42", correct: false},
          {text: "8", correct: true},
          {text: "7", correct: false}
      ]
  }
]
const questionsQ2 = [
{
    question: "In welcher Sprache kann man Calliope programmieren?",
    answers: [
        {text: "ABAP", correct: false},
        {text: "Python", correct: true},
        {text: "Cobol", correct: false},
        {text: "WoW", correct: false}
    ]
},
{
    question: "Wie sieht Calliope aus?",
    answers: [
        {text: "Wie ein Vogel", correct: false},
        {text: "Wie ein Stern", correct: true},
        {text: "Wie ein Playmobilhaus", correct: false},
        {text: "Wie eine Maus", correct: false}
    ]
},
{
    question: "Was lernt man mit Calliope?",
    answers: [
        {text: "Spielerisch programmieren", correct: true},
        {text: "Laufen", correct: false},
        {text: "Zähne putzen", correct: false}, 
        {text: "Lesen", correct: false}
    ]
},
{
    question: "Was ist Calliope?",
    answers: [
        {text: "Ein Stern", correct: false},
        {text: "Ein Mikrocomputer", correct: true},
        {text: "Ein Programm", correct: false},
        {text: "Ein Lego-Set", correct: false}
    ]
}
]
const questionsQ3 = [
{
    question: "Was ist Akquinet?",
    answers: [
        {text: "Ein Fußballverein", correct: false},
        {text: "Ein IT Dienstleistungsunternehmen", correct: true},
        {text: "Eine Lerneinrichtung für Programmierer", correct: false},
        {text: "Ein Schiff", correct: false}
    ]
},
{
    question: "Was macht Akquinet in der zukunftswerkstatt?",
    answers: [
        {text: "Workshops zu 3D Druck geben", correct: false},
        {text: "Workshops zu Drohnen geben", correct: false},
        {text: "Pepper programmieren", correct: true},
        {text: "Bilder malen", correct: false},
    ]
},
{
    question: "Was wollen die Azubis von Akquinet werden?",
    answers: [
        {text: "Luft- und Raumfahrttechniker", correct: false},
        {text: "Roboterchirugen", correct: false},
        {text: "Anwendungsentwickler", correct: true},
        {text: "Spieleentwickler", correct: false}, 
    ]
},
{
    question: "Wie viele Mitarbeiter hat Akquinet?",
    answers: [
        {text: "ca. 1400", correct: false},
        {text: "ca. 1100", correct: false},
        {text: "ca. 850", correct: true},
        {text: "ca. 350", correct: false}, 
    ]
},
{
    question: "Wofür steht Akquinet?",
    answers: [
        {text: "Komplizierte Buchstabenkombinationen", correct: false},
        {text: "Akquise und Netzwerk", correct: true},
        {text: "HSV", correct: false}, 
        {text: "Agilität", correct: true}
    ]
}
]
const questionsQ4 = [
{
    question: "Wofür steht MINT?",
    answers: [
        {text: "Pfefferminz", correct: false},
        {text: "Mathematik, Informatik, Naturwissenschaften und Technik", correct: true},
        {text: "Die Farbe bei Mastermind", correct: false},
        {text: "Mathe Ist Natürlich Toll", correct: false}
    ]
},
{
    question: "Kann man in der zukunftswerkstatt 3D-Drucken?",
    answers: [
        {text: "Nein", correct: false},
        {text: "Ja", correct: true}
    ]
},
]

//Zuweisung der Fragen nach Themen, bessere Lösung steht noch aus
function pepper(){
  hideStart()
  questions = questionsQ1

}
function calliope(){
  hideStart()
  questions = questionsQ2
  
}
function akq(){
  hideStart()
  questions = questionsQ3
  
}
function zkw(){
  hideStart()
  questions = questionsQ4
  
}

//Der Start wird angezeigt und die Themenübersicht verdeckt
function hideStart(){
    pepperButton.classList.add('hide')
    calliopeButton.classList.add('hide')
    akqButton.classList.add('hide')
    zwButton.classList.add('hide')
    startButton.innerText = 'Start'
    startButton.classList.remove('hide')
    backButton.classList.remove('hide')
}

//Start wird angezeigt und der nextButton bekommt eine Funktion 
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion() //
})

//Start wird ausgeführt, Fragen werden geshuffelt und angezeigt
function startGame() {
  startButton.classList.add('hide')
  backButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  
  questionContainerElement.classList.remove('hide')
  setNextQuestion() //
}
//Das "Hauptmenü" wird angezeigt
function menu(){
    resetState()
    pepperButton.classList.remove('hide')
    calliopeButton.classList.remove('hide')
    akqButton.classList.remove('hide')
    zwButton.classList.remove('hide')
    startButton.classList.add('hide')
    menuButton.classList.add('hide')
    backButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
}

//Aktuelle Frage wird aus Liste entfernt und die nächste Frage gezeigt
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
//Antworten werden als Button dargestellt, Frage als Text, selectAnswer wird ausgeführt
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
//Frage wird aus aktiver Frageliste entfernt
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
//Korrektheit wird geprüft und angezeigt, Anzahl übriger Fragen wird geprüft
//und dementsprechend Next oder Retart/Menü angezeigt
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  if (selectedButton.dataset.correct){
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  //Wenn noch Fragen übrig sind soll der Next-Button angezeigt werden
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  //Sind keine Fragen übrig werden der Start-Button unter Namen Restart
  //und der Menü-Button angezeigt 
  } else {
    //showResults()
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    menuButton.classList.remove('hide')
  }
}
//Ergebnisse anzeigen - Noch nicht benötigt, da Counter fehlt
//function showResults(){
  //questionContainerElement.classList.add('hide')
  //startButton.innerText = 'Restart'
  //startButton.classList.remove('hide')
  //menuButton.classList.remove('hide')
  //window.alert("Du hattest ", countPoints, " Fragen richtig.")
//}

//Korrektheitsstatus wird Fragen hinzugefügt
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
//Korrektheitsstatus des Elements wird zurückgesetzt
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}