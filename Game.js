class Game {


    constructor(questions) {
        this.questions = questions;
        this.gameData = {
            score: 0,
            currentQuestion: 0,
        }

    }


    drawCurrentQuestion() {
        let questionElement = document.querySelector('.question');
        questionElement.innerHTML = this.questions[this.gameData.currentQuestion].question;

        document.querySelector('#questionNr').innerHTML = `Question Nr.  ${this.gameData.currentQuestion + 1}`;

        document.querySelector('#score').innerHTML = `Score:  ${this.gameData.score}/${this.questions.length}`;


    }

    selectAnswer(option) {
        let correctAnswer = this.questions[this.gameData.currentQuestion].correct_answer;

        if (option === correctAnswer) {
            this.gameData.score++;
        }

        if (this.gameData.currentQuestion + 1 < this.questions.length) {
            this.gameData.currentQuestion++;
            this.drawCurrentQuestion();
        } else {
            document.querySelector('.game').style.display = 'none';
            document.querySelector('.results').style.display = 'block';
        }


    }

}
