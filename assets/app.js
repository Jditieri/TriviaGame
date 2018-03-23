function question(text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;

}

question.prototype.corrrectAnswer = function(choice) {
    return choice === this.answer;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex() .correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;

    function populate() {
        if(quiz.isEnded()) {
            showScores();
        }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess)
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
        gameOverHtml += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
}

var questions = [
    new question("What year did Walt Disney World open?", ["1955", "1982", "1971", "1998"], "1971"),
    new question("What was Mickey Mouse's original name?", ["Wally", "Steve", "Walt", "Mortimer"], "Mortimer"),
    new question("What Year did Disney's Animal Kingdom theme park open?", ["1997", "1998", "1999", "2000"], "1998"),
    new question("What is the name of the firt Pixar theatrical film?", ["A Bugs Life", "Monsters INC", "Toy Story", "The Incredibles"], "Toy Story"),
    new question("What was thhe name of the villain in Hercules?", ["Hades", "Maleficent", "Mother Gothel", "Hans of the Southern Isles"], "Hades"),
];

var quiz = new Quiz(questions);

populate();