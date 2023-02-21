document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'start') {
                alert('You clicked START');
            } else {
                let btn = this.getAttribute('data-type');
                alert(`You clicked ${btn}`);
            }
        })
    }

})

let myQuestion = [{
        question: `What is the name of Ellie's mother?`,
        answers: {
            1: 'Sarah',
            2: 'Anna',
            3: 'Michela',
            4: 'Mia'
        },
        correctAnswer: '2'
    },
    {
        question: 'What animal constantly pops up in the background throughout the first game?',
        answers: {
            1: 'Wolf',
            2: 'Rabbit',
            3: 'Horse',
            4: 'Giraffe'
        },
        correctAnswer: '4'
    },
    {
        question: 'What item does Ellie keep of Sam\'s that can be seen in her room at the start of The Last of Us Part II?',
        answers: {
            1: 'PS3', 
            2: 'Cassette Player',
            3: 'Dinosaurs book',
            4: 'Toy robot'
        },
        correctAnswer: '4'
    },
    {
        question: 'Which of these buttons is NOT on Ellie\'s original backpack?',
        answers: {
            1: 'Giraffe sticker',
            2: 'Flag pin',
            3: 'Nuclear waste symbol',
            4: 'One-eyed monster plushie'
        },
        correctAnswer: '1'
    }, 
    {
        question: 'In the photograph of Joel and his daughter Sarah, what football shirt is she wearing?',
        answers: {
            1: 'England', 
            2: 'Brazil',
            3: 'Argentina',
            4: 'Netherland'
        },
        correctAnswer: '3'
    }
]

function startGame(question, answers) {

    //change the image related to the first question
    //display the question
    //display answer options
}

function nextGame() {
    //display to the next image for the question
    //display the next question
    //display the next select options
}

function resetGame() {
    //shuffle to the next game question
    //display the next question
    //display the next question image
    //display the next select options
}

function correctAnswer() {
    //change to the answer image
    //display green correct check icon
    //display text Correct!
    //display explanation to the answer
    //display the correct answer option with green text color
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