let level = "Начальный";
let correctCount = 0;
let wrongCount = 0;
let questionCount = 0;
let currentQuestion = {};
let timer;
let timeElapsed = 0;
const maxWrongAnswers = 3;

document.addEventListener('DOMContentLoaded', (event) => {
    startGame();
    startTimer();
});

function startGame() {
    const submitButton = document.querySelector('button[onclick="checkAnswer()"]');
    if (submitButton) {
        submitButton.style.display = 'block';
    }

    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.style.display = 'none';
    }

    level = "Начальный";
    correctCount = 0;
    wrongCount = 0;
    questionCount = 0;
    timeElapsed = 0;

    const levelElement = document.getElementById('current-level');
    if (levelElement) {
        levelElement.innerText = level;
    }

    const correctElement = document.getElementById('correct');
    if (correctElement) {
        correctElement.innerText = correctCount;
    }

    const wrongElement = document.getElementById('wrong');
    if (wrongElement) {
        wrongElement.innerText = wrongCount;
    }

    document.getElementById('final-message').innerText = '';
    nextQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const timerElement = document.getElementById('time-elapsed');
        if (timerElement) {
            timerElement.innerText = formattedTime;
        }
    }, 1000);
}

function nextQuestion() {
    if (questionCount >= 10) {
        if (correctCount >= 8) {
            if (level === "Начальный") {
                level = "Средний";
            } else if (level === "Средний") {
                level = "Продвинутый";
            } else {
                endGame(true);
                return;
            }

            correctCount = 0;
            wrongCount = 0;
            questionCount = 0;

            const correctElement = document.getElementById('correct');
            if (correctElement) {
                correctElement.innerText = correctCount;
            }
            
            const wrongElement = document.getElementById('wrong');
            if (wrongElement) {
                wrongElement.innerText = wrongCount;
            }
        } else {
            endGame(false);
            return;
        }
    }

    const levelElement = document.getElementById('current-level');
    if (levelElement) {
        levelElement.innerText = level;
    }

    questionCount++;

    switch (level) {
        case "Начальный":
            currentQuestion = generateArithmeticQuestion();
            break;
        case "Средний":
            currentQuestion = generateComparisonQuestion();
            break;
        case "Продвинутый":
            currentQuestion = generateAdvancedQuestion();
            break;
    }

    const questionElement = document.getElementById('question');
    if (questionElement) {
        questionElement.innerText = currentQuestion.question;
    }
}

function generateArithmeticQuestion() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question = `${a} ${operator} ${b}`;
    let answer;

    if (operator === '/' && b !== 0) {
        answer = (a / b).toFixed(2);
    } else {
        answer = eval(question).toString();
    }

    if (operator === '/' && b === 0) {
        return generateArithmeticQuestion();
    }

    return { question, answer: answer };
}


function generateComparisonQuestion() {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let operators = ['>', '<', '>=', '<=', '=='];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let question = `${a} ${operator} ${b}`;
    let answer = eval(question) ? '1' : '0'; 
    return { question, answer };
}

function generateAdvancedQuestion() {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let operators = ['&&', '||'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    let question = `(${a} % 2 === 0) ${operator} (${b} % 2 === 0)`;
    let answer = eval(question) ? '1' : '0';
    return { question, answer };
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    if (userAnswer === '') {
        alert('Пожалуйста, введите ваш ответ!');
        return;
    }

    const validAnswerPattern = /^-?\d+(\.\d+)?$/;
    if (!validAnswerPattern.test(userAnswer)) {
        alert('Пожалуйста, введите корректный числовой ответ!');
        return;
    }

    if (parseFloat(userAnswer).toFixed(2) === parseFloat(currentQuestion.answer).toFixed(2)) {
        correctCount++;
        const correctElement = document.getElementById('correct');
        if (correctElement) {
            correctElement.innerText = correctCount;
        }
    } else {
        wrongCount++;
        const wrongElement = document.getElementById('wrong');
        if (wrongElement) {
            wrongElement.innerText = wrongCount;
        }

        if (wrongCount >= 3) {
            endGame(false);
            return;
        }
    }

    document.getElementById('answer').value = '';
    nextQuestion();
}

function endGame(success) {
    clearInterval(timer);

    const submitButton = document.querySelector('button[onclick="checkAnswer()"]');
    if (submitButton) {
        submitButton.style.display = 'none';
    }

    const finalMessageElement = document.getElementById('final-message');
    if (finalMessageElement) {
        if (success) {
            finalMessageElement.innerText = 'Поздравляем! Вы прошли все уровни!';
        } else {
            finalMessageElement.innerText = 'Игра окончена. Попробуйте снова!';
        }
    }

    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.style.display = 'block';
    }
}

function restartGame() {
    startGame();
    startTimer();
}