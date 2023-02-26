// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName('button');

//     for (let button of buttons) {
//         button.addEventListener('click', function() {
//             if (this.getAttribute('data-type') === 'start') {
//                 startGame();
//             } else {
//                 let btn = this.getAttribute('data-type');
//                 alert(`You clicked ${btn}`);
//             }
//         })
//     }

// })

const myQuestion = [{
        question: `What is the name of Ellie's mother?`,
        answers: [
            { text: 'Sarah', correct: true },
            { text: 'Anna', correct: false },
            { text: 'Michela', correct: false },
            { text: 'Mia', correct: false}
        ]
    },
    {
        question: 'What animal constantly pops up in the background throughout the first game?',
        answers: [
            {text: 'Wolf', correct: false},
            {text: 'Rabbit', correct: false}, 
            {text: 'Horse', correct: false},
            {text: 'Giraffe', correct: true}
        ]
    },
    {
        question: 'What item does Ellie keep of Sam\'s that can be seen in her room at the start of The Last of Us Part II?',
        answers: [
            {text: 'PS3', correct: false}, 
            {text: 'Cassette Player', correct: false},
            {text: 'Dinosaurs book', correct: false},
            {text: 'Toy robot', correct: true}
        ],
    },
    {
        question: 'Which of these buttons is NOT on Ellie\'s original backpack?',
        answers: [
            {text: 'Giraffe sticker', correct: true}, 
            {text: 'Flag pin', correct: false},
            {text: 'Nuclear waste symbol', correct: false}, 
            {text: 'One-eyed monster plushie', correct: false}
        ]
    }, 
    {
        question: 'In the photograph of Joel and his daughter Sarah, what football shirt is she wearing?',
        answers: [
            {text: 'England', correct: false}, 
            {text: 'Brazil', correct: false},
            {text: 'Argentina', correct: true},
            {text: 'Netherland', correct: false}
        ],
    }
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextGame();
})


function startGame() {
    //display the question
    
    startButton.classList.add('hidden');
    shuffledQuestion = myQuestion.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hidden');
    nextGame()

    
    // for(i = 0; i < myQuestion.length; i++) {
        
    //     let questionTitle = document.getElementsByClassName('question-area').innerHTML; 
    //     questionTitle.textContent = myQuestion[i].question;
            
    // //display answer options
    //     let questionAnswers = document.getElementsByClassName('answer-area').innerHTML;
    //     questionAnswers.textContent = myQuestion[i].answers;

    // //change the image related to the first question
    // }
}

function nextGame() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
    //display to the next image for the question
    //display the next question
    //display the next select options
}

function showQuestion(myQuestion) {
    questionElement.innerText = myQuestion.question;
    myQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestion.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hidden');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hidden');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.add('wrong');
}

function incorrecAnswer() {
    //change to the answer image
    //display red x-marked icon
    //display text Wrong!
    //display explanation to the answer
    //display the incorrect selected answer with red text color
    //display the correct answer option with green text color
}

function incrementScore() {
    //increment score by +1 when correct answer was selected
}

function incrementWrongScore() {
    //increment score by +1 when incorrect answer was selected
}