// script.js

// Define variables for DOM elements
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('options');
const timerElement = document.getElementById('time-left');
const scoreElement = document.getElementById('current-score');
const nextButton = document.getElementById('next-button');
const currentScore = document.getElementById('current-score');
const timeLeft = document.getElementById('time-left');


// Define the quiz data
const quizData = [
    {
        question: 'What is the capital of France?',
        answers: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What is 1+1?',
        answers: ['2', '1', '3', '4'],
        correctAnswer: '2',
    }    
];


function timer (){
    let time = 50
    timeLeft.innerText = time;
   let timer =  setInterval(()=>{
    console.log(time--)
    },1000)
    if(time==0){
        clearInterval(timer)
    }
}
timer()

let num1 = 0
// Add your js code here
function que(num){
    questionElement.innerHTML = ''
    answersElement.innerHTML= ''
    let questionText = document.createElement('h1');
    questionText.innerText = quizData[num].question;
    questionElement.appendChild(questionText); 
    for(let i=0;i<4;i++){
        let option = document.createElement('p');
        option.innerText = ''
        option.innerText = quizData[num].answers[i];
        answersElement.appendChild(option);
    }
    currentScore.innerText = num + 1
}


que(num1)

nextButton.addEventListener('click',()=>{
  
    num1++
    if(num1<quizData.length){
        que(num1)
    }else if(num1==quizData.length){
        questionElement.innerHTML = ''
        answersElement.innerHTML= ''
        let questionText = document.createElement('h1');
        questionText.innerText = 'Quiz completed';
        questionElement.appendChild(questionText); 
    }
})
