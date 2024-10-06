//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("ques-container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let startImage = document.getElementById("start-image");
let questionCount;
let totalQuestions = 10;
let scoreCount = 0;
let count = 31;
let countdown;


// Function to display image for a specific duration
function displayImageForDuration(duration) {
    const startImage = document.getElementById("start-image");
    const landingPage = document.getElementsByClassName("landingpage")[0];
    startImage.style.display = "block"; // Show the image

    setTimeout(() => {
        startImage.style.display = "none"; // Hide the image after the duration
        landingPage.style.display = "none";
        // Show the quiz content after hiding the image
        let date = new Date();
        if (date.getHours() > 23) {
        }
        else {
            // document.querySelector(".prize-button").classList.remove("hide");
            startScreen.classList.remove("hide");
        }
    }, duration);
}

// Call the function to display the image for 10 seconds (10000 milliseconds)

document.addEventListener("DOMContentLoaded", function () {
    const UserNameInput = document.getElementById('UserName');
    const PasswordInput = document.getElementById('Password');

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function checkInputs() {
        const UserNameValue = UserNameInput.value.trim();
        const PasswordValue = PasswordInput.value.trim();

        if (validateEmail(UserNameValue) && PasswordValue !== '' && PasswordValue.length == 10) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    }

    UserNameInput.addEventListener('input', checkInputs);
    PasswordInput.addEventListener('input', checkInputs);
});

//when user click on start button
startButton.addEventListener("click", async () => {
    const userdata = {
        UserName: document.getElementById('UserName').value.trim(),
        Password: document.getElementById('Password').value.trim()
    }
    // console.log(userdata);
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })

    const data = await response.json();
    questionCount = data.Currcount;
    scoreCount = data.Score;
    
    if (response.status === 400) {
        Swal.fire({
            icon: 'info',
            title: 'Thank You',
            html: `But Registrations Are Closed <div style="width:100%;display:flex;align-items:center;justify-content:center;"> Follow Ethiccraft  <a href="https://www.instagram.com/ethiccraft_ymca/"><i class="fab fa-instagram fa-2x" style="color: rgb(212, 43, 212)"></i></a> </div>`,
        })
        console.log("UserName Is Incorrect");
    }
    else if (response.status === 401) {
        Swal.fire({
            icon: 'info',
            title: 'check Username and Password provided',
            // html: `<div style="width:100%;display:flex;align-items:center;justify-content:center;"> Follow Ethiccraft  <a href="https://www.instagram.com/ethiccraft_ymca/"><i class="fab fa-instagram fa-2x" style="color: rgb(212, 43, 212)"></i></a> </div>`,
        })
        console.log("UserName and Password do not match");
    }
    else if (response.status === 404) {
        Swal.fire({
            icon: 'info',
            title: 'already given the Quiz',
            html: `Follow for Results <div style="width:100%;display:flex;align-items:center;justify-content:center;"> Follow Ethiccraft  <a href="https://www.instagram.com/ethiccraft_ymca/"><i class="fab fa-instagram fa-2x" style="color: rgb(212, 43, 212)"></i></a> </div>`,
        })
        console.log("UserName and Password do not match");
    }
    else {
        console.log(response.status);
        console.log("You have not submitted the Quiz");
        startScreen.classList.add("hide");
        displayContainer.classList.remove("hide");
        initial();
    }

});

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
    nextBtn.disabled = true;
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions

    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {

        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = (questionCount + 1) + " of " + totalQuestions + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>`;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {


    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //remove selected class from all options
    options.forEach((element) => {
        element.classList.remove("selected");
    });
    userOption.classList.add("selected");
    //if user clicked answer == correct option stored in object

    nextBtn.disabled = false;

}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    // questionCount = 0;
    // scoreCount = 0;
    count = 31;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//Next Button
nextBtn.addEventListener("click", (displayNext = () => {

    if (questionCount > totalQuestions) {
        return;
    }
    //get user selected option
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    let userSolution = "";
    options.forEach((element) => {
        if (element.classList.contains("selected")) {
            userSolution = element.innerHTML;
        }
    });

    if (userSolution === quizArray[questionCount].correct) {
        scoreCount++;
    }

    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == totalQuestions) {
        //hide question container and display score
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        //user score
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;

        // progress bar
        let progress = document.getElementsByClassName("progress")[0];
        progress.style.width = scoreCount / totalQuestions * 100 + "%";

    } else {
        //display questionCount
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + totalQuestions + " Question";
        //display quiz
        quizDisplay(questionCount);
        count = 31;
        clearInterval(countdown);
        timerDisplay();
    }

    //update score in database
    const userdata = {
        UserName: document.getElementById('UserName').value.trim(),
        Currcount: questionCount,
        Score: scoreCount
    }
    fetch('/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(userdata)
    })
        .then(response => {
            console.log(response);
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}));

window.addEventListener("load", (event) => {
    displayImageForDuration(1000);
    var date = new Date();
    if (date.getHours() > 23) {
        Swal.fire({
            icon: "info",
            html: `<b>Thank you</b> for participating in Gita quiz <br>For <b>results</b>, refer to : <div style="width:100%;display:flex;align-items:center;justify-content:center;gap:10px;"><a href="https://www.instagram.com/ethiccraft_ymca/"><i class="fab fa-instagram fa-3x" style="color: rgb(212, 43, 212)"></i></a> <a href="https://chat.whatsapp.com/DQKhsidjLyM2SQ26MEaFHT"><i class="fab fa-whatsapp fa-3x" style="color: green"></i></a> </div> @December, 26`,
        });
    }
    else {
        Swal.fire({
            title: "<i>Please Read Carefully</i>",
            html: "1. There will be 20 questions.<br>2. Each question will have 4 options.<br>3. You have 30 seconds to answer each question.<br>4. After submitting please join the whatsapp group!<br>5. <b>Do not refresh the page</b>",
            confirmButtonText: "<u>Done</u>",
            confirmButtonColor: "#00b300",
            allowOutsideClick: false,
        });
    }
});
