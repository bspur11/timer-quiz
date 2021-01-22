var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questionEl = document.getElementById('question');
var introEl = document.getElementById('intro-para');
var questionTextEl = document.getElementById("question-container");
var answersLi = document.getElementById('answer-buttons');
var resultsAnswer = document.getElementById('results');
var answerCorrect = document.getElementById('answer2')
var counter;
counter = 0;

var questions = [{
    question: 'Commonly used data types do not include______',
    answers: [{
        text: 'Boleans',
        correct: false
      },
      {
        text: 'Other Arrays',
        correct: false
      },
      {
        text: 'Numbers',
        correct: false
      },
      {
        text: 'Alerts',
        correct: true
      }
    ]
  },
  {
    question: 'A very useful tool used during developement and debugging for printing content to the debugger is _____.',
    answers: [{
        text: 'JavaScript',
        correct: false
      },
      {
        text: 'Terminal/Bash',
        correct: false
      },
      {
        text: 'For Loops',
        correct: false
      },
      {
        text: 'Console log',
        correct: true
      }
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store__________?',
    answers: [{
        text: 'numbers and strings',
        correct: true
      },
      {
        text: 'other arrays',
        correct: true
      },
      {
        text: 'booleans',
        correct: true
      },
      {
        text: 'all of the above',
        correct: true
      }
    ]
  },
  {
    question: 'The condition in an if/else statement is enclosed with________?',
    answers: [{
        text: 'quotes',
        correct: false
      },
      {
        text: 'curly brackets',
        correct: true
      },
      {
        text: 'parenthesis',
        correct: false
      },
      {
        text: 'square brackets',
        correct: true
      }
    ]
  },
  {
    question: 'String values in JavaScript must be inclosed in _______.',
    answers: [{
        text: 'quotes',
        correct: true
      },
      {
        text: 'curly brackets',
        correct: false
      },
      {
        text: 'parenthesis',
        correct: false
      },
      {
        text: 'square brackets',
        correct: false
      }
    ]


  }
]


var timeLeft = 15;
var timer = document.getElementById('timer');



// time start and remaining
function countdown() {
  //  timer.innerHTML = timeLeft;
  var timeInterval = window.setInterval(function () {
    timeLeft--
    timer.innerHTML = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval)
    }
    // console.log("time", timer, timeLeft)
  }, 1000);

  introEl.classList.add('btn-hide')
  startBtn.classList.add('btn-hide');
  questionEl.classList.remove('hide');
  answersLi.classList.remove('hide');

}

var checkTrue = document.getElementById("answer1");
// checkTrue = questions[i].answers[0].correct;


var i = 0;
while (i < 5) {
  // questions from my array

  // if (questions.length > i) {

  var questionText = document.getElementById("question");
  questionText.textContent = questions[i].question;
  // console.log(i);



  var answerText = document.getElementById("answer1");
  answerText.textContent = questions[i].answers[0].text;

  // var checkTrue = document.getElementById("answer1");
  // checkTrue = questions[i].answers[0].correct;

  var answerText = document.getElementById("answer2");
  answerText.textContent = questions[i].answers[1].text;

  // var checkTrue = document.getElementById("answer2");
  // checkTrue = questions[i].answers[1].correct;

  var answerText = document.getElementById("answer3");
  answerText.textContent = questions[i].answers[2].text;

  // var checkTrue = document.getElementById("answer3");
  // checkTrue = questions[i].answers[2].correct;

  var answerText = document.getElementById("answer4");
  answerText.textContent = questions[i].answers[3].text;

  // var checkTrue = document.getElementById("answer3");
  // checkTrue = questions[i].answers[2].correct;

  console.log(i);

  //countdown();
  // } else {
  //   break;
  // }

  console.log(questions[i]);
  var answers = questions[i].answers;
  console.log(answers);

  function clicked(e) {
    console.log("click", e.target.innerHTML);

    var checkTrue = document.getElementById("answer1");
    checkTrue = e.target.innerHTML;
    console.log(e.target.innerHTML);

    var checkTrue = document.getElementById("answer2");
    checkTrue = e.target.innerHTML;

    var checkTrue = document.getElementById("answer3");
    checkTrue = e.target.innerHTML;

    var checkTrue = document.getElementById("answer4");
    checkTrue = e.target.innerHTML;





    if (checkTrue === true) {
      console.log(questions[i]);
      resultsAnswer.textContent = "correct";
    } else {
      resultsAnswer.textContent = "Wro1ng";
    }

  }



  i++;

}

answer1.addEventListener("click", clicked);
answer2.addEventListener("click", clicked);
answer3.addEventListener("click", clicked);
answer4.addEventListener("click", clicked);
answersLi.addEventListener('click', clicked);
startBtn.addEventListener('click', countdown);