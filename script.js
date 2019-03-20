// USER INPUTS for game customization
let numberOfQuestions = document.querySelector("#questionsAmount");
let category = document.querySelector('#category');
let difficulty = document.querySelector('#difficulty');
let startQuiz = document.querySelector('#startQuiz');
let yesButton = document.querySelector('#trueButton');
let noButton = document.querySelector('#falseButton');
let questionsAPI;
let game;


//START QUIZ button 
startQuiz.addEventListener('click', () => {

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        switch (request.readyState) {
            case 1:
                document.querySelector('.loader').style.display = 'block';
                break;
            case 4:
                questionsAPI = JSON.parse(request.responseText);
                questionsAPI = questionsAPI.results;
                game = new Game(questionsAPI);
                game.drawCurrentQuestion();
                document.querySelector('.gameSelect').style.display = 'none';
                document.querySelector('.game').style.display = 'block';
                document.querySelector('.loader').style.display = 'none';
        }
    };

    request.open('GET', 'https://opentdb.com/api.php?amount=' + numberOfQuestions.value + '&category=' + category.value + '&difficulty=' + difficulty.value + '&type=boolean');

    request.send();
})

yesButton.addEventListener('click', () => {
    game.selectAnswer('True');
})

noButton.addEventListener('click', () => {
    game.selectAnswer('False');
})

refresh.addEventListener('click', () => {
    window.location.reload();
})
