/**
 * My questions and answers list
 */
const myQuestions = [{
        question: `What is the name of Ellie's mother? (We never meet but it is mentioned somewhere...)`,
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
            {text: 'The Netherlands', correct: false}
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
 * Display questions randomly by sorting it with random numbers between -0.5 and 0.5.
 * Remove hidden for the question container so the question and the answer options
 * to show up.
 */
function startGame() {
    document.getElementById('correct-num').innerText = '0';
    document.getElementById('incorrect-num').innerText = '0';
    startButton.classList.add('hidden');
    shuffledQuestion = myQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hidden');
    nextGame()
}


/**
 * Function resetState once clicking the next button.
 * Show the question from the shuffled question.
 * Hide the explanation.
 * hide the answer image from the previous question.
 */
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

/**
 * Show the question from myQuestions array. 
 * For each answer, create a button to have the text from the answer in the myQuestion array. 
 * Those newly created button should have the btn class added for styling.
 * Check the answer.correct property and if the answer is correct, set dataset.correct to true.
 * Call the selectAnswer function once the button is clicked.
 */
function showQuestion(myQuestions) {
    questionElement.innerText = myQuestions.question;
    myQuestions.answers.forEach(answer => {
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
 * Remove class clicked from the answer button.
 * Remove classes related with showing answer image from the answerImage.
 */
function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    answerButtonsElement.classList.remove('clicked');
    answerImage.classList.remove('anna', 'giraffe', 'toy', 'sticker', 'argentina');
}

/**
 * Show the answer image by removing class hidden.
 * Check if the button has already been clicked and if it is, 
 * then return and does not execute further code. This is to prevent clicking multiple times.
 * 
 * Add 'clicked' class to the selected answer button.
 * Add class bold to the selected button for button styling.
 * Function setStatusClass and see if the body is set to correct.
 * Convert the answers as an array and check if each button has dataset correct. 
 * 
 * For the correct answer image, match the answer images to each question,
 * and once the user clicks any answer from that question, the answer image will show up.
 * 
 * If we have more question to show, then show the next button.
 * If not (shuffle question index == current question index +1), 
 * have the start button to change the text to restart, 
 * and make the start button show up.
 * 
 * Show the explanation of the currentquestionindex's explain text.
 * 
 * Increment correct score when the correct is true,
 * else, increment the wrong score. 
 */
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

    if (questionElement.innerText === `What is the name of Ellie's mother? (We never meet but it is mentioned somewhere...)`) {
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

/**
 * By passing through the function clearStatusClass,
 * check if it is correct then add class correct,
 * or not, add class wrong.
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Function for clearing the element correct and wrong
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
/**
 * Increment score by +1 when correct answer was selected
 */
function incrementScore() {
    const oldScore = parseInt(document.getElementById('correct-num').innerText);
    document.getElementById('correct-num').innerText = oldScore +1;
}

/**
 * Increment score by +1 when incorrect answer was selected
 */
function incrementWrongScore() {
    const oldScore = parseInt(document.getElementById('incorrect-num').innerText);
    document.getElementById('incorrect-num').innerText = oldScore +1;
}