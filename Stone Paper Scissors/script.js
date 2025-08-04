let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const playAgainBtn = document.querySelector("#again");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showComp = document
const animation = document.querySelector("choice-shadow");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playAgain = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Game reset! Let's play again.";
    msg.style.backgroundColor = "#081b31";
    
    // // Add animation class
    // msg.classList.add("restart-animate");

    // // Remove it after animation completes
    // setTimeout(() => {
    //     msg.classList.remove("restart-animate");
    // }, 600); // matches animation duration
};

const drawGame = () => {
    msg.innerText = "It's a Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! \n(Your ${userChoice} beats ${compChoice})`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost :( \n(${compChoice} beats your ${userChoice})`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
       //Draw Game
       drawGame();
    }else if(userChoice === playAgainBtn){
        //Play Again
        playAgain();
    }else {
        let userWin = true;
        if(userChoice === "Rock") {
            //Paper, Scissors
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper") {
            //Rock, Scissors
            userWin = compChoice === "Scissors" ? false : true;
        }else {
            //Rock, Paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

playAgainBtn.addEventListener("click", () => {
    playAgain();
});
