/**
 * My question and answer list
 */
const myQuestion = [{
        question: `What is the name of Ellie's mother?`,
        answers: [
            { text: 'Jane', correct: false },
            { text: 'Anna', correct: true },
            { text: 'Michela', correct: false },
            { text: 'Mia', correct: false}
        ], 
        image: '', 
        explain: `Ellie's mother leaves a letter to Ellie before she dies and in the letter we learn her name is Anna.`    
    },
    {
        question: 'What animal constantly pops up in the background throughout the first game?',
        answers: [
            {text: 'Wolf', correct: false},
            {text: 'Rabbit', correct: false}, 
            {text: 'Horse', correct: false},
            {text: 'Giraffe', correct: true}
        ], 
        image: '', 
        explain: `From Sarah's room to the movie theater called Giraffe Park, giraffes are all over the first game in the series, leading to a scene where Ellie meets one for the first time.`
    },
    {
        question: 'What item does Ellie keep of Sam\'s that can be seen in her room at the start of The Last of Us Part II?',
        answers: [
            {text: 'PS3', correct: false}, 
            {text: 'Cassette Player', correct: false},
            {text: 'Dinosaurs book', correct: false},
            {text: 'Toy robot', correct: true}
        ],
        image: '',
        explain: `Sam had to get rid of the toy robot in Part 1. Ellie keeps it in her room that can be found at the start of the Part 2.`
    },
    {
        question: 'Which of these buttons is NOT on Ellie\'s original backpack?',
        answers: [
            {text: 'Giraffe sticker', correct: true}, 
            {text: 'Flag pin', correct: false},
            {text: 'Nuclear waste symbol', correct: false}, 
            {text: 'One-eyed monster plushie', correct: false}
        ], 
        image: '', 
        explain: `Ellie has various buttons on her backpack, but Giraffe sticker is not one of them.`
    }, 
    {
        question: 'In the photograph of Joel and his daughter Sarah, what football shirt is she wearing?',
        answers: [
            {text: 'England', correct: false}, 
            {text: 'Brazil', correct: false},
            {text: 'Argentina', correct: true},
            {text: 'Netherland', correct: false}
        ],
        image: '', 
        explain: `Sarah is wearing an Argentina football shirt, which is a nod to the game's composer Gustavo Santaolalla who is from Argentina.`
    }
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

const imageEl = document.getElementById('answer-image');
const explantionEl = document.getElementById('explanation');
const answerImage = document.getElementById('answer-image');

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextGame();
    const hideExplanation = document.getElementById('explanation');
    hideExplanation.classList.add('hidden');
})

/**
 * Hide the start button once clicking the start.
 * Display questions randomly.
 * Remove hidden for the question container so the question and the answer options
 * to show up.
 */
function startGame() {
    document.getElementById('correct-num').innerText = '0';
    document.getElementById('incorrect-num').innerText = '0';
    startButton.classList.add('hidden');
    shuffledQuestion = myQuestion.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hidden');
    nextGame()
}

function nextGame() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
    explantionEl.classList.add('hidden');
    if (currentQuestionIndex !== 0) { // Only remove the hidden class if it's not the first question
        explantionEl.classList.remove('hidden');
    }
    answerImage.classList.add('hidden');
    answerImage.classList.remove();
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

/**
 * Hide the next button.
 * Remove all the answer option's first child node 
 * until there is no more child node to remove
 * so that we can set up a new answer options.
 */
function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    answerButtonsElement.classList.remove('clicked');
    answerImage.classList.remove('anna', 'giraffe', 'toy', 'sticker', 'argentina');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    answerImage.classList.remove('hidden');

    // check if the button has already been clicked
    if (answerButtonsElement.classList.contains('clicked')) {
        return;
    }    
    // add the clicked class to the button
    answerButtonsElement.classList.add('clicked');
    selectedButton.classList.add('bold');

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (questionElement.innerText === `What is the name of Ellie's mother?`) {
        answerImage.classList.add('anna');
    } else if (questionElement.innerText === 'What animal constantly pops up in the background throughout the first game?') {
        answerImage.classList.add('giraffe');
    } else if (questionElement.innerText === 'What item does Ellie keep of Sam\'s that can be seen in her room at the start of The Last of Us Part II?') {
        answerImage.classList.add('toy');
    } else if (questionElement.innerText === 'Which of these buttons is NOT on Ellie\'s original backpack?') {
        answerImage.classList.add('sticker');
    } else if (questionElement.innerText === 'In the photograph of Joel and his daughter Sarah, what football shirt is she wearing?') {
        answerImage.classList.add('argentina');
    };

    if (shuffledQuestion.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hidden');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hidden');
    }
    explantionEl.innerText = shuffledQuestion[currentQuestionIndex].explain;
    explantionEl.classList.remove('hidden');
    if (correct === 'true') {
        incrementScore();
    } else {
        incrementWrongScore();
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
    element.classList.remove('wrong');
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById('correct-num').innerText);
    document.getElementById('correct-num').innerText = ++oldScore;
    //increment score by +1 when correct answer was selected
}

function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById('incorrect-num').innerText);
    document.getElementById('incorrect-num').innerText = ++oldScore;
    //increment score by +1 when incorrect answer was selected
}